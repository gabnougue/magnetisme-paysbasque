import type { Metadata } from 'next';
import { Section, SectionTitle } from '@/components/ui/section';
import { SITE_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Jean-Michel Nougué-Lecocq',
  description: 'Politique de confidentialité et protection des données personnelles du site de Jean-Michel Nougué-Lecocq.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle center>Politique de Confidentialité</SectionTitle>
        </div>
      </Section>

      {/* Contenu */}
      <Section background="white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-gray-700 mb-8">
            La protection de vos données personnelles est une priorité pour {SITE_INFO.name}. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
          </p>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            1. Responsable du traitement
          </h2>
          <p className="text-gray-700 mb-6">
            Le responsable du traitement des données personnelles est :
          </p>
          <ul className="list-none text-gray-700 mb-8 space-y-2">
            <li><strong>Nom :</strong> {SITE_INFO.name}</li>
            <li><strong>Adresse :</strong> {SITE_INFO.address}</li>
            <li><strong>Email :</strong> <a href={`mailto:${SITE_INFO.email}`} className="text-primary-600 hover:text-primary-700">{SITE_INFO.email}</a></li>
            <li><strong>Téléphone :</strong> <a href={`tel:${SITE_INFO.phone}`} className="text-primary-600 hover:text-primary-700">{SITE_INFO.phone}</a></li>
          </ul>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            2. Données collectées
          </h2>
          <p className="text-gray-700 mb-6">
            Nous collectons les données personnelles suivantes :
          </p>

          <h3 className="text-xl font-bold mb-3 text-gray-800">
            2.1 Données collectées via le formulaire de contact
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Prénom et nom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Objet et contenu du message</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 text-gray-800">
            2.2 Données de navigation
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Adresse IP</li>
            <li>Type de navigateur</li>
            <li>Pages visitées et durée de visite</li>
            <li>Données de géolocalisation approximative</li>
          </ul>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            3. Finalités du traitement
          </h2>
          <p className="text-gray-700 mb-6">
            Vos données personnelles sont collectées et traitées pour les finalités suivantes :
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>Formulaire de contact :</strong> Répondre à vos demandes d'information et prises de rendez-vous</li>
            <li><strong>Gestion des rendez-vous :</strong> Organiser et assurer le suivi de vos séances</li>
            <li><strong>Communication :</strong> Vous envoyer des informations relatives à nos services (avec votre consentement)</li>
            <li><strong>Statistiques :</strong> Améliorer l'expérience utilisateur et le fonctionnement du site</li>
          </ul>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            4. Base légale du traitement
          </h2>
          <p className="text-gray-700 mb-8">
            Le traitement de vos données personnelles repose sur les bases légales suivantes :
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>Exécution du contrat :</strong> Fourniture des services demandés</li>
            <li><strong>Consentement :</strong> Pour l'envoi de communications marketing (vous pouvez retirer votre consentement à tout moment)</li>
            <li><strong>Intérêt légitime :</strong> Amélioration de nos services et sécurité du site</li>
          </ul>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            5. Destinataires des données
          </h2>
          <p className="text-gray-700 mb-8">
            Vos données personnelles sont destinées uniquement à {SITE_INFO.name} et ne sont pas partagées avec des tiers, sauf :
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>Prestataires techniques :</strong> Hébergement du site (Vercel), service d'envoi d'emails (Resend)</li>
            <li><strong>Obligations légales :</strong> En cas de demande d'une autorité judiciaire ou administrative</li>
          </ul>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            6. Durée de conservation
          </h2>
          <p className="text-gray-700 mb-8">
            Vos données personnelles sont conservées pendant les durées suivantes :
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>Formulaire de contact :</strong> 3 ans à compter de la dernière interaction</li>
            <li><strong>Dossiers clients :</strong> Durée de la relation contractuelle + 5 ans (obligations légales)</li>
            <li><strong>Données de navigation :</strong> 13 mois maximum</li>
          </ul>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            7. Vos droits
          </h2>
          <p className="text-gray-700 mb-6">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
            <li><strong>Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</li>
            <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données ("droit à l'oubli")</li>
            <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données dans certains cas</li>
            <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
            <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
            <li><strong>Droit de retirer votre consentement :</strong> À tout moment, sans affecter la licéité du traitement antérieur</li>
          </ul>

          <p className="text-gray-700 mb-8">
            Pour exercer vos droits, contactez-nous :
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Par email : <a href={`mailto:${SITE_INFO.email}`} className="text-primary-600 hover:text-primary-700">{SITE_INFO.email}</a></li>
            <li>Par téléphone : <a href={`tel:${SITE_INFO.phone}`} className="text-primary-600 hover:text-primary-700">{SITE_INFO.phone}</a></li>
            <li>Par courrier : {SITE_INFO.address}</li>
          </ul>

          <p className="text-gray-700 mb-8">
            Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">www.cnil.fr</a>).
          </p>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            8. Sécurité des données
          </h2>
          <p className="text-gray-700 mb-8">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction, la perte, l'altération, la divulgation ou l'accès non autorisé :
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Chiffrement des données en transit (HTTPS/SSL)</li>
            <li>Accès limité aux données personnelles (principe du moindre privilège)</li>
            <li>Sauvegardes régulières</li>
            <li>Hébergement sécurisé chez des prestataires certifiés</li>
          </ul>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            9. Cookies
          </h2>
          <p className="text-gray-700 mb-8">
            Ce site peut utiliser des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil.
          </p>

          <h3 className="text-xl font-bold mb-3 text-gray-800">
            Types de cookies utilisés :
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
            <li><strong>Cookies analytiques :</strong> Mesure d'audience et statistiques (anonymisées)</li>
          </ul>

          <p className="text-gray-700 mb-8">
            Vous pouvez paramétrer votre navigateur pour refuser les cookies. Cependant, certaines fonctionnalités du site pourraient être limitées.
          </p>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            10. Modifications de la politique
          </h2>
          <p className="text-gray-700 mb-8">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
          </p>

          <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">
            11. Contact
          </h2>
          <p className="text-gray-700 mb-8">
            Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter :
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Email : <a href={`mailto:${SITE_INFO.email}`} className="text-primary-600 hover:text-primary-700">{SITE_INFO.email}</a></li>
            <li>Téléphone : <a href={`tel:${SITE_INFO.phone}`} className="text-primary-600 hover:text-primary-700">{SITE_INFO.phone}</a></li>
            <li>Adresse : {SITE_INFO.address}</li>
          </ul>

          <p className="text-gray-600 text-sm mt-12">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </Section>
    </>
  );
}
