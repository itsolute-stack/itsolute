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

/**
 * Per-variant height in pixels. The native SVG aspect ratios are:
 *   wordmark / lockup → 780 × 150 (5.2 : 1)
 *   mark              →  64 ×  64 (1 : 1)
 * Heights below give a balanced visual weight per slot.
 */
const sizeMap: Record<
  LogoSize,
  { wordHeight: number; markSize: number; gap: string }
> = {
  sm: { wordHeight: 20, markSize: 22, gap: 'gap-1.5' },
  md: { wordHeight: 28, markSize: 28, gap: 'gap-2' },
  lg: { wordHeight: 40, markSize: 40, gap: 'gap-2.5' },
  xl: { wordHeight: 64, markSize: 64, gap: 'gap-3' },
}

/**
 * The brand wordmark is a static SVG asset in /public. We ship two variants:
 *
 *   /public/logo.svg        ← "Solute" in surface cream — for dark backgrounds
 *   /public/logo-light.svg  ← "Solute" in workshop ink — for light backgrounds
 *
 * Both have the brand-blue "IT" and the orange accent circle. Update the SVGs
 * once and every consumer (this component, OG image, schema, etc.) updates.
 */
function WordmarkImg({
  theme,
  height,
}: {
  theme: LogoTheme
  height: number
}) {
  const src = theme === 'dark' ? '/logo.svg' : '/logo-light.svg'
  // Native ratio is 780:150 (5.2:1). Width follows automatically.
  const width = Math.round(height * (780 / 150))
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="ITSolute Systems"
      width={width}
      height={height}
      style={{ height, width: 'auto' }}
      className="block"
    />
  )
}

function MarkImg({ size }: { size: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-mark.svg"
      alt="ITSolute Systems icon"
      width={size}
      height={size}
      style={{ height: size, width: size }}
      className="block shrink-0"
    />
  )
}

export function Logo({
  variant = 'lockup',
  theme = 'light',
  size = 'md',
  className,
  linked = true,
}: LogoProps) {
  const { wordHeight, markSize, gap } = sizeMap[size]

  const content =
    variant === 'mark' ? (
      <span className={cn('inline-flex', className)}>
        <MarkImg size={markSize} />
      </span>
    ) : variant === 'wordmark' ? (
      <span className={cn('inline-flex', className)}>
        <WordmarkImg theme={theme} height={wordHeight} />
      </span>
    ) : (
      <span className={cn('inline-flex items-center', gap, className)}>
        <MarkImg size={markSize} />
        <WordmarkImg theme={theme} height={wordHeight} />
      </span>
    )

  if (!linked) return content
  return (
    <Link href="/" aria-label="ITSolute Systems — Home" className="inline-flex">
      {content}
    </Link>
  )
}
