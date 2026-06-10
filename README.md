# Template Plania — Sites web 1000 $

Template de départ pour la production de sites vitrines vendus 1000 $ (Omnigo × TechGuys). Chaque site client est un clone de ce repo : le contenu se remplit dans `lib/site-config.ts` à partir des réponses au questionnaire, et **les composants de section sont recodés sur mesure pour chaque client** (tailor made) — ceux du template sont des références, pas des livrables. Voir la RÈGLE CRITIQUE dans `cursor.md`.

## Démarrage

```bash
npm install
cp .env.example .env.local   # configurer Resend + courriel destinataire
npm run dev
npm run build                # doit passer sans erreur avant tout envoi
```

## Documentation — par où commencer

| Fichier | Rôle | Qui le lit |
|---|---|---|
| `cursor.md` | **Point d'entrée de l'agent IA.** Règles d'or, mécanisme `site-config.ts`, workflow de production | Cursor / Claude, dev |
| `docs/PROCESSUS.md` | Processus de vente et production complet en 11 étapes (questionnaire → facture → V1 → V2) | Toute l'équipe |
| `docs/QUESTIONNAIRE.md` | Les 36 questions du formulaire client (`form.omnigo/conception-site-web`), leur champ de données et leur usage en production | Dev, Claude |
| `docs/STACK-TECHNIQUE.md` | Stack (Next.js + Tailwind 4 + shadcn), structure de fichiers du repo, conventions de code, variables d'environnement | Dev, Cursor |
| `docs/STRUCTURE-SITE.md` | Mapping réponses client → sections du site (`enabledSections`), direction visuelle, règles de copywriting | Dev, Claude |
| `docs/PROMPT-V1.md` | Les 2 prompts prêts à coller : (A) Claude transforme les réponses en brief, (B) Cursor génère la V1 | Dev |
| `docs/CHECKLIST-QA.md` | Checklist qualité complète à passer avant chaque envoi V1/V2 | Dev |
| `docs/GOOGLE-DOC-CLIENT.md` | Structure du Google Doc de révision envoyé au client (1 onglet par section) | Dev, vendeur |

Ordre de lecture pour un nouveau membre : `PROCESSUS.md` → `cursor.md` → `STRUCTURE-SITE.md` → le reste au besoin.

## Structure du code

```
app/
  layout.tsx              ← SEO + font + lang (lit site-config)
  page.tsx                ← assemble les sections selon enabledSections
  globals.css             ← variables de design (couleurs client, radius, fonts)
  api/contact/route.ts    ← envoi du formulaire via Resend
components/               ← 1 section = 1 composant ; ui/ = shadcn
lib/
  site-config.ts          ← ★ TOUT le contenu du site — c'est ici qu'on personnalise
  validations/contact.ts  ← schéma zod du formulaire
docs/                     ← méthodologie (tableau ci-dessus)
```

## Produire un site client (résumé)

1. Réponses du questionnaire reçues + paiement → voir `docs/PROCESSUS.md` (étapes 4-6).
2. Claude : réponses → brief de production (`docs/PROMPT-V1.md`, prompt A).
3. Cloner ce repo → `site-{nom-client}`.
4. Cursor : brief → V1 (`docs/PROMPT-V1.md`, prompt B) — remplit `site-config.ts` + `globals.css`, et recode chaque section sur mesure.
5. Intégrer les médias du Drive, passer `docs/CHECKLIST-QA.md`, déployer la preview Vercel.
6. Envoyer preview + Google Doc de révision (`docs/GOOGLE-DOC-CLIENT.md`).
7. Commentaires → V2 → mise en ligne.
