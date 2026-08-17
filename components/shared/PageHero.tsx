'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { DotGrid } from '@/components/shared/DotGrid'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/whatsapp'
import { easeOutQuart } from '@/lib/motion'
import { cn } from '@/lib/utils'

type Props = {
  eyebrow: string
  headline: string
  sub?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; message?: string }
  /**
   * Optional hero image. When provided, the hero becomes a two-column layout
   * (text left, image right on desktop), mirroring the home Hero. When omitted,
   * the hero is the single-column text layout used across all other pages —
   * those callers are unchanged.
   */
  image?: { src: string; alt: string }
}

export function PageHero({
  eyebrow,
  headline,
  sub,
  primaryCta,
  secondaryCta,
  image,
}: Props) {
  const content = (
    <motion.div
      className={cn('flex flex-col gap-6', image ? 'lg:col-span-7' : 'max-w-4xl')}
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
  )

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
        {image ? (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
            {content}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeOutQuart }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        ) : (
          content
        )}
      </Container>
    </section>
  )
}
