# Structure du site — mapping réponses → sections

Comment transformer les réponses du questionnaire en architecture de site. Format par défaut : **one-page** avec navigation par ancres. Multi-pages seulement si le contenu le justifie (8+ services détaillés, boutique, bilingue).

## Ordre des sections (one-page)

L'inclusion se contrôle dans `lib/site-config.ts` → `enabledSections` (valeurs : `services`, `promo`, `about`, `process`, `portfolio`, `testimonials`, `faq`). Navbar, Hero, Contact et Footer sont toujours rendus par `app/page.tsx`. Le contenu de chaque section se remplit dans la clé correspondante du config.

**Rappel tailor made** : les composants listés ci-dessous sont des références à recoder sur mesure pour chaque client (layout, design, traitement visuel uniques) — jamais réutilisés tels quels. Voir la RÈGLE CRITIQUE dans `cursor.md`.

| Ordre | Section | Clé config / composant | Inclure si | Contenu (source) |
|---|---|---|---|---|
| 1 | Navbar | `navigation` / `navbar.tsx` | Toujours | Logo (Q6), liens ancres, CTA principal (Q31) |
| 2 | Hero | `hero` / `hero-section.tsx` | Toujours | Headline (Q18+Q11), sous-titre (Q2), CTA (Q31), badges confiance (Q9), photo/visuel (Q26) |
| 3 | Services | `services` / `services-section.tsx` | Q17 inclut services (quasi toujours) | Cards par service (Q13), `featured: true` sur l'offre principale (Q14), `price` selon Q15 |
| 4 | Promotions | `promo` / `promo-section.tsx` | Q16 non vide | Offre limitée (Q16) avec CTA |
| 5 | À propos | `about` / `about-section.tsx` | Q17 inclut apropos | Histoire/équipe (Q2, Q9), photo équipe si dispo |
| 6 | Processus | `process` / `process-section.tsx` | Optionnel — utile pour services B2C (3-4 étapes) | Dérivé de Q13/Q2 (comment ça marche) |
| 7 | Portfolio | `portfolio` / `portfolio-section.tsx` | Q19 = oui (photos dans le Drive) | Grille de réalisations (Q19). Q19 = « plus tard » → structure avec placeholders |
| 8 | Témoignages | `testimonials` / `testimonials-section.tsx` | Q20 non vide | Témoignages réels (Q20). JAMAIS inventés |
| 9 | FAQ | `faq` / `faq-section.tsx` | Q21 non vide ou Q17 inclut faq | Accordion (Q21) |
| 10 | Contact / CTA final | `contact` + `contactSection` / `contact-section.tsx` | Toujours | Mode selon `contact.goal` = Q30 (voir ci-dessous), coordonnées (Q34) |
| 11 | Footer | `footer` / `footer.tsx` | Toujours | Logo, nav, coordonnées (Q34), réseaux sociaux (Q29 → `social`), copyright |

## La section Contact selon l'objectif (Q30)

Régler `contact.goal` dans `site-config.ts` :

| `contact.goal` (= Q30) | Section contact | CTA dominant |
|---|---|---|
| `appeler` | Gros numéro cliquable (`tel:`) + coordonnées | « Appelez-nous » |
| `formulaire` | Formulaire (champs Q32 — adapter `contact-form.tsx` + `lib/validations/contact.ts`) | Q31 |
| `rendezVous` | Embed Calendly/booking (`contact.bookingUrl` = Q33) ou bouton vers le lien | « Prendre rendez-vous » |
| `acheter` | Hors scope 1000 $ → lien vers boutique existante, ou flagger au vendeur (upsell e-commerce) | — |
| `infolettre` | Formulaire courriel simple | « S'inscrire » |

## Direction visuelle selon Q23

| Style choisi | Application |
|---|---|
| Épuré / minimaliste | Beaucoup de blanc, typo fine, peu de couleurs, sections aérées |
| Moderne / audacieux | Gros titres, contrastes forts, sections sombres, accents vifs |
| Chaleureux / humain | Tons naturels, coins arrondis, vraies photos, typo ronde |
| Luxueux / raffiné | Fond sombre/noir, accents or/métal, serif élégante, espace généreux |
| Coloré / dynamique | Couleurs franches, formes, énergie — sans surcharger |
| Confiance à l'équipe | Choisir selon l'industrie + le ton Q8 + les références Q22 |

Contraintes : Q24 (éléments à éviter) est **non négociable**. Q22 (sites de référence) guide le layout.

## Copywriting — règles

1. Headline hero = bénéfice client, pas le nom de l'entreprise. Formule : résultat (Q11 résolu) + zone (Q3) si local. Le message brut Q18 est la matière première.
2. Ton selon Q8 (max 3 descripteurs choisis) et type clientèle Q12 (B2B = vous + ROI ; B2C = direct + bénéfices concrets).
3. Textes client (Q28 = fournir) : reprendre tels quels, corriger seulement les fautes.
4. Q28 = équipe : rédiger tout le copy à partir de Q2, Q10, Q11, Q13.
5. Chaque section se termine idéalement par un CTA ou mène vers le suivant.
6. Français québécois professionnel, pas de traduction littérale de l'anglais.

## Cas bilingue (Q5)

Bilingue = structure `app/[locale]/` avec next-intl, FR par défaut, switch FR/EN dans la navbar. Prévoir les textes des deux langues dans le brief Claude avant de coder.
