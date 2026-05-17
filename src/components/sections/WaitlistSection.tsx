"use client"

import { Suspense, useCallback, useEffect, useState } from "react"
import { Container } from "@/components/layout/Container"
import { WaitlistForm } from "./WaitlistForm"
import { WaitlistCounter } from "@/components/ui/WaitlistCounter"
import { motion } from "framer-motion"
import { Bell } from "lucide-react"

export function WaitlistSection() {
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
    <section id="waitlist" className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(45,64,87,0.07)_0%,transparent_70%)]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D4057]/10 text-[#2D4057] text-sm font-semibold tracking-wide mb-6">
            <Bell className="w-3.5 h-3.5" />
            Lista de espera
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 font-outfit text-[var(--bookim-text-primary)]">
            Garanta sua vaga{" "}
            <span className="text-[var(--bookim-primary)]">antes de todo mundo.</span>
          </h2>
          <p className="text-[var(--bookim-text-secondary)] text-lg max-w-xl mx-auto leading-relaxed mb-6">
            O Bookim está em fase final de desenvolvimento. Entre na lista e seja avisado no lançamento — com preço especial de fundador.
          </p>
          <WaitlistCounter count={count} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[#2D4057]/15 via-transparent to-[#2D4057]/15 blur-2xl opacity-50" />
            <div className="relative bg-white rounded-[1.75rem] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(45,64,87,0.15),0_0_0_1px_rgba(45,64,87,0.06)]">
              <Suspense fallback={null}>
                <WaitlistForm onSuccess={handleSuccess} />
              </Suspense>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
