import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Section,
  SectionTitle,
  SectionDescription,
} from '@/components/ui/section';
import { GoogleReviews } from '@/components/sections/google-reviews';
import PracticeLocation from '@/components/sections/practice-location';
import { SERVICES, SKILLS, TECHNIQUES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Accueil',
  description:
    'Magnétiseur et guérisseur au Pays Basque. Jean-Michel Nougué-Lecocq, praticien en soins énergétiques : magnétisme, trame, kinésiologie. Cabinet à Saint-Pée-sur-Nivelle. Séances pour adultes, enfants et animaux.',
  keywords: [
    'magnétiseur pays basque',
    'guérisseur saint pée sur nivelle',
    'soins énergétiques bayonne',
    'magnétisme biarritz',
    'thérapeute énergéticien 64',
  ],
  openGraph: {
    title: 'Magnétiseur Pays Basque - Jean-Michel Nougué-Lecocq',
    description:
      'Magnétiseur et guérisseur au Pays Basque. Soins énergétiques à Saint-Pée-sur-Nivelle.',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-gray-900 mb-6">
              Magnétiseur & Guérisseur
              <br />
              <span className="text-primary-600">Pays Basque - Saint-Pée-sur-Nivelle</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
              <strong>Jean-Michel Nougué-Lecocq</strong>, magnétiseur et thérapeute énergéticien
              au Pays Basque.
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Soins énergétiques par <strong>magnétisme</strong>, <strong>trame</strong>,
              <strong> kinésiologie</strong> et autres techniques holistiques.
              Séances en cabinet à Saint-Pée-sur-Nivelle et à distance.
              Adultes, enfants, animaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Prendre rendez-vous
              </Button>
              <Button href="/qui-suis-je" variant="outline" size="lg">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Qui suis-je Section */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/jean-mi.jpg"
              alt="Jean-Michel Nougué-Lecocq"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <SectionTitle>
              Magnétiseur & Thérapeute Énergéticien au Pays Basque
            </SectionTitle>
            <SectionDescription>
              Je m'appelle <strong>Jean-Michel Nougué-Lecocq</strong>, je suis{' '}
              <strong>magnétiseur</strong> et <strong>guérisseur</strong> à Saint-Pée-sur-Nivelle.
              <br />
              <br />
              Praticien en <strong>soins énergétiques</strong>, je vous accompagne au Pays Basque
              (Bayonne, Biarritz, Saint-Jean-de-Luz, Anglet...) dans votre démarche de guérison
              et de bien-être. Spécialisé en <strong>magnétisme</strong>, <strong>trame</strong>,
              et <strong>kinésiologie</strong>, je vous aide à vous libérer de vos souffrances
              physiques et émotionnelles.
            </SectionDescription>
            <div className="mb-6">
              <h3 className="font-bold text-xl mb-3 text-gray-900">
                Mes compétences
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <Button href="/qui-suis-je" variant="outline">
              En savoir plus
            </Button>
          </div>
        </div>
      </Section>

      {/* Domaines d'intervention */}
      <Section background="gray" backgroundImage="/images/backgrounds/meditation-stones.jpg">
        <SectionTitle center light>
          Soins énergétiques et Magnétisme : Mes Domaines d'intervention
        </SectionTitle>
        <SectionDescription center light>
          En tant que <strong>magnétiseur au Pays Basque</strong>, je vous propose des{' '}
          <strong>soins énergétiques en cabinet</strong> à Saint-Pée-sur-Nivelle, des{' '}
          <strong>soins à distance</strong> et du{' '}
          <strong>magnétisme pour animaux</strong>. Mes séances sont destinées à toutes
          les personnes (adultes, enfants, bébés) qui souhaitent se libérer de leurs
          souffrances physiques et émotionnelles.
        </SectionDescription>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <Card key={service.id} hover className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Button href="/tarifs" variant="ghost" size="sm">
                  En savoir plus →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Techniques utilisées */}
      <Section background="white">
        <SectionTitle center>
          Mes techniques
        </SectionTitle>
        <SectionDescription center>
          J'utilise différentes approches complémentaires pour un accompagnement
          personnalisé et adapté à vos besoins.
        </SectionDescription>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {TECHNIQUES.map((technique) => (
            <a
              key={technique.id}
              href={`/techniques#${technique.id}`}
              className="bg-white border-2 border-primary-200 rounded-lg p-4 text-center hover:border-primary-400 hover:shadow-md transition-all duration-200 block"
            >
              <p className="text-sm font-medium text-gray-800">{technique.name}</p>
            </a>
          ))}
        </div>
      </Section>

      {/* Lieu de pratique */}
      <PracticeLocation />

      {/* Témoignages / Avis Google */}
      <Section background="primary-light">
        <SectionTitle center>
          Ils partagent leur expérience
        </SectionTitle>
        <SectionDescription center>
          Découvrez les avis authentiques de ceux qui ont bénéficié de mes soins énergétiques.
        </SectionDescription>

        <GoogleReviews
          placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}
          maxReviews={3}
        />
      </Section>

      {/* CTA Final */}
      <Section background="white">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Prêt à commencer votre parcours de bien-être ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Prenez rendez-vous dès aujourd'hui pour une consultation personnalisée.
          </p>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="bg-white text-primary-700 hover:bg-gray-100"
          >
            Prendre rendez-vous
          </Button>
        </div>
      </Section>
    </>
  );
}
