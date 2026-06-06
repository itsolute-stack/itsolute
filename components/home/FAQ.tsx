'use client'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import type { FAQ as FAQType } from '@/lib/content/faqs'

type Props = {
  eyebrow: string
  headline: string
  faqs: FAQType[]
}

export function FAQ({ eyebrow, headline, faqs }: Props) {
  return (
    <Section theme="light">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow={eyebrow} headline={headline} />
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full border-t border-slate-200">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </Section>
  )
}
