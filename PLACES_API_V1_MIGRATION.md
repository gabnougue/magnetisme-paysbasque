# 🔄 Migration vers Places API (New) v1

## Vue d'ensemble

Ce projet utilise maintenant la **nouvelle Places API (v1)**, l'API moderne de Google pour les données de lieux.

### Pourquoi migrer ?

- ✅ **API moderne** : Architecture REST moderne avec support JSON
- ✅ **Meilleures performances** : Endpoints optimisés et cache amélioré
- ✅ **Fonctionnalités avancées** : Support des résumés d'avis IA, données d'accessibilité
- ✅ **Support à long terme** : L'ancienne API sera dépréciée progressivement
- ✅ **Données plus riches** : Plus de détails sur les lieux et avis

## Changements techniques

### 1. Endpoint API

**Avant (Legacy API):**
```
https://maps.googleapis.com/maps/api/place/details/json?place_id={placeId}&key={apiKey}
```

**Après (New API v1):**
```
https://places.googleapis.com/v1/places/{placeId}
```

### 2. Authentification

**Avant:**
```javascript
// Clé API en query parameter
const url = `...?key=${apiKey}`;
```

**Après:**
```javascript
// Clé API en header
headers: {
  'X-Goog-Api-Key': apiKey,
  'X-Goog-FieldMask': 'id,displayName,rating,reviews'
}
```

### 3. Structure de réponse

**Avant (Legacy):**
```json
{
  "result": {
    "name": "Jean-Michel Nougué-Lecocq",
    "rating": 4.8,
    "user_ratings_total": 42,
    "reviews": [
      {
        "author_name": "Marie L.",
        "rating": 5,
        "text": "Excellent...",
        "profile_photo_url": "https://...",
        "relative_time_description": "il y a 2 mois"
      }
    ]
  }
}
```

**Après (New API v1):**
```json
{
  "name": "places/ChIJLxhLyEIXUQ0RK3r5wx8PaA4",
  "id": "ChIJLxhLyEIXUQ0RK3r5wx8PaA4",
  "displayName": {
    "text": "Jean-Michel Nougué-Lecocq",
    "languageCode": "fr"
  },
  "rating": 4.8,
  "userRatingCount": 42,
  "reviews": [
    {
      "name": "places/.../reviews/...",
      "relativePublishTimeDescription": "il y a 2 mois",
      "rating": 5,
      "text": {
        "text": "Excellent...",
        "languageCode": "fr"
      },
      "authorAttribution": {
        "displayName": "Marie L.",
        "uri": "https://www.google.com/maps/contrib/...",
        "photoUri": "https://lh3.googleusercontent.com/..."
      },
      "publishTime": "2024-08-15T10:30:00Z"
    }
  ]
}
```

### 4. Mapping des champs

Notre API route transforme automatiquement la nouvelle structure vers l'ancienne pour compatibilité :

| Legacy API | New API v1 | Transformation |
|------------|------------|----------------|
| `name` | `displayName.text` | ✅ |
| `rating` | `rating` | ✅ |
| `user_ratings_total` | `userRatingCount` | ✅ |
| `reviews[].author_name` | `reviews[].authorAttribution.displayName` | ✅ |
| `reviews[].profile_photo_url` | `reviews[].authorAttribution.photoUri` | ✅ |
| `reviews[].text` | `reviews[].text.text` | ✅ |
| `reviews[].relative_time_description` | `reviews[].relativePublishTimeDescription` | ✅ |

## Configuration requise

### 1. Activer la nouvelle API dans Google Cloud Console

1. Aller sur [Google Cloud Console](https://console.cloud.google.com/)
2. Sélectionner votre projet
3. Menu → **APIs & Services** → **Library**
4. Chercher **"Places API (New)"**
5. Cliquer sur **ENABLE**
6. Attendre 1-2 minutes

⚠️ **Important** : L'ancienne "Places API" et la nouvelle "Places API (New)" sont deux APIs différentes !

### 2. Vérifier les restrictions de la clé API

1. Menu → **APIs & Services** → **Credentials**
2. Cliquer sur votre clé API
3. Sous **"API restrictions"** :
   - Cocher **"Restrict key"**
   - Cocher **"Places API (New)"** (pas l'ancienne)
4. Cliquer **SAVE**

### 3. Variables d'environnement

Les variables restent identiques :

```env
# .env.local
GOOGLE_MAPS_API_KEY=votre_clé_api
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJLxhLyEIXUQ0RK3r5wx8PaA4
```

## Fichiers modifiés

### 1. API Route (`src/app/api/google-reviews/route.ts`)

- ✅ Nouvel endpoint : `https://places.googleapis.com/v1/places/{placeId}`
- ✅ Headers : `X-Goog-Api-Key` et `X-Goog-FieldMask`
- ✅ Typage TypeScript complet
- ✅ Transformation automatique vers structure legacy
- ✅ Gestion d'erreur améliorée

### 2. Composant (`src/components/sections/google-reviews.tsx`)

- ✅ Types TypeScript mis à jour
- ✅ Affichage de la note moyenne globale
- ✅ Badge avec nombre total d'avis
- ✅ Compatible avec les données transformées

### 3. Documentation

- ✅ `.env.example` : Documentation des variables
- ✅ `PLACES_API_V1_MIGRATION.md` : Guide de migration (ce fichier)

## Test de l'intégration

### 1. Redémarrer le serveur

```bash
npm run dev
```

### 2. Tester l'API directement

Ouvrir dans le navigateur :
```
http://localhost:3000/api/google-reviews?placeId=ChIJLxhLyEIXUQ0RK3r5wx8PaA4
```

**Réponse attendue :**
```json
{
  "name": "Jean-Michel Nougué-Lecocq",
  "rating": 4.8,
  "user_ratings_total": 42,
  "reviews": [...]
}
```

### 3. Vérifier les pages

- **Page d'accueil** : http://localhost:3000
- **Page témoignages** : http://localhost:3000/temoignages

Vous devriez voir :
- ✅ Badge avec note moyenne et nombre d'avis
- ✅ Liste des avis avec photos
- ✅ Bouton "Laisser un avis sur Google"

## Résolution de problèmes

### Erreur : "Places API (New) has not been used"

**Cause** : L'API n'est pas activée dans Google Cloud Console

**Solution** :
1. Aller sur [Google Cloud Console](https://console.cloud.google.com/)
2. Activer **"Places API (New)"** (pas l'ancienne)
3. Attendre 2-5 minutes
4. Redémarrer le serveur : `npm run dev`

### Erreur : "PERMISSION_DENIED"

**Cause** : Les restrictions de la clé API bloquent la nouvelle API

**Solution** :
1. Google Cloud Console → **Credentials**
2. Vérifier que **"Places API (New)"** est autorisée
3. Retirer l'ancienne "Places API" si elle est cochée
4. Sauvegarder et attendre 2 minutes

### Erreur : "Field mask is required"

**Cause** : Le header `X-Goog-FieldMask` est manquant

**Solution** : Vérifier que le code de l'API route contient :
```typescript
headers: {
  'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews'
}
```

## Nouvelles fonctionnalités disponibles

La nouvelle API v1 offre des fonctionnalités additionnelles que vous pouvez activer :

### 1. Résumés d'avis IA

Ajoutez `reviews.summaries` au FieldMask :
```typescript
'X-Goog-FieldMask': 'id,displayName,rating,reviews,reviews.summaries'
```

### 2. Données d'accessibilité

Ajoutez `accessibilityOptions` :
```typescript
'X-Goog-FieldMask': 'id,displayName,accessibilityOptions'
```

### 3. Photos haute résolution

La nouvelle API retourne des URLs de photos en meilleure qualité.

## Coûts et quotas

### Tarification

La nouvelle API utilise un modèle de tarification par SKU :

- **Basic Data** (id, displayName) : Gratuit
- **Contact Data** : $0.003 / requête
- **Atmosphere Data (reviews)** : $0.005 / requête

### Quota gratuit

- **$200/mois gratuits** (crédit Google Maps Platform)
- **Avec cache 1h** : ~720 requêtes/mois = ~$3.60/mois
- **Conclusion** : Reste dans le quota gratuit ✅

### Optimisation

Notre configuration utilise :
- ✅ Cache de 1 heure (Next.js `revalidate: 3600`)
- ✅ Seulement les champs nécessaires dans le FieldMask
- ✅ Limite de 3-6 avis affichés

## Ressources

- [Places API (New) - Documentation officielle](https://developers.google.com/maps/documentation/places/web-service/op-overview)
- [Migration Guide](https://developers.google.com/maps/documentation/places/web-service/migrate)
- [REST Reference](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places)
- [Pricing](https://mapsplatform.google.com/pricing/)

## Support

En cas de problème, vérifiez :
1. ✅ Places API (New) activée dans Google Cloud Console
2. ✅ Facturation activée (même pour quota gratuit)
3. ✅ Restrictions API correctement configurées
4. ✅ Serveur redémarré après modification `.env.local`

---

✅ **Migration terminée !** Votre site utilise maintenant la nouvelle Places API (v1).
