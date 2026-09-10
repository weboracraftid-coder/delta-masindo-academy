import React from 'react';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function CTA({ onOpenEnrollment }) {
  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <Container>
        <div className="relative rounded-3xl blue-gradient p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl text-white">
          
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-400/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-200 text-xs sm:text-sm font-semibold">
              <span>Mulai Perjalanan Keterampilan Karir Anda</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Siap Meningkatkan Kompetensi Anda?
            </h2>

            <p className="text-base sm:text-lg text-sky-100 leading-relaxed max-w-2xl mx-auto font-normal">
              Temukan program pelatihan yang sesuai dan mulai langkah nyata Anda menuju masa depan dunia kerja yang lebih siap dan percaya diri.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="accent" 
                size="lg" 
                href="/program" 
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Lihat Program Pelatihan
              </Button>
              <Button 
                variant="white" 
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
      </Container>
    </section>
  );
}
