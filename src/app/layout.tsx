import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Magnétiseur Pays Basque - Jean-Michel Nougué-Lecocq | Saint-Pée-sur-Nivelle',
    template: '%s | Jean-Michel Nougué-Lecocq - Magnétiseur Pays Basque',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  description:
    'Magnétiseur et guérisseur au Pays Basque (Saint-Pée-sur-Nivelle). Soins énergétiques, magnétisme, trame, kinésiologie. Séances en cabinet et à distance pour adultes, enfants et animaux. Bayonne, Biarritz, Saint-Jean-de-Luz.',
  keywords: [
    'magnétiseur pays basque',
    'magnétiseur saint pée sur nivelle',
    'magnétiseur bayonne',
    'magnétiseur biarritz',
    'guérisseur pays basque',
    'énergéticien pyrénées atlantiques',
    'soins énergétiques pays basque',
    'magnétisme pays basque',
    'trame pays basque',
    'kinésiologie pays basque',
    'magnétiseur 64',
    'guérisseur saint jean de luz',
    'magnétisme animaux pays basque',
    'soins à distance magnétisme',
    'thérapeute énergéticien',
  ],
  authors: [{ name: 'Jean-Michel Nougué-Lecocq' }],
  creator: 'Jean-Michel Nougué-Lecocq',
  publisher: 'Jean-Michel Nougué-Lecocq',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://magnetiseur-paysbasque.fr',
    siteName: 'Jean-Michel Nougué-Lecocq - Magnétiseur Pays Basque',
    title: 'Magnétiseur Pays Basque - Jean-Michel Nougué-Lecocq | Saint-Pée-sur-Nivelle',
    description:
      'Magnétiseur et guérisseur au Pays Basque. Soins énergétiques, magnétisme, trame. Séances en cabinet à Saint-Pée-sur-Nivelle et à distance.',
    images: [
      {
        url: 'https://magnetiseur-paysbasque.fr/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jean-Michel Nougué-Lecocq - Magnétiseur Pays Basque',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magnétiseur Pays Basque - Jean-Michel Nougué-Lecocq',
    description: 'Magnétiseur et guérisseur au Pays Basque. Soins énergétiques pour votre bien-être.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://magnetiseur-paysbasque.fr',
  },
  verification: {
    google: 'votre-code-google-search-console', // À remplacer
  },
};

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import StructuredData from '@/components/seo/structured-data';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
