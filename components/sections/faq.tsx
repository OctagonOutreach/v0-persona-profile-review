"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { fadeInUp } from "@/lib/animations"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// FAQ data with structured format for both display and schema
const faqs = [
  {
    question: "How do you define 'qualified students'?",
    answer: "Qualified students are real prospects who express genuine interest in joining your gym—tracked through form submissions, phone calls, or demo class sign-ups. We don't count clicks or website visits. Only real people ready to train."
  },
  {
    question: "What if my gym is in a small or rural area?",
    answer: "Our strategy adapts to your market. Whether you're in a major city or a small town, we customize targeting and messaging to reach the right audience in your area. The system works anywhere there are people who want to learn MMA."
  },
  {
    question: "How much of my time does this require?",
    answer: "About 2-3 hours per week. You'll provide feedback on messaging and help us understand your gym's unique strengths. We handle all the technical work—ads, landing pages, SEO, and optimization."
  },
  {
    question: "Do you work with gyms outside of MMA?",
    answer: "Absolutely. While 'Octagon' is in our name, our systems are designed for the entire combat sports industry. We specialize in growing Brazilian Jiu-Jitsu academies and Muay Thai gyms. If your business relies on mats and memberships, we know how to fill them."
  },
  {
    question: "What if I don't see results after 60 days?",
    answer: "We monitor performance weekly and adjust constantly. If something isn't working, we pivot immediately—new ad angles, different targeting, refined messaging. The 90-day guarantee exists because we're confident the system works when given full runway."
  },
  {
    question: "How does the money-back guarantee work?",
    answer: "Simple: if we don't deliver the promised number of qualified students (30, 40, or 50 depending on your package) within 90 days, you get 100% of your money back. No fine print tricks. We're betting on ourselves."
  }
]

// Generate FAQ structured data for SEO
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export function FAQ() {
  return (
    <SectionWrapper id="faq" aria-label="Frequently Asked Questions" stagger>
      {/* FAQ Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
          <span className="text-foreground">Frequently Asked </span>
          <span className="text-primary">Questions</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Got questions? {"We've"} got answers. If you {"don't"} see yours here, reach out.
        </p>
      </motion.div>

      {/* Accordion */}
      <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-card px-6 border-none"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </SectionWrapper>
  )
}
