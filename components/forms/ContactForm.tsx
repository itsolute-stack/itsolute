'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { contactSchema, type ContactInput } from '@/lib/validation/contact'
import { whatsappLink } from '@/lib/whatsapp'
import { contactCopy } from '@/lib/content/copy/contact'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: defaultService ?? '' },
  })

  const service = watch('service')

  async function onSubmit(values: ContactInput) {
    setStatus('submitting')
    setServerError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setServerError(data.error ?? 'Something went wrong. Try WhatsApp instead.')
        setStatus('error')
        return
      }
      setStatus('success')
      reset()
    } catch {
      setServerError('Network error. Try WhatsApp instead.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-8">
        <h3 className="text-2xl font-medium tracking-tight text-[color:var(--color-ink)]">
          {contactCopy.form.successHeading}
        </h3>
        <p className="text-base text-slate-600 leading-relaxed">
          {contactCopy.form.successBody}
        </p>
        <a
          href={whatsappLink('Hi ITSolute, I just submitted the contact form.')}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-[color:var(--color-electric)] hover:underline"
        >
          <MessageCircle className="h-4 w-4" />
          Or message us on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-lg border border-slate-200 bg-white p-6 md:p-8"
    >
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl font-medium tracking-tight text-[color:var(--color-ink)]">
          {contactCopy.form.heading}
        </h3>
        <p className="text-sm text-slate-600">{contactCopy.form.sub}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Your name" id="name" error={errors.name?.message}>
          <Input id="name" autoComplete="name" {...register('name')} />
        </Field>

        <Field label="Business name" id="business" error={errors.business?.message}>
          <Input id="business" autoComplete="organization" {...register('business')} />
        </Field>

        <Field label="Phone" id="phone" error={errors.phone?.message}>
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            placeholder="98765 43210"
            autoComplete="tel"
            {...register('phone')}
          />
        </Field>

        <Field label="Email" id="email" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" {...register('email')} />
        </Field>
      </div>

      <Field label="What can we help with?" id="service" error={errors.service?.message}>
        <Select value={service} onValueChange={(v) => setValue('service', v, { shouldValidate: true })}>
          <SelectTrigger id="service">
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            {contactCopy.serviceOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field label="Message" id="message" error={errors.message?.message}>
        <Textarea
          id="message"
          placeholder="A few words about what you need."
          rows={5}
          {...register('message')}
        />
      </Field>

      {/* Honeypot — keep off-screen, real users won't fill it */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" type="text" autoComplete="off" tabIndex={-1} {...register('website')} />
      </div>

      {serverError ? (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </p>
      ) : null}

      <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-4">
        <Button type="submit" size="lg" variant="primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
          <ArrowRight className="h-4 w-4" />
        </Button>
        <a
          href={whatsappLink('Hi ITSolute, I have a question.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[color:var(--color-electric)] hover:underline"
        >
          <MessageCircle className="h-4 w-4" />
          Or message us on WhatsApp
        </a>
      </div>
    </form>
  )
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string
  id: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  )
}
