"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useModal } from "./modal-provider"
import { GlassCard } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ConsultationModal() {
  const { isOpen, closeModal } = useModal()

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen, closeModal])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 md:w-full md:max-w-lg overflow-auto"
          >
            <GlassCard className="p-6 md:p-8 max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header */}
              <div className="mb-6 pr-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {"Let's"} Grow Your Gym
                </h2>
                <p className="text-muted-foreground mt-2">
                  Fill out the form below and Gunner will reach out within 24 hours
                </p>
              </div>

              {/* Form */}
              <form
                action="https://formspree.io/f/xgodynad"
                method="POST"
                className="space-y-4"
              >
                
                {/* Name + Gym */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Full Name *</Label>
                    <Input name="fullName" required placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label>Gym Name *</Label>
                    <Input name="gymName" required placeholder="Iron Fist MMA" />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input name="email" type="email" required placeholder="john@gym.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone *</Label>
                    <Input name="phone" type="tel" required placeholder="(555) 123-4567" />
                  </div>
                </div>

                {/* Member Count (FIXED REAL HTML SELECT) */}
                <div className="space-y-2">
                  <Label>Current Member Count</Label>

                  <select
                    name="memberCount"
                    className="bg-input border-border w-full h-10 rounded-md px-3"
                  >
                    <option value="<50">Less than 50</option>
                    <option value="50-100">50 - 100</option>
                    <option value="100-200">100 - 200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>

                {/* Package (safe hidden field for Formspree) */}
                <input type="hidden" name="package" value="silver" />

                {/* Message */}
                <div className="space-y-2">
                  <Label>Message (Optional)</Label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your gym and goals..."
                    className="min-h-[80px]"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                >
                  Send My Application
                </Button>

              </form>
            </GlassCard>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
