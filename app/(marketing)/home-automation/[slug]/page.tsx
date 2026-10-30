import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductPage } from '@/components/products/ProductPage'
import {
  getHomeAutomationProduct,
  getAllHomeAutomationSlugs,
} from '@/lib/content/copy/homeAutomation'
import { SITE_URL } from '@/lib/content/site'

export function generateStaticParams() {
  return getAllHomeAutomationSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const p = getHomeAutomationProduct(slug)
  if (!p) return {}
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: { canonical: `${SITE_URL}/home-automation/${slug}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url: `${SITE_URL}/home-automation/${slug}`,
    },
  }
}

export default async function HomeAutomationProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const p = getHomeAutomationProduct(slug)
  if (!p) notFound()

  return (
    <ProductPage
      p={p}
      slug={slug}
      basePath="home-automation"
      imageDir="home-automation"
      contactService={p.contactService ?? 'home-automation'}
      schemaIdPrefix="home-automation"
      guidesCluster="home-automation"
      parentName="Home Automation"
      finalCta={{
        headline: 'Automate the parts of your home you actually use.',
        sub: 'Free site survey across Kerala. Fixed written quote before you commit, and a straight answer about what each model can and cannot do.',
      }}
      // Only ever rendered once a price slot is filled; see entrancePricing.ts.
      offerDescription={(rowLabel) =>
        `${rowLabel} installed by ITSolute across Kerala. Starting price includes GST.`
      }
    />
  )
}
