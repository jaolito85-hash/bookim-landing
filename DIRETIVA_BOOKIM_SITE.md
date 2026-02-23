# Diretiva: Site Institucional Bookim
> App de estudos com IA para estudantes de medicina
> Nível de referência: Apple.com, Linear.app, Notion.so, Arc.net

---

## 🎯 Objetivo

Criar um site institucional/landing page premium para o **Bookim** — um app de estudos potencializado por IA, feito para estudantes de medicina. O site precisa transmitir **sofisticação tecnológica**, **confiança acadêmica** e **inovação silenciosa** (a IA trabalha por você, sem parecer robótica).

O visitante deve sentir: *"Isso foi feito por gente que entende medicina E tecnologia."*

---

## 🧠 Posicionamento de Marca

### Tom de Voz
- **Confiante sem ser arrogante** — "Nós sabemos como seu cérebro aprende melhor"
- **Científico sem ser frio** — usa linguagem de neurociência de forma acessível
- **Direto e enxuto** — cada palavra tem peso, zero enrolação
- **Aspiracional** — o estudante se vê passando na prova, se vê no jaleco

### Headline Principal (Hero)
Opções estratégicas (escolher ou testar A/B):

**Opção A — Foco em resultado:**
> "Domine mais conteúdo. Retenha por mais tempo."

**Opção B — Foco em método:**
> "Seu cérebro aprende com ciência. Seu app também deveria."

**Opção C — Foco em dor:**
> "Pare de reler. Comece a reter."

### Subheadline
> "O Bookim usa inteligência artificial e repetição espaçada para transformar qualquer material em conhecimento permanente — da foto da apostila ao flashcard inteligente."

### ⚠️ Posicionamento Importante
**NÃO usar:** "Estude menos" — estudantes de medicina estudam 8-14h/dia. Dizer "estude menos" desrespeita a realidade deles e soa como preguiça.

**USAR:** "Estude com mais inteligência", "Aproveite cada minuto", "Retenha o que estuda", "Seu esforço finalmente rende o que deveria"

---

## 🏗️ Estrutura de Seções (Scroll Sequencial)

O site é uma página única com scroll suave entre seções. Cada seção ocupa ~100vh no desktop.

### SEÇÃO 1 — Hero (Above the fold)

**Elementos:**
- Logo Bookim (canto superior esquerdo)
- Navegação minimalista: Recursos | Como Funciona | Preços | Blog (futuro)
- Headline grande (72-96px desktop, 36-48px mobile)
- Subheadline (20-24px, max 2 linhas)
- CTA principal: botão "Baixar na App Store" / "Entrar na lista de espera" (dependendo do estágio)
- CTA secundário: "Veja como funciona ↓" (scroll suave)
- Mockup do app flutuando — iPhone 15 Pro com tela do Bookim, com sombra suave e leve rotação 3D
- Background: gradiente escuro sutil (não preto puro) com partículas ou grid de pontos muito sutis

**Animações:**
- Headline entra com fade-up (600ms, ease-out)
- Mockup entra com fade-up + leve parallax (atraso de 200ms)
- CTAs entram com fade-up (atraso de 400ms)
- Partículas de fundo se movem lentamente (parallax com mouse)

**Referência visual:** Hero do Linear.app ou Raycast.com

---

### SEÇÃO 2 — Logotipos / Social Proof Rápido

**Elementos:**
- Faixa horizontal com texto: "Usado por estudantes de medicina em todo o Brasil"
- Logos de universidades (ou genéricos estilizados se não tiver parceria)
- Ou métricas: "5.000+ flashcards criados" | "92% de retenção" | "4.9 ★ na App Store"
- Scroll infinito horizontal suave (marquee)

**Estilo:** Fundo levemente diferente (1-2 tons), logos em cinza/monocromático, opacity 50-70%

**Referência:** Seção de logos do Vercel.com ou Stripe.com

---

### SEÇÃO 3 — O Problema (Empatia)

**Objetivo:** Criar identificação emocional antes de mostrar a solução.

**Headline da seção:**
> "Você já releu a mesma página 5 vezes e não lembrou nada?"

**Conteúdo:** 3 cards/blocos lado a lado (desktop) ou empilhados (mobile):

| Card | Ícone | Título | Descrição |
|------|-------|--------|-----------|
| 1 | 📚 | "Reler não é estudar" | "A leitura passiva dá a ilusão de aprendizado. Seu cérebro precisa ser desafiado, não entediado." |
| 2 | ⏰ | "Tempo desperdiçado" | "Sem método, você gasta horas no que poderia levar minutos. E ainda esquece em 48h." |
| 3 | 😰 | "A prova chega e o branco vem" | "Você estudou, mas na hora H nada vem. Não é falta de esforço — é falta de método." |

**Animações:**
- Cards entram com stagger (um por um, 150ms de delay entre eles)
- Intersection Observer — só anima quando visível
- Leve hover lift nos cards (translateY -4px + sombra)

**Referência:** Seção de problemas do Notion.so ou Pitch.com

---

### SEÇÃO 4 — A Solução (Features Principais)

**Headline da seção:**
> "Bookim transforma qualquer material em conhecimento que fica."

**Layout:** Feature showcase com 3-4 features, cada uma com mockup do app + texto ao lado. Alterna esquerda/direita (zig-zag).

#### Feature 1: Foto → Texto → Flashcard
- **Título:** "Fotografou, aprendeu."
- **Descrição:** "Tire uma foto da apostila, slide ou caderno. A IA do Bookim extrai o texto, organiza e cria flashcards inteligentes automaticamente."
- **Visual:** Animação mostrando foto → texto extraído → flashcard gerado (pode ser sequência de mockups ou animação Lottie)
- **Badge:** "Powered by AI"

#### Feature 2: Repetição Espaçada Inteligente
- **Título:** "Revise na hora certa. Nem antes, nem depois."
- **Descrição:** "Baseado no algoritmo SM-2 e otimizado com IA, o Bookim calcula exatamente quando você vai esquecer cada card — e te avisa antes que isso aconteça."
- **Visual:** Gráfico estilizado da curva de esquecimento com pontos de revisão marcados
- **Badge:** "Baseado em neurociência"

#### Feature 3: Organização Inteligente
- **Título:** "Tudo organizado. Sem esforço."
- **Descrição:** "A IA categoriza automaticamente seus flashcards por matéria, sistema e tema. Você foca em estudar — o Bookim organiza."
- **Visual:** Mockup mostrando categorias/pastas organizadas
- **Badge:** "Auto-organização"

#### Feature 4: Métricas de Estudo
- **Título:** "Saiba exatamente onde você está."
- **Descrição:** "Dashboard pessoal mostra seu progresso real: o que você domina, o que precisa revisar, e quanto tempo dedicou. Dados, não achismos."
- **Visual:** Mockup do dashboard com gráficos
- **Badge:** "Analytics pessoal"

**Animações por feature:**
- Texto entra por fade-left ou fade-right (dependendo do lado)
- Mockup entra pelo lado oposto
- Trigger por Intersection Observer
- Parallax sutil no scroll entre texto e imagem

**Referência:** Seção de features do Arc.net ou Cron.com

---

### SEÇÃO 5 — Como Funciona (3 Passos)

**Headline:**
> "Simples assim."

**Layout:** Timeline horizontal (desktop) / vertical (mobile) com 3 passos.

| Passo | Número | Título | Descrição | Ícone/Visual |
|-------|--------|--------|-----------|--------------|
| 1 | 01 | "Capture" | "Fotografe qualquer material de estudo — apostila, slide, caderno, PDF." | Ícone de câmera + miniatura de foto |
| 2 | 02 | "Processe" | "A IA extrai, organiza e transforma em flashcards com perguntas e respostas." | Ícone de IA processando + miniatura de flashcard |
| 3 | 03 | "Domine" | "Estude com repetição espaçada e veja seu conhecimento crescer dia após dia." | Ícone de gráfico subindo + miniatura de dashboard |

**Animações:**
- Números grandes (120px+) com gradiente
- Linha conectora animada que desenha conforme scroll
- Cada passo ativa ao entrar na viewport
- Microinteração: ícone pulsa ao ativar

**Referência:** Seção "How it works" do Loom.com ou Figma.com

---

### SEÇÃO 6 — Depoimentos / Social Proof

**Headline:**
> "Quem usa, aprova."

**Layout:** Grid de cards de depoimentos (3 colunas desktop, carousel mobile) ou layout estilo Masonry.

**Estrutura de cada depoimento:**
```
"O Bookim mudou minha rotina de estudos. Antes eu revia tudo toda semana, 
agora só reviso o que o app manda — e retenho muito mais."

— Maria Clara, 6º período, UFMG
   ★★★★★
```

**Se ainda não tiver depoimentos reais:**
- Usar placeholder estilizado com nota: "Beta fechado — depoimentos em breve"
- Ou usar métricas: "92% dos beta testers melhoraram a retenção em 30 dias"

**Animações:**
- Cards entram com stagger
- Hover eleva o card levemente
- Carousel mobile com swipe nativo

**Referência:** Depoimentos do Notion.so ou Superhuman.com

---

### SEÇÃO 7 — Comparativo (Por que Bookim?)

**Headline:**
> "Não é só mais um app de flashcard."

**Layout:** Tabela comparativa clean e moderna.

| Recurso | Apps tradicionais | Bookim |
|---------|------------------|--------|
| Criar flashcards | Manual, um por um ✍️ | Automático por foto/IA ⚡ |
| Repetição espaçada | Básica ou inexistente | SM-2 otimizado com IA 🧠 |
| Organização | Manual, por pastas | Auto-categorização por IA 🗂️ |
| Extração de texto | Não tem | OCR + IA integrados 📸 |
| Métricas de estudo | Limitadas | Dashboard completo 📊 |
| Feito para medicina | Genérico | Especializado 🩺 |

**Estilo:**
- Coluna "Bookim" destacada com fundo gradiente sutil
- Checkmarks e X com cores (verde/vermelho suave)
- Animação: tabela entra com fade-up, linhas preenchem com stagger

**Referência:** Comparativo do Monday.com ou ClickUp

---

### SEÇÃO 8 — Pricing (se aplicável)

**Headline:**
> "Invista no que realmente funciona."

**Layout:** 2-3 cards de plano lado a lado.

| | Grátis | Pro | Pro Anual |
|---|--------|-----|-----------|
| Preço | R$ 0 | R$ 29,90/mês | R$ 19,90/mês (cobrado anual) |
| Flashcards | Até 100 | Ilimitados | Ilimitados |
| Fotos/mês | 10 | Ilimitadas | Ilimitadas |
| IA avançada | ❌ | ✅ | ✅ |
| Métricas | Básicas | Completas | Completas |
| Suporte | Comunidade | Prioritário | Prioritário |

**Card "Pro" destacado:** borda gradiente, badge "Mais popular", leve scale(1.05)

**CTA de cada card:**
- Grátis: "Começar grátis"
- Pro: "Assinar Pro"
- Anual: "Economize 33%"

**Nota de rodapé:** "Cancele quando quiser. Sem surpresas."

**Animações:**
- Cards entram com stagger
- Card Pro tem hover com glow sutil
- Toggle mensal/anual com animação suave

**Referência:** Pricing do Notion, Linear ou Raycast

---

### SEÇÃO 9 — FAQ

**Headline:**
> "Perguntas frequentes"

**Layout:** Accordion elegante, uma pergunta por vez aberta.

**Perguntas sugeridas:**
1. "O Bookim funciona para outras áreas além de medicina?" → "Nosso foco é medicina, mas a tecnologia funciona para qualquer conteúdo de estudo."
2. "Preciso de internet para usar?" → "Seus flashcards ficam salvos offline. A criação por foto precisa de conexão."
3. "Como funciona a repetição espaçada?" → Explicação simples do SM-2.
4. "Meus dados são seguros?" → "Criptografia end-to-end. Seus estudos são só seus."
5. "Posso importar flashcards de outros apps?" → "Sim, suportamos importação de Anki e CSV."
6. "Tem versão para Android?" → Resposta conforme realidade.

**Animação:** Accordion com height transition suave (300ms), ícone "+" rotaciona para "×"

**Referência:** FAQ do Stripe.com ou Linear.app

---

### SEÇÃO 10 — CTA Final (Conversão)

**Layout:** Seção full-width com fundo escuro/gradiente, centrada.

**Headline grande:**
> "Seu próximo nível de estudo começa aqui."

**Subheadline:**
> "Junte-se a milhares de estudantes que já mudaram a forma de estudar."

**CTA:** Botão grande e luminoso — "Baixar agora" ou "Entrar na lista de espera"

**Elementos extras:**
- Avaliação: ★★★★★ 4.9 (500+ avaliações)
- Badges: App Store / Google Play
- Mockup pequeno do app ao lado

**Animações:**
- Background com gradiente animado (lento, sutil)
- CTA com hover glow/pulse
- Counters animados (números subindo)

**Referência:** CTA final do Superhuman ou Arc.net

---

### SEÇÃO 11 — Footer

**Layout:** 4 colunas (desktop), empilhado (mobile).

| Coluna 1 | Coluna 2 | Coluna 3 | Coluna 4 |
|-----------|----------|----------|----------|
| **Bookim** | **Produto** | **Empresa** | **Legal** |
| Logo | Recursos | Sobre nós | Termos de Uso |
| Tagline curta | Preços | Blog (futuro) | Privacidade |
| Redes sociais | Download | Contato | Cookies |
| | Changelog | Carreiras (futuro) | |

**Elementos:**
- Copyright: © 2025 Bookim. Todos os direitos reservados.
- Links de redes sociais: Instagram, Twitter/X, LinkedIn
- Newsletter opt-in (campo de email + botão "Inscrever")

**Estilo:** Fundo mais escuro que o body, tipografia menor, espaçamento generoso

---

## 🎨 Design System

### Paleta de Cores

```
/* Cores principais */
--bookim-primary:      #6C5CE7;    /* Roxo vibrante — inteligência, inovação */
--bookim-primary-light: #A29BFE;   /* Roxo claro — hovers, acentos */
--bookim-primary-dark:  #4834D4;   /* Roxo escuro — CTAs, destaques */

/* Cores secundárias */
--bookim-accent:       #00D2D3;    /* Ciano/Teal — ciência, tecnologia */
--bookim-accent-light: #7EFFF5;    /* Ciano claro — badges, tags */

/* Cores de feedback */
--bookim-success:      #00B894;    /* Verde — acertos, progresso */
--bookim-warning:      #FDCB6E;    /* Amarelo — atenção, revisão */
--bookim-danger:       #FF6B6B;    /* Vermelho — erros, urgência */

/* Neutros (Dark Theme) */
--bookim-bg-primary:   #0A0A0F;    /* Fundo principal — quase preto com toque azul */
--bookim-bg-secondary: #12121A;    /* Fundo de cards/seções */
--bookim-bg-tertiary:  #1A1A2E;    /* Fundo elevado (hovers, modais) */
--bookim-border:       #2D2D3F;    /* Bordas sutis */
--bookim-text-primary: #F8F8FF;    /* Texto principal — branco com toque lavanda */
--bookim-text-secondary: #A0A0B8;  /* Texto secundário */
--bookim-text-muted:   #6C6C80;    /* Texto terciário, placeholders */

/* Gradientes */
--bookim-gradient-hero: linear-gradient(135deg, #6C5CE7 0%, #00D2D3 100%);
--bookim-gradient-cta:  linear-gradient(135deg, #4834D4 0%, #6C5CE7 100%);
--bookim-gradient-card: linear-gradient(180deg, #12121A 0%, #1A1A2E 100%);
```

### Por que Dark Theme?
1. Estudantes estudam à noite — dark é mais confortável
2. Transmite tecnologia e sofisticação (Linear, Vercel, Arc)
3. Contraste com apps de estudo tradicionais (quase todos são light/brancos)
4. Roxo + ciano brilham mais em fundo escuro

### Light Mode (Opcional — Toggle)
```
--bookim-bg-primary:   #FAFAFE;
--bookim-bg-secondary: #FFFFFF;
--bookim-bg-tertiary:  #F0F0F5;
--bookim-border:       #E0E0EA;
--bookim-text-primary: #1A1A2E;
--bookim-text-secondary: #6C6C80;
```

---

### Tipografia

```
/* Font stack */
--font-display: 'SF Pro Display', 'Inter', -apple-system, sans-serif;
--font-body:    'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono:    'JetBrains Mono', 'SF Mono', monospace;

/* Escala tipográfica (desktop → mobile) */
Hero H1:        96px / 80px → 48px / 44px    (weight: 700, letter-spacing: -0.03em)
Seção H2:       56px / 64px → 32px / 38px    (weight: 700, letter-spacing: -0.02em)
Feature H3:     36px / 44px → 24px / 30px    (weight: 600, letter-spacing: -0.01em)
Subheadline:    24px / 34px → 18px / 26px    (weight: 400, letter-spacing: -0.01em)
Body:           18px / 28px → 16px / 26px    (weight: 400)
Caption:        14px / 20px → 13px / 18px    (weight: 400)
Badge:          12px / 16px                    (weight: 600, letter-spacing: 0.05em, uppercase)
```

**Regras tipográficas:**
- Headlines nunca em regular — sempre semibold (600) ou bold (700)
- Letter-spacing negativo em títulos grandes (mais apertado = mais premium)
- Line-height generoso no body (1.6-1.7x)
- Máximo 65-75 caracteres por linha no body text

---

### Espaçamento

```
/* Sistema de 8px */
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  24px;
--space-6:  32px;
--space-7:  48px;
--space-8:  64px;
--space-9:  96px;
--space-10: 128px;
--space-11: 192px;

/* Seções */
Padding vertical entre seções: 128px (desktop) / 80px (mobile)
Container max-width: 1200px
Container padding horizontal: 24px (mobile) / 48px (tablet) / 0 (desktop com max-width)
```

---

### Bordas e Sombras

```
/* Border radius */
--radius-sm:   8px;    /* Badges, inputs pequenos */
--radius-md:   12px;   /* Cards, botões */
--radius-lg:   16px;   /* Cards maiores, modais */
--radius-xl:   24px;   /* Cards hero, pricing */
--radius-full: 9999px; /* Pills, avatares */

/* Sombras (dark theme — sombras são mais sutis) */
--shadow-sm:   0 1px 2px rgba(0,0,0,0.3);
--shadow-md:   0 4px 12px rgba(0,0,0,0.4);
--shadow-lg:   0 8px 32px rgba(0,0,0,0.5);
--shadow-glow: 0 0 40px rgba(108,92,231,0.15);  /* Glow roxo para destaques */

/* Bordas */
Bordas padrão: 1px solid var(--bookim-border)
Bordas hover: 1px solid var(--bookim-primary) com transition 200ms
```

---

### Componentes UI

#### Botão Primário
```
Background: var(--bookim-gradient-cta)
Color: white
Padding: 16px 32px
Border-radius: 12px
Font: 16px, weight 600
Hover: brightness(1.1) + shadow-glow + translateY(-1px)
Active: brightness(0.95) + translateY(0)
Transition: all 200ms ease
```

#### Botão Secundário
```
Background: transparent
Border: 1px solid var(--bookim-border)
Color: var(--bookim-text-primary)
Hover: border-color var(--bookim-primary), background rgba(108,92,231,0.05)
```

#### Card
```
Background: var(--bookim-bg-secondary)
Border: 1px solid var(--bookim-border)
Border-radius: 16px
Padding: 32px
Hover: border-color var(--bookim-primary), shadow-glow
Transition: all 300ms ease
```

#### Badge
```
Background: rgba(108,92,231,0.15)
Color: var(--bookim-primary-light)
Padding: 6px 12px
Border-radius: 9999px
Font: 12px, weight 600, uppercase, letter-spacing 0.05em
```

#### Navbar
```
Position: fixed top
Background: rgba(10,10,15,0.8)
Backdrop-filter: blur(20px) saturate(180%)
Border-bottom: 1px solid rgba(255,255,255,0.05)
Height: 64px
Z-index: 50
```

---

## ⚡ Animações e Microinterações

### Princípios
1. **Suave e rápido** — nada acima de 600ms, maioria em 300ms
2. **Propositivo** — toda animação tem motivo (guiar olhar, dar feedback, criar profundidade)
3. **Performance** — usar transform e opacity apenas (GPU-accelerated)
4. **Respeitar preferências** — `prefers-reduced-motion: reduce` desliga animações

### Animações Obrigatórias
```
/* Fade Up — entrada padrão de elementos */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Fade In — entrada sutil */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Scale In — para modais e overlays */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}

/* Draw Line — para timeline */
@keyframes drawLine {
  from { stroke-dashoffset: 100%; }
  to   { stroke-dashoffset: 0; }
}

/* Gradient shift — para backgrounds animados */
@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Counter — para números subindo */
Usar JS com requestAnimationFrame + easing
```

### Biblioteca Recomendada
- **Framer Motion** (React) — para animações de componentes
- **GSAP ScrollTrigger** — para animações baseadas em scroll
- **Lottie** — para ilustrações animadas complexas

### Scroll Behavior
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Compensar navbar fixa */
}
```

---

## 📱 Responsividade

### Breakpoints
```
Mobile:       < 640px   (sm)
Tablet:       640-1024px (md)
Desktop:      1024-1280px (lg)
Wide:         > 1280px   (xl)
```

### Regras Mobile
- Navbar vira hamburger menu com slide-in
- Grid de 3 colunas → 1 coluna
- Features zig-zag → empilhado (imagem em cima, texto embaixo)
- Pricing cards → carousel horizontal com swipe
- Tipografia reduz ~40% (ver escala tipográfica)
- Padding horizontal mínimo: 24px
- Touch targets mínimos: 44x44px
- Sem hover effects (usar focus/active)
- Parallax desligado em mobile (performance)

### Regras Tablet
- Grid de 3 → 2 colunas
- Navbar pode manter links ou usar hamburger
- Mockups reduzem 20-30%

---

## 🔍 SEO e Meta Tags

### Meta Tags Essenciais
```html
<title>Bookim — Estude medicina com IA e retenha mais</title>
<meta name="description" content="App de estudos com inteligência artificial para estudantes de medicina. Transforme fotos em flashcards, estude com repetição espaçada e domine mais conteúdo.">
<meta name="keywords" content="app estudos medicina, flashcard IA, repetição espaçada, estudar medicina, bookim, flashcard inteligente, app medicina">
<link rel="canonical" href="https://bookim.com.br">
```

### Open Graph (Compartilhamento)
```html
<meta property="og:title" content="Bookim — Estude medicina com IA">
<meta property="og:description" content="Transforme fotos em flashcards inteligentes. Estude com repetição espaçada otimizada por IA.">
<meta property="og:image" content="https://bookim.com.br/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="https://bookim.com.br">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Bookim — Estude medicina com IA">
<meta name="twitter:description" content="Flashcards inteligentes + repetição espaçada + IA = retenção máxima.">
<meta name="twitter:image" content="https://bookim.com.br/og-image.png">
```

### OG Image
- Dimensão: 1200x630px
- Conteúdo: Logo + headline + mockup do app
- Fundo escuro com gradiente (consistente com o site)

### Schema.org (Structured Data)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Bookim",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "iOS, Android",
  "description": "App de estudos com IA para estudantes de medicina",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "500"
  }
}
```

### Extras SEO
- Sitemap.xml automático (Next.js)
- robots.txt permitindo indexação
- Favicon set completo (16, 32, 180, 192, 512)
- manifest.json para PWA
- Velocidade: Lighthouse > 95 em todas as métricas

---

## ⚙️ Stack Técnica

### Core
- **Next.js 14+** (App Router)
- **React 18+**
- **TypeScript** (strict mode)
- **Tailwind CSS** (com custom config para design system)

### Animações
- **Framer Motion** — animações de componente
- **GSAP + ScrollTrigger** — animações de scroll avançadas (opcional, se Framer Motion não bastar)

### Fontes
- **Inter** (Google Fonts / next/font) — body e headlines
- Fallback: system fonts

### Analytics
- **Google Analytics 4** ou **Plausible** (privacy-first)
- **Hotjar** ou **Microsoft Clarity** (heatmaps — opcional)

### Performance
- **next/image** para otimização de imagens
- **next/font** para fontes otimizadas
- Lazy loading em seções below the fold
- Preload de assets críticos (hero mockup, fonte)

### Deploy
- **Vercel** (recomendado) ou VPS com Docker

---

## 📁 Estrutura de Pastas

```
bookim-site/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Landing page principal
│   │   ├── layout.tsx                  # Layout global (fonts, meta, analytics)
│   │   ├── globals.css                 # Variáveis CSS, reset, animações base
│   │   └── not-found.tsx               # Página 404 customizada
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx              # Navegação fixa
│   │   │   ├── Footer.tsx              # Rodapé
│   │   │   └── Container.tsx           # Wrapper de largura máxima
│   │   │
│   │   ├── sections/                   # Seções da landing page
│   │   │   ├── Hero.tsx
│   │   │   ├── SocialProof.tsx         # Logos / métricas
│   │   │   ├── Problem.tsx             # Seção de dor
│   │   │   ├── Features.tsx            # Features principais
│   │   │   ├── HowItWorks.tsx          # 3 passos
│   │   │   ├── Testimonials.tsx        # Depoimentos
│   │   │   ├── Comparison.tsx          # Tabela comparativa
│   │   │   ├── Pricing.tsx             # Planos
│   │   │   ├── FAQ.tsx                 # Perguntas frequentes
│   │   │   └── CTA.tsx                 # CTA final
│   │   │
│   │   ├── ui/                         # Componentes base reutilizáveis
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── AnimatedCounter.tsx
│   │   │   ├── GradientText.tsx
│   │   │   ├── MockupPhone.tsx         # iPhone mockup reutilizável
│   │   │   └── ScrollReveal.tsx        # Wrapper de animação por scroll
│   │   │
│   │   └── icons/                      # Ícones SVG customizados
│   │       ├── BookimLogo.tsx
│   │       ├── CameraIcon.tsx
│   │       ├── BrainIcon.tsx
│   │       └── ChartIcon.tsx
│   │
│   ├── lib/
│   │   ├── animations.ts              # Variantes do Framer Motion
│   │   ├── constants.ts               # Textos, URLs, dados estáticos
│   │   └── utils.ts                   # cn(), formatters, helpers
│   │
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts  # Detectar visibilidade
│   │   ├── useScrollProgress.ts       # Progresso do scroll
│   │   └── useMediaQuery.ts           # Breakpoints em JS
│   │
│   └── types/
│       └── index.ts                   # TypeScript types
│
├── public/
│   ├── images/
│   │   ├── hero-mockup.png            # Mockup principal (iPhone)
│   │   ├── feature-1.png              # Screenshots das features
│   │   ├── feature-2.png
│   │   ├── feature-3.png
│   │   ├── feature-4.png
│   │   └── og-image.png               # Open Graph image 1200x630
│   │
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
│
├── directives/
│   └── DIRETIVA_BOOKIM_SITE.md        # Este arquivo
│
├── .env.local                          # Variáveis de ambiente
├── .env.example
├── next.config.js
├── tailwind.config.ts                  # Config com design system customizado
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Performance Targets

| Métrica | Target | Como atingir |
|---------|--------|-------------|
| Lighthouse Performance | > 95 | next/image, lazy loading, code splitting |
| Lighthouse Accessibility | > 95 | ARIA labels, contraste, semântica HTML |
| Lighthouse SEO | 100 | Meta tags, structured data, sitemap |
| First Contentful Paint | < 1.2s | Fontes preloaded, CSS inline crítico |
| Largest Contentful Paint | < 2.5s | Hero mockup otimizado, priority loading |
| Cumulative Layout Shift | < 0.1 | Dimensões explícitas em imagens/fonts |
| Time to Interactive | < 3.5s | Lazy hydration, dynamic imports |

---

## ✅ Checklist Final

### Antes do Deploy
- [ ] Todas as seções implementadas e responsivas
- [ ] Dark mode funcional (e light mode toggle se aplicável)
- [ ] Animações suaves e performáticas
- [ ] Todos os links funcionando (CTAs, nav, footer)
- [ ] Loading performático — Lighthouse > 95
- [ ] Meta tags e OG tags configuradas
- [ ] Favicon set completo
- [ ] robots.txt e sitemap.xml
- [ ] Schema.org structured data
- [ ] Analytics configurado
- [ ] Formulário de waitlist/newsletter funcional
- [ ] 404 page customizada
- [ ] Console limpo (sem erros/warnings)
- [ ] Testado em: Chrome, Safari, Firefox, Edge
- [ ] Testado em: iPhone, Android, iPad, Desktop
- [ ] prefers-reduced-motion respeitado
- [ ] Textos revisados (português correto, sem Lorem Ipsum)
- [ ] Imagens/mockups de alta qualidade inseridos
- [ ] Domínio configurado (bookim.com.br)
- [ ] SSL ativo
- [ ] Redirecionamento www → sem www (ou vice-versa)

### Pós-Deploy
- [ ] Testar OG image (compartilhar no WhatsApp/LinkedIn)
- [ ] Verificar Google Search Console
- [ ] Monitorar Core Web Vitals
- [ ] Configurar uptime monitoring
- [ ] Backup do código em repositório Git

---

## 📝 Notas para a IA

1. **Priorize visual sobre funcionalidade** — é um site institucional, não um app funcional
2. **Use dados mock bonitos** — métricas fictícias mas realistas enquanto não tiver dados reais
3. **Cada pixel importa** — alinhamentos, espaçamentos e proporções devem ser perfeitos
4. **Menos é mais** — se uma seção não está ficando premium, remova em vez de deixar medíocre
5. **Teste o scroll** — a experiência de rolar a página deve ser fluida e cinematográfica
6. **Consistência** — mesmo design system em todas as seções, sem mudar estilos aleatoriamente
7. **Placeholder para imagens** — use gradientes ou shapes estilizados onde não tiver mockup real
8. **Acessibilidade** — contraste, semântica HTML, ARIA labels — não é opcional

---

**Versão:** 1.0
**Criado para:** Projeto Bookim — Visualize+
**Última atualização:** Fevereiro 2025
