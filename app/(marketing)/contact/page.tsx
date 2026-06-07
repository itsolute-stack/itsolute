import Script from 'next/script'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { PageHero } from '@/components/shared/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import { whatsappLink } from '@/lib/whatsapp'
import { SITE, SITE_URL } from '@/lib/content/site'
import { contactCopy } from '@/lib/content/copy/contact'
import { localBusinessSchema } from '@/lib/schema'

export const metadata = {
  title: {
    absolute: 'Contact ITSolute · Parthas Lane, Kottayam | IT Services Kerala',
  },
  description:
    'Contact ITSolute Systems — Parthas Lane, Kottayam. WhatsApp +91 92076 40404, hello@itsolute.com. Serving offices, clinics, schools, shops across Kerala.',
  alternates: { canonical: `${SITE_URL}/contact` },
}

type SearchParams = Promise<{ service?: string }>

export default async function ContactPage({ searchParams }: { searchParams: SearchParams }) {
  const { service } = await searchParams
  const defaultService = mapServiceParam(service)

  return (
    <>
      <PageHero
        eyebrow={contactCopy.hero.eyebrow}
        headline={contactCopy.hero.headline}
        sub={contactCopy.hero.sub}
      />

      <Section theme="light">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm defaultService={defaultService} />
            </div>

            <div className="lg:col-span-5">
              <div className="flex flex-col gap-8 rounded-lg border border-slate-200 bg-white p-6 md:p-8">
                <h2 className="text-2xl font-medium tracking-tight text-[color:var(--color-ink)]">
                  {contactCopy.directHeading}
                </h2>

                <ul className="flex flex-col gap-5">
                  <ContactRow
                    icon={<MessageCircle className="h-5 w-5" />}
                    label="WhatsApp"
                    value={SITE.contact.phoneDisplay}
                    href={whatsappLink('Hi ITSolute, I have a question.')}
                    external
                  />
                  <ContactRow
                    icon={<Phone className="h-5 w-5" />}
                    label="Phone"
                    value={SITE.contact.phoneDisplay}
                    href={`tel:${SITE.contact.phoneTel}`}
                  />
                  <ContactRow
                    icon={<Mail className="h-5 w-5" />}
                    label="Email"
                    value={SITE.contact.email}
                    href={`mailto:${SITE.contact.email}`}
                  />
                  <ContactRow
                    icon={<MapPin className="h-5 w-5" />}
                    label="HQ"
                    value={SITE.hq.addressLine}
                  />
                  <ContactRow
                    icon={<Clock className="h-5 w-5" />}
                    label={contactCopy.hoursLabel}
                    value={SITE.hours.display}
                  />
                </ul>

                <div className="border-t border-slate-200 pt-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                    {contactCopy.areaLabel}
                  </p>
                  <p className="mt-3 text-base text-[color:var(--color-ink)] leading-relaxed">
                    {SITE.serviceAreas.join(' · ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Script
        id="contact-localbusiness-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
    </>
  )
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  external?: boolean
}) {
  const inner = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-[color:var(--color-electric)]">{icon}</span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{label}</p>
        <p className="text-base text-[color:var(--color-ink)]">{value}</p>
      </div>
    </div>
  )
  if (href) {
    return (
      <li>
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="block transition-opacity hover:opacity-80"
        >
          {inner}
        </a>
      </li>
    )
  }
  return <li>{inner}</li>
}

function mapServiceParam(p?: string) {
  switch (p) {
    case 'hardware':
      return 'Hardware purchase'
    case 'laptop-care':
      return 'Laptop repair / care'
    case 'software':
      return 'Software licensing'
    case 'networking':
      return 'Networking / WiFi setup'
    case 'automation':
      return 'Automation / custom build'
    case 'amc':
      return 'AMC contract'
    default:
      return undefined
  }
}
