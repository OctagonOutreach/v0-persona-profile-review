"use client"

import { motion } from "framer-motion"
import { Shield, ArrowRight } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { CTAButton } from "@/components/ui/cta-button"
import { fadeInUp } from "@/lib/animations"

export function Guarantee() {
  return (
    <SectionWrapper id="guarantee" aria-label="Our 90-day money-back guarantee for MMA gym marketing" className="bg-muted/30">
      <motion.article variants={fadeInUp} className="max-w-3xl mx-auto">
        <GlassCard className="p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" aria-hidden="true" />

          {/* Shield Icon */}
          <div className="relative mb-6 inline-flex p-4 rounded-full bg-primary/10" aria-hidden="true">
            <Shield className="h-12 w-12 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="relative text-3xl md:text-4xl font-bold text-balance mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-primary">Ironclad Guarantee</span>
          </h2>

          {/* Copy */}
          <p className="relative text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            We deliver the promised number of qualified students within 90 days, or you 
            get 100% of your money back. No questions asked. No fine print.
          </p>

          {/* Details */}
          <div className="relative text-left bg-secondary/30 rounded-lg p-6 mb-8 max-w-md mx-auto">
            <h3 className="font-semibold text-foreground mb-3">{"Here's"} how it works:</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">1.</span>
                We deliver qualified leads—real people interested in joining your gym
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">2.</span>
                If we {"don't"} hit the target in 90 days, we refund everything
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">3.</span>
                {"We're"} betting on ourselves because the system works
              </li>
            </ul>
          </div>

          {/* CTA */}
          <CTAButton size="lg" pulse className="relative group">
            {"I'm"} Ready to Grow My MMA Gym
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </CTAButton>
        </GlassCard>
      </motion.article>
    </SectionWrapper>
  )
}
