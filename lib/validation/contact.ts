import { z } from 'zod'

/**
 * Indian phone numbers. Accepts:
 *   - 10 digits starting with 6-9
 *   - Optional +91 / 91 / 0 prefix
 *   - Spaces, dashes, parentheses are stripped before validation
 */
const indianPhoneRegex = /^[6-9]\d{9}$/

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name').max(80),
  business: z.string().min(2, 'Please enter your business name').max(120),
  phone: z
    .string()
    .min(1, 'Phone number required')
    .transform((v) => v.replace(/[\s\-()]/g, '').replace(/^(\+91|91|0)/, ''))
    .refine((v) => indianPhoneRegex.test(v), 'Enter a valid Indian mobile number'),
  email: z.string().email('Enter a valid email'),
  service: z.string().min(1, 'Select a service'),
  message: z.string().min(10, 'Tell us a bit more (at least 10 characters)').max(2000),
  // Honeypot
  website: z.string().max(0).optional(),
})

export type ContactInput = z.infer<typeof contactSchema>
