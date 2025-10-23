'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Section, SectionTitle, SectionDescription } from '@/components/ui/section';
import { FAQ_ITEMS } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const categories = [...new Set(FAQ_ITEMS.map(item => item.category))];

  return (
    <>
      {/* Hero */}
      <Section background="gray" backgroundImage="/images/backgrounds/zen-garden.jpg">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle center light>
            Questions fréquentes
          </SectionTitle>
          <SectionDescription center light>
            Trouvez les réponses à vos questions sur le magnétisme et les soins énergétiques
          </SectionDescription>
        </div>
      </Section>

      {/* FAQ par catégorie */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold font-serif text-primary-800 mb-6 pb-2 border-b-2 border-primary-200">
                {category}
              </h2>
              <div className="space-y-4">
                {FAQ_ITEMS.filter(item => item.category === category).map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-primary-300 transition-colors"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                          openItems.includes(item.id) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openItems.includes(item.id) ? 'max-h-[1000px]' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 pb-4 text-gray-700 whitespace-pre-line">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif mb-4 text-gray-900">
            Vous avez d'autres questions ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            N'hésitez pas à me contacter directement, je serai ravi de vous répondre.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Me contacter
          </a>
        </div>
      </Section>
    </>
  );
}
