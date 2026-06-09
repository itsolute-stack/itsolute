'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { Button } from '@/components/ui/button'
import { PlaceholderImage } from '@/components/shared/PlaceholderImage'
import { DotGrid } from '@/components/shared/DotGrid'
import { whatsappLink } from '@/lib/whatsapp'
import { homeCopy } from '@/lib/content/copy/home'
import { images } from '@/lib/images'
import { easeOutQuart } from '@/lib/motion'

export function Hero() {
  return (
    <section className="relative isolate min-h-[90vh] overflow-hidden bg-[color:var(--color-ink)] text-white theme-dark pt-28 pb-20 md:pt-32 md:pb-28 lg:pt-40">
      <DotGrid />
      {/* Accent-orange radial glow from top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[60vh] w-[60vh] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(236,143,52,0.30), transparent)',
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOutQuart }}
            >
              <Eyebrow theme="dark">{homeCopy.hero.eyebrow}</Eyebrow>
            </motion.div>

            <h1 className="font-medium leading-[0.95] tracking-[-0.04em] text-5xl md:text-7xl lg:text-[8rem]">
              <motion.span
                className="block text-white"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOutQuart, delay: 0.1 }}
              >
                {homeCopy.hero.headlineLineOne}
              </motion.span>
              <motion.span
                className="block text-slate-400"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOutQuart, delay: 0.3 }}
              >
                {homeCopy.hero.headlineLineTwo}
              </motion.span>
            </h1>

            <motion.p
              className="max-w-xl text-base md:text-lg leading-relaxed text-slate-300"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOutQuart, delay: 0.5 }}
            >
              {homeCopy.hero.sub}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOutQuart, delay: 0.65 }}
            >
              <Button asChild size="lg" variant="primary">
                <Link href="/contact">{homeCopy.hero.primaryCta}</Link>
              </Button>
              <a
                href={whatsappLink(homeCopy.hero.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-2 text-white hover:text-[color:var(--color-accent)] transition-colors"
              >
                <span>{homeCopy.hero.secondaryCta}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.p
              className="font-mono text-xs md:text-sm text-slate-500 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
            >
              {homeCopy.hero.trustStrip}
            </motion.p>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: easeOutQuart, delay: 0.3 }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-white/10"
            >
              <PlaceholderImage
                src={images.hero.src}
                alt={images.hero.alt}
                intent={images.hero.intent}
                width={800}
                height={1000}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="absolute inset-0"
              />
              {/* Electric-blue light leak overlay */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(30,78,216,0.25), transparent 50%), linear-gradient(225deg, rgba(236,143,52,0.12), transparent 60%)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
