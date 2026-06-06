'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { homeCopy } from '@/lib/content/copy/home'
import { fadeUp, inView, stagger } from '@/lib/motion'

export function ProblemSection() {
  return (
    <Section theme="light">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow={homeCopy.problem.eyebrow}
              headline={homeCopy.problem.headline}
              sub={homeCopy.problem.sub}
              theme="light"
            />
          </div>

          <motion.ul
            className="lg:col-span-7 flex flex-col gap-4"
            initial="initial"
            whileInView="animate"
            viewport={inView}
            variants={stagger(0.1)}
          >
            {homeCopy.problem.statements.map((s) => (
              <motion.li
                key={s.title}
                variants={fadeUp}
                className="rounded-lg border border-slate-200 bg-white p-6 md:p-8 transition-colors hover:border-slate-300"
              >
                <p className="text-xl md:text-2xl font-medium tracking-tight text-[color:var(--color-ink)]">
                  {s.title}
                </p>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">{s.body}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </Section>
  )
}
