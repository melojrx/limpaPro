# LimpaPro — Design System

## Direction
Professional cleaning service landing page. Clean, trustworthy, light-dominant with strong blue brand presence. Target: modern, accessible, multilingual (PT-BR / EN / FR), light + dark mode.

---

## Color Tokens

### Brand
| Token           | Light                   | Dark                    |
|-----------------|-------------------------|-------------------------|
| `primary`       | blue-800 `#1e3a8a`      | blue-400 `#60a5fa`      |
| `primary-hover` | blue-900 `#1e40af`      | blue-300 `#93c5fd`      |
| `accent`        | green-600 `#16a34a`     | green-400 `#4ade80`     |
| `accent-hover`  | green-700 `#15803d`     | green-300 `#86efac`     |
| `whatsapp`      | `#25D366`               | `#25D366`               |

### Surface
| Token        | Light                  | Dark                   |
|--------------|------------------------|------------------------|
| `bg-base`    | white                  | gray-950 `#0a0a0a`     |
| `bg-subtle`  | gray-50 `#f9fafb`      | gray-900 `#111827`     |
| `bg-muted`   | gray-100 `#f3f4f6`     | gray-800 `#1f2937`     |
| `bg-dark`    | gray-800 `#1f2937`     | gray-100 `#f3f4f6`     |

### Text
| Token          | Light               | Dark                |
|----------------|---------------------|---------------------|
| `text-heading` | gray-800 `#1f2937`  | gray-50 `#f9fafb`   |
| `text-body`    | gray-500 `#6b7280`  | gray-400 `#9ca3af`  |
| `text-muted`   | gray-400 `#9ca3af`  | gray-600 `#4b5563`  |
| `text-primary` | blue-800 `#1e3a8a`  | blue-400 `#60a5fa`  |
| `text-on-dark` | white               | gray-900 `#111827`  |

---

## Spacing Scale
Base unit: `4px` (Tailwind default)

| Token | Value   | Usage                         |
|-------|---------|-------------------------------|
| `1`   | `4px`   | Icon margin (mr-1)            |
| `2`   | `8px`   | Small gap (gap-2)             |
| `4`   | `16px`  | Container padding (px-4)      |
| `6`   | `24px`  | Desktop padding (px-6)        |
| `8`   | `32px`  | Card padding (p-8)            |
| `12`  | `48px`  | Grid gap (gap-12)             |
| `16`  | `64px`  | Section vertical (py-16)      |
| `24`  | `96px`  | Large section (md:py-24)      |

---

## Border Radius Scale
| Token          | Value  | Usage                            |
|----------------|--------|----------------------------------|
| `rounded-md`   | `6px`  | Buttons, inputs, badges          |
| `rounded-lg`   | `8px`  | Cards, containers, images        |
| `rounded-xl`   | `12px` | Featured cards, modals           |
| `rounded-full` | `50%`  | Icon circles, FAB, avatars       |

---

## Shadow Scale (Depth)
Strategy: **Borders-first** with selective shadows

| Token        | Usage                              |
|--------------|------------------------------------|
| `shadow-sm`  | Header, default card state         |
| `shadow-md`  | Tooltips, map                      |
| `shadow-lg`  | Cards (default), interactive els   |
| `shadow-xl`  | Cards (hover state)                |

Dark mode: reduce shadows, increase borders slightly.

---

## Typography

### Scale
| Role           | Size         | Weight        | Color Token   |
|----------------|--------------|---------------|---------------|
| Hero title     | `text-6xl`   | `font-extrabold` | heading     |
| Section h2     | `text-3xl md:text-4xl` | `font-bold` | heading |
| Subsection h3  | `text-xl`    | `font-semibold` | heading     |
| Body           | `text-lg`    | `font-normal` | body          |
| Small/Label    | `text-sm`    | `font-medium` | muted         |

---

## Component Patterns

### Button — Primary
```
h-10 px-4 py-2 rounded-md
bg-blue-800 hover:bg-blue-900
text-white font-medium text-sm
transition-colors duration-200
focus-visible:ring-2 focus-visible:ring-blue-800
```

### Button — CTA (Hero / Section)
```
h-11 px-8 rounded-md
bg-green-600 hover:bg-green-700
text-white font-bold
transition-colors duration-200
```

### Card — Service
```
rounded-lg border shadow-lg
hover:shadow-xl hover:-translate-y-2
transition-all duration-300
```

### Section — Default
```
py-16 md:py-24
container mx-auto px-4 md:px-6
```

### Section — Alt Background
```
bg-gray-50 dark:bg-gray-900
```

---

## Layout Grid
- Container: `max-w-7xl mx-auto px-4 md:px-6`
- 1-col → `sm:grid-cols-2` → `lg:grid-cols-3` → `lg:grid-cols-4`
- Primary gap: `gap-8` for cards, `gap-12` for large splits

---

## Animation
| Action           | Classes                                      |
|------------------|----------------------------------------------|
| Card hover lift  | `hover:-translate-y-2 transition-all duration-300` |
| Button press     | `active:scale-95 transition-transform duration-150` |
| Scroll reveal    | `opacity-0 translate-y-5 → opacity-100 translate-y-0` |
| Tooltip slide    | `opacity-0 translate-x-2 → opacity-100 translate-x-0` |
| FAB pulse        | `animate-ping opacity-30`                    |

---

## Dark Mode Strategy
- Tailwind `class` strategy (toggle class `dark` on `<html>`)
- Persist preference in `localStorage`
- System preference as default via `prefers-color-scheme`
- Override with manual toggle in Header

---

## i18n Strategy
- Library: `react-i18next` + `i18next`
- Languages: `pt-BR` (default), `en`, `fr`
- Namespace: `translation`
- Detection: URL subdirectory OR localStorage
- Locale files: `/public/locales/{lang}/translation.json`

---

## File Conventions
```
src/
  components/
    Header.tsx       # Nav + dark toggle + language switcher
    Hero.tsx
    Services.tsx
    WhyUs.tsx
    About.tsx
    Contact.tsx
    Footer.tsx
    WhatsAppButton.tsx
  i18n/
    index.ts         # i18next config
  contexts/
    ThemeContext.tsx  # Dark mode state
  hooks/
    useTheme.ts
```
