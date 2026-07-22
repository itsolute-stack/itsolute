import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { PageHero } from '@/components/shared/PageHero'
import { SITE, SITE_URL } from '@/lib/content/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Terms of Service · ITSolute Systems',
  },
  description:
    'Terms and conditions governing the use of ITSolute Systems services and this website. Applies to all IT services, software, hardware, and automation engagements.',
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: true, follow: true },
}

const EFFECTIVE_DATE = '1 June 2025'
const CONTACT_EMAIL = SITE.contact.email
const COMPANY = SITE.name
const ADDRESS = SITE.hq.addressLine
const PHONE = SITE.contact.phoneDisplay
const SITE_DOMAIN = 'itsolute.com'

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL · TERMS"
        headline="Terms of Service"
        sub="These terms govern your use of our website and the IT services we provide. Please read them before engaging with us."
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
              <span>
                <span className="text-slate-400 uppercase tracking-wider text-xs">Governing Law</span>
                <br />
                Information Technology Act 2000
              </span>
            </div>

            <div className="prose prose-slate max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-a:text-[color:var(--color-electric)] prose-a:no-underline hover:prose-a:underline">

              <p className="text-lg text-slate-700 leading-relaxed">
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between
                you (&ldquo;Client&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;) and {COMPANY} (&ldquo;ITSolute&rdquo;,
                &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a company operating at {ADDRESS}. By accessing our
                website at <a href={`https://${SITE_DOMAIN}`}>{SITE_DOMAIN}</a> or engaging us for
                any IT services, you agree to be bound by these Terms.
              </p>

              <h2>1. About ITSolute Systems</h2>
              <p>
                {COMPANY} provides information technology services to businesses in Kerala, India.
                Our services include computer hardware supply, software licensing, laptop repair and
                maintenance, office networking, IT automation consulting, annual maintenance
                contracts (AMC), and related professional services.
              </p>
              <p>
                We also provide technology implementation services that may use third-party
                platforms including Meta (WhatsApp Business API, Facebook, Instagram), Google
                Workspace, Microsoft 365, and Zoho. Where our services involve these platforms, the
                respective platform&rsquo;s terms of service apply in addition to these Terms.
              </p>

              <h2>2. Acceptance of Terms</h2>
              <p>
                By using our website, submitting an enquiry, signing a service agreement, or
                accepting a quote from us, you confirm that:
              </p>
              <ul>
                <li>You are at least 18 years of age</li>
                <li>
                  You have the legal authority to enter into contracts on behalf of the business
                  you represent
                </li>
                <li>You have read and agree to these Terms and our{' '}
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  Where our services involve third-party platforms (Meta, Google, Microsoft, Zoho),
                  you also agree to comply with those platforms&rsquo; policies
                </li>
              </ul>

              <h2>3. Services</h2>

              <h3>3.1 Scope of services</h3>
              <p>
                The specific services we provide, their deliverables, timelines, and pricing are
                defined in the written quote, proposal, or service agreement issued to you before
                work begins. These Terms apply to all such engagements. In case of conflict between
                a signed service agreement and these Terms, the signed agreement takes precedence.
              </p>

              <h3>3.2 Annual Maintenance Contracts (AMC)</h3>
              <p>
                AMC agreements are governed by the specific contract signed between {COMPANY} and
                the client. AMC services typically cover hardware support, software troubleshooting,
                network maintenance, and remote assistance as specified in the contract. Response
                time SLAs, coverage scope, and escalation procedures are set out in the individual
                AMC agreement.
              </p>

              <h3>3.3 Third-party platform services</h3>
              <p>
                Where we implement, configure, or manage services on third-party platforms on your
                behalf (including Meta WhatsApp Business API, Facebook Pages, Instagram Business,
                Google Workspace, Microsoft 365, or Zoho), the following applies:
              </p>
              <ul>
                <li>
                  You remain the owner and operator of all third-party accounts, even where
                  ITSolute has administrative access to implement services
                </li>
                <li>
                  You are responsible for ensuring your use of those platforms complies with their
                  respective terms, including Meta&rsquo;s{' '}
                  <a
                    href="https://www.facebook.com/policies_center/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Platform Terms
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://developers.facebook.com/terms/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Developer Policies
                  </a>
                </li>
                <li>
                  ITSolute acts as a technology service provider and does not operate as a data
                  controller for data held within these third-party platforms
                </li>
                <li>
                  We do not guarantee uninterrupted availability of third-party platforms; outages
                  or policy changes by those platforms are outside our control
                </li>
              </ul>

              <h3>3.4 WhatsApp Business API services</h3>
              <p>
                Where ITSolute implements WhatsApp Business API solutions for clients, this is done
                through authorised Meta Business Solution Providers (BSPs). As a technology
                implementer:
              </p>
              <ul>
                <li>
                  Your business must hold a verified Meta Business Account in good standing to use
                  WhatsApp Business API
                </li>
                <li>
                  All WhatsApp communications sent through systems we implement must comply with
                  Meta&rsquo;s{' '}
                  <a
                    href="https://www.whatsapp.com/legal/business-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Business Policy
                  </a>
                </li>
                <li>
                  You are solely responsible for the content of messages sent through WhatsApp
                  Business API integrations we build for you
                </li>
                <li>
                  You must not use these integrations to send spam, unsolicited marketing, or
                  content that violates applicable Indian law or Meta&rsquo;s policies
                </li>
                <li>
                  Message templates must be pre-approved by Meta; ITSolute can assist with
                  submission but cannot guarantee approval
                </li>
              </ul>

              <h2>4. Client Obligations</h2>
              <p>You agree to:</p>
              <ul>
                <li>
                  Provide accurate and complete information when engaging our services, including
                  details about your existing IT infrastructure, business requirements, and any
                  relevant regulatory obligations
                </li>
                <li>
                  Maintain valid licences for all software you use, including software we supply or
                  configure on your behalf
                </li>
                <li>
                  Ensure your employees comply with acceptable use policies for systems we manage
                  under an AMC or other agreement
                </li>
                <li>
                  Pay invoices within the agreed payment terms (typically net 15 days from invoice
                  date unless otherwise specified in your agreement)
                </li>
                <li>
                  Notify us promptly of any security incidents, suspected breaches, or significant
                  changes to your IT environment that may affect the services we provide
                </li>
                <li>
                  Obtain any necessary consents before sharing third-party personal data with us
                  for the purpose of delivering our services
                </li>
              </ul>

              <h2>5. Prohibited Uses</h2>
              <p>
                You must not use our website, services, or any systems we build or manage for you
                to:
              </p>
              <ul>
                <li>
                  Violate any applicable Indian law, regulation, or court order — including the
                  Information Technology Act 2000, IT (Amendment) Act 2008, and the Digital
                  Personal Data Protection Act 2023
                </li>
                <li>
                  Send spam, phishing communications, or unsolicited bulk messages through any
                  channel, including WhatsApp, email, or SMS integrations we implement
                </li>
                <li>
                  Infringe the intellectual property, privacy, or other rights of any third party
                </li>
                <li>
                  Distribute malware, ransomware, or any harmful code
                </li>
                <li>
                  Circumvent, disable, or interfere with security features of any software, system,
                  or network
                </li>
                <li>
                  Engage in any activity that violates Meta&rsquo;s Platform Terms, WhatsApp Business
                  Policy, Google&rsquo;s Acceptable Use Policy, or Microsoft&rsquo;s product terms
                </li>
                <li>
                  Misrepresent your identity or your business&rsquo;s nature to us, to third-party
                  platforms, or to end users of systems we build
                </li>
                <li>
                  Use our services to facilitate illegal activity of any kind
                </li>
              </ul>
              <p>
                Violation of these prohibitions may result in immediate termination of services
                without refund, and we reserve the right to report prohibited activity to the
                relevant platform, authority, or law enforcement agency.
              </p>

              <h2>6. Intellectual Property</h2>

              <h3>6.1 Our content</h3>
              <p>
                All content on this website — text, graphics, code, logos, and design — is the
                property of {COMPANY} or our licensors. You may not copy, reproduce, or distribute
                it without our written permission.
              </p>

              <h3>6.2 Deliverables</h3>
              <p>
                Custom deliverables created specifically for you under a paid engagement (such as
                automation workflows, custom reports, or configured systems) become your property
                upon full payment, unless the engagement agreement specifies otherwise.
              </p>

              <h3>6.3 Our tools and methods</h3>
              <p>
                Our internal tools, processes, templates, and methodologies remain the property of
                {COMPANY} and are licensed to you for use only within the scope of the relevant
                engagement. This includes any code libraries, scripts, or configuration frameworks
                we develop as part of our standard service delivery.
              </p>

              <h3>6.4 Third-party software</h3>
              <p>
                Software licences supplied by ITSolute (Microsoft 365, Zoho, Google Workspace,
                Tally, etc.) remain subject to the respective vendor&rsquo;s licence terms. ITSolute
                acts as a reseller or implementation partner; the software itself is not our
                intellectual property.
              </p>

              <h2>7. Payment Terms</h2>
              <ul>
                <li>
                  All prices are in Indian Rupees (INR) and are exclusive of GST unless
                  stated otherwise
                </li>
                <li>
                  Hardware and software orders require payment before delivery or activation unless
                  a credit arrangement is in place
                </li>
                <li>
                  AMC contracts are billed monthly or annually as specified in the contract; advance
                  payment may be required
                </li>
                <li>
                  Project-based engagements follow a milestone payment schedule as agreed in the
                  written proposal
                </li>
                <li>
                  Overdue invoices may attract interest at 18% per annum from the due date
                </li>
                <li>
                  We reserve the right to suspend services for accounts more than 30 days overdue
                </li>
              </ul>

              <h2>8. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law:
              </p>
              <ul>
                <li>
                  ITSolute&rsquo;s total liability to you for any claim arising from our services shall
                  not exceed the total fees paid by you to us in the three months preceding the
                  event giving rise to the claim
                </li>
                <li>
                  We are not liable for indirect, consequential, incidental, or special damages,
                  including loss of profits, loss of data, or business interruption, even if we have
                  been advised of the possibility of such damages
                </li>
                <li>
                  We are not liable for failures, outages, or policy changes by third-party
                  platforms (Meta, Google, Microsoft, Zoho, Vercel, or any other provider)
                </li>
                <li>
                  We are not liable for data loss resulting from hardware failure, ransomware, or
                  other events outside our direct control; clients are responsible for maintaining
                  their own backups unless a backup service is explicitly included in a signed AMC
                  or agreement
                </li>
              </ul>
              <p>
                Nothing in these Terms limits our liability for fraud, death, or personal injury
                caused by our negligence, or any other liability that cannot be excluded under
                Indian law.
              </p>

              <h2>9. Warranty and Service Standards</h2>
              <p>
                We will deliver our services with reasonable skill and care. Hardware supplied by
                us carries the manufacturer&rsquo;s warranty; we will assist you in making warranty
                claims but are not ourselves the warranty provider. Refurbished hardware carries a
                separate warranty period as specified at the time of sale.
              </p>
              <p>
                We do not warrant that our services will be uninterrupted or error-free. Where we
                commit to specific service levels (e.g. response times under an AMC), those are set
                out in the signed contract.
              </p>

              <h2>10. Confidentiality</h2>
              <p>
                Each party agrees to keep the other&rsquo;s confidential information — including business
                data, credentials, pricing, and technical documentation — strictly confidential and
                to use it only for the purpose of delivering or receiving the agreed services.
                This obligation survives termination of the engagement for a period of three years.
              </p>
              <p>
                ITSolute may mention your business name as a client reference (e.g. in case studies
                or proposals) only with your prior written consent.
              </p>

              <h2>11. Data Protection</h2>
              <p>
                Our use of personal data is governed by our{' '}
                <a href="/privacy">Privacy Policy</a>, which forms part of these Terms. Where we
                process personal data on your behalf as a data processor (for example, processing
                customer data in an automation system we build for you), we will:
              </p>
              <ul>
                <li>
                  Process data only on your documented instructions and for the purpose of
                  delivering the agreed services
                </li>
                <li>
                  Implement appropriate technical and organisational security measures
                </li>
                <li>
                  Not transfer your customers&rsquo; personal data to unauthorised sub-processors
                </li>
                <li>
                  Assist you in responding to data subject requests where the data is within our
                  control
                </li>
                <li>
                  Comply with the Digital Personal Data Protection Act 2023 (DPDPA) as it applies
                  to our activities
                </li>
              </ul>

              <h2>12. Termination</h2>
              <p>
                Either party may terminate a service engagement by providing written notice as
                specified in the relevant service agreement. In the absence of a specific agreement:
              </p>
              <ul>
                <li>
                  Monthly AMC contracts may be terminated with 30 days&rsquo; written notice
                </li>
                <li>
                  Annual AMC contracts may be terminated at the end of the annual term with 30
                  days&rsquo; notice; early termination may incur a pro-rated cancellation fee as
                  specified in the contract
                </li>
                <li>
                  ITSolute may terminate services immediately, without notice or refund, in cases of
                  prohibited use, non-payment beyond 30 days, or breach of these Terms
                </li>
              </ul>
              <p>
                On termination, we will provide reasonable assistance to transfer data and
                configurations back to you or a new provider, subject to any outstanding payment
                obligations being settled.
              </p>

              <h2>13. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms are governed by the laws of India. Any dispute arising from these Terms
                or our services shall be subject to the exclusive jurisdiction of the courts of
                Kottayam, Kerala.
              </p>
              <p>
                Before initiating formal proceedings, both parties agree to attempt resolution
                through good-faith negotiation. If unresolved within 30 days, disputes may be
                referred to arbitration under the Arbitration and Conciliation Act 1996, with a
                sole arbitrator appointed by mutual agreement, seated in Kottayam.
              </p>

              <h2>14. Changes to These Terms</h2>
              <p>
                We may update these Terms to reflect changes in our services, applicable law, or
                the policies of platforms we work with (including Meta, Google, and Microsoft). We
                will update the effective date at the top of this page. For material changes, we
                will notify active clients by email at least 14 days before the change takes effect.
                Continued use of our services after that date constitutes acceptance.
              </p>

              <h2>15. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid under
                applicable law, that provision shall be modified to the minimum extent necessary to
                make it enforceable, and the remaining provisions shall continue in full force.
              </p>

              <h2>16. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy and any signed service agreement or
                proposal, constitute the entire agreement between you and {COMPANY} regarding the
                subject matter herein, and supersede all prior discussions, representations, or
                agreements. No variation to these Terms is effective unless made in writing and
                signed by an authorised representative of {COMPANY}.
              </p>

              <h2>17. Contact</h2>
              <p>
                For questions about these Terms, to report a violation, or to exercise any rights
                described here, contact us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <strong>Phone / WhatsApp:</strong>{' '}
                  <a href={`tel:${SITE.contact.phoneTel}`}>{PHONE}</a>
                </li>
                <li>
                  <strong>Address:</strong> {ADDRESS}
                </li>
              </ul>
            </div>

            {/* Bottom nav */}
            <div className="mt-16 flex flex-wrap gap-x-8 gap-y-2 border-t border-slate-200 pt-8 text-sm text-slate-500">
              <span>© {new Date().getFullYear()} {COMPANY}</span>
              <a href="/privacy" className="hover:text-slate-900 transition-colors">
                Privacy Policy →
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
