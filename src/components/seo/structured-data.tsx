import { SITE_INFO } from '@/lib/constants';

export default function StructuredData() {
  // Schema.org pour Local Business
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': process.env.NEXT_PUBLIC_SITE_URL || 'https://jm-magnetiseur-paysbasque.fr',
    name: SITE_INFO.name,
    alternateName: 'Jean-Michel Nougué-Lecocq Magnétiseur',
    description: SITE_INFO.description,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jm-magnetiseur-paysbasque.fr',
    telephone: SITE_INFO.phone,
    email: SITE_INFO.email,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jm-magnetiseur-paysbasque.fr'}/images/jean-mi.jpg`,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_INFO.address,
      addressLocality: SITE_INFO.location,
      addressRegion: SITE_INFO.region,
      postalCode: '64310',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_INFO.coordinates.lat,
      longitude: SITE_INFO.coordinates.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    areaServed: SITE_INFO.nearCities.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de soins énergétiques',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Séance de Magnétisme',
            description: 'Soin énergétique par magnétisme pour soulager douleurs physiques et émotionnelles',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Séance de Trame',
            description: 'Technique énergétique agissant sur la structure vibratoire du corps',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Séance de Kinésiologie',
            description: 'Méthode psycho-corporelle utilisant le test musculaire',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Soins à distance',
            description: 'Séances énergétiques réalisées à distance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Magnétisme pour animaux',
            description: 'Soins énergétiques pour chiens, chats et autres animaux',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_INFO.rating,
      bestRating: '5',
      worstRating: '1',
      ratingCount: '50',
    },
  };

  // Schema.org pour Person
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_INFO.name,
    jobTitle: 'Magnétiseur et Thérapeute Énergéticien',
    description: `Magnétiseur, guérisseur et thérapeute énergéticien au Pays Basque`,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jm-magnetiseur-paysbasque.fr',
    email: SITE_INFO.email,
    telephone: SITE_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_INFO.location,
      addressRegion: SITE_INFO.region,
      addressCountry: 'FR',
    },
    worksFor: {
      '@type': 'Organization',
      name: SITE_INFO.name,
    },
    knowsAbout: [
      'Magnétisme',
      'Trame',
      'Kinésiologie',
      'Soins énergétiques',
      'Référentiel de naissance',
      'Langage des oiseaux',
    ],
  };

  // Schema.org pour Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_INFO.name,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jm-magnetiseur-paysbasque.fr',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jm-magnetiseur-paysbasque.fr'}/images/jean-mi.jpg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_INFO.phone,
      email: SITE_INFO.email,
      contactType: 'Customer Service',
      areaServed: 'FR',
      availableLanguage: 'French',
    },
    sameAs: [
      // Ajoutez ici vos réseaux sociaux
      // 'https://www.facebook.com/votre-page',
      // 'https://www.instagram.com/votre-compte',
    ],
  };

  // Schema.org pour Breadcrumb (sera personnalisé par page)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: process.env.NEXT_PUBLIC_SITE_URL || 'https://jm-magnetiseur-paysbasque.fr',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
