# Processus — Site web 1000 $

Processus complet, du premier contact à la livraison V2. Objectif : délai court, zéro rencontre obligatoire, production assistée par IA.

## Vue d'ensemble

```
Questionnaire court (courriel) → Form complet + facture → Paiement →
Projet Asana + Drive → Traitement Claude → V1 dans Cursor →
Google Doc révision → Commentaires client → V2 → Livraison
```

## Étapes détaillées

### 1. Réception du questionnaire initial
Le client nous fait parvenir le questionnaire court par courriel (lead entrant).

### 2. Réponse du vendeur
Le vendeur répond au client avec :
- Le lien vers le **formulaire complet** : `form.omnigo` → page `/conception-site-web` (36 questions, ~20-30 min)
- La **facture** (1000 $)

Mentionner au client : le formulaire peut être rempli à la voix (micro intégré), et plus ses réponses sont détaillées, plus le site sera fidèle du premier coup.

### 3. Le client remplit et soumet le formulaire
Les réponses arrivent par courriel via l'API `send-conception-site-web`.

### 4. Réception réponses + paiement → création du projet
Quand LES DEUX sont reçus (réponses + paiement) :
- Créer le projet via le **template Asana**, dans le **portefeuille dédié aux sites 1000 $** (PAS dans le portefeuille « Projets clients » régulier).

### 5. Création du Drive client
Créer le dossier Drive du client (même convention de nommage que les autres clients).

### 6. Dépôt du doc de réponses
Déposer dans le Drive un document avec toutes les réponses au formulaire.
**Important** : ces infos servent aussi plus tard pour le retargeting (upsell marketing, Google Ads, SEO, etc.). Ne pas les perdre.

### 7. Traitement des réponses dans Claude
Envoyer les réponses brutes à Claude pour produire le **brief de production structuré** :
- Nettoyage / reformulation des réponses faibles
- Choix des sections (selon Q17 + Q30)
- Copywriting de chaque section (headline, sous-titres, CTA)
- Palette de couleurs et direction visuelle
- Liste des éléments manquants à demander au client

### 8. Création de la V1 dans Cursor
- Cloner ce template (`template-plania-websites`)
- Coller le brief dans Cursor en suivant `docs/PROMPT-V1.md`
- Suivre les règles de `cursor.md` et la méthodologie `docs/STRUCTURE-SITE.md`
- Passer `docs/CHECKLIST-QA.md`
- Déployer la preview (Vercel)

### 9. Envoi de la V1 au client
Envoyer au client :
- Le **lien de la preview**
- Le **Google Doc structuré** (1 tab par section du site — voir `docs/GOOGLE-DOC-CLIENT.md`)
- Consigne claire : « Laissez vos commentaires directement dans le doc, section par section, pour la V2. »

Donner un délai de réponse (ex. 5 jours ouvrables) pour garder le projet en mouvement.

### 10. Réception des commentaires → modifications
- Lire tous les commentaires du Google Doc
- Appliquer les modifications dans Cursor
- Re-passer la checklist QA

### 11. Envoi de la V2
Renvoyer la preview mise à jour. La V2 est normalement la version finale (le forfait 1000 $ inclut 1 ronde de révisions). Ensuite : mise en ligne (domaine Q35), fermeture du projet Asana, et déclencher la réflexion retargeting/upsell avec les infos du dossier Drive.

## Rôles

| Étape | Responsable |
|---|---|
| 1-3 | Vendeur |
| 4-6 | Vendeur ou PM |
| 7-8 | Développeur (Claude + Cursor) |
| 9-11 | Développeur (envois) / Vendeur (relation client) |
