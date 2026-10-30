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
import { VideoEmbed } from '@/components/shared/VideoEmbed'
import { RelatedGuides } from '@/components/shared/RelatedGuides'
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  productOffersSchema,
  videoObjectSchema,
} from '@/lib/schema'
import { SITE_URL } from '@/lib/content/site'
import { NO_PRICE_NOTE } from '@/lib/content/entrancePricing'
import type { EntranceProduct } from '@/lib/content/copy/entranceAutomation'
import type { ClusterSlug } from '@/lib/content/clusters'

/**
 * The product page used by both /entrance-automation/[slug] and
 * /home-automation/[slug].
 *
 * These pages are the same page: hero, what we install, who it is for, why
 * us, process, pricing, AMC, guides, FAQ, CTA, and the schema that goes with
 * them. Keeping two copies of 400 lines of that guarantees they drift, and
 * the drift shows up as one section quietly behaving differently on half the
 * site. Everything genuinely local to a section — the districts strip under
 * entrance products, the CTA wording, the schema id prefix — comes in as a
 * prop instead.
 *
 * An empty `pricing.rows` is a supported state, not a mistake: the page then
 * renders NO_PRICE_NOTE, emits no Offer schema, and omits priceRange from the
 * Service schema. See lib/content/entrancePricing.ts.
 */
type Props = {
  /** Content for this product. Shaped by EntranceProduct — see that type. */
  p: EntranceProduct
  slug: string
  /** URL segment this product lives under, e.g. 'entrance-automation'. */
  basePath: string
  /** Folder under /public/images holding `<slug>.jpg`. */
  imageDir: string
  /** `?service=` value on the contact CTAs. */
  contactService: string
  /** Prefix for the JSON-LD script ids, kept stable per section. */
  schemaIdPrefix: string
  /** Blog cluster the `guides` slugs belong to. */
  guidesCluster: ClusterSlug
  /** Breadcrumb label for the section hub. */
  parentName: string
  finalCta: { headline: string; sub: string }
  /** Offer schema description. Only ever used when a price is published. */
  offerDescription: (rowLabel: string) => string
  /** Optional extra section rendered above the guides block. */
  extraSection?: React.ReactNode
}

export function ProductPage({
  p,
  slug,
  basePath,
  imageDir,
  contactService,
  schemaIdPrefix,
  guidesCluster,
  parentName,
  finalCta,
  offerDescription,
  extraSection,
}: Props) {
  const contactHref = `/contact?service=${contactService}`

  return (
    <>
      <PageHero
        eyebrow={p.hero.eyebrow}
        headline={p.hero.headline}
        sub={p.hero.sub}
        primaryCta={{ label: 'Request a site survey', href: contactHref }}
        secondaryCta={{ label: 'WhatsApp us', message: p.whatsappMessage }}
        image={{
          src: `/images/${imageDir}/${slug}.jpg`,
          alt: `${p.serviceName} across Kerala by ITSolute`,
          // Only set on products whose photo does not exist yet, so they fall
          // back to a styled block instead of a broken image. Products with a
          // real photo leave it undefined and render through next/image.
          intent: p.heroIntent,
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
            {/*
              An empty price slot is deliberate for products whose cost swings
              too much by model to quote a useful "from" figure. Render the
              note instead of an empty table shell — see entrancePricing.ts.
            */}
            {p.pricing.rows.length > 0 ? (
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
            ) : (
              <p className="rounded-lg border border-slate-200 bg-white px-6 py-5 text-base md:text-lg leading-relaxed text-[color:var(--color-ink)]">
                {NO_PRICE_NOTE}
              </p>
            )}
            <p className="mt-5 text-sm text-slate-500 leading-relaxed">
              {p.pricing.disclaimer}
            </p>
            <Button asChild className="mt-6" variant="primary">
              <Link href={contactHref}>Request a site survey</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Retrofit — only on pages that define it (gates) */}
      {p.retrofit ? (
        <Section theme="dark">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionHeader
                  eyebrow={p.retrofit.eyebrow}
                  headline={p.retrofit.headline}
                  theme="dark"
                />
                <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed">
                  {p.retrofit.body}
                </p>
                <Button asChild className="mt-8" variant="primary">
                  <Link href={contactHref}>Book a free site survey</Link>
                </Button>
              </div>
              <ul className="lg:col-span-7 flex flex-col gap-3">
                {p.retrofit.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-5"
                  >
                    <Check
                      aria-hidden
                      className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-accent)]"
                      strokeWidth={2.5}
                    />
                    <span className="text-base text-slate-200 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* Optional video */}
      {p.video ? <VideoEmbed video={p.video} /> : null}

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

      {extraSection}

      {/* Guides — per-product picks from the content file */}
      <RelatedGuides
        cluster={guidesCluster}
        slugs={p.guides}
        limit={6}
        theme="cream"
        eyebrow="GUIDES"
        headline="Read before you buy."
      />

      {/* FAQ */}
      <FAQ
        eyebrow="QUESTIONS"
        headline="Common questions before your site survey."
        faqs={p.faqs}
      />

      <FinalCTA
        headline={finalCta.headline}
        sub={finalCta.sub}
        primary="Request a site survey"
        secondary="WhatsApp us"
        whatsappMessage={p.whatsappMessage}
      />

      <Script
        id={`${schemaIdPrefix}-service-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: p.serviceName,
              description: p.metaDescription,
              slug: `${basePath}/${slug}`,
              serviceType: p.serviceType,
              // Omit the range entirely when there is no published price,
              // rather than claiming a range of empty strings.
              priceRange: p.priceLow
                ? { low: p.priceLow, high: p.priceHigh }
                : undefined,
            }),
          ),
        }}
      />
      {/* No rows means no published price, so emit no Offer schema at all. */}
      {p.pricing.rows.length > 0 ? (
        <Script
          id={`${schemaIdPrefix}-offers-schema-${slug}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              productOffersSchema({
                pageSlug: `${basePath}/${slug}`,
                listName: p.pricing.headline,
                items: p.pricing.rows.map((row) => ({
                  name: `${row.label} — ${p.serviceName}`,
                  description: offerDescription(row.label),
                  minPrice: row.minPrice,
                })),
              }),
            ),
          }}
        />
      ) : null}
      {p.video ? (
        <Script
          id={`${schemaIdPrefix}-video-schema-${slug}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoObjectSchema(p.video)),
          }}
        />
      ) : null}
      <Script
        id={`${schemaIdPrefix}-faq-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(p.faqs)) }}
      />
      <Script
        id={`${schemaIdPrefix}-breadcrumb-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: parentName, url: `${SITE_URL}/${basePath}` },
              { name: p.serviceName, url: `${SITE_URL}/${basePath}/${slug}` },
            ]),
          ),
        }}
      />
    </>
  )
}
