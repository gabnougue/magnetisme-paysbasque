import Link from 'next/link';
import { Container } from '../ui/container';
import { SITE_INFO, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-serif">
              {SITE_INFO.name}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{SITE_INFO.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {SITE_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {SITE_INFO.phone}
                </a>
              </li>
              <li className="text-gray-400">{SITE_INFO.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {SITE_INFO.name}. Tous droits réservés.
            </p>
            <div className="flex gap-4 text-sm">
              <Link
                href="/mentions-legales"
                className="hover:text-primary-400 transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="hover:text-primary-400 transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
