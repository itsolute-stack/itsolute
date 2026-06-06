import { Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'

export function PhoneLink({
  className,
  showIcon = true,
}: {
  className?: string
  showIcon?: boolean
}) {
  return (
    <a href={`tel:${PHONE_TEL}`} className={cn('inline-flex items-center gap-2 hover:underline', className)}>
      {showIcon ? <Phone className="h-4 w-4" /> : null}
      <span>{PHONE_DISPLAY}</span>
    </a>
  )
}
