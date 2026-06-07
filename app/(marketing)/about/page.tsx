import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { FinalCTA } from '@/components/home/FinalCTA'
import { aboutCopy } from '@/lib/content/copy/about'
import { SITE_URL } from '@/lib/content/site'
import { cn } from '@/lib/utils'

export const metadata = {
  title: {
    absolute: 'About ITSolute Systems · IT Company in Kottayam, Kerala',
  },
  description:
    'ITSolute Systems is a Kottayam-based IT services company serving SMBs across Kerala. Hardware, software, repair, networking, automation — under one roof.',
  alternates: { canonical: `${SITE_URL}/about` },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutCopy.hero.eyebrow}
        headline={aboutCopy.hero.headline}
        sub={aboutCopy.hero.sub}
      />

      {/* Story */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={aboutCopy.story.eyebrow}
                headline={aboutCopy.story.headline}
              />
            </div>
            <div className="lg:col-span-7 flex flex-col gap-5 text-base md:text-lg text-slate-600 leading-relaxed">
              {aboutCopy.story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission statement */}
      <Section theme="dark" size="md">
        <Container>
          <p className="mx-auto max-w-4xl text-center text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.03em] leading-[1.1] text-white">
            {aboutCopy.mission}
          </p>
        </Container>
      </Section>

      {/* Team */}
      <Section theme="cream">
        <Container>
          <SectionHeader
            eyebrow={aboutCopy.team.eyebrow}
            headline={aboutCopy.team.headline}
            sub={aboutCopy.team.sub}
          />
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-amber-600">
            {aboutCopy.team.note}
          </p>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {aboutCopy.team.members.map((m) => (
              <div
                key={m.role}
                className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6"
              >
                <div
                  aria-hidden
                  className="flex aspect-square w-full items-center justify-center rounded-lg bg-[color:var(--color-ink)] text-white"
                >
                  <span className="font-mono text-3xl tracking-tight">{m.initials}</span>
                </div>
                <div>
                  <p className="text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
                    {m.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our other businesses */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={aboutCopy.otherBusinesses.eyebrow}
            headline={aboutCopy.otherBusinesses.headline}
            sub={aboutCopy.otherBusinesses.sub}
          />

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
            {aboutCopy.otherBusinesses.items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-6 md:p-8 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-electric)]"
              >
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-medium tracking-tight text-[color:var(--color-ink)]">
                    {item.name}
                  </h3>
                  {item.external ? (
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  ) : null}
                </div>
                <p className="text-base text-slate-600 leading-relaxed">{item.body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section theme="dark">
        <Container>
          <SectionHeader
            eyebrow={aboutCopy.principles.eyebrow}
            headline={aboutCopy.principles.headline}
            theme="dark"
          />

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
            {aboutCopy.principles.items.map((p, i) => (
              <div key={p.title} className="flex flex-col gap-3">
                <span className={cn(
                  'font-mono text-sm tracking-widest text-[color:var(--color-cyan)]',
                )}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-medium tracking-tight text-white">{p.title}</h3>
                <p className="text-base text-slate-300 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA
        headline={aboutCopy.finalCta.headline}
        sub={aboutCopy.finalCta.sub}
        primary={aboutCopy.finalCta.primary}
        secondary={aboutCopy.finalCta.secondary}
      />
    </>
  )
}
