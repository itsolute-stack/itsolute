'use client'

import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/gtag'

/**
 * Fires GA4 `pricing_view` when the pricing section is at least half on
 * screen — the signal that a visitor actually looked at the prices rather
 * than scrolling past them.
 *
 * Wraps the section rather than sitting beside it, so the observed element is
 * unambiguously the pricing block. Renders a plain <div> with no styling of
 * its own, so it adds no box and cannot shift layout. Fires once, then
 * disconnects.
 */
export function PricingView({
  page,
  children,
}: {
  /** 'gate' | 'barrier' — reported as the `page` param. */
  page: 'gate' | 'barrier'
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Guard against environments without IO rather than throwing.
    if (typeof IntersectionObserver === 'undefined') return

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          // Either measure counts as "looked at the prices":
          //   - the section fills at least 40% of the viewport, which is what
          //     happens on a phone where the section is taller than the screen
          //   - or at least half of the section is on screen, which is what
          //     happens on a desktop where it fits
          const fillsViewport =
            e.intersectionRect.height >= window.innerHeight * 0.4
          const mostlyVisible = e.intersectionRatio >= 0.5
          if (fillsViewport || mostlyVisible) {
            trackEvent('pricing_view', { page })
            io.disconnect()
            return
          }
        }
      },
      // Several thresholds so the callback runs as the section scrolls
      // through, not only when it crosses one ratio. With a single 0.5
      // threshold the callback never ran on mobile, because a section taller
      // than the viewport can never be 50% visible — so pricing_view never
      // fired on phones, which is most of the paid traffic.
      { threshold: [0, 0.1, 0.25, 0.5] },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [page])

  return <div ref={ref}>{children}</div>
}
