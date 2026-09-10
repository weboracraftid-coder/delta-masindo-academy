"use client";

import React, { useState, use } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import EnrollmentModal from '@/components/layout/EnrollmentModal';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { programs } from '@/data/programs';
import { notFound } from 'next/navigation';
import { Clock, BarChart, CheckCircle2, BookOpen, Award, Users, Briefcase, ChevronRight, Send } from 'lucide-react';

export default function ProgramDetailPage({ params }) {
  // Unwrap params using React.use()
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const program = programs.find(p => p.slug === slug);
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);

  if (!program) {
    notFound();
  }

  return (
    <>
      <Navbar onOpenEnrollment={() => setEnrollmentModalOpen(true)} />

      <main>
        <PageHeader
          title={program.title}
          subtitle={program.shortDescription}
          breadcrumbs={[
            { label: 'Program Pelatihan', href: '/program' },
            { label: program.title }
          ]}
        />

        <section className="py-12 sm:py-16 bg-slate-50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Main Content */}
              <div className="lg:col-span-8 space-y-10">
                
                {/* Featured Image */}
                <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-white">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-[320px] sm:h-[420px] object-cover"
                  />
                  <div className="p-6 bg-white border-t border-slate-100 flex flex-wrap gap-6 text-sm text-slate-600 font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span><strong>Durasi:</strong> {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart className="w-5 h-5 text-sky-600" />
                      <span><strong>Tingkat:</strong> {program.level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-500" />
                      <span><strong>Metode:</strong> {program.mode}</span>
                    </div>
                  </div>
                </div>

                {/* Full Description */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
                  <h2 className="text-2xl font-bold text-slate-900">Deskripsi Pelatihan</h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {program.fullDescription}
                  </p>
                </div>

                {/* Curriculum Breakdown */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold text-slate-900">Kurikulum & Materi Pelatihan</h2>
                  </div>

                  <div className="space-y-4">
                    {program.curriculum.map((mod, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
                        <h3 className="text-base font-bold text-blue-700">{mod.module}</h3>
                        <ul className="space-y-2">
                          {mod.topics.map((top, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{top}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience & Careers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-base">
                      <Users className="w-5 h-5" />
                      <span>Target Peserta</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      {program.targetParticipants.map((tp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                          <span>{tp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
                    <div className="flex items-center gap-2 text-sky-600 font-bold text-base">
                      <Briefcase className="w-5 h-5" />
                      <span>Prospek Karir Lulusan</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      {program.careerOpportunities.map((co, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 shrink-0"></span>
                          <span>{co}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Facilities Checklist */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Fasilitas Peserta</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {program.facilities.map((fac, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 text-xs sm:text-sm text-slate-700 font-medium border border-slate-200/60">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Sticky Registration Box */}
              <div className="lg:col-span-4">
                <div className="sticky top-24 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
                  
                  <div className="space-y-2">
                    <Badge variant="primary">{program.category}</Badge>
                    <h3 className="text-2xl font-black text-slate-900">{program.title}</h3>
                    <p className="text-xs text-slate-500">Pendaftaran kelas angkatan baru sedang dibuka.</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100 text-sm">
                    <div className="flex justify-between text-slate-600">
                      <span>Durasi Pelatihan:</span>
                      <strong className="text-slate-900">{program.duration}</strong>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Metode:</span>
                      <strong className="text-slate-900">{program.mode}</strong>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Sertifikat:</span>
                      <strong className="text-emerald-600 font-bold">Resmi Lembaga</strong>
                    </div>
                  </div>

                  <div className="pt-2 space-y-3">
                    <Button 
                      variant="accent" 
                      size="lg" 
                      onClick={() => setEnrollmentModalOpen(true)} 
                      className="w-full justify-center"
                      icon={Send}
                    >
                      Daftar Sekarang
                    </Button>
                    <Button 
                      variant="outline" 
                      size="md" 
                      href="/kontak" 
                      className="w-full justify-center"
                    >
                      Tanya Konsultasi
                    </Button>
                  </div>

                </div>
              </div>

            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <EnrollmentModal
        isOpen={enrollmentModalOpen}
        onClose={() => setEnrollmentModalOpen(false)}
        selectedProgramTitle={program.title}
      />
    </>
  );
}
