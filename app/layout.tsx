import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ModalProvider } from '@/components/modal/modal-provider'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Octagon Outreach | 40 New MMA Students in 90 Days - Guaranteed",
  description: "We help MMA gyms grow with proven marketing systems. Landing pages, Facebook Ads, SEO, and PPC that deliver 30-50 new students in 90 days. Money-back guarantee.",
  keywords: [
    "MMA gym marketing",
    "martial arts gym growth",
    "MMA student acquisition",
    "gym marketing agency",
    "MMA business growth",
    "martial arts advertising",
    "gym Facebook ads",
    "MMA SEO"
  ],
  authors: [{ name: "Gunner Busic" }, { name: "Octagon Outreach" }],
  openGraph: {
    title: "Octagon Outreach | 40 New MMA Students in 90 Days",
    description: "Proven marketing systems for MMA gyms. Money-back guarantee.",
    url: "https://octagonoutreach.com",
    siteName: "Octagon Outreach",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Octagon Outreach | 40 New MMA Students in 90 Days",
    description: "Proven marketing systems for MMA gyms. Money-back guarantee.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: "#E53E3E",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ModalProvider>
          {children}
        </ModalProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
