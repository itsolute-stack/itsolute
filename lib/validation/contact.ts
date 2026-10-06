import { z } from 'zod'

/**
 * Indian phone numbers. Accepts:
 *   - 10 digits starting with 6-9
 *   - Optional +91 / 91 / 0 prefix
 *   - Spaces, dashes, parentheses are stripped before validation
 */
const indianPhoneRegex = /^[6-9]\d{9}$/

/**
 * Shared by the site contact form and the Google Ads landing pages.
 *
 * `business` and `email` are optional at the schema level because the landing
 * page forms deliberately ask for neither — every extra field costs completions
 * on paid traffic. They are still REQUIRED for the main contact form, enforced
 * by the superRefine below: a submission without `source` is treated as the
 * site form and must carry both. That keeps the existing form's server-side
 * validation exactly as strict as it was.
 */
export const contactSchema = z
  .object({
    name: z.string().min(2, 'Please enter your name').max(80),
    business: z.string().max(120).optional(),
    phone: z
      .string()
      .min(1, 'Phone number required')
      .transform((v) => v.replace(/[\s\-()]/g, '').replace(/^(\+91|91|0)/, ''))
      .refine((v) => indianPhoneRegex.test(v), 'Enter a valid Indian mobile number'),
    email: z.string().email('Enter a valid email').optional(),
    service: z.string().min(1, 'Select a service'),
    message: z.string().min(10, 'Tell us a bit more (at least 10 characters)').max(2000),
    /** Honeypot — must stay empty; the route silently drops anything that fills it. */
    website: z.string().max(0).optional(),
    /** Set by the landing pages only: 'lp-gate' | 'lp-barrier'. */
    source: z.string().max(40).optional(),
    /**
     * Ad attribution captured on the landing pages — gclid, utm_*, landing
     * path, district. Values are clamped and the object is size-limited so a
     * crafted URL can't stuff the lead email.
     */
    meta: z.record(z.string().max(40), z.string().max(200)).optional(),
  })
  .superRefine((val, ctx) => {
    if (val.source) return // landing page lead — name + phone are enough
    if (!val.business || val.business.trim().length < 2) {
      ctx.addIssue({
        code: 'custom',
        path: ['business'],
        message: 'Please enter your business name',
      })
    }
    if (!val.email) {
      ctx.addIssue({ code: 'custom', path: ['email'], message: 'Enter a valid email' })
    }
  })

export type ContactInput = z.infer<typeof contactSchema>
