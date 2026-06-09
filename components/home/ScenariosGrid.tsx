'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { Button } from '@/components/ui/button'
import { scenarios, SCENARIOS_SECTION } from '@/lib/content/scenarios'
import { fadeUp, stagger, inView } from '@/lib/motion'
import { whatsappLink } from '@/lib/whatsapp'

/**
 * Dark-theme grid section in the home flow. Renders three anonymized
 * walk-in scenarios + a workshop CTA row — no client names.
 */
export function ScenariosGrid() {
  return (
    <Section theme="dark">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={inView}
          className="max-w-3xl"
        >
          <Eyebrow theme="dark">{SCENARIOS_SECTION.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] text-white">
            {SCENARIOS_SECTION.headline}
          </h2>
          <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-slate-300">
            {SCENARIOS_SECTION.sub}
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="initial"
          whileInView="animate"
          viewport={inView}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5"
        >
          {scenarios.map((s) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.number}
                variants={fadeUp}
                className="flex flex-col rounded-lg border border-white/10 bg-white/[0.025] p-6 md:p-8 transition-colors hover:border-white/20"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-slate-500">
                    Scenario {s.number}
                  </span>
                  <Icon
                    aria-hidden
                    strokeWidth={1.5}
                    className="h-5 w-5 text-[color:var(--color-accent)]"
                  />
                </div>
                <h3 className="mt-6 text-xl md:text-2xl font-medium tracking-tight text-white leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  {s.body}
                </p>
                <div className="mt-auto pt-8 border-t border-white/10">
                  <div className="font-mono text-2xl md:text-3xl font-medium tracking-tight text-white">
                    {s.metric}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">
                    {s.metricLabel}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={inView}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <p className="text-sm md:text-base text-slate-400 max-w-md leading-relaxed">
            {SCENARIOS_SECTION.footnote}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="md" variant="primary">
              <Link href={SCENARIOS_SECTION.cta.primary.href}>
                {SCENARIOS_SECTION.cta.primary.label}
              </Link>
            </Button>
            <Button asChild size="md" variant="outlineDark">
              <a
                href={whatsappLink(SCENARIOS_SECTION.cta.secondary.message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SCENARIOS_SECTION.cta.secondary.label} →
              </a>
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
