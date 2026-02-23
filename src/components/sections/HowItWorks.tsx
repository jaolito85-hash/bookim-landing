"use client"

import { Container } from "@/components/layout/Container"
import { motion } from "framer-motion"
import { Camera, Sparkles, TrendingUp } from "lucide-react"

const steps = [
    {
        number: "01",
        title: "Capture",
        description: "Fotografe qualquer material de estudo — apostila, slide, caderno ou PDF.",
        icon: Camera,
        gradient: "from-indigo-500 to-violet-500",
        bg: "bg-indigo-50",
    },
    {
        number: "02",
        title: "Processe",
        description: "A IA extrai, organiza e transforma em flashcards com perguntas e respostas.",
        icon: Sparkles,
        gradient: "from-blue-500 to-cyan-500",
        bg: "bg-blue-50",
    },
    {
        number: "03",
        title: "Domine",
        description: "Estude com repetição espaçada e veja seu conhecimento crescer dia após dia.",
        icon: TrendingUp,
        gradient: "from-emerald-500 to-teal-500",
        bg: "bg-emerald-50",
    },
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 md:py-32 bg-[var(--bookim-bg-secondary)] border-y border-[var(--bookim-border)]">
            <Container>
                <div className="text-center mb-16 md:mb-20 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                    >
                        Simples assim.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base sm:text-lg text-[var(--bookim-text-secondary)]"
                    >
                        Três passos para dominar qualquer conteúdo
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 relative px-4 md:px-2">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-16 left-[20%] right-[20%] z-0">
                        <div className="h-0.5 w-full bg-gradient-to-r from-indigo-200 via-blue-200 to-emerald-200" />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center group pt-4"
                        >
                            {/* Number badge — gradient */}
                            <div className="absolute -top-3 right-1/2 translate-x-16 z-20">
                                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-white bg-gradient-to-br ${step.gradient} shadow-lg`}>
                                    {step.number}
                                </span>
                            </div>

                            {/* Icon */}
                            <div className={`w-24 h-24 md:w-28 md:h-28 rounded-3xl ${step.bg} border border-[var(--bookim-border)] flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl group-hover:border-[var(--bookim-primary)] transition-all duration-300 group-hover:-translate-y-1`}>
                                <step.icon className="w-10 h-10 md:w-12 md:h-12 text-[var(--bookim-primary)] transition-transform duration-300 group-hover:scale-110" />
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold mb-3">{step.title}</h3>
                            <p className="text-sm sm:text-base text-[var(--bookim-text-secondary)] leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
