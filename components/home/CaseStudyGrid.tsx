'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { caseStudies } from '@/lib/content/caseStudies'
import { homeCopy } from '@/lib/content/copy/home'
import { fadeUp, inView, stagger } from '@/lib/motion'

export function CaseStudyGrid() {
  return (
    <Section theme="dark">
      <Container>
        <SectionHeader
          eyebrow={homeCopy.caseStudies.eyebrow}
          headline={homeCopy.caseStudies.headline}
          theme="dark"
        />

        <motion.div
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5"
          initial="initial"
          whileInView="animate"
          viewport={inView}
          variants={stagger(0.1)}
        >
          {caseStudies.map((cs) => (
            <motion.article key={cs.slug} variants={fadeUp}>
              <Link
                href={cs.href}
                className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-electric)]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-slate-500">
                  CASE STUDY · {cs.index}
                </p>
                <h3 className="mt-6 text-2xl md:text-3xl font-medium tracking-tight text-white">
                  {cs.client}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-cyan)]">{cs.category}</p>
                <p className="mt-5 text-base text-slate-300 leading-relaxed">
                  {cs.shortOutcome}
                </p>

                <div className="mt-auto pt-10">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="font-mono text-4xl md:text-5xl font-medium tracking-tight text-white">
                        {cs.metric}
                      </div>
                      <div className="mt-1 text-sm text-slate-400">{cs.metricLabel}</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[color:var(--color-cyan)] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
