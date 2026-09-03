'use client'

import { useRef } from 'react'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import { trackWhatsAppClick } from '@/lib/gtag'

/**
 * The floating mobile WhatsApp bubble, wired to the "WhatsApp click" Google Ads
 * conversion. Guarded by a useRef so it fires once per click, not on re-render —
 * the same pattern as the nav WhatsApp CTA.
 */
export function FloatingWhatsApp({ message }: { message?: string }) {
  const fired = useRef(false)
  function handleClick() {
    if (fired.current) return
    fired.current = true
    trackWhatsAppClick()
  }
  return <WhatsAppButton variant="floating" message={message} onClick={handleClick} />
}
