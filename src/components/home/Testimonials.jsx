import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden perspective-1000">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <Container className="relative z-10">
        <SectionTitle
          preTitle="Kisah Sukses"
          title="Apa Kata"
          highlight="Peserta & Alumni?"
          subtitle="Simak pengalaman nyata para alumni yang telah membuktikan peningkatan kompetensi bersama kami."
          className="text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t, idx) => {
            // Memberikan variasi animasi melayang (mengambang) yang beda-beda tiap kartu
            const floatClass = idx % 2 === 0 ? 'animate-float-slow' : 'animate-float-delayed';

            return (
              <motion.div
                key={t.id}
                whileHover={{ 
                  scale: 1.04, 
                  rotateX: 6, 
                  rotateY: -6, 
                  z: 30 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative ${floatClass}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Efek Cahaya Glow di Belakang Kartu saat Hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>

                <div className="relative p-6 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-2xl flex flex-col justify-between h-full backdrop-blur-xl">
                  <Quote 
                    className="w-10 h-10 text-blue-500/20 absolute top-4 right-4 group-hover:text-blue-500/40 transition-colors duration-300" 
                    style={{ transform: 'translateZ(20px)' }}
                  />

                  <div className="space-y-4 relative z-10" style={{ transform: 'translateZ(30px)' }}>
                    {/* Rating */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                      &quot;{t.comment}&quot;
                    </p>
                  </div>

                  <div 
                    className="pt-6 mt-6 border-t border-slate-700/60 flex items-center gap-3 relative z-10"
                    style={{ transform: 'translateZ(25px)' }}
                  >
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-blue-500 shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                        {t.name}
                      </h4>
                      <p className="text-xs text-sky-400 font-medium">{t.role} • {t.company}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Program: {t.program}</p>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}