import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { PageHero } from '@/components/shared/PageHero'
import { Metric } from '@/components/shared/Metric'
import { PlaceholderImage } from '@/components/shared/PlaceholderImage'
import { FinalCTA } from '@/components/home/FinalCTA'
import { caseStudies, type CaseStudy } from '@/lib/content/caseStudies'
import { images } from '@/lib/images'
import { breadcrumbSchema } from '@/lib/schema'
import { SITE } from '@/lib/content/site'

type Props = { caseStudy: CaseStudy }

const csImages = {
  'clean-warks': images.cleanWarksHero,
  cctvpros: images.cctvprosHero,
  'senza-aura': images.senzaAuraHero,
} as const

export function CaseStudyDetail({ caseStudy: cs }: Props) {
  const img = csImages[cs.slug as keyof typeof csImages]
  const others = caseStudies.filter((c) => c.slug !== cs.slug)

  return (
    <>
      <PageHero
        eyebrow={`CASE STUDY · ${cs.index} · ${cs.category}`}
        headline={cs.hero.headline}
        sub={cs.hero.sub}
      />

      {/* Hero image */}
      <Section theme="light" size="sm">
        <Container>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-slate-200">
            <PlaceholderImage
              src={img.src}
              alt={img.alt}
              intent={cs.imageHint}
              width={1600}
              height={900}
              fill
              priority
              sizes="100vw"
              className="absolute inset-0"
            />
          </div>
        </Container>
      </Section>

      {/* Metrics */}
      <Section theme="dark" size="md">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
            {cs.metrics.map((m) => (
              <Metric
                key={m.label}
                value={m.value}
                label={m.label}
                note={m.note}
                size="lg"
                theme="dark"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Problem */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                THE PROBLEM
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-[-0.03em] text-[color:var(--color-ink)]">
                What was broken.
              </h2>
            </div>
            <ul className="lg:col-span-8 flex flex-col gap-4">
              {cs.problem.map((p) => (
                <li
                  key={p}
                  className="rounded-lg border border-slate-200 bg-white p-6 text-base md:text-lg text-slate-600 leading-relaxed"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Solution */}
      <Section theme="dark">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-cyan)]">
                THE SOLUTION
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-[-0.03em] text-white">
                What we built.
              </h2>
            </div>
            <ul className="lg:col-span-8 flex flex-col gap-4">
              {cs.solution.map((s) => (
                <li key={s} className="flex items-start gap-4">
                  <Check
                    className="mt-1.5 h-5 w-5 shrink-0 text-[color:var(--color-cyan)]"
                    strokeWidth={2}
                  />
                  <span className="text-base md:text-lg text-slate-300 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {cs.stack.length > 0 ? (
            <div className="mt-16 border-t border-white/10 pt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                Stack
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cs.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-sm border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </Section>

      {/* Outcome */}
      <Section theme="cream">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                THE OUTCOME
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-[-0.03em] text-[color:var(--color-ink)]">
                What changed.
              </h2>
            </div>
            <ul className="lg:col-span-8 flex flex-col gap-4">
              {cs.outcome.map((o) => (
                <li
                  key={o}
                  className="rounded-lg border border-slate-200 bg-white p-6 text-base md:text-lg text-[color:var(--color-ink)] leading-relaxed"
                >
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Other case studies */}
      <Section theme="dark">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500">More work</p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={other.href}
                className="group flex items-center justify-between gap-6 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-electric)]"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                    CASE STUDY · {other.index}
                  </p>
                  <p className="mt-3 text-2xl font-medium tracking-tight text-white">
                    {other.client}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{other.category}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-[color:var(--color-cyan)] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA
        headline="Want this kind of work for your business?"
        sub="Tell us what's eating your team's time. We'll show you what an automated version would look like."
        primary="Book a free audit"
        secondary="WhatsApp us"
      />

      <Script
        id={`${cs.slug}-breadcrumb-schema`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE.url },
              { name: 'Case Studies', url: `${SITE.url}/work` },
              { name: cs.client, url: `${SITE.url}${cs.href}` },
            ]),
          ),
        }}
      />
    </>
  )
}
