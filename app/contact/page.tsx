"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Clock } from "lucide-react"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { ConsultationModal } from "@/components/modal/consultation-modal"
import { GlassCard } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer, slideInFromLeft, slideInFromRight } from "@/lib/animations"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "OctagonOutreach@gmail.com",
    href: "mailto:OctagonOutreach@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Serving MMA Gyms Nationwide",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
]

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    
    const subject = encodeURIComponent(`Contact from ${data.name}`)
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Subject: ${data.subject}\n\n` +
      `Message:\n${data.message}`
    )
    
    window.location.href = `mailto:OctagonOutreach@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center mb-12 md:mb-16"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance"
            >
              <span className="text-foreground">Get in </span>
              <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Have a question or ready to grow your gym? {"We'd"} love to hear from you.
            </motion.p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              variants={slideInFromLeft}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Reach out and {"we'll"} get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <GlassCard key={item.label} className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>

              {/* Additional Info */}
              <GlassCard className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Ready for a deeper conversation?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  If {"you're"} serious about growing your gym, schedule a free consultation 
                  to discuss your specific situation.
                </p>
                <Button 
                  onClick={() => window.location.href = "/#pricing"}
                  className="bg-primary hover:bg-primary/90"
                >
                  View Pricing Plans
                </Button>
              </GlassCard>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={slideInFromRight}
              initial="hidden"
              animate="visible"
            >
              <GlassCard className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="John Smith"
                        className="bg-input border-border"
                      />
                    </div>
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      required 
                      placeholder="How can we help?"
                      className="bg-input border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required
                      placeholder="Tell us about your gym and what you're looking for..."
                      className="bg-input border-border min-h-[150px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                  >
                    Send Message
                  </Button>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
      <ConsultationModal />
    </>
  )
}
