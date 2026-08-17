import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { FinalCTA } from '@/components/home/FinalCTA'
import { FAQ } from '@/components/home/FAQ'
import {
  getEntranceProduct,
  getAllEntranceSlugs,
} from '@/lib/content/copy/entranceAutomation'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
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

  const contactHref = `/contact?service=entrance-automation`

  return (
    <>
      <PageHero
        eyebrow={p.hero.eyebrow}
        headline={p.hero.headline}
        sub={p.hero.sub}
        primaryCta={{ label: 'Request a site survey', href: contactHref }}
        secondaryCta={{ label: 'WhatsApp us', message: p.whatsappMessage }}
        image={{
          src: `/images/entrance-automation/${slug}.png`,
          alt: `${p.serviceName} across Kerala by ITSolute`,
        }}
      />

      {/* What we install */}
      <Section theme="light">
        <Container>
          <SectionHeader eyebrow={p.install.eyebrow} headline={p.install.headline} />
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {p.install.items.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300"
                >
                  <Icon
                    aria-hidden
                    strokeWidth={1.5}
                    className="h-8 w-8 text-[color:var(--color-electric)]"
                  />
                  <h3 className="text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Who we install for */}
      <Section theme="dark">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow={p.who.eyebrow} headline={p.who.headline} theme="dark" />
            </div>
            <ul className="lg:col-span-7 flex flex-col gap-3">
              {p.who.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-5"
                >
                  <ArrowRight
                    className="mt-1 h-5 w-5 shrink-0 text-[color:var(--color-accent)]"
                    strokeWidth={2}
                  />
                  <span className="text-base text-slate-200 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Why us */}
      <Section theme="cream">
        <Container>
          <SectionHeader eyebrow={p.why.eyebrow} headline={p.why.headline} />
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {p.why.points.map((point) => (
              <div key={point.title} className="flex flex-col gap-3">
                <Check
                  aria-hidden
                  className="h-7 w-7 text-[color:var(--color-electric)]"
                  strokeWidth={2}
                />
                <h3 className="text-lg md:text-xl font-medium tracking-tight text-[color:var(--color-ink)]">
                  {point.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section theme="dark">
        <Container>
          <SectionHeader eyebrow={p.process.eyebrow} headline={p.process.headline} theme="dark" />
          <ol className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {p.process.steps.map((step, i) => (
              <li key={step.index} className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-[color:var(--color-accent)] tracking-widest">
                    {step.index}
                  </span>
                  {i < p.process.steps.length - 1 ? (
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

      {/* Indicative pricing */}
      <Section theme="light">
        <Container>
          <SectionHeader eyebrow={p.pricing.eyebrow} headline={p.pricing.headline} />
          <div className="mt-12 max-w-2xl">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left">
                <tbody>
                  {p.pricing.rows.map((row, i) => (
                    <tr key={row.label} className={i > 0 ? 'border-t border-slate-200' : ''}>
                      <th
                        scope="row"
                        className="px-6 py-5 text-base md:text-lg font-normal text-[color:var(--color-ink)]"
                      >
                        {row.label}
                      </th>
                      <td className="whitespace-nowrap px-6 py-5 text-right font-mono text-lg md:text-xl font-medium tracking-tight text-[color:var(--color-ink)]">
                        from {row.from}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-sm text-slate-500 leading-relaxed">
              {p.pricing.disclaimer}
            </p>
            <Button asChild className="mt-6" variant="primary">
              <Link href={contactHref}>Request a site survey</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* AMC */}
      <Section theme="cream">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow={p.amc.eyebrow} headline={p.amc.headline} />
              <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
                {p.amc.body}
              </p>
              <Button asChild className="mt-8" variant="secondary">
                <Link href="/amc">See how AMC works</Link>
              </Button>
            </div>
            <ul className="lg:col-span-7 flex flex-col gap-3">
              {p.amc.points.map((point) => (
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

      {/* FAQ */}
      <FAQ
        eyebrow="QUESTIONS"
        headline="Common questions before your site survey."
        faqs={p.faqs}
      />

      <FinalCTA
        headline="Automate your entrance the way that lasts."
        sub="Free site survey across Kerala. Fixed written quote before you commit. Safe, connected, and backed by AMC."
        primary="Request a site survey"
        secondary="WhatsApp us"
        whatsappMessage={p.whatsappMessage}
      />

      <Script
        id={`entrance-service-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: p.serviceName,
              description: p.metaDescription,
              slug: `entrance-automation/${slug}`,
              serviceType: p.serviceType,
              priceRange: { low: p.priceLow, high: p.priceHigh },
            }),
          ),
        }}
      />
      <Script
        id={`entrance-faq-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(p.faqs)) }}
      />
      <Script
        id={`entrance-breadcrumb-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Entrance Automation', url: `${SITE_URL}/entrance-automation` },
              { name: p.serviceName, url: `${SITE_URL}/entrance-automation/${slug}` },
            ]),
          ),
        }}
      />
    </>
  )
}
