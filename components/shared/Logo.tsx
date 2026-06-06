import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * LOGO REPLACEMENT GUIDE
 * ----------------------
 * This component renders a typographic wordmark placeholder. To swap in a real logo:
 *
 *   1. Drop SVG files into /public:
 *        /public/logo.svg          (full wordmark, used in nav + footer)
 *        /public/logo-mark.svg     (icon-only, optional)
 *
 *   2. Set the `useFile` prop on the Logo component (or default in this file) to true.
 *
 *   3. Adjust width/height in the <img> tag below to match your SVG aspect ratio.
 *
 * Until then, the typographic wordmark below is the brand mark.
 */
type Props = {
  className?: string
  theme?: 'dark' | 'light'
  useFile?: boolean
}

export function Logo({ className, theme = 'light', useFile = false }: Props) {
  return (
    <Link
      href="/"
      aria-label="ITSolute Systems — Home"
      className={cn('inline-flex items-center gap-2', className)}
    >
      {useFile ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={theme === 'dark' ? '/logo-dark.svg' : '/logo.svg'}
          alt="ITSolute Systems"
          width={140}
          height={28}
          className="h-7 w-auto"
        />
      ) : (
        <span
          className={cn(
            'font-medium tracking-[-0.02em] text-lg',
            theme === 'dark' ? 'text-white' : 'text-[color:var(--color-ink)]',
          )}
        >
          <span className={theme === 'dark' ? 'text-white' : 'text-[color:var(--color-ink)]'}>
            ITSolute
          </span>
          <span
            className={cn(
              'ml-0.5 inline-block h-2 w-2 rounded-sm align-baseline',
              'bg-[color:var(--color-electric)]',
            )}
            aria-hidden
          />
        </span>
      )}
    </Link>
  )
}
