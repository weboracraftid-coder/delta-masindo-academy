import React from 'react';
import Link from 'next/link';
import { Award, MapPin, Phone, Mail, Globe, Share2 } from 'lucide-react';
import Container from '../ui/Container';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl blue-gradient flex items-center justify-center text-white shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-white leading-tight tracking-tight">
                  LPK DELTA MASINDO
                </span>
                <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase">
                  ACADEMY
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Lembaga Pelatihan Kerja terpercaya yang berfokus pada pengembangan keterampilan terapan, peningkatan kompetensi, dan kesiapan tenaga kerja menghadapi kebutuhan dunia industri modern.
            </p>

            {/* Social Links with inline SVGs */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors" aria-label="TikTok">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.96-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.34 1.53-1.33 2.54.01.97.51 1.91 1.33 2.45.92.61 2.14.65 3.1.1.92-.51 1.53-1.49 1.54-2.55.02-5.46.01-10.93.02-16.39z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide">Navigasi Utama</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-sky-400 transition-colors">Beranda</Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-sky-400 transition-colors">Tentang Kami</Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-sky-400 transition-colors">Program Pelatihan</Link>
              </li>
              <li>
                <Link href="/sertifikasi" className="hover:text-sky-400 transition-colors">Sertifikasi Kompetensi</Link>
              </li>
              <li>
                <Link href="/jadwal" className="hover:text-sky-400 transition-colors">Jadwal Pelatihan</Link>
              </li>
              <li>
                <Link href="/artikel" className="hover:text-sky-400 transition-colors">Artikel & Informasi</Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-sky-400 transition-colors">Hubungi Kami</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Training Programs */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide">Program Unggulan</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/program/administrasi-perkantoran" className="hover:text-sky-400 transition-colors">Administrasi Perkantoran</Link>
              </li>
              <li>
                <Link href="/program/digital-marketing" className="hover:text-sky-400 transition-colors">Digital Marketing Specialist</Link>
              </li>
              <li>
                <Link href="/program/komputer-teknologi-informasi" className="hover:text-sky-400 transition-colors">Komputer & Teknologi Informasi</Link>
              </li>
              <li>
                <Link href="/program/barista-food-beverage" className="hover:text-sky-400 transition-colors">Barista & F&B Service</Link>
              </li>
              <li>
                <Link href="/program/tata-boga" className="hover:text-sky-400 transition-colors">Tata Boga & Culinary Art</Link>
              </li>
              <li>
                <Link href="/program/desain-grafis" className="hover:text-sky-400 transition-colors">Desain Grafis & Multimedia</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base mb-4 tracking-wide">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  Jl. Pelatihan Industri No. 88, Kompleks Pendidikan Vokasi, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                <a href="tel:081234567890" className="text-slate-400 hover:text-white transition-colors">
                  0812-3456-7890 / (021) 555-0199
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <a href="mailto:info@deltamasindoacademy.example" className="text-slate-400 hover:text-white transition-colors">
                  info@deltamasindoacademy.example
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <span className="inline-block text-xs font-semibold px-3 py-1 bg-slate-800 rounded-lg text-emerald-400 border border-slate-700">
                Jam Operasional: Senin - Sabtu (08.00 - 17.00 WIB)
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 LPK DELTA MASINDO ACADEMY. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Bantuan</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
