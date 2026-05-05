import Link from "next/link"
import { Octagon } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Octagon className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">
                Octagon<span className="text-primary">Outreach</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {currentYear} Octagon Outreach. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              href="#pricing" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="#faq" 
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
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Questions? Reach out at
            </p>
            <a 
              href="mailto:OctagonOutreach@gmail.com" 
              className="text-primary hover:underline"
            >
              OctagonOutreach@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
