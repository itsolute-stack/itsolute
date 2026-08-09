import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { FinalCTA } from '@/components/home/FinalCTA'
import { FAQ } from '@/components/home/FAQ'
import { LocationMap } from '@/components/contact/LocationMap'
import { kottayamCopy, kottayamFAQs } from '@/lib/content/copy/kottayam'
import { services } from '@/lib/content/services'
import {
  localBusinessSchema,
  breadcrumbSchema,
  faqSchema,
  LOCAL_BUSINESS_ID,
} from '@/lib/schema'
import { SITE_URL } from '@/lib/content/site'

export const metadata = {
  title: {
    absolute: 'IT Services in Kottayam · Hardware, Repair, Networking, AMC | ITSolute',
  },
  description:
    'Local IT company in Kottayam — business laptops, laptop repair, software licensing, office WiFi, AMC support, and automation. On-site visits, same-day response, GST invoicing. Office on Parthas Lane.',
  alternates: { canonical: `${SITE_URL}/kottayam` },
}

export default function KottayamPage() {
  return (
    <>
      <PageHero
        eyebrow={kottayamCopy.hero.eyebrow}
        headline={kottayamCopy.hero.headline}
        sub={kottayamCopy.hero.sub}
        primaryCta={{ label: kottayamCopy.hero.primaryCta, href: '/contact' }}
        secondaryCta={{
          label: 'WhatsApp us',
          message: kottayamCopy.hero.whatsappMessage,
        }}
      />

      {/* Intro — the one-partner pitch */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={kottayamCopy.intro.eyebrow}
                headline={kottayamCopy.intro.headline}
              />
            </div>
            <div className="lg:col-span-7 flex items-center">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {kottayamCopy.intro.body}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services grid — links out to every service page */}
      <Section theme="dark">
        <Container>
          <SectionHeader
            eyebrow={kottayamCopy.services.eyebrow}
            headline={kottayamCopy.services.headline}
            sub={kottayamCopy.services.sub}
            theme="dark"
          />

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group flex flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-[color:var(--color-electric)] hover:-translate-y-0.5"
                >
                  <Icon
                    aria-hidden
                    className="h-8 w-8 text-[color:var(--color-accent)]"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg font-medium tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.tagline}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm text-slate-400 group-hover:text-white transition-colors">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Why local */}
      <Section theme="cream">
        <Container>
          <SectionHeader
            eyebrow={kottayamCopy.whyLocal.eyebrow}
            headline={kottayamCopy.whyLocal.headline}
          />

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {kottayamCopy.whyLocal.points.map((point) => (
              <div
                key={point.title}
                className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Visit us — reuse the contact LocationMap */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <SectionHeader
                eyebrow={kottayamCopy.visit.eyebrow}
                headline={kottayamCopy.visit.headline}
                sub={kottayamCopy.visit.body}
              />
            </div>
            <LocationMap />
          </div>
        </Container>
      </Section>

      <FAQ
        eyebrow={kottayamCopy.faq.eyebrow}
        headline={kottayamCopy.faq.headline}
        faqs={kottayamFAQs}
      />

      <FinalCTA
        headline={kottayamCopy.finalCta.headline}
        sub={kottayamCopy.finalCta.sub}
        primary={kottayamCopy.finalCta.primary}
        secondary={kottayamCopy.finalCta.secondary}
        whatsappMessage={kottayamCopy.hero.whatsappMessage}
      />

      {/* Schema: LocalBusiness + umbrella Service (itemized) + FAQ + Breadcrumb */}
      <Script
        id="kottayam-localbusiness-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <Script
        id="kottayam-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'IT Services in Kottayam',
            serviceType: 'IT Services',
            provider: { '@id': LOCAL_BUSINESS_ID },
            areaServed: { '@type': 'City', name: 'Kottayam' },
            url: `${SITE_URL}/kottayam`,
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'IT Services in Kottayam',
              itemListElement: services.map((s) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: s.title,
                  url: `${SITE_URL}${s.href}`,
                },
              })),
            },
          }),
        }}
      />
      <Script
        id="kottayam-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(kottayamFAQs)) }}
      />
      <Script
        id="kottayam-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'IT Services in Kottayam', url: `${SITE_URL}/kottayam` },
            ]),
          ),
        }}
      />
    </>
  )
}
