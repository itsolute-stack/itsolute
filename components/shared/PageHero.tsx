'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { DotGrid } from '@/components/shared/DotGrid'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/whatsapp'
import { easeOutQuart } from '@/lib/motion'

type Props = {
  eyebrow: string
  headline: string
  sub?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; message?: string }
}

export function PageHero({ eyebrow, headline, sub, primaryCta, secondaryCta }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-white theme-dark pt-32 pb-20 md:pt-40 md:pb-28">
      <DotGrid />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 h-[40vh] w-[40vh] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(6,182,212,0.3), transparent)',
        }}
      />
      <Container className="relative">
        <motion.div
          className="flex max-w-4xl flex-col gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutQuart }}
        >
          <Eyebrow theme="dark">{eyebrow}</Eyebrow>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.04em] leading-[1.0]">
            {headline}
          </h1>
          {sub ? (
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-slate-300">{sub}</p>
          ) : null}
          {(primaryCta || secondaryCta) ? (
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
              {primaryCta ? (
                <Button asChild size="lg" variant="primary">
                  {primaryCta.href.startsWith('http') ? (
                    <a href={primaryCta.href} target="_blank" rel="noopener noreferrer">
                      {primaryCta.label}
                    </a>
                  ) : (
                    <Link href={primaryCta.href}>{primaryCta.label}</Link>
                  )}
                </Button>
              ) : null}
              {secondaryCta ? (
                <a
                  href={whatsappLink(secondaryCta.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-2 text-white hover:text-[color:var(--color-accent)] transition-colors"
                >
                  <span>{secondaryCta.label}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              ) : null}
            </div>
          ) : null}
        </motion.div>
      </Container>
    </section>
  )
}
