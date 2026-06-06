import { cn } from '@/lib/utils'

export function HairlineDivider({
  theme = 'light',
  className,
}: {
  theme?: 'dark' | 'light'
  className?: string
}) {
  return (
    <div
      className={cn(
        'h-px w-full',
        theme === 'dark' ? 'bg-white/10' : 'bg-slate-200',
        className,
      )}
    />
  )
}
