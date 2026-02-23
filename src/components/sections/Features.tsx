"use client"

import { Container } from "@/components/layout/Container"
import { Badge } from "@/components/ui/Badge"
import { MockupPhone } from "@/components/ui/MockupPhone"
import { GradientText } from "@/components/ui/GradientText"
import { motion } from "framer-motion"
import { ScanText, BrainCircuit, FolderKanban, BarChart3, Camera, Zap, Star, ChevronRight } from "lucide-react"

const features = [
    {
        title: "Fotografou, aprendeu.",
        description: "Tire uma foto da apostila, slide ou caderno. A IA do Bookim extrai o texto, organiza e cria flashcards inteligentes automaticamente.",
        badge: "Powered by AI",
        icon: ScanText,
        align: "left",
        mockupContent: (
            <div className="flex flex-col h-full bg-white text-black p-4 pt-8">
                <div className="flex items-center gap-2 mb-4">
                    <Camera className="w-5 h-5 text-indigo-500" />
                    <span className="font-bold text-sm">Nova Aula — Foto</span>
                </div>
                <div className="rounded-xl bg-gray-100 p-3 mb-3 flex items-center gap-3">
                    <div className="w-12 h-16 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center">
                        <ScanText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-gray-800">anatomia_p3.jpg</div>
                        <div className="text-[10px] text-gray-500">Processando com IA...</div>
                        <div className="mt-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-green-50 border border-green-200 p-3 mb-3">
                    <div className="flex items-center gap-1.5 mb-1">
                        <Zap className="w-3 h-3 text-green-600" />
                        <span className="text-xs font-semibold text-green-700">12 flashcards criados!</span>
                    </div>
                    <div className="text-[10px] text-green-600">Neuroanatomia — Pares cranianos</div>
                </div>
                <div className="space-y-2 mt-auto">
                    <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100">
                        <div className="text-[10px] font-semibold text-gray-800">O que é o nervo trigêmeo?</div>
                        <div className="text-[9px] text-gray-500 mt-0.5">Toque para ver resposta</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100">
                        <div className="text-[10px] font-semibold text-gray-800">Qual a função do nervo vago?</div>
                        <div className="text-[9px] text-gray-500 mt-0.5">Toque para ver resposta</div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Revise na hora certa.",
        description: "Baseado no algoritmo SM-2 e otimizado com IA, o Bookim calcula exatamente quando você vai esquecer cada card — e te avisa antes que isso aconteça.",
        badge: "Neurociência",
        icon: BrainCircuit,
        align: "right",
        mockupContent: (
            <div className="flex flex-col h-full bg-white text-black p-4 pt-8">
                <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-sm">Revisão Inteligente</span>
                    <BrainCircuit className="w-5 h-5 text-blue-500" />
                </div>
                {/* Curva de esquecimento simplificada */}
                <div className="bg-blue-50 rounded-xl p-3 mb-3">
                    <div className="text-[10px] text-blue-600 font-semibold mb-2">Curva de Esquecimento</div>
                    <div className="h-16 relative flex items-end gap-1">
                        {[85, 65, 45, 30, 80, 60, 42, 78, 62, 85].map((h, i) => (
                            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue-500 to-cyan-400 transition-all duration-500" style={{ height: `${h}%` }} />
                        ))}
                    </div>
                    <div className="flex justify-between text-[8px] text-blue-400 mt-1">
                        <span>1d</span><span>3d</span><span>7d</span><span>14d</span><span>30d</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2.5 bg-amber-50 border border-amber-200 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-semibold text-gray-800">Revisar agora</div>
                            <div className="text-[9px] text-gray-500">Farmacologia — 8 cards</div>
                        </div>
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2 p-2.5 bg-gray-50 border border-gray-100 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-semibold text-gray-800">Revisado hoje</div>
                            <div className="text-[9px] text-gray-500">Anatomia — 12 cards ✓</div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Tudo organizado.",
        description: "A IA categoriza automaticamente seus flashcards por matéria, sistema e tema. Você foca em estudar — o Bookim organiza.",
        badge: "Auto-organização",
        icon: FolderKanban,
        align: "left",
        mockupContent: (
            <div className="flex flex-col h-full bg-white text-black p-4 pt-8">
                <div className="flex items-center gap-2 mb-4">
                    <FolderKanban className="w-5 h-5 text-emerald-500" />
                    <span className="font-bold text-sm">Matérias</span>
                </div>
                <div className="space-y-2.5">
                    {[
                        { name: "Neuroanatomia", count: 48, color: "bg-red-500", emoji: "🧠" },
                        { name: "Farmacologia", count: 36, color: "bg-blue-500", emoji: "💊" },
                        { name: "Cardiologia", count: 52, color: "bg-purple-500", emoji: "🫀" },
                        { name: "Imunologia", count: 24, color: "bg-green-500", emoji: "🦠" },
                        { name: "Patologia", count: 31, color: "bg-amber-500", emoji: "🔬" },
                    ].map((subject) => (
                        <div key={subject.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                            <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-lg">
                                {subject.emoji}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-xs font-semibold text-gray-800">{subject.name}</div>
                                <div className="text-[10px] text-gray-500">{subject.count} flashcards</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "Saiba onde você está.",
        description: "Dashboard pessoal mostra seu progresso real: o que você domina, o que precisa revisar, e quanto tempo dedicou.",
        badge: "Analytics",
        icon: BarChart3,
        align: "right",
        mockupContent: (
            <div className="flex flex-col h-full bg-white text-black p-4 pt-8">
                <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-sm">Performance</span>
                    <BarChart3 className="w-5 h-5 text-orange-500" />
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-green-50 rounded-xl p-2.5 text-center">
                        <div className="text-lg font-bold text-green-600">92%</div>
                        <div className="text-[9px] text-green-500">Retenção</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-2.5 text-center">
                        <div className="text-lg font-bold text-blue-600">4.2h</div>
                        <div className="text-[9px] text-blue-500">Estudo/dia</div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 mb-3">
                    <div className="text-[10px] text-gray-500 font-semibold mb-2">Esta semana</div>
                    <div className="flex items-end gap-1 h-12">
                        {[40, 65, 80, 55, 90, 75, 95].map((h, i) => (
                            <div key={i} className="flex-1 rounded-t transition-all" style={{ height: `${h}%`, background: i === 6 ? 'linear-gradient(to top, #F59E0B, #FBBF24)' : '#E5E7EB' }} />
                        ))}
                    </div>
                    <div className="flex justify-between text-[8px] text-gray-400 mt-1">
                        <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-orange-50 border border-orange-200 rounded-lg">
                    <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                    <div className="text-[10px] font-semibold text-gray-800">Sequência: 12 dias 🔥</div>
                </div>
            </div>
        ),
    },
]

export function Features() {
    return (
        <section id="features" className="py-24 md:py-32 overflow-hidden">
            <Container>
                <div className="text-center mb-20 md:mb-24 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                    >
                        Bookim transforma qualquer material em <GradientText>flashcards inteligentes.</GradientText>
                    </motion.h2>
                </div>

                <div className="space-y-24 md:space-y-32">
                    {features.map((feature, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24 ${feature.align === 'right' ? 'md:flex-row-reverse' : ''}`}>

                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0, x: feature.align === 'left' ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="flex-1 space-y-5 text-center md:text-left px-4 md:px-0"
                            >
                                <Badge variant="accent" className="mb-2">{feature.badge}</Badge>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{feature.title}</h3>
                                <p className="text-base sm:text-lg text-[var(--bookim-text-secondary)] leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="flex items-center justify-center md:justify-start text-[var(--bookim-primary)] font-medium group cursor-pointer">
                                    <feature.icon className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                                    <span>Saiba mais</span>
                                    <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </motion.div>

                            {/* Image Side — Mock realista */}
                            <motion.div
                                initial={{ opacity: 0, x: feature.align === 'left' ? 40 : -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                                className="flex-1 w-full flex justify-center"
                            >
                                <div className="relative">
                                    {/* Glow proeminente atrás do phone */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--bookim-primary)] to-[var(--bookim-primary-light)] blur-[80px] opacity-15 transform scale-90" />
                                    <MockupPhone className="relative z-10 border-gray-800 shadow-[0_24px_60px_-10px_rgba(45,64,87,0.25)]">
                                        {feature.mockupContent}
                                    </MockupPhone>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
