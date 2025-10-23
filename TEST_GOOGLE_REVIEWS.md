# 🧪 Test de l'intégration Google Reviews

## Test 1 : Vérifier les variables d'environnement

```bash
cat .env.local
```

**Vérifier que tu as** :
```env
GOOGLE_MAPS_API_KEY=AIzaSyBuNgfL7ZMmIy_HDR40_Hg4Kr6E9t59usI
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJLxhLyEIXUQ0RK3r5wx8PaA4
```

✅ **Bon** : Les deux variables sont présentes
❌ **Mauvais** : Variable manquante ou avec fautes de frappe

## Test 2 : Redémarrer le serveur

**Important** : Next.js ne recharge PAS `.env.local` automatiquement !

```bash
# Arrêter le serveur (Ctrl+C)
# Puis relancer :
npm run dev
```

**Vérifier** : Tu dois voir dans le terminal :
```
 ✓ Ready in 2s
 ○ Local:        http://localhost:3000
 ○ Environments: .env.local
```

Le `Environments: .env.local` confirme que le fichier est chargé.

## Test 3 : Tester l'API directement

Ouvre dans ton **navigateur** :

```
http://localhost:3000/api/google-reviews?placeId=ChIJLxhLyEIXUQ0RK3r5wx8PaA4
```

### ✅ Cas 1 : Succès

**Tu dois voir un JSON** comme :
```json
{
  "name": "Jean-Michel Nougué-Lecocq",
  "rating": 4.8,
  "user_ratings_total": 12,
  "reviews": [
    {
      "author_name": "Marie L.",
      "rating": 5,
      "text": "Magnétiseur très professionnel...",
      "profile_photo_url": "https://lh3.googleusercontent.com/...",
      "relative_time_description": "il y a 2 mois"
    }
  ]
}
```

**Interprétation** :
- ✅ L'API Google fonctionne
- ✅ Les avis s'afficheront sur le site
- 🎉 **Tout est OK !**

### ❌ Cas 2 : Erreur REQUEST_DENIED

**Tu vois** :
```json
{
  "error": "Google API error: REQUEST_DENIED",
  "details": {
    "error_message": "This API key is not authorized to use this service or API."
  }
}
```

**Causes possibles** :
1. L'API Places n'est pas activée
2. La facturation n'est pas activée
3. Les restrictions sont trop strictes

**Solution** : Va sur [Google Cloud Console](https://console.cloud.google.com/)

#### Étape A : Activer l'API Places

1. Menu → **APIs & Services** → **Library**
2. Cherche **"Places API"**
3. Clique sur **ENABLE**
4. Attends 1-2 minutes

#### Étape B : Activer la facturation

1. Menu → **Billing**
2. **Link a billing account**
3. Ajoute une carte bancaire
4. Ne t'inquiète pas : **100 000 requêtes/mois sont gratuites !**

#### Étape C : Vérifier les restrictions

1. Menu → **APIs & Services** → **Credentials**
2. Clique sur ta clé API
3. Sous **"API restrictions"** :
   - Coche **"Restrict key"**
   - Coche uniquement **"Places API"**
4. Sous **"Application restrictions"** :
   - Choisis **"None"** (pour le développement local)
5. Clique **SAVE**
6. Attends 1-2 minutes

#### Étape D : Retester

Rafraîchis la page API :
```
http://localhost:3000/api/google-reviews?placeId=ChIJLxhLyEIXUQ0RK3r5wx8PaA4
```

### ❌ Cas 3 : Erreur ZERO_RESULTS

**Tu vois** :
```json
{
  "error": "Google API error: ZERO_RESULTS"
}
```

**Cause** : Le Place ID est invalide ou l'établissement n'a pas d'avis.

**Solution** :
1. Vérifie le Place ID sur [Google Maps](https://www.google.com/maps)
2. Cherche ton établissement
3. Copie l'URL et cherche `place_id:ChIJ...`

## Test 4 : Vérifier la page d'accueil

Ouvre : http://localhost:3000

**Cherche la section** : "Ce que disent nos clients"

### ✅ Cas 1 : Avis Google affichés

Tu vois :
- Photos de profil circulaires
- Noms des auteurs
- Étoiles jaunes (notation)
- Texte des avis
- Dates ("il y a X jours/mois")
- Bouton "Laisser un avis sur Google"

**Interprétation** : 🎉 **Tout fonctionne parfaitement !**

### ⏳ Cas 2 : Loader qui tourne

Tu vois :
- Un spinner qui tourne
- "Chargement des avis Google..."

**Cause** : L'API met du temps à répondre

**Action** :
- Attends 5 secondes
- Si ça continue, vérifie la console (F12)

### ❌ Cas 3 : Message d'erreur

Tu vois :
- "Impossible de charger les avis"
- OU "Erreur lors du chargement des avis"

**Action** :
1. Ouvre la console du navigateur (F12)
2. Regarde les erreurs
3. Vérifie Test 3 (API directe)

## Test 5 : Vérifier la page témoignages

Ouvre : http://localhost:3000/temoignages

**Tu dois voir** :
1. Section "Avis Google" (si configuré)
2. Section témoignages manuels (fallback)

**Nombre d'avis** :
- Page d'accueil : max 3 avis
- Page témoignages : max 6 avis

## Test 6 : Tester le bouton "Laisser un avis"

Clique sur le bouton **"Laisser un avis sur Google"**

**Résultat attendu** :
- Nouvelle fenêtre/onglet s'ouvre
- Page Google Maps de ton établissement
- Formulaire pour laisser un avis

**URL** :
```
https://search.google.com/local/writereview?placeid=ChIJLxhLyEIXUQ0RK3r5wx8PaA4
```

✅ **Si ça fonctionne** : Le bouton est opérationnel !

## Test 7 : Console du navigateur

Ouvre la console (F12 → Console)

### ✅ Aucune erreur

**Tu vois** :
```
[rien de rouge]
```

**Interprétation** : Tout va bien !

### ❌ Erreurs présentes

**Tu vois** :
```
Error fetching Google reviews: ...
```

**Action** :
1. Lis le message d'erreur complet
2. Vérifie Test 3 (API)
3. Consulte `TROUBLESHOOTING_GOOGLE.md`

## Checklist finale

- [ ] `.env.local` contient `GOOGLE_MAPS_API_KEY`
- [ ] `.env.local` contient `NEXT_PUBLIC_GOOGLE_PLACE_ID`
- [ ] Serveur redémarré après modification `.env.local`
- [ ] API `/api/google-reviews?placeId=...` retourne un JSON valide
- [ ] Page d'accueil affiche les avis Google
- [ ] Page témoignages affiche les avis Google
- [ ] Bouton "Laisser un avis" fonctionne
- [ ] Aucune erreur dans la console (F12)

## Si tout est ✅

**Félicitations !** 🎉

L'intégration Google Reviews est **complète et fonctionnelle**.

Tes visiteurs peuvent maintenant :
- Voir les vrais avis Google
- Laisser facilement un avis en un clic
- Avoir confiance grâce aux avis vérifiés

## Si tu as des ❌

**Pas de panique !**

1. Consulte `TROUBLESHOOTING_GOOGLE.md`
2. Vérifie Google Cloud Console (API activée, facturation, restrictions)
3. Attends 2-5 minutes après chaque modification Google Cloud
4. Redémarre toujours le serveur après `.env.local`

## Performance

Avec le cache activé (1 heure) :
- **Première visite** : Appel API Google (~500ms)
- **Visites suivantes** : Lecture cache (~50ms)
- **Quota utilisé** : ~720 requêtes/mois (largement gratuit !)

## Prochaine étape

Une fois tout validé, pense à :

1. **Demander des avis** à tes clients satisfaits
2. **Répondre aux avis** sur Google My Business
3. **Partager le lien** pour laisser un avis (QR code en cabinet ?)

---

📖 **Besoin d'aide ?**

- `GOOGLE_INTEGRATION_DONE.md` - Récapitulatif des modifications
- `TROUBLESHOOTING_GOOGLE.md` - Guide de dépannage
- `GOOGLE_SETUP.md` - Configuration complète

✅ **Bon test !**
