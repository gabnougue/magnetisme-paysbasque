# Configuration DNS OVH - Aide-mémoire rapide

## 🎯 Accès rapide

**Manager OVH** : https://www.ovh.com/manager/web/

Navigation : **Noms de domaine** → **magnetiseur-paysbasque.fr** → **Zone DNS**

---

## 📝 Enregistrements à configurer

### 1️⃣ Enregistrement A (domaine racine)

| Champ | Valeur |
|-------|--------|
| **Type** | A |
| **Sous-domaine** | *(laissez vide)* |
| **TTL** | 3600 (par défaut) |
| **Cible** | `76.76.21.21` |

**Action** : Cliquez sur "Ajouter une entrée" → Type "A"

---

### 2️⃣ Enregistrement CNAME (www)

| Champ | Valeur |
|-------|--------|
| **Type** | CNAME |
| **Sous-domaine** | `www` |
| **TTL** | 3600 (par défaut) |
| **Cible** | `cname.vercel-dns.com.` |

**Action** : Cliquez sur "Ajouter une entrée" → Type "CNAME"

⚠️ **Important** : N'oubliez pas le point final `.` après `cname.vercel-dns.com.`

---

## ⚙️ Configuration étape par étape

### Étape 1 : Nettoyer les anciens enregistrements

**À supprimer si présents :**
- ❌ Enregistrement A vers l'IP du parking OVH (213.186.33.5)
- ❌ Tout CNAME pour `www` pointant ailleurs
- ❌ Toute redirection web configurée

### Étape 2 : Ajouter les nouveaux enregistrements

1. **Enregistrement A** (comme ci-dessus)
2. **Enregistrement CNAME** (comme ci-dessus)

### Étape 3 : Appliquer la configuration

⚠️ **CRUCIAL** : Cliquez sur "Appliquer la configuration" dans le bandeau orange en haut !

Sans cette étape, les modifications ne seront pas prises en compte.

---

## ✅ Vérification

### Dans OVH

Après application, votre Zone DNS doit ressembler à :

```
Type    Sous-domaine    TTL     Cible
A       (vide)          3600    76.76.21.21
CNAME   www             3600    cname.vercel-dns.com.
```

### Dans le terminal Windows

```powershell
# Vérifier le domaine racine
nslookup magnetiseur-paysbasque.fr

# Résultat attendu : 76.76.21.21

# Vérifier www
nslookup www.magnetiseur-paysbasque.fr

# Résultat attendu : cname.vercel-dns.com
```

---

## 🕐 Délai de propagation

| Scénario | Temps estimé |
|----------|--------------|
| DNS OVH → Vercel | 5-15 minutes |
| Propagation mondiale | 30 minutes - 2h |
| Dans le pire cas | 24-48h |

**Astuce** : Testez en navigation privée pour éviter le cache

---

## 🚨 Problèmes fréquents

### "Page parking OVH" s'affiche

**Solution :**
1. OVH → Zone DNS
2. Supprimez l'enregistrement A vers 213.186.33.5
3. Ajoutez l'enregistrement A vers 76.76.21.21
4. Appliquez la configuration
5. Videz le cache : `ipconfig /flushdns` (PowerShell admin)

### "Invalid Configuration" dans Vercel

**Solution :**
1. Vérifiez que vous avez cliqué sur "Appliquer la configuration" dans OVH
2. Attendez 15-30 minutes
3. Dans Vercel → Settings → Domains, cliquez sur "Refresh" à côté du domaine

### Redirection web active

**Solution :**
1. OVH → Onglet "Redirection"
2. Supprimez toute redirection pour magnetiseur-paysbasque.fr
3. Les redirections web sont gérées par Vercel, pas par OVH

---

## 📞 Support

**Si ça ne fonctionne toujours pas après 24h :**

1. **Vérifier dans OVH** :
   - Zone DNS bien configurée
   - Configuration bien appliquée
   - Pas de redirection web active
   - DNSSEC désactivé (si activé)

2. **Vérifier dans Vercel** :
   - Les deux domaines ajoutés (avec et sans www)
   - Variables d'environnement configurées
   - Déploiement réussi (onglet "Deployments")

3. **Contacter le support** :
   - Support Vercel : https://vercel.com/support
   - Support OVH : https://www.ovh.com/fr/support/

---

## 🔗 Liens utiles

- **Manager OVH** : https://www.ovh.com/manager/web/
- **Vercel Dashboard** : https://vercel.com/dashboard
- **Test DNS en ligne** : https://mxtoolbox.com/SuperTool.aspx
- **Documentation OVH DNS** : https://docs.ovh.com/fr/domains/generalites-serveurs-dns/

---

**Dernière mise à jour** : Janvier 2025
