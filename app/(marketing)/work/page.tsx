import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { PageHero } from '@/components/shared/PageHero'
import { PlaceholderImage } from '@/components/shared/PlaceholderImage'
import { FinalCTA } from '@/components/home/FinalCTA'
import { caseStudies } from '@/lib/content/caseStudies'
import { workCopy } from '@/lib/content/copy/work'
import { images } from '@/lib/images'
import { SITE_URL } from '@/lib/content/site'

export const metadata = {
  title: {
    absolute: 'Case Studies · IT Builds for Kerala SMBs | ITSolute Systems',
  },
  description:
    'Real systems running in real Kerala businesses. Multi-city operations, automated product catalogs, WhatsApp booking flows — built by ITSolute.',
  alternates: { canonical: `${SITE_URL}/work` },
}

const csImages = {
  'clean-warks': images.cleanWarksHero,
  cctvpros: images.cctvprosHero,
  'senza-aura': images.senzaAuraHero,
} as const

export default function WorkIndexPage() {
  return (
    <>
      <PageHero
        eyebrow={workCopy.hero.eyebrow}
        headline={workCopy.hero.headline}
        sub={workCopy.hero.sub}
      />

      <Section theme="light">
        <Container>
          <ul className="flex flex-col gap-4 lg:gap-5">
            {caseStudies.map((cs) => (
              <li key={cs.slug}>
                <Link
                  href={cs.href}
                  className="group grid grid-cols-1 gap-6 overflow-hidden rounded-lg border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-electric)] md:grid-cols-12 md:gap-0"
                >
                  <div className="relative aspect-[16/10] md:aspect-auto md:col-span-5 overflow-hidden">
                    <PlaceholderImage
                      src={csImages[cs.slug as keyof typeof csImages].src}
                      alt={csImages[cs.slug as keyof typeof csImages].alt}
                      intent={cs.imageHint}
                      width={1200}
                      height={750}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="md:col-span-7 flex flex-col gap-4 p-6 md:p-10">
                    <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                      CASE STUDY · {cs.index} · {cs.category}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[color:var(--color-ink)]">
                      {cs.client}
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                      {cs.shortOutcome}
                    </p>
                    <div className="mt-auto flex items-end justify-between gap-6 pt-6">
                      <div>
                        <div className="font-mono text-4xl md:text-5xl font-medium tracking-tight text-[color:var(--color-ink)]">
                          {cs.metric}
                        </div>
                        <div className="mt-1 text-sm text-slate-500">{cs.metricLabel}</div>
                      </div>
                      <span className="inline-flex items-center gap-2 font-medium text-[color:var(--color-electric)]">
                        Read story
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCTA
        headline={workCopy.finalCta.headline}
        sub={workCopy.finalCta.sub}
        primary={workCopy.finalCta.primary}
        secondary={workCopy.finalCta.secondary}
      />
    </>
  )
}
