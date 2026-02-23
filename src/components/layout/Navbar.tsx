"use client"

import * as React from "react"
import Link from "next/link"
import { BookimLogoFull } from "@/components/icons/BookimLogoFull"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/layout/Container"
import { Menu, X, Zap } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

// Links
const navLinks = [
    { name: "Recursos", href: "#features" },
    { name: "Como Funciona", href: "#how-it-works" },
    { name: "Bookim Pulse", href: "#bookim-pulse", icon: Zap },
    { name: "Preços", href: "#pricing" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav h-16 shadow-sm" : "bg-transparent h-20"
                }`}
        >
            <Container className="h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group">
                    <BookimLogoFull
                        iconClassName="h-8 w-8 transition-transform group-hover:scale-110"
                        textClassName="text-xl ml-2"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[var(--bookim-text-secondary)] hover:text-[var(--bookim-text-primary)] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--bookim-primary)] after:transition-all hover:after:w-full inline-flex items-center gap-1"
                        >
                            {link.icon && <link.icon className="w-3.5 h-3.5" />}
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center space-x-4">
                    <Button variant="ghost" size="sm">Entrar</Button>
                    <a
                        href="https://pay.hotmart.com/J104595888P?off=cfgh44v8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center h-9 px-5 text-sm rounded-full bg-[#2D4057] text-white font-semibold hover:bg-[#1e2d3d] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(45,64,87,0.35)] hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Assinar agora
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-[var(--bookim-text-primary)] p-2 -mr-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </Container>

            {/* Mobile Menu with AnimatePresence */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-[var(--bookim-border)] p-4 shadow-xl"
                    >
                        <nav className="flex flex-col space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 + 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-2 text-base font-medium text-[var(--bookim-text-primary)] py-3 px-3 rounded-xl hover:bg-gray-50 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.icon && <link.icon className="w-4 h-4" />}
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="pt-4 mt-2 border-t border-[var(--bookim-border)] flex flex-col space-y-3">
                                <Button variant="ghost" className="w-full justify-center">Entrar</Button>
                                <a
                                    href="https://pay.hotmart.com/J104595888P?off=cfgh44v8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-center w-full h-12 rounded-xl bg-[#2D4057] text-white font-semibold text-sm transition-all duration-200 hover:bg-[#1e2d3d]"
                                >
                                    Assinar agora
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
