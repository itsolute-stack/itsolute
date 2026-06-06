'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { industries } from '@/lib/content/industries'
import { homeCopy } from '@/lib/content/copy/home'
import { fadeUp, inView, stagger } from '@/lib/motion'

export function IndustriesGrid() {
  return (
    <Section theme="light" id="industries">
      <Container>
        <SectionHeader
          eyebrow={homeCopy.industries.eyebrow}
          headline={homeCopy.industries.headline}
        />

        <motion.div
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          initial="initial"
          whileInView="animate"
          viewport={inView}
          variants={stagger(0.06)}
        >
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <motion.div key={ind.slug} variants={fadeUp}>
                <Link
                  href={ind.href}
                  className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 md:p-8 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-electric)]"
                >
                  <Icon
                    aria-hidden
                    strokeWidth={1.5}
                    className="h-10 w-10 text-[color:var(--color-electric)]"
                  />
                  <h3 className="mt-8 text-xl md:text-2xl font-medium tracking-tight text-[color:var(--color-ink)]">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-base text-slate-600 leading-relaxed">{ind.description}</p>
                  <span className="mt-auto pt-8 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-electric)]">
                    How we help
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
