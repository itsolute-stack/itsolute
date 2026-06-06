'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { processSteps } from '@/lib/content/process'
import { homeCopy } from '@/lib/content/copy/home'
import { fadeUp, inView, stagger } from '@/lib/motion'

export function ProcessSteps() {
  return (
    <Section theme="dark">
      <Container>
        <SectionHeader
          eyebrow={homeCopy.process.eyebrow}
          headline={homeCopy.process.headline}
          theme="dark"
        />

        <motion.ol
          className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6"
          initial="initial"
          whileInView="animate"
          viewport={inView}
          variants={stagger(0.08)}
        >
          {processSteps.map((step, i) => (
            <motion.li
              key={step.index}
              variants={fadeUp}
              className="relative flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-[color:var(--color-cyan)] tracking-widest">
                  {step.index}
                </span>
                {i < processSteps.length - 1 ? (
                  <span
                    aria-hidden
                    className="hidden md:block flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"
                  />
                ) : null}
              </div>
              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white">
                {step.title}
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  )
}
