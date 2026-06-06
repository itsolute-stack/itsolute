import Link from 'next/link'
import { Linkedin, Instagram, MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Container } from './Container'
import { Logo } from '@/components/shared/Logo'
import { whatsappLink } from '@/lib/whatsapp'
import { SITE } from '@/lib/content/site'
import { footerNav } from '@/lib/content/nav'

export function Footer() {
  return (
    <footer className="bg-[color:var(--color-ink-900)] text-white theme-dark">
      <Container className="py-20 lg:py-24">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Logo theme="dark" />
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
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {SITE.hq.addressLine}
              </div>
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
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-slate-400 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-slate-400 hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
