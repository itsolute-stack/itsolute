import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductPage } from '@/components/products/ProductPage'
import { Check } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import {
  getBangaloreService,
  getAllBangaloreServiceSlugs,
  GATE_INCLUDED,
} from '@/lib/content/copy/bangaloreServices'
import { BENGALURU_BUSINESS_ID } from '@/lib/schema'
import { SITE_URL } from '@/lib/content/site'

/**
 * Bengaluru service pages at /bangalore/<slug>.
 *
 * Phase 3 adds area pages on this same path, so this route resolves a service
 * first and will fall through to the area registry once that exists. Keeping
 * both under one dynamic segment is deliberate: /bangalore/whitefield and
 * /bangalore/sliding-gate-automation are both things a visitor types after
 * "bangalore", and splitting them would need a segment nobody would guess.
 */
const BENGALURU_AREA_SERVED = [{ '@type': 'City', name: 'Bengaluru' }]

export function generateStaticParams() {
  return getAllBangaloreServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const p = getBangaloreService(slug)
  if (!p) return {}
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: { canonical: `${SITE_URL}/bangalore/${slug}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url: `${SITE_URL}/bangalore/${slug}`,
    },
  }
}

export default async function BangaloreServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const p = getBangaloreService(slug)
  if (!p) notFound()

  // Only the pages that publish a price need to say what that price buys.
  const included =
    p.pricing.rows.length > 0 ? (
      <Section theme="cream" size="md">
        <Container>
          <SectionHeader
            eyebrow="WHAT THE STARTING PRICE INCLUDES"
            headline="In the kit, not extra."
          />
          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {GATE_INCLUDED.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-5"
              >
                <Check
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-electric)]"
                  strokeWidth={2.5}
                />
                <span className="text-base leading-relaxed text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    ) : undefined

  return (
    <ProductPage
      p={p}
      slug={slug}
      basePath="bangalore"
      imageDir="bangalore"
      contactService={p.contactService ?? 'entrance-automation'}
      schemaIdPrefix="bangalore"
      guidesCluster="karnataka"
      parentName="Bengaluru"
      // The Bengaluru branch delivers these, not the Kottayam head office.
      providerId={BENGALURU_BUSINESS_ID}
      areaServed={BENGALURU_AREA_SERVED}
      finalCta={{
        headline: 'Get your Bengaluru entrance surveyed.',
        sub: 'Free site survey across the city. Fixed written quote before you commit, and prices that include GST.',
      }}
      extraSection={included}
      offerDescription={(rowLabel) =>
        `${rowLabel} installed by ITSolute across Bengaluru, with safety sensors and 2 remotes in the kit. Starting price includes GST.`
      }
    />
  )
}
