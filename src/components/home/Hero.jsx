"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Users,
  Award,
  ShieldCheck,
} from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero({ onOpenEnrollment }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-white pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Modern Background Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-sky-300/20 rounded-full blur-2xl pointer-events-none"></div>

      <Container className="relative z-10">
        {/* Gunakan flex-col-reverse untuk mobile agar foto (komponen kedua) naik ke atas */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content (Desktop: Kiri, Mobile: Bawah) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left w-full">
            <div className="lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600 border border-blue-200 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-xs hidden">
              <span>Lembaga Pelatihan Kerja Vokasi Terpercaya</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Bekali Diri,{" "}
              <span className="text-gradient">Tingkatkan Kompetensi</span>, Raih
              Masa Depan
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              LPK DELTA MASINDO ACADEMY hadir membantu Anda menguasai
              keterampilan terapan, kesiapan karir, dan kompetensi yang relevan
              dengan kebutuhan dunia industri modern.
            </p>

            {/* Feature Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Pelatihan 80% Praktik Langsung</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Instruktur Praktisi Berpengalaman</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Sertifikat Pelatihan Resmi</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Pendampingan Kesiapan Kerja</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-end justify-end lg:justify-start gap-4 pt-4">
              <Button
                variant="accent"
                size="lg"
                href="/program"
                icon={ArrowRight}
                className="w-3/5 sm:w-auto"
              >
                Jelajahi Program
              </Button>

              {/* Pembungkus untuk mengontrol hidden/show */}
              <div className="hidden lg:block w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  href="/kontak"
                  icon={PhoneCall}
                  className="w-full sm:w-auto"
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>

          {/* Right Visual Card Showcase (Desktop: Kanan, Mobile: Atas) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Banner Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                  alt="Peserta Pelatihan LPK Delta Masindo Academy"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Floating Bottom Card Label */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 text-slate-900 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        Terbukti & Terpercaya
                      </p>
                      <h4 className="text-sm font-extrabold">
                        Kurikulum Berbasis Dunia Kerja
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-6 -left-6 sm:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float hidden sm:flex">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-black text-slate-900">
                    500+
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    Alumni Berdaya
                  </div>
                </div>
              </div>

              {/* Floating Bottom Right Badge */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Sertifikat Resmi
                  </div>
                  <div className="text-xs text-white">Kelulusan Pelatihan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
