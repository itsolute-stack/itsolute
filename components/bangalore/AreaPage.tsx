import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { FinalCTA } from '@/components/home/FinalCTA'
import { FAQ } from '@/components/home/FAQ'
import { getPostBySlug } from '@/lib/blog'
import { regionGateTierRows } from '@/lib/content/entrancePricing'
import { ENTRANCE_PRICE_NOTE } from '@/lib/content/copy/entranceDistricts'
import { SITE_URL } from '@/lib/content/site'
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  BENGALURU_BUSINESS_ID,
} from '@/lib/schema'
import type { BangaloreArea } from '@/lib/content/copy/bangaloreAreas'

/**
 * A Bengaluru area page.
 *
 * Shorter than a service page on purpose: an area page exists to say what is
 * different about automating a gate here and to send you to the right service
 * page, not to repeat the product detail those pages already carry.
 *
 * The price post link renders only when the post exists, so these pages could
 * ship before the Karnataka blog cluster was written.
 */
const TIERS = regionGateTierRows('karnataka')

export function AreaPage({ area }: { area: BangaloreArea }) {
  const contactHref = '/contact?service=entrance-automation&loc=bengaluru'
  const pricePost = getPostBySlug(area.pricePost)

  return (
    <>
      <PageHero
        dataLocation="blr_hero"
        eyebrow={area.hero.eyebrow}
        headline={area.hero.headline}
        sub={area.hero.sub}
        primaryCta={{ label: 'Request a site survey', href: contactHref }}
        secondaryCta={{ label: 'WhatsApp us', message: area.whatsappMessage }}
      />

      {/* The area's own argument */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="THE LOCAL PICTURE" headline={area.intro.headline} />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-5">
              {area.intro.paragraphs.map((para) => (
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

      {/* Site conditions specific to this area */}
      <Section theme="dark">
        <Container>
          <SectionHeader eyebrow="SITE CONDITIONS" headline={area.conditions.headline} theme="dark" />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {area.conditions.items.map((item) => (
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

      {/* Where to go next */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow="WHAT WE INSTALL HERE"
            headline={`The pages that matter in ${area.areaName}.`}
          />
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
            {area.services.map((svc) => (
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

      {/* Karnataka prices */}
      <Section theme="cream">
        <Container>
          <SectionHeader eyebrow="BENGALURU PRICING" headline="Starting prices, before the survey." />
          <div className="mt-12 max-w-2xl">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left">
                <tbody>
                  {TIERS.map((row, i) => (
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
            <p className="mt-5 text-sm text-slate-500 leading-relaxed">{ENTRANCE_PRICE_NOTE}</p>
            {pricePost ? (
              <Link
                href={`/blog/${area.pricePost}`}
                className="mt-6 inline-flex items-center gap-2 text-base font-medium text-[color:var(--color-electric)] hover:underline"
              >
                {pricePost.frontmatter.title}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </Container>
      </Section>

      {/* Back to the city hub */}
      <Section theme="light" size="md">
        <Container>
          <div className="max-w-3xl">
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              We cover the whole of Bengaluru from our Bellandur office — see{' '}
              <Link href="/bangalore" className="text-[color:var(--color-electric)] hover:underline">
                gate automation in Bangalore
              </Link>{' '}
              for every service and the other areas we work in.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500">
              <MapPin aria-hidden className="h-4 w-4 text-[color:var(--color-electric)]" />
              Visits to the office are by appointment.
            </p>
          </div>
        </Container>
      </Section>

      <FAQ eyebrow="QUESTIONS" headline={`Common questions in ${area.areaName}.`} faqs={area.faqs} />

      <FinalCTA
        dataLocation="blr_final_cta"
        headline={`Get your ${area.areaName} gate surveyed.`}
        sub="Free site survey across Bengaluru. Fixed written quote before you commit, and prices that include GST."
        primary="Request a site survey"
        secondary="WhatsApp us"
        whatsappMessage={area.whatsappMessage}
      />

      <Script
        id={`blr-area-service-schema-${area.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: `Gate Automation in ${area.areaName}`,
              description: area.metaDescription,
              slug: `bangalore/${area.slug}`,
              serviceType: 'Entrance Automation',
              areaServed: [{ '@type': 'City', name: 'Bengaluru' }],
              providerId: BENGALURU_BUSINESS_ID,
            }),
          ),
        }}
      />
      <Script
        id={`blr-area-faq-schema-${area.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(area.faqs)) }}
      />
      <Script
        id={`blr-area-breadcrumb-schema-${area.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Bengaluru', url: `${SITE_URL}/bangalore` },
              { name: area.areaName, url: `${SITE_URL}/bangalore/${area.slug}` },
            ]),
          ),
        }}
      />
    </>
  )
}
