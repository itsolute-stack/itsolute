import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type Theme = 'dark' | 'light' | 'cream' | 'white'

type SectionProps = {
  children: ReactNode
  theme?: Theme
  size?: 'sm' | 'md' | 'lg'
  className?: string
  id?: string
  ariaLabelledBy?: string
}

const themeClasses: Record<Theme, string> = {
  dark: 'bg-[color:var(--color-ink)] text-white theme-dark',
  light: 'bg-[color:var(--color-surface)] text-[color:var(--color-ink)]',
  cream: 'bg-[color:var(--color-surface-cream)] text-[color:var(--color-ink)]',
  white: 'bg-white text-[color:var(--color-ink)]',
}

const sizeClasses = {
  sm: 'py-16 md:py-20',
  md: 'py-20 md:py-28 lg:py-32',
  lg: 'py-24 md:py-32 lg:py-40',
}

export function Section({
  children,
  theme = 'light',
  size = 'lg',
  className,
  id,
  ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn('relative overflow-hidden', themeClasses[theme], sizeClasses[size], className)}
    >
      {children}
    </section>
  )
}
