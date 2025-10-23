import type { Metadata } from 'next';
import { Section, SectionTitle, SectionDescription } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TECHNIQUES_DETAILED } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Techniques de soins | Magnétiseur Pays Basque',
  description: 'Découvrez les techniques de soins énergétiques : magnétisme, trame, kinésiologie, référentiel de naissance. Explications détaillées et bienfaits.',
  keywords: 'magnétisme, trame, kinésiologie, soins énergétiques, pays basque, guérisseur',
};

export default function TechniquesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gray" backgroundImage="/images/backgrounds/bamboo-forest.jpg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle center light>
            Mes techniques de soins
          </SectionTitle>
          <SectionDescription center light>
            Découvrez en détail les différentes approches que j'utilise pour vous accompagner vers le mieux-être
          </SectionDescription>
        </div>
      </Section>

      {/* Introduction */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed">
              Dans ma pratique, j'utilise différentes techniques complémentaires
              que j'adapte à chaque personne et à chaque situation. Cette approche
              holistique me permet de vous proposer un accompagnement personnalisé
              et efficace.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Chaque technique a ses spécificités et ses domaines d'excellence.
              Lors de notre première rencontre, nous déterminerons ensemble quelle(s)
              approche(s) sera(ont) la(les) plus adaptée(s) à vos besoins.
            </p>
          </div>
        </div>
      </Section>

      {/* Techniques détaillées */}
      {TECHNIQUES_DETAILED.map((technique, index) => (
        <Section
          key={technique.id}
          id={technique.id}
          background={index % 2 === 0 ? 'gray' : 'white'}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Colonne principale */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 id={`${technique.id}-title`} className="text-3xl md:text-4xl font-bold font-serif text-primary-800 mb-3 scroll-mt-24">
                    {technique.name}
                  </h2>
                  <p className="text-xl text-primary-600 font-medium">
                    {technique.shortDescription}
                  </p>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700">
                  <div className="whitespace-pre-line">
                    {technique.fullDescription}
                  </div>
                </div>

                <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-primary-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Bienfaits de cette technique
                  </h3>
                  <ul className="space-y-2">
                    {technique.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar informations */}
              <div className="space-y-6">
                <Card className="border-2 border-primary-200">
                  <CardHeader className="bg-gradient-to-br from-primary-50 to-white">
                    <CardTitle className="text-lg">Informations pratiques</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-1">Durée</p>
                      <p className="text-lg font-bold text-primary-700">{technique.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-1">Pour qui ?</p>
                      <p className="text-gray-700">{technique.forWho}</p>
                    </div>
                    <Button href="/contact" className="w-full mt-4">
                      Réserver une séance
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-secondary-50 to-white border-secondary-200">
                  <CardContent className="pt-6">
                    <p className="text-sm text-gray-700 italic">
                      "{technique.name} fait partie de mon approche holistique.
                      Je peux la combiner avec d'autres techniques selon vos besoins."
                    </p>
                    <p className="text-sm font-semibold text-primary-700 mt-3">
                      — Jean-Michel Nougué-Lecocq
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA final */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif mb-4 text-gray-900">
            Quelle technique vous correspond ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Lors de notre premier échange, nous déterminerons ensemble la ou les techniques
            les mieux adaptées à votre situation et à vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Prendre rendez-vous
            </Button>
            <Button href="/faq" variant="outline" size="lg">
              Questions fréquentes
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
