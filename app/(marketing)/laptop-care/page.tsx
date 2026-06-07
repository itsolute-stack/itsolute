import Script from 'next/script'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { FinalCTA } from '@/components/home/FinalCTA'
import { FAQ } from '@/components/home/FAQ'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/whatsapp'
import { laptopCareCopy, laptopCareFAQs } from '@/lib/content/copy/laptopCare'
import { breadcrumbSchema, faqSchema, LOCAL_BUSINESS_ID } from '@/lib/schema'
import { SITE_URL } from '@/lib/content/site'

export const metadata = {
  title: {
    absolute:
      'Laptop Repair in Kottayam · Screen, Keyboard, Battery, Data Recovery | ITSolute',
  },
  description:
    'Laptop repair in Kottayam — screen replacement, keyboard repair, battery, SSD upgrade, data recovery, virus removal. Free diagnosis for businesses. Most repairs in 24–72 hours.',
  alternates: { canonical: `${SITE_URL}/laptop-care` },
}

export default function LaptopCarePage() {
  return (
    <>
      <PageHero
        eyebrow={laptopCareCopy.hero.eyebrow}
        headline={laptopCareCopy.hero.headline}
        sub={laptopCareCopy.hero.sub}
        primaryCta={{ label: laptopCareCopy.hero.primaryCta, href: whatsappLink(laptopCareCopy.hero.whatsappMessage) }}
        secondaryCta={{
          label: laptopCareCopy.hero.secondaryCta,
          message: laptopCareCopy.hero.whatsappMessage,
        }}
      />

      {/* What we fix grid */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={laptopCareCopy.whatWeFix.eyebrow}
            headline={laptopCareCopy.whatWeFix.headline}
          />

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {laptopCareCopy.whatWeFix.items.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300"
                >
                  <Icon
                    aria-hidden
                    className="h-8 w-8 text-[color:var(--color-electric)]"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg md:text-xl font-medium tracking-tight text-[color:var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Why ITSolute for repair */}
      <Section theme="dark">
        <Container>
          <SectionHeader
            eyebrow={laptopCareCopy.why.eyebrow}
            headline={laptopCareCopy.why.headline}
            theme="dark"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {laptopCareCopy.why.points.map((p) => (
              <div key={p.title} className="flex flex-col gap-3">
                <Check
                  aria-hidden
                  className="h-7 w-7 text-[color:var(--color-cyan)]"
                  strokeWidth={2}
                />
                <h3 className="text-lg md:text-xl font-medium tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Brands we service */}
      <Section theme="cream" size="md">
        <Container>
          <SectionHeader
            eyebrow={laptopCareCopy.brands.eyebrow}
            headline={laptopCareCopy.brands.headline}
          />
          <ul className="mt-10 flex flex-wrap gap-3">
            {laptopCareCopy.brands.list.map((brand) => (
              <li
                key={brand}
                className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-base font-medium text-[color:var(--color-ink)]"
              >
                {brand}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Process */}
      <Section theme="dark">
        <Container>
          <SectionHeader
            eyebrow={laptopCareCopy.process.eyebrow}
            headline={laptopCareCopy.process.headline}
            theme="dark"
          />

          <ol className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {laptopCareCopy.process.steps.map((step, i) => (
              <li key={step.index} className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-[color:var(--color-cyan)] tracking-widest">
                    {step.index}
                  </span>
                  {i < laptopCareCopy.process.steps.length - 1 ? (
                    <span
                      aria-hidden
                      className="hidden md:block flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"
                    />
                  ) : null}
                </div>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Pricing */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={laptopCareCopy.pricing.eyebrow}
            headline={laptopCareCopy.pricing.headline}
            sub={laptopCareCopy.pricing.sub}
          />

          <div className="mt-12 overflow-hidden rounded-lg border border-slate-200 bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-4 px-6 text-left font-mono text-xs uppercase tracking-widest text-slate-500">
                    Service
                  </th>
                  <th className="py-4 px-6 text-right font-mono text-xs uppercase tracking-widest text-slate-500">
                    Starting from
                  </th>
                </tr>
              </thead>
              <tbody>
                {laptopCareCopy.pricing.items.map((row) => (
                  <tr key={row.service} className="border-b border-slate-100 last:border-0">
                    <td className="py-4 px-6 text-base text-[color:var(--color-ink)]">
                      {row.service}
                    </td>
                    <td className="py-4 px-6 text-right font-mono text-base font-medium text-[color:var(--color-ink)]">
                      {row.from}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-2xl text-sm text-slate-500 leading-relaxed">
            {laptopCareCopy.pricing.disclaimer}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <Button asChild size="lg" variant="primary">
              <a
                href={whatsappLink(laptopCareCopy.hero.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a quote on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact?service=laptop-care">Send us a message instead</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <FAQ
        eyebrow="LAPTOP CARE FAQS"
        headline="Common questions before you drop it off."
        faqs={laptopCareFAQs}
      />

      {/* Final CTA */}
      <FinalCTA
        headline={laptopCareCopy.finalCta.headline}
        sub={laptopCareCopy.finalCta.sub}
        primary={laptopCareCopy.finalCta.primary}
        secondary={laptopCareCopy.finalCta.secondary}
        whatsappMessage={laptopCareCopy.hero.whatsappMessage}
      />

      <Script
        id="laptop-care-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Laptop Repair & Care',
            provider: { '@id': LOCAL_BUSINESS_ID },
            serviceType: 'Laptop Repair',
            description:
              'Screen replacement, keyboard repair, battery replacement, SSD upgrades, data recovery, and virus removal in Kottayam and across Kerala.',
            url: `${SITE_URL}/laptop-care`,
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'INR',
              lowPrice: '800',
              highPrice: '15000',
            },
          }),
        }}
      />
      <Script
        id="laptop-care-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Laptop Care', url: `${SITE_URL}/laptop-care` },
            ]),
          ),
        }}
      />
      <Script
        id="laptop-care-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(laptopCareFAQs)) }}
      />
    </>
  )
}
