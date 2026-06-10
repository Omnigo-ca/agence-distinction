# Stack technique et conventions

Basé sur le projet de référence `Plania-Website`. Chaque site client part de cette base.

## Stack

| Élément | Choix |
|---|---|
| Framework | Next.js (App Router, dernière stable) |
| UI | React 19 |
| Styles | Tailwind CSS v4 (`@import "tailwindcss"` + `@theme inline`) |
| Composants | shadcn/ui (Radix UI) — seulement ceux utilisés |
| Icônes | lucide-react |
| Formulaires | react-hook-form + zod |
| Envoi courriel | Resend (API route `app/api/contact/route.ts`) |
| Animations | tw-animate-css / transitions Tailwind (léger seulement) |
| Hébergement | Vercel (preview pour V1/V2, prod à la livraison) |
| Analytics | @vercel/analytics |

## Structure de fichiers (réelle, dans ce repo)

```
app/
  layout.tsx              ← metadata SEO + font + lang, lit lib/site-config.ts
  page.tsx                ← assemble les sections selon enabledSections, AUCUNE logique
  globals.css             ← TOUTES les variables de design (couleurs, radius, fonts)
  api/contact/route.ts    ← envoi du formulaire de contact via Resend
components/
  navbar.tsx, footer.tsx          ← toujours présents
  hero-section.tsx                ← toujours présente
  contact-section.tsx             ← toujours présente (mode selon contact.goal)
  contact-form.tsx                ← formulaire react-hook-form + zod
  services-section.tsx, promo-section.tsx, about-section.tsx,
  process-section.tsx, portfolio-section.tsx, testimonials-section.tsx,
  faq-section.tsx                 ← activables via enabledSections
  section-wrapper.tsx             ← wrapper standard (id ancre, padding, variant default/muted/dark)
  section-heading.tsx             ← titre + sous-titre standard de section
  ui/                             ← composants shadcn utilisés (button, card, accordion, input, label, sheet, textarea)
lib/
  site-config.ts          ← ★ TOUT le contenu du site (voir cursor.md)
  validations/contact.ts  ← schéma zod du formulaire de contact
  utils.ts                ← cn()
public/                   ← logo, photos clients optimisées
.env.example              ← variables requises (copier en .env.local)
docs/                     ← méthodologie (voir README.md)
```

## Variables d'environnement

Copier `.env.example` → `.env.local` :

| Variable | Rôle |
|---|---|
| `CONTACT_RECIPIENT_EMAIL` | Courriel du client qui reçoit les soumissions |
| `RESEND_API_KEY` | Clé Resend (sans clé : envoi simulé en dev, loggé en console) |
| `RESEND_FROM_EMAIL` | Adresse d'envoi (domaine vérifié dans Resend) |

À configurer aussi dans Vercel avant la mise en ligne.

## Conventions

1. **Contenu via `lib/site-config.ts` uniquement.** Aucun texte client en dur dans les composants — ils lisent le config.
2. **Composants de section refaits à chaque site (tailor made).** Les composants du template sont des références : pour chaque client, recoder chaque section sur mesure (layout, design) selon sa direction visuelle. Seuls le mécanisme (`site-config.ts`, `page.tsx`, `api/contact`) et les primitives (`ui/`, `utils`) se réutilisent. Voir la RÈGLE CRITIQUE dans `cursor.md`.
3. **Composants serveur par défaut.** `"use client"` seulement si interactivité (formulaire, accordion, menu mobile, carousel).
4. **Nommage** : fichiers `kebab-case.tsx`, composants `PascalCase`, export nommé (`export function HeroSection()`).
5. **Sections** : `SectionWrapper` (ancre + padding) et `SectionHeading` peuvent servir de base technique, mais le rendu visuel de chaque section doit être unique au client.
6. **Couleurs** : uniquement via tokens Tailwind mappés aux variables CSS (`bg-primary`, `text-foreground`, `bg-dark`). Adapter `:root` dans `globals.css` aux couleurs du client (Q7) :

```css
:root {
  --background: #FFFFFF;
  --foreground: #1A1A2E;
  --primary: /* couleur principale client */;
  --accent: /* accent client */;
  --dark: /* sections sombres (hero/footer) si pertinent */;
  --radius: 0.625rem;
}
```

7. **Typographie** : police via `next/font` dans `layout.tsx` (Q25 ; Geist par défaut, sinon une Google Font adaptée au style Q23). La variable `--font-sans` alimente `font-sans` et `--font-heading`.
8. **Images** : toujours `next/image` avec `alt` descriptif. Photos client depuis le Drive → compresser (WebP, max ~200 Ko) avant `public/`.
9. **Responsive** : mobile-first. Breakpoints standards Tailwind (`sm`, `md`, `lg`). Tester 375 / 768 / 1440.
10. **SEO** : remplir `siteConfig.seo` (title `{Entreprise} | {Service principal} à {Région}`, description ~155 car. dérivée de Q2) — `layout.tsx` génère la metadata et OpenGraph automatiquement à partir du config.
11. **Accessibilité minimum** : contraste AA, `aria-label` sur boutons icônes, navigation clavier du menu mobile, un seul `h1`.
12. **Formulaire de contact** : déjà câblé (react-hook-form + zod → `api/contact` → Resend). Adapter les champs selon Q32 dans `contact-form.tsx` + `lib/validations/contact.ts`. Sans `RESEND_API_KEY`, l'envoi est simulé (utile en dev).
13. **Aucune dépendance ajoutée** sans justification — le build doit rester rapide et le site léger (Lighthouse ≥ 90 perf).

## Commandes

```bash
npm install
npm run dev      # développement
npm run build    # DOIT passer sans erreur avant tout envoi
npm run lint
```

## Déploiement

- Repo GitHub par client : `site-{nom-client}` (à partir de ce template).
- Vercel : preview automatique sur chaque push. V1/V2 = URL de preview. Livraison = domaine client (Q35).
