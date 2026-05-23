# SPECS — Le marché aux données

## Vue d'ensemble

Site statique HTML/CSS/JS, esthétique rétrofuturiste, destiné à des enseignants et formateurs souhaitant découvrir et télécharger le jeu de cartes pédagogique "Le marché aux données".

---

## Pages

### index.html — Accueil

**Section Hero**
- Titre : *Le marché aux données*
- Sous-titre : *Un jeu de cartes pour faire vivre l'économie des données*
- Bouton CTA : → Télécharger le jeu

**Section "Qui je suis"**
- 2-3 phrases : enseignant de Formation économique et sociale (FES) en 6e secondaire à Bruxelles (CWB), concepteur de ce jeu dans le cadre d'un cours annuel sur l'IA.
- Lien : "Mon CV" → https://anto-py.github.io/WebCV/ (nouvel onglet)

**Section "L'esprit du jeu"**
- Accroche : faire vivre ce que les plateformes font structurellement — pas l'expliquer.
- 3 points clés (format cards ou icônes) :
  - *Les données comme monnaie* — les élèves cèdent leurs données pour obtenir des services
  - *Le profilage comme business* — leurs données agrégées valent bien plus que ce qu'ils ont reçu
  - *La confiscation finale* — tout est repris pour entraîner une IA (révélation de fin)
- Format : toute la classe, 5 à 18 élèves, 30-45 min, matériel à imprimer réutilisable
- Citation mise en avant : *"L'élève qui a gagné le classement et se retrouve avec rien en M3 a vécu dans son corps ce que signifie 'si c'est gratuit, c'est toi le produit'."*

---

### regles.html — Règles du jeu

**Introduction**
- Rappel du format : 3 manches qui s'empilent, toute la classe autour d'une table

**Tableau vue d'ensemble des 3 manches**
(tiré du fichier `Jeu - Le marché aux données.md`, section 1)

**Matériel**
- Liste synthétique du kit complet à imprimer (cartes Données, Spéciales, Service IA, Profil, jetons)
- Tableau d'adaptation à l'effectif (5-18 élèves)

**Manche 1 — L'inscription**
- Principe (Uno), règle du tour, effets des cartes Spéciales, fin

**Manche 2 — Le ciblage**
- Principe (Rami/combos), deux versions A et B, fin

**Comptage des points**
- Formule : Services × 3 pts + Profils × 6 pts

**Manche 3 — La confiscation**
- Mise en scène, retournement, bascule vers le débrief

**Conseils d'animation** (synthèse du Manuel enseignant)
- Prise en main : faire une partie d'essai sans M3
- Tenir le rythme par manche
- Faire lire les cartes par les élèves

---

### telechargements.html — Téléchargements

3 blocs de téléchargement distincts :

| Fichier | Description | Format |
|---|---|---|
| `cartes-donnees.pdf` | Cartes Données à imprimer — 108 cartes (6 plateformes × 18 noms) | PDF |
| `cartes-profils.pdf` | Cartes Profil à imprimer — 48 cartes (16 profils × 3 exemplaires) | PDF |
| `manuel-enseignant.pdf` | Manuel complet de l'enseignant — règles + conseils d'animation | PDF (à générer) |

Note : inclure une indication de taille de fichier et un avertissement "fichiers lourds, impression couleur recommandée".

---

## Navigation

Menu collant (sticky) présent sur toutes les pages :
- Logo / titre cliquable → index.html
- Liens : Accueil · Règles · Télécharger

---

## Esthétique rétrofuturiste

Générer via skill `/retrofuturisme_site` avant de coder le CSS.

Principes attendus :
- Palette sombre (fond presque noir) + couleurs vives accent (orange-rouille, cyan)
- Typo monospace ou serif rétro pour les titres
- Effets scanline / CRT subtils
- Grilles et lignes géométriques dans le layout
- Boutons avec bords nets, style terminal

---

## Ton et registre

- **Hero / Qui je suis / Esprit du jeu** : chaleureux, passeur, envie de donner envie
- **Règles / Téléchargements** : sobre, précis, fonctionnel

---

## Contraintes techniques

- Aucune dépendance externe (pas de framework JS, pas de CDN)
- Polices : Google Fonts autorisé si chargement local (sinon polices système)
- Compatible mobile (responsive)
- Liens de téléchargement = balises `<a href="..." download>` (chemins relatifs vers `assets/downloads/`)
- PDFs hébergés directement sur le repo GitHub https://github.com/Anto-py/marche_des_donnees (site servi depuis ce repo)
- Pas de backend, pas de formulaire
