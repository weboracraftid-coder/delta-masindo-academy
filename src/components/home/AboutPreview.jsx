import React from 'react';
import Image from 'next/image';
import { Target, Users, Briefcase, Wrench, HeartHandshake, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

export default function AboutPreview() {
  const values = [
    {
      icon: Target,
      title: "Pelatihan Berbasis Kompetensi",
      desc: "Kurikulum dirancang fokus pada pemenuhan indikator kecakapan teknis yang dibutuhkan tempat kerja."
    },
    {
      icon: Users,
      title: "Instruktur Berpengalaman",
      desc: "Bimbingan langsung dari praktisi industri berpengalaman di bidangnya masing-masing."
    },
    {
      icon: Briefcase,
      title: "Materi Relevan Dunia Kerja",
      desc: "Selalu diperbarui mengikuti tren industri terbaru agar lulusan memiliki daya saing tinggi."
    },
    {
      icon: Wrench,
      title: "Pembelajaran Praktis 80%",
      desc: "Dominasi praktik langsung di laboratorium & studio praktikum standar kerja profesional."
    },
    {
      icon: HeartHandshake,
      title: "Pendampingan Peserta",
      desc: "Konsultasi Karir, arahan pembuatan portofolio, dan bimbingan hingga siap terjun ke dunia kerja."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Image Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Suasana Pembelajaran LPK Delta Masindo Academy"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Inset Decorative Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Komitmen Kami</p>
                <p className="text-xs font-semibold text-slate-800 mt-1">
                  &quot;Mencetak SDM kompeten, terampil, dan berkarakter unggul untuk masa depan.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Core Values */}
          <div className="lg:col-span-7 space-y-6">
            <SectionTitle
              align="left"
              preTitle="Tentang Lembaga"
              title="Kenapa Memilih"
              highlight="LPK DELTA MASINDO ACADEMY?"
              subtitle="Kami berkomitmen melatih dan membina peserta agar siap menghadapi tantangan persaingan dunia kerja dengan keterampilan yang teruji."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-2xs hover:shadow-md transition-shadow flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{val.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Button href="/tentang" variant="primary" size="md" icon={ArrowRight}>
                Kenal Lebih Dekat
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
