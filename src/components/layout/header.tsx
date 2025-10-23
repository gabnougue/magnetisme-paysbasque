'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '../ui/container';
import { Button } from '../ui/button';
import { NAV_LINKS, SITE_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo / Site name */}
          <Link href="/" className="text-xl md:text-2xl font-bold font-serif text-primary-700 hover:text-primary-800 transition-colors">
            {SITE_INFO.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-gray-700 hover:text-primary-600 transition-colors font-medium',
                  pathname === link.href && 'text-primary-600'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" size="sm">
              Prendre RDV
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-gray-700 hover:text-primary-600 transition-colors font-medium',
                    pathname === link.href && 'text-primary-600'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="/contact"
                size="sm"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Prendre RDV
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
