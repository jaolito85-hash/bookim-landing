import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Container } from "@/components/layout/Container"
import { Accordion } from "@/components/ui/Accordion"
import { ShieldCheck, Mail, MapPin, Building2, CalendarClock } from "lucide-react"

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

const DPO_EMAIL = "contato@bookim.com.br"

export const metadata: Metadata = {
  title: "Política de Privacidade — Bookim",
  description:
    "Como o Bookim coleta, usa, armazena e protege seus dados pessoais, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).",
  alternates: { canonical: "/privacidade" },
  openGraph: {
    title: "Política de Privacidade — Bookim",
    description:
      "Como o Bookim coleta, usa, armazena e protege seus dados pessoais conforme a LGPD.",
    url: "/privacidade",
    type: "article",
  },
  robots: { index: true, follow: true },
}

const sections = [
  { id: "controlador", label: "1. Quem é o controlador" },
  { id: "encarregado", label: "2. Encarregado (DPO)" },
  { id: "dados", label: "3. Quais dados coletamos" },
  { id: "finalidades", label: "4. Para que usamos seus dados" },
  { id: "base-legal", label: "5. Base legal do tratamento" },
  { id: "compartilhamento", label: "6. Com quem compartilhamos" },
  { id: "transferencia", label: "7. Transferência internacional" },
  { id: "retencao", label: "8. Por quanto tempo guardamos" },
  { id: "cookies", label: "9. Cookies e tecnologias similares" },
  { id: "direitos", label: "10. Seus direitos como titular" },
  { id: "exercer", label: "11. Como exercer seus direitos" },
  { id: "seguranca", label: "12. Como protegemos seus dados" },
  { id: "menores", label: "13. Crianças e adolescentes" },
  { id: "alteracoes", label: "14. Alterações desta política" },
  { id: "lei-foro", label: "15. Lei aplicável e foro" },
  { id: "contato", label: "16. Como nos contatar" },
  { id: "faq", label: "Perguntas frequentes" },
]

const faqItems = [
  {
    title: "Por que vocês pedem meu número de WhatsApp?",
    content: (
      <p>
        O WhatsApp é usado <strong>exclusivamente</strong> para te avisar sobre o lançamento do
        Bookim e enviar comunicações relacionadas à sua inscrição na lista de espera. Não enviamos
        mensagens promocionais sem relação com o produto e nunca compartilhamos seu número com
        terceiros para fins de marketing. Você pode pedir a remoção a qualquer momento escrevendo
        para {DPO_EMAIL}.
      </p>
    ),
  },
  {
    title: "Vocês vendem ou compartilham meus dados com universidades, escolas ou cursinhos?",
    content: (
      <p>
        <strong>Não.</strong> Nunca vendemos seus dados pessoais e não os compartilhamos com
        instituições de ensino, cursinhos, editoras ou qualquer terceiro para fins comerciais. O
        compartilhamento se limita aos operadores técnicos descritos na seção 6 (Supabase para
        armazenamento e Resend para envio de email), estritamente para fazer o serviço funcionar.
      </p>
    ),
  },
  {
    title: "Como peço para deletar todos os meus dados?",
    content: (
      <p>
        Envie um email para <a className="underline" href={`mailto:${DPO_EMAIL}?subject=Solicita%C3%A7%C3%A3o%20de%20Elimina%C3%A7%C3%A3o%20de%20Dados%20%E2%80%94%20LGPD`}>{DPO_EMAIL}</a>{" "}
        com o assunto &quot;Solicitação de Eliminação de Dados — LGPD&quot; informando o email que
        você usou na inscrição. A confirmação ocorre em até <strong>15 dias úteis</strong>,
        conforme art. 19 da LGPD. Após a eliminação, mantemos apenas registros mínimos por
        obrigação legal (ex.: comprovação do próprio pedido).
      </p>
    ),
  },
  {
    title: "Vocês usam meus dados para treinar modelos de IA?",
    content: (
      <p>
        <strong>Não.</strong> Os dados coletados na lista de espera (nome, email, WhatsApp, área de
        estudo) são usados apenas para comunicação sobre o lançamento. Nenhum dado pessoal seu é
        enviado para sistemas de inteligência artificial para treinamento de modelos. Quando o
        Bookim for lançado, o uso de IA dentro do aplicativo será regido por uma política específica
        de uso de IA, que apresentaremos antes da utilização.
      </p>
    ),
  },
  {
    title: "Posso pedir uma cópia de tudo o que vocês têm sobre mim?",
    content: (
      <p>
        Sim, esse é o seu <strong>direito à portabilidade</strong> (art. 18, V da LGPD). Solicite
        por email para {DPO_EMAIL} e enviaremos um arquivo legível (CSV ou JSON) com todos os
        dados que armazenamos sobre você. O prazo de resposta é o mesmo: até 15 dias úteis.
      </p>
    ),
  },
  {
    title: "Em quanto tempo vocês respondem solicitações relacionadas à LGPD?",
    content: (
      <p>
        Respondemos a qualquer solicitação do titular (acesso, correção, eliminação, portabilidade
        ou revogação de consentimento) em até <strong>15 dias úteis</strong>. Casos mais complexos
        podem exigir prorrogação justificada, sempre comunicada antes do prazo original vencer.
      </p>
    ),
  },
  {
    title: "Vocês têm certificações de segurança ou auditorias?",
    content: (
      <p>
        Atualmente o Bookim está em fase de pré-lançamento e ainda não possui certificações formais
        como ISO 27001 ou SOC 2. Adotamos as boas práticas técnicas descritas na seção 12
        (criptografia em trânsito via HTTPS, controle de acesso por chave, hash de senhas no admin)
        e nossos operadores principais (Supabase e Resend) seguem padrões reconhecidos do setor.
        Atualizaremos esta política caso obtenhamos certificações.
      </p>
    ),
  },
  {
    title: "O que acontece com meus dados se eu nunca usar o app depois?",
    content: (
      <p>
        Se você se inscrever na lista de espera mas não criar conta no app após o lançamento,
        manteremos seus dados por até <strong>12 meses</strong> após o lançamento oficial para o
        caso de você decidir entrar depois. Após esse prazo, anonimizamos ou eliminamos os dados
        automaticamente, exceto se você tiver pedido remoção antes (que é executada imediatamente).
      </p>
    ),
  },
  {
    title: "Como sei que vocês realmente deletaram meus dados quando pedi?",
    content: (
      <p>
        Após processar a eliminação, enviamos uma <strong>confirmação por email</strong> com a data
        e hora da exclusão. Se você quiser uma declaração formal por escrito (útil em casos
        envolvendo a ANPD), solicite junto com o pedido inicial e enviamos um documento assinado
        digitalmente.
      </p>
    ),
  },
  {
    title: "E se eu não concordar com algo nesta política?",
    content: (
      <p>
        Você tem total direito de não concordar. Nesse caso, basta não se inscrever na lista de
        espera — sem nenhuma penalidade. Se você já se inscreveu e mudou de ideia, peça a remoção
        dos seus dados para {DPO_EMAIL} e cumprimos imediatamente. Em caso de divergência, você
        também pode reclamar à <strong>ANPD</strong> (Autoridade Nacional de Proteção de Dados)
        pelo site{" "}
        <a className="underline" href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">
          gov.br/anpd
        </a>
        .
      </p>
    ),
  },
]

export default function PrivacidadePage() {
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
              <ShieldCheck className="w-3.5 h-3.5" />
              Conforme a LGPD — Lei nº 13.709/2018
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-outfit mb-4">
              Política de Privacidade
            </h1>
            <p className="text-[var(--bookim-text-secondary)] text-base md:text-lg leading-relaxed mb-6">
              Esta política descreve, de forma clara e objetiva, como o Bookim coleta, utiliza,
              armazena, compartilha e protege os dados pessoais dos titulares que se inscrevem em
              nossa lista de espera, conforme a Lei Geral de Proteção de Dados Pessoais (Lei nº
              13.709/2018 — &quot;LGPD&quot;).
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
          {/* Sumário (sticky em desktop) */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Sumário da política" className="text-sm">
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
            {/* 1. Controlador */}
            <section id="controlador" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                1. Quem é o controlador dos seus dados
              </h2>
              <p className="mb-4">
                O Bookim é uma marca operada por:
              </p>
              <div className="rounded-2xl border border-[var(--bookim-border)] bg-white p-5 space-y-2 text-[var(--bookim-text-primary)] text-sm">
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--bookim-text-muted)]" />
                  <div>
                    <div className="font-semibold">{CONTROLLER.name}</div>
                    <div className="text-[var(--bookim-text-secondary)]">CNPJ {CONTROLLER.cnpj}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--bookim-text-muted)]" />
                  <div className="text-[var(--bookim-text-secondary)]">{CONTROLLER.address}</div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--bookim-text-muted)]" />
                  <a
                    href={`mailto:${DPO_EMAIL}`}
                    className="text-[var(--bookim-primary)] hover:underline"
                  >
                    {DPO_EMAIL}
                  </a>
                </div>
              </div>
              <p className="mt-4">
                Para os fins desta política, &quot;Bookim&quot;, &quot;nós&quot; ou &quot;a
                empresa&quot; referem-se à pessoa jurídica acima, atuando como{" "}
                <strong>controladora</strong> dos seus dados pessoais (art. 5º, VI da LGPD).
              </p>
            </section>

            {/* 2. DPO */}
            <section id="encarregado" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                2. Encarregado pelo Tratamento de Dados (DPO)
              </h2>
              <p>
                Conforme art. 41 da LGPD, indicamos um Encarregado responsável por receber
                comunicações dos titulares e da Autoridade Nacional de Proteção de Dados (ANPD). O
                Encarregado pode ser contatado pelo email{" "}
                <a className="text-[var(--bookim-primary)] hover:underline" href={`mailto:${DPO_EMAIL}`}>
                  {DPO_EMAIL}
                </a>
                .
              </p>
            </section>

            {/* 3. Quais dados */}
            <section id="dados" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                3. Quais dados pessoais coletamos
              </h2>
              <p className="mb-4">
                Coletamos somente o necessário para te avisar sobre o lançamento e cumprir nossas
                obrigações legais. Atualmente, na lista de espera, tratamos os seguintes dados:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[var(--bookim-border)] bg-white">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50/60">
                    <tr className="text-left text-[11px] font-bold uppercase tracking-wider text-[var(--bookim-text-muted)]">
                      <th className="px-4 py-3">Dado</th>
                      <th className="px-4 py-3">Origem</th>
                      <th className="px-4 py-3">Como é usado</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--bookim-text-primary)]">
                    <tr className="border-t border-[var(--bookim-border)]">
                      <td className="px-4 py-3 font-medium">Nome completo</td>
                      <td className="px-4 py-3 text-[var(--bookim-text-secondary)]">Você informa no formulário</td>
                      <td className="px-4 py-3 text-[var(--bookim-text-secondary)]">Personalizar comunicações</td>
                    </tr>
                    <tr className="border-t border-[var(--bookim-border)]">
                      <td className="px-4 py-3 font-medium">Email</td>
                      <td className="px-4 py-3 text-[var(--bookim-text-secondary)]">Você informa no formulário</td>
                      <td className="px-4 py-3 text-[var(--bookim-text-secondary)]">Aviso de lançamento e confirmação</td>
                    </tr>
                    <tr className="border-t border-[var(--bookim-border)]">
                      <td className="px-4 py-3 font-medium">WhatsApp</td>
                      <td className="px-4 py-3 text-[var(--bookim-text-secondary)]">Você informa no formulário</td>
                      <td className="px-4 py-3 text-[var(--bookim-text-secondary)]">Aviso de lançamento (canal alternativo)</td>
                    </tr>
                    <tr className="border-t border-[var(--bookim-border)]">
                      <td className="px-4 py-3 font-medium">Área de estudo</td>
                      <td className="px-4 py-3 text-[var(--bookim-text-secondary)]">Você informa no formulário</td>
                      <td className="px-4 py-3 text-[var(--bookim-text-secondary)]">Adequar conteúdo (medicina/odonto/outro)</td>
                    </tr>
                    <tr className="border-t border-[var(--bookim-border)]">
                      <td className="px-4 py-3 font-medium">Endereço IP</td>
                      <td className="px-4 py-3 text-[var(--bookim-text-secondary)]">Coletado automaticamente no envio</td>
                      <td className="px-4 py-3 text-[var(--bookim-text-secondary)]">Anti-fraude e segurança (Marco Civil)</td>
                    </tr>
                    <tr className="border-t border-[var(--bookim-border)]">
                      <td className="px-4 py-3 font-medium">Parâmetros UTM</td>
                      <td className="px-4 py-3 text-[var(--bookim-text-secondary)]">Coletados da URL de origem</td>
                      <td className="px-4 py-3 text-[var(--bookim-text-secondary)]">Saber quais canais funcionam</td>
                    </tr>
                    <tr className="border-t border-[var(--bookim-border)]">
                      <td className="px-4 py-3 font-medium">Consentimento LGPD</td>
                      <td className="px-4 py-3 text-[var(--bookim-text-secondary)]">Você marca a caixa no formulário</td>
                      <td className="px-4 py-3 text-[var(--bookim-text-secondary)]">Prova do consentimento (art. 8º, §2º)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-sm">
                <strong>Não coletamos</strong> dados sensíveis (origem racial, convicção religiosa,
                opinião política, saúde, biometria etc.) nem dados de crianças.
              </p>
            </section>

            {/* 4. Finalidades */}
            <section id="finalidades" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                4. Para que usamos seus dados
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Comunicar você sobre o lançamento</strong> do aplicativo Bookim, novidades
                  relacionadas ao produto e oferta de fundador (preço congelado para os 1.000
                  primeiros).
                </li>
                <li>
                  <strong>Personalizar a comunicação</strong> com base na sua área de estudo
                  (medicina, odontologia ou outro), para você receber conteúdo relevante.
                </li>
                <li>
                  <strong>Prevenir fraudes, abuso e spam</strong> na inscrição (uso do IP e
                  detecção de duplicatas).
                </li>
                <li>
                  <strong>Mensurar quais canais</strong> (Instagram, indicação, busca etc.) trazem
                  novos inscritos, para investir melhor em divulgação (UTMs).
                </li>
                <li>
                  <strong>Cumprir obrigações legais</strong> (LGPD, Marco Civil da Internet) e
                  exercer direitos em processos administrativos ou judiciais.
                </li>
              </ul>
            </section>

            {/* 5. Base legal */}
            <section id="base-legal" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                5. Base legal do tratamento
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Consentimento</strong> (art. 7º, I LGPD): você marca a caixa
                  &quot;Concordo com o tratamento dos meus dados&quot; no formulário. Esse consentimento é
                  livre, informado e inequívoco, e pode ser revogado a qualquer momento (seção 10).
                </li>
                <li>
                  <strong>Cumprimento de obrigação legal</strong> (art. 7º, II LGPD): retenção
                  mínima de logs (IP, data/hora) por 6 meses, conforme o art. 15 do Marco Civil da
                  Internet (Lei nº 12.965/2014).
                </li>
                <li>
                  <strong>Legítimo interesse</strong> (art. 7º, IX LGPD): uso do IP para prevenção
                  de fraude e abuso na inscrição, sempre observados seus direitos e expectativas.
                </li>
              </ul>
            </section>

            {/* 6. Compartilhamento */}
            <section id="compartilhamento" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                6. Com quem compartilhamos seus dados
              </h2>
              <p className="mb-4">
                <strong>Nunca vendemos seus dados.</strong> Compartilhamos somente com prestadores
                de serviço (operadores, art. 5º, VII LGPD) estritamente necessários para o
                funcionamento do produto:
              </p>
              <div className="space-y-3">
                <div className="rounded-xl border border-[var(--bookim-border)] bg-white p-4">
                  <div className="font-semibold text-[var(--bookim-text-primary)]">
                    Supabase Inc.
                  </div>
                  <div className="text-sm">
                    Armazenamento do banco de dados (PostgreSQL gerenciado). Recebe todos os dados
                    coletados no formulário.
                  </div>
                  <a
                    href="https://supabase.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--bookim-primary)] hover:underline"
                  >
                    Política de privacidade do Supabase →
                  </a>
                </div>
                <div className="rounded-xl border border-[var(--bookim-border)] bg-white p-4">
                  <div className="font-semibold text-[var(--bookim-text-primary)]">
                    Resend (Drift Email Inc.)
                  </div>
                  <div className="text-sm">
                    Envio do email transacional de confirmação da inscrição. Recebe nome e email.
                  </div>
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--bookim-primary)] hover:underline"
                  >
                    Política de privacidade da Resend →
                  </a>
                </div>
                <div className="rounded-xl border border-[var(--bookim-border)] bg-white p-4">
                  <div className="font-semibold text-[var(--bookim-text-primary)]">
                    Vercel Inc.
                  </div>
                  <div className="text-sm">
                    Hospedagem do site e medição agregada de audiência (Vercel Analytics — sem
                    cookies, sem identificação individual). Recebe métricas técnicas anônimas como
                    país, navegador, dispositivo e URL acessada.
                  </div>
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--bookim-primary)] hover:underline"
                  >
                    Política de privacidade da Vercel →
                  </a>
                </div>
              </div>
              <p className="mt-4 text-sm">
                Esses operadores estão contratualmente obrigados a tratar seus dados apenas conforme
                nossas instruções e em conformidade com a LGPD.
              </p>
            </section>

            {/* 7. Transferência internacional */}
            <section id="transferencia" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                7. Transferência internacional de dados
              </h2>
              <p>
                Os operadores citados na seção 6 (Supabase, Resend e Vercel) mantêm servidores nos{" "}
                <strong>Estados Unidos da América</strong>. Isso configura transferência
                internacional de dados pessoais, autorizada pelo art. 33 da LGPD com base em
                cláusulas contratuais específicas que asseguram nível de proteção equivalente ao
                exigido no Brasil. Se você não concordar com essa transferência, infelizmente não
                podemos processar sua inscrição na lista de espera no momento.
              </p>
            </section>

            {/* 8. Retenção */}
            <section id="retencao" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                8. Por quanto tempo guardamos seus dados
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Dados da lista de espera</strong> (nome, email, WhatsApp, área): até{" "}
                  <strong>12 meses</strong> após o lançamento oficial do Bookim ou até você pedir a
                  remoção, o que ocorrer primeiro.
                </li>
                <li>
                  <strong>Logs de acesso (IP, data/hora)</strong>: <strong>6 meses</strong>,
                  conforme art. 15 do Marco Civil da Internet.
                </li>
                <li>
                  <strong>Prova de consentimento</strong>: enquanto necessário para defesa em
                  eventual processo administrativo ou judicial, conforme prazos prescricionais
                  aplicáveis.
                </li>
              </ul>
              <p className="mt-4">
                Após esses prazos, os dados são <strong>anonimizados ou eliminados</strong> de forma
                segura e irreversível.
              </p>
            </section>

            {/* 9. Cookies */}
            <section id="cookies" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                9. Cookies e tecnologias similares
              </h2>
              <p className="mb-4">
                <strong>O site público do Bookim não utiliza cookies de rastreamento publicitário
                nem identificadores individuais para fins de marketing.</strong>
              </p>
              <p className="mb-4">
                Utilizamos apenas:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Vercel Analytics (sem cookies)</strong>: nossa plataforma de hospedagem
                  (Vercel) coleta métricas <strong>agregadas e anônimas</strong> de audiência
                  (páginas visitadas, país, navegador, dispositivo, origem do tráfego), sem usar
                  cookies e sem armazenar identificadores que permitam reconhecer um visitante
                  específico. Por ser cookieless e não rastrear indivíduos, esse tratamento se
                  enquadra como{" "}
                  <strong>legítimo interesse</strong> (art. 7º, IX da LGPD) e dispensa
                  consentimento prévio. Mais detalhes na{" "}
                  <a
                    href="https://vercel.com/docs/analytics/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--bookim-primary)] hover:underline"
                  >
                    documentação de privacidade do Vercel Analytics
                  </a>
                  .
                </li>
                <li>
                  <strong>Cookies estritamente necessários (admin)</strong>: cookie HTTP-only de
                  sessão usado apenas no painel administrativo interno (`/admin`), invisível para
                  visitantes da landing page. É essencial para autenticação e dispensa consentimento
                  conforme entendimento da ANPD.
                </li>
              </ul>
              <p>
                Caso passemos a usar ferramentas adicionais que envolvam cookies não-essenciais ou
                rastreamento individual (como Google Analytics 4, Meta Pixel, ou similares),{" "}
                <strong>exibiremos um banner de consentimento ativo</strong> antes de qualquer
                disparo, permitindo aceitar, recusar ou personalizar cada categoria. Esta política
                será atualizada com a descrição detalhada de cada novo cookie, sua finalidade e
                prazo de vida.
              </p>
            </section>

            {/* 10. Direitos */}
            <section id="direitos" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                10. Seus direitos como titular (art. 18 LGPD)
              </h2>
              <p className="mb-4">A qualquer momento, você pode exercer os seguintes direitos:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Confirmação</strong> da existência de tratamento dos seus dados;</li>
                <li><strong>Acesso</strong> aos dados que armazenamos sobre você;</li>
                <li><strong>Correção</strong> de dados incompletos, inexatos ou desatualizados;</li>
                <li>
                  <strong>Anonimização, bloqueio ou eliminação</strong> de dados desnecessários,
                  excessivos ou tratados em desconformidade com a LGPD;
                </li>
                <li>
                  <strong>Portabilidade</strong> dos dados a outro fornecedor de serviço, em
                  formato estruturado e legível por máquina (CSV ou JSON);
                </li>
                <li><strong>Eliminação</strong> dos dados tratados com base em consentimento;</li>
                <li>
                  <strong>Informação</strong> sobre as entidades públicas e privadas com as quais
                  compartilhamos seus dados;
                </li>
                <li>
                  <strong>Informação</strong> sobre a possibilidade de não fornecer consentimento e
                  sobre as consequências da negativa;
                </li>
                <li><strong>Revogação do consentimento</strong> a qualquer momento.</li>
              </ul>
            </section>

            {/* 11. Como exercer */}
            <section id="exercer" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                11. Como exercer seus direitos
              </h2>
              <p>
                Envie um email para{" "}
                <a className="text-[var(--bookim-primary)] hover:underline" href={`mailto:${DPO_EMAIL}`}>
                  {DPO_EMAIL}
                </a>{" "}
                informando: (i) qual direito você quer exercer; (ii) o email usado na inscrição. Por
                segurança, podemos pedir confirmação adicional da identidade antes de executar o
                pedido. Responderemos em até{" "}
                <strong>15 dias úteis</strong>, conforme art. 19 da LGPD.
              </p>
              <p className="mt-4">
                Caso considere que sua solicitação não foi devidamente atendida, você pode também
                apresentar reclamação à <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong>{" "}
                pelo site{" "}
                <a
                  href="https://www.gov.br/anpd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--bookim-primary)] hover:underline"
                >
                  www.gov.br/anpd
                </a>
                .
              </p>
            </section>

            {/* 12. Segurança */}
            <section id="seguranca" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                12. Como protegemos seus dados
              </h2>
              <p className="mb-4">
                Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos
                não autorizados, perda, alteração, divulgação ou destruição indevida:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Criptografia em trânsito</strong> (HTTPS/TLS) em todas as comunicações
                  entre seu navegador e nossos servidores;
                </li>
                <li>
                  <strong>Criptografia em repouso</strong> no banco de dados, providenciada pelo
                  Supabase;
                </li>
                <li>
                  <strong>Controle de acesso</strong> à área administrativa por senha forte armazenada
                  com hash criptográfico (bcrypt) e sessão expirável por cookie HTTP-only;
                </li>
                <li>
                  <strong>Princípio do menor privilégio</strong>: apenas pessoas estritamente
                  necessárias acessam os dados;
                </li>
                <li>
                  <strong>Registro de auditoria</strong> de acessos administrativos (data, hora, IP).
                </li>
              </ul>
              <p className="mt-4 text-sm">
                Em caso de incidente de segurança envolvendo dados pessoais, comunicaremos a ANPD e
                os titulares afetados em prazo razoável, conforme art. 48 da LGPD.
              </p>
            </section>

            {/* 13. Menores */}
            <section id="menores" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                13. Crianças e adolescentes
              </h2>
              <p>
                O Bookim é direcionado a <strong>estudantes maiores de 18 anos</strong> dos cursos
                de medicina, odontologia e áreas afins. Não coletamos intencionalmente dados de
                menores de 18 anos. Se tomarmos conhecimento de que um menor se inscreveu sem
                consentimento dos responsáveis, eliminaremos os dados imediatamente. Pais ou
                responsáveis que identificarem esse tipo de situação devem entrar em contato com{" "}
                {DPO_EMAIL}.
              </p>
            </section>

            {/* 14. Alterações */}
            <section id="alteracoes" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                14. Alterações desta política
              </h2>
              <p>
                Esta política pode ser atualizada periodicamente para refletir mudanças em nosso
                serviço, na legislação ou nas práticas de proteção de dados. A versão vigente
                sempre estará disponível nesta URL, com a data da última atualização no topo. Em
                caso de <strong>mudanças materiais</strong> (por exemplo, novas finalidades ou novos
                operadores que tratem seus dados), enviaremos um aviso por email aos titulares
                inscritos com antecedência razoável.
              </p>
            </section>

            {/* 15. Lei e foro */}
            <section id="lei-foro" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                15. Lei aplicável e foro
              </h2>
              <p>
                Esta política é regida pelas leis da <strong>República Federativa do Brasil</strong>,
                em especial pela Lei nº 13.709/2018 (LGPD), Lei nº 12.965/2014 (Marco Civil da
                Internet) e demais normas aplicáveis. Fica eleito o foro da Comarca de{" "}
                <strong>Sumaré/SP</strong>, sede do controlador, para dirimir quaisquer questões
                relacionadas a esta política, com renúncia a qualquer outro, por mais privilegiado
                que seja.
              </p>
            </section>

            {/* 16. Contato */}
            <section id="contato" className="scroll-mt-28">
              <h2 className="text-2xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-4">
                16. Como nos contatar
              </h2>
              <p className="mb-4">
                Dúvidas, solicitações ou reclamações relacionadas a esta política ou ao tratamento
                dos seus dados podem ser enviadas para o Encarregado:
              </p>
              <div className="rounded-2xl border border-[var(--bookim-border)] bg-white p-5">
                <a
                  href={`mailto:${DPO_EMAIL}`}
                  className="inline-flex items-center gap-2 text-[var(--bookim-primary)] font-semibold hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  {DPO_EMAIL}
                </a>
                <p className="text-sm text-[var(--bookim-text-secondary)] mt-2">
                  Resposta em até 15 dias úteis.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-28 pt-6 border-t border-[var(--bookim-border)]">
              <h2 className="text-2xl md:text-3xl font-bold font-outfit text-[var(--bookim-text-primary)] mb-2">
                Perguntas frequentes
              </h2>
              <p className="mb-6 text-sm">
                Respostas diretas às dúvidas que mais recebemos sobre privacidade e tratamento de
                dados.
              </p>
              <Accordion items={faqItems} />
            </section>

            {/* CTA / volta para o site */}
            <section className="pt-6 border-t border-[var(--bookim-border)]">
              <p className="text-sm">
                Pronto para começar?{" "}
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
