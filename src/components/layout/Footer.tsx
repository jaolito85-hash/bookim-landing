import { Container } from "@/components/layout/Container"
import { BookimLogoFull } from "@/components/icons/BookimLogoFull"
import Link from "next/link"

// TikTok não tem ícone no lucide-react — usamos SVG inline oficial simplificado.
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.09z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="relative bg-[#050508] py-16 border-t border-white/10 text-white overflow-hidden">
      {/* Glow sutil no topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-[radial-gradient(ellipse,rgba(45,64,87,0.15)_0%,transparent_70%)]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="mb-6 inline-block">
              <BookimLogoFull
                iconClassName="h-8 w-8"
                textClassName="text-xl ml-2"
                textColor="#FFFFFF"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A revolução do estudo na área da saúde com inteligência artificial e neurociência
              aplicada.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.tiktok.com/@appbookim"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bookim no TikTok"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Produto */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-white mb-1">Produto</h4>
            <Link href="/#features" className="text-sm text-gray-400 hover:text-white transition-colors">
              Recursos
            </Link>
            <Link href="/#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">
              Como funciona
            </Link>
            <Link href="/#bookim-pulse" className="text-sm text-gray-400 hover:text-white transition-colors">
              Bookim Pulse
            </Link>
            <Link href="/#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
              Preços
            </Link>
            <Link href="/lista-de-espera" className="text-sm text-gray-400 hover:text-white transition-colors">
              Lista de espera
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-white mb-1">Legal</h4>
            <Link href="/termos" className="text-sm text-gray-400 hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="text-sm text-gray-400 hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/privacidade#cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
              Cookies
            </Link>
            <a
              href="mailto:contato@bookim.com.br"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contato
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-2">
          <p>© 2026 Bookim. Todos os direitos reservados.</p>
          <p className="text-xs text-gray-600">
            NODE DATA TECNOLOGIA LTDA · CNPJ 65.705.831/0001-04 · Sumaré/SP
          </p>
        </div>
      </Container>
    </footer>
  )
}
