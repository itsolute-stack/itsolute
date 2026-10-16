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
          if (e.isIntersecting) {
            trackEvent('pricing_view', { page })
            io.disconnect()
            return
          }
        }
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [page])

  return <div ref={ref}>{children}</div>
}
