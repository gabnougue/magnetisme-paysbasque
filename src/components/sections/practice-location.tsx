import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import Carousel from '@/components/ui/carousel';

const locationImages = [
  {
    src: '/images/maison/maison.jpg',
    alt: 'Vue extérieure du lieu de pratique',
  },
  {
    src: '/images/maison/bureau.jpg',
    alt: 'Cabinet de consultation',
  },
  {
    src: '/images/maison/table.jpg',
    alt: 'Espace de soin',
  },
  {
    src: '/images/maison/buddha.jpg',
    alt: 'Décoration apaisante',
  },
  {
    src: '/images/maison/bol.jpg',
    alt: 'Ambiance zen et relaxante',
  },
];

export default function PracticeLocation() {
  return (
    <Section className="bg-gradient-to-b from-white to-primary-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800">
              Un lieu de pratique apaisant
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Je vous accueille dans un espace chaleureux et serein,
                spécialement aménagé pour favoriser votre bien-être et
                votre détente.
              </p>
              <p>
                Ce lieu a été pensé pour créer une atmosphère propice
                à la relaxation et au lâcher-prise, essentielle à une
                séance réussie de magnétisme.
              </p>
              <p>
                Situé dans un cadre paisible, le cabinet offre un
                environnement naturel et ressourçant.
              </p>
            </div>
          </div>

          {/* Carousel */}
          <div>
            <Carousel images={locationImages} autoplay={true} interval={4000} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
