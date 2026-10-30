import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { FinalCTA } from '@/components/home/FinalCTA'
import { FAQ } from '@/components/home/FAQ'
import { homeAutomationHub } from '@/lib/content/copy/homeAutomation'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import { SITE_URL } from '@/lib/content/site'

export const metadata = {
  title: { absolute: 'Home Automation in Kerala — Gates, Locks & Curtains' },
  description:
    'Automatic gates, video door phones, smart door locks and motorised curtains, installed and serviced across Kerala. Free site survey.',
  alternates: { canonical: `${SITE_URL}/home-automation` },
  openGraph: {
    title: 'Home Automation in Kerala — Gates, Locks & Curtains',
    description:
      'Automatic gates, video door phones, smart door locks and motorised curtains, installed and serviced across Kerala. Free site survey.',
    url: `${SITE_URL}/home-automation`,
  },
}

export default function HomeAutomationPage() {
  const contactHref = '/contact?service=home-automation'

  return (
    <>
      <PageHero
        eyebrow={homeAutomationHub.hero.eyebrow}
        headline={homeAutomationHub.hero.headline}
        sub={homeAutomationHub.hero.sub}
        primaryCta={{ label: 'Request a site survey', href: contactHref }}
        secondaryCta={{
          label: 'WhatsApp us',
          message: homeAutomationHub.hero.whatsappMessage,
        }}
        image={{
          src: '/images/home-automation/hub.jpg',
          alt: 'Home automation installed by ITSolute in a Kerala home',
          intent:
            'Kerala living room showing an automated gate visible through the window, motorised curtains and a wall-mounted door phone monitor',
        }}
      />

      {/* Intro */}
      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={homeAutomationHub.intro.eyebrow}
                headline={homeAutomationHub.intro.headline}
              />
            </div>
            <div className="lg:col-span-7 flex items-center">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {homeAutomationHub.intro.body}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What we automate — links out to each product */}
      <Section theme="dark">
        <Container>
          <SectionHeader
            eyebrow={homeAutomationHub.products.eyebrow}
            headline={homeAutomationHub.products.headline}
            theme="dark"
          />
          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
            {homeAutomationHub.products.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[color:var(--color-electric)] hover:-translate-y-0.5"
              >
                <h2 className="text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">{item.blurb}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors group-hover:text-[color:var(--color-accent)]">
                  See {item.title.toLowerCase()}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Voice and app control */}
      <Section theme="cream">
        <Container>
          <SectionHeader
            eyebrow={homeAutomationHub.voice.eyebrow}
            headline={homeAutomationHub.voice.headline}
          />
          <p className="mt-8 max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
            {homeAutomationHub.voice.body}
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {homeAutomationHub.voice.points.map((point) => {
              const Icon = point.icon
              return (
                <div
                  key={point.title}
                  className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-6"
                >
                  <Icon
                    aria-hidden
                    strokeWidth={1.5}
                    className="h-8 w-8 text-[color:var(--color-electric)]"
                  />
                  <h3 className="text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{point.body}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Full home automation — deliberately one paragraph, no package list */}
      <Section theme="light">
        <Container>
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow={homeAutomationHub.full.eyebrow}
              headline={homeAutomationHub.full.headline}
            />
            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
              {homeAutomationHub.full.body}
            </p>
            <Button asChild className="mt-8" variant="primary">
              <Link href={contactHref}>Book a free site survey</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <FAQ
        eyebrow="QUESTIONS"
        headline="Common questions before your site survey."
        faqs={homeAutomationHub.faqs}
      />

      <FinalCTA
        headline="Start with one thing that annoys you daily."
        sub="Free site survey across Kerala. Fixed written quote before you commit, and a straight answer about what each model can and cannot do."
        primary="Request a site survey"
        secondary="WhatsApp us"
        whatsappMessage={homeAutomationHub.hero.whatsappMessage}
      />

      <Script
        id="home-automation-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Home Automation',
              description:
                'Automatic gates, video door phones, smart door locks and motorised curtains and blinds, installed and serviced across Kerala.',
              slug: 'home-automation',
              serviceType: 'Home Automation',
            }),
          ),
        }}
      />
      <Script
        id="home-automation-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(homeAutomationHub.faqs)),
        }}
      />
      <Script
        id="home-automation-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Home Automation', url: `${SITE_URL}/home-automation` },
            ]),
          ),
        }}
      />
    </>
  )
}
