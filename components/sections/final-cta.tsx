"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { CTAButton } from "@/components/ui/cta-button"
import { fadeInUp } from "@/lib/animations"

export function FinalCTA() {
  return (
    <SectionWrapper id="get-started" aria-label="Schedule your free MMA gym marketing consultation" className="bg-muted/30">
      <motion.article variants={fadeInUp} className="text-center max-w-3xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
          <span className="text-foreground">Ready to Fill Your MMA Gym with </span>
          <span className="text-primary">New Students?</span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
          Join the MMA gyms that are growing predictably. Schedule your free 
          consultation today.
        </p>

        {/* CTA */}
        <CTAButton size="lg" pulse className="group">
          Schedule Free Consultation
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </CTAButton>

        {/* Trust reminder */}
        <p className="mt-6 text-sm text-muted-foreground">
          90-day money-back guarantee. No contracts. Cancel anytime.
        </p>
      </motion.article>
    </SectionWrapper>
  )
}
