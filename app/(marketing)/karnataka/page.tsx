import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { FinalCTA } from '@/components/home/FinalCTA'
import { FAQ } from '@/components/home/FAQ'
import { karnatakaHub, karnatakaCities } from '@/lib/content/copy/karnataka'
import { BANGALORE_SERVICE_LINKS } from '@/lib/content/copy/bangalore'
import { regionGateTierRows } from '@/lib/content/entrancePricing'
import { ENTRANCE_PRICE_NOTE } from '@/lib/content/copy/entranceDistricts'
import { SITE_URL } from '@/lib/content/site'
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  BENGALURU_BUSINESS_ID,
} from '@/lib/schema'

const TIERS = regionGateTierRows('karnataka')

export const metadata = {
  title: { absolute: 'Gate Automation in Karnataka — Gates & Boom Barriers' },
  description:
    'Automatic gates, boom barriers, video door phones and smart locks across Karnataka, run from our Bengaluru office. Site survey on request.',
  alternates: { canonical: `${SITE_URL}/karnataka` },
  openGraph: {
    title: 'Gate Automation in Karnataka — Gates & Boom Barriers',
    description:
      'Automatic gates and boom barriers across Karnataka, run from our Bengaluru office. Site survey on request.',
    url: `${SITE_URL}/karnataka`,
  },
}

export default function KarnatakaPage() {
  const contactHref = '/contact?service=entrance-automation&loc=karnataka'

  return (
    <>
      <PageHero
        eyebrow={karnatakaHub.hero.eyebrow}
        headline={karnatakaHub.hero.headline}
        sub={karnatakaHub.hero.sub}
        primaryCta={{ label: 'Request a site survey', href: contactHref }}
        secondaryCta={{ label: 'WhatsApp us', message: karnatakaHub.hero.whatsappMessage }}
      />

      {/* How we cover the state — the honesty section */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={karnatakaHub.intro.eyebrow}
                headline={karnatakaHub.intro.headline}
              />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-5">
              {karnatakaHub.intro.paragraphs.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-base md:text-lg text-slate-600 leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* What we install */}
      <Section theme="dark">
        <Container>
          <SectionHeader
            eyebrow={karnatakaHub.products.eyebrow}
            headline={karnatakaHub.products.headline}
            theme="dark"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
            {karnatakaHub.products.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-8 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-electric)]"
              >
                <h2 className="text-2xl font-medium tracking-tight text-white">{item.title}</h2>
                <p className="font-mono text-sm text-[color:var(--color-accent)]">
                  {item.from ? `from ${item.from} incl. GST` : 'Quoted after a free site survey'}
                </p>
                <p className="text-base text-slate-300 leading-relaxed">{item.blurb}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors group-hover:text-[color:var(--color-accent)]">
                  See details
                  <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Karnataka prices */}
      <Section theme="light">
        <Container>
          <SectionHeader eyebrow="KARNATAKA PRICING" headline="Starting prices across the state." />
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
          </div>
        </Container>
      </Section>

      {/* Cities */}
      <Section theme="cream">
        <Container>
          <SectionHeader
            eyebrow={karnatakaHub.cities.eyebrow}
            headline={karnatakaHub.cities.headline}
            sub={karnatakaHub.cities.sub}
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <Link
              href="/bangalore"
              className="group flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-electric)]"
            >
              <span className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
                <MapPin aria-hidden className="h-4 w-4 text-[color:var(--color-electric)]" />
                Bengaluru
              </span>
              <span className="text-sm leading-relaxed text-slate-600">
                Where our Karnataka office is, and where most of our work here happens.
              </span>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-[color:var(--color-electric)]">
                See Bengaluru
                <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            {Object.values(karnatakaCities).map((c) => (
              <Link
                key={c.slug}
                href={`/karnataka/${c.slug}`}
                className="group flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-electric)]"
              >
                <span className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
                  <MapPin aria-hidden className="h-4 w-4 text-[color:var(--color-electric)]" />
                  {c.cityName}
                </span>
                <span className="text-sm leading-relaxed text-slate-600">{c.intro.headline}</span>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-[color:var(--color-electric)]">
                  See {c.cityName}
                  <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Every Bengaluru service page */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow="SERVICE PAGES"
            headline="The detail for each product."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {BANGALORE_SERVICE_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-electric)]"
              >
                <h3 className="text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
                  {l.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{l.blurb}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FAQ
        eyebrow="QUESTIONS"
        headline="Working with us across Karnataka."
        faqs={karnatakaHub.faqs}
      />

      <FinalCTA
        headline="Tell us where you are and what the entrance is."
        sub="Site survey on request across Karnataka. Fixed written quote before you commit, with travel named separately."
        primary="Request a site survey"
        secondary="WhatsApp us"
        whatsappMessage={karnatakaHub.hero.whatsappMessage}
      />

      <Script
        id="karnataka-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Entrance Automation in Karnataka',
              description:
                'Automatic gate, boom barrier, video door phone and smart door lock installation across Karnataka, run from the Bengaluru office.',
              slug: 'karnataka',
              serviceType: 'Entrance Automation',
              areaServed: [{ '@type': 'State', name: 'Karnataka' }],
              providerId: BENGALURU_BUSINESS_ID,
            }),
          ),
        }}
      />
      <Script
        id="karnataka-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(karnatakaHub.faqs)) }}
      />
      <Script
        id="karnataka-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Karnataka', url: `${SITE_URL}/karnataka` },
            ]),
          ),
        }}
      />
    </>
  )
}
