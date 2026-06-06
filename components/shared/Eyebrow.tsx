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
        'font-mono text-xs md:text-sm uppercase tracking-[0.15em]',
        theme === 'dark' ? 'text-slate-400' : 'text-slate-500',
        className,
      )}
    >
      {children}
    </p>
  )
}
