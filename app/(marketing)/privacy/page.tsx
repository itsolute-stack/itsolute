import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { PageHero } from '@/components/shared/PageHero'
import { SITE, SITE_URL } from '@/lib/content/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Privacy Policy · ITSolute Systems',
  },
  description:
    'How ITSolute Systems collects, uses, and protects your personal information. We keep it simple — we use your data to serve you, nothing else.',
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
}

const EFFECTIVE_DATE = '1 June 2025'
const CONTACT_EMAIL = SITE.contact.email
const COMPANY = SITE.name
const ADDRESS = SITE.hq.addressLine

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL · PRIVACY"
        headline="Privacy Policy"
        sub="We take your data seriously. Here's exactly what we collect, why we collect it, and what we do with it."
      />

      <Section theme="light">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Meta bar */}
            <div className="mb-12 flex flex-wrap gap-8 border-b border-slate-200 pb-8 text-sm text-slate-500 font-mono">
              <span>
                <span className="text-slate-400 uppercase tracking-wider text-xs">Effective</span>
                <br />
                {EFFECTIVE_DATE}
              </span>
              <span>
                <span className="text-slate-400 uppercase tracking-wider text-xs">Company</span>
                <br />
                {COMPANY}
              </span>
              <span>
                <span className="text-slate-400 uppercase tracking-wider text-xs">Jurisdiction</span>
                <br />
                Kerala, India
              </span>
            </div>

            <div className="prose prose-slate max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-a:text-[color:var(--color-electric)] prose-a:no-underline hover:prose-a:underline">

              <p className="text-lg text-slate-700 leading-relaxed">
                This Privacy Policy explains how {COMPANY} (&ldquo;ITSolute&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or
                &ldquo;us&rdquo;) collects, uses, and protects information when you visit{' '}
                <a href={SITE_URL}>itsolute.com</a> or contact us about our IT services. We&rsquo;re
                an IT company, not a data company — we collect only what we need to serve you.
              </p>

              <h2>1. Who We Are</h2>
              <p>
                ITSolute Systems is a Kerala-based IT services company providing hardware, software
                licensing, laptop repair, networking, and automation services to small and
                medium-sized businesses across Kerala. Our registered address is {ADDRESS}.
              </p>
              <p>
                For any privacy-related questions, contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>

              <h2>2. Information We Collect</h2>

              <h3>Information you give us directly</h3>
              <p>When you fill out our contact form, request a quote, or get in touch, we collect:</p>
              <ul>
                <li>Your name and the name of your business</li>
                <li>Your phone number and email address</li>
                <li>The service you&rsquo;re interested in and any message you include</li>
              </ul>
              <p>
                When you contact us via WhatsApp or call us directly, we receive your phone number
                and the content of that conversation.
              </p>

              <h3>Information collected automatically</h3>
              <p>
                When you visit our website, our hosting infrastructure (Vercel) automatically logs
                standard server data: your IP address, browser type, operating system, pages
                visited, and the time of your visit. This is standard for all web servers and is
                used for security and uptime monitoring, not marketing.
              </p>
              <p>
                We do not use tracking pixels, cross-site trackers, or behavioural advertising
                networks. We do not sell your data. We never have.
              </p>

              <h3>Cookies</h3>
              <p>
                Our website uses only technically necessary cookies — those required for the site to
                function. We do not use advertising cookies or third-party analytics cookies that
                track you across other websites. If we add analytics in future (e.g. Google
                Analytics), we will update this policy and ask for your consent where required.
              </p>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information you provide solely to:</p>
              <ul>
                <li>Respond to your enquiries and get back to you about our services</li>
                <li>
                  Send you quotes, proposals, or service documentation you have requested
                </li>
                <li>
                  Fulfil and manage any IT services contract or AMC agreement you enter into
                  with us
                </li>
                <li>
                  Send important service updates, renewal reminders, or security notices related to
                  work we are doing for you
                </li>
                <li>
                  Comply with our legal obligations under Indian law (e.g. GST invoicing records)
                </li>
              </ul>
              <p>
                We do not send marketing emails to people who have not asked to hear from us. If you
                become a client, we may occasionally send you relevant updates about our services —
                you can opt out at any time by replying to any message or emailing us.
              </p>

              <h2>4. Who We Share Your Information With</h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. We share
                data only when necessary to operate our services:
              </p>
              <ul>
                <li>
                  <strong>Resend</strong> — our transactional email provider, which receives the
                  content of enquiry form submissions to deliver them to our inbox. Resend is
                  GDPR-compliant and processes data within the EU.
                </li>
                <li>
                  <strong>Vercel</strong> — our website hosting provider, which processes standard
                  server logs as described above.
                </li>
                <li>
                  <strong>WhatsApp (Meta)</strong> — if you contact us via WhatsApp, your
                  communication is subject to Meta&rsquo;s own privacy policy in addition to ours.
                </li>
                <li>
                  <strong>Legal requirements</strong> — we may disclose information if required by
                  Indian law, a court order, or a lawful request from a government authority.
                </li>
              </ul>

              <h2>5. Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary:
              </p>
              <ul>
                <li>
                  <strong>Enquiries that don&rsquo;t become projects</strong> — we keep contact
                  details for up to 12 months in case you follow up, then delete them.
                </li>
                <li>
                  <strong>Client records</strong> — we retain records related to services provided
                  (invoices, contracts, correspondence) for 7 years as required under Indian GST and
                  accounting law.
                </li>
                <li>
                  <strong>Server logs</strong> — Vercel retains standard server logs for up to 30
                  days for security and uptime purposes.
                </li>
              </ul>

              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>
                  <strong>Access</strong> — ask us what personal data we hold about you
                </li>
                <li>
                  <strong>Correction</strong> — ask us to correct inaccurate information
                </li>
                <li>
                  <strong>Deletion</strong> — ask us to delete your data, subject to our legal
                  retention obligations (e.g. GST records)
                </li>
                <li>
                  <strong>Objection</strong> — ask us to stop using your data for any purpose other
                  than fulfilling an active contract
                </li>
                <li>
                  <strong>Opt out</strong> — unsubscribe from any communications we send you
                </li>
              </ul>
              <p>
                To exercise any of these rights, email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond within 14
                days.
              </p>

              <h2>7. Data Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect your data. Our
                website is served over HTTPS. Form submissions are transmitted over encrypted
                connections. We do not store payment card information — payments are handled directly
                by the payment provider.
              </p>
              <p>
                As an IT company, we understand security better than most. We apply the same
                practices to our own systems that we recommend to our clients.
              </p>

              <h2>8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites (e.g. our sister brand CCTVPROS,
                software partner portals). We are not responsible for the privacy practices of those
                sites. Review their privacy policies separately.
              </p>

              <h2>9. Children&rsquo;s Privacy</h2>
              <p>
                Our services are directed at businesses, not individuals under the age of 18. We do
                not knowingly collect data from minors. If you believe a minor has submitted
                information to us, contact us and we will delete it promptly.
              </p>

              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this policy occasionally to reflect changes in our services or
                applicable law. When we do, we will update the effective date at the top of this
                page. If we make significant changes, we will notify active clients by email. Your
                continued use of our website after a change is posted constitutes acceptance of the
                revised policy.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your data,
                please get in touch:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <strong>Phone / WhatsApp:</strong>{' '}
                  <a href={`tel:${SITE.contact.phoneTel}`}>{SITE.contact.phoneDisplay}</a>
                </li>
                <li>
                  <strong>Address:</strong> {ADDRESS}
                </li>
              </ul>
              <p>We&rsquo;re a small team. A message gets to the right person quickly.</p>
            </div>

            {/* Bottom nav */}
            <div className="mt-16 flex flex-wrap gap-x-8 gap-y-2 border-t border-slate-200 pt-8 text-sm text-slate-500">
              <span>© {new Date().getFullYear()} {COMPANY}</span>
              <a href="/terms" className="hover:text-slate-900 transition-colors">
                Terms of Service →
              </a>
              <a href="/contact" className="hover:text-slate-900 transition-colors">
                Contact us →
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
