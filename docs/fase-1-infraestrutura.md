# Fase 1 — Infraestrutura i18n + Tema

**Status:** ✅ Concluído
**Depende de:** —
**Bloqueia:** Fase 2, 3, 4

---

## Objetivo

Preparar toda a base técnica sem alterar nenhuma interface visível. Ao final desta fase o app continua com a mesma aparência, mas suporta múltiplos idiomas e o sistema de tema está pronto para ser ativado.

---

## Checklist

### 1.1 Instalar dependências

- [x] Instalar `react-i18next`
- [x] Instalar `i18next`
- [x] Instalar `i18next-browser-languagedetector`
- [x] Instalar `i18next-http-backend`

```bash
npm install react-i18next i18next i18next-browser-languagedetector i18next-http-backend
```

---

### 1.2 Configurar Tailwind para Dark Mode

**Arquivo:** `tailwind.config.ts`

- [x] Adicionar `darkMode: 'class'` na configuração (já estava como `["class"]` — OK)

```ts
// tailwind.config.ts
export default {
  darkMode: 'class',  // ← adicionar esta linha
  // ... resto da config
}
```

---

### 1.3 Criar configuração do i18next

**Arquivo:** `src/i18n/index.ts`

- [x] Criar pasta `src/i18n/`
- [x] Criar arquivo `src/i18n/index.ts`
- [x] Configurar idiomas: `pt-BR` (padrão), `en`, `fr`
- [x] Configurar detecção automática de idioma (localStorage → navigator)
- [x] Configurar fallback para `pt-BR`

```ts
// src/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt-BR',
    supportedLngs: ['pt-BR', 'en', 'fr'],
    defaultNS: 'translation',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

---

### 1.4 Criar estrutura de arquivos de tradução

**Diretório:** `public/locales/`

- [x] Criar `public/locales/pt-BR/translation.json`
- [x] Criar `public/locales/en/translation.json`
- [x] Criar `public/locales/fr/translation.json`

> Os textos serão preenchidos na Fase 4. Por ora, criar arquivos com objeto vazio `{}`.

---

### 1.5 Criar ThemeContext

**Arquivo:** `src/contexts/ThemeContext.tsx`

- [x] Usar `ThemeProvider` do `next-themes` (já instalado) — sem necessidade de contexto manual
  - `attribute="class"` → aplica classe `dark` no `<html>`
  - `defaultTheme="system"` → respeita preferência do SO
  - `enableSystem` → detecta `prefers-color-scheme`
  - `storageKey="limpapro-theme"` → persiste no localStorage

```tsx
// Estrutura esperada
export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });
export const ThemeProvider = ({ children }) => { ... };
```

---

### 1.6 Criar hook useTheme

**Arquivo:** `src/hooks/useTheme.ts`

- [x] Criar pasta `src/hooks/`
- [x] Criar `useTheme.ts` que encapsula `useTheme` do `next-themes` expondo `toggleTheme` e `isDark`

```ts
// src/hooks/useTheme.ts
import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';

export const useTheme = () => useContext(ThemeContext);
```

---

### 1.7 Injetar providers no App.tsx

**Arquivo:** `src/App.tsx`

- [x] Importar `ThemeProvider` do `next-themes`
- [x] Importar `src/i18n/index.ts` (side-effect import: `import "./i18n"`)
- [x] Envolver a árvore com `<ThemeProvider>` como provider mais externo

```tsx
// src/App.tsx
import './i18n';
import { ThemeProvider } from '@/contexts/ThemeContext';

// ThemeProvider deve ser o provider mais externo
```

---

## Critérios de Conclusão

- [x] `npm run build` sem erros — ✓ built in 2.12s
- [x] `npm run dev` sem erros no console
- [x] Classe `dark` aplicada/removida no `<html>` via `next-themes`
- [x] `i18n.language` detecta idioma do browser com fallback `pt-BR`
- [x] Arquivos de tradução acessíveis via `GET /locales/{lang}/translation.json`
- [x] Script anti-FOUC adicionado ao `index.html`

---

## Notas

- Não alterar nenhum componente existente nesta fase
- Não adicionar traduções ainda — isso é Fase 4
- Testar o ThemeContext via console do browser antes de prosseguir
