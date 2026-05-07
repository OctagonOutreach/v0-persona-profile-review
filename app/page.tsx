import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { ConsultationModal } from "@/components/modal/consultation-modal"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Story } from "@/components/sections/story"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Guarantee } from "@/components/sections/guarantee"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Story />
        <HowItWorks />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
      <ConsultationModal />
    </>
  )
}
