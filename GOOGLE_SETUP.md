# Configuration des Avis Google

Ce guide vous explique comment intégrer les avis Google de votre établissement sur votre site.

## Étape 1 : Obtenir votre Place ID

### Méthode 1 : Via Google Maps

1. Ouvrez [Google Maps](https://www.google.com/maps)
2. Recherchez votre établissement : "Jean-Michel Nougué-Lecocq Saint-Pée-sur-Nivelle"
3. Cliquez sur votre établissement
4. L'URL de la page contient votre Place ID
   - Format de l'URL : `https://www.google.com/maps/place/?q=place_id:ChIJ...`
   - Le Place ID commence par `ChIJ`

### Méthode 2 : Outil Google

1. Allez sur [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Entrez l'adresse de votre établissement
3. Récupérez le Place ID

**Exemple de Place ID** : `ChIJrTLr-GyuEmsRBfy61i59si0`

## Étape 2 : Créer une clé API Google Places

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez l'API "Places API" :
   - Menu → APIs & Services → Library
   - Recherchez "Places API"
   - Cliquez sur "Enable"

4. Créez une clé API :
   - Menu → APIs & Services → Credentials
   - Cliquez sur "Create Credentials" → "API key"
   - Copiez la clé générée

5. **Sécurisez votre clé** (important !) :
   - Cliquez sur votre clé API
   - Sous "API restrictions", sélectionnez "Restrict key"
   - Cochez uniquement "Places API"
   - Sous "Application restrictions", ajoutez votre domaine
   - Sauvegardez

## Étape 3 : Configuration du site

1. Créez/modifiez le fichier `.env.local` :

```env
# Google Places API
GOOGLE_PLACES_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJXXXXXXXXXXXXXXXXXXXXXXXX
```

2. Redémarrez le serveur de développement :

```bash
npm run dev
```

## Étape 4 : Utiliser le composant GoogleReviews

### Dans la page des témoignages

Modifiez `src/app/temoignages/page.tsx` :

```tsx
import { GoogleReviews } from '@/components/sections/google-reviews';

export default function TemoignagesPage() {
  return (
    <>
      <Section background="gray">
        {/* ... */}
      </Section>

      {/* Avis Google */}
      <Section background="white">
        <SectionTitle center>Avis Google</SectionTitle>
        <SectionDescription center>
          Retrouvez les avis authentiques de nos clients sur Google
        </SectionDescription>

        <GoogleReviews
          placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}
          maxReviews={6}
        />
      </Section>
    </>
  );
}
```

### Dans la page d'accueil

Remplacez la section témoignages statiques par :

```tsx
<Section background="primary-light">
  <SectionTitle center>Ce que disent nos clients</SectionTitle>
  <GoogleReviews
    placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}
    maxReviews={3}
  />
</Section>
```

## Lien direct pour laisser un avis

Le composant `GoogleReviews` inclut automatiquement un bouton "Laisser un avis sur Google".

Vous pouvez aussi créer un lien direct :

```tsx
<a
  href={`https://search.google.com/local/writereview?placeid=${placeId}`}
  target="_blank"
  rel="noopener noreferrer"
>
  Laisser un avis
</a>
```

## Tarification Google Places API

- **Gratuit** : Jusqu'à 100 000 requêtes par mois
- Le composant utilise du cache (1 heure) pour limiter les appels API
- Pour un site vitrine, vous resterez largement dans le quota gratuit

## Alternatives sans API

Si vous ne souhaitez pas utiliser l'API Google :

### Option 1 : Widget Google (gratuit, mais moins personnalisable)

```html
<!-- Ajouter dans votre page -->
<script src="https://static.elfsight.com/platform/platform.js" async></script>
<div class="elfsight-app-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"></div>
```

### Option 2 : Saisie manuelle

Continuez d'utiliser le système actuel avec `TESTIMONIALS` dans `constants.ts`, mais ajoutez :
- Une note moyenne
- Un badge "Avis vérifiés Google"
- Un lien vers votre page Google

## Vérification

Une fois configuré, vérifiez que :

1. ✅ Les avis s'affichent correctement
2. ✅ Le bouton "Laisser un avis" redirige vers Google
3. ✅ Les photos de profil s'affichent
4. ✅ Les notes (étoiles) sont visibles

## Support

- [Documentation Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Obtenir un Place ID](https://developers.google.com/maps/documentation/places/web-service/place-id)
- [Gérer les avis Google My Business](https://support.google.com/business/answer/3474122)
