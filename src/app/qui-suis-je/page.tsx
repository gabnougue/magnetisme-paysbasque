import type { Metadata } from 'next';
import Image from 'next/image';
import { Section, SectionTitle, SectionDescription } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { SKILLS, TECHNIQUES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Qui suis-je ? | Jean-Michel Nougué-Lecocq',
  description: 'Découvrez mon parcours, mon approche et mes techniques de magnétisme et de soins énergétiques.',
};

export default function QuiSuisJePage() {
  return (
    <>
      {/* Hero */}
      <Section background="gray" backgroundImage="/images/backgrounds/peaceful-nature.jpg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle center light>
            Qui suis-je ?
          </SectionTitle>
          <SectionDescription center light>
            Découvrez mon parcours et mon approche des soins énergétiques
          </SectionDescription>
        </div>
      </Section>

      {/* Présentation */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/jean-mi.jpg"
              alt="Jean-Michel Nougué-Lecocq"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-serif mb-6 text-gray-900">
              Mon parcours
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Je m'appelle <strong>Jean-Michel Nougué-Lecocq</strong> et je suis
                magnétiseur et accompagnateur au changement basé à{' '}
                <strong>Saint-Pée-sur-Nivelle</strong>, dans le magnifique Pays Basque.
              </p>
              <p>
                Passionné par les soins énergétiques et holistiques, j'ai développé au fil
                des années une expertise dans diverses techniques thérapeutiques naturelles.
              </p>
              <p>
                Mon approche est centrée sur l'écoute et le respect de chaque individu.
                Je crois profondément que chacun possède en lui les ressources nécessaires
                à son propre bien-être, et mon rôle est de vous accompagner dans ce cheminement.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Compétences */}
      <Section background="gray" backgroundImage="/images/backgrounds/green-leaves.jpg">
        <SectionTitle center light>
          Mes compétences
        </SectionTitle>
        <div className="max-w-4xl mx-auto">
          {/* 3 premières compétences */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {SKILLS.slice(0, 3).map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="font-bold text-lg text-primary-700">{skill}</p>
              </div>
            ))}
          </div>
          {/* 2 dernières compétences plus larges */}
          <div className="grid md:grid-cols-2 gap-6">
            {SKILLS.slice(3).map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="font-bold text-lg text-primary-700">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Techniques */}
      <Section background="white">
        <SectionTitle center>
          Mes techniques
        </SectionTitle>
        <SectionDescription center>
          J'utilise différentes approches complémentaires pour un accompagnement
          personnalisé et adapté à vos besoins spécifiques.
        </SectionDescription>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TECHNIQUES.map((technique) => (
            <a
              key={technique.id}
              href={`/techniques#${technique.id}`}
              className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-200 shadow-md hover:shadow-lg block"
            >
              <p className="font-bold text-lg text-center text-gray-800">{technique.name}</p>
            </a>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif mb-4 text-gray-900">
            Prêt à débuter votre parcours de bien-être ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Je serais ravi de vous accompagner dans votre démarche de guérison et de
            bien-être.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Prendre rendez-vous
            </Button>
            <Button href="/tarifs" variant="outline" size="lg">
              Voir les tarifs
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
