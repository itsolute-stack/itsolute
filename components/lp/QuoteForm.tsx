'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, Check, MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/whatsapp'
import { LP_LOCATION_OPTIONS } from '@/lib/content/copy/landing'
import { fireLeadOnce, fireWhatsAppOnce, readAttribution } from '@/components/lp/lpTracking'
import { cn } from '@/lib/utils'

/**
 * Multi-step quote form for the Google Ads landing pages.
 *
 * One question per screen: tapping a card is a far smaller commitment than
 * facing a long form, and completion rates on paid mobile traffic reflect that.
 * Only name and WhatsApp number are typed — no email, no business name.
 *
 * Both copies on a page (hero and final CTA) share the conversion guard in
 * lpTracking, so submitting either counts exactly once.
 */

type Props = {
  /** 'lp-gate' | 'lp-barrier' — goes to the lead email as `source`. */
  source: string
  stepOne: { legend: string; options: string[] }
  /** District resolved from ?d= server-side; preselects step 2. */
  districtName: string
  whatsappMessage: string
}

const PHONE_RE = /^[6-9]\d{9}$/

export function QuoteForm({ source, stepOne, districtName, whatsappMessage }: Props) {
  const [step, setStep] = useState(1)
  const [type, setType] = useState('')
  const [location, setLocation] = useState(() =>
    LP_LOCATION_OPTIONS.some((o) => o.value === districtName) ? districtName : '',
  )
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [fallbackWa, setFallbackWa] = useState<string | null>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  // Price / audience cards elsewhere on the page preselect step 1 and scroll.
  useEffect(() => {
    function onPreselect(e: Event) {
      const preset = (e as CustomEvent<{ preset: string }>).detail?.preset
      if (!preset || !stepOne.options.includes(preset)) return
      setType(preset)
      setStep((s) => (s === 1 ? 2 : s))
    }
    window.addEventListener('lp:preselect', onPreselect)
    return () => window.removeEventListener('lp:preselect', onPreselect)
  }, [stepOne.options])

  useEffect(() => {
    if (step === 3) nameRef.current?.focus()
  }, [step])

  function validate() {
    const next: { name?: string; phone?: string } = {}
    if (name.trim().length < 2) next.name = 'Please enter your name'
    if (!PHONE_RE.test(phone)) next.phone = 'Enter a valid 10-digit mobile number'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function buildMessage() {
    return [
      `New quote request from the ${source} landing page.`,
      ``,
      `Looking for: ${type || 'Not specified'}`,
      `Location: ${location || 'Not specified'}`,
    ].join('\n')
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')

    const attribution = readAttribution()
    const payload = {
      name: name.trim(),
      phone,
      service: 'entrance-automation',
      message: buildMessage(),
      source,
      meta: { ...attribution, type, district: location },
    }

    // Prepared up front so the fallback carries everything they typed.
    const fallback = whatsappLink(
      `Hi ITSolute, I'd like a quote.\n\nName: ${name.trim()}\nPhone: +91 ${phone}\nLooking for: ${type || '—'}\nLocation: ${location || '—'}`,
    )

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('submit failed')
      fireLeadOnce()
      setStatus('done')
    } catch {
      setFallbackWa(fallback)
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div
        data-quote-form
        className="rounded-lg border border-slate-200 bg-white p-6 text-center"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-electric)]/10">
          <Check aria-hidden className="h-6 w-6 text-[color:var(--color-electric)]" />
        </div>
        <p className="mt-4 text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
          Done, {name.trim()}!
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          We&rsquo;ll WhatsApp you within 24 hours to fix a time for your free site
          survey.
        </p>
        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={fireWhatsAppOnce}
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 text-sm font-medium text-[color:var(--color-ink)]"
        >
          <MessageCircle aria-hidden className="h-4 w-4" />
          Or message us on WhatsApp now
        </a>
      </div>
    )
  }

  return (
    <form
      data-quote-form
      onSubmit={onSubmit}
      className="rounded-lg border border-slate-200 bg-white p-5 md:p-6"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-slate-500">
          Step {step} of 3
        </p>
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="inline-flex min-h-11 items-center gap-1 text-sm text-slate-600 hover:text-[color:var(--color-ink)]"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            Back
          </button>
        ) : null}
      </div>
      <div
        aria-hidden
        className="mt-3 h-1 w-full overflow-hidden rounded-full bg-slate-100"
      >
        <div
          className="h-full rounded-full bg-[color:var(--color-electric)] transition-all"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      {step === 1 ? (
        <fieldset className="mt-5">
          <legend className="text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
            {stepOne.legend}
          </legend>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {stepOne.options.map((o) => (
              <button
                key={o}
                type="button"
                onClick={() => {
                  setType(o)
                  setStep(2)
                }}
                className={cn(
                  'min-h-12 rounded-md border px-3 py-3 text-sm font-medium transition-colors',
                  type === o
                    ? 'border-[color:var(--color-electric)] bg-[color:var(--color-electric)] text-white'
                    : 'border-slate-300 text-[color:var(--color-ink)] hover:border-slate-400',
                )}
              >
                {o}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 2 ? (
        <fieldset className="mt-5">
          <legend className="text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
            Where is the site?
          </legend>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {LP_LOCATION_OPTIONS.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => {
                  setLocation(o.value)
                  setStep(3)
                }}
                className={cn(
                  'min-h-12 rounded-md border px-3 py-3 text-sm font-medium transition-colors',
                  location === o.value
                    ? 'border-[color:var(--color-electric)] bg-[color:var(--color-electric)] text-white'
                    : 'border-slate-300 text-[color:var(--color-ink)] hover:border-slate-400',
                )}
              >
                {o.value}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 3 ? (
        <div className="mt-5">
          <p className="text-lg font-medium tracking-tight text-[color:var(--color-ink)]">
            Where should we send the quote?
          </p>

          <label htmlFor={`lp-name-${source}`} className="mt-4 block text-sm text-slate-600">
            Your name
          </label>
          <input
            id={`lp-name-${source}`}
            ref={nameRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className="mt-1 min-h-12 w-full rounded-md border border-slate-300 px-3 text-base text-[color:var(--color-ink)] outline-none focus:border-[color:var(--color-electric)]"
          />
          {errors.name ? (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          ) : null}

          <label htmlFor={`lp-phone-${source}`} className="mt-4 block text-sm text-slate-600">
            WhatsApp number
          </label>
          <div className="mt-1 flex items-stretch overflow-hidden rounded-md border border-slate-300 focus-within:border-[color:var(--color-electric)]">
            <span className="flex items-center bg-slate-50 px-3 text-base text-slate-600">
              +91
            </span>
            <input
              id={`lp-phone-${source}`}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={10}
              className="min-h-12 w-full px-3 text-base text-[color:var(--color-ink)] outline-none"
            />
          </div>
          {errors.phone ? (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          ) : null}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-5 min-h-12 w-full rounded-md bg-[color:var(--color-electric)] px-5 text-sm font-medium text-white disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Get My Free Quote'}
          </button>
          <p className="mt-2 text-center text-xs text-slate-500">
            We reply within 24 hours. No spam. No obligation.
          </p>

          {status === 'error' && fallbackWa ? (
            <div className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-3">
              <p className="text-sm text-amber-900">
                That didn&rsquo;t go through. Send it on WhatsApp instead — we&rsquo;ve
                filled in your details.
              </p>
              <a
                href={fallbackWa}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  fireLeadOnce()
                  fireWhatsAppOnce()
                }}
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 text-sm font-medium text-[color:var(--color-ink)]"
              >
                <MessageCircle aria-hidden className="h-4 w-4" />
                Send on WhatsApp
              </a>
            </div>
          ) : null}
        </div>
      ) : null}
    </form>
  )
}
