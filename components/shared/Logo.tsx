import Link from 'next/link'
import { cn } from '@/lib/utils'

type LogoTheme = 'light' | 'dark'
type LogoSize = 'sm' | 'md' | 'lg' | 'xl'

interface LogoProps {
  theme?: LogoTheme
  size?: LogoSize
  className?: string
  linked?: boolean
}

const sizeMap: Record<LogoSize, { wordHeight: number }> = {
  sm: { wordHeight: 20 },
  md: { wordHeight: 28 },
  lg: { wordHeight: 40 },
  xl: { wordHeight: 64 },
}

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

export function Logo({
  theme = 'light',
  size = 'md',
  className,
  linked = true,
}: LogoProps) {
  const { wordHeight } = sizeMap[size]

  const content = (
    <span className={cn('inline-flex', className)}>
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
