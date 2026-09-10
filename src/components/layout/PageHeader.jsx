import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import Container from '../ui/Container';

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <div className="relative bg-slate-900 py-12 sm:py-16 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 mb-4">
          <Link href="/" className="flex items-center hover:text-sky-400 transition-colors">
            <Home className="w-4 h-4 mr-1" />
            <span>Beranda</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-sky-400 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-slate-200 font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Header Title & Subtitle */}
        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
