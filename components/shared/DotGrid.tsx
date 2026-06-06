import { cn } from '@/lib/utils'

/** Subtle dot grid pattern. Use as `<DotGrid />` inside a relative container. */
export function DotGrid({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: 'dark' | 'light'
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0',
        variant === 'dark' ? 'bg-dot-grid' : 'bg-dot-grid-light',
        className,
      )}
    />
  )
}
