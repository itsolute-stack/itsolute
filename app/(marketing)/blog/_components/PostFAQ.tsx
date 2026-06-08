import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { Eyebrow } from '@/components/shared/Eyebrow'
import type { PostFAQ as PostFAQType } from '@/lib/blog'

export function PostFAQ({ faqs }: { faqs: PostFAQType[] }) {
  if (!faqs?.length) return null
  return (
    <section className="not-prose mt-16 border-t border-slate-200 pt-12">
      <Eyebrow>Frequently asked</Eyebrow>
      <h2 className="mt-4 text-2xl md:text-3xl font-medium tracking-tight text-[color:var(--color-ink)]">
        Common questions on this topic.
      </h2>
      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full border-t border-slate-200">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
