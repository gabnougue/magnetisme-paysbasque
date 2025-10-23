# 📧 Configuration de l'envoi d'emails avec Resend

Le formulaire de contact du site utilise **Resend** pour envoyer les emails. Suivez ce guide pour configurer l'envoi d'emails.

## 🚀 Étapes de configuration

### 1. Créer un compte Resend

1. Allez sur [resend.com](https://resend.com)
2. Cliquez sur "Sign up" pour créer un compte gratuit
3. Vérifiez votre email

### 2. Obtenir votre clé API

1. Connectez-vous à votre compte Resend
2. Allez dans **API Keys** dans le menu de gauche
3. Cliquez sur **Create API Key**
4. Donnez un nom à votre clé (ex: "Site Web Magnétiseur")
5. Sélectionnez les permissions :
   - ✅ **Sending access** (requis)
6. Cliquez sur **Add** pour créer la clé
7. **IMPORTANT**: Copiez immédiatement la clé API qui commence par `re_...`
   - Elle ne sera affichée qu'une seule fois !

### 3. Configurer les variables d'environnement

Ouvrez le fichier `.env.local` à la racine du projet et remplacez :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

Par votre vraie clé API :

```env
RESEND_API_KEY=re_VotreClé1234567890
```

Vérifiez aussi que votre email est correct :

```env
CONTACT_EMAIL=gabnougue@gmail.com
```

### 4. Configuration du domaine (Optionnel - Pour production)

Par défaut, Resend utilise `onboarding@resend.dev` comme adresse d'envoi, ce qui fonctionne pour les tests mais affiche un avertissement.

Pour utiliser votre propre domaine en production :

#### 4.1 Ajouter votre domaine dans Resend

1. Dans le dashboard Resend, allez dans **Domains**
2. Cliquez sur **Add Domain**
3. Entrez votre nom de domaine (ex: `magnetiseur-paysbasque.fr`)
4. Suivez les instructions pour ajouter les enregistrements DNS :
   - **SPF** : Enregistrement TXT pour `@`
   - **DKIM** : Enregistrement TXT pour `resend._domainkey`
   - **DMARC** : Enregistrement TXT pour `_dmarc` (optionnel mais recommandé)

#### 4.2 Vérifier le domaine

Attendez quelques minutes (jusqu'à 48h) que les DNS se propagent, puis cliquez sur **Verify** dans Resend.

#### 4.3 Modifier le code

Une fois le domaine vérifié, modifiez le fichier `/src/app/api/contact/route.ts` ligne 35 :

**Avant :**
```typescript
from: 'Contact Site Web <onboarding@resend.dev>',
```

**Après :**
```typescript
from: 'Contact Site Web <contact@magnetiseur-paysbasque.fr>',
```

Remplacez `magnetiseur-paysbasque.fr` par votre vrai domaine.

---

## 🧪 Tester le formulaire

### En développement (localhost)

1. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

2. Allez sur http://localhost:3000/contact

3. Remplissez et soumettez le formulaire

4. Vérifiez :
   - ✅ Message de succès affiché
   - ✅ Email reçu à l'adresse configurée dans `CONTACT_EMAIL`
   - ✅ Vérifiez les spam si vous ne voyez pas l'email

### En production

Une fois déployé sur Vercel, ajoutez les variables d'environnement :

1. Allez dans votre projet Vercel
2. **Settings** → **Environment Variables**
3. Ajoutez :
   - `RESEND_API_KEY` : Votre clé API Resend
   - `CONTACT_EMAIL` : Votre email de destination

4. Redéployez le projet pour que les changements prennent effet

---

## 📊 Limites du plan gratuit Resend

Le plan gratuit de Resend inclut :

- ✅ **100 emails par jour**
- ✅ Domaine personnalisé
- ✅ API complète
- ✅ Support DKIM/SPF
- ❌ Pas de support prioritaire

Pour un site de magnétiseur, c'est largement suffisant ! 100 emails/jour = ~3000/mois.

Si vous dépassez cette limite, les plans payants commencent à **$20/mois** pour 50 000 emails.

---

## 🔧 Dépannage

### ❌ Erreur: "Missing RESEND_API_KEY"

**Solution :** Vérifiez que `.env.local` contient bien `RESEND_API_KEY=re_...`

### ❌ Erreur: "Invalid API key"

**Solutions :**
1. Vérifiez que la clé commence bien par `re_`
2. Créez une nouvelle clé API sur Resend
3. Redémarrez le serveur après avoir modifié `.env.local`

### ❌ Email non reçu

**Solutions :**
1. Vérifiez les **spams/indésirables**
2. Vérifiez que `CONTACT_EMAIL` est correct
3. Consultez les logs dans le dashboard Resend (**Logs** → **Emails**)
4. Vérifiez la console du navigateur pour les erreurs

### ❌ Avertissement "Sending from onboarding domain"

**Solution :** C'est normal en développement. Pour enlever l'avertissement, configurez votre propre domaine (voir section 4).

---

## 📚 Documentation Resend

- [Documentation officielle](https://resend.com/docs)
- [Guide d'intégration Next.js](https://resend.com/docs/send-with-nextjs)
- [Configurer un domaine](https://resend.com/docs/dashboard/domains/introduction)

---

## ✅ Checklist finale

Avant de mettre en production, vérifiez :

- [ ] Compte Resend créé
- [ ] Clé API générée et copiée
- [ ] `.env.local` configuré avec `RESEND_API_KEY` et `CONTACT_EMAIL`
- [ ] Formulaire testé en local
- [ ] Variables d'environnement ajoutées sur Vercel
- [ ] (Optionnel) Domaine personnalisé configuré pour la production

---

**Tout est prêt ! Le formulaire de contact est opérationnel. 🎉**
