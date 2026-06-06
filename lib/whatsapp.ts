/**
 * Build a wa.me link with an optional prefilled message.
 * Phone number comes from NEXT_PUBLIC_WHATSAPP_NUMBER (digits only, with country code).
 */
export function whatsappLink(message?: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '917034455665'
  const base = `https://wa.me/${number}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export const PHONE_DISPLAY = '+91 70344 55665'
export const PHONE_TEL = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? '+917034455665'
