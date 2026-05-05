"use client"

import { motion } from "framer-motion"
import { XCircle, TrendingDown, Clock, DollarSign } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { CTAButton } from "@/components/ui/cta-button"
import { fadeInUp } from "@/lib/animations"

const problems = [
  {
    icon: TrendingDown,
    title: "Inconsistent Leads",
    description: "Some months are packed, others are dead. No predictable flow of new prospects walking through your doors."
  },
  {
    icon: DollarSign,
    title: "Wasted Ad Spend",
    description: "You've tried Facebook ads or Google ads but got nothing but clicks from people who never showed up."
  },
  {
    icon: Clock,
    title: "No Time for Marketing",
    description: "You're too busy coaching, managing, and running your gym to figure out digital marketing."
  },
  {
    icon: XCircle,
    title: "Watching Gyms Close",
    description: "Great coaches with loyal students forced to shut down because they couldn't bring in enough new members."
  },
]

export function Problem() {
  return (
    <SectionWrapper id="problem" aria-label="The Problem" stagger>
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
          <span className="text-foreground">Sound </span>
          <span className="text-primary">Familiar?</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Most MMA gym owners face the same struggles. {"You're"} not alone.
        </p>
      </motion.div>

      {/* Problem Cards */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {problems.map((problem, index) => (
          <motion.div key={problem.title} variants={fadeInUp} custom={index}>
            <GlassCard className="p-6 md:p-8 h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10">
                  <problem.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div variants={fadeInUp} className="mt-12 text-center">
        <p className="text-muted-foreground mb-6">
          Ready to fix this? {"We've"} built a system specifically for MMA gyms.
        </p>
        <CTAButton>See How We Fix This</CTAButton>
      </motion.div>
    </SectionWrapper>
  )
}
