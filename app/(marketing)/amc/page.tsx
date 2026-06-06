import Script from 'next/script'
import Link from 'next/link'
import { Check, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { ProcessSteps } from '@/components/home/ProcessSteps'
import { FAQ } from '@/components/home/FAQ'
import { TestimonialGrid } from '@/components/home/TestimonialGrid'
import { FinalCTA } from '@/components/home/FinalCTA'
import { amcCopy } from '@/lib/content/copy/amc'
import { amcPlans, amcIncludes, amcChecklist } from '@/lib/content/plans'
import { amcFAQs } from '@/lib/content/faqs'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import { SITE } from '@/lib/content/site'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'AMC Contracts',
  description:
    'AMC services in Kerala — monthly retainers covering hardware, software, networks, backups, and support. Written SLA, no surprises.',
}

export default function AMCPage() {
  return (
    <>
      <PageHero
        eyebrow={amcCopy.hero.eyebrow}
        headline={amcCopy.hero.headline}
        sub={amcCopy.hero.sub}
        primaryCta={{ label: amcCopy.hero.primaryCta, href: '/contact' }}
        secondaryCta={{
          label: amcCopy.hero.secondaryCta,
          message: amcCopy.hero.whatsappMessage,
        }}
      />

      {/* Intro */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={amcCopy.intro.eyebrow}
                headline={amcCopy.intro.headline}
              />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-5 text-base md:text-lg text-slate-600 leading-relaxed">
              {amcCopy.intro.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Plans */}
      <Section theme="dark">
        <Container>
          <SectionHeader
            eyebrow={amcCopy.plans.eyebrow}
            headline={amcCopy.plans.headline}
            sub={amcCopy.plans.sub}
            theme="dark"
          />

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
            {amcPlans.map((plan) => (
              <div
                key={plan.tier}
                className={cn(
                  'flex flex-col rounded-lg border p-8 transition-all',
                  plan.highlight
                    ? 'border-[color:var(--color-electric)] bg-white/[0.03] shadow-[0_0_0_1px_var(--color-electric)]'
                    : 'border-white/10 bg-white/[0.02]',
                )}
              >
                {plan.highlight ? (
                  <span className="self-start rounded-sm bg-[color:var(--color-electric)] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
                    Most popular
                  </span>
                ) : null}
                <h3 className="mt-4 text-3xl font-medium tracking-tight text-white">
                  {plan.tier}
                </h3>
                <p className="mt-2 text-base text-slate-300">{plan.positioning}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[color:var(--color-cyan)]">
                  {plan.for}
                </p>

                <ul className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-cyan)]"
                        strokeWidth={2.5}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="mt-auto" variant={plan.highlight ? 'primary' : 'outlineDark'}>
                  <Link href="/contact?service=amc">Get a quote</Link>
                </Button>
              </div>
            ))}
          </div>

          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-slate-500">
            Pricing varies by team size, locations, and coverage scope. Quoted after the audit.
          </p>
        </Container>
      </Section>

      {/* What's included */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={amcCopy.includes.eyebrow}
            headline={amcCopy.includes.headline}
          />

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {amcIncludes.map((cat) => (
              <div key={cat.category} className="flex flex-col gap-5">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[color:var(--color-ink)]">
                  {cat.category}
                </h3>
                <ul className="flex flex-col gap-3 border-t border-slate-200 pt-5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-slate-600">
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-electric)]"
                        strokeWidth={2.5}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Onboarding process — reuse home ProcessSteps */}
      <ProcessSteps />

      {/* AMC right for you? checklist */}
      <Section theme="cream">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={amcCopy.checklist.eyebrow}
                headline={amcCopy.checklist.headline}
                sub={amcCopy.checklist.sub}
              />
            </div>
            <ul className="lg:col-span-7 flex flex-col gap-3">
              {amcChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-electric)]"
                    strokeWidth={2}
                  />
                  <span className="text-base text-[color:var(--color-ink)] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <TestimonialGrid />

      {/* FAQ */}
      <FAQ
        eyebrow={amcCopy.faq.eyebrow}
        headline={amcCopy.faq.headline}
        faqs={amcFAQs}
      />

      {/* Final CTA */}
      <FinalCTA
        headline={amcCopy.finalCta.headline}
        sub={amcCopy.finalCta.sub}
        primary={amcCopy.finalCta.primary}
        secondary={amcCopy.finalCta.secondary}
        whatsappMessage="Hi ITSolute, I'd like to discuss an AMC contract."
      />

      <Script
        id="amc-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'AMC Contracts',
              description:
                'Annual maintenance contracts for SMBs across Kerala. Hardware, software, network, and support — under one accountable partner.',
              slug: 'amc',
            }),
          ),
        }}
      />
      <Script
        id="amc-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE.url },
              { name: 'AMC Contracts', url: `${SITE.url}/amc` },
            ]),
          ),
        }}
      />
      <Script
        id="amc-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(amcFAQs)) }}
      />
    </>
  )
}
