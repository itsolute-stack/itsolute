import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { FinalCTA } from '@/components/home/FinalCTA'
import { FAQ } from '@/components/home/FAQ'
import {
  getIndustryContent,
  getAllIndustrySlugs,
} from '@/lib/content/copy/industries'
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/lib/schema'
import { SITE_URL } from '@/lib/content/site'

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const c = getIndustryContent(slug)
  if (!c) return {}
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    alternates: { canonical: `${SITE_URL}/industries/${slug}` },
  }
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const c = getIndustryContent(slug)
  if (!c) notFound()

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        headline={c.hero.headline}
        sub={c.hero.sub}
        primaryCta={{ label: 'Book a free consultation', href: '/contact' }}
        secondaryCta={{ label: 'WhatsApp us', message: c.whatsappMessage }}
      />

      {/* Intro + pain points */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="THE PROBLEM" headline="What gets in the way." />
              <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
                {c.intro}
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              {c.pains.map((pain) => (
                <div
                  key={pain.title}
                  className="rounded-lg border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
                    {pain.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                    {pain.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* How we help — links to service pages */}
      <Section theme="dark">
        <Container>
          <SectionHeader
            eyebrow="HOW WE HELP"
            headline="The services that solve it."
            theme="dark"
          />

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {c.help.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-[color:var(--color-electric)] hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-2.5">
                  <Check
                    aria-hidden
                    className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-accent)]"
                    strokeWidth={2.5}
                  />
                  <h3 className="text-lg font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{item.body}</p>
                <span className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-400 group-hover:text-white transition-colors">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related reading — only when supporting posts exist */}
      {c.relatedPosts.length > 0 ? (
        <Section theme="cream" size="md">
          <Container>
            <SectionHeader eyebrow="RELATED READING" headline="Go deeper." />
            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
              {c.relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-[color:var(--color-electric)]"
                >
                  <span className="text-base md:text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
                    {post.title}
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-[color:var(--color-electric)] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <FAQ eyebrow="QUESTIONS" headline="What businesses ask us." faqs={c.faqs} />

      <FinalCTA
        headline="Let’s get your IT handled."
        sub="Book a free consultation, or send us a WhatsApp. We’ll review what you have and tell you honestly what’s working and what isn’t."
        primary="Book a free consultation"
        secondary="WhatsApp us"
        whatsappMessage={c.whatsappMessage}
      />

      {/* Schema: Service + FAQ + Breadcrumb */}
      <Script
        id={`industry-service-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: c.serviceName,
              description: c.metaDescription,
              slug: `industries/${slug}`,
              serviceType: 'IT Services',
            }),
          ),
        }}
      />
      <Script
        id={`industry-faq-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(c.faqs)) }}
      />
      <Script
        id={`industry-breadcrumb-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: c.serviceName, url: `${SITE_URL}/industries/${slug}` },
            ]),
          ),
        }}
      />
    </>
  )
}
