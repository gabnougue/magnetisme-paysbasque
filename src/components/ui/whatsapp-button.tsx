'use client';

import { MessageCircle } from 'lucide-react';
import { SITE_INFO } from '@/lib/constants';

export default function WhatsAppButton() {
  // Format du numéro pour WhatsApp (enlever les espaces et le +)
  const phoneNumber = SITE_INFO.phone.replace(/[\s+]/g, '');
  const message = encodeURIComponent(
    'Bonjour, je souhaite prendre rendez-vous pour une séance de magnétisme.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contacter par WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Contactez-moi sur WhatsApp
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-primary-600 animate-ping opacity-20"></span>
    </a>
  );
}
