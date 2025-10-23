import type { Metadata } from 'next';
import { Section, SectionTitle, SectionDescription } from '@/components/ui/section';
import { ContactForm } from '@/components/sections/contact-form';
import { SITE_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | Jean-Michel Nougué-Lecocq',
  description: 'Contactez-moi pour prendre rendez-vous ou pour toute question sur les soins énergétiques et le magnétisme.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle center>Contactez-moi</SectionTitle>
          <SectionDescription center>
            N'hésitez pas à me contacter pour toute question ou pour prendre rendez-vous
          </SectionDescription>
        </div>
      </Section>

      {/* Formulaire et informations */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h2 className="text-2xl font-bold font-serif mb-6 text-gray-900">
              Informations de contact
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${SITE_INFO.email}`}
                    className="text-primary-600 hover:text-primary-700"
                  >
                    {SITE_INFO.email}
                  </a>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                  <a
                    href={`tel:${SITE_INFO.phone}`}
                    className="text-primary-600 hover:text-primary-700"
                  >
                    {SITE_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Localisation */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Localisation</h3>
                  <p className="text-gray-600">{SITE_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* Carte (optionnelle) */}
            <div className="mt-8">
              <h3 className="font-bold text-gray-900 mb-4">Où me trouver ?</h3>
                <div className="relative w-full h-full min-h-[260px] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=place_id:ChIJLxhLyEIXUQ0RK3r5wx8PaA4`}
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div>
            <h2 className="text-2xl font-bold font-serif mb-6 text-gray-900">
              Envoyez-moi un message
            </h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
