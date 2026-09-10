import React from 'react';
import { Award, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { certifications } from '@/data/certifications';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function CertificationsPreview() {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <Container className="relative z-10">
        <SectionTitle
          preTitle="Standar Uji Kompetensi"
          title="Sertifikasi"
          highlight="Kompetensi Lembaga"
          subtitle="Tingkatkan pengakuan profesionalitas Anda melalui uji asesmen skema kompetensi sesuai bidang pelatihan yang diikuti."
          className="text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.slice(0, 3).map((scheme) => (
            <div 
              key={scheme.id}
              className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-blue-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="accent" className="bg-white border-sky-800 text-blue-600">
                    {scheme.category}
                  </Badge>
                  <span className="text-xs text-slate-400 font-mono">{scheme.code}</span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {scheme.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {scheme.description}
                </p>

                <div className="pt-3 border-t border-slate-700/60 space-y-2">
                  <span className="text-xs font-semibold text-sky-400 block uppercase tracking-wider">Unit Uji Utama:</span>
                  {scheme.units.slice(0, 2).map((unit, uIdx) => (
                    <div key={uIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{unit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Button href="/sertifikasi" variant="outline" size="sm" className="w-full justify-center text-white border-white bg-sky-950  hover:bg-blue-500">
                  Lihat Skema Lengkap
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-10">
          <Button href="/sertifikasi" variant="accent" size="md" icon={ArrowRight}>
            Jelajahi Seluruh Skema Sertifikasi
          </Button>
        </div>
      </Container>
    </section>
  );
}
