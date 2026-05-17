import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/layout/Container"
import { FileText, Mail, Building2, MapPin, CalendarClock } from "lucide-react"

const LAST_UPDATED_ISO = "2026-05-17"
const LAST_UPDATED_LABEL = "17 de maio de 2026"
const EFFECTIVE_DATE_LABEL = "17 de maio de 2026"

const CONTROLLER = {
  name: "NODE DATA TECNOLOGIA LTDA",
  cnpj: "65.705.831/0001-04",
  address:
    "Estrada Teodor Condiev, 970, Sala 502 — Edifício Veccon Prime Center, Jardim Marchissolo, Sumaré/SP, CEP 13.171-105",
  brand: "Bookim",
  site: "https://www.bookim.com.br",
}

const CONTACT_EMAIL = "contato@bookim.com.br"

export const metadata: Metadata = {
  title: "Termos de Uso — Bookim",
  description:
    "Termos e condições de uso do site Bookim e da inscrição na lista de espera, regidos pela legislação brasileira.",
  alternates: { canonical: "/termos" },
  openGraph: {
    title: "Termos de Uso — Bookim",
    description:
      "Termos e condições de uso do site Bookim e da inscrição na lista de espera.",
    url: "/termos",
    type: "article",
  },
  robots: { index: true, follow: true },
}

const sections = [
  { id: "aceitacao", label: "1. Aceitação dos termos" },
  { id: "sobre", label: "2. Sobre o Bookim hoje" },
  { id: "cadastro", label: "3. Cadastro e veracidade" },
  { id: "comunicacoes", label: "4. Comunicações que você recebe" },
  { id: "uso-permitido", label: "5. Uso permitido e vedações" },
  { id: "propriedade", label: "6. Propriedade intelectual" },
  { id: "conteudo", label: "7. Conteúdo do site" },
  { id: "responsabilidade", label: "8. Limitação de responsabilidade" },
  { id: "suspensao", label: "9. Suspensão e cancelamento" },
  { id: "modificacoes", label: "10. Modificações e descontinuação" },
  { id: "dados", label: "11. Dados pessoais e LGPD" },
  { id: "alteracoes", label: "12. Alterações destes termos" },
  { id: "lei-foro", label: "13. Lei aplicável e foro" },
  { id: "contato", label: "14. Como nos contatar" },
]

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-[var(--bookim-bg-primary)] text-[var(--bookim-text-primary)]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 border-b border-[var(--bookim-border)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(45,64,87,0.08)_0%,transparent_70%)]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2D4057]/10 text-[#2D4057] text-xs font-semibold tracking-wide mb-5">
              <FileText className="w-3.5 h-3.5" />
              Regido pela legislação brasileira
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-outfit mb-4">
              Termos de Uso
            </h1>
            <p className="text-[var(--bookim-text-secondary)] text-base md:text-lg leading-relaxed mb-6">
              Estes Termos regem o uso do site{" "}
              <a className="text-[var(--bookim-primary)] hover:underline" href={CONTROLLER.site}>
                www.bookim.com.br
              </a>{" "}
              e da inscrição na lista de espera do Bookim. Ao acessar o site ou se inscrever, você
              declara ter lido, compreendido e concordado com os termos a seguir.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--bookim-text-muted)]">
              <div className="inline-flex items-center gap-1.5">
                <CalendarClock className="w-3.5 h-3.5" />
                <span>
                  Última atualização: <time dateTime={LAST_UPDATED_ISO}>{LAST_UPDATED_LABEL}</time>
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <CalendarClock className="w-3.5 h-3.5" />
                Vigência: {EFFECTIVE_DATE_LABEL}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12 md:py-16">
        <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">
          {/* Sumário sticky */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Sumário dos termos" className="text-sm">
              <h2 className="text-[11px] font-bold uppercase tracking-wider text-[var(--bookim-text-muted)] mb-3">
                Sumário
              </h2>
              <ul className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-[var(--bookim-text-secondary)] hover:text-[var(--bookim-primary)] transition-colors block py-0.5"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Conteúdo */}
          <article className="max-w-3xl space-y-12 text-[var(--bookim-text-secondary)] leading-relaxed">
            {/* 1. Aceitação */}
            <section id="aceitacao" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                1. Aceitação dos termos
              </h2>
              <p className="mb-4">
                Estes Termos de Uso constituem um contrato entre você (&quot;Usuário&quot;) e a{" "}
                <strong>{CONTROLLER.name}</strong>, inscrita no CNPJ sob nº {CONTROLLER.cnpj},
                operadora da marca Bookim (&quot;Bookim&quot;, &quot;nós&quot;).
              </p>
              <p>
                Ao acessar o site, navegar pelas suas páginas ou se inscrever na lista de espera,
                você concorda integralmente com estes Termos. Se você <strong>não concorda</strong>{" "}
                com alguma cláusula, por favor não use o site nem se inscreva.
              </p>
            </section>

            {/* 2. Sobre */}
            <section id="sobre" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                2. Sobre o Bookim hoje
              </h2>
              <p className="mb-4">
                Atualmente, o Bookim está em <strong>fase de pré-lançamento</strong>. O site é
                informativo e oferece um único serviço interativo: a inscrição em uma{" "}
                <strong>lista de espera</strong> para ser avisado quando o aplicativo de estudos
                com IA para estudantes de medicina e odontologia estiver disponível.
              </p>
              <p className="mb-4">
                <strong>O aplicativo Bookim ainda não está disponível para uso.</strong> Toda
                descrição de funcionalidades futuras nas páginas deste site tem caráter informativo
                e pode sofrer alterações até o lançamento oficial, sem prévio aviso.
              </p>
              <p>
                Quando o aplicativo for lançado, novos Termos específicos de uso do app serão
                publicados e você precisará aceitá-los para criar conta.
              </p>
            </section>

            {/* 3. Cadastro */}
            <section id="cadastro" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                3. Cadastro e veracidade das informações
              </h2>
              <p className="mb-4">
                Para se inscrever na lista de espera, você deve fornecer{" "}
                <strong>informações verdadeiras, completas e atualizadas</strong>: nome, email,
                WhatsApp e área de estudo. Você é o único responsável pela exatidão desses dados.
              </p>
              <p className="mb-4">
                Para se cadastrar, é necessário ter pelo menos <strong>18 anos completos</strong>.
                O serviço não é direcionado a menores de idade.
              </p>
              <p>
                O envio de informações falsas, de terceiros sem autorização ou o uso indevido do
                formulário (spam, automação, bots) pode resultar em remoção da inscrição e bloqueio
                de futuras tentativas, sem prejuízo de outras medidas legais cabíveis.
              </p>
            </section>

            {/* 4. Comunicações */}
            <section id="comunicacoes" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                4. Comunicações que você recebe
              </h2>
              <p className="mb-4">
                Ao se inscrever, você concorda em receber as seguintes comunicações em seu email
                ou WhatsApp:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Confirmação imediata da sua inscrição na lista de espera.</li>
                <li>Avisos sobre o lançamento oficial do Bookim.</li>
                <li>
                  Atualizações sobre marcos relevantes do desenvolvimento (ex.: novidades sobre
                  funcionalidades, datas estimadas, oferta de fundador).
                </li>
                <li>
                  Comunicações operacionais e legais relacionadas à sua inscrição (alterações
                  destes Termos ou da Política de Privacidade, atualizações relevantes do serviço).
                </li>
              </ul>
              <p className="mt-4">
                Você pode <strong>cancelar o recebimento a qualquer momento</strong> usando o link
                de descadastro presente em cada email ou respondendo &quot;remover&quot; para{" "}
                <a className="text-[var(--bookim-primary)] hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                . O cancelamento é efetivo em até 48 horas.
              </p>
            </section>

            {/* 5. Uso permitido */}
            <section id="uso-permitido" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                5. Uso permitido e vedações
              </h2>
              <p className="mb-4">Você concorda em <strong>não</strong>:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Usar o site para qualquer finalidade ilegal, fraudulenta ou que viole direitos
                  de terceiros;
                </li>
                <li>
                  Tentar acessar áreas restritas do site (como o painel administrativo), contornar
                  mecanismos de segurança ou explorar vulnerabilidades;
                </li>
                <li>
                  Realizar engenharia reversa, descompilar ou tentar extrair o código-fonte de
                  qualquer componente do site;
                </li>
                <li>
                  Usar robôs, scrapers, crawlers não autorizados ou qualquer meio automatizado para
                  acessar ou extrair conteúdo em larga escala;
                </li>
                <li>
                  Inscrever-se múltiplas vezes com dados falsos para manipular a posição na lista
                  de espera;
                </li>
                <li>
                  Sobrecarregar a infraestrutura do site (ataques de negação de serviço, requisições
                  abusivas);
                </li>
                <li>
                  Reproduzir, copiar, vender, revender ou explorar comercialmente qualquer parte do
                  site sem autorização prévia por escrito;
                </li>
                <li>
                  Inserir vírus, malware, código malicioso ou conteúdo ofensivo, difamatório ou
                  ilegal nos canais de comunicação que disponibilizamos.
                </li>
              </ul>
            </section>

            {/* 6. Propriedade intelectual */}
            <section id="propriedade" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                6. Propriedade intelectual
              </h2>
              <p className="mb-4">
                Todos os direitos de propriedade intelectual sobre o Bookim — incluindo, mas não se
                limitando a: marca &quot;Bookim&quot;, logotipo, identidade visual, layout,
                interfaces, código-fonte, textos, imagens, vídeos, ícones, estrutura do site e
                conteúdos editoriais — pertencem exclusivamente à{" "}
                <strong>{CONTROLLER.name}</strong> ou a seus licenciantes, e são protegidos pela
                Lei de Direitos Autorais (Lei nº 9.610/1998), pela Lei da Propriedade Industrial
                (Lei nº 9.279/1996) e demais normas aplicáveis.
              </p>
              <p>
                A inscrição na lista de espera{" "}
                <strong>não concede ao Usuário qualquer direito ou licença</strong> de uso, cópia,
                modificação, distribuição ou exploração comercial desses ativos. Qualquer uso não
                autorizado pode resultar em responsabilização civil e criminal.
              </p>
            </section>

            {/* 7. Conteúdo do site */}
            <section id="conteudo" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                7. Conteúdo do site
              </h2>
              <p className="mb-4">
                Os textos, números, estatísticas, depoimentos, mockups e descrições de
                funcionalidades exibidos no site têm <strong>caráter informativo e promocional</strong>.
                Embora façamos o nosso melhor para manter o conteúdo exato e atualizado, ele pode
                conter imprecisões, erros tipográficos ou estar desatualizado a qualquer momento.
              </p>
              <p>
                Funcionalidades, preços, prazos de lançamento e condições da oferta de fundador
                podem ser <strong>alterados, suspensos ou descontinuados sem aviso prévio</strong>{" "}
                até o lançamento oficial do aplicativo. Nenhuma informação publicada constitui
                oferta vinculante ou garantia de resultado.
              </p>
            </section>

            {/* 8. Limitação */}
            <section id="responsabilidade" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                8. Limitação de responsabilidade
              </h2>
              <p className="mb-4">
                O site é fornecido <strong>&quot;no estado em que se encontra&quot;</strong>, sem
                garantias de qualquer espécie, expressas ou implícitas, incluindo garantias de
                disponibilidade contínua, ausência de erros, adequação a um propósito específico
                ou não violação de direitos.
              </p>
              <p className="mb-4">
                Na máxima extensão permitida pela legislação aplicável, o Bookim e seus operadores
                <strong> não se responsabilizam por</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Interrupções, indisponibilidades temporárias, lentidão ou falhas técnicas no
                  site ou nos serviços de terceiros (hospedagem, email, banco de dados);
                </li>
                <li>
                  Não entrega de emails causada por filtros antispam, caixas cheias, endereços
                  incorretos ou bloqueios do provedor do destinatário;
                </li>
                <li>
                  Decisões tomadas pelo Usuário com base em informações exibidas no site (por
                  exemplo, expectativa de data de lançamento);
                </li>
                <li>
                  Danos indiretos, lucros cessantes, perda de oportunidade ou danos morais
                  derivados do uso ou da impossibilidade de uso do site;
                </li>
                <li>
                  Atos de terceiros (incluindo ataques cibernéticos) que comprometam temporariamente
                  o serviço, desde que tenhamos adotado medidas de segurança razoáveis.
                </li>
              </ul>
              <p className="mt-4">
                Nada nesta cláusula afasta as responsabilidades que o Bookim tem perante o Usuário
                consumidor por força do Código de Defesa do Consumidor (Lei nº 8.078/1990) ou da
                LGPD.
              </p>
            </section>

            {/* 9. Suspensão */}
            <section id="suspensao" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                9. Suspensão e cancelamento
              </h2>
              <p className="mb-4">
                Reservamo-nos o direito de <strong>remover sua inscrição</strong> da lista de
                espera, recusar inscrições futuras ou bloquear seu acesso ao site, sem aviso
                prévio, caso identifiquemos:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Violação destes Termos ou da Política de Privacidade;</li>
                <li>Tentativas de fraude, manipulação ou abuso do sistema;</li>
                <li>
                  Inserção repetida de dados falsos, números/emails inexistentes ou pertencentes a
                  terceiros sem consentimento;
                </li>
                <li>Conduta que ameace a segurança, integridade ou reputação do serviço.</li>
              </ul>
              <p className="mt-4">
                Você também pode solicitar o <strong>cancelamento voluntário</strong> da sua
                inscrição a qualquer momento, sem necessidade de justificativa, escrevendo para{" "}
                <a className="text-[var(--bookim-primary)] hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>

            {/* 10. Modificações e descontinuação */}
            <section id="modificacoes" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                10. Modificações e descontinuação do serviço
              </h2>
              <p>
                Podemos, a qualquer momento e por qualquer motivo, modificar, suspender ou{" "}
                <strong>descontinuar parcial ou totalmente o site, a lista de espera ou o próprio
                projeto Bookim</strong>. Em caso de descontinuação definitiva, comunicaremos por
                email aos inscritos e procederemos com a eliminação segura dos dados pessoais,
                conforme nossa Política de Privacidade.
              </p>
            </section>

            {/* 11. LGPD */}
            <section id="dados" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                11. Dados pessoais e LGPD
              </h2>
              <p>
                O tratamento dos seus dados pessoais é regido por documento separado e está
                detalhado em nossa{" "}
                <Link className="text-[var(--bookim-primary)] hover:underline" href="/privacidade">
                  Política de Privacidade
                </Link>
                , que integra estes Termos para todos os efeitos. Ao aceitar estes Termos, você
                declara também ter lido e aceitado a Política de Privacidade.
              </p>
            </section>

            {/* 12. Alterações */}
            <section id="alteracoes" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                12. Alterações destes termos
              </h2>
              <p>
                Estes Termos podem ser atualizados a qualquer tempo para refletir mudanças no
                serviço, na legislação ou em práticas operacionais. A versão vigente sempre estará
                disponível nesta URL, com a data da última atualização no topo. Em caso de{" "}
                <strong>mudanças materiais</strong> (por exemplo, alteração na forma de
                comunicação ou no escopo do serviço), notificaremos os inscritos por email com
                antecedência razoável. O uso continuado do site após a publicação das alterações
                significa aceitação dos novos Termos.
              </p>
            </section>

            {/* 13. Lei e foro */}
            <section id="lei-foro" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                13. Lei aplicável e foro
              </h2>
              <p>
                Estes Termos são regidos e interpretados de acordo com as leis da{" "}
                <strong>República Federativa do Brasil</strong>. Fica eleito o foro da Comarca de{" "}
                <strong>Sumaré/SP</strong>, sede do Bookim, como competente para dirimir quaisquer
                questões oriundas destes Termos, com renúncia a qualquer outro, por mais
                privilegiado que seja, ressalvado o direito do Usuário consumidor de optar pelo
                foro do seu domicílio, nos termos do Código de Defesa do Consumidor.
              </p>
            </section>

            {/* 14. Contato */}
            <section id="contato" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                14. Como nos contatar
              </h2>
              <p className="mb-4">
                Dúvidas sobre estes Termos, sugestões ou solicitações relacionadas à sua inscrição
                podem ser enviadas para:
              </p>
              <div className="rounded-2xl border border-[var(--bookim-border)] bg-white p-5 space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <Building2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--bookim-text-muted)]" />
                  <div>
                    <div className="font-semibold text-[var(--bookim-text-primary)]">
                      {CONTROLLER.name}
                    </div>
                    <div className="text-[var(--bookim-text-secondary)]">CNPJ {CONTROLLER.cnpj}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--bookim-text-secondary)]">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--bookim-text-muted)]" />
                  {CONTROLLER.address}
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--bookim-text-muted)]" />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-[var(--bookim-primary)] font-semibold hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </section>

            {/* CTA / volta para o site */}
            <section className="pt-6 border-t border-[var(--bookim-border)]">
              <p className="text-sm">
                Quer começar?{" "}
                <Link
                  href="/lista-de-espera"
                  className="text-[var(--bookim-primary)] font-semibold hover:underline"
                >
                  Entrar para a lista de espera do Bookim →
                </Link>
              </p>
            </section>
          </article>
        </div>
      </Container>

      <Footer />
    </main>
  )
}
