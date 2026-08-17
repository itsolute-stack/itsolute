import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { FinalCTA } from '@/components/home/FinalCTA'
import { FAQ } from '@/components/home/FAQ'
import { entranceHubCopy, entranceHubFAQs } from '@/lib/content/copy/entranceAutomation'
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/lib/schema'
import { SITE_URL } from '@/lib/content/site'

export const metadata = {
  title: {
    absolute: 'Entrance Automation in Kerala | Automatic Gates & Boom Barriers | ITSolute',
  },
  description:
    'Automatic gate and boom barrier installation across Kerala — for homes, apartments, offices, and commercial sites. Safety sensors, RFID access, battery backup, and AMC. Free site survey.',
  alternates: { canonical: `${SITE_URL}/entrance-automation` },
}

export default function EntranceAutomationPage() {
  return (
    <>
      <PageHero
        eyebrow={entranceHubCopy.hero.eyebrow}
        headline={entranceHubCopy.hero.headline}
        sub={entranceHubCopy.hero.sub}
        primaryCta={{ label: 'Request a site survey', href: '/contact?service=entrance-automation' }}
        secondaryCta={{ label: 'WhatsApp us', message: entranceHubCopy.hero.whatsappMessage }}
      />

      {/* Intro */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={entranceHubCopy.intro.eyebrow}
                headline={entranceHubCopy.intro.headline}
              />
            </div>
            <div className="lg:col-span-7 flex items-center">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {entranceHubCopy.intro.body}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Products — link to the two children */}
      <Section theme="dark">
        <Container>
          <SectionHeader
            eyebrow={entranceHubCopy.products.eyebrow}
            headline={entranceHubCopy.products.headline}
            theme="dark"
          />
          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
            {entranceHubCopy.products.items.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group flex flex-col gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[color:var(--color-electric)] hover:-translate-y-0.5"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-accent)]">
                  {product.tagline}
                </p>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white">
                  {product.title}
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">{product.blurb}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-[color:var(--color-accent)] transition-colors">
                  Explore {product.title}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why us */}
      <Section theme="cream">
        <Container>
          <SectionHeader
            eyebrow={entranceHubCopy.why.eyebrow}
            headline={entranceHubCopy.why.headline}
          />
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {entranceHubCopy.why.points.map((p) => (
              <div key={p.title} className="flex flex-col gap-3">
                <Check
                  aria-hidden
                  className="h-7 w-7 text-[color:var(--color-electric)]"
                  strokeWidth={2}
                />
                <h3 className="text-lg md:text-xl font-medium tracking-tight text-[color:var(--color-ink)]">
                  {p.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FAQ
        eyebrow={entranceHubCopy.faq.eyebrow}
        headline={entranceHubCopy.faq.headline}
        faqs={entranceHubFAQs}
      />

      <FinalCTA
        headline={entranceHubCopy.finalCta.headline}
        sub={entranceHubCopy.finalCta.sub}
        primary={entranceHubCopy.finalCta.primary}
        secondary={entranceHubCopy.finalCta.secondary}
        whatsappMessage={entranceHubCopy.hero.whatsappMessage}
      />

      <Script
        id="entrance-hub-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Entrance Automation — Automatic Gates & Boom Barriers',
              description:
                'Automatic gate and boom barrier installation across Kerala for homes, apartments, offices, and commercial sites — with safety sensors, RFID access, battery backup, and AMC.',
              slug: 'entrance-automation',
              serviceType: 'Entrance Automation',
              priceRange: { low: '25000', high: '250000' },
            }),
          ),
        }}
      />
      <Script
        id="entrance-hub-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(entranceHubFAQs)) }}
      />
      <Script
        id="entrance-hub-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Entrance Automation', url: `${SITE_URL}/entrance-automation` },
            ]),
          ),
        }}
      />
    </>
  )
}
