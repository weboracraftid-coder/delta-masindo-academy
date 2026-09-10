"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '@/data/faq';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative">
      <Container>
        <SectionTitle
          preTitle="Paling Sering Ditanyakan"
          title="Tanya Jawab"
          highlight="Populer (FAQ)"
          subtitle="Temukan jawaban cepat atas pertanyaan yang sering diajukan mengenai program pelatihan dan pendaftaran."
        />

        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <div className="pt-4">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
