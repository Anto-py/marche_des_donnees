# Le marché aux données — Site vitrine

Site vitrine pour partager le jeu de cartes pédagogique "Le marché aux données" (Module 1, cours IA 6P) avec d'autres enseignants et formateurs.

## Contexte
- Auteur : Antonin Bareau, enseignant FES en 6e secondaire (CWB, Bruxelles)
- CV web : https://anto-py.github.io/WebCV/
- Jeu source : `Cours/IA 6P/Module 1 - Jeu/`

## Stack
- HTML/CSS/JS pur — zéro dépendance, zéro build
- Esthétique rétrofuturiste (charte via skill `/retrofuturisme_site`)
- Hébergement : GitHub Pages — repo https://github.com/Anto-py/marche_des_donnees
- Les PDFs lourds (`cartes-donnees.pdf`, `cartes-profils.pdf`, `manuel-enseignant.pdf`) sont déposés directement sur le repo GitHub dans `assets/downloads/`. Pas dupliqués dans OneDrive.

## Structure
- `index.html` — accueil (hero + qui je suis + esprit du jeu)
- `regles.html` — règles complètes des 3 manches
- `telechargements.html` — 3 liens de téléchargement
- `assets/css/style.css` — styles rétrofuturistes
- `assets/js/main.js` — interactions légères
- `assets/downloads/` — PDFs à télécharger

## Téléchargements
| Fichier | Statut |
|---|---|
| `cartes-donnees.pdf` | À uploader sur GitHub repo (`assets/downloads/`) depuis `Cours/IA 6P/Module 1 - Jeu/` |
| `cartes-profils.pdf` | À uploader sur GitHub repo (`assets/downloads/`) depuis `Cours/IA 6P/Module 1 - Jeu/` |
| `manuel-enseignant.pdf` | Généré via WeasyPrint depuis `sources/manuel-enseignant.html` (charte rétrofuturisme adaptée N&B) — à uploader sur GitHub repo |

## Contenu source
- Règles : `Cours/IA 6P/Module 1 - Jeu/Jeu - Le marché aux données.md`
- Manuel enseignant : `Cours/IA 6P/Module 1 - Jeu/Manuel enseignant - Le marché aux données.md`

## Instructions pour Claude
- Ne jamais révéler la M3 dans des documents ou pages destinés aux élèves — ici le site s'adresse aux enseignants, donc M3 incluse
- L'effet de la confiscation (M3) est le cœur pédagogique du jeu : le mettre en valeur dans la présentation
- Ton : chaleureux dans l'intro et l'esprit du jeu, sobre pour les règles et les téléchargements
- Après chaque modification, mettre à jour ce CLAUDE.md si nécessaire
