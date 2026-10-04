import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight, Check, MapPin } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { FinalCTA } from '@/components/home/FinalCTA'
import { FAQ } from '@/components/home/FAQ'
import {
  getEntranceDistrict,
  entranceGateTypes,
  entranceIncluded,
  entranceProcess,
  entranceAmcBlock,
  ENTRANCE_PRICE_NOTE,
} from '@/lib/content/copy/entranceDistricts'
import { VideoEmbed } from '@/components/shared/VideoEmbed'
import { RelatedGuides } from '@/components/shared/RelatedGuides'
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  videoObjectSchema,
} from '@/lib/schema'
import { SITE_URL } from '@/lib/content/site'

const CONTACT_HREF = '/contact?service=entrance-automation'

/**
 * Shared renderer for the four entrance-automation district pages. Each route
 * (/entrance-automation/kottayam etc.) is a thin page that supplies the slug —
 * static segments take precedence over the sibling [slug] product route.
 */
export function EntranceDistrictPage({ slug }: { slug: string }) {
  const d = getEntranceDistrict(slug)
  if (!d) return null

  return (
    <>
      <PageHero
        eyebrow={d.hero.eyebrow}
        headline={d.hero.headline}
        sub={d.hero.sub}
        primaryCta={{ label: 'Free site survey', href: CONTACT_HREF }}
        secondaryCta={{ label: 'WhatsApp us', message: d.whatsappMessage }}
        image={{
          src: `/images/entrance-automation/${d.slug}.png`,
          alt: `Automatic gate and boom barrier installation in ${d.district}, Kerala`,
          intent: `Hero photo for ${d.district} entrance automation — gate or boom barrier at a local property`,
        }}
      />

      {/* Gate types + prices */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow="WHAT WE INSTALL"
            headline={`Gate and barrier automation in ${d.district}, with starting prices.`}
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {entranceGateTypes.map((g) => (
              <Link
                key={g.label}
                href={g.href}
                className="group flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-electric)]"
              >
                <h3 className="text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
                  {g.label}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{g.blurb}</p>
                <p className="mt-auto pt-3 font-mono text-xl font-medium tracking-tight text-[color:var(--color-ink)]">
                  from {g.from}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-electric)]">
                  See details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm text-slate-500 leading-relaxed">
            {ENTRANCE_PRICE_NOTE}
          </p>
        </Container>
      </Section>

      {/* District angle */}
      <Section theme="dark">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={d.angle.eyebrow}
                headline={d.angle.headline}
                theme="dark"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-5">
              {d.angle.paragraphs.map((p) => (
                <p key={p} className="text-base md:text-lg text-slate-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Towns served — plain text, not links */}
      <Section theme="cream" size="md">
        <Container>
          <SectionHeader
            eyebrow="WHERE WE WORK"
            headline={`Towns we serve in ${d.district}.`}
          />
          <ul className="mt-10 flex flex-wrap gap-3">
            {d.towns.map((town) => (
              <li
                key={town}
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
              >
                <MapPin
                  aria-hidden
                  className="h-4 w-4 text-[color:var(--color-electric)]"
                  strokeWidth={2}
                />
                {town}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm text-slate-600 leading-relaxed">
            Not on the list? We cover the whole of {d.district} district — ask us about
            your location and we’ll confirm.
          </p>
        </Container>
      </Section>

      {/* What's included */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={entranceIncluded.eyebrow}
            headline={entranceIncluded.headline}
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {entranceIncluded.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-6"
              >
                <Check
                  aria-hidden
                  className="h-7 w-7 text-[color:var(--color-electric)]"
                  strokeWidth={2}
                />
                <h3 className="text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section theme="dark">
        <Container>
          <SectionHeader
            eyebrow={entranceProcess.eyebrow}
            headline={entranceProcess.headline}
            theme="dark"
          />
          <ol className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {entranceProcess.steps.map((step, i) => (
              <li key={step.index} className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-[color:var(--color-accent)] tracking-widest">
                    {step.index}
                  </span>
                  {i < entranceProcess.steps.length - 1 ? (
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

      {/* AMC */}
      <Section theme="cream">
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

      {/* Optional video */}
      {d.video ? <VideoEmbed video={d.video} /> : null}

      {/* Guides — picked per district so this isn't one shared list ×4 */}
      <RelatedGuides
        cluster="entrance-automation"
        slugs={d.guides}
        theme="light"
        eyebrow="BEFORE YOU DECIDE"
        headline={`Guides worth reading if you're in ${d.district}.`}
      />

      <FAQ
        eyebrow={`${d.district.toUpperCase()} · FAQ`}
        headline={`Questions from ${d.district} customers.`}
        faqs={d.faqs}
      />

      <FinalCTA
        headline={`Automating an entrance in ${d.district}?`}
        sub="Free site survey, a fixed written quote before you commit, and safety sensors and battery backup as standard."
        primary="Free site survey"
        secondary="WhatsApp us"
        whatsappMessage={d.whatsappMessage}
      />

      <Script
        id={`entrance-district-service-${d.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: `Automatic Gate & Boom Barrier Installation in ${d.district}`,
              description: d.metaDescription,
              slug: `entrance-automation/${d.slug}`,
              serviceType: 'Gate automation and boom barrier installation',
              priceRange: { low: '40000', high: '200000' },
              areaServed: [
                { '@type': 'AdministrativeArea', name: `${d.district} district` },
                ...d.towns.map((town) => ({ '@type': 'City', name: town })),
              ],
            }),
          ),
        }}
      />
      {d.video ? (
        <Script
          id={`entrance-district-video-${d.slug}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoObjectSchema(d.video)),
          }}
        />
      ) : null}
      <Script
        id={`entrance-district-faq-${d.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(d.faqs)) }}
      />
      <Script
        id={`entrance-district-breadcrumb-${d.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Entrance Automation', url: `${SITE_URL}/entrance-automation` },
              { name: d.district, url: `${SITE_URL}/entrance-automation/${d.slug}` },
            ]),
          ),
        }}
      />
    </>
  )
}

/** Shared metadata builder so each district route stays a thin file. */
export function buildDistrictMetadata(slug: string) {
  const d = getEntranceDistrict(slug)
  if (!d) return {}
  const url = `${SITE_URL}/entrance-automation/${slug}`
  return {
    title: { absolute: d.metaTitle },
    description: d.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: d.metaTitle,
      description: d.metaDescription,
      url,
    },
  }
}
