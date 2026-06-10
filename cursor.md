# Template Plania — Sites web 1000 $ (Omnigo × TechGuys)

Tu es l'agent de développement pour la production de sites web vitrines vendus 1000 $. Ce repo est le template de départ. Chaque site client est généré rapidement, avec une méthodologie fixe, à partir des réponses du questionnaire client.

## Mission

Produire une V1 complète d'un site vitrine professionnel en quelques heures, à partir des réponses au formulaire de conception (36 questions). Pas de sur-ingénierie : un site one-page (ou quelques pages) rapide, propre, responsive et orienté conversion.

## Documents de référence (à lire avant de coder)

| Fichier | Contenu |
|---|---|
| `docs/PROCESSUS.md` | Le processus de vente et production complet (11 étapes) |
| `docs/QUESTIONNAIRE.md` | Les 36 questions du formulaire client et leur mapping |
| `docs/STACK-TECHNIQUE.md` | Stack, conventions de code, structure de fichiers |
| `docs/STRUCTURE-SITE.md` | Mapping réponses client → sections du site |
| `docs/PROMPT-V1.md` | Template du prompt pour générer la V1 |
| `docs/CHECKLIST-QA.md` | Checklist qualité avant envoi V1 et V2 |
| `docs/GOOGLE-DOC-CLIENT.md` | Structure du Google Doc de révision client (1 tab par section) |
| `README.md` | Carte du repo : rôle de chaque fichier et dossier |

## Mécanisme central : `lib/site-config.ts`

TOUT le contenu du site vit dans `lib/site-config.ts` : infos entreprise, SEO, CTA, coordonnées, navigation, et le contenu de chaque section. Les composants de `components/` lisent ce fichier — ils ne contiennent aucun texte client en dur.

- **Activer/retirer une section** : modifier `enabledSections` (selon Q17 + Q30). `HeroSection` et `ContactSection` sont toujours présentes.
- **Mode de la section contact** : `contact.goal` (`appeler` / `formulaire` / `rendezVous` / `infolettre`).
- Les placeholders `[À CONFIRMER : ...]` du config sont volontairement visibles : ils doivent tous être remplacés (ou signalés au client) avant l'envoi de la V1.

## ⚠️ RÈGLE CRITIQUE : composants refaits sur mesure à chaque site

**Les composants de section dans `components/` sont des EXEMPLES DE RÉFÉRENCE, pas des composants à réutiliser.** Chaque site client est tailor made : pour chaque nouveau site, **recoder chaque section sur mesure** (layout, design, hiérarchie visuelle, animations) selon l'identité du client (Q22 sites de référence, Q23 style visuel, Q24 à éviter, Q8 ton). Deux sites livrés ne doivent jamais se ressembler.

Ce qui se conserve d'un site à l'autre :
- Le **mécanisme** : `site-config.ts` (contenu), `enabledSections`, `contact.goal`, l'assemblage dans `page.tsx`
- L'**infrastructure** : `api/contact`, `lib/validations`, `lib/utils`, `globals.css` (structure des variables), `components/ui/` (primitives shadcn)
- Les **standards de qualité** : responsive, accessibilité, SEO, performance

Ce qui doit être refait à chaque site :
- **Tous les composants de section** (`hero-section.tsx`, `services-section.tsx`, etc.) : structure HTML, composition, traitement visuel
- Les composants existants servent uniquement à montrer le niveau de finition attendu et le contrat avec `site-config.ts` (quelles clés ils lisent)

L'agent doit garder cette règle en tête du début à la fin de la production : ne jamais livrer un site qui réutilise tel quel le design des composants du template.

## Règles d'or

1. **Stack imposée** : Next.js (App Router) + React + Tailwind CSS v4 + shadcn/ui + lucide-react. Rien d'autre sans raison.
2. **Une section = un composant** dans `components/` (ex. `hero-section.tsx`). `app/page.tsx` ne fait qu'assembler les sections. **Chaque composant de section est recodé sur mesure pour chaque client** — jamais réutilisé tel quel (voir RÈGLE CRITIQUE ci-dessus).
3. **Couleurs et identité du client** définies UNIQUEMENT via les variables CSS dans `app/globals.css` (`--primary`, `--accent`, `--dark`, etc.). Jamais de couleurs hardcodées dans les composants.
4. **Contenu réel d'abord** : utiliser les réponses du questionnaire mot pour mot quand elles sont bonnes, les réécrire en copywriting orienté conversion quand elles sont faibles. Jamais de lorem ipsum dans une V1 envoyée au client.
5. **Mobile-first** : chaque section doit être vérifiée en 375px, 768px et 1440px.
6. **Français par défaut** (Québec), sauf si le client a demandé bilingue ou anglais (Q5).
7. **CTA partout** : le bouton principal (Q31) apparaît dans la navbar, le hero et au minimum 2 autres sections.
8. **Performance** : images optimisées via `next/image`, pas de librairies lourdes, pas d'animations excessives.
9. **SEO de base** : metadata complète dans `layout.tsx` (title, description, OpenGraph), balises sémantiques (h1 unique, sections, alt sur images).
10. **Ne jamais inventer** de coordonnées, prix, témoignages ou certifications. Si l'info manque, mettre un placeholder visible `[À CONFIRMER : ...]` et le signaler.

## Workflow type dans Cursor

1. Recevoir le brief de production (réponses du questionnaire traitées par Claude — voir `docs/PROMPT-V1.md`).
2. Lire `docs/STRUCTURE-SITE.md` pour décider des sections (`enabledSections`) selon Q17 + objectif Q30.
3. Remplir `lib/site-config.ts` avec tout le contenu du brief (remplacer chaque `[À CONFIRMER]`).
4. Adapter `app/globals.css` (couleurs Q7, radius selon style Q23) et la police dans `app/layout.tsx` (Q25).
5. **Recoder chaque section sur mesure** selon la direction visuelle du client — les composants du template sont des références, pas des livrables (voir RÈGLE CRITIQUE).
6. Configurer `.env` à partir de `.env.example` (Resend + courriel destinataire) et tester le formulaire.
7. Passer `docs/CHECKLIST-QA.md` au complet.
8. Build sans erreur (`npm run build`), déployer la preview (Vercel).
9. Préparer le Google Doc de révision selon `docs/GOOGLE-DOC-CLIENT.md`.

## Référence visuelle

Le site Plania (repo `Plania-Website`) est la référence de qualité : structure one-page avec Navbar → Hero → Value Stack → Process → Portfolio → Guarantee → Testimonials → Contact → Team → FAQ → Footer. S'en inspirer pour le niveau de finition, pas pour copier le design — chaque client a sa propre identité.
