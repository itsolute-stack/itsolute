import Script from 'next/script'
import { Hero } from '@/components/home/Hero'
import { ProblemSection } from '@/components/home/ProblemSection'
import { ServicesBento } from '@/components/home/ServicesBento'
import { WhyUs } from '@/components/home/WhyUs'
import { FeatureRow } from '@/components/home/FeatureRow'
import { CaseStudyGrid } from '@/components/home/CaseStudyGrid'
import { IndustriesGrid } from '@/components/home/IndustriesGrid'
import { ProcessSteps } from '@/components/home/ProcessSteps'
import { TestimonialGrid } from '@/components/home/TestimonialGrid'
import { FAQ } from '@/components/home/FAQ'
import { FinalCTA } from '@/components/home/FinalCTA'
import { homeCopy } from '@/lib/content/copy/home'
import { homeFAQs } from '@/lib/content/faqs'
import { images } from '@/lib/images'
import { localBusinessSchema, faqSchema } from '@/lib/schema'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesBento />
      <WhyUs />

      <FeatureRow
        theme="dark"
        imageSide="left"
        eyebrow={homeCopy.featuredAmc.eyebrow}
        headline={homeCopy.featuredAmc.headline}
        body={homeCopy.featuredAmc.body}
        cta={{ label: homeCopy.featuredAmc.cta, href: '/amc' }}
        metrics={[...homeCopy.featuredAmc.metrics]}
        image={images.amcFeature}
      />

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

      <CaseStudyGrid />
      <IndustriesGrid />
      <ProcessSteps />
      <TestimonialGrid />

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
