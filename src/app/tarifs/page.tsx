import type { Metadata } from 'next';
import { Section, SectionTitle, SectionDescription } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PRICING } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tarifs | Jean-Michel Nougué-Lecocq',
  description: 'Découvrez les tarifs de mes séances de magnétisme et soins énergétiques.',
};

export default function TarifsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gray" backgroundImage="/images/backgrounds/spa-stones.jpg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle center light>
            Tarifs & Prestations
          </SectionTitle>
          <SectionDescription center light>
            Des soins énergétiques accessibles et adaptés à vos besoins
          </SectionDescription>
        </div>
      </Section>

      {/* Grille de tarifs */}
      <Section background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING.map((item) => (
            <Card
              key={item.id}
              hover
              className="h-full flex flex-col border-2 border-primary-100"
            >
              <CardHeader className="text-center bg-gradient-to-br from-primary-50 to-white">
                <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {item.price}
                </div>
                <p className="text-gray-600 text-sm">{item.duration}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-700 mb-6">{item.description}</p>

                <ul className="space-y-3 mb-6 flex-1">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button href="/contact" className="w-full">
                  Réserver cette séance
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Info supplémentaires */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold font-serif mb-6 text-gray-900">
              Informations pratiques
            </h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-bold mb-2">Modalités de paiement</h4>
                <p>Espèces, chèques acceptés.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Annulation</h4>
                <p>
                  Merci de prévenir 24h à l'avance en cas d'empêchement.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Durée des séances</h4>
                <p>
                  Les durées indiquées sont approximatives et peuvent varier selon vos
                  besoins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif mb-4 text-gray-900">
            Prêt à commencer ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Prenez rendez-vous dès aujourd'hui pour votre première séance.
          </p>
          <Button href="/contact" size="lg">
            Prendre rendez-vous
          </Button>
        </div>
      </Section>
    </>
  );
}
