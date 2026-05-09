import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ModalProvider } from '@/components/modal/modal-provider'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL('https://octagonoutreach.com'),
  title: {
    default: "Octagon Outreach | MMA Gym Marketing - 40 New Students in 90 Days Guaranteed",
    template: "%s | Octagon Outreach"
  },
  description: "Specialized marketing agency for MMA gyms. We deliver 40+ new students in 90 days with proven landing pages, Facebook Ads, SEO, and PPC campaigns. 100% money-back guarantee if we don't deliver results.",
  keywords: [
    "MMA gym marketing",
    "MMA gym advertising",
    "martial arts gym marketing",
    "MMA student acquisition",
    "gym marketing agency",
    "MMA business growth",
    "martial arts advertising",
    "gym Facebook ads",
    "MMA SEO services",
    "MMA gym lead generation",
    "martial arts school marketing",
    "BJJ gym marketing",
    "boxing gym marketing",
    "gym PPC advertising"
  ],
  authors: [{ name: "Gunner Busic", url: "https://octagonoutreach.com" }],
  creator: "Octagon Outreach",
  publisher: "Octagon Outreach",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Octagon Outreach | MMA Gym Marketing Agency",
    description: "Get 40+ new MMA students in 90 days with our proven marketing system. Landing pages, Facebook Ads, SEO & PPC. 100% money-back guarantee.",
    url: "https://octagonoutreach.com",
    siteName: "Octagon Outreach",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Octagon Outreach - MMA Gym Marketing Agency"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Octagon Outreach | MMA Gym Marketing - 40 Students in 90 Days",
    description: "Proven marketing systems for MMA gyms. 100% money-back guarantee.",
    images: ["/images/og-image.jpg"],
    creator: "@OctagonOutreach",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  category: 'marketing',
}

export const viewport: Viewport = {
  themeColor: "#E53E3E",
  width: "device-width",
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Octagon Outreach',
  description: 'Specialized marketing agency for MMA gyms. We deliver 40+ new students in 90 days with proven landing pages, Facebook Ads, SEO, and PPC campaigns.',
  url: 'https://octagonoutreach.com',
  logo: 'https://octagonoutreach.com/icon.png',
  image: 'https://octagonoutreach.com/images/og-image.jpg',
  email: 'OctagonOutreach@gmail.com',
  founder: {
    '@type': 'Person',
    name: 'Gunner Busic'
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  },
  serviceType: ['Digital Marketing', 'SEO Services', 'PPC Advertising', 'Social Media Marketing'],
  knowsAbout: ['MMA Gyms', 'Martial Arts Marketing', 'Gym Lead Generation', 'Facebook Advertising'],
  slogan: '40 New Students in 90 Days - Or Your Money Back',
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'MMA Gym Marketing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Landing Page Design',
          description: 'Custom landing pages optimized for MMA gym conversions'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Facebook Advertising',
          description: 'Targeted Facebook ad campaigns for MMA gyms'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Services',
          description: 'Search engine optimization for martial arts businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'PPC Campaigns',
          description: 'Pay-per-click advertising for immediate visibility'
        }
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ModalProvider>
          {children}
        </ModalProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
