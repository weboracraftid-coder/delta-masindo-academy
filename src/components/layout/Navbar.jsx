"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Award, ChevronRight, PhoneCall } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Navbar({ onOpenEnrollment }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/tentang' },
    { name: 'Program Pelatihan', href: '/program' },
    { name: 'Sertifikasi', href: '/sertifikasi' },
    { name: 'Artikel', href: '/artikel' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/60 py-3' 
        : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
    }`}>
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl blue-gradient flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <img src="/logo_delta_masindo.jpeg" alt="" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg leading-tight tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                LPK DELTA MASINDO
              </span>
              <span className="text-[11px] font-bold tracking-widest text-blue-600 uppercase">
                ACADEMY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-600">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg transition-colors relative ${
                    isActive
                      ? 'text-blue-600 font-semibold bg-blue-50/70'
                      : 'hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="accent" 
              size="sm" 
              onClick={() => onOpenEnrollment ? onOpenEnrollment() : (window.location.href = '/program')}
            >
              Daftar Pelatihan
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl py-5 px-6 animate-in slide-in-from-top duration-200 z-40 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 font-semibold bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-5 mt-4 border-t border-slate-100 flex flex-col gap-3">
            <Button 
              variant="accent" 
              size="md" 
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnrollment) onOpenEnrollment();
                else window.location.href = '/program';
              }}
            >
              Daftar Pelatihan
            </Button>
            <Button 
              variant="outline" 
              size="md" 
              href="/kontak" 
              icon={PhoneCall}
              className="w-full justify-center"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
