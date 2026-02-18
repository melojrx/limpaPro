# LimpaPro — Roadmap de Modernização

> Documento central de acompanhamento. Cada fase tem seu próprio arquivo de detalhamento.

## Status Geral

| Fase | Título                         | Status      | Arquivo                          |
|------|--------------------------------|-------------|----------------------------------|
| 1    | Infraestrutura i18n + Tema     | ✅ Concluído | [fase-1-infraestrutura.md](./fase-1-infraestrutura.md) |
| 2    | Header Moderno                 | ✅ Concluído | [fase-2-header.md](./fase-2-header.md)                 |
| 3    | Dark Mode nos Componentes      | ✅ Concluído | [fase-3-dark-mode.md](./fase-3-dark-mode.md)           |
| 4    | Internacionalização dos Textos | ✅ Concluído | [fase-4-i18n-textos.md](./fase-4-i18n-textos.md)       |
| 5    | Modernização Visual            | ✅ Concluído | [fase-5-visual.md](./fase-5-visual.md)                 |

## Legenda de Status
- ⬜ Pendente
- 🔄 Em andamento
- ✅ Concluído
- ⚠️ Bloqueado

## Objetivos do Projeto

- **Multilíngue:** PT-BR (padrão), EN, FR
- **Temas:** Light (padrão) e Dark Mode
- **Interface moderna:** tipografia, animações, micro-interações
- **Acessibilidade:** foco visível, contraste adequado, semântica HTML

## Dependências a Instalar

```bash
npm install react-i18next i18next i18next-browser-languagedetector i18next-http-backend
```

## Arquitetura de Arquivos Planejada

```
src/
├── i18n/
│   └── index.ts                    # Configuração do i18next
├── contexts/
│   └── ThemeContext.tsx             # Estado global do tema
├── hooks/
│   └── useTheme.ts                  # Hook de tema com localStorage
└── components/
    ├── Header.tsx                   # + language switcher + dark toggle
    ├── LanguageSwitcher.tsx         # Novo componente
    └── ThemeToggle.tsx              # Novo componente

public/
└── locales/
    ├── pt-BR/
    │   └── translation.json
    ├── en/
    │   └── translation.json
    └── fr/
        └── translation.json
```

## Ordem de Execução Recomendada

As fases devem ser executadas **em ordem**, pois cada uma depende da anterior.
A Fase 5 (visual) é independente e pode ser feita a qualquer momento após a Fase 1.
