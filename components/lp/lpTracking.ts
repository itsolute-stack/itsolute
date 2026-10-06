'use client'

import { trackLeadConversion, trackWhatsAppClick, trackCallClick } from '@/lib/gtag'

/**
 * Conversion guards for the landing pages.
 *
 * Module-scoped rather than per-component because each conversion must fire
 * once per page session no matter which control triggered it — a page has two
 * copies of the quote form plus WhatsApp buttons in the top bar, hero, sticky
 * bar and success state. Guarding inside each component would let the same
 * lead be counted several times.
 */
let leadFired = false
let whatsappFired = false
let callFired = false

/** Form success, or the WhatsApp fallback after a failed submit. Once only. */
export function fireLeadOnce(): void {
  if (leadFired) return
  leadFired = true
  trackLeadConversion()
}

export function fireWhatsAppOnce(): void {
  if (whatsappFired) return
  whatsappFired = true
  trackWhatsAppClick()
}

export function fireCallOnce(): void {
  if (callFired) return
  callFired = true
  trackCallClick()
}

/** Test-only: lets the verification spy re-arm the guards between checks. */
export function __resetLpGuards(): void {
  leadFired = false
  whatsappFired = false
  callFired = false
}

const ATTRIBUTION_KEY = 'lp_attribution'
const TRACKED_PARAMS = [
  'gclid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'd',
] as const

/**
 * Ad attribution, captured on first load and kept in sessionStorage so it
 * survives scrolling and the form's steps — the params are only in the URL
 * when the visitor first lands.
 */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return
  try {
    const url = new URL(window.location.href)
    const existing = readAttribution()
    const next: Record<string, string> = { ...existing }
    for (const key of TRACKED_PARAMS) {
      const v = url.searchParams.get(key)
      if (v) next[key] = v.slice(0, 200)
    }
    next.landing_page = url.pathname
    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(next))
  } catch {
    // Private mode / blocked storage — attribution is best-effort, never fatal.
  }
}

export function readAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_KEY)
    return raw ? (JSON.parse(raw) as Record<string, string>) : {}
  } catch {
    return {}
  }
}
