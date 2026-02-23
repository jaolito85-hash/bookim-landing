"use client"

import { Container } from "@/components/layout/Container"
import { Accordion } from "@/components/ui/Accordion"

const faqItems = [
    {
        title: "O Bookim funciona para outras áreas além de medicina?",
        content: "Nosso foco principal e otimizações de IA são para medicina, mas a tecnologia de flashcards e repetição espaçada funciona para qualquer conteúdo de estudo intenso."
    },
    {
        title: "Preciso de internet para usar?",
        content: "Seus flashcards ficam salvos offline para estudo a qualquer momento. A criação de novos cards por foto necessita de conexão para processamento da IA."
    },
    {
        title: "Como funciona a repetição espaçada?",
        content: "Utilizamos uma versão otimizada do algoritmo SM-2. O app agenda as revisões nos intervalos ideais para maximizar sua retenção com o mínimo de esforço."
    },
    {
        title: "Meus dados são seguros?",
        content: "Sim, utilizamos criptografia de ponta a ponta. Seus materiais de estudo e dados de desempenho são privados e seguros."
    },
    {
        title: "Posso importar flashcards de outros apps?",
        content: "Sim, suportamos importação direta do Anki (.apkg) e arquivos CSV, para que você não perca seu progresso anterior."
    },
]

export function FAQ() {
    return (
        <section className="py-24 bg-[var(--bookim-bg-secondary)] border-y border-[var(--bookim-border)]">
            <Container>
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Perguntas frequentes</h2>
                </div>
                <div className="max-w-3xl mx-auto px-2">
                    <Accordion items={faqItems} />
                </div>
            </Container>
        </section>
    )
}
