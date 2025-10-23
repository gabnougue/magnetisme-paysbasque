# Guide Rapide : Obtenir le lien "Laisser un avis sur Google"

Si vous voulez juste un bouton pour que les visiteurs laissent un avis, **sans configurer l'API** (plus simple !), suivez ce guide.

## Méthode 1 : Via l'URL Google Maps (Recommandée - Plus simple)

### Étape 1 : Trouvez votre fiche Google

1. Allez sur [Google Maps](https://www.google.com/maps)
2. Recherchez votre établissement : **"Jean-Michel Nougué-Lecocq Saint-Pée-sur-Nivelle"**
3. Cliquez sur votre fiche
4. Copiez l'URL complète de la page

L'URL ressemble à :
```
https://www.google.com/maps/place/Jean-Michel+Nougué-Lecocq/@43.35412,-1.54321,17z/data=...
```

### Étape 2 : Récupérez le Place ID

Dans l'URL, cherchez `place_id:` suivi d'une chaîne commençant par `ChIJ`

**Exemple** : `ChIJrTLr-GyuEmsRBfy61i59si0`

### Étape 3 : Créez votre lien d'avis

Utilisez ce format :
```
https://search.google.com/local/writereview?placeid=VOTRE_PLACE_ID
```

**Exemple complet** :
```
https://search.google.com/local/writereview?placeid=ChIJrTLr-GyuEmsRBfy61i59si0
```

## Méthode 2 : Via Google My Business (Si vous avez accès)

1. Connectez-vous à [Google My Business](https://business.google.com/)
2. Sélectionnez votre établissement
3. Dans le menu, cliquez sur "Accueil"
4. Cliquez sur "Partager le profil"
5. Utilisez le lien fourni

## Utilisation dans le site

### Option A : Mettre à jour la constante (Simple)

Modifiez `src/lib/constants.ts` :

```typescript
export const SITE_INFO = {
  // ... autres infos
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJXXXXXXXXX',
};
```

Puis ajoutez un bouton sur la page d'accueil :

```tsx
<Button href={SITE_INFO.googleReviewUrl} target="_blank">
  Laisser un avis sur Google
</Button>
```

### Option B : Utiliser le composant GoogleReviews (Avancé)

Si vous configurez l'API Google Places (voir GOOGLE_SETUP.md), le composant `<GoogleReviews>` :
- Affiche automatiquement les avis
- Inclut le bouton "Laisser un avis"
- Met à jour les avis en temps réel

## Où placer le bouton ?

Suggestions d'emplacement :

1. **Page Contact** : En bas du formulaire
2. **Footer** : Visible sur toutes les pages
3. **Page Témoignages** : En haut ou en bas de la page
4. **Pop-up après séance** : Si vous ajoutez un système de réservation

## QR Code (Bonus)

Pour afficher un QR code en cabinet :

1. Allez sur [QR Code Generator](https://www.qr-code-generator.com/)
2. Collez votre lien `https://search.google.com/local/writereview?placeid=...`
3. Téléchargez le QR code
4. Imprimez et affichez en cabinet

Les clients peuvent scanner et laisser un avis instantanément !

## Exemple de texte

Voici des exemples de texte à utiliser :

**Formel** :
> "Votre avis compte ! Partagez votre expérience sur Google."

**Amical** :
> "Vous avez apprécié nos soins ? Laissez-nous un avis sur Google 😊"

**Incitatif** :
> "Aidez-nous à faire connaître notre approche. Votre témoignage inspire d'autres personnes à prendre soin d'elles."

## Vérification

Pour tester votre lien :

1. Ouvrez le lien dans un navigateur
2. Connectez-vous avec votre compte Google
3. Vous devriez voir le formulaire d'avis pour votre établissement
4. ✅ Si ça fonctionne, le lien est bon !

## Astuce Pro

**Créez un lien court** pour faciliter le partage :

1. Allez sur [bit.ly](https://bitly.com/) ou [tinyurl.com](https://tinyurl.com/)
2. Collez votre lien Google Review
3. Créez un lien court type : `bit.ly/avis-magnetisme`
4. Plus facile à partager par SMS ou à l'oral !

---

**Besoin d'aide ?** Consultez [GOOGLE_SETUP.md](./GOOGLE_SETUP.md) pour la configuration complète avec API.
