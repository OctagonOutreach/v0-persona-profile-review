"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useModal } from "./modal-provider"
import { GlassCard } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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

  }

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
              <form action="https://formspree.io/f/xgodynad" method="POST" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input 
                      id="fullName" 
                      name="fullName" 
                      required 
                      placeholder="John Smith"
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gymName">Gym Name *</Label>
                    <Input 
                      id="gymName" 
                      name="gymName" 
                      required 
                      placeholder="Iron Fist MMA"
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="john@gym.com"
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      required 
                      placeholder="(555) 123-4567"
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="memberCount">Current Member Count</Label>
                  <Select name="memberCount" defaultValue="50-100">
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<50">Less than 50</SelectItem>
                      <SelectItem value="50-100">50 - 100</SelectItem>
                      <SelectItem value="100-200">100 - 200</SelectItem>
                      <SelectItem value="200+">200+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
<input type="hidden" name="memberCount" value="50-100" />
                
                <div className="space-y-3">
                  <Label>Interested Package</Label>
                  <RadioGroup name="package" defaultValue="silver" className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                      <RadioGroupItem value="bronze" id="bronze" />
                      <Label htmlFor="bronze" className="cursor-pointer flex-1">
                        <span className="font-semibold">Bronze</span>
                        <span className="text-muted-foreground ml-2">$2,499 - 30 students</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-primary/30">
                      <RadioGroupItem value="silver" id="silver" />
                      <Label htmlFor="silver" className="cursor-pointer flex-1">
                        <span className="font-semibold">Silver</span>
                        <span className="text-muted-foreground ml-2">$4,999 - 40 students</span>
                        <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">Popular</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                      <RadioGroupItem value="gold" id="gold" />
                      <Label htmlFor="gold" className="cursor-pointer flex-1">
                        <span className="font-semibold">Gold</span>
                        <span className="text-muted-foreground ml-2">$5,999 - 50 students</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your gym and goals..."
                    className="bg-input border-border min-h-[80px]"
                  />
                </div>

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
