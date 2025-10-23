# Guide d'Optimisation SEO - Site Magnétiseur Pays Basque

## 🎯 Objectif
Rendre le site visible sur Google pour les recherches locales de type :
- "magnétiseur pays basque"
- "magnétiseur saint pée sur nivelle"
- "guérisseur bayonne"
- "soins énergétiques biarritz"
- etc.

## ✅ Améliorations Réalisées

### 1. Structure du Site et Navigation

**Nouvelles pages créées :**
- ✅ `/techniques` - Page détaillée de toutes les techniques (magnétisme, trame, kinésiologie, etc.)
- ✅ `/faq` - Questions fréquentes (12 questions optimisées SEO)
- ✅ Bandeau de confiance sur l'accueil (15 ans d'expérience, 500+ patients, etc.)
- ✅ Carrousel d'images du lieu de pratique

### 2. Optimisation SEO Technique

#### Métadonnées Optimisées (`src/app/layout.tsx`)
- **Title** : Inclut "Magnétiseur Pays Basque" + localisation
- **Description** : 155 caractères avec mots-clés principaux
- **Keywords** : 15+ mots-clés longue traîne ciblés
- **Open Graph** : Optimisé pour partage sur réseaux sociaux
- **Twitter Card** : Support partage Twitter
- **Canonical URL** : Évite le contenu dupliqué

#### Données Structurées Schema.org (`src/components/seo/structured-data.tsx`)
4 types de données structurées implémentées :

1. **LocalBusiness / MedicalBusiness**
   - Nom, adresse, téléphone, email
   - Coordonnées GPS pour Google Maps
   - Horaires d'ouverture
   - Zone de chalandise (Bayonne, Biarritz, etc.)
   - Catalogue de services
   - Note moyenne et avis

2. **Person**
   - Profil professionnel de Jean-Michel
   - Compétences listées
   - Expérience

3. **Organization**
   - Informations de l'entreprise
   - Contact
   - Logo

4. **BreadcrumbList**
   - Fil d'ariane pour navigation

#### Fichiers SEO
- ✅ `sitemap.ts` - Sitemap XML généré automatiquement
- ✅ `robots.txt` - Directives pour les moteurs de recherche

### 3. Optimisation du Contenu

#### Page d'Accueil Optimisée
- **H1** : "Magnétiseur & Guérisseur Pays Basque - Saint-Pée-sur-Nivelle"
- **Mots-clés en gras** : magnétisme, trame, kinésiologie
- **Géolocalisation** : Mentions de toutes les villes du Pays Basque
- **Longue traîne** : "15 ans d'expérience", "cabinet", "à distance"

#### Page Techniques
- Description détaillée de chaque technique
- Bienfaits listés pour chacune
- Durée, public cible
- Texte riche en mots-clés naturels

#### Page FAQ
- 12 questions optimisées SEO
- Répond aux questions que les gens tapent sur Google
- Structure en accordéon (bon pour UX et SEO)

### 4. Expérience Utilisateur (UX)

- ✅ **Bouton WhatsApp flottant** - Contact rapide
- ✅ **Bandeau de confiance** - Rassure les visiteurs
- ✅ **Carrousel d'images** - Montre le lieu de pratique
- ✅ **Animations fluides** - Navigation agréable
- ✅ **Design responsive** - Mobile-friendly (important pour Google)

### 5. Mots-clés Ciblés

#### Principaux
- magnétiseur pays basque ⭐⭐⭐
- magnétiseur saint pée sur nivelle ⭐⭐⭐
- guérisseur pays basque ⭐⭐⭐
- soins énergétiques pays basque ⭐⭐

#### Secondaires
- magnétiseur bayonne
- magnétiseur biarritz
- énergéticien pyrénées atlantiques
- magnétisme animaux pays basque
- soins à distance magnétisme
- trame pays basque
- kinésiologie pays basque

#### Longue traîne
- "magnétiseur pour animaux près de bayonne"
- "guérisseur saint jean de luz"
- "soins énergétiques à distance 64"

## 📊 Prochaines Étapes Recommandées

### À Faire Immédiatement

1. **Google Search Console**
   - Créer un compte sur https://search.google.com/search-console
   - Ajouter le site
   - Soumettre le sitemap : `https://votre-site.fr/sitemap.xml`
   - Récupérer le code de vérification et le mettre dans `layout.tsx` ligne 73

2. **Google My Business**
   - Créer/revendiquer la fiche d'établissement
   - Ajouter photos, horaires, services
   - Demander des avis clients (CRUCIAL pour le SEO local)

3. **Informations à Compléter**
   - Numéro de téléphone (ligne 14 de `constants.ts`)
   - URL du site définitive
   - Photos haute qualité
   - Avis Google authentiques

### Pour Aller Plus Loin

4. **Blog / Articles** (excellent pour SEO)
   - "Les bienfaits du magnétisme"
   - "Comment se déroule une séance"
   - "Magnétisme et enfants"
   - "Différence entre magnétisme et reiki"

5. **Backlinks**
   - S'inscrire sur des annuaires locaux
   - Partenariats avec thérapeutes locaux
   - Articles de presse locale

6. **Avis Clients**
   - Demander systématiquement un avis Google
   - Les afficher automatiquement sur le site

## 🔍 Vérifications SEO

### URLs Importantes
- Accueil : `/`
- Techniques : `/techniques`
- FAQ : `/faq`
- Tarifs : `/tarifs`
- Contact : `/contact`

### Balises à Vérifier
Toutes les pages ont :
- ✅ Title unique et optimisé
- ✅ Meta description
- ✅ H1 avec mots-clés
- ✅ Structure H2, H3 correcte
- ✅ Texte alternatif sur images (alt)
- ✅ Liens internes

## 📱 Mobile-First

Le site est 100% responsive et optimisé mobile :
- Design adaptatif
- Boutons tactiles assez grands
- Chargement rapide
- Navigation simplifiée

## 🚀 Performances

- Build optimisé avec Next.js 15
- Images optimisées avec Next/Image
- Chargement progressif
- Code splitting automatique

## 📈 Suivi des Résultats

Pour suivre vos positions sur Google :
1. Google Search Console (gratuit)
2. Google Analytics (gratuit)
3. Recherches manuelles régulières

**Mots-clés à suivre :**
- magnétiseur pays basque
- magnétiseur saint pée sur nivelle
- guérisseur bayonne
- soins énergétiques biarritz

---

## 🎨 Nouvelles Fonctionnalités

- **Bandeau de confiance** : Affiche statistiques rassurantes
- **Bouton WhatsApp** : Contact rapide en un clic
- **Carrousel lieu** : Présente le cabinet
- **FAQ interactive** : Questions/réponses dépliables
- **Page Techniques** : Détails complets de chaque méthode

---

*Le SEO est un travail de longue haleine. Les premiers résultats apparaissent généralement après 3-6 mois. La clé : du contenu de qualité, des avis clients, et de la patience !*
