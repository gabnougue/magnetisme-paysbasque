# Guide de Déploiement - magnetiseur-paysbasque.fr

## 📋 Vue d'ensemble

Ce guide vous accompagne pour déployer le site sur **magnetiseur-paysbasque.fr** en utilisant :
- **Hébergement** : Vercel (gratuit, optimisé pour Next.js)
- **Domaine** : OVH (magnetiseur-paysbasque.fr)

**Temps estimé** : 30-45 minutes

### Checklist rapide

- [ ] Déployer sur Vercel (10 min)
- [ ] Configurer les variables d'environnement (5 min)
- [ ] Configurer le DNS sur OVH (10 min)
- [ ] Attendre la propagation DNS (10-30 min)
- [ ] Vérifier que tout fonctionne (5 min)

---

## Étape 1 : Déployer sur Vercel

### 1.1 Créer un compte Vercel (si nécessaire)
1. Allez sur https://vercel.com
2. Cliquez sur "Sign Up"
3. Connectez-vous avec votre compte GitHub

### 1.2 Importer le projet
1. Une fois connecté, cliquez sur "Add New..." → "Project"
2. Autorisez Vercel à accéder à vos repositories GitHub si demandé
3. Cherchez et sélectionnez le repository `gabnougue/magnetisme-paysbasque`
4. Cliquez sur "Import"

### 1.3 Configuration du projet
Vercel détectera automatiquement que c'est un projet Next.js.

**Framework Preset** : Next.js (détecté automatiquement)
**Build Command** : `npm run build` (par défaut)
**Output Directory** : `.next` (par défaut)
**Install Command** : `npm install` (par défaut)

Ne modifiez pas ces valeurs, elles sont correctes.

## Étape 2 : Configurer les Variables d'Environnement

Avant de déployer, vous devez ajouter les variables d'environnement :

1. Dans la page de configuration du projet, descendez à la section **"Environment Variables"**
2. Ajoutez les variables suivantes :

### Variables requises :

**RESEND_API_KEY**
```
re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**CONTACT_EMAIL**
```
gabnougue@gmail.com
```

**GOOGLE_MAPS_API_KEY**
```
AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**NEXT_PUBLIC_GOOGLE_PLACE_ID**
```
ChIJLxhLyEIXUQ0RK3r5wx8PaA4
```

**NEXT_PUBLIC_SITE_URL**
```
https://magnetiseur-paysbasque.fr
```

**NEXT_PUBLIC_SITE_NAME**
```
Jean-Michel Nougué-Lecocq - Magnétiseur Pays Basque
```

3. Pour chaque variable :
   - Entrez le **nom** (ex: RESEND_API_KEY)
   - Entrez la **valeur** (ex: re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx)
   - Sélectionnez les environnements : **Production**, **Preview**, et **Development**
   - Cliquez sur "Add"

## Étape 3 : Déployer

1. Une fois toutes les variables ajoutées, cliquez sur **"Deploy"**
2. Vercel va :
   - Cloner le repository
   - Installer les dépendances
   - Builder le projet
   - Déployer le site

Cela prend généralement 2-3 minutes.

3. Une fois le déploiement terminé, vous verrez un message de succès avec :
   - Une URL Vercel (ex: `magnetisme-paysbasque.vercel.app`)
   - Un bouton "Visit" pour voir votre site

## Étape 4 : Configurer le Domaine Personnalisé

### 4.1 Ajouter le domaine dans Vercel

1. Sur le dashboard de votre projet Vercel, allez dans l'onglet **"Settings"**
2. Dans le menu de gauche, cliquez sur **"Domains"**
3. Cliquez sur **"Add"**
4. Entrez votre domaine : `magnetiseur-paysbasque.fr`
5. Cliquez sur **"Add"**

### 4.2 Ajouter les sous-domaines (recommandé)

Répétez l'opération pour :
- `www.magnetiseur-paysbasque.fr`

Vercel va détecter que le domaine n'est pas encore configuré et vous donner les enregistrements DNS à ajouter.

### 4.3 Configurer le DNS

Vercel va vous afficher les enregistrements DNS à ajouter. Généralement :

**Pour `magnetiseur-paysbasque.fr` (domaine racine) :**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Pour `www.magnetiseur-paysbasque.fr` :**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4.4 Configurer les DNS sur OVH

> 📄 **Aide-mémoire rapide** : Consultez aussi [OVH-DNS-CONFIG.md](./OVH-DNS-CONFIG.md) pour une référence condensée

#### Étape par étape pour OVH :

1. **Connectez-vous à votre espace client OVH**
   - Allez sur https://www.ovh.com/manager/
   - Connectez-vous avec vos identifiants

2. **Accédez à la gestion DNS du domaine**
   - Dans le menu de gauche, cliquez sur **"Noms de domaine"**
   - Sélectionnez `magnetiseur-paysbasque.fr`
   - Cliquez sur l'onglet **"Zone DNS"**

3. **Supprimez les enregistrements existants (si nécessaire)**

   Cherchez et supprimez les enregistrements suivants s'ils existent :
   - Tout enregistrement **A** pointant vers `@` ou vide
   - Tout enregistrement **CNAME** pour `www`
   - Tout enregistrement **A** pour `www`

   Pour supprimer :
   - Cliquez sur l'icône **poubelle** (🗑️) à droite de chaque enregistrement
   - Confirmez la suppression

4. **Ajouter le nouveau enregistrement A (pour le domaine racine)**

   - Cliquez sur **"Ajouter une entrée"** (en haut à droite)
   - Sélectionnez le type **"A"**
   - Remplissez les champs :
     - **Sous-domaine** : laissez vide (ou mettez juste un point `.`)
     - **TTL** : Par défaut (3600) ou "Automatique"
     - **Cible / Adresse IPv4** : `76.76.21.21`
   - Cliquez sur **"Suivant"** puis **"Valider"**

5. **Ajouter l'enregistrement CNAME (pour www)**

   - Cliquez à nouveau sur **"Ajouter une entrée"**
   - Sélectionnez le type **"CNAME"**
   - Remplissez les champs :
     - **Sous-domaine** : `www`
     - **TTL** : Par défaut (3600) ou "Automatique"
     - **Cible** : `cname.vercel-dns.com.` (n'oubliez pas le point final)
   - Cliquez sur **"Suivant"** puis **"Valider"**

6. **Appliquer les modifications**

   OVH affichera un bandeau en haut :
   - "Vous avez X modification(s) en cours"
   - Cliquez sur **"Appliquer la configuration"**
   - Confirmez

#### ⚠️ Notes importantes pour OVH :

- **Le point final** : OVH ajoute automatiquement le point final aux CNAME, mais si demandé, ajoutez-le : `cname.vercel-dns.com.`
- **Suppression de l'ancien parking** : Si votre domaine a un "parking OVH", supprimez l'enregistrement A qui pointe vers l'IP du parking
- **Redirection web** : Si vous aviez configuré une redirection web dans OVH, désactivez-la (elle entrerait en conflit)
- **Propagation DNS chez OVH** : Généralement très rapide (5-15 minutes) mais peut prendre jusqu'à 24h

#### Vérifier la configuration DNS

Après avoir appliqué les modifications, vous pouvez vérifier que tout est correct :

1. **Via le terminal Windows (Command Prompt ou PowerShell)** :
   ```bash
   # Vérifier l'enregistrement A
   nslookup magnetiseur-paysbasque.fr

   # Vérifier le CNAME www
   nslookup www.magnetiseur-paysbasque.fr
   ```

2. **Via un outil en ligne** :
   - https://mxtoolbox.com/SuperTool.aspx
   - Entrez `magnetiseur-paysbasque.fr` et vérifiez les enregistrements A et CNAME

3. **Dans Vercel** :
   - Retournez dans Vercel → Settings → Domains
   - Vercel vérifie automatiquement et affichera ✅ quand c'est bon

### 4.5 Attendre la propagation DNS

- La propagation DNS peut prendre de **quelques minutes à 48 heures**
- Généralement, c'est opérationnel en **10-30 minutes**
- Vercel vérifiera automatiquement la configuration

### 4.6 Vérifier le certificat SSL

Une fois le DNS configuré :
- Vercel générera automatiquement un **certificat SSL gratuit** (Let's Encrypt)
- Votre site sera accessible en **HTTPS** (sécurisé)
- La vérification peut prendre 5-10 minutes

## Étape 5 : Vérifications Finales

Une fois le domaine configuré, vérifiez :

✅ Le site est accessible sur `https://magnetiseur-paysbasque.fr`
✅ Le site est accessible sur `https://www.magnetiseur-paysbasque.fr`
✅ Le certificat SSL est actif (cadenas vert dans le navigateur)
✅ Le formulaire de contact fonctionne
✅ Les avis Google s'affichent correctement
✅ Le bouton WhatsApp fonctionne
✅ Le site est responsive (mobile/tablette/desktop)

## Étape 6 : Configuration Post-Déploiement

### 6.1 Redirection automatique www → sans www

Vercel configure automatiquement la redirection. Vous pouvez choisir :
- `magnetiseur-paysbasque.fr` (sans www) → **Recommandé**
- `www.magnetiseur-paysbasque.fr` (avec www)

Pour configurer :
1. Allez dans **Settings** → **Domains**
2. Cliquez sur les trois points à côté du domaine
3. Sélectionnez "Set as Primary Domain" pour le domaine que vous préférez

### 6.2 Vérifier Google Search Console (optionnel mais recommandé)

1. Allez sur https://search.google.com/search-console
2. Ajoutez votre propriété : `magnetiseur-paysbasque.fr`
3. Vérifiez la propriété (méthode TXT DNS ou balise HTML)
4. Soumettez le sitemap : `https://magnetiseur-paysbasque.fr/sitemap.xml`

### 6.3 Mettre à jour la vérification Google dans le code

Une fois que vous avez le code de vérification Google Search Console :

1. Ouvrez `src/app/layout.tsx`
2. Trouvez la ligne :
   ```tsx
   verification: {
     google: 'votre-code-google-search-console', // À remplacer
   },
   ```
3. Remplacez par votre code de vérification
4. Commit et push sur GitHub
5. Vercel redéploiera automatiquement

## Déploiements Automatiques

Vercel est maintenant configuré pour :
- ✅ **Déployer automatiquement** à chaque push sur la branche `main`
- ✅ Créer des **preview deployments** pour chaque pull request
- ✅ Afficher les **logs de build** en temps réel
- ✅ **Rollback** facile vers une version précédente si besoin

## Support et Résolution de Problèmes

### Le site ne se déploie pas
- Vérifiez les logs de build dans Vercel
- Assurez-vous que `npm run build` fonctionne localement

### Le domaine ne fonctionne pas après configuration OVH

**Problème : "Invalid Configuration" dans Vercel**
- ✅ Vérifiez que vous avez bien **appliqué la configuration** dans OVH (bandeau en haut)
- ✅ Vérifiez que l'enregistrement A pointe vers `76.76.21.21`
- ✅ Vérifiez que le CNAME pour www pointe vers `cname.vercel-dns.com.`
- ⏱️ Attendez 15-30 minutes pour la propagation

**Problème : "Page parking OVH" s'affiche toujours**
- Allez dans OVH → Zone DNS
- Supprimez l'enregistrement A qui pointe vers l'IP du parking OVH (généralement 213.186.33.5)
- Ajoutez le nouvel enregistrement A vers `76.76.21.21`
- Appliquez la configuration
- Videz le cache de votre navigateur (Ctrl + F5)

**Problème : "Ce site ne peut pas être atteint" ou "DNS_PROBE_FINISHED_NXDOMAIN"**
- Les DNS n'ont pas encore propagé
- Testez avec : `nslookup magnetiseur-paysbasque.fr 8.8.8.8` (utilise le DNS Google)
- Si ça ne fonctionne pas, vérifiez la configuration DNS dans OVH
- Attendez encore un peu (peut prendre jusqu'à 24-48h)

**Problème : www fonctionne mais pas le domaine racine (ou inversement)**
- Vérifiez que les DEUX enregistrements sont présents dans OVH :
  - Enregistrement A pour le domaine racine (sous-domaine vide)
  - Enregistrement CNAME pour www
- Dans Vercel, vérifiez que les deux domaines sont ajoutés

**Problème : "Redirection web" configurée dans OVH**
- Allez dans OVH → Redirection
- Supprimez toute redirection web visible pour `magnetiseur-paysbasque.fr`
- Les redirections web OVH entrent en conflit avec Vercel

**Problème : Erreur "DNSSEC" ou "DNSKEY"**
- Si vous avez activé DNSSEC sur OVH, désactivez-le temporairement
- Allez dans OVH → DNSSEC → Désactiver
- Attendez 24h puis réessayez

### Vérifier la configuration DNS depuis Windows

```powershell
# PowerShell - Vérifier l'enregistrement A
nslookup magnetiseur-paysbasque.fr

# Résultat attendu :
# Adresse : 76.76.21.21

# Vérifier le CNAME www
nslookup www.magnetiseur-paysbasque.fr

# Résultat attendu :
# cname.vercel-dns.com
```

### Forcer le rafraîchissement DNS sur Windows

Si vous voyez toujours l'ancien site, videz le cache DNS :

```powershell
# PowerShell (en mode administrateur)
ipconfig /flushdns
```

Puis videz le cache du navigateur (Ctrl + Maj + Suppr)

### Les avis Google ne s'affichent pas
- Vérifiez que `GOOGLE_MAPS_API_KEY` est bien configurée dans Vercel
- Vérifiez que l'API "Places API (New)" est activée sur Google Cloud Console
- Vérifiez les logs dans Vercel (onglet "Functions")

### Le formulaire de contact ne fonctionne pas
- Vérifiez que `RESEND_API_KEY` est bien configurée
- Vérifiez que l'email de destination est correct
- Vérifiez les logs dans Vercel

## Commandes Utiles

```bash
# Tester le build localement
npm run build

# Démarrer en mode production localement
npm run start

# Vérifier le linting
npm run lint
```

## Ressources

- Dashboard Vercel : https://vercel.com/dashboard
- Documentation Vercel : https://vercel.com/docs
- Support Vercel : https://vercel.com/support
- Google Cloud Console : https://console.cloud.google.com
- Resend Dashboard : https://resend.com/emails

---

**Bon déploiement ! 🚀**
