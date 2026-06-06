import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/validation/contact'

export const runtime = 'nodejs'

const RESEND_FROM = process.env.RESEND_FROM_EMAIL ?? 'ITSolute Systems <hello@itsolute.com>'
const RESEND_TO = process.env.RESEND_TO_EMAIL ?? 'hello@itsolute.com'

export async function POST(req: Request) {
  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Validation failed',
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    )
  }

  // Honeypot — silently accept and drop.
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true })
  }

  const { name, business, phone, email, service, message } = parsed.data

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY not configured')
    return NextResponse.json(
      { ok: false, error: 'Email delivery is not configured. Reach us via WhatsApp.' },
      { status: 500 },
    )
  }

  const resend = new Resend(apiKey)

  const subject = `New enquiry: ${name} · ${business} · ${service}`
  const text = [
    `New enquiry from the ITSolute website.`,
    ``,
    `Name:      ${name}`,
    `Business:  ${business}`,
    `Phone:     +91 ${phone}`,
    `Email:     ${email}`,
    `Service:   ${service}`,
    ``,
    `Message:`,
    message,
  ].join('\n')

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; color: #0A0F1C;">
      <h2 style="color:#1E40AF;">New enquiry from itsolute.com</h2>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;">
        <tr><td style="padding:8px 0;font-weight:600;width:140px;">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:600;">Business</td><td>${escapeHtml(business)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:600;">Phone</td><td><a href="tel:+91${phone}">+91 ${phone}</a></td></tr>
        <tr><td style="padding:8px 0;font-weight:600;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 0;font-weight:600;">Service</td><td>${escapeHtml(service)}</td></tr>
      </table>
      <h3 style="margin-top:24px;">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.6;color:#475569;">${escapeHtml(message)}</p>
    </div>
  `

  try {
    const result = await resend.emails.send({
      from: RESEND_FROM,
      to: RESEND_TO,
      replyTo: email,
      subject,
      text,
      html,
    })

    if (result.error) {
      console.error('Resend error:', result.error)
      return NextResponse.json(
        { ok: false, error: 'Could not send email. Please WhatsApp us.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact route exception:', err)
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Please WhatsApp us.' },
      { status: 500 },
    )
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
