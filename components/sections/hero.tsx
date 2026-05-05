"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import Image from "next/image"

const trustBadges = [
  { icon: Shield, label: "90-Day Guarantee" },
  { icon: Users, label: "MMA Specialists" },
  { icon: TrendingUp, label: "Proven Results" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-placeholder.jpg"
          alt="MMA gym interior"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        {/* Urgency Badge */}
        <motion.div
          variants={fadeInUp}
          className="mb-6 inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-4 py-2 rounded-full text-sm font-semibold"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Only 5 Spots Left This Month
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
        >
          <span className="text-foreground">Get </span>
          <span className="text-primary">40 New Students</span>
          <span className="text-foreground"> in 90 Days</span>
          <br />
          <span className="text-foreground">Or Your Money Back</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
        >
          We help MMA gyms grow with landing pages, Facebook Ads, SEO, and PPC 
          that actually work. No fluff. Just students through your doors.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton size="lg" pulse className="group">
            Get Started Today
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </CTAButton>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-muted-foreground">
              <badge.icon className="h-5 w-5 text-primary" />
              <span className="text-sm md:text-base">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
