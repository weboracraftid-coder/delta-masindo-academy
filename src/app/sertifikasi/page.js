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
import { certifications } from '@/data/certifications';
import { Award, CheckCircle2, ShieldCheck, FileCheck, ArrowRight } from 'lucide-react';

export default function CertificationsPage() {
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenEnrollment={() => setEnrollmentModalOpen(true)} />

      <main>
        <PageHeader 
          title="Sertifikasi Kompetensi"
          subtitle="Jelajahi skema uji kompetensi lembaga untuk memperoleh bukti resmi keahlian yang diakui standar industri."
          breadcrumbs={[{ label: 'Sertifikasi' }]}
        />

        <section className="py-12 sm:py-16 bg-slate-50">
          <Container>
            
            {/* Overview Banner */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Uji Asesmen & Sertifikasi Vokasi</h2>
                  <p className="text-xs sm:text-sm text-slate-500">Memberikan kepastian pengakuan atas keterampilan teknis yang telah dikuasai.</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Setiap peserta pelatihan yang menyelesaikan program pelatihan di LPK DELTA MASINDO ACADEMY dapat mengikuti uji asesmen kompetensi sesuai skema yang tersedia. Sertifikat pelatihan resmi lembaga diterbitkan sebagai portofolio kesiapan kerja.
              </p>
            </div>

            {/* Certification Schemes Grid */}
            <SectionTitle
              preTitle="Skema Tersedia"
              title="Daftar Skema"
              highlight="Sertifikasi Kompetensi"
              subtitle="Pilih skema asesmen kompetensi yang sesuai dengan keahlian pelatihan Anda."
              align="left"
              className="mb-8"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((scheme) => (
                <div 
                  key={scheme.id}
                  className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="primary">{scheme.category}</Badge>
                      <span className="text-xs font-mono text-slate-400">{scheme.code}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 leading-snug">{scheme.name}</h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {scheme.description}
                    </p>

                    {/* Units list */}
                    <div className="pt-3 space-y-2 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">Unit Kompetensi Diuji:</span>
                      <ul className="space-y-2">
                        {scheme.units.map((unit, uIdx) => (
                          <li key={uIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{unit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Target Participants */}
                    <div className="p-3 rounded-xl bg-slate-50 text-xs text-slate-600 border border-slate-200/60">
                      <strong>Target Peserta:</strong> {scheme.targetParticipants}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button 
                      variant="accent" 
                      size="md" 
                      onClick={() => setEnrollmentModalOpen(true)}
                      className="w-full justify-center"
                      icon={ArrowRight}
                    >
                      Daftar Uji Kompetensi
                    </Button>
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
