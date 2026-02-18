# Fase 5 — Modernização Visual

**Status:** ⬜ Pendente
**Depende de:** Fase 1 (independente das demais em termos técnicos)
**Bloqueia:** —

---

## Objetivo

Elevar a qualidade visual do projeto com tipografia personalizada, melhorias na seção Hero, micro-interações mais ricas e consistência nos componentes.

---

## Checklist

### 5.1 Tipografia — Google Fonts

**Arquivo:** `index.html`

- [ ] Adicionar fonte **Inter** (corpo e UI) + **Plus Jakarta Sans** (headings) via Google Fonts
- [ ] Atualizar `tailwind.config.ts` para registrar as fontes como variáveis CSS

```html
<!-- index.html — dentro do <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet">
```

```ts
// tailwind.config.ts
fontFamily: {
  sans: ['Inter', 'ui-sans-serif', 'system-ui'],
  heading: ['Plus Jakarta Sans', 'ui-sans-serif'],
},
```

- [ ] Aplicar `font-heading` nos h1, h2 de todas as seções
- [ ] Aplicar `font-sans` como padrão global no `body`

---

### 5.2 Hero — Modernização

**Arquivo:** `src/components/Hero.tsx`

Situação atual: imagem de fundo com overlay escuro e texto branco.

Melhorias:
- [ ] Substituir `h-[70vh]` por `min-h-screen` para ocupar a viewport completa
- [ ] Adicionar **gradiente multi-camada** sobre a imagem para texto mais legível
- [ ] Adicionar **badge animado** acima do título ("Serviço de Limpeza Profissional")
- [ ] Adicionar **estatísticas** abaixo dos botões (ex: "500+ clientes", "10+ anos", "100% satisfação")
- [ ] Melhorar botões: botão primário com sombra colorida, botão secundário com borda
- [ ] Adicionar scroll indicator animado (chevron bouncing) no rodapé do hero

```tsx
// Estrutura esperada do Hero modernizado
<section>
  {/* Imagem de fundo com gradiente */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-black/60 to-black/40" />

  {/* Badge */}
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
    ✨ Serviço de Limpeza Profissional
  </span>

  {/* Título com destaque */}
  <h1>
    Limpeza Profissional para{' '}
    <span className="text-green-400">Sua Casa e Empresa</span>
  </h1>

  {/* Stats */}
  <div className="grid grid-cols-3 gap-8">
    <div><span className="text-3xl font-bold text-white">500+</span><p>Clientes</p></div>
    <div><span className="text-3xl font-bold text-white">10+</span><p>Anos</p></div>
    <div><span className="text-3xl font-bold text-white">100%</span><p>Satisfação</p></div>
  </div>
</section>
```

---

### 5.3 Seções — Badges de Seção

**Todos os componentes de seção**

- [ ] Adicionar um **badge/pill** acima de cada título de seção (padrão usado em sites modernos)
- [ ] Estilo: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium`
- [ ] Dark: `dark:bg-blue-950 dark:text-blue-300`
- [ ] Aplicar em: Services, WhyUs, About, Contact

---

### 5.4 Cards de Serviços — Modernização

**Arquivo:** `src/components/Services.tsx`

- [ ] Adicionar número de ordem estilizado (01, 02, 03) em cada card
- [ ] Gradiente sutil no hover do ícone
- [ ] Adicionar CTA por card ("Saiba mais →") com animação de seta
- [ ] Borda sutil com efeito de brilho no hover (`hover:border-blue-200`)

---

### 5.5 Seção WhyUs — Ícones maiores

**Arquivo:** `src/components/WhyUs.tsx`

- [ ] Aumentar círculo do ícone: `w-12 h-12` → `w-16 h-16`
- [ ] Aumentar ícone interno: `h-6 w-6` → `h-8 w-8`
- [ ] Adicionar número de destaque acima do ícone ("01", "02"...)
- [ ] Adicionar animação de entrada em cascade (delay escalonado por item)

---

### 5.6 Seção About — Melhorias de Layout

**Arquivo:** `src/components/About.tsx`

- [ ] Imagem com borda de destaque e badge flutuante ("10 anos de experiência")
- [ ] Lista de items com ícone check animado
- [ ] Adicionar CTA link para seção de contato

---

### 5.7 Animações de Scroll — Melhoria

**Arquivo:** `src/components/AnimatedWrapper.tsx`

- [ ] Refatorar para usar `IntersectionObserver` com delay configurável
- [ ] Suportar diferentes direções de entrada: `up`, `left`, `right`, `fade`
- [ ] Adicionar prop `delay` para cascade de elementos filhos

```tsx
// API esperada
<AnimatedWrapper direction="up" delay={0}>
  <Card />
</AnimatedWrapper>
```

---

### 5.8 Footer — Modernização

**Arquivo:** `src/components/Footer.tsx`

- [ ] Adicionar ícones de redes sociais (WhatsApp, Instagram, Facebook)
- [ ] Adicionar linha de separação com gradiente
- [ ] Layout em 3 colunas: Marca | Links Rápidos | Contato
- [ ] Dark mode melhorado: `bg-gray-950 border-t border-gray-800`

---

### 5.9 Scroll Progress Bar (opcional)

**Arquivo:** `src/App.tsx` ou novo componente

- [ ] Barra de progresso fina no topo da página (indica posição no scroll)
- [ ] Cor: `bg-gradient-to-r from-blue-600 to-green-500`
- [ ] `position: fixed; top: 0; left: 0; height: 3px; z-index: 100`

---

### 5.10 Botão "Voltar ao Topo"

**Arquivo:** novo `src/components/ScrollToTop.tsx`

- [ ] Aparece ao scrollar mais de 400px
- [ ] Posicionado acima do WhatsAppButton (`bottom-24 right-6`)
- [ ] Ícone `ChevronUp` do lucide-react
- [ ] Animação de entrada/saída

---

## Critérios de Conclusão

- [ ] Hero ocupa 100vh com gradiente legível
- [ ] Todas as seções têm badge acima do título
- [ ] Tipografia Inter/Plus Jakarta Sans aplicada
- [ ] Animações de scroll suaves e sem jank
- [ ] Cards com hover states ricos e consistentes
- [ ] Footer em 3 colunas com redes sociais
- [ ] Testado em mobile, tablet e desktop
- [ ] Sem regressões de acessibilidade (contraste, foco, semântica)
- [ ] Lighthouse Performance score ≥ 90

---

## Referências Visuais

Sites de limpeza/serviços com design moderno para referência:
- Fundo escurecido no hero com stats embaixo
- Cards com numeração e hover lift
- Badges de seção em pill arredondado
- Footer dark com 3 colunas
