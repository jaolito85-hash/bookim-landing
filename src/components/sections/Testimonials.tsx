"use client"

import { Container } from "@/components/layout/Container"
import { Badge } from "@/components/ui/Badge"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
    {
        quote: "O Bookim mudou completamente minha rotina. Fotografo minhas notas, os flashcards aparecem prontos e o app me diz exatamente o que revisar.",
        author: "Maria Clara",
        role: "6º período · UFMG",
        initials: "MC",
        color: "#7C3AED",
        rating: 5,
    },
    {
        quote: "Minha nota em Farmacologia foi de 70 para 95 em dois meses. O algoritmo sabe exatamente quando eu preciso revisar cada conteúdo.",
        author: "João Pedro",
        role: "4º período · USP",
        initials: "JP",
        color: "#2563EB",
        rating: 5,
    },
    {
        quote: "Fotografei minhas notas de Anatomia e em segundos tinha flashcards organizados por região. Economizo horas que antes gastava digitando.",
        author: "Rafael Costa",
        role: "2º período · PUC Minas",
        initials: "RC",
        color: "#0891B2",
        rating: 5,
    },
    {
        quote: "A função de criar flashcard por foto é mágica. Economizo horas que antes gastava digitando cards no Anki. Agora tenho mais tempo para revisar.",
        author: "Ana Beatriz",
        role: "Internato · UFRJ",
        initials: "AB",
        color: "#059669",
        rating: 5,
    },
    {
        quote: "Passei no REVALIDA depois de 2 meses usando o Bookim todos os dias. O algoritmo de repetição espaçada faz uma diferença absurda na retenção.",
        author: "Lucas Ferreira",
        role: "Médico formado · UNIFESP",
        initials: "LF",
        color: "#D97706",
        rating: 5,
    },
    {
        quote: "Uso para revisar para a residência de clínica médica. Em 3 meses minha taxa de acerto nos simulados foi de 64% para 81%.",
        author: "Isabela Santos",
        role: "R1 Clínica Médica · HC",
        initials: "IS",
        color: "#DB2777",
        rating: 5,
    },
    {
        quote: "Tentei o Anki por anos mas nunca mantive consistência. No Bookim o processo é tão simples que virou uma rotina natural no meu dia.",
        author: "Carolina Oliveira",
        role: "5º período · UNICAMP",
        initials: "CO",
        color: "#0D9488",
        rating: 5,
    },
    {
        quote: "A IA que gera as perguntas é impressionante. Ela entende o contexto clínico e cria questões realmente úteis para prova e residência.",
        author: "Thiago Alves",
        role: "8º período · Uninter",
        initials: "TA",
        color: "#4F46E5",
        rating: 5,
    },
    {
        quote: "Organizei todo o conteúdo de Semiologia em uma tarde. O Bookim categoriza tudo automaticamente e já inicia o ciclo de revisão.",
        author: "Fernanda Lima",
        role: "3º período · UFPR",
        initials: "FL",
        color: "#9333EA",
        rating: 5,
    },
    {
        quote: "Recomendo para todo colega de turma. Minha performance nas provas melhorou desde que adotei o Bookim e parei com os métodos tradicionais.",
        author: "Bruno Mendes",
        role: "7º período · UFRN",
        initials: "BM",
        color: "#0284C7",
        rating: 5,
    },
]

// Duplicate for seamless loop — both rows use different halves for visual variety
const track1 = [...testimonials, ...testimonials]
const track2 = [...[...testimonials].reverse(), ...[...testimonials].reverse()]

type Testimonial = typeof testimonials[0]

function TestimonialCard({ item }: { item: Testimonial }) {
    return (
        <div className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 rounded-2xl border border-[var(--bookim-border)] bg-white p-5 shadow-sm select-none">
            {/* Top accent */}
            <div className="h-[3px] w-8 rounded-full mb-4" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}99)` }} />

            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
                {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
                ))}
            </div>

            {/* Quote */}
            <p className="text-sm text-[var(--bookim-text-primary)] leading-relaxed mb-5">
                &ldquo;{item.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-[var(--bookim-border)]">
                <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}20` }}
                >
                    <span className="text-xs font-bold" style={{ color: item.color }}>
                        {item.initials}
                    </span>
                </div>
                <div>
                    <p className="text-sm font-semibold text-[var(--bookim-text-primary)] leading-tight">{item.author}</p>
                    <p className="text-xs text-[var(--bookim-text-secondary)] mt-0.5">{item.role}</p>
                </div>
            </div>
        </div>
    )
}

export function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-[var(--bookim-bg-primary)]">
            {/* Header */}
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14 md:mb-16 px-4"
                >
                    <Badge variant="secondary" className="mb-4">Depoimentos</Badge>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[var(--bookim-text-primary)]">
                        Quem usa, aprova.
                    </h2>
                    <p className="text-base sm:text-lg text-[var(--bookim-text-secondary)] max-w-sm mx-auto leading-relaxed">
                        Estudantes de medicina de todo o Brasil já transformaram sua rotina.
                    </p>
                </motion.div>
            </Container>

            {/* ── Esteira de cards (full-bleed) ── */}
            <div className="marquee-mask overflow-hidden flex flex-col gap-5">

                {/* Row 1 → esquerda */}
                <div className="flex gap-4" style={{ animation: "marquee-slide 38s linear infinite" }}>
                    {track1.map((item, i) => (
                        <TestimonialCard key={`t1-${i}`} item={item} />
                    ))}
                </div>

                {/* Row 2 → direita */}
                <div className="flex gap-4" style={{ animation: "marquee-slide 44s linear infinite reverse" }}>
                    {track2.map((item, i) => (
                        <TestimonialCard key={`t2-${i}`} item={item} />
                    ))}
                </div>

            </div>
        </section>
    )
}
