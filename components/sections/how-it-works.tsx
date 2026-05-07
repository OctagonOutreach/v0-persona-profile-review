"use client"

import { motion } from "framer-motion"
import { FileText, Megaphone, Search, MousePointerClick, ArrowRight } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { fadeInUp } from "@/lib/animations"

const steps = [
  {
    number: "01",
    title: "Landing Page",
    description: "We build or refine your landing page to convert visitors into leads. Optimized for MMA gyms.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Facebook Ads",
    description: "Targeted ads that reach people in your area actively looking for MMA training.",
    icon: Megaphone,
  },
  {
    number: "03",
    title: "SEO",
    description: "Get found when people search for MMA gyms near them. Long-term organic growth.",
    icon: Search,
  },
  {
    number: "04",
    title: "PPC",
    description: "Pay-per-click campaigns that put you at the top of search results instantly.",
    icon: MousePointerClick,
  },
]

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" aria-label="Our 4-step MMA gym marketing process" stagger>
      {/* Header */}
      <motion.header variants={fadeInUp} className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
          <span className="text-foreground">How We Get You </span>
          <span className="text-primary">40+ Students</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          A proven 4-part marketing system designed specifically for MMA gyms.
        </p>
      </motion.header>

      {/* Steps */}
      <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
        {steps.map((step, index) => (
          <motion.li key={step.number} variants={fadeInUp} custom={index} className="list-none">
            <GlassCard className="p-6 h-full relative group">
              {/* Number */}
              <span className="absolute top-4 right-4 text-4xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors" aria-hidden="true">
                {step.number}
              </span>

              {/* Icon */}
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <step.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                <span className="sr-only">Step {step.number}: </span>
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Arrow indicator for non-last items */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/30" aria-hidden="true">
                  <ArrowRight className="h-6 w-6" />
                </div>
              )}
            </GlassCard>
          </motion.li>
        ))}
      </ol>
    </SectionWrapper>
  )
}
