"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeInUp, staggerContainer } from "@/lib/animations"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  stagger?: boolean
  "aria-label"?: string
}

export function SectionWrapper({ 
  children, 
  className, 
  id, 
  stagger = false,
  "aria-label": ariaLabel
}: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stagger ? staggerContainer : fadeInUp}
      className={cn("py-16 md:py-24 lg:py-32", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  )
}
