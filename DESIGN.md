---
name: Davy Cosmo — Portfólio
description: Cartaz de código neo-brutalista: blocos chapados, bordas de 3px, sombras duras e tipografia de pôster sobre papel sálvia.
colors:
  accent-lime: "#96d700"
  action-emerald: "#0ac481"
  ink: "#0a0f1c"
  paper: "#f1f3ec"
  sage: "#e5ead6"
  panel: "#e3e6dc"
  copy: "#2a3040"
  muted: "#3d4452"
  focus-blue: "#4079ff"
  white: "#ffffff"
typography:
  poster:
    fontFamily: "Big Shoulders Display, Schibsted Grotesk, sans-serif"
    fontSize: "clamp(56px, 6.8vw, 100px)"
    fontWeight: 900
    lineHeight: 0.94
    letterSpacing: "0em"
  headline:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.6vw, 64px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.33
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.625
  label:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.05em"
rounded:
  chip: "6px"
  tag: "8px"
  brut: "14px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  section: "104px"
components:
  button-cta:
    backgroundColor: "{colors.action-emerald}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.brut}"
    padding: "10px 18px"
    height: "44px"
  button-accent:
    backgroundColor: "{colors.accent-lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.brut}"
    padding: "0 18px"
    height: "54px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.brut}"
    size: "54px"
  button-paper:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.brut}"
    padding: "18px 26px"
  card-skill:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.brut}"
    padding: "26px"
  card-skill-inverse:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.brut}"
    padding: "26px"
  card-project:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.brut}"
    padding: "32px"
  chip-tech:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "4px 8px"
  tag-section:
    backgroundColor: "{colors.accent-lime}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "6px 12px"
---

# Design System: Davy Cosmo — Portfólio

## Overview

**Creative North Star: "O Cartaz de Código"**

O site é um pôster de desenvolvedor impresso em papel sálvia: títulos em caixa alta numa fonte condensada de cartaz (Big Shoulders Display), blocos chapados de cor recortados sem gradiente, bordas de tinta de 3px e sombras sólidas sem desfoque que fazem cada peça parecer um objeto físico. A voz de dev aparece nas etiquetas `<Projetos />`, no `git log` da seção de open source e na mono como assinatura. Nada é suave: a profundidade vem de deslocamento, não de luz.

A densidade é média e a leitura é rápida: uma ideia por seção, cartões grandes, pouco texto corrido. O ritmo alterna fundo claro (sálvia) e fundo escuro (ink) para marcar a passagem entre apresentação, provas e contato. O movimento é tátil e curto, e sempre respeita `prefers-reduced-motion`.

**Key Characteristics:**
- Bordas de 3px em ink e raio de 14px em tudo que é objeto (botões, cards, painéis).
- Sombras duras sem blur, em 4 cores possíveis (ink, lime, esmeralda, branco), que levantam no hover e afundam ao clicar.
- Tipografia de pôster (Big Shoulders Display) só no herói; o resto é Schibsted Grotesk, pesada nos títulos e regular no texto.
- Etiquetas em Martian Mono no formato `<Nome />`.
- Lime marca a identidade, esmeralda age.

## Colors

Paleta de papel e tinta com dois verdes de funções distintas: um lime elétrico que é a marca e um esmeralda que sinaliza ação e estado.

### Primary
- **Lime de Marca** (#96d700): a cor do logo. Realces de texto (marca-texto sobre "encantar"), botão CV, etiquetas de seção sobre fundo escuro e sombras duras dos cards em fundo ink.

### Secondary
- **Esmeralda de Ação** (#0ac481): botões de chamada (Fale comigo, setas de PR), selo "Aberto a freelas", status "No ar", barra de rolagem, filete sob o carrossel de ferramentas e sublinhado do e-mail.

### Tertiary
- **Azul de Foco** (#4079ff): usado apenas no anel de foco de teclado (3px, offset 3px). Nunca como cor decorativa.

### Neutral
- **Tinta** (#0a0f1c): texto, bordas, sombras duras e fundos escuros (Projetos, Contato, Ferramentas).
- **Papel** (#f1f3ec): texto sobre ink e fundo dos cards de projeto.
- **Sálvia** (#e5ead6): fundo da página e do cabeçalho.
- **Painel** (#e3e6dc): bloco de fundo atrás da foto no herói.
- **Cópia** (#2a3040): texto corrido sobre claro.
- **Apagado** (#3d4452): metadados e pontilhados decorativos.
- **Branco** (#ffffff): superfície de cards claros, chips e botões secundários.

Há também laranja (#ffaa40) e prata (#d3d3d3) declarados no tema, sem uso nas telas atuais.

### Named Rules
**A Regra Lime Marca, Esmeralda Age.** Lime é identidade (logo, realce, sombra de destaque). Esmeralda é função (clique, estado, status). Não troque um pelo outro e não use esmeralda como decoração.

**A Regra do Bloco Chapado.** Cor aparece em blocos sólidos e recortados (retângulos atrás da foto, tags, realces). Sem gradientes, sem transparência decorativa que não seja o ruído de fundo bem baixo (8–12%) em marcas gigantes.

## Typography

**Display Font:** Big Shoulders Display 900 (com Schibsted Grotesk) — somente o título do herói
**Heading + Body Font:** Schibsted Grotesk 400–900, um arquivo variável (com system-ui)
**Label/Mono Font:** Martian Mono 500/700, variável

**Character:** Pôster condensado de sinalização urbana no topo; abaixo, uma grotesca de jornal, robusta e com desenho próprio, que faz título e texto parecerem saídos da mesma gráfica. A mono larga, com cara de rotuladora, dá o sotaque de código nas etiquetas e metadados. Fontes escolhidas para fugir do trio Poppins/Montserrat/JetBrains, padrão de sites genéricos.

### Hierarchy
- **Poster** (Big Shoulders Display 900, `clamp(56px, 6.8vw, 100px)`, 0.94): título do herói, caixa alta, três linhas sem quebra.
- **Headline** (Schibsted Grotesk 800, `clamp(34px, 4.6vw, 64px)`, 1.0, tracking -0.025em): títulos de seção. Variante `contact` (Schibsted Grotesk 900, tracking -0.025em, até 104px) para "Vamos construir algo?" e `title-about` (até 56px).
- **Title** (Schibsted Grotesk 800–900, 24px a 48px, 1.0–1.33): títulos de cards e projetos.
- **Body** (Schibsted Grotesk 500, 16–18px, 1.5–1.625): texto corrido, largura máxima de 440–560px (`max-w-110` a `max-w-140`).
- **Label** (Martian Mono 700, 12–16px, tracking 0.05em, caixa alta quando etiqueta): tags `<Nome />`, chips de tecnologia, metadados de PR.

### Named Rules
**A Regra do Pôster Único.** Big Shoulders Display aparece uma vez, no herói. Todos os demais títulos usam Schibsted Grotesk.

**A Regra do Tracking.** Schibsted é larga: títulos param em `tracking-tight` (-0.025em). Nada de `tracking-tighter` em texto.

**A Regra da Escala Fluida.** Tamanhos de título usam `clamp()` sobre `--vw`/`--vh` (que compensam o zoom do `body` em telas ≥1800px). Não use `vw` cru.

## Layout

Página única em colunas de largura máxima 1240px (`max-w-310`), com gutter lateral de 24px (16px no celular). Seções empilhadas, separadas por filetes de 3px em ink; o rodapé de seção do herói é recortado por uma moldura de 1.5px a 35% de opacidade.

Padding vertical de seção: 104px no desktop (`py-26`), 56px no celular. Intervalos de 48px entre cabeçalho e conteúdo (28px no celular). Alturas mínimas por seção em ≥1100px criam respiro de "tela cheia" sem travar o conteúdo.

Breakpoints próprios: `sm` 641px (acima do celular), `tab` 720px (tablet), `md` 961px (menu desktop aparece), `lg` 1100px (herói em composição de pôster com foto sangrando). Em telas ≥1800px o `body` ganha `zoom` (1.2, 1.5, 2) para o site inteiro escalar.

O herói em desktop é uma composição por porcentagens: painel à direita, moldura, blocos de ink e esmeralda atrás da foto recortada. Em tablet e celular a foto vira um cartão separado ao lado ou abaixo do texto.

## Elevation & Depth

Sistema de sombras duras e estruturais: sem blur, sem opacidade. A sombra é parte da forma do objeto e comunica estado, não luz ambiente. Peças interativas sobem 2px para cima e para a esquerda no hover (sombra cresce) e afundam 3px no clique (sombra encolhe para 1px).

### Shadow Vocabulary
- **Hard 3** (`box-shadow: 3px 3px 0 #0a0f1c`): botões de ícone pequenos e setas de PR.
- **Hard 4** (`4px 4px 0`): botões do herói e do cabeçalho.
- **Hard 5–6** (`5px/6px 6px 0`): botões de contato, cards de habilidade.
- **Hard 8** (`8px 8px 0`): painel do `git log`.
- **Hard 10** (`10px 10px 0`): cards de projeto em fundo escuro (cor lime).
- **Hover** (`7px 7px 0` + `translate(-2px,-2px)`) e **Active** (`1px 1px 0` + `translate(3px,3px)`): estados de botão.

A cor da sombra vem de uma segunda classe: ink em fundo claro, lime ou esmeralda em fundo escuro.

### Named Rules
**A Regra da Sombra Sólida.** Nunca use blur, spread suave ou sombra translúcida. Se a sombra não é um deslocamento sólido de uma cor da paleta, está errada.

**A Regra da Cor de Contraste.** Em fundo ink, a sombra deve ser lime ou esmeralda; ink sobre ink não aparece.

## Shapes

Linguagem de bloco retangular com cantos moderadamente arredondados. Objetos principais usam raio de 14px; tags de seção 8px; chips 6px; botões de ícone menores 8px; apenas o selo "No ar" é pílula (9999px). Todo objeto tem borda de ink de 3px (2px em itens menores como chips e setas).

Formas decorativas são retângulos chapados e pontilhados (matriz de pontos em cinza apagado), marcas gigantes de `</>` e o chevron do logo em baixa opacidade. Cards têm leve rotação (-0.4°) no hover.

## Components

### Buttons
- **Shape:** raio 14px (`rounded-brut`), borda ink 3px, mínimo 44px de altura.
- **CTA (esmeralda):** "Fale comigo", fundo esmeralda, texto ink, Schibsted Grotesk bold, ícone de seta, sombra Hard 4 ink.
- **Acento (lime):** "CV", fundo lime, caixa alta, Schibsted Grotesk; mesmo comportamento tátil.
- **Ink / Branco:** botões quadrados de 54px para LinkedIn e GitHub; ink com sombra lime, branco com sombra ink.
- **Hover / Active:** levanta (-2,-2) com sombra de 7px; afunda (+3,+3) com sombra de 1px em 120ms; sem transformação com movimento reduzido.
- **Foco:** anel azul 3px com offset 3px (global).

### Chips
- **Tecnologia:** fundo branco, borda ink 2px, raio 6px, mono bold 12px.
- **Stack de PR:** fundo sálvia, mesma estrutura.
- **Status:** pílula esmeralda com borda ink 2px ("No ar").

### Cards / Containers
- **Corner Style:** 14px.
- **Background:** branco (habilidades), papel (projetos), ink com texto papel (variante inversa e seção Projetos).
- **Shadow Strategy:** Hard 5–6 nos cards de habilidade, Hard 10 nos de projeto (lime), Hard 8 no painel `git log`.
- **Border:** ink 3px (papel 3px quando o card fica sobre ink).
- **Internal Padding:** 26px (20px celular) para habilidades; 32px (20px celular) para projetos.
- **Comportamento:** levanta e inclina de leve no hover. Em desktop, cards de índice ímpar descem 28px (efeito escalonado); desativado no celular.

### Navigation
Cabeçalho sálvia em grade de três colunas: logo + "DAVY COSMO" (Schibsted Grotesk extrabold) à esquerda, links em caixa alta centrados (hover com sublinhado de 3px), CTA esmeralda à direita. Abaixo de 961px vira botão quadrado esmeralda de 44px que abre um painel ink em tela cheia com links Schibsted Grotesk 24px em papel e o CTA no final.

### Etiqueta de Seção (assinatura)
Rótulo mono no formato `<Projetos />`, `<OpenSource />`, `<Contato />`, com raio 8px e fundo na cor de contraste da seção (lime sobre ink, ink com texto esmeralda sobre sálvia).

### Terminal `git log` (assinatura)
Painel branco de 3px com barra superior ink em mono caixa alta (`git log --author=…`), lista de PRs com filetes de 2px e seta esmeralda de 44px à direita de cada linha.

### Carrossel de Ferramentas
Faixa ink com ícones brancos de 40px em marquee de 45s, filete esmeralda de 3px abaixo, pausa no hover e rolagem manual com movimento reduzido. Oculta no celular.

## Do's and Don'ts

### Do:
- **Do** manter bordas de ink 3px e raio de 14px em todo objeto principal.
- **Do** usar sombras duras sólidas (4–10px) e trocar a cor da sombra por lime ou esmeralda em fundo ink.
- **Do** reservar Big Shoulders Display ao herói e Schibsted Grotesk aos demais títulos.
- **Do** usar lime para marca e destaque, esmeralda para ação e status.
- **Do** marcar seções com etiquetas mono `<Nome />`.
- **Do** manter alvos de toque ≥44px e o anel de foco azul de 3px visível.
- **Do** desativar transformações e animações contínuas sob `prefers-reduced-motion`.

### Don't:
- **Don't** usar blur, sombras translúcidas, glassmorphism ou gradientes.
- **Don't** usar esmeralda como cor decorativa nem lime como cor de estado.
- **Don't** usar Big Shoulders Display fora do título do herói.
- **Don't** usar valores arbitrários do Tailwind quando existir classe da escala; recorrentes viram tokens no `@theme`.
- **Don't** usar `vw` cru em tipografia: use `--vw`/`--vh` para respeitar o zoom de telas grandes.
- **Don't** usar o azul de foco fora do anel de foco.
- **Don't** inventar depoimentos, métricas ou clientes em cards (ver PRODUCT.md).
