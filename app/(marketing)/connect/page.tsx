import Script from 'next/script'
import { Check } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { DotGrid } from '@/components/shared/DotGrid'
import { Button } from '@/components/ui/button'
import { FAQ } from '@/components/home/FAQ'
import { connectCopy, connectFAQs, CONNECT_APP_URL } from '@/lib/content/copy/connect'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import { SITE_URL } from '@/lib/content/site'
import { cn } from '@/lib/utils'

export const metadata = {
  title: {
    absolute: 'ITSolute Connect · Missed-Call Recovery on WhatsApp for Local Businesses',
  },
  description:
    'ITSolute Connect turns missed calls into WhatsApp conversations. When your business misses a call, we message the caller from your own number so they book instead of leaving. Plans from ₹499/mo.',
  alternates: { canonical: `${SITE_URL}/connect` },
}

export default function ConnectPage() {
  return (
    <>
      {/* Hero — dark, dual CTA to the Connect app */}
      <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-white theme-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <DotGrid />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-20 h-[40vh] w-[40vh] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              'radial-gradient(closest-side, rgba(6,182,212,0.3), transparent)',
          }}
        />
        <Container className="relative">
          <div className="flex max-w-4xl flex-col gap-6">
            <Eyebrow theme="dark">{connectCopy.hero.eyebrow}</Eyebrow>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.04em] leading-[1.0]">
              {connectCopy.hero.headline}
            </h1>
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-slate-300">
              {connectCopy.hero.sub}
            </p>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <Button asChild size="lg" variant="primary">
                <a href={CONNECT_APP_URL} target="_blank" rel="noopener noreferrer">
                  {connectCopy.hero.getStarted}
                </a>
              </Button>
              <Button asChild size="lg" variant="outlineDark">
                <a href={CONNECT_APP_URL} target="_blank" rel="noopener noreferrer">
                  {connectCopy.hero.signIn}
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* The problem */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={connectCopy.problem.eyebrow}
                headline={connectCopy.problem.headline}
              />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-8">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {connectCopy.problem.body}
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {connectCopy.problem.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-5"
                  >
                    <p className="font-mono text-xl font-medium tracking-tight text-[color:var(--color-electric)]">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section theme="dark">
        <Container>
          <SectionHeader
            eyebrow={connectCopy.how.eyebrow}
            headline={connectCopy.how.headline}
            theme="dark"
          />

          <ol className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {connectCopy.how.steps.map((step, i) => (
              <li key={step.index} className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-[color:var(--color-accent)] tracking-widest">
                    {step.index}
                  </span>
                  {i < connectCopy.how.steps.length - 1 ? (
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

      {/* Plans */}
      <Section theme="cream">
        <Container>
          <SectionHeader
            eyebrow={connectCopy.plans.eyebrow}
            headline={connectCopy.plans.headline}
            sub={connectCopy.plans.sub}
          />

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {connectCopy.plans.tiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  'flex flex-col gap-5 rounded-lg border bg-white p-6 lg:p-7',
                  tier.highlight
                    ? 'border-[color:var(--color-electric)] shadow-[0_0_0_1px_var(--color-electric)]'
                    : 'border-slate-200',
                )}
              >
                <div className="flex items-center gap-2">
                  {tier.highlight ? (
                    <span className="rounded-sm bg-[color:var(--color-electric)] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
                      Most popular
                    </span>
                  ) : null}
                  {tier.comingSoon ? (
                    <span className="rounded-sm bg-[color:var(--color-accent)] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
                      Coming soon
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-medium tracking-tight text-[color:var(--color-ink)]">
                    {tier.name}
                  </h3>
                  <p className="flex items-baseline gap-1">
                    <span className="font-mono text-3xl font-medium tracking-tight text-[color:var(--color-ink)]">
                      {tier.price}
                    </span>
                    <span className="text-sm text-slate-500">{tier.cadence}</span>
                  </p>
                </div>

                <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-electric)]">
                  {tier.positioning}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">{tier.description}</p>

                <ul className="flex flex-col gap-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        aria-hidden
                        className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-electric)]"
                        strokeWidth={2.5}
                      />
                      <span className="text-sm text-slate-600 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="mt-auto"
                  variant={tier.highlight ? 'primary' : 'secondary'}
                >
                  <a href={CONNECT_APP_URL} target="_blank" rel="noopener noreferrer">
                    {tier.comingSoon ? 'Start on any plan' : 'Get started'}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Built on WhatsApp — platform transparency */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={connectCopy.platform.eyebrow}
            headline={connectCopy.platform.headline}
          />

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {connectCopy.platform.points.map((point) => (
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

      {/* FAQ */}
      <FAQ
        eyebrow="QUESTIONS"
        headline="What businesses ask before starting."
        faqs={connectFAQs}
      />

      {/* Final CTA — external to the Connect app */}
      <Section theme="dark" size="lg" className="relative">
        <DotGrid />
        <Container className="relative">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] text-white">
              {connectCopy.finalCta.headline}
            </h2>
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-slate-300">
              {connectCopy.finalCta.sub}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button asChild size="lg" variant="primary">
                <a href={CONNECT_APP_URL} target="_blank" rel="noopener noreferrer">
                  {connectCopy.hero.getStarted}
                </a>
              </Button>
              <Button asChild size="lg" variant="outlineDark">
                <a href={CONNECT_APP_URL} target="_blank" rel="noopener noreferrer">
                  {connectCopy.hero.signIn}
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Script
        id="connect-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'ITSolute Connect — Missed-Call Recovery',
              description:
                'Missed-call recovery and front-desk platform for local service businesses, built on the WhatsApp Business Platform. Automatically messages missed callers from the business’s own number.',
              slug: 'connect',
              serviceType: 'WhatsApp Business Messaging Software',
              priceRange: { low: '499', high: '4999' },
            }),
          ),
        }}
      />
      <Script
        id="connect-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema(connectFAQs.map((f) => ({ q: f.q, a: f.a }))),
          ),
        }}
      />
      <Script
        id="connect-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'ITSolute Connect', url: `${SITE_URL}/connect` },
            ]),
          ),
        }}
      />
    </>
  )
}
