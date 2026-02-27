"use client"

import { Container } from "@/components/layout/Container"
import { MockupPhone } from "@/components/ui/MockupPhone"
import { BookimIcon } from "@/components/icons/BookimIcon"
import { Download, Sparkles, Users, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
            {/* Glow de fundo aprimorado — camadas de luz ambiente */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Glow central topo — mais vibrante */}
                <div className="absolute top-0 left-0 right-0 h-[80vh] bg-[radial-gradient(ellipse_80%_60%_at_50%_-5%,rgba(45,64,87,0.22)_0%,rgba(45,64,87,0.06)_40%,transparent_70%)]" />
                {/* Glow canto superior direito */}
                <div className="absolute -top-32 -right-32 w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(74,95,122,0.12)_0%,transparent_70%)] rounded-full" />
                {/* Glow canto superior esquerdo */}
                <div className="absolute top-16 -left-32 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(45,64,87,0.10)_0%,transparent_70%)] rounded-full" />
                {/* Reflexo de luz no meio-baixo */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse,rgba(45,64,87,0.05)_0%,transparent_70%)]" />
                {/* Grid pattern sutil */}
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #2D4057 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <Container className="relative z-10 flex flex-col items-center text-center">

                {/* Logo marca grande — destaque da identidade */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 130, damping: 18 }}
                    className="mb-8"
                >
                    <div className="relative inline-flex items-center justify-center">
                        {/* Halo de glow ao redor do ícone */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(45,64,87,0.25)_0%,transparent_70%)] blur-2xl scale-[2.5]" />
                        <BookimIcon
                            size={88}
                            className="relative drop-shadow-[0_8px_32px_rgba(45,64,87,0.35)]"
                        />
                    </div>
                </motion.div>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mb-7"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#2D4057]/8 border border-[#2D4057]/10 text-[var(--bookim-text-secondary)] font-medium text-sm tracking-wide">
                        <Sparkles className="w-4 h-4 text-[var(--bookim-warning)]" />
                        <span>Para medicina e odontologia</span>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.2 }}
                    className="text-[2rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.08] mb-6 max-w-4xl text-[var(--bookim-text-primary)] font-outfit px-2"
                >
                    Medicina. Odontologia. <br />
                    <span className="text-[var(--bookim-primary)]">Estudar não precisa ser difícil.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-base sm:text-lg md:text-xl text-[var(--bookim-text-secondary)] max-w-2xl mb-10 leading-relaxed font-medium px-4"
                >
                    Por que estudantes da USP, UFRJ e UFMG estão todos usando o mesmo app? O Bookim é o único app com IA especializada para cada curso — um agente treinado para entender as maiores dúvidas e desafios de medicina e odontologia.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col items-center space-y-5 mb-14"
                >
                    <a
                        href="https://pay.hotmart.com/J104595888P?off=cfgh44v8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rainbow-btn"
                    >
                        <span className="rainbow-btn-inner">
                            Assinar agora
                        </span>
                    </a>
                    <p className="text-xs text-[var(--bookim-text-muted)]">
                        R$67/mês · menos que R$2,30 por dia · Cancele quando quiser
                    </p>
                    <a
                        href="#how-it-works"
                        className="inline-flex items-center text-sm font-medium text-[var(--bookim-text-secondary)] hover:text-[var(--bookim-primary)] transition-colors"
                    >
                        Veja como funciona
                        <svg className="ml-1 w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </motion.div>

                {/* Mockup do app com flutuação */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.45, type: "spring", stiffness: 90 }}
                    className="relative w-full max-w-[300px] sm:max-w-[320px] mx-auto animate-float"
                >
                    {/* Glow sob o telefone */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[280px] h-[80px] bg-[radial-gradient(ellipse,rgba(45,64,87,0.25)_0%,transparent_70%)] blur-xl" />
                    <div className="relative z-10">
                        <MockupPhone className="shadow-[0_24px_80px_-10px_rgba(45,64,87,0.3)] rounded-[3rem] border-8 border-[#1D1D1F]">
                            <div className="flex flex-col h-full bg-white text-black p-5 pt-10">
                                <div className="text-center mb-6">
                                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Hoje</div>
                                    <div className="text-2xl font-bold">Resumo</div>
                                </div>
                                <div className="flex-1 space-y-3">
                                    <div className="p-4 rounded-2xl bg-[#F5F5F7] flex items-center space-x-3 transition-transform hover:scale-[1.02]">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl flex-shrink-0">🧠</div>
                                        <div className="min-w-0">
                                            <div className="font-bold text-sm">Neuroanatomia</div>
                                            <div className="text-xs text-gray-500">14 flashcards pendentes</div>
                                        </div>
                                        <div className="ml-auto">
                                            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                                                <div className="w-4 h-4 rounded-full border-2 border-green-500 border-t-transparent animate-spin" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-[#F5F5F7] flex items-center space-x-3 transition-transform hover:scale-[1.02]">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl flex-shrink-0">💊</div>
                                        <div className="min-w-0">
                                            <div className="font-bold text-sm">Farmacologia</div>
                                            <div className="text-xs text-gray-500">25 review em 2 dias</div>
                                        </div>
                                        <div className="ml-auto text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Em dia</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-[#F5F5F7] flex items-center space-x-3 transition-transform hover:scale-[1.02]">
                                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-xl flex-shrink-0">🦷</div>
                                        <div className="min-w-0">
                                            <div className="font-bold text-sm">Periodontia</div>
                                            <div className="text-xs text-gray-500">8 novos flashcards</div>
                                        </div>
                                        <div className="ml-auto text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Novo</div>
                                    </div>
                                </div>
                            </div>
                        </MockupPhone>
                    </div>
                </motion.div>

                {/* Stats animados */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mt-16 grid grid-cols-3 gap-4 sm:gap-12 max-w-lg mx-auto px-2"
                >
                    {[
                        { icon: Download, value: "20M+", label: "Flashcards revisados" },
                        { icon: Users, value: "5.000+", label: "Estudantes ativos" },
                        { icon: GraduationCap, value: "92%", label: "Taxa de retenção" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >
                            <stat.icon className="w-4 h-4 text-[var(--bookim-text-muted)] mb-1.5" />
                            <div className="text-lg sm:text-2xl font-bold text-[var(--bookim-text-primary)] tracking-tight">{stat.value}</div>
                            <div className="text-[10px] sm:text-xs text-[var(--bookim-text-muted)] mt-0.5 leading-tight">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

            </Container>
        </section>
    )
}
