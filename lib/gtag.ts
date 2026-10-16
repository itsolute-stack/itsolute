/**
 * Google Ads conversion tracking.
 *
 * The base gtag.js is loaded site-wide in app/layout.tsx (production only).
 * This helper fires a specific conversion. It safely no-ops when gtag isn't
 * present — e.g. local development, where the base tag is intentionally not
 * loaded, so test submissions never pollute conversion data.
 */

export const GOOGLE_ADS_ID = 'AW-18221570748'

/** "Lead form submitted" — fired on a successful contact-form submission. */
export const LEAD_CONVERSION_SEND_TO = 'AW-18221570748/8Y8YCJfmweMcELy13PBD'

type GtagFn = (...args: unknown[]) => void

/**
 * Fire the "Lead form submitted" Google Ads conversion exactly once.
 * Call this only after a genuine successful submission.
 */
export function trackLeadConversion(): void {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag
  if (typeof gtag !== 'function') return
  gtag('event', 'conversion', { send_to: LEAD_CONVERSION_SEND_TO })
}

/**
 * "Call click" — fired when a visitor taps a tel: button on a landing page.
 *
 * The conversion label is read from NEXT_PUBLIC_GADS_CALL_LABEL rather than
 * hard-coded, because the conversion action does not exist in Google Ads yet.
 * While the env var is unset this no-ops, so the call buttons work normally
 * and nothing bogus is reported. Set it to the full "AW-XXXXXXXX/LabelHere"
 * value once the action is created.
 */
export function trackCallClick(): void {
  if (typeof window === 'undefined') return
  const sendTo = process.env.NEXT_PUBLIC_GADS_CALL_LABEL
  if (!sendTo) return
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag
  if (typeof gtag !== 'function') return
  gtag('event', 'conversion', { send_to: sendTo, value: 1.0, currency: 'INR' })
}

/** "WhatsApp click" — fired when a visitor clicks the header/nav WhatsApp CTA. */
export const WHATSAPP_CLICK_SEND_TO = 'AW-18221570748/3OLnCJbPkO0cELy13PBD'

/**
 * Fire the "WhatsApp click" Google Ads conversion. Safe no-op if gtag isn't
 * loaded (e.g. local dev, where the base tag is production-only).
 */
export function trackWhatsAppClick(): void {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag
  if (typeof gtag !== 'function') return
  gtag('event', 'conversion', {
    send_to: WHATSAPP_CLICK_SEND_TO,
    value: 1.0,
    currency: 'INR',
  })
}

/**
 * Fire a GA4 custom event.
 *
 * No `send_to` is passed, so the event goes to every destination configured on
 * the page's Google tag. GA4 is attached to that tag from the Google Analytics
 * UI rather than configured in our code, so these events reach it
 * automatically — there is no measurement ID to wire up here.
 *
 * Separate from the Google Ads conversion helpers above, which stay exactly as
 * they are: those are guarded to fire once per session because a conversion
 * must not be double-counted. These analytics events fire on EVERY interaction
 * — otherwise a second click on a different button would be invisible and
 * placement comparisons would be wrong.
 *
 * Safely no-ops when gtag isn't loaded (local dev, or env vars unset). Never
 * throws, never blocks the interaction it's reporting.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag
  if (typeof gtag !== 'function') return
  try {
    gtag('event', name, { page_path: window.location.pathname, ...params })
  } catch {
    // Analytics must never break the page.
  }
}
