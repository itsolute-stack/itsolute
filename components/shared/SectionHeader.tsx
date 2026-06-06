import { cn } from '@/lib/utils'
import { Eyebrow } from './Eyebrow'

type Props = {
  eyebrow?: string
  headline: string
  sub?: string
  theme?: 'dark' | 'light'
  align?: 'left' | 'center'
  className?: string
  id?: string
}

export function SectionHeader({
  eyebrow,
  headline,
  sub,
  theme = 'light',
  align = 'left',
  className,
  id,
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 max-w-3xl',
        align === 'center' && 'items-center text-center mx-auto',
        className,
      )}
    >
      {eyebrow ? <Eyebrow theme={theme}>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={cn(
          'text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05]',
          theme === 'dark' ? 'text-white' : 'text-[color:var(--color-ink)]',
        )}
      >
        {headline}
      </h2>
      {sub ? (
        <p
          className={cn(
            'text-base md:text-lg leading-relaxed max-w-2xl',
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600',
          )}
        >
          {sub}
        </p>
      ) : null}
    </div>
  )
}
