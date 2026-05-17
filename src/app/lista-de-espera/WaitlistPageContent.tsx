"use client"

import { useCallback, useEffect, useState } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/layout/Container"
import { BookimIcon } from "@/components/icons/BookimIcon"
import { WaitlistForm } from "@/components/sections/WaitlistForm"
import { WaitlistCounter } from "@/components/ui/WaitlistCounter"
import { motion } from "framer-motion"
import { ShieldCheck, BellOff, Clock } from "lucide-react"

export function WaitlistPageContent() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch("/api/waitlist")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setCount(data.count)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  const handleSuccess = useCallback((totalCount: number) => {
    setCount(totalCount)
  }, [])

  return (
    <main className="min-h-screen bg-[var(--bookim-bg-primary)] text-[var(--bookim-text-primary)] selection:bg-[#6C5CE7] selection:text-white">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[80vh] bg-[radial-gradient(ellipse_80%_60%_at_50%_-5%,rgba(45,64,87,0.18)_0%,rgba(45,64,87,0.04)_40%,transparent_70%)]" />
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(74,95,122,0.08)_0%,transparent_70%)] rounded-full" />
        </div>

        <Container className="relative z-10 flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 130, damping: 18 }}
            className="mb-6"
          >
            <div className="relative inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(45,64,87,0.2)_0%,transparent_70%)] blur-2xl scale-[2.5]" />
              <BookimIcon size={72} className="relative drop-shadow-[0_8px_32px_rgba(45,64,87,0.3)]" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-[1.75rem] sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-4 max-w-2xl text-[var(--bookim-text-primary)] font-outfit px-2"
          >
            Seja um dos primeiros a usar o{" "}
            <span className="text-[var(--bookim-primary)]">Bookim</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-lg text-[var(--bookim-text-secondary)] max-w-lg mb-6 leading-relaxed px-4"
          >
            O app de estudos com IA para medicina e odontologia está quase pronto.
            Entre na lista e garanta preço de fundador.
          </motion.p>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mb-8"
          >
            <WaitlistCounter count={count} />
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full max-w-lg"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[#2D4057]/15 via-transparent to-[#2D4057]/15 blur-2xl opacity-50" />
              <div className="relative bg-white rounded-[1.75rem] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(45,64,87,0.15),0_0_0_1px_rgba(45,64,87,0.06)]">
                <WaitlistForm onSuccess={handleSuccess} />
              </div>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--bookim-text-muted)]"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Dados protegidos (LGPD)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BellOff className="w-3.5 h-3.5" />
              <span>Sem spam</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Leva 30 segundos</span>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
