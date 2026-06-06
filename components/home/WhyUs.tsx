'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { homeCopy } from '@/lib/content/copy/home'
import { fadeUp, inView, stagger } from '@/lib/motion'

export function WhyUs() {
  return (
    <Section theme="cream">
      <Container>
        <SectionHeader
          eyebrow={homeCopy.whyUs.eyebrow}
          headline={homeCopy.whyUs.headline}
        />

        <motion.div
          className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4"
          initial="initial"
          whileInView="animate"
          viewport={inView}
          variants={stagger(0.08)}
        >
          {homeCopy.whyUs.points.map((p) => (
            <motion.div key={p.index} variants={fadeUp} className="flex flex-col gap-4">
              <span className="font-mono text-5xl md:text-6xl font-medium tracking-tight text-[color:var(--color-electric)]">
                {p.index}
              </span>
              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[color:var(--color-ink)]">
                {p.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
