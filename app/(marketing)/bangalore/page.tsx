import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight, Check, MapPin, Phone, Clock, CalendarCheck } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { FinalCTA } from '@/components/home/FinalCTA'
import { FAQ } from '@/components/home/FAQ'
import { LocationMap } from '@/components/contact/LocationMap'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import { bangaloreCopy, BENGALURU_AREAS } from '@/lib/content/copy/bangalore'
import {
  entranceGateTypes,
  entranceIncluded,
  entranceProcess,
  entranceAmcBlock,
  ENTRANCE_PRICE_NOTE,
} from '@/lib/content/copy/entranceDistricts'
import { INSTALLATION_ANSWER } from '@/lib/content/entrancePricing'
import { LOCATIONS, SITE, SITE_URL } from '@/lib/content/site'
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  bengaluruBusinessSchema,
} from '@/lib/schema'

const LOC = LOCATIONS.bengaluru

export const metadata = {
  title: { absolute: 'Gate Automation in Bangalore — Gates & Boom Barriers' },
  description:
    'Automatic gates from ₹34,000 and boom barriers from ₹60,000 incl. GST for Bengaluru villas, apartments and offices. Free site survey.',
  alternates: { canonical: `${SITE_URL}/bangalore` },
  openGraph: {
    title: 'Gate Automation in Bangalore — Gates & Boom Barriers',
    description:
      'Automatic gates, boom barriers, video door phones and smart door locks across Bengaluru. Free site survey.',
    url: `${SITE_URL}/bangalore`,
  },
}

export default function BangalorePage() {
  const contactHref = '/contact?service=entrance-automation'

  return (
    <>
      <PageHero
        eyebrow={bangaloreCopy.hero.eyebrow}
        headline={bangaloreCopy.hero.headline}
        sub={bangaloreCopy.hero.sub}
        primaryCta={{ label: 'Request a site survey', href: contactHref }}
        secondaryCta={{
          label: 'WhatsApp us',
          message: bangaloreCopy.hero.whatsappMessage,
        }}
      />

      {/* Why we opened here */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={bangaloreCopy.intro.eyebrow}
                headline={bangaloreCopy.intro.headline}
              />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-5">
              {bangaloreCopy.intro.paragraphs.map((para) => (
                <p key={para.slice(0, 40)} className="text-base md:text-lg text-slate-600 leading-relaxed">
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
            eyebrow={bangaloreCopy.products.eyebrow}
            headline={bangaloreCopy.products.headline}
            theme="dark"
          />
          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
            {bangaloreCopy.products.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-8 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-electric)]"
              >
                <h3 className="text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                {item.from ? (
                  <p className="font-mono text-sm text-[color:var(--color-accent)]">
                    from {item.from} incl. GST
                  </p>
                ) : (
                  <p className="font-mono text-sm text-[color:var(--color-accent)]">
                    Quoted after a free site survey
                  </p>
                )}
                <p className="text-base text-slate-300 leading-relaxed">{item.blurb}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors group-hover:text-[color:var(--color-accent)]">
                  See {item.title.toLowerCase()}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Indicative gate pricing — straight from entrancePricing.ts */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow="INDICATIVE PRICING"
            headline="Starting prices, before the survey."
          />
          <div className="mt-12 max-w-2xl">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left">
                <tbody>
                  {entranceGateTypes.map((row, i) => (
                    <tr key={row.label} className={i > 0 ? 'border-t border-slate-200' : ''}>
                      <th
                        scope="row"
                        className="px-6 py-5 text-base font-normal text-[color:var(--color-ink)]"
                      >
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
            <p className="mt-5 text-sm text-slate-500 leading-relaxed">
              {ENTRANCE_PRICE_NOTE}
            </p>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              {INSTALLATION_ANSWER}
            </p>
            <Button asChild className="mt-6" variant="primary">
              <Link href={contactHref}>Request a site survey</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* What's included */}
      <Section theme="cream">
        <Container>
          <SectionHeader
            eyebrow={entranceIncluded.eyebrow}
            headline={entranceIncluded.headline}
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {entranceIncluded.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Areas we cover */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={bangaloreCopy.areas.eyebrow}
            headline={bangaloreCopy.areas.headline}
            sub={bangaloreCopy.areas.body}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {BENGALURU_AREAS.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-base font-medium text-[color:var(--color-ink)]"
              >
                <MapPin aria-hidden className="h-4 w-4 text-[color:var(--color-electric)]" />
                {area}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it goes */}
      <Section theme="dark">
        <Container>
          <SectionHeader
            eyebrow={entranceProcess.eyebrow}
            headline={entranceProcess.headline}
            theme="dark"
          />
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {entranceProcess.steps.map((step) => (
              <div
                key={step.index}
                className="flex flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-6"
              >
                <span className="font-mono text-sm text-[color:var(--color-accent)]">
                  {step.index}
                </span>
                <h3 className="text-lg font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* The Bengaluru office — NAP, hours, appointment note, map */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="THE BENGALURU OFFICE"
                headline="Where we work from in the city."
              />
              <ul className="mt-8 flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    aria-hidden
                    className="mt-1 h-5 w-5 shrink-0 text-[color:var(--color-electric)]"
                  />
                  <span className="text-base text-slate-700 leading-relaxed">
                    <strong className="font-medium text-[color:var(--color-ink)]">
                      {LOC.label}
                    </strong>
                    <br />
                    {LOC.addressLine}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone
                    aria-hidden
                    className="mt-1 h-5 w-5 shrink-0 text-[color:var(--color-electric)]"
                  />
                  <a
                    href={`tel:${SITE.contact.phoneTel}`}
                    data-location="bangalore_office"
                    className="text-base text-slate-700 hover:text-[color:var(--color-ink)]"
                  >
                    {SITE.contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock
                    aria-hidden
                    className="mt-1 h-5 w-5 shrink-0 text-[color:var(--color-electric)]"
                  />
                  <span className="text-base text-slate-700">{SITE.hours.display}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CalendarCheck
                    aria-hidden
                    className="mt-1 h-5 w-5 shrink-0 text-[color:var(--color-electric)]"
                  />
                  <span className="text-base text-slate-700">
                    {LOC.visitNote} — please arrange a time before coming over.
                  </span>
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="primary">
                  <Link href={contactHref}>Request a site survey</Link>
                </Button>
                <WhatsAppButton
                  message={bangaloreCopy.hero.whatsappMessage}
                  variant="secondary"
                  label="WhatsApp us"
                  dataLocation="bangalore_office"
                />
              </div>
            </div>
            <LocationMap location={LOC} />
          </div>
        </Container>
      </Section>

      {/* Other services, briefly */}
      <Section theme="cream">
        <Container>
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow={bangaloreCopy.other.eyebrow}
              headline={bangaloreCopy.other.headline}
            />
            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
              {bangaloreCopy.other.body}
            </p>
          </div>
        </Container>
      </Section>

      {/* AMC */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={entranceAmcBlock.eyebrow}
                headline={entranceAmcBlock.headline}
              />
              <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
                {entranceAmcBlock.body}
              </p>
              <Button asChild className="mt-8" variant="secondary">
                <Link href="/amc">See how AMC works</Link>
              </Button>
            </div>
            <ul className="lg:col-span-7 flex flex-col gap-3">
              {entranceAmcBlock.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-5"
                >
                  <Check
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-electric)]"
                    strokeWidth={2.5}
                  />
                  <span className="text-base text-slate-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <FAQ
        eyebrow="QUESTIONS"
        headline="Common questions from Bengaluru."
        faqs={bangaloreCopy.faqs}
      />

      <FinalCTA
        headline="Get your Bengaluru entrance surveyed."
        sub="Free site survey across the city. Fixed written quote before you commit."
        primary="Request a site survey"
        secondary="WhatsApp us"
        whatsappMessage={bangaloreCopy.hero.whatsappMessage}
      />

      <Script
        id="bangalore-localbusiness-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bengaluruBusinessSchema()),
        }}
      />
      <Script
        id="bangalore-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Entrance Automation in Bengaluru',
              description:
                'Automatic gate, boom barrier, video door phone and smart door lock installation across Bengaluru.',
              slug: 'bangalore',
              serviceType: 'Entrance Automation',
              areaServed: [{ '@type': 'City', name: 'Bengaluru' }],
            }),
          ),
        }}
      />
      <Script
        id="bangalore-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(bangaloreCopy.faqs)),
        }}
      />
      <Script
        id="bangalore-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Bengaluru', url: `${SITE_URL}/bangalore` },
            ]),
          ),
        }}
      />
    </>
  )
}
