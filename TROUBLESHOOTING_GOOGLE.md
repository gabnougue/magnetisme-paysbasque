# Résolution des erreurs Google Places API

## Erreur : `REQUEST_DENIED`

Cette erreur signifie que Google refuse votre requête. Voici comment la résoudre :

### Solution 1 : Vérifier que l'API Places est activée

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Sélectionnez votre projet
3. Menu → **APIs & Services** → **Library**
4. Recherchez **"Places API"** (PAS "Places API (New)")
5. Cliquez dessus
6. Vérifiez qu'il y a écrit **"API enabled"** (en vert)
7. Si ce n'est pas le cas, cliquez sur **"ENABLE"**

⚠️ **Important** : Activez bien **"Places API"** et PAS "Places API (New)" !

### Solution 2 : Vérifier les restrictions de la clé API

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Menu → **APIs & Services** → **Credentials**
3. Cliquez sur votre clé API
4. Vérifiez les sections suivantes :

#### A. Application restrictions
- **Pour développement local** : Sélectionnez **"None"**
- **Pour production** : Ajoutez votre domaine

#### B. API restrictions
- Sélectionnez **"Restrict key"**
- Cochez uniquement **"Places API"**
- Cliquez sur **"Save"**

### Solution 3 : Vérifier la clé API

1. Ouvrez votre fichier `.env.local`
2. Vérifiez que la clé API :
   - N'a pas d'espaces avant/après
   - Est bien copiée en entier
   - Commence bien par `AIzaSy`

```env
# ✅ Bon
GOOGLE_PLACES_API_KEY=AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxx

# ❌ Mauvais (espace)
GOOGLE_PLACES_API_KEY= AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxx

# ❌ Mauvais (guillemets)
GOOGLE_PLACES_API_KEY="AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### Solution 4 : Activer la facturation (requis)

Google Places API nécessite un compte de facturation actif, **même pour le quota gratuit**.

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Menu → **Billing**
3. Cliquez sur **"Link a billing account"**
4. Suivez les étapes pour ajouter une carte bancaire

⚠️ **Rassurez-vous** :
- Les 100 000 premières requêtes/mois sont **GRATUITES**
- Votre site fera ~720 requêtes/mois avec le cache
- Vous pouvez définir un budget de 0€ pour éviter tout dépassement

### Solution 5 : Régénérer la clé API

Si rien ne fonctionne :

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Menu → **APIs & Services** → **Credentials**
3. Créez une **nouvelle** clé API
4. Copiez-la immédiatement
5. Mettez à jour `.env.local`
6. Redémarrez le serveur : `npm run dev`

## Vérification rapide

Testez votre clé API directement dans le navigateur :

```
https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJLxhLyEIXUQ0RK3r5wx8PaA4&fields=name,rating&key=VOTRE_CLE_API
```

**Résultat attendu** :
```json
{
  "result": {
    "name": "Nom de l'établissement",
    "rating": 4.8
  },
  "status": "OK"
}
```

**Si erreur** :
```json
{
  "status": "REQUEST_DENIED",
  "error_message": "..."
}
```

## Checklist complète

- [ ] Places API activée dans Google Cloud Console
- [ ] Clé API créée dans Credentials
- [ ] Restrictions API configurées (seulement "Places API")
- [ ] Facturation activée sur le projet
- [ ] Clé API copiée dans `.env.local` (sans espaces)
- [ ] Serveur redémarré après modification `.env.local`
- [ ] Place ID valide (commence par `ChIJ`)

## Alternative sans API

Si vous ne voulez pas configurer l'API Google, vous avez 2 options :

### Option A : Juste le bouton

Supprimez l'API et gardez juste le bouton "Laisser un avis" :

**Fichier** : `src/components/sections/google-reviews.tsx`

Remplacez le composant par :

```tsx
'use client';

import { Button } from '../ui/button';

export function GoogleReviews({ placeId }: { placeId?: string }) {
  const writeReviewUrl = placeId
    ? `https://search.google.com/local/writereview?placeid=${placeId}`
    : '#';

  return (
    <div className="text-center py-8">
      <p className="text-gray-600 mb-6">
        Vous avez apprécié nos soins ? Partagez votre expérience !
      </p>
      <a href={writeReviewUrl} target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Laisser un avis sur Google
        </Button>
      </a>
    </div>
  );
}
```

### Option B : Revenir aux témoignages manuels

Supprimez le composant GoogleReviews et utilisez les témoignages de `constants.ts`.

## Support Google

- [Documentation Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Gestion de la facturation](https://console.cloud.google.com/billing)
- [Support Google Cloud](https://cloud.google.com/support)

## Besoin d'aide ?

Si le problème persiste :
1. Vérifiez les logs dans Google Cloud Console → Logging
2. Consultez la page "Quotas" pour voir si vous avez dépassé une limite
3. Vérifiez que votre carte bancaire est bien validée
