"use client"

import { Container } from "@/components/layout/Container"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { AlertCircle, Clock, Brain } from "lucide-react"
import { motion } from "framer-motion"

const problems = [
    {
        icon: Brain,
        title: "Reler não é estudar",
        description: "A leitura passiva dá a ilusão de aprendizado. Seu cérebro precisa ser desafiado, não entediado.",
        gradient: "from-red-500 to-rose-500",
        accent: "#FF6B6B",
    },
    {
        icon: Clock,
        title: "Tempo desperdiçado",
        description: "Sem método, você gasta horas no que poderia levar minutos. E ainda esquece em 48h.",
        gradient: "from-amber-500 to-orange-500",
        accent: "#F59E0B",
    },
    {
        icon: AlertCircle,
        title: "A prova chega e o branco vem",
        description: "Você estudou, mas na hora H nada vem. Não é falta de esforço — é falta de método.",
        gradient: "from-violet-500 to-purple-500",
        accent: "#8B5CF6",
    },
]

export function Problem() {
    return (
        <section className="py-24 md:py-32 bg-[var(--bookim-bg-primary)]">
            <Container>
                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4"
                    >
                        Você já releu a mesma página <br className="hidden md:block" />
                        <span className="text-[var(--bookim-danger)]">5 vezes</span> e não lembrou nada?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base sm:text-lg text-[var(--bookim-text-secondary)] max-w-2xl mx-auto px-4"
                    >
                        Estudar medicina ou odontologia é difícil. Estudar errado torna impossível.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-2">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12 + 0.2 }}
                            className="group"
                        >
                            <Card className="h-full border-[var(--bookim-border)] bg-[var(--bookim-bg-secondary)] hover:border-[var(--bookim-primary)]/30 transition-all duration-300 card-hover overflow-hidden relative">
                                {/* Gradient accent line no topo */}
                                <div className={`h-1 bg-gradient-to-r ${item.gradient} w-full`} />

                                <CardHeader className="pt-6">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                                        style={{ background: `${item.accent}15` }}
                                    >
                                        <item.icon className="w-7 h-7" style={{ color: item.accent }} />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl mb-2">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[var(--bookim-text-secondary)] leading-relaxed text-sm sm:text-base">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
