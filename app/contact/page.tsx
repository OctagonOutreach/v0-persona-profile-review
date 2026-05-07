import type { Metadata } from 'next'
import { ContactPageContent } from './contact-content'

export const metadata: Metadata = {
  title: "Contact Us - Get Your Free MMA Gym Marketing Consultation",
  description: "Ready to grow your MMA gym? Contact Octagon Outreach for a free consultation. We respond within 24 hours. Email us at OctagonOutreach@gmail.com or fill out our contact form.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact Octagon Outreach - MMA Gym Marketing Experts",
    description: "Get in touch for a free consultation. We help MMA gyms get 40+ new students in 90 days.",
    url: "https://octagonoutreach.com/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
