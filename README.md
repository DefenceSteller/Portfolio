# Haanie — Portfolio

A dark, animated developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, and **Framer Motion**.

Projects are pulled from my GitHub profile — [github.com/DefenceSteller](https://github.com/DefenceSteller).

## ✨ Features

- 🎯 Hero with animated rotating roles, gradient headline, status badge and GitHub avatar visual
- 🌀 Infinite tech-stack marquee with hover pause
- 💼 Featured project + responsive project grid (language dots, tech chips, repo/demo links)
- 🧰 Skills grouped into Frontend / Backend & Data / Mobile / Tooling
- ✉️ Contact section with copy-to-clipboard email and a mailto-based form (nothing stored)
- 📱 Fully responsive with a sheet-based mobile menu
- ⚡ Scroll progress bar, scroll-reveal animations, active-section nav highlighting
- 🌗 Dark-only theme, custom grid + noise background, `prefers-reduced-motion` respected

## 🛠 Stack

| Layer     | Tech                                              |
| --------- | ------------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack, Cache Components) |
| Language  | TypeScript 5 (strict)                             |
| Styling   | Tailwind CSS v4 + shadcn/ui (Radix)               |
| Animation | Framer Motion                                     |
| Icons     | lucide-react                                      |
| Fonts     | Geist (body) + Space Grotesk (headings) via `next/font` |

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production:

```bash
npm run build
npm start
npm run lint     # ESLint
```

## 📂 Project Structure

```text
src/
├── app/
│   ├── layout.tsx        # fonts, metadata, dark theme, ambient background
│   ├── page.tsx          # assembles all sections
│   └── globals.css       # theme tokens, gradients, keyframes, utilities
├── components/
│   ├── hero.tsx          # animated hero
│   ├── navbar.tsx        # fixed nav + active section + mobile sheet
│   ├── tech-marquee.tsx  # scrolling stack strip
│   ├── about.tsx         # bio + "what I do" cards
│   ├── projects.tsx      # featured card + project grid
│   ├── skills.tsx        # skill groups
│   ├── contact.tsx       # contact links + form
│   ├── footer.tsx
│   ├── section-heading.tsx
│   ├── reveal.tsx        # scroll-reveal wrapper
│   ├── scroll-progress.tsx
│   ├── icons.tsx         # GitHub / LinkedIn / X brand SVGs
│   └── ui/               # shadcn/ui components
└── lib/
    └── data.ts           # ⭐ all content: profile, projects, skills
```

## ✏️ Customizing

Everything content-related lives in **`src/lib/data.ts`**:

1. **Email** — set your address in `profile.email` (used by the contact form and links).
2. **Name / role / bio** — edit the `profile` object.
3. **Projects** — add, remove or reorder entries in `projects[]` (set `featured: true` for the big card, `demo` for live links).
4. **Skills / marquee** — edit `skillGroups[]` and `marqueeItems[]`.
