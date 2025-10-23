# Site Vitrine - Jean-Michel Nougué-Lecocq

Site web moderne pour Jean-Michel Nougué-Lecocq, magnétiseur et accompagnateur au changement à Saint-Pée-sur-Nivelle.

## Technologies utilisées

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** (animations)
- **React Hook Form** + **Zod** (formulaires)
- **Resend** (envoi d'emails)

## Fonctionnalités

✅ Design moderne, fluide et responsive (mobile-first)
✅ Palette de couleurs apaisante (vert, beige, bleu)
✅ Navigation sticky avec menu mobile
✅ 5 pages complètes : Accueil, Qui suis-je, Témoignages, Tarifs, Contact
✅ Formulaire de contact fonctionnel avec validation
✅ Animations et transitions douces
✅ Optimisé SEO (metadata, Open Graph)
✅ Images optimisées (Next.js Image)
✅ Code modulaire et maintenable

## Installation

### Prérequis

- Node.js 18+
- npm ou yarn

### Étapes

1. **Installer les dépendances**

```bash
npm install
```

2. **Configurer les variables d'environnement**

Créez un fichier `.env.local` à la racine du projet :

```env
# Resend API Key (optionnel - pour l'envoi d'emails)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Email de destination pour le formulaire de contact
CONTACT_EMAIL=gabnougue@gmail.com

# Configuration du site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Jean-Michel Nougué-Lecocq - Magnétiseur"
```

> **Note** : Le formulaire de contact fonctionnera en mode "test" sans configuration Resend (les messages seront loggés dans la console). Pour activer l'envoi réel d'emails, configurez une clé API Resend.

3. **Lancer le serveur de développement**

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Scripts disponibles

```bash
npm run dev      # Lancer le serveur de développement
npm run build    # Créer un build de production
npm run start    # Lancer le serveur de production
npm run lint     # Vérifier le code avec ESLint
```

## Structure du projet

```
new-site/
├── src/
│   ├── app/                  # Pages Next.js (App Router)
│   │   ├── page.tsx          # Page d'accueil
│   │   ├── qui-suis-je/      # Page Qui suis-je
│   │   ├── temoignages/      # Page Témoignages
│   │   ├── tarifs/           # Page Tarifs
│   │   ├── contact/          # Page Contact
│   │   ├── api/contact/      # API route pour le formulaire
│   │   ├── layout.tsx        # Layout racine
│   │   └── globals.css       # Styles globaux
│   ├── components/
│   │   ├── ui/               # Composants UI (Button, Card, Section...)
│   │   ├── layout/           # Header, Footer
│   │   └── sections/         # Sections réutilisables
│   └── lib/
│       ├── constants.ts      # Données du site
│       └── utils.ts          # Utilitaires
├── public/
│   └── images/               # Images statiques
├── tailwind.config.ts        # Configuration Tailwind
├── next.config.ts            # Configuration Next.js
└── package.json
```

## Personnalisation

### Modifier les contenus

Les données du site sont centralisées dans `src/lib/constants.ts` :

- Informations de contact
- Services proposés
- Compétences et techniques
- Témoignages
- Tarifs

### Modifier les couleurs

Les couleurs sont définies dans `tailwind.config.ts` :

```ts
colors: {
  primary: { ... },    // Vert principal
  secondary: { ... },  // Beige/terre
  accent: { ... },     // Bleu doux
}
```

### Ajouter des pages

1. Créer un dossier dans `src/app/`
2. Ajouter un fichier `page.tsx`
3. Mettre à jour la navigation dans `src/lib/constants.ts` (NAV_LINKS)

## Configuration de Resend (envoi d'emails)

1. Créer un compte sur [resend.com](https://resend.com)
2. Obtenir une clé API
3. Ajouter la clé dans `.env.local` : `RESEND_API_KEY=re_xxxxx`
4. Configurer votre domaine dans Resend
5. Mettre à jour l'email "from" dans `src/app/api/contact/route.ts`

## Configuration des Avis Google (optionnel)

Le site peut afficher automatiquement vos avis Google et permettre aux visiteurs de laisser un avis.

### Configuration rapide

1. **Obtenir votre Place ID Google** :
   - Recherchez votre établissement sur [Google Maps](https://www.google.com/maps)
   - L'URL contient votre Place ID (commence par `ChIJ`)

2. **Créer une clé API Google Places** :
   - Allez sur [Google Cloud Console](https://console.cloud.google.com/)
   - Activez l'API "Places API"
   - Créez une clé API
   - **Important** : Restreignez la clé à "Places API" uniquement

3. **Configurer les variables d'environnement** :
   ```env
   GOOGLE_PLACES_API_KEY=AIzaSyXXXXXXXXX
   NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJXXXXXXXXXXX
   ```

4. **Redémarrer le serveur** : `npm run dev`

📖 **Guide complet** : Consultez [GOOGLE_SETUP.md](./GOOGLE_SETUP.md) pour les instructions détaillées.

### Fonctionnalités

✅ Affichage automatique des avis Google
✅ Bouton "Laisser un avis sur Google"
✅ Cache intelligent (1h) pour limiter les appels API
✅ Gratuit jusqu'à 100 000 requêtes/mois
✅ Fallback sur témoignages manuels si non configuré

## Déploiement

### Vercel (recommandé)

1. Pusher le code sur GitHub
2. Connecter le repo à Vercel
3. Ajouter les variables d'environnement
4. Déployer

### Autres plateformes

Le site peut être déployé sur n'importe quelle plateforme supportant Next.js :
- Netlify
- AWS Amplify
- Railway
- Render

## Optimisations SEO

- Metadata configurée pour chaque page
- Balises Open Graph pour les réseaux sociaux
- Images optimisées avec Next.js Image
- Structure HTML sémantique
- Sitemap automatique (Next.js)

## Support

Pour toute question ou problème :
- Consulter la [documentation Next.js](https://nextjs.org/docs)
- Consulter la [documentation Tailwind CSS](https://tailwindcss.com/docs)

## Licence

Projet privé - Tous droits réservés

---

**Développé avec Next.js 15, React 19 et TailwindCSS**
