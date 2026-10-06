/**
 * Layout for the Google Ads landing pages.
 *
 * Deliberately minimal: no Navbar, no Footer, no floating WhatsApp bubble.
 * Those live in the (marketing) layout, and a route group is what keeps them
 * off these pages — paid traffic should have no exit except the conversion
 * actions and the legal links each page renders itself.
 */
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
