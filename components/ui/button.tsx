import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-electric)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-[color:var(--color-electric)] text-white hover:bg-[color:var(--color-electric-light)] active:translate-y-[1px]',
        secondary:
          'bg-white text-[color:var(--color-ink)] hover:bg-slate-50 border border-slate-200 active:translate-y-[1px]',
        ghost:
          'bg-transparent text-[color:var(--color-ink)] hover:bg-slate-100',
        ghostDark:
          'bg-transparent text-white hover:bg-white/10',
        outlineDark:
          'bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5',
        link: 'text-[color:var(--color-electric)] underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-base',
        lg: 'h-12 px-6 text-base md:text-[15px]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
