'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { ArrowLink } from '@/components/shared/ArrowLink'
import { Metric } from '@/components/shared/Metric'
import { PlaceholderImage } from '@/components/shared/PlaceholderImage'
import { fadeUp, inView, stagger } from '@/lib/motion'
import { cn } from '@/lib/utils'

type FeatureRowProps = {
  theme: 'dark' | 'light' | 'cream'
  imageSide: 'left' | 'right'
  eyebrow: string
  headline: string
  body: string
  note?: string
  cta: { label: string; href: string }
  metrics?: { value: string; label: string }[]
  image: { src: string; alt: string; intent: string }
}

export function FeatureRow({
  theme,
  imageSide,
  eyebrow,
  headline,
  body,
  note,
  cta,
  metrics,
  image,
}: FeatureRowProps) {
  // For text/border styling, treat anything non-dark as light.
  const isDark = theme === 'dark'
  const textTheme = isDark ? 'dark' : 'light'

  return (
    <Section theme={theme}>
      <Container>
        <motion.div
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
          initial="initial"
          whileInView="animate"
          viewport={inView}
          variants={stagger(0.12)}
        >
          <motion.div
            variants={fadeUp}
            className={cn(
              'lg:col-span-7',
              imageSide === 'right' && 'lg:order-1',
            )}
          >
            <div
              className={cn(
                'relative aspect-[4/3] w-full overflow-hidden rounded-lg',
                isDark ? 'border border-white/10' : 'border border-slate-200',
              )}
            >
              <PlaceholderImage
                src={image.src}
                alt={image.alt}
                intent={image.intent}
                width={1200}
                height={900}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="absolute inset-0"
              />
              {isDark ? (
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(10,15,28,0.45), rgba(10,15,28,0.1) 50%), linear-gradient(225deg, rgba(30,64,175,0.18), transparent 50%)',
                  }}
                />
              ) : null}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className={cn(
              'lg:col-span-5 flex flex-col gap-6',
              imageSide === 'right' && 'lg:order-0',
            )}
          >
            <Eyebrow theme={textTheme}>{eyebrow}</Eyebrow>
            <h2
              className={cn(
                'text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.05]',
                isDark ? 'text-white' : 'text-[color:var(--color-ink)]',
              )}
            >
              {headline}
            </h2>
            <p
              className={cn(
                'text-base md:text-lg leading-relaxed',
                isDark ? 'text-slate-300' : 'text-slate-600',
              )}
            >
              {body}
            </p>
            {note ? (
              <p
                className={cn(
                  'font-mono text-xs md:text-sm uppercase tracking-[0.15em]',
                  isDark
                    ? 'text-[color:var(--color-cyan)]'
                    : 'text-[color:var(--color-electric)]',
                )}
              >
                {note}
              </p>
            ) : null}

            {metrics ? (
              <div
                className="mt-2 grid grid-cols-3 gap-6 border-t border-b py-6"
                style={{
                  borderColor: isDark
                    ? 'rgba(255,255,255,0.1)'
                    : 'rgb(226 232 240)',
                }}
              >
                {metrics.map((m) => (
                  <Metric
                    key={m.label}
                    value={m.value}
                    label={m.label}
                    size="sm"
                    theme={textTheme}
                  />
                ))}
              </div>
            ) : null}

            <div>
              <ArrowLink href={cta.href} theme={isDark ? 'dark' : 'accent'}>
                {cta.label}
              </ArrowLink>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
