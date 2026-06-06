import { cn } from '@/lib/utils'

type Props = {
  value: string
  label: string
  size?: 'sm' | 'md' | 'lg'
  theme?: 'dark' | 'light'
  className?: string
  note?: string
}

export function Metric({ value, label, size = 'md', theme = 'light', className, note }: Props) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <span
        className={cn(
          'font-mono font-medium tracking-tight leading-none',
          size === 'sm' && 'text-3xl md:text-4xl',
          size === 'md' && 'text-4xl md:text-5xl lg:text-6xl',
          size === 'lg' && 'text-5xl md:text-7xl',
          theme === 'dark' ? 'text-white' : 'text-[color:var(--color-ink)]',
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          'text-sm md:text-base',
          theme === 'dark' ? 'text-slate-400' : 'text-slate-600',
        )}
      >
        {label}
      </span>
      {note ? (
        <span className={cn('font-mono text-[10px] uppercase tracking-widest', theme === 'dark' ? 'text-slate-500' : 'text-slate-400')}>
          {note}
        </span>
      ) : null}
    </div>
  )
}
