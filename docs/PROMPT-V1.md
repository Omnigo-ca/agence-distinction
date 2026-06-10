# Prompt V1 — template

Processus en 2 temps : (A) Claude transforme les réponses brutes en **brief de production**, (B) le brief est collé dans Cursor pour générer la V1.

---

## A. Prompt Claude — réponses brutes → brief de production

À utiliser dans Claude (étape 7 du processus) avec le doc de réponses du client :

```
Tu es directeur de création web pour une agence québécoise. Voici les réponses
au questionnaire de conception d'un client qui a acheté un site vitrine à 1000 $.

Produis un BRIEF DE PRODUCTION structuré en suivant exactement ce format :

1. FICHE CLIENT
   - Entreprise, contact, régions desservies, langues du site

2. POSITIONNEMENT
   - Ce que fait l'entreprise (1 phrase)
   - Client idéal, problème résolu, type de clientèle (B2C/B2B)
   - Différenciateurs et preuves (certifications, expérience)

3. DIRECTION VISUELLE
   - Palette : codes hex précis (--primary, --accent, --dark, --background, --foreground)
   - Typographie recommandée (Google Fonts)
   - Style (selon réponse du client) + sites de référence + éléments à ÉVITER

4. ARCHITECTURE DU SITE
   - Liste ordonnée des sections à inclure (justifier les retraits/ajouts)

5. COPYWRITING PAR SECTION
   Pour chaque section : titres, sous-titres, textes complets, CTA.
   Hero : headline (max 10 mots, bénéfice client), sous-titre, texte du bouton.
   Services : nom + description (2-3 phrases) par service, prix si demandé.
   Témoignages/FAQ : reprendre le contenu fourni, reformuler si nécessaire.
   Ton : [ton Q8] pour une clientèle [Q12]. Français québécois professionnel.
   NE JAMAIS inventer de faits, prix, témoignages ou certifications.

6. CONVERSION
   - Objectif principal du site, CTA exact, champs du formulaire de contact,
     lien de prise de rendez-vous, coordonnées à afficher

7. MÉDIAS
   - Liens Drive fournis (logo, photos, portfolio), besoins en banque d'images

8. ÉLÉMENTS MANQUANTS
   - Liste de ce qui doit être demandé au client ou marqué [À CONFIRMER]

Voici les réponses du client :
[COLLER LES RÉPONSES ICI]
```

---

## B. Prompt Cursor — brief → V1

À coller dans Cursor, dans le repo cloné du template :

```
Lis cursor.md, docs/STACK-TECHNIQUE.md et docs/STRUCTURE-SITE.md, puis construis
la V1 complète du site de ce client à partir du brief de production ci-dessous.

Étapes attendues :
1. Remplis lib/site-config.ts au complet avec le brief : business, seo, cta,
   contact (goal selon section 6 du brief), navigation, enabledSections
   (selon section 4 du brief), et le contenu de chaque section activée
   (copywriting exact de la section 5 du brief). Remplace chaque [À CONFIRMER]
   couvert par le brief ; laisse les autres tels quels.
2. Mets à jour app/globals.css avec la palette du brief (section 3) et
   la police dans app/layout.tsx si différente de Geist.
3. Adapte les champs du formulaire de contact (contact-form.tsx +
   lib/validations/contact.ts) selon le brief (section 6).
4. RECODE CHAQUE COMPOSANT DE SECTION SUR MESURE (hero, services, etc.) :
   le site doit être tailor made. Les composants actuels de components/ sont
   des références (niveau de finition, clés de site-config lues) — NE LES
   RÉUTILISE PAS tels quels. Conçois un layout et un traitement visuel
   uniques à ce client, selon la direction visuelle du brief (section 3 :
   style, sites de référence, éléments à éviter). SectionWrapper et
   SectionHeading peuvent servir de base technique.
5. Utilise des placeholders next/image avec alt descriptifs pour les photos
   à venir du Drive.
6. Vérifie que npm run build passe sans erreur ni warning TypeScript.
7. Termine en listant ce qui reste à faire manuellement (photos à intégrer,
   [À CONFIRMER] restants, .env à configurer).

Respecte toutes les règles d'or de cursor.md. Mobile-first.

BRIEF DE PRODUCTION :
[COLLER LE BRIEF ICI]
```

---

## Après la génération

1. Intégrer les vrais médias (logo, photos compressées) depuis le Drive.
2. Vérifier visuellement chaque section en 375 / 768 / 1440 px.
3. Passer `docs/CHECKLIST-QA.md`.
4. Push → preview Vercel → préparer le Google Doc (`docs/GOOGLE-DOC-CLIENT.md`).
