'use client'

import { useEffect, useState } from 'react'
import { MessageCircle, Phone, ArrowRight } from 'lucide-react'
import { whatsappLink, PHONE_TEL } from '@/lib/whatsapp'
import {
  fireWhatsAppOnce,
  fireCallOnce,
  captureAttribution,
} from '@/components/lp/lpTracking'
import { cn } from '@/lib/utils'

/**
 * Scroll to the quote form.
 *
 * A page renders three copies — one beside the hero on desktop (hidden below
 * lg), one under the hero on mobile, one in the final CTA. Targeting by id
 * would always hit the first in DOM order, which on a phone is the hidden
 * desktop copy with zero height, so the CTA would appear to do nothing. Pick
 * the first copy that is actually laid out instead.
 */
export function scrollToForm() {
  const el = [...document.querySelectorAll<HTMLElement>('[data-quote-form]')].find(
    (n) => n.getBoundingClientRect().height > 0,
  )
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

/** Captures gclid/UTM once on mount. Rendered once per landing page. */
export function LpAttribution() {
  useEffect(() => {
    captureAttribution()
  }, [])
  return null
}

export function WhatsAppAction({
  message,
  label = 'WhatsApp',
  className,
  showIcon = true,
}: {
  message: string
  label?: string
  className?: string
  showIcon?: boolean
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={fireWhatsAppOnce}
      className={cn(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors',
        // Dark ink on WhatsApp green, not white: white on #25D366 is 1.98:1 and
        // fails WCAG AA. Ink gives 8.3:1 and keeps the recognisable green.
        'bg-[#25D366] text-[color:var(--color-ink)] hover:bg-[#1fbe5c]',
        className,
      )}
    >
      {showIcon ? <MessageCircle aria-hidden className="h-4 w-4" /> : null}
      {label}
    </a>
  )
}

export function CallAction({
  label = 'Call',
  className,
  showIcon = true,
}: {
  label?: string
  className?: string
  showIcon?: boolean
}) {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      onClick={fireCallOnce}
      className={cn(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors',
        className,
      )}
    >
      {showIcon ? <Phone aria-hidden className="h-4 w-4" /> : null}
      {label}
    </a>
  )
}

/** Primary CTA — scrolls to the quote form. */
export function FormScrollButton({
  label,
  className,
  preset,
}: {
  label: string
  className?: string
  /** Preselects step 1 before scrolling (used by the price / audience cards). */
  preset?: string
}) {
  return (
    <button
      type="button"
      onClick={() => {
        if (preset) {
          window.dispatchEvent(
            new CustomEvent('lp:preselect', { detail: { preset } }),
          )
        }
        scrollToForm()
      }}
      className={cn(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium transition-colors',
        className,
      )}
    >
      {label}
      <ArrowRight aria-hidden className="h-4 w-4" />
    </button>
  )
}

/**
 * Mobile-only bottom bar: Call · WhatsApp · Get Quote.
 *
 * Hides itself while a quote form is on screen so it never covers the fields
 * the visitor is filling in.
 */
export function StickyActionBar({ whatsappMessage }: { whatsappMessage: string }) {
  const [formVisible, setFormVisible] = useState(false)

  useEffect(() => {
    const forms = document.querySelectorAll('[data-quote-form]')
    if (!forms.length) return
    const seen = new Set<Element>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) seen.add(e.target)
          else seen.delete(e.target)
        }
        setFormVisible(seen.size > 0)
      },
      { rootMargin: '-80px 0px -80px 0px' },
    )
    forms.forEach((f) => io.observe(f))
    return () => io.disconnect()
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t border-slate-200 bg-white p-2 md:hidden',
        'transition-transform duration-200',
        formVisible ? 'translate-y-full' : 'translate-y-0',
      )}
      aria-hidden={formVisible}
    >
      <CallAction
        label="Call"
        className="border border-slate-300 text-[color:var(--color-ink)]"
      />
      <WhatsAppAction message={whatsappMessage} label="WhatsApp" />
      <FormScrollButton
        label="Quote"
        className="bg-[color:var(--color-electric)] text-white"
      />
    </div>
  )
}
