import React from 'react';
import { Layers, UserCheck, Monitor, Building2, Calendar, Award } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Keunggulan() {
  const features = [
    {
      icon: Layers,
      title: "Materi Praktis 80%",
      description: "Fokus utama pada simulasi praktik nyata agar peserta langsung terbiasa dengan alur kerja di lapangan."
    },
    {
      icon: UserCheck,
      title: "Instruktur Profesional",
      description: "Dibimbing oleh praktisi industri ahli yang berpengalaman menangani proyek dan operasional bisnis nyata."
    },
    {
      icon: Monitor,
      title: "Kelas Interaktif",
      description: "Jumlah peserta dibatasi dalam setiap angkatan agar proses konsultasi dan praktik berjalan optimal."
    },
    {
      icon: Building2,
      title: "Fasilitas Modern",
      description: "Ruang lab komputer ber-AC, studio barista komersial, dan dapur praktikum standar industri."
    },
    {
      icon: Calendar,
      title: "Jadwal Fleksibel",
      description: "Tersedia pilihan kelas pagi, siang, maupun kelas akhir pekan (weekend) sesuai kebutuhan peserta."
    },
    {
      icon: Award,
      title: "Pendampingan Peserta",
      description: "Bimbingan pembuatan portofolio, persiapan wawancara kerja, dan pengarahan karir lulusan."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <Container>
        <SectionTitle
          preTitle="Nilai Tambah"
          title="Belajar Lebih Siap untuk"
          highlight="Dunia Kerja"
          subtitle="Berbagai keunggulan yang menjadikan LPK DELTA MASINDO ACADEMY pilihan tepat untuk melangkah ke jenjang karir impian."
        />

        {/* 1. Tampilan 3D Coverflow Slider untuk Mobile & Tablet (< lg) */}
        <div className="block lg:hidden mt-12 pb-8">
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.8 },
            }}
            className="pb-12 [&_.swiper-pagination]:!-bottom-1"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <SwiperSlide key={idx} className="h-auto py-4">
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-md h-full flex flex-col justify-between transform-gpu backface-hidden">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* 2. Tampilan Grid Biasa untuk Laptop & Desktop (>= lg) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}