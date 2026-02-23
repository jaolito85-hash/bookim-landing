"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X } from "lucide-react"
import { cn } from "@/lib/utils"

// Simple Accordion implementation since we don't need the full Radix power for this landing page
// tailored to the specific "Morpho" style (Plus rotating to X).

interface AccordionItemProps {
    title: string
    children: React.ReactNode
    isOpen: boolean
    onToggle: () => void
}

export function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div className="border-b border-[var(--bookim-border)] last:border-0">
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between py-6 text-left text-lg font-medium transition-all hover:text-[var(--bookim-primary)]"
            >
                {title}
                <div className={cn("relative flex h-8 w-8 items-center justify-center rounded-full border border-[var(--bookim-border)] transition-colors", isOpen && "border-[var(--bookim-primary)] bg-[var(--bookim-primary)] text-white")}>
                    <Plus className={cn("h-4 w-4 transition-transform duration-300 absolute", isOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100")} />
                    <X className={cn("h-4 w-4 transition-transform duration-300 absolute", isOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0")} />
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto", marginBottom: 24 },
                            collapsed: { opacity: 0, height: 0, marginBottom: 0 },
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="text-[var(--bookim-text-secondary)] leading-relaxed pr-12">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export function Accordion({ items }: { items: { title: string; content: React.ReactNode }[] }) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0)

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    )
}
