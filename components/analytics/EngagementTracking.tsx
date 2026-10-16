'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/gtag'

/**
 * Site-wide GA4 engagement tracking: call/WhatsApp clicks and scroll depth.
 *
 * Mounted once in the root layout. Everything here runs after hydration, binds
 * passively, and renders no DOM — so it cannot affect LCP or shift layout.
 *
 * CLICKS are handled by a single delegated listener rather than per-button
 * handlers. That way a link added anywhere on the site is tracked for free,
 * and there is no chance of a button being missed or double-bound. It listens
 * in the capture phase so it still sees the click if something downstream
 * stops propagation, and it never calls preventDefault — the link navigates
 * exactly as it would have.
 *
 * This is deliberately separate from the Google Ads conversion helpers in
 * lib/gtag.ts, which stay guarded to once per session. These GA4 events fire
 * on every click, because the whole point is comparing which placements get
 * used.
 */

/** Where the click happened, read from the nearest ancestor-or-self. */
function locationOf(el: Element): string {
  const tagged = el.closest('[data-location]')
  return tagged?.getAttribute('data-location') || 'unknown'
}

export function EngagementTracking() {
  useEffect(() => {
    // ---- clicks (delegated, capture phase) ----
    function onClick(e: MouseEvent) {
      const target = e.target
      if (!(target instanceof Element)) return
      const link = target.closest('a')
      if (!link) return

      const href = link.getAttribute('href') ?? ''
      if (href.startsWith('tel:')) {
        trackEvent('call_click', { location: locationOf(link) })
      } else if (href.includes('wa.me')) {
        trackEvent('whatsapp_click', { location: locationOf(link) })
      }
    }
    document.addEventListener('click', onClick, { capture: true })

    // ---- scroll depth ----
    // One passive listener, rAF-throttled, one flag per threshold so each
    // fires at most once per page load.
    let fired50 = false
    let fired90 = false
    let queued = false

    function measure() {
      queued = false
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable <= 0) return
      const pct = (window.scrollY / scrollable) * 100
      if (!fired50 && pct >= 50) {
        fired50 = true
        trackEvent('scroll_50')
      }
      if (!fired90 && pct >= 90) {
        fired90 = true
        trackEvent('scroll_90')
        // Both thresholds reached — stop listening.
        window.removeEventListener('scroll', onScroll)
      }
    }

    function onScroll() {
      if (queued) return
      queued = true
      window.requestAnimationFrame(measure)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      document.removeEventListener('click', onClick, { capture: true })
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
