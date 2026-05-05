"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { fadeInUp, slideInFromLeft, slideInFromRight } from "@/lib/animations"

export function Story() {
  return (
    <SectionWrapper aria-label="Our Story" className="bg-muted/30">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div 
          variants={slideInFromLeft} 
          className="relative aspect-[4/3] rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/story-placeholder.jpg"
            alt="Gunner Busic - Founder of Octagon Outreach"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div variants={slideInFromRight} className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            <span className="text-foreground">Why I Started </span>
            <span className="text-primary">Octagon Outreach</span>
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {"I've"} been training MMA since I was 5 years old. The gym {"wasn't"} just 
              where I trained—it was my second home, my community, my family.
            </p>
            <p>
              Then I watched it all fall apart.
            </p>
            <p>
              First, my boxing gym closed. Then my jiu-jitsu gym. Both had world-class 
              coaches. Both had loyal students. Neither could bring in enough new members 
              to keep the lights on.
            </p>
            <p>
              Seeing my coaches—people who dedicated their lives to the craft—forced to 
              shut down because they {"didn't"} have marketing resources broke my heart.
            </p>
            <p className="text-foreground font-medium">
              {"That's"} why I built Octagon Outreach. Not as another generic marketing 
              agency, but as a lifeline for MMA gyms built by someone who actually 
              understands the community.
            </p>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-lg font-semibold text-foreground">
              {"I'm"} betting my entire business on one promise:
            </p>
            <p className="text-xl text-primary font-bold mt-2">
              40 new students in 90 days, or you pay nothing.
            </p>
            <p className="text-muted-foreground mt-4">
              — Gunner Busic, Founder
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
