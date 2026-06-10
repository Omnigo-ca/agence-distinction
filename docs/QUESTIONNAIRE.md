# Questionnaire de conception — 36 questions

Source : `formulaire_omnigo` → page `/conception-site-web`. Les réponses arrivent par courriel. Ce document liste chaque question, son champ de données, et comment l'utiliser en production.

## Section 0 — Coordonnées

| # | Champ | Question | Usage |
|---|---|---|---|
| — | `contactNom` | Nom du contact | Communication client |
| — | `contactEmail` | Courriel | Communication + section Contact si Q34 vide |
| — | `contactTelephone` | Téléphone | Idem |
| Q1 | `contactEntreprise` | Nom légal ou commercial de l'entreprise | Logo texte, title SEO, footer |

## Section 1 — Votre entreprise

| # | Champ | Question | Usage |
|---|---|---|---|
| Q2 | `descriptionEntreprise` | Description de l'entreprise + différenciateurs | Hero, À propos, meta description |
| Q3 | `regionsServices` | Villes/régions desservies | SEO local (title, h1, contenu), section Contact |
| Q4 | `siteActuel` | Site actuel + éléments à conserver | Contraintes de design, contenu à reprendre |
| Q5 | `languesSite` (+`languesSiteAutre`) | Langues du site — choix : français seulement / anglais seulement / bilingue / autre | Architecture i18n (bilingue = next-intl ou pages dupliquées) |

## Section 2 — Identité de marque

| # | Champ | Question | Usage |
|---|---|---|---|
| Q6 | `logo` + `logoLienDepot` | Logo (description + lien Drive) | Navbar, footer, favicon. Pas de logo → logo texte propre |
| Q7 | `couleursMarque` | Couleurs officielles (codes hex ou description) | Variables CSS dans `globals.css` |
| Q8 | `tonMarque` (+`tonMarqueAutre`) | Ton de communication (max 3) — professionnel, chaleureux, dynamique, luxueux, simple, innovant, local, inspirant, autre | Direction du copywriting de TOUT le site |
| Q9 | `certifications` | Certifications, prix, années d'expérience | Badges de confiance (hero, value stack, footer) |

## Section 3 — Clientèle cible

| # | Champ | Question | Usage |
|---|---|---|---|
| Q10 | `clientIdeal` | Description du client idéal | Angle du copywriting, choix des images |
| Q11 | `problemePrincipal` | Problème principal résolu | Headline hero (problème → solution) |
| Q12 | `typeClientele` | B2C / B2B / les deux | Ton (tu/vous), arguments (prix vs ROI) |

## Section 4 — Offres (services & produits)

| # | Champ | Question | Usage |
|---|---|---|---|
| Q13 | `servicesProduits` | Liste des services/produits + descriptions | Section Services (cards) |
| Q14 | `offrePrincipale` | Offre principale à mettre en avant | Premier service listé / mis en valeur visuellement, mention hero |
| Q15 | `affichagePrix` | Afficher les prix ? — oui / non (devis) / fourchette | Affichage ou non des prix sur les cards services |
| Q16 | `promotions` | Promotions / offres limitées | Bannière promo ou section Promotions |

## Section 5 — Structure et contenu

| # | Champ | Question | Usage |
|---|---|---|---|
| Q17 | `sectionsSouhaitees` | Sections souhaitées — accueil, services, à propos, portfolio, témoignages, promotions, FAQ, contact | **Architecture du site** (voir STRUCTURE-SITE.md) |
| Q18 | `messageAccueil` | Message clé à retenir en 5 secondes | **Headline du hero** (base brute, à raffiner) |
| Q19 | `portfolioDisponibilite` + `portfolioLienDepot` | Réalisations/photos de projets (oui / non / plus tard) + lien Drive | Section Portfolio (ou retirer si non) |
| Q20 | `temoignages` | Témoignages clients (texte + prénom) ou lien fiche Google | Section Témoignages. Jamais en inventer |
| Q21 | `faq` | 3-5 questions fréquentes | Section FAQ (accordion). Compléter les réponses manquantes à valider par le client |

## Section 6 — Design et direction visuelle

| # | Champ | Question | Usage |
|---|---|---|---|
| Q22 | `sitesReference` | 1-3 sites aimés + pourquoi | Inspiration layout/ambiance |
| Q23 | `styleVisuel` | Style — épuré / moderne audacieux / chaleureux / luxueux / coloré / confiance à l'équipe | Direction artistique globale |
| Q24 | `elementsEviter` | Éléments/couleurs à éviter | **Contraintes dures** — à respecter absolument |
| Q25 | `typographie` | Police existante | `--font-sans` dans globals.css. Vide → recommandation (Google Fonts) |

## Section 7 — Contenu et médias

| # | Champ | Question | Usage |
|---|---|---|---|
| Q26 | `photosProfessionnelles` + `photosLienDepot` | Photos pro (oui / banque d'images / mélange) + lien Drive | Photos client prioritaires ; sinon banque d'images cohérente |
| Q27 | `videos` + `videosDetails` | Vidéos à intégrer (oui / non / plus tard) | Embed YouTube/Vimeo (lazy load) |
| Q28 | `textesPretes` + `textesDetails` | Textes fournis / équipe s'en charge / ébauches | Fournis = reprendre tel quel (corriger fautes). Équipe = copywriting complet par Claude |
| Q29 | `reseauxSociaux` | Liens réseaux sociaux | Icônes footer + section Contact |

## Section 8 — Objectifs et appel à l'action

| # | Champ | Question | Usage |
|---|---|---|---|
| Q30 | `objectifPrincipal` | Objectif du site — appeler / formulaire / rendez-vous / acheter / infolettre / autre | **Détermine le CTA principal et la conversion de tout le site** |
| Q31 | `texteBoutonPrincipal` | Texte du bouton principal | CTA exact (navbar, hero, sections) |
| Q32 | `champsFormulaire` (+`champsFormulaireAutre`) | Champs du formulaire de contact — nom, courriel, téléphone, ville, type de service, message, disponibilités, budget, autre | Formulaire de la section Contact |
| Q33 | `lienRendezVous` | Lien outil de rendez-vous (Calendly, etc.) | Embed ou lien CTA si objectif = rendez-vous |
| Q34 | `coordonneesAffichage` | Téléphone, courriel, adresse à afficher | Section Contact + footer (NAP cohérent pour SEO local) |
| Q35 | `nomDomaine` | Domaine existant + fournisseur | Mise en ligne (étape 11) |
| Q36 | `autresInfos` | Espace libre | Lire attentivement — souvent des contraintes importantes |

## Réponses faibles ou manquantes

- Réponse vide sur une question critique (Q2, Q13, Q30) → demander au client AVANT de produire la V1.
- Réponse vide sur une question secondaire → décision raisonnable par défaut + noter dans le Google Doc de révision.
- Réponse faible mais présente → reformuler en copywriting pro, en gardant les faits exacts.
