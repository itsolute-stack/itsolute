import Script from 'next/script'
import Link from 'next/link'
import { Phone, MessageCircle, Mail, MapPin, Clock, CalendarCheck } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { PageHero } from '@/components/shared/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import { LocationMap } from '@/components/contact/LocationMap'
import { whatsappLink } from '@/lib/whatsapp'
import { SITE, SITE_URL, LOCATIONS } from '@/lib/content/site'
import { contactCopy } from '@/lib/content/copy/contact'
import { localBusinessSchema, bengaluruBusinessSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata = {
  title: {
    absolute: 'Contact ITSolute · Parthas Lane, Kottayam | IT Services Kerala',
  },
  description:
    'Contact ITSolute Systems — Parthas Lane, Kottayam. WhatsApp +91 85475 33005, hello@itsolute.com. Serving offices, clinics, schools, shops across Kerala.',
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

            <div className="lg:col-span-5 flex flex-col gap-8">
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
                    dataLocation="contact_rail"
                    external
                  />
                  <ContactRow
                    icon={<Phone className="h-5 w-5" />}
                    label="Phone"
                    value={SITE.contact.phoneDisplay}
                    href={`tel:${SITE.contact.phoneTel}`}
                    dataLocation="contact_rail"
                  />
                  <ContactRow
                    icon={<Mail className="h-5 w-5" />}
                    label="Email"
                    value={SITE.contact.email}
                    href={`mailto:${SITE.contact.email}`}
                  />
                  <ContactRow
                    icon={<MapPin className="h-5 w-5" />}
                    label={LOCATIONS.kottayam.label}
                    value={LOCATIONS.kottayam.addressLine}
                    href={LOCATIONS.kottayam.mapsUrl}
                    external
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
                    {/*
                      Display only. SITE.serviceAreas feeds the Kottayam
                      LocalBusiness areaServed and is left alone; Bengaluru has
                      its own LocalBusiness node with its own areaServed.
                    */}
                    {[...SITE.serviceAreas, 'Bengaluru'].join(' · ')}
                  </p>
                </div>
              </div>

              {/* Embedded map + directions link */}
              <LocationMap location={LOCATIONS.kottayam} />
            </div>
          </div>

          {/*
            Second office. Deliberately below the head office, and labelled
            "Visits by appointment" everywhere it appears — nobody should
            cross Bengaluru expecting a counter.
          */}
          <div className="mt-16 border-t border-slate-200 pt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                    SECOND OFFICE
                  </p>
                  <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight text-[color:var(--color-ink)]">
                    {LOCATIONS.bengaluru.label}
                  </h2>
                </div>
                <ul className="flex flex-col gap-5">
                  <ContactRow
                    icon={<MapPin className="h-5 w-5" />}
                    label="Address"
                    value={LOCATIONS.bengaluru.addressLine}
                    href={LOCATIONS.bengaluru.mapsUrl}
                    external
                  />
                  <ContactRow
                    icon={<Phone className="h-5 w-5" />}
                    label="Phone"
                    value={SITE.contact.phoneDisplay}
                    href={`tel:${SITE.contact.phoneTel}`}
                    dataLocation="contact_bengaluru"
                  />
                  <ContactRow
                    icon={<Clock className="h-5 w-5" />}
                    label={contactCopy.hoursLabel}
                    value={SITE.hours.display}
                  />
                  <ContactRow
                    icon={<CalendarCheck className="h-5 w-5" />}
                    label="Visiting"
                    value={LOCATIONS.bengaluru.visitNote}
                  />
                </ul>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-base text-slate-600 leading-relaxed">
                    Entrance automation across Bengaluru is run from this
                    office.{' '}
                    <Link
                      href="/bangalore"
                      className="text-[color:var(--color-electric)] hover:underline"
                    >
                      See gate automation in Bangalore
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <LocationMap location={LOCATIONS.bengaluru} />
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
      <Script
        id="contact-bengaluru-localbusiness-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bengaluruBusinessSchema()) }}
      />
      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Contact', url: `${SITE_URL}/contact` },
            ]),
          ),
        }}
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
  dataLocation,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  external?: boolean
  /** Reported as `location` on GA4 call_click / whatsapp_click. */
  dataLocation?: string
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
          data-location={dataLocation}
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
    case 'cctv':
      return 'CCTV & surveillance'
    case 'entrance-automation':
      return 'Entrance automation (gates / barriers)'
    // These must match lib/content/copy/contact.ts serviceOptions exactly —
    // the form preselects by string equality, so a near-miss silently
    // preselects nothing.
    case 'video-door-phones':
      return 'Video door phone'
    case 'smart-door-locks':
      return 'Smart door lock'
    case 'curtain-blind-motors':
      return 'Curtain / blind motors'
    case 'home-automation':
      return 'Home automation'
    case 'automation':
      return 'Automation / custom build'
    case 'amc':
      return 'AMC contract'
    default:
      return undefined
  }
}
