import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { BuiltFor } from "@/components/sections/BuiltFor"
import { Problem } from "@/components/sections/Problem"
import { Features } from "@/components/sections/Features"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { FounderBenefits } from "@/components/sections/FounderBenefits"
import { Comparison } from "@/components/sections/Comparison"
import { BookimPulse } from "@/components/sections/BookimPulse"
import { Pricing } from "@/components/sections/Pricing"
import { FAQ } from "@/components/sections/FAQ"
import { CTA } from "@/components/sections/CTA"
import { WaitlistSection } from "@/components/sections/WaitlistSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bookim-bg-primary)] text-[var(--bookim-text-primary)] selection:bg-[#6C5CE7] selection:text-white">
      <Navbar />
      <Hero />
      <BuiltFor />
      <Problem />
      <Features />
      <HowItWorks />
      <Comparison />
      <BookimPulse />
      <FounderBenefits />
      <Pricing />
      <WaitlistSection />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
