"use client"

import { Container } from "@/components/layout/Container"
import { motion } from "framer-motion"
import { Crown, Rocket, MessageCircleHeart } from "lucide-react"

const benefits = [
  {
    icon: Crown,
    title: "Preço de fundador para sempre",
    description: "Os primeiros 1000 inscritos pagam R$67/mês congelados — mesmo quando o preço público subir no futuro.",
    accent: "Vitalício",
  },
  {
    icon: Rocket,
    title: "Acesso antes de todo mundo",
    description: "Você usa o Bookim antes do lançamento público e ainda tem tempo de adaptar à sua rotina de estudos.",
    accent: "Early access",
  },
  {
    icon: MessageCircleHeart,
    title: "Sua opinião molda o produto",
    description: "Como fundador, você tem canal direto com a gente. Sugestões viram features. De verdade.",
    accent: "Co-criação",
  },
]

export function FounderBenefits() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,rgba(45,64,87,0.06)_0%,transparent_70%)]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D4057]/10 text-[#2D4057] text-sm font-semibold tracking-wide mb-6">
            <Crown className="w-3.5 h-3.5" />
            Programa de fundadores
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 font-outfit text-[var(--bookim-text-primary)]">
            O que você ganha por entrar agora
          </h2>
          <p className="text-[var(--bookim-text-secondary)] text-lg max-w-xl mx-auto leading-relaxed">
            Os primeiros 1000 inscritos viram fundadores do Bookim. E fundador tem privilégios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#2D4057]/15 via-transparent to-[#2D4057]/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-white rounded-3xl p-7 border border-[var(--bookim-border)] hover:border-[var(--bookim-primary)]/20 hover:-translate-y-1 transition-all duration-300 shadow-[0_2px_20px_-4px_rgba(45,64,87,0.06)] hover:shadow-[0_20px_50px_-15px_rgba(45,64,87,0.18)]">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bookim-primary)]/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-[var(--bookim-primary)]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--bookim-primary)] bg-[var(--bookim-primary)]/8 px-2.5 py-1 rounded-full">
                    {benefit.accent}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--bookim-text-primary)] mb-2 font-outfit leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[var(--bookim-text-secondary)] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
