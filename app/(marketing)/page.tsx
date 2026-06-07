import Script from 'next/script'
import Link from 'next/link'
import { Hero } from '@/components/home/Hero'
import { ProblemSection } from '@/components/home/ProblemSection'
import { ServicesBento } from '@/components/home/ServicesBento'
import { WhyUs } from '@/components/home/WhyUs'
import { FeatureRow } from '@/components/home/FeatureRow'
import { ScenariosGrid } from '@/components/home/ScenariosGrid'
import { IndustriesGrid } from '@/components/home/IndustriesGrid'
import { ProcessSteps } from '@/components/home/ProcessSteps'
import { TestimonialGrid } from '@/components/home/TestimonialGrid'
import { FAQ } from '@/components/home/FAQ'
import { FinalCTA } from '@/components/home/FinalCTA'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Metric } from '@/components/shared/Metric'
import { ArrowLink } from '@/components/shared/ArrowLink'
import { Button } from '@/components/ui/button'
import { homeCopy } from '@/lib/content/copy/home'
import { homeFAQs } from '@/lib/content/faqs'
import { images } from '@/lib/images'
import { localBusinessSchema, faqSchema } from '@/lib/schema'
import { SITE_URL } from '@/lib/content/site'

export const metadata = {
  title:
    'Computer Hardware, Laptops & IT Services in Kottayam | ITSolute Systems',
  description:
    'Business laptops, software, networking, laptop repair, and automation for Kerala SMBs. Based in Kottayam — serving offices, clinics, schools across Kerala. Free quote.',
  alternates: { canonical: `${SITE_URL}/` },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesBento />
      <WhyUs />

      {/* Feature row 1 — Computer Hardware (dark, image left) */}
      <FeatureRow
        theme="dark"
        imageSide="left"
        eyebrow={homeCopy.featuredHardware.eyebrow}
        headline={homeCopy.featuredHardware.headline}
        body={homeCopy.featuredHardware.body}
        cta={{ label: homeCopy.featuredHardware.cta, href: '/hardware' }}
        metrics={[...homeCopy.featuredHardware.metrics]}
        image={images.hardwareFeature}
      />

      {/* Feature row 2 — Laptop Care (cream, image right) */}
      <FeatureRow
        theme="cream"
        imageSide="right"
        eyebrow={homeCopy.featuredLaptopCare.eyebrow}
        headline={homeCopy.featuredLaptopCare.headline}
        body={homeCopy.featuredLaptopCare.body}
        note={homeCopy.featuredLaptopCare.note}
        cta={{ label: homeCopy.featuredLaptopCare.cta, href: '/laptop-care' }}
        image={images.laptopCareFeature}
      />

      {/* Feature row 3 — Automation (light, image right) */}
      <FeatureRow
        theme="light"
        imageSide="right"
        eyebrow={homeCopy.featuredAutomation.eyebrow}
        headline={homeCopy.featuredAutomation.headline}
        body={homeCopy.featuredAutomation.body}
        note={homeCopy.featuredAutomation.note}
        cta={{ label: homeCopy.featuredAutomation.cta, href: '/automation' }}
        image={images.automationFeature}
      />

      <ScenariosGrid />
      <IndustriesGrid />
      <ProcessSteps />
      <TestimonialGrid />

      {/* AMC closing — positioned AFTER the scenarios and testimonials so cold visitors
          see proof of capability first, then the retainer pitch. */}
      <Section theme="dark">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow={homeCopy.amcClosing.eyebrow}
                headline={homeCopy.amcClosing.headline}
                sub={homeCopy.amcClosing.body}
                theme="dark"
              />
            </div>
            <div className="lg:col-span-5">
              <div
                className="grid grid-cols-3 gap-6 border-t border-b py-6"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                {homeCopy.amcClosing.metrics.map((m) => (
                  <Metric
                    key={m.label}
                    value={m.value}
                    label={m.label}
                    size="sm"
                    theme="dark"
                  />
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                <Button asChild size="lg" variant="primary">
                  <Link href="/amc">{homeCopy.amcClosing.cta}</Link>
                </Button>
                <ArrowLink href="/contact?service=amc" theme="dark">
                  Get a quote
                </ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FAQ
        eyebrow={homeCopy.faq.eyebrow}
        headline={homeCopy.faq.headline}
        faqs={homeFAQs}
      />

      <FinalCTA
        headline={homeCopy.finalCta.headline}
        sub={homeCopy.finalCta.sub}
        primary={homeCopy.finalCta.primary}
        secondary={homeCopy.finalCta.secondary}
      />

      <Script
        id="home-localbusiness-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <Script
        id="home-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFAQs)) }}
      />
    </>
  )
}
