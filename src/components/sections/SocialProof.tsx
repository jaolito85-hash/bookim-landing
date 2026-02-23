"use client"

import { Container } from "@/components/layout/Container"
import { motion } from "framer-motion"
import { Zap, BookOpen, TrendingUp } from "lucide-react"

const universities = [
    "USP", "Unifesp", "UFRJ", "UFMG", "Unicamp", "UFRGS", "UnB", "UFPE",
    "UFBA", "UFPR", "UFRN", "UFC",
]

const stats = [
    { icon: BookOpen, value: "5.000+", label: "Flashcards criados" },
    { icon: TrendingUp, value: "92%", label: "Retenção média" },
    { icon: Zap, value: "4.9 ★", label: "Avaliação no app" },
]

export function SocialProof() {
    return (
        <section className="py-10 border-y border-[var(--bookim-border)] bg-[var(--bookim-bg-secondary)] overflow-hidden">
            <Container>
                <p className="text-center text-xs font-semibold text-[var(--bookim-text-muted)] mb-6 uppercase tracking-[0.2em]">
                    Usado por estudantes das melhores universidades
                </p>

                {/* Marquee — com fade edges */}
                <div className="relative marquee-mask mb-8">
                    <div className="flex overflow-hidden">
                        <div className="flex animate-marquee whitespace-nowrap">
                            {[...universities, ...universities].map((uni, i) => (
                                <span key={`a-${i}`} className="mx-6 sm:mx-8 text-lg sm:text-xl font-bold text-[var(--bookim-text-muted)] opacity-40 hover:opacity-80 transition-opacity duration-300 cursor-default select-none">
                                    {uni}
                                </span>
                            ))}
                        </div>
                        <div className="flex animate-marquee2 whitespace-nowrap absolute top-0">
                            {[...universities, ...universities].map((uni, i) => (
                                <span key={`b-${i}`} className="mx-6 sm:mx-8 text-lg sm:text-xl font-bold text-[var(--bookim-text-muted)] opacity-40 hover:opacity-80 transition-opacity duration-300 cursor-default select-none">
                                    {uni}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats row */}
                <div className="flex items-center justify-center gap-8 sm:gap-16">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2 sm:gap-3"
                        >
                            <div className="w-8 h-8 rounded-lg bg-[var(--bookim-primary)]/8 flex items-center justify-center">
                                <stat.icon className="w-4 h-4 text-[var(--bookim-primary)]" />
                            </div>
                            <div>
                                <div className="text-sm sm:text-base font-bold text-[var(--bookim-text-primary)] leading-tight">{stat.value}</div>
                                <div className="text-[10px] sm:text-xs text-[var(--bookim-text-muted)]">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
