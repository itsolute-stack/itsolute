import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, MapPin } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { FinalCTA } from '@/components/home/FinalCTA'
import { FAQ } from '@/components/home/FAQ'
import {
  getKarnatakaCity,
  getAllKarnatakaCitySlugs,
  karnatakaCities,
  OUTSIDE_BENGALURU_NOTE,
} from '@/lib/content/copy/karnataka'
import { regionGateTierRows } from '@/lib/content/entrancePricing'
import { FindUsOnGoogle } from '@/components/bangalore/BangaloreReviews'
import { ENTRANCE_PRICE_NOTE } from '@/lib/content/copy/entranceDistricts'
import { SITE_URL } from '@/lib/content/site'
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  BENGALURU_BUSINESS_ID,
} from '@/lib/schema'

/**
 * Karnataka city pages.
 *
 * Deliberately NO LocalBusiness node and no address: there is no office in
 * these cities, and emitting a local business for one would be a claim we
 * cannot stand behind. The Service schema names Bengaluru as the provider,
 * which is the truth — the team travels from there.
 */
const TIERS = regionGateTierRows('karnataka')

export function generateStaticParams() {
  return getAllKarnatakaCitySlugs().map((city) => ({ city }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const c = getKarnatakaCity(city)
  if (!c) return {}
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    alternates: { canonical: `${SITE_URL}/karnataka/${city}` },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${SITE_URL}/karnataka/${city}`,
    },
  }
}

export default async function KarnatakaCityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const c = getKarnatakaCity(city)
  if (!c) notFound()

  const contactHref = `/contact?service=entrance-automation&loc=karnataka`

  return (
    <>
      <PageHero
        dataLocation="ka_hero"
        eyebrow={c.hero.eyebrow}
        headline={c.hero.headline}
        sub={c.hero.sub}
        primaryCta={{ label: 'Request a site survey', href: contactHref }}
        secondaryCta={{ label: 'WhatsApp us', message: c.whatsappMessage }}
      />

      {/* Served from Bengaluru — stated before anything else */}
      <Section theme="cream" size="md">
        <Container>
          <p className="inline-flex max-w-3xl items-start gap-3 rounded-lg border border-slate-200 bg-white px-6 py-5 text-base leading-relaxed text-[color:var(--color-ink)]">
            <MapPin aria-hidden className="mt-1 h-5 w-5 shrink-0 text-[color:var(--color-electric)]" />
            {OUTSIDE_BENGALURU_NOTE}
          </p>
        </Container>
      </Section>

      {/* The city's own argument */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="THE LOCAL PICTURE" headline={c.intro.headline} />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-5">
              {c.intro.paragraphs.map((para) => (
                <p key={para.slice(0, 40)} className="text-base md:text-lg text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Site conditions */}
      <Section theme="dark">
        <Container>
          <SectionHeader eyebrow="SITE CONDITIONS" headline={c.conditions.headline} theme="dark" />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {c.conditions.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-6"
              >
                <h3 className="text-lg font-medium tracking-tight text-white">{item.title}</h3>
                <p className="text-base text-slate-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow="WHAT WE INSTALL HERE"
            headline={`The pages that matter in ${c.cityName}.`}
          />
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
            {c.services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-electric)]"
              >
                <h3 className="text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
                  {svc.label}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{svc.why}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-[color:var(--color-electric)]">
                  See details
                  <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Prices */}
      <Section theme="cream">
        <Container>
          <SectionHeader eyebrow="KARNATAKA PRICING" headline="Starting prices, before the survey." />
          <div className="mt-12 max-w-2xl">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left">
                <tbody>
                  {TIERS.map((row, i) => (
                    <tr key={row.label} className={i > 0 ? 'border-t border-slate-200' : ''}>
                      <th scope="row" className="px-6 py-5 text-base font-normal text-[color:var(--color-ink)]">
                        {row.label}
                      </th>
                      <td className="whitespace-nowrap px-6 py-5 text-right font-mono text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
                        from {row.from}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-sm text-slate-500 leading-relaxed">{ENTRANCE_PRICE_NOTE}</p>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">{OUTSIDE_BENGALURU_NOTE}</p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/karnataka"
                className="inline-flex items-center gap-2 text-base font-medium text-[color:var(--color-electric)] hover:underline"
              >
                See how we cover Karnataka
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <FindUsOnGoogle />
            </div>
          </div>
        </Container>
      </Section>

      {/* The rest of the state, so no city page is a dead end */}
      <Section theme="light" size="md">
        <Container>
          <SectionHeader eyebrow="ELSEWHERE IN KARNATAKA" headline="Other cities we cover." />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/bangalore"
              className="group inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-base font-medium text-[color:var(--color-ink)] transition-all hover:border-[color:var(--color-electric)]"
            >
              <MapPin aria-hidden className="h-4 w-4 text-[color:var(--color-electric)]" />
              Bengaluru
              <ArrowRight aria-hidden className="h-4 w-4 text-[color:var(--color-electric)] transition-transform group-hover:translate-x-1" />
            </Link>
            {Object.values(karnatakaCities)
              .filter((other) => other.slug !== c.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/karnataka/${other.slug}`}
                  className="group inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-base font-medium text-[color:var(--color-ink)] transition-all hover:border-[color:var(--color-electric)]"
                >
                  <MapPin aria-hidden className="h-4 w-4 text-[color:var(--color-electric)]" />
                  {other.cityName}
                  <ArrowRight aria-hidden className="h-4 w-4 text-[color:var(--color-electric)] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
          </div>
        </Container>
      </Section>

      <FAQ eyebrow="QUESTIONS" headline={`Common questions in ${c.cityName}.`} faqs={c.faqs} />

      <FinalCTA
        dataLocation="ka_final_cta"
        headline={`Get your ${c.cityName} entrance surveyed.`}
        sub="Site survey on request, scheduled from our Bengaluru office. Fixed written quote with travel named separately."
        primary="Request a site survey"
        secondary="WhatsApp us"
        whatsappMessage={c.whatsappMessage}
      />

      <Script
        id={`ka-city-service-schema-${c.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: `Gate Automation in ${c.cityName}`,
              description: c.metaDescription,
              slug: `karnataka/${c.slug}`,
              serviceType: 'Entrance Automation',
              areaServed: [{ '@type': 'City', name: c.cityName }],
              providerId: BENGALURU_BUSINESS_ID,
            }),
          ),
        }}
      />
      <Script
        id={`ka-city-faq-schema-${c.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(c.faqs)) }}
      />
      <Script
        id={`ka-city-breadcrumb-schema-${c.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Karnataka', url: `${SITE_URL}/karnataka` },
              { name: c.cityName, url: `${SITE_URL}/karnataka/${c.slug}` },
            ]),
          ),
        }}
      />
    </>
  )
}
