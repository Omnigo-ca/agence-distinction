# Checklist qualité — avant envoi V1 et V2

Tout doit être coché avant d'envoyer un lien au client.

## Contenu

- [ ] Aucun `[À CONFIRMER]` restant dans `lib/site-config.ts` (sinon : signalé dans le Google Doc)
- [ ] `enabledSections` conforme aux sections demandées (Q17) et au contenu disponible
- [ ] Aucun lorem ipsum, aucun texte placeholder non marqué
- [ ] Tous les éléments incertains marqués `[À CONFIRMER : ...]` et listés dans le Google Doc
- [ ] Nom de l'entreprise exact partout (Q1)
- [ ] Coordonnées exactes (Q34) : téléphone cliquable `tel:`, courriel cliquable `mailto:`, adresse identique navbar/contact/footer
- [ ] Services tous présents avec les bons noms (Q13), offre principale en avant (Q14)
- [ ] Prix affichés conformes au choix du client (Q15)
- [ ] Témoignages = uniquement ceux fournis (Q20)
- [ ] Aucun fait, certification ou chiffre inventé
- [ ] Zéro faute de français (relire chaque section)
- [ ] Éléments à éviter (Q24) absents du site

## Conversion

- [ ] CTA principal (Q31) : navbar + hero + minimum 2 autres emplacements
- [ ] Le CTA mène à la bonne action (Q30) : tel / formulaire / rendez-vous / infolettre
- [ ] Formulaire de contact : bons champs (Q32), validation, message de succès, envoi courriel testé
- [ ] `.env` configuré (CONTACT_RECIPIENT_EMAIL, RESEND_API_KEY, RESEND_FROM_EMAIL) — localement ET dans Vercel
- [ ] Lien de rendez-vous fonctionnel (Q33) si applicable
- [ ] Liens réseaux sociaux fonctionnels (Q29), ouvrent dans un nouvel onglet

## Design et responsive

- [ ] **Site tailor made** : chaque section a été recodée sur mesure pour ce client — aucun composant du template réutilisé tel quel, le site ne ressemble pas aux autres sites livrés
- [ ] Vérifié en 375 px, 768 px, 1440 px — aucune section brisée
- [ ] Menu mobile fonctionnel (ouverture, fermeture, liens)
- [ ] Couleurs = palette client uniquement, via variables CSS
- [ ] Contraste texte/fond lisible partout (AA)
- [ ] Images nettes, bien cadrées, pas de déformation
- [ ] Cohérence des espacements entre sections

## Technique

- [ ] `npm run build` passe sans erreur ni warning
- [ ] Toutes les images via `next/image` avec `alt` descriptif
- [ ] Images compressées (pas de fichier > 300 Ko)
- [ ] Un seul `h1` (hero), hiérarchie h2/h3 logique
- [ ] Metadata : title `{Entreprise} | {Service} à {Région}`, description ~155 car., OpenGraph
- [ ] `lang="fr"` (ou selon Q5) dans `<html>`
- [ ] Favicon en place (logo client)
- [ ] Lighthouse mobile : Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 90
- [ ] Aucune erreur console au chargement
- [ ] Ancres de navigation : scroll fluide vers les bonnes sections

## Avant V2 spécifiquement

- [ ] 100 % des commentaires du Google Doc traités (ou justifiés si refusés)
- [ ] Récapitulatif des changements préparé pour le courriel d'envoi
- [ ] Re-passer les sections Contenu + Responsive ci-dessus sur les sections modifiées
