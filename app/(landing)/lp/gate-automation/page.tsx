import type { Metadata } from 'next'
import { LandingPage } from '@/components/lp/LandingPage'
import { SITE_URL } from '@/lib/content/site'
import { lpGateAutomation, resolveDistrict, withDistrict } from '@/lib/content/copy/landing'

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
  const title = withDistrict(lpGateAutomation.title, name)
  const description = lpGateAutomation.sub
  const image = `${SITE_URL}${lpGateAutomation.heroImage.src}`

  return {
    title: { absolute: title },
    description,
    // Set per page — without these the share preview inherited the root
    // layout's "Business laptops, software…" copy, which is the wrong pitch
    // entirely for an entrance-automation ad click.
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/lp/gate-automation`,
      images: [{ url: image, alt: lpGateAutomation.heroImage.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
    // Self-canonical. Without this the page inherits the root layout's
    // canonical (the homepage), which would tell crawlers this is a
    // duplicate of / — a confusing signal next to noindex. Query params
    // (?d=, gclid, utm_*) are deliberately dropped.
    alternates: { canonical: `${SITE_URL}/lp/gate-automation` },
  }
}

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { d } = await searchParams
  const { name } = resolveDistrict(d)
  return <LandingPage page={lpGateAutomation} district={name} />
}
