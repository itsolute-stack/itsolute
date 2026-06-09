import Link from 'next/link'
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Container } from './Container'
import { Logo } from '@/components/shared/Logo'
import { whatsappLink } from '@/lib/whatsapp'
import { SITE, SOCIAL, GMAPS_URL } from '@/lib/content/site'
import { footerNav } from '@/lib/content/nav'

/** Minimal inline X (Twitter) glyph — Lucide doesn't ship one. */
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[color:var(--color-ink-900)] text-white theme-dark">
      <Container className="py-20 lg:py-24">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Logo variant="lockup" theme="dark" size="md" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              The complete IT partner for Kerala businesses. Hardware, software, support, and
              automation — under one roof.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <a
                href={`tel:${SITE.contact.phoneTel}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                {SITE.contact.phoneDisplay}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={`mailto:${SITE.contact.email}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {SITE.contact.email}
              </a>
              <a
                href={GMAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find ITSolute Systems on Google Maps"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{SITE.hq.addressLine}</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {SITE.hours.display}
              </div>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.heading}>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-slate-500">
                {col.heading}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-mono text-xs text-slate-500">
              ITSolute Systems © {new Date().getFullYear()} · Kottayam, Kerala
            </p>
            <p className="font-mono text-xs text-slate-500">
              Sister brand:{' '}
              <a
                href={SITE.sister.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white"
              >
                CCTVPROS
              </a>{' '}
              — Surveillance & Security
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ITSolute Systems on Instagram"
                className="text-slate-400 transition-colors hover:text-white"
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={SOCIAL.x.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ITSolute Systems on X"
                className="text-slate-400 transition-colors hover:text-white"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ITSolute Systems on Facebook"
                className="text-slate-400 transition-colors hover:text-white"
              >
                <Facebook className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
