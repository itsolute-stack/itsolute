import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductPage } from '@/components/products/ProductPage'
import Link from 'next/link'
import { ArrowRight, Check, MapPin } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import {
  getBangaloreService,
  getAllBangaloreServiceSlugs,
  GATE_INCLUDED,
} from '@/lib/content/copy/bangaloreServices'
import {
  getBangaloreArea,
  getAllBangaloreAreaSlugs,
} from '@/lib/content/copy/bangaloreAreas'
import { AreaPage } from '@/components/bangalore/AreaPage'
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

/**
 * Which areas each service page points back to. Capped at three so the block
 * stays a recommendation rather than a sitemap, and chosen for where that
 * product actually gets installed rather than listing every area each time.
 */
const SERVICE_AREAS: Record<string, string[]> = {
  'gate-automation': ['whitefield', 'sarjapur-road', 'hsr-bellandur'],
  'sliding-gate-automation': ['sarjapur-road', 'hsr-bellandur', 'electronic-city'],
  'swing-gate-automation': ['south-bangalore', 'hsr-bellandur', 'north-bangalore'],
  'roller-gate-automation': ['north-bangalore', 'south-bangalore'],
  'boom-barriers': ['whitefield', 'electronic-city', 'north-bangalore'],
  'gate-repair-amc': ['south-bangalore', 'whitefield', 'electronic-city'],
  'video-door-phones': ['whitefield', 'sarjapur-road'],
  'smart-door-locks': ['hsr-bellandur', 'whitefield'],
}

export function generateStaticParams() {
  return [...getAllBangaloreServiceSlugs(), ...getAllBangaloreAreaSlugs()].map(
    (slug) => ({ slug }),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = getBangaloreService(slug) ?? getBangaloreArea(slug)
  if (!entry) return {}
  return {
    title: { absolute: entry.metaTitle },
    description: entry.metaDescription,
    alternates: { canonical: `${SITE_URL}/bangalore/${slug}` },
    openGraph: {
      title: entry.metaTitle,
      description: entry.metaDescription,
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

  // Areas and services share this segment; areas resolve second because a
  // service slug is the more specific thing a visitor types.
  const area = getBangaloreArea(slug)
  if (area) return <AreaPage area={area} />

  const p = getBangaloreService(slug)
  if (!p) notFound()

  const areaLinks = (SERVICE_AREAS[slug] ?? [])
    .map((a) => getBangaloreArea(a))
    .filter((a): a is NonNullable<typeof a> => a !== null)

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
      ctaPrefix="blr"
      areaServed={BENGALURU_AREA_SERVED}
      finalCta={{
        headline: 'Get your Bengaluru entrance surveyed.',
        sub: 'Free site survey across the city. Fixed written quote before you commit, and prices that include GST.',
      }}
      extraSection={
        <>
          {included}
          {areaLinks.length > 0 ? (
            <Section theme="light" size="md">
              <Container>
                <SectionHeader
                  eyebrow="AREAS WE COVER"
                  headline="Where we install this most."
                />
                <div className="mt-10 flex flex-wrap gap-3">
                  {areaLinks.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/bangalore/${a.slug}`}
                      className="group inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-base font-medium text-[color:var(--color-ink)] transition-all hover:border-[color:var(--color-electric)]"
                    >
                      <MapPin aria-hidden className="h-4 w-4 text-[color:var(--color-electric)]" />
                      {a.areaName}
                      <ArrowRight
                        aria-hidden
                        className="h-4 w-4 text-[color:var(--color-electric)] transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  ))}
                </div>
              </Container>
            </Section>
          ) : null}
        </>
      }
      offerDescription={(rowLabel) =>
        `${rowLabel} installed by ITSolute across Bengaluru, with safety sensors and 2 remotes in the kit. Starting price includes GST.`
      }
    />
  )
}
