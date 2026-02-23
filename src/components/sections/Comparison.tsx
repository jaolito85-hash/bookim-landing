"use client"

import { Container } from "@/components/layout/Container"
import { Badge } from "@/components/ui/Badge"
import { Check, X, Zap } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        label: "Criação de flashcards",
        traditional: "Manual, um por um — leva horas",
        bookim: "Automático com IA + foto em segundos",
    },
    {
        label: "Repetição espaçada",
        traditional: "Básica ou inexistente",
        bookim: "Algoritmo SM-2 otimizado com IA",
    },
    {
        label: "Organização do conteúdo",
        traditional: "Manual, por pastas",
        bookim: "Auto-categorização inteligente",
    },
    {
        label: "Extração de texto (OCR)",
        traditional: "Não disponível",
        bookim: "OCR + IA integrados nativamente",
    },
    {
        label: "Métricas de progresso",
        traditional: "Muito limitadas ou pagas",
        bookim: "Dashboard completo e gratuito",
    },
    {
        label: "Foco em medicina",
        traditional: "App genérico para tudo",
        bookim: "100% especializado para área da saúde",
    },
    {
        label: "IA no núcleo",
        traditional: "Nenhuma integração real",
        bookim: "IA em cada etapa do aprendizado",
    },
]

const cardVariants = {
    hidden: (dir: number) => ({ opacity: 0, x: dir * 28 }),
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
}

const rowVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 + i * 0.06, duration: 0.35 },
    }),
}

export function Comparison() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-[var(--bookim-bg-secondary)] border-y border-[var(--bookim-border)]">
            {/* Ambient glow top */}
            <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(45,64,87,0.07),transparent)] pointer-events-none" />

            <Container>
                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14 md:mb-20 px-4"
                >
                    <Badge variant="secondary" className="mb-4">Comparativo</Badge>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[var(--bookim-text-primary)]">
                        Não é só mais um app de flashcard.
                    </h2>
                    <p className="text-[var(--bookim-text-secondary)] text-base sm:text-lg max-w-md mx-auto leading-relaxed">
                        Enquanto outros pedem esforço manual, o Bookim faz o trabalho pesado por você.
                    </p>
                </motion.div>

                {/* ── Cards ── */}
                <div className="relative max-w-4xl mx-auto">
                    {/* VS badge — visible on md+ between cards */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                        <div className="w-11 h-11 rounded-full bg-[var(--bookim-bg-secondary)] border-2 border-[var(--bookim-border)] shadow-md flex items-center justify-center">
                            <span className="text-[10px] font-black text-[var(--bookim-text-muted)] tracking-tight leading-none">VS</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 md:gap-7 items-start">

                        {/* ════════════════════════
                            CARD: TRADICIONAIS
                            ════════════════════════ */}
                        <motion.div
                            custom={-1}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative rounded-2xl border border-[var(--bookim-border)] bg-white/80 backdrop-blur-sm p-7 md:p-8 md:mt-6"
                        >
                            {/* Card header */}
                            <div className="mb-6">
                                <div className="inline-flex items-center gap-1.5 mb-3">
                                    <div className="w-5 h-5 rounded-full bg-[var(--bookim-bg-tertiary)] flex items-center justify-center">
                                        <X className="w-3 h-3 text-[var(--bookim-text-muted)]" />
                                    </div>
                                    <span className="text-[10px] font-bold text-[var(--bookim-text-muted)] uppercase tracking-widest">
                                        Apps tradicionais
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-[var(--bookim-text-primary)] leading-tight">
                                    Anki, Quizlet &amp; similares
                                </h3>
                                <p className="text-sm text-[var(--bookim-text-secondary)] mt-1.5 leading-relaxed">
                                    Ferramentas genéricas que exigem muito tempo e esforço manual.
                                </p>
                            </div>

                            <div className="h-px bg-[var(--bookim-border)] mb-6" />

                            {/* Feature rows */}
                            <div className="space-y-4">
                                {features.map((feat, i) => (
                                    <motion.div
                                        key={i}
                                        custom={i}
                                        variants={rowVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3 group"
                                    >
                                        <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                                            <X className="w-2.5 h-2.5 text-[var(--bookim-danger)]" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[10px] font-semibold text-[var(--bookim-text-muted)] uppercase tracking-wider mb-0.5">
                                                {feat.label}
                                            </p>
                                            <p className="text-sm text-[var(--bookim-text-secondary)] leading-snug">
                                                {feat.traditional}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* ════════════════════════
                            CARD: BOOKIM (PREMIUM)
                            ════════════════════════ */}
                        <motion.div
                            custom={1}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Floating "Recomendado" badge */}
                            <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 z-20">
                                <span className="inline-flex items-center gap-1.5 bg-[var(--bookim-primary)] text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-[0_4px_16px_rgba(45,64,87,0.35)] uppercase tracking-widest">
                                    <Zap className="w-2.5 h-2.5 fill-white stroke-0" />
                                    Recomendado
                                </span>
                            </div>

                            {/* Ambient glow behind card */}
                            <div className="absolute -inset-2 rounded-[24px] bg-gradient-to-br from-[#2D4057] to-[#4834D4] opacity-10 blur-2xl pointer-events-none" />

                            {/* Gradient border shell */}
                            <div className="relative rounded-[20px] p-[1.5px] bg-gradient-to-br from-[#2D4057] via-[#4A5F7A] to-[#4834D4] shadow-[0_24px_64px_rgba(45,64,87,0.22)]">

                                {/* Inner card */}
                                <div className="relative rounded-[18px] bg-white p-7 md:p-8 overflow-hidden">

                                    {/* Subtle inner glow */}
                                    <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-[#2D4057]/[0.025] to-[#4834D4]/[0.04] pointer-events-none" />

                                    <div className="relative">
                                        {/* Card header */}
                                        <div className="mb-6">
                                            <div className="inline-flex items-center gap-1.5 mb-3">
                                                <div className="w-5 h-5 rounded-full bg-[var(--bookim-primary)]/10 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-[var(--bookim-primary)]" />
                                                </div>
                                                <span className="text-[10px] font-bold text-[var(--bookim-primary)] uppercase tracking-widest">
                                                    A solução inteligente
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-[var(--bookim-text-primary)] leading-tight">
                                                Bookim
                                            </h3>
                                            <p className="text-sm text-[var(--bookim-text-secondary)] mt-1.5 leading-relaxed">
                                                IA que cria, organiza e otimiza seu estudo de ponta a ponta.
                                            </p>
                                        </div>

                                        <div className="h-px bg-gradient-to-r from-transparent via-[var(--bookim-primary)]/25 to-transparent mb-6" />

                                        {/* Feature rows */}
                                        <div className="space-y-4">
                                            {features.map((feat, i) => (
                                                <motion.div
                                                    key={i}
                                                    custom={i}
                                                    variants={rowVariants}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                                                        <Check className="w-2.5 h-2.5 text-emerald-500" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[10px] font-semibold text-[var(--bookim-primary)] uppercase tracking-wider mb-0.5">
                                                            {feat.label}
                                                        </p>
                                                        <p className="text-sm font-medium text-[var(--bookim-text-primary)] leading-snug">
                                                            {feat.bookim}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="mt-8 pt-6 border-t border-[var(--bookim-border)]">
                                            <a
                                                href="https://pay.hotmart.com/J104595888P?off=cfgh44v8"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center w-full py-3.5 rounded-xl bg-[var(--bookim-primary)] text-white text-sm font-semibold tracking-wide hover:bg-[var(--bookim-primary-light)] transition-all duration-200 shadow-md hover:shadow-[0_8px_24px_rgba(45,64,87,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                                            >
                                                Assinar agora →
                                            </a>
                                            <p className="text-center text-[11px] text-[var(--bookim-text-muted)] mt-2.5">
                                                R$67/mês · Pagamento seguro via Hotmart
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </Container>
        </section>
    )
}
