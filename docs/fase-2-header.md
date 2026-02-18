# Fase 2 — Header Moderno

**Status:** ✅ Concluído
**Depende de:** Fase 1 (ThemeContext, i18n configurados)
**Bloqueia:** —

---

## Objetivo

Modernizar o Header com:
- Toggle de dark/light mode com ícone animado
- Seletor de idioma (PT / EN / FR) com bandeiras
- Visual atualizado e responsivo

---

## Checklist

### 2.1 Criar componente ThemeToggle

**Arquivo:** `src/components/ThemeToggle.tsx`

- [ ] Criar componente usando `useTheme()`
- [ ] Ícone sol (`Sun`) em light mode, lua (`Moon`) em dark mode
- [ ] Transição suave entre ícones (`transition-all duration-300`)
- [ ] Acessibilidade: `aria-label` dinâmico
- [ ] Usar ícones do `lucide-react` (já instalado)

```tsx
// Comportamento esperado
<ThemeToggle />
// Exibe Sun ou Moon baseado no tema atual
// Chama toggleTheme() ao clicar
```

---

### 2.2 Criar componente LanguageSwitcher

**Arquivo:** `src/components/LanguageSwitcher.tsx`

- [ ] Criar dropdown com os 3 idiomas
- [ ] Exibir idioma atual com bandeira (emoji) e sigla
- [ ] Ao selecionar, chamar `i18n.changeLanguage(lang)`
- [ ] Persistência automática via i18next (localStorage)
- [ ] Fechar dropdown ao clicar fora
- [ ] Idiomas disponíveis:
  - 🇧🇷 PT — `pt-BR`
  - 🇬🇧 EN — `en`
  - 🇫🇷 FR — `fr`

```tsx
// Opções do dropdown
const languages = [
  { code: 'pt-BR', label: 'PT', flag: '🇧🇷' },
  { code: 'en',    label: 'EN', flag: '🇬🇧' },
  { code: 'fr',    label: 'FR', flag: '🇫🇷' },
];
```

---

### 2.3 Atualizar Header.tsx

**Arquivo:** `src/components/Header.tsx`

- [ ] Importar e posicionar `<ThemeToggle />` no lado direito da nav
- [ ] Importar e posicionar `<LanguageSwitcher />` ao lado do ThemeToggle
- [ ] Aplicar dark mode classes no fundo do header:
  - Light: `bg-white/80 backdrop-blur border-b border-gray-200`
  - Dark: `dark:bg-gray-950/80 dark:border-gray-800`
- [ ] Links da nav com variantes dark:
  - Light: `text-gray-600 hover:text-blue-800`
  - Dark: `dark:text-gray-300 dark:hover:text-blue-400`
- [ ] Logo/título com variante dark
- [ ] Menu mobile com variante dark

---

### 2.4 Usar textos traduzidos no Header

- [ ] Substituir textos dos links de navegação por `t('nav.services')`, etc.
- [ ] Chaves necessárias (adicionar nos JSONs na Fase 4):

```json
{
  "nav": {
    "services": "Serviços",
    "whyUs": "Por Que Nós",
    "about": "Sobre",
    "contact": "Contato",
    "cta": "Solicitar Orçamento"
  }
}
```

---

## Layout Esperado do Header

```
┌────────────────────────────────────────────────────────────┐
│  🧹 LimpaPro   Serviços  Por Que Nós  Sobre  Contato  [CTA] │  🌙  🇧🇷 PT ▾  │
└────────────────────────────────────────────────────────────┘

Mobile:
┌─────────────────────────────┐
│  🧹 LimpaPro        🌙 🇧🇷 ☰ │
└─────────────────────────────┘
```

---

## Classes Dark Mode a Aplicar

| Elemento             | Light                        | Dark                            |
|----------------------|------------------------------|---------------------------------|
| Header fundo         | `bg-white/80`                | `dark:bg-gray-950/80`           |
| Header borda         | `border-gray-200`            | `dark:border-gray-800`          |
| Links nav            | `text-gray-600`              | `dark:text-gray-300`            |
| Links nav hover      | `hover:text-blue-800`        | `dark:hover:text-blue-400`      |
| Logo texto           | `text-blue-800`              | `dark:text-blue-400`            |
| Botão CTA            | `bg-blue-800`                | `dark:bg-blue-600`              |
| Menu mobile bg       | `bg-white`                   | `dark:bg-gray-950`              |

---

## Critérios de Conclusão

- [ ] Toggle de tema funcional no header
- [ ] Classe `dark` aplicada/removida no `<html>` corretamente
- [ ] Preferência persiste ao recarregar a página
- [ ] LanguageSwitcher troca o idioma sem recarregar a página
- [ ] Header visualmente correto em light e dark
- [ ] Header responsivo (mobile + desktop)
- [ ] Sem erros de console
