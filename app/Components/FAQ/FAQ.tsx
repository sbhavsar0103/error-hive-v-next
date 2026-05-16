'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="bg-[#060010] py-20 px-6 sm:px-8 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-500 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-amber-100/70">
            Find answers to common questions about our services.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className={`border border-amber-500/20 rounded-2xl bg-white/5 overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white/10' : 'hover:bg-white/10'}`}>
              <button className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none" onClick={() => toggleFAQ(index)}>
                <h3 className="text-lg font-semibold text-white pr-8">{item.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-amber-500 flex-shrink-0" />
                )}
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
