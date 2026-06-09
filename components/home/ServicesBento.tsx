'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { services } from '@/lib/content/services'
import { homeCopy } from '@/lib/content/copy/home'
import { fadeUp, inView, stagger } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function ServicesBento() {
  const hardware = services.find((s) => s.slug === 'hardware')!
  const software = services.find((s) => s.slug === 'software')!
  const laptopCare = services.find((s) => s.slug === 'laptop-care')!
  const networking = services.find((s) => s.slug === 'networking')!
  const automation = services.find((s) => s.slug === 'automation')!

  return (
    <Section theme="dark" id="services">
      <Container>
        <SectionHeader
          eyebrow={homeCopy.services.eyebrow}
          headline={homeCopy.services.headline}
          theme="dark"
        />

        <motion.div
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_auto_auto] lg:gap-5"
          initial="initial"
          whileInView="animate"
          viewport={inView}
          variants={stagger(0.08)}
        >
          {/* Cell 1 — Hardware, large feature, spans 2 cols + 2 rows */}
          <motion.div variants={fadeUp} className="md:col-span-2 md:row-span-2">
            <BentoCard service={hardware} featured />
          </motion.div>

          {/* Cell 2 — Software (top right) */}
          <motion.div variants={fadeUp}>
            <BentoCard service={software} />
          </motion.div>

          {/* Cell 3 — Laptop Care (mid right) */}
          <motion.div variants={fadeUp}>
            <BentoCard service={laptopCare} />
          </motion.div>

          {/* Cell 4 — Networking (bottom, spans 2 cols) */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <BentoCard service={networking} wide />
          </motion.div>

          {/* Cell 5 — Automation (bottom right) */}
          <motion.div variants={fadeUp}>
            <BentoCard service={automation} />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

function BentoCard({
  service,
  featured,
  wide,
}: {
  service: (typeof services)[number]
  featured?: boolean
  wide?: boolean
}) {
  const Icon = service.icon
  return (
    <Link
      href={service.href}
      className={cn(
        'group relative flex flex-col rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8 transition-all',
        'hover:-translate-y-0.5 hover:border-[color:var(--color-electric)] hover:bg-white/[0.04]',
        featured ? 'h-full min-h-[360px] md:min-h-[480px]' : 'h-full min-h-[200px]',
        wide && 'min-h-[220px]',
      )}
    >
      {/* Subtle background accent for featured */}
      {featured ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-lg opacity-50"
          style={{
            background:
              'radial-gradient(60% 60% at 80% 20%, rgba(30,78,216,0.18), transparent 70%)',
          }}
        />
      ) : null}

      <div className="relative flex h-full flex-col">
        <Icon
          aria-hidden
          className={cn(
            'text-[color:var(--color-accent)]',
            featured ? 'h-12 w-12' : 'h-10 w-10',
          )}
          strokeWidth={1.5}
        />

        <div className="mt-auto pt-12">
          <h3
            className={cn(
              'font-medium tracking-tight text-white',
              featured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl',
            )}
          >
            {service.title}
          </h3>
          {featured ? (
            <p className="mt-3 max-w-md text-base md:text-lg text-slate-300 leading-relaxed">
              {service.tagline}
            </p>
          ) : (
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              {service.description}
            </p>
          )}

          {featured ? (
            <ul className="mt-6 flex flex-col gap-2.5">
              {service.features.slice(0, 4).map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm md:text-base text-slate-300"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-3 bg-[color:var(--color-accent)]"
                  />
                  {f}
                </li>
              ))}
            </ul>
          ) : null}

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
            <span className="text-[color:var(--color-accent)] group-hover:text-white transition-colors">
              Learn more
            </span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-[color:var(--color-accent)]" />
          </span>
        </div>
      </div>
    </Link>
  )
}
