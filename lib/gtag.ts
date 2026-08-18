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
