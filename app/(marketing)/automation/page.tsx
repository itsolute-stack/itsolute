import Script from 'next/script'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { FinalCTA } from '@/components/home/FinalCTA'
import { automationCopy } from '@/lib/content/copy/automation'
import { serviceSchema } from '@/lib/schema'
import { SITE_URL } from '@/lib/content/site'
import { cn } from '@/lib/utils'

export const metadata = {
  title: {
    absolute: 'Business Automation & Zoho Implementation in Kerala | ITSolute',
  },
  description:
    'Zoho implementations, WhatsApp Business flows, custom dashboards, invoicing automation. Scale a Kerala business without scaling the headcount.',
  alternates: { canonical: `${SITE_URL}/automation` },
}

export default function AutomationPage() {
  return (
    <>
      <PageHero
        eyebrow={automationCopy.hero.eyebrow}
        headline={automationCopy.hero.headline}
        sub={automationCopy.hero.sub}
        primaryCta={{ label: automationCopy.hero.primaryCta, href: '/contact?service=automation' }}
        secondaryCta={{
          label: automationCopy.hero.secondaryCta,
          message: 'Hi ITSolute, I want to discuss an automation project.',
        }}
      />

      {/* Capabilities grid */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={automationCopy.capabilities.eyebrow}
            headline={automationCopy.capabilities.headline}
          />

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {automationCopy.capabilities.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-6"
              >
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
            eyebrow={automationCopy.process.eyebrow}
            headline={automationCopy.process.headline}
            theme="dark"
          />

          <ol className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {automationCopy.process.steps.map((step, i) => (
              <li key={step.index} className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-[color:var(--color-accent)] tracking-widest">
                    {step.index}
                  </span>
                  {i < automationCopy.process.steps.length - 1 ? (
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

      {/* Tiers */}
      <Section theme="cream">
        <Container>
          <SectionHeader
            eyebrow={automationCopy.tiers.eyebrow}
            headline={automationCopy.tiers.headline}
          />

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
            {automationCopy.tiers.items.map((tier) => (
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
                    Most popular
                  </span>
                ) : null}
                <h3 className="text-2xl font-medium tracking-tight text-[color:var(--color-ink)]">
                  {tier.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-electric)]">
                  {tier.positioning}
                </p>
                <p className="text-base text-slate-600 leading-relaxed">{tier.scope}</p>
                <Button
                  asChild
                  className="mt-auto"
                  variant={tier.highlight ? 'primary' : 'secondary'}
                >
                  <Link href="/contact?service=automation">Discuss your project</Link>
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Anonymized scenarios */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={automationCopy.scenarios.eyebrow}
            headline={automationCopy.scenarios.headline}
            sub={automationCopy.scenarios.body}
          />

          <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
            {automationCopy.scenarios.items.map((sc) => (
              <article
                key={sc.title}
                className="flex flex-col gap-5 rounded-lg border border-slate-200 bg-white p-6 md:p-8"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  {sc.industry}
                </p>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[color:var(--color-ink)] leading-snug">
                  {sc.title}
                </h3>

                <ScenarioField label="Problem" body={sc.problem} />
                <ScenarioField label="Solution" body={sc.solution} />
                <ScenarioField label="Outcome" body={sc.outcome} accent />
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA
        headline={automationCopy.finalCta.headline}
        sub={automationCopy.finalCta.sub}
        primary={automationCopy.finalCta.primary}
        secondary={automationCopy.finalCta.secondary}
        whatsappMessage="Hi ITSolute, I want to discuss an automation project."
      />

      <Script
        id="automation-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Business Automation & Custom Builds',
              description:
                'WhatsApp flows, dashboards, custom workflows, and Zoho implementations for Kerala SMBs.',
              slug: 'automation',
              serviceType: 'Business Process Automation',
              priceRange: { low: '25000', high: '300000' },
            }),
          ),
        }}
      />
    </>
  )
}

function ScenarioField({
  label,
  body,
  accent,
}: {
  label: string
  body: string
  accent?: boolean
}) {
  return (
    <div className="flex flex-col gap-1">
      <p
        className={cn(
          'font-mono text-[10px] uppercase tracking-widest',
          accent ? 'text-[color:var(--color-electric)]' : 'text-slate-500',
        )}
      >
        {label}
      </p>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed">{body}</p>
    </div>
  )
}
