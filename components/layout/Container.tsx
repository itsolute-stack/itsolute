import { cn } from '@/lib/utils'
import type { ReactNode, ElementType } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-7xl px-6 md:px-8', className)}>{children}</Tag>
  )
}
