'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView } from '@/lib/fbq'

/**
 * Fires a Meta Pixel PageView on client-side route changes.
 *
 * This is an App Router SPA: navigating between pages never loads a new
 * document, so the base pixel's own PageView fires once for the whole session.
 * Without this, Events Manager would show one page view per visit no matter how
 * many pages were read.
 *
 * Deliberately skips its first effect run. On initial load the base snippet has
 * already sent PageView, and firing again here would count every landing twice.
 *
 * usePathname only — not useSearchParams, which forces the nearest Suspense
 * boundary to opt out of static rendering. Query-only changes (e.g. the blog's
 * ?cluster= filter) are the same page and do not need their own page view.
 *
 * Renders nothing, so it cannot affect layout or LCP.
 */
export function MetaPixelPageViews() {
  const pathname = usePathname()
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    trackPageView()
  }, [pathname])

  return null
}
