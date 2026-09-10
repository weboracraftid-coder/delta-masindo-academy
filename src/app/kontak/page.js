"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import EnrollmentModal from '@/components/layout/EnrollmentModal';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { programs } from '@/data/programs';

export default function ContactPage() {
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: programs[0] ? programs[0].title : '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <Navbar onOpenEnrollment={() => setEnrollmentModalOpen(true)} />

      <main>
        <PageHeader 
          title="Hubungi Kami"
          subtitle="Tim layanan konsultasi LPK DELTA MASINDO ACADEMY siap menjawab pertanyaan dan membantu kebutuhan pelatihan Anda."
          breadcrumbs={[{ label: 'Kontak' }]}
        />

        <section className="py-12 sm:py-16 bg-slate-50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Contact Info Side */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Informasi Kontak</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Mari Terhubung Bersama Kami</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Kunjungi kantor kami atau hubungi melalui saluran informasi di bawah ini untuk konsultasi program pelatihan vokasi.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Alamat Kampus Utama</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Jl. Pelatihan Industri No. 88, Kompleks Pendidikan Vokasi, Indonesia
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Telepon & WhatsApp</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        0812-3456-7890 / (021) 555-0199
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Email Layanan</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        info@deltamasindoacademy.example
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Jam Operasional Kantor</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Senin - Sabtu: 08:00 - 17:00 WIB (Minggu Libur)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
                  <h4 className="text-sm font-bold text-slate-900">Media Sosial Official</h4>
                  <div className="flex items-center gap-3">
                    <a href="#" className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors" aria-label="Instagram">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors" aria-label="Facebook">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors" aria-label="TikTok">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.96-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.34 1.53-1.33 2.54.01.97.51 1.91 1.33 2.45.92.61 2.14.65 3.1.1.92-.51 1.53-1.49 1.54-2.55.02-5.46.01-10.93.02-16.39z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors" aria-label="YouTube">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form Side */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
                  
                  {formSubmitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-black text-slate-900">Pesan Berhasil Dikirim!</h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        Terima kasih, <strong>{formData.name}</strong>. Pesan Anda telah diterima oleh tim administrasi LPK Delta Masindo Academy. Kami akan membalas pesan Anda melalui WhatsApp/Email secepatnya.
                      </p>
                      <div className="pt-4">
                        <Button 
                          variant="primary" 
                          size="md" 
                          onClick={() => setFormSubmitted(false)}
                        >
                          Kirim Pesan Lain
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900">Kirim Pesan Konsultasi</h3>
                        <p className="text-xs text-slate-500 mt-1">Lengkapi form di bawah untuk bertanya seputar pendaftaran & kelas.</p>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Masukkan nama lengkap Anda"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="nama@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Nomor WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="0812xxxxxxxx"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Program Pelatihan yang Diminati
                        </label>
                        <select
                          value={formData.program}
                          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                        >
                          {programs.map((p) => (
                            <option key={p.id} value={p.title}>{p.title}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Pesan / Pertanyaan *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Tuliskan pertanyaan atau informasi yang ingin Anda konsultasikan..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full p-4 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                      </div>

                      <div className="pt-2">
                        <Button 
                          type="submit" 
                          variant="accent" 
                          size="lg" 
                          className="w-full justify-center"
                          icon={Send}
                        >
                          Kirim Pesan Sekarang
                        </Button>
                      </div>
                    </form>
                  )}

                </div>
              </div>

            </div>

            {/* Interactive Map Visual Placeholder */}
            <div className="mt-12 bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Peta Lokasi Kampus</span>
                  </div>
                  <h3 className="text-xl font-bold">LPK DELTA MASINDO ACADEMY</h3>
                  <p className="text-xs text-slate-300 max-w-lg">
                    Kompleks Pendidikan Vokasi, Jl. Pelatihan Industri No. 88, Indonesia. Mudah diakses dari berbagai jalur transportasi publik.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="md" 
                  onClick={() => alert('Membuka Google Maps ke LPK Delta Masindo Academy')}
                  className="text-white border-white hover:bg-white hover:text-slate-900 shrink-0"
                >
                  Buka di Google Maps
                </Button>
              </div>
            </div>

          </Container>
        </section>
      </main>

      <Footer />
      <EnrollmentModal isOpen={enrollmentModalOpen} onClose={() => setEnrollmentModalOpen(false)} />
    </>
  );
}
