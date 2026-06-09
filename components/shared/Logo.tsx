import Link from 'next/link'
import { cn } from '@/lib/utils'

type LogoVariant = 'wordmark' | 'mark' | 'lockup'
type LogoTheme = 'light' | 'dark'
type LogoSize = 'sm' | 'md' | 'lg' | 'xl'

interface LogoProps {
  variant?: LogoVariant
  theme?: LogoTheme
  size?: LogoSize
  className?: string
  /**
   * If true the logo is wrapped in a Next Link to "/" with an accessible label.
   * Defaults to true — Nav and Footer want the link; for previews/OG images
   * pass `linked={false}`.
   */
  linked?: boolean
}

const sizeMap: Record<LogoSize, { text: string; mark: number; gap: string }> = {
  sm: { text: 'text-lg', mark: 24, gap: 'gap-1.5' },
  md: { text: 'text-2xl', mark: 32, gap: 'gap-2' },
  lg: { text: 'text-4xl', mark: 44, gap: 'gap-2.5' },
  xl: { text: 'text-6xl', mark: 64, gap: 'gap-3' },
}

/**
 * Notched-cube icon mark. Square + a corner cut filled with the accent.
 * Rendered as inline SVG so it picks up the brand tokens consistently and
 * can be embedded in OG images without an extra HTTP fetch.
 */
function IconMark({ size }: { size: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className="shrink-0"
      role="img"
      aria-label="ITSolute Systems icon"
    >
      <rect width="64" height="64" rx="12" fill="#1e4ed8" />
      <path
        d="M 64 12 A 12 12 0 0 0 52 0 L 42 0 L 42 16 Q 42 24 50 24 L 64 24 Z"
        fill="#ec8f34"
      />
    </svg>
  )
}

function Wordmark({
  textClass,
  theme,
}: {
  textClass: string
  theme: LogoTheme
}) {
  const restColor =
    theme === 'dark' ? 'text-white' : 'text-[color:var(--color-ink)]'
  return (
    <span
      className={cn(
        'font-medium tracking-[-0.02em] leading-none',
        textClass,
        restColor,
      )}
    >
      <span className="text-[color:var(--color-electric)]">IT</span>Solute
    </span>
  )
}

export function Logo({
  variant = 'lockup',
  theme = 'light',
  size = 'md',
  className,
  linked = true,
}: LogoProps) {
  const { text, mark, gap } = sizeMap[size]

  const content =
    variant === 'mark' ? (
      <span className={cn('inline-flex', className)}>
        <IconMark size={mark} />
      </span>
    ) : variant === 'wordmark' ? (
      <span className={cn('inline-flex', className)}>
        <Wordmark textClass={text} theme={theme} />
      </span>
    ) : (
      <span className={cn('inline-flex items-center', gap, className)}>
        <IconMark size={mark} />
        <Wordmark textClass={text} theme={theme} />
      </span>
    )

  if (!linked) return content
  return (
    <Link href="/" aria-label="ITSolute Systems — Home" className="inline-flex">
      {content}
    </Link>
  )
}
