import type { Metadata } from 'next';
import { Section, SectionTitle } from '@/components/ui/section';
import { SITE_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Mentions Légales | Jean-Michel Nougué-Lecocq',
  description: 'Mentions légales du site de Jean-Michel Nougué-Lecocq, magnétiseur et thérapeute énergéticien au Pays Basque.',
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle center>Mentions Légales</SectionTitle>
        </div>
      </Section>

      {/* Contenu */}
      <Section background="white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            1. Éditeur du site
          </h2>
          <p className="text-gray-700 mb-6">
            Le site <strong>{typeof window !== 'undefined' ? window.location.hostname : 'magnetiseur-paysbasque.fr'}</strong> est édité par :
          </p>
          <ul className="list-none text-gray-700 mb-8 space-y-2">
            <li><strong>Nom :</strong> {SITE_INFO.name}</li>
            <li><strong>Adresse :</strong> {SITE_INFO.address}</li>
            <li><strong>Email :</strong> <a href={`mailto:${SITE_INFO.email}`} className="text-primary-600 hover:text-primary-700">{SITE_INFO.email}</a></li>
            <li><strong>Téléphone :</strong> <a href={`tel:${SITE_INFO.phone}`} className="text-primary-600 hover:text-primary-700">{SITE_INFO.phone}</a></li>
          </ul>

          <p className="text-gray-700 mb-8">
            <strong>Statut :</strong> Professionnel en activité libérale<br />
            <strong>Activité :</strong> Magnétisme, soins énergétiques, thérapies holistiques
          </p>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            2. Responsable de publication et développement
          </h2>
          <ul className="list-none text-gray-700 mb-8 space-y-2">
            <li><strong>Nom :</strong> Gabin Nougué</li>
            <li><strong>Email :</strong> <a href="mailto:gabnougue@gmail.com" className="text-primary-600 hover:text-primary-700">gabnougue@gmail.com</a></li>
            <li><strong>Téléphone :</strong> <a href="tel:+33780374846" className="text-primary-600 hover:text-primary-700">+33 7 80 37 48 46</a></li>
          </ul>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            3. Hébergement du site
          </h2>
          <p className="text-gray-700 mb-8">
            Le site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789, USA<br />
            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">vercel.com</a>
          </p>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            4. Propriété intellectuelle
          </h2>
          <p className="text-gray-700 mb-8">
            L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive de {SITE_INFO.name} ou de ses partenaires, sauf mention contraire.
          </p>
          <p className="text-gray-700 mb-8">
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord écrit de {SITE_INFO.name}.
          </p>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            5. Données personnelles
          </h2>
          <p className="text-gray-700 mb-8">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
          </p>
          <p className="text-gray-700 mb-8">
            Pour exercer ces droits, vous pouvez nous contacter :
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Par email : <a href={`mailto:${SITE_INFO.email}`} className="text-primary-600 hover:text-primary-700">{SITE_INFO.email}</a></li>
            <li>Par téléphone : <a href={`tel:${SITE_INFO.phone}`} className="text-primary-600 hover:text-primary-700">{SITE_INFO.phone}</a></li>
            <li>Par courrier : {SITE_INFO.address}</li>
          </ul>
          <p className="text-gray-700 mb-8">
            Pour plus d'informations sur la gestion de vos données personnelles, consultez notre <a href="/politique-confidentialite" className="text-primary-600 hover:text-primary-700 underline">Politique de confidentialité</a>.
          </p>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            6. Cookies
          </h2>
          <p className="text-gray-700 mb-8">
            Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient être limitées.
          </p>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            7. Responsabilité
          </h2>
          <p className="text-gray-700 mb-8">
            {SITE_INFO.name} s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, mais ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
          </p>
          <p className="text-gray-700 mb-8">
            Les informations présentes sur ce site sont fournies à titre informatif et ne constituent en aucun cas un diagnostic médical. En cas de problème de santé, consultez un médecin.
          </p>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            8. Liens hypertextes
          </h2>
          <p className="text-gray-700 mb-8">
            Le site peut contenir des liens vers d'autres sites internet. {SITE_INFO.name} ne peut être tenu responsable du contenu de ces sites externes.
          </p>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            9. Droit applicable
          </h2>
          <p className="text-gray-700 mb-8">
            Les présentes mentions légales sont régies par le droit français. En cas de litige, et après tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents.
          </p>

          <p className="text-gray-600 text-sm mt-12">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </Section>
    </>
  );
}
