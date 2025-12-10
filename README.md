# Maison Perla - Site Web

Site web officiel de Maison Perla, agence d'organisation d'événements et wedding planning.

## Description

Ce projet est le site vitrine de Maison Perla, une agence spécialisée dans l'organisation de mariages et d'événements sur mesure. Le site présente les services de l'agence, l'équipe fondatrice et permet aux clients potentiels d'entrer en contact.

## Technologies utilisées

- **React 19** - Bibliothèque JavaScript pour la construction d'interfaces utilisateur
- **Vite** - Outil de build moderne et rapide
- **React Router DOM** - Gestion du routage côté client
- **EmailJS** - Service d'envoi d'emails depuis le formulaire de contact
- **CSS3** - Styles personnalisés avec variables CSS et animations

## Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar/         # Barre de navigation
│   └── SocialLinks/    # Liens réseaux sociaux
├── pages/              # Pages de l'application
│   ├── Home/           # Page d'accueil avec hero vidéo
│   └── Contact/        # Page de contact avec formulaire
├── styles/             # Styles globaux et variables CSS
├── App.jsx             # Composant principal et routage
└── main.jsx            # Point d'entrée de l'application

public/
└── assets/             # Ressources statiques (images, vidéos, logos)
```

## Installation

1. Cloner le dépôt
```bash
git clone https://github.com/[username]/maison-perla-site-web.git
cd maison-perla-site-web
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer EmailJS (optionnel, pour le formulaire de contact)
   - Créer un compte sur [EmailJS](https://www.emailjs.com/)
   - Modifier les clés dans `src/pages/Contact/Contact.jsx`

4. Lancer le serveur de développement
```bash
npm run dev
```

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Génère la version de production
- `npm run preview` - Prévisualise la version de production

## Configuration EmailJS

Pour activer le formulaire de contact, remplacer les valeurs suivantes dans `src/pages/Contact/Contact.jsx` :

```javascript
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY'
}
```

## Fonctionnalités

- Page d'accueil avec vidéo en arrière-plan et effet de filtre
- Navigation responsive avec menu hamburger sur mobile
- Page de contact avec formulaire EmailJS
- Cartes de contact pour les fondatrices
- Liens vers les réseaux sociaux (Instagram, TikTok, Pinterest, Facebook)
- Design adaptatif pour tous les écrans
- Animations fluides et transitions élégantes

## Charte graphique

- **Rose principal** : #F42D7A
- **Crème** : #FBF7EE
- **Texte foncé** : #304254
- **Polices** : Great Vibes, Cormorant Garamond, Montserrat

## Auteur

Projet développé pour Maison Perla Events.

## Licence

Tous droits réservés - Maison Perla
