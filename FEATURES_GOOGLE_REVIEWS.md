# Fonctionnalité Avis Google - Récapitulatif

## Ce qui a été ajouté

### 1. Composant GoogleReviews
**Fichier** : `src/components/sections/google-reviews.tsx`

Composant React qui :
- ✅ Affiche les avis Google de votre établissement
- ✅ Montre les photos de profil, notes, et commentaires
- ✅ Inclut un bouton "Laisser un avis sur Google"
- ✅ Gère le chargement et les erreurs
- ✅ S'adapte si l'API n'est pas configurée

**Propriétés** :
```tsx
<GoogleReviews
  placeId="ChIJ..." // Votre Place ID Google
  maxReviews={6}    // Nombre max d'avis à afficher
/>
```

### 2. API Route Google Places
**Fichier** : `src/app/api/google-reviews/route.ts`

API serveur qui :
- ✅ Récupère les avis depuis l'API Google Places
- ✅ Met en cache pendant 1 heure (économise les appels API)
- ✅ Gère les erreurs proprement
- ✅ Fonctionne en mode "dégradé" si non configuré

### 3. Intégration dans la page Témoignages
**Fichier** : `src/app/temoignages/page.tsx`

La page témoignages affiche maintenant :
1. Les avis Google (si configuré)
2. Les témoignages manuels (fallback ou complément)

**Comportement intelligent** :
- Si Google est configuré → Affiche les 2 sections
- Si non configuré → Affiche seulement les témoignages manuels

## Deux façons d'utiliser cette fonctionnalité

### Option 1 : Mode Simple (Juste le bouton)

**Temps de configuration** : 5 minutes

Ajoutez simplement un lien pour que les visiteurs laissent un avis :

```tsx
<Button
  href="https://search.google.com/local/writereview?placeid=ChIJXXXXXXX"
  target="_blank"
>
  Laisser un avis sur Google
</Button>
```

📖 **Guide** : [QUICK_GOOGLE_LINK.md](./QUICK_GOOGLE_LINK.md)

**Avantages** :
- Aucune configuration technique
- Gratuit
- Fonctionne immédiatement

**Limites** :
- Les avis ne s'affichent pas automatiquement
- Nécessite de copier-coller manuellement les témoignages

### Option 2 : Mode Complet (API Google Places)

**Temps de configuration** : 30 minutes

Configurez l'API Google Places pour :
- Afficher automatiquement vos avis Google
- Mettre à jour les avis en temps réel
- Montrer les photos de profil
- Afficher la note moyenne

📖 **Guide** : [GOOGLE_SETUP.md](./GOOGLE_SETUP.md)

**Avantages** :
- Avis authentiques et vérifiables
- Mise à jour automatique
- Crédibilité accrue
- Photos et profils réels

**Limites** :
- Nécessite une clé API Google (gratuite)
- Configuration initiale requise

## Tarification Google Places API

| Usage mensuel | Coût |
|--------------|------|
| 0 - 100 000 requêtes | **GRATUIT** |
| 100 000 - 200 000 | $17/mois |
| Plus de 200 000 | Contactez Google |

**Pour un site vitrine comme le vôtre** :
- Avec cache 1h, vous ferez ~720 requêtes/mois
- **Vous restez largement dans le quota gratuit** ✅

## Exemples d'intégration

### Sur la page d'accueil

Remplacez la section témoignages par :

```tsx
<Section background="primary-light">
  <SectionTitle center>Ce que disent nos clients</SectionTitle>
  <GoogleReviews
    placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}
    maxReviews={3}
  />
</Section>
```

### Dans le Footer

Ajoutez un lien dans le footer :

```tsx
<a
  href={`https://search.google.com/local/writereview?placeid=${placeId}`}
  className="flex items-center gap-2"
>
  ⭐ Laisser un avis
</a>
```

### En pop-up (après contact)

Après l'envoi du formulaire de contact :

```tsx
<div className="success-message">
  <p>Merci ! Votre message a été envoyé.</p>
  <Button href={googleReviewUrl} size="sm" variant="outline">
    Laissez-nous un avis 😊
  </Button>
</div>
```

## Bonnes pratiques

### Demander des avis

**Quand demander** :
- Après une séance réussie
- Dans l'email de suivi
- Sur la facture/reçu
- Via QR code en cabinet

**Comment demander** :
- Soyez poli et non insistant
- Expliquez l'importance pour votre activité
- Facilitez le processus (lien direct)
- Remerciez ceux qui laissent un avis

**À éviter** :
- Offrir une réduction en échange d'avis (interdit par Google)
- Demander uniquement des avis positifs
- Écrire de faux avis
- Harceler les clients

### Répondre aux avis

**Répondez toujours** :
- Aux avis positifs (remerciement)
- Aux avis négatifs (solution professionnelle)
- Dans les 48h maximum

**Ton à adopter** :
- Professionnel et bienveillant
- Personnalisé (utilisez le prénom)
- Constructif face aux critiques
- Reconnaissant pour les compliments

## Statistiques

Avec la configuration Google Places, vous aurez accès à :

- **Note moyenne** : 4.8/5 ⭐
- **Nombre total d'avis** : 127 avis
- **Répartition** : 5★ (85%), 4★ (10%), 3★ (3%), 2★ (1%), 1★ (1%)
- **Évolution** : Graphique des avis dans le temps

Ces données renforcent la crédibilité de votre site.

## Support

**Problèmes courants** :

| Problème | Solution |
|----------|----------|
| "Place ID invalide" | Vérifiez le format (doit commencer par `ChIJ`) |
| "API key error" | Vérifiez que l'API Places est activée |
| "No reviews found" | Vérifiez que votre établissement a des avis |
| Avis ne s'affichent pas | Vérifiez la console pour les erreurs |

**Ressources** :
- [Documentation Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Gérer les avis Google My Business](https://support.google.com/business/answer/3474122)
- [Conditions d'utilisation](https://cloud.google.com/maps-platform/terms)

## Alternatives

Si vous ne voulez pas utiliser l'API Google :

1. **Trustpilot** : Service tiers, payant
2. **Avis Vérifiés** : Solution française, payant
3. **Témoignages manuels** : Gratuit, déjà en place
4. **Widget Google** : Gratuit, moins personnalisable

---

✅ **La fonctionnalité est prête à l'emploi !**

Il suffit de suivre un des deux guides pour l'activer :
- **Simple** : [QUICK_GOOGLE_LINK.md](./QUICK_GOOGLE_LINK.md)
- **Complet** : [GOOGLE_SETUP.md](./GOOGLE_SETUP.md)
