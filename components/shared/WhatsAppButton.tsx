'use client'

import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type Variant = 'primary' | 'secondary' | 'ghostDark' | 'floating'

type Props = {
  message?: string
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
  label?: string
  className?: string
}

export function WhatsAppButton({
  message,
  variant = 'primary',
  size = 'md',
  label = 'WhatsApp us',
  className,
}: Props) {
  const href = whatsappLink(message)

  if (variant === 'floating') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={cn(
          'fixed bottom-5 right-5 z-40 md:hidden',
          'flex h-14 w-14 items-center justify-center rounded-full',
          'bg-[#25D366] text-white shadow-xl animate-pulse-once',
          'hover:scale-105 active:scale-95 transition-transform',
          className,
        )}
      >
        <MessageCircle className="h-6 w-6" fill="currentColor" />
      </a>
    )
  }

  const mappedVariant = variant === 'ghostDark' ? 'ghostDark' : variant
  return (
    <Button
      asChild
      variant={mappedVariant}
      size={size}
      className={className}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-4 w-4" />
        {label}
      </a>
    </Button>
  )
}
