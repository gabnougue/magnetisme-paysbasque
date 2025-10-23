/**
 * Constantes et données du site pour Jean-Michel Nougué-Lecocq
 */

export const SITE_INFO = {
  name: 'Jean-Michel Nougué-Lecocq',
  title: 'Magnétiseur & Thérapeute Énergéticien à Saint-Pée-sur-Nivelle',
  description:
    'Magnétiseur, guérisseur et thérapeute énergéticien au Pays Basque. Soins énergétiques, magnétisme, kinésiologie, trame. Séances en cabinet et à distance pour adultes, enfants et animaux.',
  location: 'Saint-Pée-sur-Nivelle',
  region: 'Pays Basque',
  department: 'Pyrénées-Atlantiques',
  email: 'gabnougue@gmail.com',
  phone: '+33 7 80 37 48 46',
  address: '121 rue Legaretta, Saint-Pée-sur-Nivelle, 64310',
  fullAddress: 'Saint-Pée-sur-Nivelle, Pays Basque, Pyrénées-Atlantiques (64)',
  nearCities: ['Bayonne', 'Biarritz', 'Saint-Jean-de-Luz', 'Anglet', 'Hendaye', 'Cambo-les-Bains'],
  rating: 5,
  coordinates: {
    lat: 43.3500,
    lng: -1.5500,
  },
};

export const SERVICES = [
  {
    id: 1,
    title: 'Troubles anxieux, dépression, addiction',
    description:
      "Crises d'angoisse, dépression, souffrance émotionnelle, stress, burn-out, intolérances alimentaires, addictions (tabac, alcool, jeux), obésité, insomnie, trouble de la fertilité...",
    icon: 'anxiety',
  },
  {
    id: 2,
    title: 'Douleurs physiques diverses',
    description:
      'Douleurs articulaires, arthrose, respiratoire, circulation sanguine, migraine chronique, sciatique, mal de dos, brûlure, radiothérapie/chimiothérapie...',
    icon: 'pain',
  },
  {
    id: 3,
    title: 'Allergies ou problèmes de peau',
    description:
      'Allergies cutanées : zona, eczéma, verrue, dartre, varicelle...',
    icon: 'skin',
  },
  {
    id: 4,
    title: 'Magnétisme animal',
    description: 'Magnétothérapie sur chien, chat, etc...',
    icon: 'animal',
  },
];

export const SKILLS = [
  'Magnétiseur',
  'Énergéticien',
  'Guérisseur',
  'Thérapeute énergéticien',
  'Magnétiseur pour animaux',
];

export const TECHNIQUES = [
  { name: 'Trame', id: 'trame' },
  { name: 'Magnétisme', id: 'magnetisme' },
  { name: 'Kinésiologie', id: 'kinesiologie' },
  { name: 'Référentiel de naissance', id: 'referentiel' },
  { name: 'Langage des oiseaux', id: 'langage-oiseaux' },
  { name: 'Exercices de visualisation', id: 'visualisation' },
];

export const TECHNIQUES_DETAILED = [
  {
    id: 'trame',
    name: 'La Trame',
    shortDescription: 'Technique énergétique agissant sur la structure vibratoire du corps',
    fullDescription: `La Trame est une technique de soin énergétique qui permet de rétablir l'harmonie du corps en travaillant sur sa structure vibratoire. Elle repose sur le principe que notre corps possède une trame énergétique, un réseau invisible qui ordonne et structure notre être.

Cette méthode douce et non invasive permet de libérer les tensions accumulées, de débloquer les mémoires cellulaires et de restaurer la circulation énergétique optimale.`,
    benefits: [
      'Libération des tensions physiques et émotionnelles',
      'Amélioration de la vitalité générale',
      'Réduction du stress et de l\'anxiété',
      'Harmonisation du corps et de l\'esprit',
      'Soutien dans les périodes de changement',
    ],
    duration: '1h à 1h30',
    forWho: 'Adultes, enfants, femmes enceintes',
  },
  {
    id: 'magnetisme',
    name: 'Magnétisme',
    shortDescription: 'Soin énergétique ancestral utilisant le magnétisme du praticien',
    fullDescription: `Le magnétisme est une pratique ancestrale de soin par l'énergie. Le magnétiseur canalise et transmet une énergie bienfaisante pour rééquilibrer le système énergétique de la personne.

Cette technique permet de soulager de nombreux maux physiques et psychiques en agissant directement sur le corps énergétique. Le magnétisme stimule les capacités d'auto-guérison naturelles de l'organisme.`,
    benefits: [
      'Soulagement des douleurs physiques',
      'Cicatrisation accélérée (brûlures, zona, eczéma)',
      'Réduction du stress et des tensions',
      'Renforcement du système immunitaire',
      'Accompagnement des traitements médicaux',
      'Apaisement des troubles du sommeil',
    ],
    duration: '45min à 1h',
    forWho: 'Tous publics : adultes, enfants, bébés, animaux',
  },
  {
    id: 'kinesiologie',
    name: 'Kinésiologie',
    shortDescription: 'Méthode psycho-corporelle utilisant le test musculaire',
    fullDescription: `La kinésiologie est une technique psycho-corporelle qui utilise le test musculaire pour identifier les déséquilibres énergétiques et émotionnels. Elle permet d'accéder à la mémoire du corps et de libérer les blocages.

Cette approche holistique prend en compte les dimensions physique, émotionnelle, mentale et énergétique de la personne pour favoriser un mieux-être global.`,
    benefits: [
      'Gestion du stress et des émotions',
      'Amélioration de la confiance en soi',
      'Libération des blocages émotionnels',
      'Accompagnement des troubles d\'apprentissage',
      'Soutien dans les périodes de transition',
      'Amélioration des performances',
    ],
    duration: '1h à 1h30',
    forWho: 'Adultes, adolescents, enfants',
  },
  {
    id: 'referentiel',
    name: 'Référentiel de Naissance',
    shortDescription: 'Étude symbolique de votre thème de naissance',
    fullDescription: `Le Référentiel de Naissance est un outil de connaissance de soi basé sur l'étude symbolique de votre date, heure et lieu de naissance. Il révèle votre "programme" de vie, vos potentiels et les défis à transcender.

Cette approche permet de mieux comprendre votre chemin de vie, vos talents innés et les schémas répétitifs qui peuvent vous limiter.`,
    benefits: [
      'Meilleure connaissance de soi',
      'Compréhension de son chemin de vie',
      'Identification de ses talents et potentiels',
      'Libération des schémas limitants',
      'Orientation dans les choix de vie',
    ],
    duration: '1h30 à 2h',
    forWho: 'Adultes en quête de sens',
  },
  {
    id: 'langage-oiseaux',
    name: 'Langage des Oiseaux',
    shortDescription: 'Décodage symbolique du langage et des maux',
    fullDescription: `Le Langage des Oiseaux, ou langue des oiseaux, est un art du décodage symbolique qui permet de révéler le sens caché des mots, des noms et des expressions. Il met en lumière les messages inconscients que nous transmettons à travers notre langage.

Cette approche permet de comprendre les liens entre nos mots et nos maux, entre notre langage et nos blocages.`,
    benefits: [
      'Prise de conscience des schémas inconscients',
      'Compréhension du sens de ses maux',
      'Libération par la conscientisation',
      'Éveil à la dimension symbolique',
      'Transformation du rapport aux mots',
    ],
    duration: '1h',
    forWho: 'Adultes curieux de sens et de symbolisme',
  },
  {
    id: 'visualisation',
    name: 'Exercices de Visualisation',
    shortDescription: 'Techniques de visualisation pour le mieux-être',
    fullDescription: `Les exercices de visualisation sont des techniques mentales qui utilisent le pouvoir de l'imagination pour favoriser la détente, la guérison et la transformation. Ils permettent de reprogrammer positivement le mental et de se connecter à ses ressources intérieures.

Ces pratiques guidées sont un complément précieux aux soins énergétiques et peuvent être pratiquées en autonomie.`,
    benefits: [
      'Réduction du stress et de l\'anxiété',
      'Amélioration de la concentration',
      'Renforcement de la confiance en soi',
      'Accompagnement des processus de guérison',
      'Développement de ressources intérieures',
    ],
    duration: '30min à 1h',
    forWho: 'Tous publics',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Marie L.',
    location: 'Bayonne',
    rating: 5,
    text: "Jean-Michel m'a accompagnée dans un moment difficile. Ses soins m'ont apporté un apaisement profond et durable. Je recommande vivement ses services.",
    date: '2024-09',
  },
  {
    id: 2,
    name: 'Pierre D.',
    location: 'Saint-Jean-de-Luz',
    rating: 5,
    text: "Souffrant de douleurs chroniques depuis des années, j'ai trouvé un réel soulagement grâce aux séances de magnétisme. Merci infiniment.",
    date: '2024-08',
  },
  {
    id: 3,
    name: 'Sophie M.',
    location: 'Biarritz',
    rating: 5,
    text: "Une approche douce et bienveillante. Jean-Michel a su m'écouter et m'accompagner avec professionnalisme. Les résultats sont remarquables.",
    date: '2024-10',
  },
  {
    id: 4,
    name: 'Laurent B.',
    location: 'Anglet',
    rating: 5,
    text: "Mon chien souffrait d'anxiété. Après quelques séances, son comportement s'est nettement amélioré. Un grand merci pour votre aide précieuse.",
    date: '2024-07',
  },
];

export const PRICING = [
  {
    id: 1,
    title: 'Séance individuelle',
    price: 'XX€',
    duration: '1h',
    description: 'Séance de magnétisme et soins énergétiques personnalisés.',
    features: [
      'Bilan énergétique complet',
      'Soins adaptés à vos besoins',
      'Conseils personnalisés',
      'Suivi après la séance',
    ],
  },
  {
    id: 2,
    title: 'Séance à distance',
    price: 'XX€',
    duration: '45min',
    description: 'Soins énergétiques à distance, tout aussi efficaces.',
    features: [
      'Soins énergétiques ciblés',
      'Échange téléphonique',
      'Conseils et recommandations',
      'Suivi personnalisé',
    ],
  },
  {
    id: 3,
    title: 'Séance pour animaux',
    price: 'XX€',
    duration: '30-45min',
    description: 'Magnétothérapie pour vos compagnons à quatre pattes.',
    features: [
      'Soins adaptés à l\'animal',
      'Apaisement et bien-être',
      'Conseils aux propriétaires',
      'Possibilité à distance',
    ],
  },
];

export const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/qui-suis-je', label: 'Qui suis-je ?' },
  { href: '/techniques', label: 'Techniques' },
  { href: '/temoignages', label: 'Témoignages' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export const FAQ_ITEMS = [
  {
    id: 1,
    category: 'Séances',
    question: 'Comment se déroule une séance de magnétisme ?',
    answer: `Une séance de magnétisme dure environ 45 minutes à 1 heure. Elle commence par un échange pour comprendre vos besoins et vos attentes. Vous restez habillé(e) et vous vous installez confortablement, généralement allongé(e).

Je procède ensuite aux passes magnétiques, en travaillant sur votre champ énergétique. Vous pouvez ressentir de la chaleur, des picotements, ou simplement une profonde détente. Certaines personnes s'endorment, c'est tout à fait normal.

La séance se termine par un temps d'échange sur vos ressentis et des conseils personnalisés.`,
  },
  {
    id: 2,
    category: 'Séances',
    question: 'Combien de séances sont nécessaires ?',
    answer: `Le nombre de séances varie selon chaque personne et la nature du problème. Certains ressentent un mieux-être dès la première séance, d'autres ont besoin de 3 à 5 séances espacées de 2 à 3 semaines.

Pour des problématiques anciennes ou profondes, un accompagnement plus long peut être nécessaire. Nous faisons toujours le point ensemble après chaque séance pour adapter le suivi à vos besoins.

L'objectif est votre autonomie : je vous accompagne le temps nécessaire, sans créer de dépendance.`,
  },
  {
    id: 3,
    category: 'Efficacité',
    question: 'Le magnétisme est-il compatible avec un traitement médical ?',
    answer: `Oui, absolument ! Le magnétisme est totalement compatible avec les traitements médicaux et ne les remplace en aucun cas. Il vient en complément de la médecine conventionnelle.

De nombreux patients viennent pour mieux supporter des traitements lourds (chimiothérapie, radiothérapie) ou pour accompagner leur guérison après une opération.

Je ne demande jamais d'arrêter un traitement médical. En cas de problème de santé, il est essentiel de consulter d'abord votre médecin.`,
  },
  {
    id: 4,
    category: 'Efficacité',
    question: 'Les soins à distance sont-ils aussi efficaces ?',
    answer: `Oui ! L'énergie n'a pas de frontière et ne connaît pas la distance. Les soins à distance sont tout aussi efficaces que les soins en présentiel.

Je travaille à partir d'une photo et d'informations que vous me transmettez. Pendant la séance à distance, je vous demande d'être dans un moment calme, si possible allongé(e). Vous recevrez l'énergie comme si vous étiez présent(e) physiquement.

De nombreux patients réguliers alternent séances en cabinet et séances à distance selon leurs disponibilités.`,
  },
  {
    id: 5,
    category: 'Efficacité',
    question: 'Est-ce que ça marche vraiment ? Est-ce scientifiquement prouvé ?',
    answer: `Le magnétisme est une pratique ancestrale utilisée depuis des millénaires. Si la science moderne commence à s'intéresser aux thérapies énergétiques, leur mécanisme d'action n'est pas encore totalement expliqué scientifiquement.

Ce qui compte avant tout, ce sont les résultats concrets que ressentent les personnes : soulagement de douleurs, mieux-être émotionnel, amélioration du sommeil, cicatrisation accélérée...

Je vous invite à venir essayer avec un esprit ouvert. Les témoignages de mes patients parlent d'eux-mêmes. La première séance vous permettra de vous faire votre propre opinion.`,
  },
  {
    id: 6,
    category: 'Pratique',
    question: 'Dois-je croire pour que ça fonctionne ?',
    answer: `Non, pas du tout ! L'énergie agit indépendamment de vos croyances. C'est d'ailleurs pour cette raison que le magnétisme fonctionne très bien sur les bébés, les jeunes enfants et les animaux, qui n'ont aucune attente particulière.

Avoir l'esprit ouvert aide simplement à mieux recevoir et à être plus réceptif aux changements. Le scepticisme n'empêche pas les soins d'agir, même si une attitude de rejet total peut créer des blocages.

L'important est d'être dans une démarche sincère de mieux-être.`,
  },
  {
    id: 7,
    category: 'Pratique',
    question: 'Pratiquez-vous sur les enfants et les bébés ?',
    answer: `Oui, les soins énergétiques sont particulièrement adaptés aux enfants et aux bébés. Les jeunes enfants sont très réceptifs et répondent souvent très rapidement aux soins.

Pour les bébés et jeunes enfants, les séances sont plus courtes (15-30 minutes). Le parent peut rester présent pendant toute la séance pour rassurer l'enfant.

Je travaille fréquemment sur des troubles du sommeil, des coliques, de l'eczéma, de l'anxiété, ou simplement pour accompagner leur développement harmonieux.`,
  },
  {
    id: 8,
    category: 'Pratique',
    question: 'Faites-vous des soins sur les animaux ?',
    answer: `Oui, je pratique le magnétisme animalier sur tous types d'animaux : chiens, chats, chevaux, etc.

Les animaux sont très sensibles aux énergies et répondent généralement très bien aux soins. Je peux intervenir pour des problèmes physiques (douleurs, blessures) ou comportementaux (anxiété, agressivité, peurs).

Les séances peuvent se faire au cabinet, à votre domicile, ou à distance avec une photo de l'animal.`,
  },
  {
    id: 9,
    category: 'Pratique',
    question: 'Quelle est la différence entre un magnétiseur et un énergéticien ?',
    answer: `Les termes "magnétiseur", "énergéticien" et "guérisseur" désignent souvent des pratiques similaires avec quelques nuances :

- Le **magnétiseur** utilise principalement le magnétisme, l'énergie qui émane de ses mains
- L'**énergéticien** travaille avec différentes formes d'énergies (magnétisme, reiki, soins énergétiques divers)
- Le **guérisseur** est un terme traditionnel qui englobe différentes pratiques de soins naturels

Dans ma pratique, j'utilise plusieurs techniques complémentaires (magnétisme, trame, kinésiologie...) selon les besoins de chaque personne.`,
  },
  {
    id: 10,
    category: 'Tarifs',
    question: 'Quel est le prix d\'une séance ?',
    answer: `Les tarifs varient selon le type de séance. Je vous invite à consulter la page Tarifs pour plus de détails.

Pour information, les séances de magnétisme ne sont généralement pas remboursées par la Sécurité Sociale, mais certaines mutuelles proposent une prise en charge partielle des médecines douces. N'hésitez pas à vous renseigner auprès de votre mutuelle.`,
  },
  {
    id: 11,
    category: 'Tarifs',
    question: 'Puis-je annuler ou reporter un rendez-vous ?',
    answer: `Oui, bien sûr. Je demande simplement de me prévenir au moins 24h à l'avance en cas d'empêchement, afin que je puisse proposer le créneau à une autre personne.

Les annulations tardives ou absences non justifiées pourront faire l'objet d'une facturation.`,
  },
  {
    id: 12,
    category: 'Localisation',
    question: 'Où se trouve votre cabinet ?',
    answer: `Mon cabinet est situé à Saint-Pée-sur-Nivelle, au cœur du Pays Basque, dans un cadre calme et naturel propice à la détente.

Je reçois des patients de tout le Pays Basque : Bayonne, Biarritz, Anglet, Saint-Jean-de-Luz, Hendaye, Cambo-les-Bains et les environs.

Je propose également des soins à distance pour les personnes qui ne peuvent pas se déplacer.`,
  },
];
