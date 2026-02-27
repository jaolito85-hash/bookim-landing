"use client"

import { Container } from "@/components/layout/Container"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

export function CTA() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Background animado com gradient shift */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#151520] to-[#0A0A0F] z-0" />
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_40%,_#2D4057_0%,_transparent_50%)] blur-[100px] z-0" />
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_70%_60%,_#4A5F7A_0%,_transparent_50%)] blur-[80px] z-0 animated-gradient-bg" />

            {/* Grid de pontos sutil */}
            <div
                className="absolute inset-0 z-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            />

            <Container className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight text-white leading-tight">
                        Seu próximo nível de estudo <br className="hidden sm:block" />
                        <span className="text-[var(--bookim-primary-light)]">começa aqui.</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                        Junte-se a milhares de estudantes de medicina e odontologia que já mudaram a forma de estudar e retêm mais conteúdo com menos stress.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 md:mb-16">
                        <a
                            href="https://pay.hotmart.com/J104595888P?off=cfgh44v8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-xl rounded-2xl bg-white text-[#2D4057] font-bold hover:bg-white/90 transition-all duration-200 shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 btn-glow"
                        >
                            Assinar agora
                            <svg
                                className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <div className="flex space-x-1 text-[var(--bookim-warning)]">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />
                            ))}
                        </div>
                        <div className="text-sm sm:text-base text-gray-400 font-medium">
                            <span className="text-white font-bold">4.9</span> (500+ avaliações)
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
