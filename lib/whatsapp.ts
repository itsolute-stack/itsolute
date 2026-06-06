import { SITE } from './content/site'

/**
 * Build a wa.me link with an optional prefilled message.
 * Number resolution: NEXT_PUBLIC_WHATSAPP_NUMBER env var → SITE constant fallback.
 */
export function whatsappLink(message?: string): string {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? SITE.contact.whatsappNumber
  const base = `https://wa.me/${number}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export const PHONE_DISPLAY = SITE.contact.phoneDisplay
export const PHONE_TEL =
  process.env.NEXT_PUBLIC_PHONE_NUMBER ?? SITE.contact.phoneTel
