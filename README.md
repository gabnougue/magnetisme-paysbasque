# Magnétiseur Pays Basque

Site vitrine réalisé pour un praticien en magnétisme et soins énergétiques installé
à Saint-Pée-sur-Nivelle (Pyrénées-Atlantiques). Le besoin : une présence en ligne
professionnelle, référencée localement, permettant aux visiteurs de comprendre les
prestations proposées et de prendre contact directement.

![Page d'accueil du site](docs/screenshot.png)

**Site en ligne :** <https://magnetiseur-paysbasque.fr/>

## Stack technique

- **Next.js 15** (App Router) et **React 19**
- **TypeScript**
- **Tailwind CSS** pour les styles, **Framer Motion** pour les animations
- **React Hook Form** + **Zod** pour la validation des formulaires
- **Resend** pour l'envoi des emails de contact
- **Google Places API** pour la récupération des avis
- Déploiement **Vercel**

## Fonctionnalités

- Sept pages de contenu éditorial : accueil, présentation du praticien, techniques,
  tarifs, témoignages, FAQ et contact, plus les pages légales.
- Formulaire de contact avec validation côté client et serveur, transmis par email
  via une route API Next.js.
- Affichage des avis Google récupérés dynamiquement via une route API dédiée.
- Optimisation SEO local : métadonnées par page, Open Graph, données structurées
  Schema.org (LocalBusiness) et sitemap.
- Images optimisées automatiquement (formats AVIF/WebP) par le composant Image de Next.js.

## Déploiement

Hébergement sur **Vercel**, déploiement continu depuis la branche `main` du dépôt
GitHub. Les clés d'API et l'adresse de contact sont fournies par les variables
d'environnement Vercel (voir `.env.example` pour la liste attendue).

## Organisation du code

Tout le contenu éditorial du site (services, tarifs, techniques, FAQ, coordonnées)
est centralisé dans `src/lib/constants.ts`, qui fait office de source unique :
ajouter une prestation ou modifier un tarif ne demande aucune intervention dans
les composants.

Les composants sont répartis par rôle — `ui/` pour les briques réutilisables,
`layout/` pour l'en-tête et le pied de page, `sections/` pour les blocs de page,
`seo/` pour les données structurées.

Deux routes d'API : `/api/contact` (validation Zod puis envoi via Resend) et
`/api/google-reviews` (Google Places API v1, cache d'une heure, repli sur des
témoignages statiques en cas d'échec).

## Lancer le projet en local

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
```

Les clés d'API et l'adresse de contact se déclarent dans un fichier `.env.local`,
dont `.env.example` liste les variables attendues.
