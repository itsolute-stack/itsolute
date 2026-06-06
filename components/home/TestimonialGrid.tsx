'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { testimonials } from '@/lib/content/testimonials'
import { homeCopy } from '@/lib/content/copy/home'
import { fadeUp, inView, stagger } from '@/lib/motion'

export function TestimonialGrid() {
  return (
    <Section theme="cream">
      <Container>
        <SectionHeader
          eyebrow={homeCopy.testimonials.eyebrow}
          headline={homeCopy.testimonials.headline}
        />

        <motion.div
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5"
          initial="initial"
          whileInView="animate"
          viewport={inView}
          variants={stagger(0.1)}
        >
          {testimonials.slice(0, 3).map((t) => (
            <motion.figure
              key={t.quote}
              variants={fadeUp}
              className="flex flex-col gap-6 rounded-lg border border-slate-200 bg-white p-8"
            >
              <Quote
                aria-hidden
                className="h-6 w-6 text-[color:var(--color-electric)]"
                strokeWidth={1.5}
              />
              <blockquote className="text-lg md:text-xl font-medium tracking-tight text-[color:var(--color-ink)] leading-snug">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto flex flex-col gap-1 text-sm">
                <span className="font-medium text-[color:var(--color-ink)]">{t.name}</span>
                <span className="text-slate-600">{t.title}</span>
                <span className="text-slate-500">{t.company}</span>
                {t.todo ? (
                  <span className="mt-2 font-mono text-[10px] uppercase tracking-widest text-amber-600">
                    {t.todo}
                  </span>
                ) : null}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
