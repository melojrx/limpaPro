# Fase 3 — Dark Mode nos Componentes

**Status:** ✅ Concluído
**Depende de:** Fase 1 (Tailwind darkMode: 'class'), Fase 2 (ThemeContext ativo)
**Bloqueia:** —

---

## Objetivo

Aplicar `dark:` variants em todos os componentes existentes, garantindo que a experiência visual em dark mode seja coesa, com contraste adequado e sem elementos "esquecidos".

---

## Checklist por Componente

### 3.1 Hero.tsx

- [ ] Overlay: `bg-black/50` → manter (já funciona em dark)
- [ ] Título: adicionar `dark:text-white` (já branco, ok)
- [ ] Subtítulo: `text-gray-200` → `dark:text-gray-300`
- [ ] Botão primário CTA: verificar contraste em dark

---

### 3.2 Services.tsx

- [ ] Fundo da seção: `bg-gray-50` → `dark:bg-gray-900`
- [ ] Título da seção: `text-gray-800` → `dark:text-gray-50`
- [ ] Subtítulo: `text-gray-500` → `dark:text-gray-400`
- [ ] Cards:
  - Fundo: `bg-card` → `dark:bg-gray-800`
  - Borda: `border` → `dark:border-gray-700`
  - Ícone: `text-blue-800` → `dark:text-blue-400`
  - Título: `text-gray-800` → `dark:text-gray-50`
  - Descrição: `text-gray-500` → `dark:text-gray-400`
  - Shadow: `shadow-lg` → `dark:shadow-gray-900/50`

---

### 3.3 WhyUs.tsx

- [ ] Fundo da seção: `bg-white` → `dark:bg-gray-950`
- [ ] Título: `text-gray-800` → `dark:text-gray-50`
- [ ] Subtítulo: `text-gray-500` → `dark:text-gray-400`
- [ ] Feature items (ícone + círculo):
  - Círculo: `bg-blue-100` → `dark:bg-blue-900`
  - Ícone: `text-blue-800` → `dark:text-blue-400`
  - Título: `text-gray-800` → `dark:text-gray-50`
  - Descrição: `text-gray-500` → `dark:text-gray-400`

---

### 3.4 About.tsx

- [ ] Fundo da seção: `bg-gray-50` → `dark:bg-gray-900`
- [ ] Título: `dark:text-gray-50`
- [ ] Parágrafos: `dark:text-gray-400`
- [ ] Checkmarks: `text-green-600` → `dark:text-green-400`
- [ ] Texto dos items: `dark:text-gray-300`
- [ ] Imagem: adicionar `dark:brightness-90` para suavizar em dark

---

### 3.5 Contact.tsx

- [ ] Fundo da seção: `dark:bg-gray-950`
- [ ] Título: `dark:text-gray-50`
- [ ] Subtítulo: `dark:text-gray-400`
- [ ] Container do formulário: `bg-gray-50` → `dark:bg-gray-800`
- [ ] Labels dos inputs: `dark:text-gray-300`
- [ ] Inputs:
  - `dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100`
  - `dark:placeholder:text-gray-500`
- [ ] Select: mesmas classes do input
- [ ] Textarea: mesmas classes do input
- [ ] Botão submit: `dark:bg-blue-600 dark:hover:bg-blue-500`
- [ ] Bloco de informações (telefone, email, endereço):
  - Ícones: `dark:text-blue-400`
  - Textos: `dark:text-gray-300`
  - Links: `dark:hover:text-blue-400`

---

### 3.6 Footer.tsx

- [ ] Fundo: já usa `bg-gray-800` — atualizar para `dark:bg-gray-950`
- [ ] Texto: `text-gray-400` → `dark:text-gray-500`
- [ ] Título/logo: `text-white` → manter
- [ ] Links: `hover:text-white` → manter
- [ ] Linha divisória: `dark:border-gray-700`

---

### 3.7 Map.tsx

- [ ] Container: adicionar `dark:opacity-80` para suavizar o mapa em dark
- [ ] Adicionar `dark:grayscale dark:brightness-75` no iframe para mapa dark (efeito CSS)

---

### 3.8 WhatsAppButton.tsx

- [ ] Tooltip: `bg-gray-800` → `dark:bg-gray-100 dark:text-gray-900` (invertido)
- [ ] Botão: já usa cor fixa `#25D366` → manter (é cor de marca)

---

## Estratégia de Cores por Contexto

### Superfícies (em camadas)
```
Light:                          Dark:
bg-white       ← base          bg-gray-950    ← base
bg-gray-50     ← subtle        bg-gray-900    ← subtle
bg-gray-100    ← muted         bg-gray-800    ← muted
```

### Textos
```
text-gray-800  (heading)   →   dark:text-gray-50
text-gray-600  (body)      →   dark:text-gray-300
text-gray-500  (body)      →   dark:text-gray-400
text-gray-400  (muted)     →   dark:text-gray-500
```

### Primário
```
text-blue-800  →  dark:text-blue-400
bg-blue-800    →  dark:bg-blue-600
hover:bg-blue-900  →  dark:hover:bg-blue-500
```

### Accent
```
text-green-600  →  dark:text-green-400
bg-green-600    →  dark:bg-green-500
```

---

## Critérios de Conclusão

- [ ] Nenhum componente com fundo branco "puro" em dark mode
- [ ] Nenhum texto escuro sobre fundo escuro (contraste WCAG AA mínimo)
- [ ] Imagens/mapas com ajuste de brilho em dark
- [ ] Toggle de dark mode testado em todos os componentes simultaneamente
- [ ] Ausência de "flash" de tema branco ao carregar (verificar ordem de aplicação da classe `dark`)
- [ ] Testado nos breakpoints: mobile (375px), tablet (768px), desktop (1280px)

---

## Prevenção de FOUC (Flash of Unstyled Content)

Para evitar flash de tema incorreto ao carregar, adicionar script inline no `index.html`:

```html
<!-- index.html — dentro do <head>, antes de qualquer CSS -->
<script>
  (function() {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  })();
</script>
```

- [ ] Adicionar script anti-FOUC no `index.html`
