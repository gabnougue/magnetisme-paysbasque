import type { Metadata } from 'next';
import { Section, SectionTitle, SectionDescription } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { GoogleReviews } from '@/components/sections/google-reviews';

export const metadata: Metadata = {
  title: 'Témoignages | Jean-Michel Nougué-Lecocq',
  description: 'Découvrez les témoignages de personnes ayant bénéficié de mes soins énergétiques et de magnétisme.',
};

export default function TemoignagesPage() {
  const googlePlaceId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  return (
    <>
      {/* Hero */}
      <Section background="gray" backgroundImage="/images/backgrounds/lotus-flower.jpg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle center light>
            Témoignages clients
          </SectionTitle>
          <SectionDescription center light>
            Découvrez les expériences de ceux qui ont bénéficié de mes soins énergétiques
          </SectionDescription>
        </div>
      </Section>

      {/* Avis Google */}
      {googlePlaceId ? (
        <Section background="white">
          <SectionTitle center>Avis Google</SectionTitle>
          <SectionDescription center>
            Retrouvez les avis authentiques de nos clients sur Google
          </SectionDescription>
          <GoogleReviews placeId={googlePlaceId} maxReviews={6} />
        </Section>
      ) : (
        <Section background="white">
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Les avis Google seront bientôt disponibles. En attendant, n'hésitez pas à nous contacter pour en savoir plus.
            </p>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif mb-4 text-gray-900">
            Rejoignez-les et prenez soin de vous
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Des centaines de personnes ont retrouvé leur bien-être grâce aux soins
            énergétiques. Pourquoi pas vous ?
          </p>
          <Button href="/contact" size="lg">
            Prendre rendez-vous
          </Button>
        </div>
      </Section>
    </>
  );
}
