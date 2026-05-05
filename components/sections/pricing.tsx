"use client"

import { motion } from "framer-motion"
import { Check, Zap } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { CTAButton } from "@/components/ui/cta-button"
import { fadeInUp } from "@/lib/animations"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Bronze",
    price: "$2,499",
    students: "~30 Students",
    description: "Perfect for gyms just getting started with marketing.",
    features: [
      "Landing page optimization",
      "Facebook Ads setup & management",
      "Basic SEO audit",
      "Weekly performance reports",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Silver",
    price: "$4,999",
    students: "~40 Students",
    description: "Our most popular package for established gyms.",
    features: [
      "Custom landing page design",
      "Facebook & Instagram Ads",
      "Full SEO optimization",
      "PPC campaign management",
      "Bi-weekly strategy calls",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Gold",
    price: "$5,999",
    students: "~50 Students",
    description: "Maximum growth for gyms ready to dominate their market.",
    features: [
      "Everything in Silver",
      "Retargeting campaigns",
      "Competitor analysis",
      "Content creation support",
      "Weekly strategy calls",
      "24/7 priority support",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <SectionWrapper id="pricing" aria-label="Pricing" stagger>
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
          <span className="text-foreground">Simple, </span>
          <span className="text-primary">Transparent Pricing</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose the package that fits your growth goals. All packages include our 
          90-day money-back guarantee.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-4 py-2 rounded-full text-sm font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Only 5 Spots Left This Month
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {tiers.map((tier, index) => (
          <motion.div key={tier.name} variants={fadeInUp} custom={index}>
            <GlassCard 
              className={cn(
                "p-6 md:p-8 h-full flex flex-col relative",
                tier.popular && "border-primary/50 ring-1 ring-primary/30"
              )}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                    <Zap className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">/ 90 days</span>
                </div>
                <p className="mt-2 text-primary font-semibold">{tier.students}</p>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <CTAButton 
                className={cn(
                  "w-full",
                  !tier.popular && "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
                pulse={tier.popular}
              >
                Get Started
              </CTAButton>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
