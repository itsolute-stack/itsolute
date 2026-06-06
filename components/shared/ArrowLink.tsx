import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  href: string
  children: React.ReactNode
  theme?: 'dark' | 'light' | 'accent'
  className?: string
  external?: boolean
}

export function ArrowLink({ href, children, theme = 'light', className, external }: Props) {
  const Tag = external ? 'a' : Link
  const extraProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <Tag
      href={href}
      {...extraProps}
      className={cn(
        'group inline-flex items-center gap-2 font-medium transition-colors',
        theme === 'dark' && 'text-white hover:text-[color:var(--color-cyan)]',
        theme === 'light' && 'text-[color:var(--color-ink)] hover:text-[color:var(--color-electric)]',
        theme === 'accent' && 'text-[color:var(--color-electric)] hover:text-[color:var(--color-electric-light)]',
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Tag>
  )
}
