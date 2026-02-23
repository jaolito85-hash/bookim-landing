import { Container } from "@/components/layout/Container"
import { BookimLogoFull } from "@/components/icons/BookimLogoFull"
import Link from "next/link"
import { Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="relative bg-[#050508] py-16 border-t border-white/10 text-white overflow-hidden">
            {/* Glow sutil no topo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-[radial-gradient(ellipse,rgba(45,64,87,0.15)_0%,transparent_70%)]" />

            <Container className="relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="mb-6 inline-block">
                            <BookimLogoFull
                                iconClassName="h-8 w-8"
                                textClassName="text-xl ml-2"
                                textColor="#FFFFFF"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            A revolução do estudo médico com inteligência artificial e neurociência aplicada.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col space-y-3">
                        <h4 className="font-bold text-white mb-1">Produto</h4>
                        <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Recursos</Link>
                        <Link href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Preços</Link>
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Download</Link>
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Changelog</Link>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h4 className="font-bold text-white mb-1">Empresa</h4>
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Sobre nós</Link>
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link>
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contato</Link>
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Carreiras</Link>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h4 className="font-bold text-white mb-1">Legal</h4>
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Termos de Uso</Link>
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacidade</Link>
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 Bookim. Todos os direitos reservados.</p>
                    <p className="mt-4 md:mt-0">Feito com 💜 para estudantes de medicina.</p>
                </div>
            </Container>
        </footer>
    )
}
