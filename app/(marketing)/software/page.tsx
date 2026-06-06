import Script from 'next/script'
import { Check } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { FinalCTA } from '@/components/home/FinalCTA'
import { softwareCopy } from '@/lib/content/copy/software'
import { serviceSchema } from '@/lib/schema'

export const metadata = {
  title: {
    absolute: 'Microsoft 365, Zoho & Software Licensing in Kerala | ITSolute',
  },
  description:
    'Microsoft 365, Google Workspace, Zoho One, Tally, and antivirus licensing — setup, migration, and training included. For SMBs across Kerala.',
}

export default function SoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow={softwareCopy.hero.eyebrow}
        headline={softwareCopy.hero.headline}
        sub={softwareCopy.hero.sub}
        primaryCta={{ label: softwareCopy.hero.primaryCta, href: '/contact?service=software' }}
        secondaryCta={{
          label: softwareCopy.hero.secondaryCta,
          message: 'Hi ITSolute, I need help with software licensing.',
        }}
      />

      {/* Feature blocks */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={softwareCopy.features.eyebrow}
            headline={softwareCopy.features.headline}
          />

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
            {softwareCopy.features.items.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-8"
              >
                <h3 className="text-2xl font-medium tracking-tight text-[color:var(--color-ink)]">
                  {f.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-electric)]">
                  {f.startingFrom}
                </p>
                <p className="text-base text-slate-600 leading-relaxed">{f.body}</p>
                <ul className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-5">
                  {f.features.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-electric)]" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Implementation */}
      <Section theme="dark">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={softwareCopy.implementation.eyebrow}
                headline={softwareCopy.implementation.headline}
                theme="dark"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                {softwareCopy.implementation.body}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Migrations */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={softwareCopy.migration.eyebrow}
            headline={softwareCopy.migration.headline}
          />

          <ul className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2">
            {softwareCopy.migration.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-5"
              >
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-electric)]"
                  strokeWidth={2.5}
                />
                <span className="text-base text-[color:var(--color-ink)]">{p}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCTA
        headline={softwareCopy.finalCta.headline}
        sub={softwareCopy.finalCta.sub}
        primary={softwareCopy.finalCta.primary}
        secondary={softwareCopy.finalCta.secondary}
        whatsappMessage="Hi ITSolute, I'd like to discuss software licensing."
      />

      <Script
        id="software-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Software Licensing & Implementation',
              description:
                'Microsoft 365, Google Workspace, Zoho One implementations and migrations for Kerala SMBs.',
              slug: 'software',
              serviceType: 'Software Licensing',
              priceRange: { low: '500', high: '200000' },
            }),
          ),
        }}
      />
    </>
  )
}
