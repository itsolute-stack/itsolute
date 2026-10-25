'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/gtag'
import { trackLead } from '@/lib/fbq'

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
 *
 * The same delegated listener also reports the Meta Pixel "Lead" event for
 * call and WhatsApp taps. Doing it here rather than on each button means a
 * contact link added anywhere on the site — marketing pages, blog posts, or
 * the /lp/* landing pages — is covered without being wired up individually,
 * and there is no button left to forget. Form submissions are NOT handled
 * here; they report Lead from their own success paths, so a failed submit is
 * never counted.
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
      const location = locationOf(link)
      if (href.startsWith('tel:')) {
        trackEvent('call_click', { location })
        trackLead('call')
      } else if (href.includes('wa.me')) {
        trackEvent('whatsapp_click', { location })
        // The blog's share button is a wa.me link too, but sharing an article
        // is not a lead — counting it would inflate Lead and poison any
        // lookalike audience built from it.
        if (location !== 'blog_share') trackLead('whatsapp')
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
