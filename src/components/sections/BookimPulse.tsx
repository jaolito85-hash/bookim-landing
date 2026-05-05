"use client"

import { Container } from "@/components/layout/Container"
import { BookimIcon } from "@/components/icons/BookimIcon"
import { motion } from "framer-motion"
import { Zap, Bot, Smartphone, Stethoscope, Clock, Sparkles, ArrowRight } from "lucide-react"

const newsItems = [
    {
        time: "07:02",
        tag: "Diagnóstico",
        tagColor: "text-emerald-400 bg-emerald-400/10",
        title: "IA do Google detecta câncer de pulmão com 94% de precisão em novo estudo",
        source: "Nature Medicine",
    },
    {
        time: "07:05",
        tag: "LLM",
        tagColor: "text-blue-400 bg-blue-400/10",
        title: "GPT-5 supera residentes em raciocínio clínico em estudo com 1.200 casos",
        source: "The Lancet Digital Health",
    },
    {
        time: "07:08",
        tag: "Cirurgia",
        tagColor: "text-purple-400 bg-purple-400/10",
        title: "Robô autônomo realiza primeira cirurgia laparoscópica sem intervenção humana",
        source: "Science Robotics",
    },
    {
        time: "07:12",
        tag: "Odontologia",
        tagColor: "text-teal-400 bg-teal-400/10",
        title: "IA identifica cárie incipiente em radiografias com 97% de precisão, superando diagnóstico convencional",
        source: "Journal of Dental Research",
    },
]

const highlights = [
    {
        icon: Bot,
        title: "Curado por IA",
        description: "Algoritmos selecionam as notícias mais relevantes para sua formação.",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        icon: Smartphone,
        title: "Direto no app",
        description: "Todo dia às 07:00 na sua tela. Sem precisar abrir navegador.",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Stethoscope,
        title: "Para medicina e odontologia",
        description: "Conteúdo filtrado para quem está construindo carreira na saúde.",
        gradient: "from-purple-500 to-violet-500",
    },
]

export function BookimPulse() {
    return (
        <section id="bookim-pulse" className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#0a0f1a" }}>
            {/* Glows de fundo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(99,102,241,0.12)_0%,transparent_70%)]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                />
            </div>

            <Container className="relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-6"
                >
                    <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-indigo-950/60 border border-indigo-500/25 text-indigo-300 font-bold text-xs tracking-wider uppercase">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Recurso exclusivo para fundadores</span>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-center mb-16 md:mb-20 px-4 max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                        Acorde com o futuro da <br className="hidden sm:block" />
                        saúde na sua tela.
                    </h2>
                    <div className="space-y-5 text-base sm:text-lg text-gray-400 leading-relaxed">
                        <p>
                            Todo dia, às <span className="text-white font-semibold">7h da manhã</span>, você acorda sabendo o que a saúde está descobrindo.
                        </p>
                        <p>
                            O Bookim Pulse é uma newsletter exclusiva dentro do app. Todos os dias, chegam as notícias mais relevantes sobre IA e saúde no mundo — curadas e resumidas para o estudante brasileiro.
                        </p>
                        <p>
                            Diagnóstico por IA. Inovações em odontologia. Novas descobertas na área da saúde. O futuro chegando primeiro pra você.
                        </p>
                        <p className="italic text-gray-500 pt-2">
                            Porque o profissional de saúde do futuro não pode estudar só o passado.
                        </p>
                    </div>
                </motion.div>

                {/* Main Content: Feed + Mockup */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-20">

                    {/* Feed de Notícias */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center space-x-2 mb-6">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-500 font-medium">Feed de exemplo — 07:00 da manhã</span>
                        </div>

                        {newsItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 + index * 0.1 }}
                                className="group p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-xs text-gray-600 font-mono mt-1 flex-shrink-0 w-10">{item.time}</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${item.tagColor}`}>
                                                {item.tag}
                                            </span>
                                        </div>
                                        <h4 className="text-white text-sm sm:text-base font-medium leading-snug group-hover:text-indigo-300 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-gray-600 mt-1.5">via {item.source}</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-indigo-400 transition-colors mt-1 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Mockup Lateral */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Glow atrás do mockup */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse,rgba(99,102,241,0.2)_0%,transparent_70%)] blur-3xl scale-150" />

                            {/* Phone Frame */}
                            <div className="relative w-[280px] sm:w-[300px] rounded-[2.5rem] border-[6px] border-gray-800 bg-[#0d1117] shadow-[0_24px_80px_-10px_rgba(99,102,241,0.25)] overflow-hidden">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />

                                {/* Screen Content */}
                                <div className="pt-10 pb-8 px-5">
                                    {/* Header do app */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-2">
                                            <BookimIcon size={24} />
                                            <span className="text-white font-bold text-sm">Bookim Pulse</span>
                                        </div>
                                        <div className="flex items-center space-x-1 text-amber-400">
                                            <Zap className="w-3.5 h-3.5 fill-current" />
                                            <span className="text-[10px] font-bold uppercase">Pro</span>
                                        </div>
                                    </div>

                                    {/* Data */}
                                    <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-4 font-medium">
                                        Edição diária • 07:00
                                    </div>

                                    {/* Cards de notícia no app */}
                                    <div className="space-y-3">
                                        <div className="p-3.5 rounded-xl bg-white/[0.06] border border-white/[0.08]">
                                            <div className="flex items-center gap-2 mb-1.5">
                                                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-full uppercase">Diagnóstico</span>
                                            </div>
                                            <p className="text-white text-xs leading-snug font-medium">IA do Google detecta câncer de pulmão com 94% de precisão</p>
                                            <p className="text-gray-600 text-[10px] mt-1">Nature Medicine</p>
                                        </div>

                                        <div className="p-3.5 rounded-xl bg-white/[0.06] border border-white/[0.08]">
                                            <div className="flex items-center gap-2 mb-1.5">
                                                <span className="text-[9px] font-bold text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded-full uppercase">LLM</span>
                                            </div>
                                            <p className="text-white text-xs leading-snug font-medium">GPT-5 supera residentes em raciocínio clínico</p>
                                            <p className="text-gray-600 text-[10px] mt-1">The Lancet</p>
                                        </div>

                                        <div className="p-3.5 rounded-xl bg-white/[0.06] border border-white/[0.08]">
                                            <div className="flex items-center gap-2 mb-1.5">
                                                <span className="text-[9px] font-bold text-teal-400 bg-teal-400/10 px-1.5 py-0.5 rounded-full uppercase">Odonto</span>
                                            </div>
                                            <p className="text-white text-xs leading-snug font-medium">IA detecta cárie com 97% de precisão em radiografias</p>
                                            <p className="text-gray-600 text-[10px] mt-1">J. Dental Research</p>
                                        </div>
                                    </div>

                                    {/* Barra do app */}
                                    <div className="mt-6 flex justify-around text-gray-600">
                                        <div className="flex flex-col items-center space-y-1">
                                            <div className="w-5 h-5 rounded-md bg-white/[0.06]" />
                                            <span className="text-[8px]">Home</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-1">
                                            <Zap className="w-5 h-5 text-indigo-400" />
                                            <span className="text-[8px] text-indigo-400 font-semibold">Pulse</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-1">
                                            <div className="w-5 h-5 rounded-md bg-white/[0.06]" />
                                            <span className="text-[8px]">Perfil</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Highlights Cards */}
                <div className="grid sm:grid-cols-3 gap-5 md:gap-6 mb-16">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group"
                        >
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Final */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <div className="flex flex-col items-center p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] w-full sm:w-auto">
                        <p className="text-white text-lg sm:text-xl font-bold mb-2 text-center">
                            Pulse vem incluso no plano de fundador
                        </p>
                        <p className="text-gray-500 text-sm mb-6 text-center max-w-md">
                            Os primeiros 1000 inscritos da lista de espera ganham acesso ao Bookim Pulse no lançamento — sem custo extra.
                        </p>
                        <a
                            href="/lista-de-espera"
                            className="rainbow-btn"
                        >
                            <span className="rainbow-btn-inner">
                                Entrar na lista de espera
                            </span>
                        </a>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
