"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import EnrollmentModal from '@/components/layout/EnrollmentModal';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Target, Compass, Award, ShieldCheck, CheckCircle2, Users, Building, Image as ImageIcon } from 'lucide-react';
import { instructors } from '@/data/instructors';
import { gallery } from '@/data/gallery';

export default function AboutPage() {
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenEnrollment={() => setEnrollmentModalOpen(true)} />

      <main>
        <PageHeader 
          title="Profil Lembaga"
          subtitle="Mengenal lebih dekat LPK DELTA MASINDO ACADEMY sebagai mitra terpercaya pengembangan keterampilan dan kompetensi vokasi."
          breadcrumbs={[{ label: 'Tentang Kami' }]}
        />

        {/* Institution Overview */}
        <section className="py-16 sm:py-20 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <Badge variant="primary">Tentang LPK Delta Masindo</Badge>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                  Mencetak SDM Kompeten & Ready for World of Work
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  LPK DELTA MASINDO ACADEMY hadir sebagai lembaga pelatihan kerja yang membantu peserta meningkatkan keterampilan, kompetensi, dan kesiapan kerja melalui program pelatihan yang relevan dengan kebutuhan dunia industri modern.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Kami mengintegrasikan kurikulum vokasi berbasis standar kompetensi kerja industri dengan metode pembelajaran praktis 80%. Setiap program didukung fasilitas studio dan laboratorium praktikum berteknologi mutakhir.
                </p>

                <div className="pt-2 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-black text-blue-600">80%</div>
                    <div className="text-xs font-semibold text-slate-700 mt-1">Komposisi Praktik</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-black text-sky-600">100%</div>
                    <div className="text-xs font-semibold text-slate-700 mt-1">Instruktur Praktisi</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                    alt="Gedung & Kegiatan Pelatihan LPK Delta Masindo"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <Container>
            <SectionTitle
              preTitle="Arah & Landasan"
              title="Visi & Misi"
              highlight="Lembaga"
              subtitle="Panduan langkah kami dalam membangun ekosistem pelatihan vokasi berkualitas tinggi."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              
              {/* Vision */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Visi Lembaga</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  &quot;Menjadi Lembaga Pelatihan Kerja Vokasi unggulan, terpercaya, dan berstandar profesional dalam menghasilkan tenaga kerja berdaya saing tinggi serta berintegritas.&quot;
                </p>
              </div>

              {/* Mission */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Misi Lembaga</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Menyelenggarakan program pelatihan berbasis praktikum yang adaptif terhadap tren teknologi industri.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Menyediakan sarana & prasarana laboratorium praktikum standar kerja profesional.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Melakukan pembinaan mentalitas, etika kerja, dan pendampingan persiapan karir lulusan.</span>
                  </li>
                </ul>
              </div>

            </div>
          </Container>
        </section>

        {/* Instructors Team */}
        <section className="py-16 sm:py-20 bg-white">
          <Container>
            <SectionTitle
              preTitle="Pengajar Ahli"
              title="Instruktur"
              highlight="Berpengalaman"
              subtitle="Dibimbing langsung oleh praktisi berpengalaman yang siap mentransfer keahlian lapangan."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {instructors.map((ins) => (
                <div key={ins.id} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                  <div className="h-56 bg-slate-200 overflow-hidden">
                    <img src={ins.image} alt={ins.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-bold uppercase text-blue-600 tracking-wider">{ins.role}</span>
                    <h4 className="text-base font-bold text-slate-900 leading-snug">{ins.name}</h4>
                    <p className="text-xs text-slate-500">{ins.experience}</p>
                    <p className="text-xs text-slate-600 pt-2 border-t border-slate-200">Spesialisasi: {ins.specialization}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Facility & Activity Gallery */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <Container>
            <SectionTitle
              preTitle="Dokumentasi & Sarana"
              title="Galeri Kegiatan &"
              highlight="Fasilitas"
              subtitle="Sekilas gambaran sarana praktikum dan suasana pembelajaran aktif peserta di kampus kami."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {gallery.map((g) => (
                <div key={g.id} className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm relative">
                  <img src={g.image} alt={g.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <Badge variant="accent" className="bg-blue-600/90 text-white border-0 text-[10px]">
                      {g.category}
                    </Badge>
                    <h4 className="text-sm font-bold">{g.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <EnrollmentModal isOpen={enrollmentModalOpen} onClose={() => setEnrollmentModalOpen(false)} />
    </>
  );
}
