# PLAN — Le marché aux données

## Étapes

### 1. Charte graphique rétrofuturiste
- Invoquer `/retrofuturisme_site` pour générer la palette, la typographie et les composants CSS
- Produire `assets/css/style.css` à partir de la charte obtenue

### 2. Structure de fichiers
Créer l'arborescence :
```
marche_des_donnes/
├── index.html
├── regles.html
├── telechargements.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── downloads/                    ← vide en local ; PDFs uploadés directement sur le repo GitHub
```

### 3. Composants communs
- Navigation sticky (logo + 3 liens)
- Footer minimal (nom + lien CV)
- Variables CSS (couleurs, typo, espacements)

### 4. Page d'accueil (index.html)
- Hero avec titre + tagline + bouton CTA
- Section "Qui je suis" (bio courte + lien CV)
- Section "L'esprit du jeu" (3 cards + citation)

### 5. Page règles (regles.html)
- Tableau vue d'ensemble des 3 manches
- Matériel + tableau d'adaptation à l'effectif
- Règles M1, M2, Comptage, M3
- Synthèse des conseils d'animation

### 6. Manuel enseignant PDF
- Source HTML/CSS dans `sources/manuel-enseignant.html` (charte rétrofuturisme, version N&B-friendly)
- Génération via WeasyPrint → `assets/downloads/manuel-enseignant.pdf`
- Voir `sources/README.md` pour la commande de régénération

### 7. Page téléchargements (telechargements.html)
- 3 blocs de téléchargement (cartes-donnees, cartes-profils, manuel-enseignant)
- Indication de taille + avertissement impression

### 8. Upload des PDFs sur GitHub
- Pousser `cartes-donnees.pdf` et `cartes-profils.pdf` directement dans `assets/downloads/` du repo https://github.com/Anto-py/marche_des_donnees
- Pousser `manuel-enseignant.pdf` une fois généré (étape 6)
- Les liens dans `telechargements.html` utilisent des chemins relatifs `assets/downloads/xxx.pdf` (fonctionnent une fois le site servi depuis le repo)

### 9. Interactivité légère (main.js)
- Menu mobile (burger)
- Smooth scroll sur les ancres
- Effet hover sur les boutons de téléchargement

### 10. Tests et validation
- Vérifier les 3 pages sur navigateur (desktop + mobile)
- Vérifier les 3 liens de téléchargement
- Vérifier la navigation inter-pages

---

## Ordre recommandé

CSS → index.html → regles.html → telechargements.html → PDF manuel → copie fichiers → JS → tests

---

## À décider plus tard

- Hébergement (Netlify / Vercel / Hostinger)
- Nom de domaine éventuel
- Ajout d'un formulaire de contact ou non
