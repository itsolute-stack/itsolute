import { cn } from '@/lib/utils'

export function Eyebrow({
  children,
  className,
  theme = 'light',
}: {
  children: React.ReactNode
  className?: string
  theme?: 'dark' | 'light'
}) {
  return (
    <p
      className={cn(
        'font-mono text-xs md:text-sm uppercase tracking-[0.15em] font-medium',
        // Brief intent: accent orange reads clearly on dark; on light surfaces
        // it fails WCAG for small text so we use brand blue instead.
        theme === 'dark'
          ? 'text-[color:var(--color-accent)]'
          : 'text-[color:var(--color-electric)]',
        className,
      )}
    >
      {children}
    </p>
  )
}
