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
import { whatsappLink } from '@/lib/whatsapp'
import { networkingCopy, networkingFAQs } from '@/lib/content/copy/networking'
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema'
import { SITE_URL } from '@/lib/content/site'
import { cn } from '@/lib/utils'

export const metadata = {
  title: {
    absolute: 'Office WiFi & Network Setup in Kottayam, Kerala | ITSolute',
  },
  description:
    'Office WiFi, LAN cabling, firewalls, point-to-point links for Kerala businesses. Free site survey. Combined CCTV + networking installs available. Based in Kottayam.',
  alternates: {
    canonical: `${SITE_URL}/networking`,
  },
}

export default function NetworkingPage() {
  return (
    <>
      <PageHero
        eyebrow={networkingCopy.hero.eyebrow}
        headline={networkingCopy.hero.headline}
        sub={networkingCopy.hero.sub}
        primaryCta={{
          label: networkingCopy.hero.primaryCta,
          href: '/contact?service=networking',
        }}
        secondaryCta={{
          label: networkingCopy.hero.secondaryCta,
          message: networkingCopy.hero.whatsappMessage,
        }}
      />

      {/* What we install */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={networkingCopy.install.eyebrow}
            headline={networkingCopy.install.headline}
          />
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {networkingCopy.install.items.map((item) => {
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

      {/* Who needs this */}
      <Section theme="dark">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={networkingCopy.who.eyebrow}
                headline={networkingCopy.who.headline}
                theme="dark"
              />
            </div>
            <ul className="lg:col-span-7 flex flex-col gap-3">
              {networkingCopy.who.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-5"
                >
                  <ArrowRight
                    className="mt-1 h-5 w-5 shrink-0 text-[color:var(--color-cyan)]"
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
          <SectionHeader
            eyebrow={networkingCopy.why.eyebrow}
            headline={networkingCopy.why.headline}
          />
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {networkingCopy.why.points.map((p) => (
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

      {/* Process */}
      <Section theme="dark">
        <Container>
          <SectionHeader
            eyebrow={networkingCopy.process.eyebrow}
            headline={networkingCopy.process.headline}
            theme="dark"
          />
          <ol className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {networkingCopy.process.steps.map((step, i) => (
              <li key={step.index} className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-[color:var(--color-cyan)] tracking-widest">
                    {step.index}
                  </span>
                  {i < networkingCopy.process.steps.length - 1 ? (
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

      {/* Project tier examples */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={networkingCopy.tiers.eyebrow}
            headline={networkingCopy.tiers.headline}
          />
          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
            {networkingCopy.tiers.items.map((tier) => (
              <div
                key={tier.title}
                className={cn(
                  'flex flex-col gap-5 rounded-lg border bg-white p-8',
                  tier.highlight
                    ? 'border-[color:var(--color-electric)] shadow-[0_0_0_1px_var(--color-electric)]'
                    : 'border-slate-200',
                )}
              >
                {tier.highlight ? (
                  <span className="self-start rounded-sm bg-[color:var(--color-electric)] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
                    Most common
                  </span>
                ) : null}
                <h3 className="text-2xl font-medium tracking-tight text-[color:var(--color-ink)]">
                  {tier.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-electric)]">
                  {tier.scope}
                </p>
                <p className="text-base text-slate-600 leading-relaxed">{tier.details}</p>
                <p className="mt-2 font-mono text-3xl md:text-4xl font-medium tracking-tight text-[color:var(--color-ink)]">
                  {tier.from}
                  <span className="ml-2 font-sans text-sm font-normal text-slate-500">
                    starting
                  </span>
                </p>
                <Button asChild className="mt-auto" variant={tier.highlight ? 'primary' : 'secondary'}>
                  <Link href="/contact?service=networking">Request a site survey</Link>
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-slate-500 leading-relaxed">
            {networkingCopy.tiers.disclaimer}
          </p>
        </Container>
      </Section>

      {/* FAQ */}
      <FAQ
        eyebrow="NETWORKING FAQS"
        headline="Common questions before your site survey."
        faqs={networkingFAQs}
      />

      {/* Final CTA */}
      <FinalCTA
        headline={networkingCopy.finalCta.headline}
        sub={networkingCopy.finalCta.sub}
        primary={networkingCopy.finalCta.primary}
        secondary={networkingCopy.finalCta.secondary}
        whatsappMessage={networkingCopy.hero.whatsappMessage}
      />

      <Script
        id="networking-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Office WiFi & Networking',
              description:
                'Office WiFi setup, structured LAN cabling, firewalls, point-to-point links, and network maintenance for businesses in Kottayam and across Kerala.',
              slug: 'networking',
              serviceType: 'Computer Networking',
              priceRange: { low: '15000', high: '300000' },
            }),
          ),
        }}
      />
      <Script
        id="networking-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Networking', url: `${SITE_URL}/networking` },
            ]),
          ),
        }}
      />
      <Script
        id="networking-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(networkingFAQs)) }}
      />
    </>
  )
}
