import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Octagon Outreach - Home">
              <Image 
                src="/images/logo.png" 
                alt="Octagon Outreach logo - MMA gym marketing agency" 
                width={32} 
                height={32}
                className="h-8 w-8"
              />
              <span className="text-lg font-bold text-foreground">
                Octagon<span className="text-primary">Outreach</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Octagon Outreach. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              href="/#how-it-works" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="/#faq" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Contact */}
          <address className="text-center md:text-right not-italic">
            <p className="text-sm text-muted-foreground">
              Questions? Reach out at
            </p>
            <a 
              href="mailto:OctagonOutreach@gmail.com" 
              className="text-primary hover:underline"
              aria-label="Email Octagon Outreach"
            >
              OctagonOutreach@gmail.com
            </a>
          </address>
        </div>
      </div>
    </footer>
  )
}
