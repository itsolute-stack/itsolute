import type { Metadata } from 'next'
import { LandingPage } from '@/components/lp/LandingPage'
import { SITE_URL } from '@/lib/content/site'
import { lpBoomBarrier, resolveDistrict, withDistrict } from '@/lib/content/copy/landing'

type SearchParams = Promise<{ d?: string | string[] }>

/**
 * Google Ads landing page — paid traffic only.
 *
 * noindex/nofollow, absent from the sitemap, and linked from nowhere on the
 * site. The SEO page for this service lives under /entrance-automation and is
 * the one that should rank.
 */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams
}): Promise<Metadata> {
  const { d } = await searchParams
  const { name } = resolveDistrict(d)
  return {
    title: { absolute: withDistrict(lpBoomBarrier.title, name) },
    description: lpBoomBarrier.sub,
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
    // Self-canonical. Without this the page inherits the root layout's
    // canonical (the homepage), which would tell crawlers this is a
    // duplicate of / — a confusing signal next to noindex. Query params
    // (?d=, gclid, utm_*) are deliberately dropped.
    alternates: { canonical: `${SITE_URL}/lp/boom-barrier` },
  }
}

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { d } = await searchParams
  const { name } = resolveDistrict(d)
  return <LandingPage page={lpBoomBarrier} district={name} />
}
