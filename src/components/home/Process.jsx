import React, { useState } from 'react';
import { Search, FormInput, PhoneCall, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

export default function Process() {
  const [steps, setSteps] = useState([
    {
      id: "01",
      number: "01",
      title: "Pilih Program",
      description: "Telusuri pilihan program pelatihan vokasi yang sesuai dengan bakat dan arah karir impian Anda.",
      icon: Search
    },
    {
      id: "02",
      number: "02",
      title: "Isi Formulir Pendaftaran",
      description: "Lengkapi data diri pendaftar secara online melalui formulir pendaftaran website.",
      icon: FormInput
    },
    {
      id: "03",
      number: "03",
      title: "Konfirmasi Pendaftaran",
      description: "Tim admin kami akan menghubungi Anda untuk konfirmasi jadwal, kelas, dan informasi administrasi.",
      icon: PhoneCall
    },
    {
      id: "04",
      number: "04",
      title: "Ikuti Pelatihan",
      description: "Mulai kelas praktikum intensif bersama instruktur profesional di laboratorium terlengkap.",
      icon: GraduationCap
    }
  ]);

  // Pindahkan kartu teratas ke posisi paling bawah tumpukan (Infinite Loop)
  const handleNextCard = () => {
    setSteps((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <Container>
        <SectionTitle
          preTitle="Alur Pendaftaran"
          title="Cara Mengikuti"
          highlight="Pelatihan Vokasi"
          subtitle="4 langkah mudah memulai perjalanan peningkatan kompetensi diri bersama LPK DELTA MASINDO ACADEMY."
        />

        {/* Tampilan Card Stack Infinite untuk Mobile (< lg) */}
        <div className="block lg:hidden mt-12">
          <div className="relative h-[280px] w-full max-w-sm mx-auto flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isTop = idx === 0;

                return (
                  <motion.div
                    key={step.id}
                    layout
                    style={{
                      zIndex: steps.length - idx,
                    }}
                    initial={{ scale: 0.9, y: idx * 12, opacity: 0 }}
                    animate={{
                      scale: 1 - idx * 0.05,
                      y: idx * 12,
                      opacity: 1 - idx * 0.15,
                    }}
                    exit={{
                      x: 300,
                      opacity: 0,
                      scale: 0.8,
                      rotate: 15,
                      transition: { duration: 0.25 }
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    onClick={isTop ? handleNextCard : undefined}
                    className={`absolute inset-0 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md flex flex-col justify-between select-none cursor-pointer ${
                      isTop ? 'border-blue-500/50 shadow-xl ring-2 ring-blue-500/10' : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-black text-blue-600 font-mono">
                          {step.number}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                      <span className="text-[10px] text-slate-400 font-medium">
                        {isTop ? "Klik untuk lanjut →" : ""}
                      </span>
                      <div className="w-16 h-1 bg-blue-100 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Grid Normal Desktop (>= lg) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mt-12 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="relative bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-blue-600/40 group-hover:text-blue-600 transition-colors font-mono">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="w-full h-1 bg-blue-100 rounded-full mt-6 overflow-hidden">
                  <div className="w-1/2 h-full bg-blue-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}