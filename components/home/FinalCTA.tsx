'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/button'
import { DotGrid } from '@/components/shared/DotGrid'
import { whatsappLink } from '@/lib/whatsapp'
import { SITE, GMAPS_URL } from '@/lib/content/site'
import { fadeUp, inView } from '@/lib/motion'

type Props = {
  headline: string
  sub: string
  primary?: string
  secondary?: string
  whatsappMessage?: string
}

export function FinalCTA({
  headline,
  sub,
  primary = 'Book a free audit',
  secondary = 'WhatsApp us',
  whatsappMessage = "Hi ITSolute, I'd like to book a free IT audit.",
}: Props) {
  return (
    <Section theme="dark" size="lg" className="relative">
      <DotGrid />
      <Container className="relative">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center"
          initial="initial"
          whileInView="animate"
          viewport={inView}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] text-white">
            {headline}
          </h2>
          <p className="max-w-2xl text-base md:text-lg leading-relaxed text-slate-300">{sub}</p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Button asChild size="lg" variant="primary">
              <Link href="/contact">{primary}</Link>
            </Button>
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-2 text-white hover:text-[color:var(--color-cyan)] transition-colors"
            >
              <span>{secondary}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="mt-4 font-mono text-xs md:text-sm text-slate-500 tracking-wide">
            {SITE.contact.phoneDisplay} · {SITE.contact.email} ·{' '}
            <a
              href={GMAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {SITE.hq.addressLine}
            </a>{' '}
            · {SITE.hours.display}
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
