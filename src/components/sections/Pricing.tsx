"use client"

import { useState } from "react"
import { Container } from "@/components/layout/Container"
import { BookimIcon } from "@/components/icons/BookimIcon"
import { Check, ShieldCheck, CreditCard, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const HOTMART_MENSAL = "https://pay.hotmart.com/J104595888P?off=cfgh44v8"
const HOTMART_ANUAL = "https://pay.hotmart.com/J104595888P?off=bryfks8g"

const features = [
    "Flashcards ilimitados",
    "Fotos ilimitadas com reconhecimento por IA",
    "Repetição espaçada inteligente (SM-2 + IA)",
    "Organização automática por matéria e tópico",
    "Dashboard de métricas e desempenho completo",
    "Suporte prioritário",
    "Todas as atualizações futuras inclusas",
    "Acesso em todos os dispositivos",
]

export function Pricing() {
    const [isAnual, setIsAnual] = useState(true)

    return (
        <section id="pricing" className="relative py-32 overflow-hidden section-glow">
            {/* Ambient glow central */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(45,64,87,0.07)_0%,transparent_70%)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse,rgba(45,64,87,0.06)_0%,transparent_70%)]" />
            </div>

            <Container className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D4057]/10 text-[#2D4057] text-sm font-semibold tracking-wide mb-6">
                        <Zap className="w-3.5 h-3.5" />
                        Plano único
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-outfit text-[var(--bookim-text-primary)]">
                        Simples. Direto.{" "}
                        <span className="text-[var(--bookim-primary)]">Completo.</span>
                    </h2>
                    <p className="text-[var(--bookim-text-secondary)] text-lg max-w-xl mx-auto leading-relaxed">
                        Um plano. Tudo incluso. Sem surpresas, sem limites.
                    </p>
                </motion.div>

                {/* Toggle Mensal / Anual */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center justify-center gap-3 mb-12"
                >
                    <span className={`text-sm font-semibold transition-colors ${!isAnual ? 'text-[var(--bookim-text-primary)]' : 'text-[var(--bookim-text-muted)]'}`}>
                        Mensal
                    </span>

                    {/* Switch */}
                    <button
                        onClick={() => setIsAnual(!isAnual)}
                        className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${isAnual ? 'bg-[#2D4057]' : 'bg-gray-300'}`}
                        aria-label="Alternar entre plano mensal e anual"
                    >
                        <motion.div
                            className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md"
                            animate={{ left: isAnual ? '30px' : '4px' }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    </button>

                    <span className={`text-sm font-semibold transition-colors ${isAnual ? 'text-[var(--bookim-text-primary)]' : 'text-[var(--bookim-text-muted)]'}`}>
                        Anual
                    </span>

                    {/* Badge "2 meses grátis" */}
                    <AnimatePresence>
                        {isAnual && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.8, x: -10 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold"
                            >
                                2 meses grátis 🎉
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="max-w-lg mx-auto"
                >
                    {/* Glow halo */}
                    <div className="relative group">
                        <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[#2D4057]/25 via-[#4A5F7A]/15 to-[#2D4057]/25 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Card principal */}
                        <div className="relative bg-white rounded-[1.75rem] overflow-hidden shadow-[0_40px_100px_-15px_rgba(45,64,87,0.22),0_0_0_1px_rgba(45,64,87,0.08)]">

                            {/* Barra superior gradiente */}
                            <div className="h-1.5 bg-gradient-to-r from-[#2D4057] via-[#4A5F7A] to-[#2D4057]" />

                            <div className="p-8 md:p-10">

                                {/* Cabeçalho do card */}
                                <div className="flex items-center justify-between mb-10">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(45,64,87,0.25)_0%,transparent_70%)] blur-md scale-150" />
                                            <BookimIcon size={52} className="relative drop-shadow-[0_4px_12px_rgba(45,64,87,0.3)]" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-xl text-[var(--bookim-text-primary)] font-outfit tracking-tight">
                                                Bookim Pro
                                            </div>
                                            <div className="text-sm text-[var(--bookim-text-secondary)]">
                                                Acesso completo
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1.5 rounded-full bg-[#2D4057] text-white text-xs font-bold tracking-widest uppercase">
                                        Popular
                                    </div>
                                </div>

                                {/* Preço — com animação ao trocar */}
                                <div className="mb-8">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={isAnual ? "anual" : "mensal"}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            {isAnual ? (
                                                <>
                                                    <div className="flex items-end gap-1 leading-none">
                                                        <span className="text-2xl font-semibold text-[var(--bookim-text-secondary)] mb-3">
                                                            R$
                                                        </span>
                                                        <span className="text-[4rem] sm:text-[6rem] md:text-[7rem] font-bold tracking-tighter text-[var(--bookim-text-primary)] font-outfit leading-none">
                                                            588
                                                        </span>
                                                        <div className="flex flex-col mb-3 ml-0.5">
                                                            <span className="text-2xl font-semibold text-[var(--bookim-text-secondary)]">
                                                                ,00
                                                            </span>
                                                            <span className="text-sm text-[var(--bookim-text-muted)]">/ano</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 mt-2">
                                                        <span className="text-[var(--bookim-text-muted)] text-base line-through">R$804,00</span>
                                                        <span className="text-emerald-600 text-sm font-bold">equivale a R$49/mês</span>
                                                    </div>
                                                    <p className="text-[var(--bookim-text-muted)] text-sm mt-2">
                                                        Cobrado anualmente · Cancele a qualquer momento
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="flex items-end gap-1 leading-none">
                                                        <span className="text-2xl font-semibold text-[var(--bookim-text-secondary)] mb-3">
                                                            R$
                                                        </span>
                                                        <span className="text-[4rem] sm:text-[6rem] md:text-[7rem] font-bold tracking-tighter text-[var(--bookim-text-primary)] font-outfit leading-none">
                                                            67
                                                        </span>
                                                        <div className="flex flex-col mb-3 ml-0.5">
                                                            <span className="text-2xl font-semibold text-[var(--bookim-text-secondary)]">
                                                                ,00
                                                            </span>
                                                            <span className="text-sm text-[var(--bookim-text-muted)]">/mês</span>
                                                        </div>
                                                    </div>
                                                    <p className="text-[var(--bookim-text-muted)] text-sm mt-2">
                                                        Cobrado mensalmente · Cancele a qualquer momento
                                                    </p>
                                                </>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Divisor */}
                                <div className="h-px bg-gradient-to-r from-transparent via-[#E5E5EA] to-transparent mb-8" />

                                {/* Features */}
                                <ul className="space-y-3.5 mb-10">
                                    {features.map((feature, i) => (
                                        <motion.li
                                            key={feature}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2D4057]/10 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-[#2D4057]" strokeWidth={3} />
                                            </div>
                                            <span className="text-[var(--bookim-text-primary)] text-sm font-medium">
                                                {feature}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Botão CTA */}
                                <a
                                    href={isAnual ? HOTMART_ANUAL : HOTMART_MENSAL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn flex items-center justify-center w-full h-14 rounded-2xl bg-[#2D4057] hover:bg-[#1e2d3d] text-white font-semibold text-base transition-all duration-200 hover:shadow-[0_12px_40px_rgba(45,64,87,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
                                >
                                    {isAnual ? "Garantir plano anual" : "Assinar agora"}
                                    <svg
                                        className="ml-2 w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>

                                {/* Trust indicators */}
                                <div className="mt-5 flex items-center justify-center gap-5 text-xs text-[var(--bookim-text-muted)]">
                                    <div className="flex items-center gap-1.5">
                                        <ShieldCheck className="w-3.5 h-3.5 text-[var(--bookim-success)]" />
                                        <span>Pagamento seguro</span>
                                    </div>
                                    <div className="w-px h-3.5 bg-[#E5E5EA]" />
                                    <div className="flex items-center gap-1.5">
                                        <CreditCard className="w-3.5 h-3.5 text-[#2D4057]" />
                                        <span>Via Hotmart</span>
                                    </div>
                                    <div className="w-px h-3.5 bg-[#E5E5EA]" />
                                    <span>Cancele quando quiser</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
