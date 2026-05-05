import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact | Octagon Outreach",
  description: "Get in touch with Octagon Outreach. Questions about growing your MMA gym? We respond within 24 hours.",
  openGraph: {
    title: "Contact | Octagon Outreach",
    description: "Get in touch with Octagon Outreach. Questions about growing your MMA gym? We respond within 24 hours.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
