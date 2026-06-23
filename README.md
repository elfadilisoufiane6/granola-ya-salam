# Granola Ya Salame — Next.js

Site vitrine de **Granola Ya Salame**, marque marocaine de granola artisanal (fait main à
Casablanca). Migré d'un site statique HTML/CSS/JS vers **Next.js 16 (App Router)** +
**TypeScript** + **Tailwind CSS v4**.

## 🧱 Stack
- **Next.js 16** (App Router, `src/`, Turbopack)
- **TypeScript** (strict)
- **Tailwind CSS v4** (config CSS-first via `@theme` dans `globals.css`)
- **next/font** (Fraunces · Outfit · Caveat) — zéro requête Google bloquante
- **next/image** pour toutes les images, **next/link** pour la navigation interne
- Animations : IntersectionObserver (composant `Reveal`), keyframes Tailwind (marquee, fab, float)

## 📂 Structure
```
src/
├── app/
│   ├── layout.tsx          # fonts + metadata + Navbar/Footer/Fab
│   ├── page.tsx            # Accueil
│   ├── nos-saveurs/page.tsx
│   ├── commander/page.tsx  # formulaire (Suspense + useSearchParams)
│   └── globals.css         # thème Tailwind v4 (@theme, keyframes, base)
└── components/             # Navbar, Hero, Marquee, Stats, Products, Testimonials,
                            # Why, Story, CtaBand, PageHero, OrderForm, Faq, Footer, Fab,
                            # Reveal, SectionHead, Btn
public/images/              # logo, hero, photos produits (WebP)
legacy/                     # ⚠️ site statique d'origine conservé pour référence
```

## 🧭 Routes
| Route | Page |
|-------|------|
| `/` | Accueil — hero plein écran, bandeau, chiffres, saveurs, avis, CTA |
| `/nos-saveurs` | Produits + pourquoi nous + histoire |
| `/commander` | Formulaire (nom · tél · ville · saveur · variante kg) → WhatsApp |

Les cartes produit pointent vers `/commander?saveur=<slug>` et **pré-sélectionnent** la saveur dans le formulaire.

## ▶️ Lancer en local
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production (testé : OK)
npm run start    # sert le build
npm run lint
```

## 🎨 Thème (design tokens)
Définis dans `src/app/globals.css` (`@theme`) : `cream #FAF6EE`, `primary #2F6E57` (vert forêt),
`accent #E2944E`, `cta #C75B33` (terracotta), `ink #211E18`, etc. → utilisables comme classes
Tailwind (`bg-cream`, `text-primary`, `bg-cta`…).

## 🔧 À ajuster avant prod
- WhatsApp `212620142004`, email/réseaux, chiffres & avis (placeholders : 4.9/5, 800+).
- Le dossier `legacy/` peut être supprimé une fois la migration validée.

## 📦 Git / GitHub
Le dépôt git est initialisé (`create-next-app`). Pour publier sur GitHub :
```bash
gh auth login
gh repo create granola-ya-salame --public --source=. --remote=origin --push
```
