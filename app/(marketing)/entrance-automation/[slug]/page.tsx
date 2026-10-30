import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ProductPage } from '@/components/products/ProductPage'
import {
  getEntranceProduct,
  getAllEntranceSlugs,
} from '@/lib/content/copy/entranceAutomation'
import { entranceDistricts } from '@/lib/content/copy/entranceDistricts'
import { SITE_URL } from '@/lib/content/site'

export function generateStaticParams() {
  return getAllEntranceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const p = getEntranceProduct(slug)
  if (!p) return {}
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: { canonical: `${SITE_URL}/entrance-automation/${slug}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url: `${SITE_URL}/entrance-automation/${slug}`,
    },
  }
}

export default async function EntranceProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const p = getEntranceProduct(slug)
  if (!p) notFound()

  return (
    <ProductPage
      p={p}
      slug={slug}
      basePath="entrance-automation"
      imageDir="entrance-automation"
      contactService={p.contactService ?? 'entrance-automation'}
      schemaIdPrefix="entrance"
      guidesCluster="entrance-automation"
      parentName="Entrance Automation"
      finalCta={{
        headline: 'Automate your entrance the way that lasts.',
        sub: 'Free site survey across Kerala. Fixed written quote before you commit. Safe, connected, and backed by AMC.',
      }}
      offerDescription={(rowLabel) =>
        `${rowLabel} installed by ITSolute across Kerala, with safety sensors and battery backup as standard. Starting price includes GST.`
      }
      extraSection={
        <Section theme="light" size="md">
          <Container>
            <SectionHeader
              eyebrow="AREAS WE SERVE"
              headline="Serving Kottayam, Ernakulam, Pathanamthitta and Alappuzha."
              sub="Pick your district for the towns we cover and answers specific to your area."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              {Object.values(entranceDistricts).map((d) => (
                <Link
                  key={d.slug}
                  href={`/entrance-automation/${d.slug}`}
                  className="group inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-base font-medium text-[color:var(--color-ink)] transition-all hover:border-[color:var(--color-electric)]"
                >
                  {d.district}
                  <ArrowRight className="h-4 w-4 text-[color:var(--color-electric)] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      }
    />
  )
}
