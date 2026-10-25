/**
 * Meta Pixel (Facebook) event helpers.
 *
 * The base pixel is loaded in app/layout.tsx, gated on
 * NEXT_PUBLIC_META_PIXEL_ID. When that variable is unset the script never
 * loads, so `window.fbq` is undefined and every helper here is a safe no-op —
 * which is exactly what happens in local development unless you opt in by
 * setting the variable in .env.local.
 *
 * Deliberately separate from lib/gtag.ts: these report to Meta only, carry no
 * Google identifiers, and must never throw into the interaction they report.
 */

/** The global `fbq` installed by the base pixel snippet. */
type FbqFn = (...args: unknown[]) => void

function getFbq(): FbqFn | null {
  if (typeof window === 'undefined') return null
  const fbq = (window as unknown as { fbq?: FbqFn }).fbq
  return typeof fbq === 'function' ? fbq : null
}

/**
 * Standard Meta "Lead" event.
 *
 * `source` identifies which control produced the lead and is sent as
 * `content_name`, so Events Manager can tell a form submission from a
 * WhatsApp tap from a phone tap. Conventions in use:
 *   form-contact, form-lp-gate, form-lp-barrier, whatsapp, call
 *
 * Fires on every call — the caller owns any de-duplication. Form submissions
 * guard themselves to once per submission; WhatsApp and call taps intentionally
 * report each tap, so placements can be compared.
 */
export function trackLead(source: string): void {
  const fbq = getFbq()
  if (!fbq) return
  try {
    fbq('track', 'Lead', { content_name: source })
  } catch {
    // Tracking must never break the action it is reporting.
  }
}

/**
 * Standard Meta "PageView" event.
 *
 * The base snippet already fires one PageView for the initial document load.
 * This exists for client-side route changes, where no new document loads and
 * the pixel would otherwise record a single page view for a whole session.
 * See components/analytics/MetaPixelPageViews.tsx.
 */
export function trackPageView(): void {
  const fbq = getFbq()
  if (!fbq) return
  try {
    fbq('track', 'PageView')
  } catch {
    // Tracking must never break navigation.
  }
}
