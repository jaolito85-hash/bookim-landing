"use client"

import { Container } from "@/components/layout/Container"
import { motion } from "framer-motion"
import { Stethoscope, Heart, Sparkles } from "lucide-react"

const focuses = [
  { icon: Stethoscope, label: "Medicina", description: "Anatomia, farmacologia, clínica" },
  { icon: Heart, label: "Odontologia", description: "Periodontia, endodontia, prótese" },
  { icon: Sparkles, label: "IA dedicada", description: "Treinada para os cursos de saúde" },
]

export function BuiltFor() {
  return (
    <section className="py-12 border-y border-[var(--bookim-border)] bg-[var(--bookim-bg-secondary)] overflow-hidden">
      <Container>
        <p className="text-center text-xs font-semibold text-[var(--bookim-text-muted)] mb-8 uppercase tracking-[0.2em]">
          Feito sob medida para os cursos mais difíceis do Brasil
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {focuses.map((focus, i) => (
            <motion.div
              key={focus.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white border border-[var(--bookim-border)] hover:border-[var(--bookim-primary)]/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--bookim-primary)]/10 flex items-center justify-center flex-shrink-0">
                <focus.icon className="w-5 h-5 text-[var(--bookim-primary)]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[var(--bookim-text-primary)] leading-tight">
                  {focus.label}
                </div>
                <div className="text-xs text-[var(--bookim-text-muted)] mt-0.5">
                  {focus.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
