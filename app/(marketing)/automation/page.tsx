import Script from 'next/script'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { ArrowLink } from '@/components/shared/ArrowLink'
import { Button } from '@/components/ui/button'
import { FinalCTA } from '@/components/home/FinalCTA'
import { PlaceholderImage } from '@/components/shared/PlaceholderImage'
import { automationCopy } from '@/lib/content/copy/automation'
import { caseStudies } from '@/lib/content/caseStudies'
import { images } from '@/lib/images'
import { serviceSchema } from '@/lib/schema'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Automation & Custom Tools',
  description:
    'WhatsApp flows, dashboards, custom workflows, and Zoho implementations for Kerala SMBs. Built on the stack that runs our own businesses.',
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
                  <span className="font-mono text-sm text-[color:var(--color-cyan)] tracking-widest">
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

      {/* Case studies (Clean Warks + Senza Aura highlight) */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={automationCopy.caseStudiesIntro.eyebrow}
            headline={automationCopy.caseStudiesIntro.headline}
            sub={automationCopy.caseStudiesIntro.body}
          />

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {[caseStudies[0], caseStudies[2]].map((cs) => (
              <article
                key={cs.slug}
                className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <PlaceholderImage
                    src={cs.slug === 'clean-warks' ? images.cleanWarksHero.src : images.senzaAuraHero.src}
                    alt={cs.slug === 'clean-warks' ? images.cleanWarksHero.alt : images.senzaAuraHero.alt}
                    intent={cs.imageHint}
                    width={1200}
                    height={750}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="absolute inset-0"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                    CASE STUDY · {cs.index}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[color:var(--color-ink)]">
                    {cs.client}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">{cs.shortOutcome}</p>
                  <div className="mt-auto pt-4">
                    <ArrowLink href={cs.href} theme="accent">
                      Read the full story
                    </ArrowLink>
                  </div>
                </div>
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
              name: 'Automation & Custom Tools',
              description:
                'WhatsApp flows, dashboards, custom workflows, and Zoho implementations for Kerala SMBs.',
              slug: 'automation',
            }),
          ),
        }}
      />
    </>
  )
}
