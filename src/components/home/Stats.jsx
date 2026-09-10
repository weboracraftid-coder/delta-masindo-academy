import React from 'react';
import { Users, BookOpen, UserCheck, Star } from 'lucide-react';
import Container from '../ui/Container';

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Stats() {
  const statItems = [
    {
      icon: Users,
      value: "500+",
      label: "Peserta Dilatih",
      desc: "Lulusan siap kerja di berbagai bidang industri",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: BookOpen,
      value: "15+",
      label: "Program Pelatihan",
      desc: "Dirancang sesuai kebutuhan standar pasar kerja",
      color: "from-sky-500 to-blue-600"
    },
    {
      icon: UserCheck,
      value: "10+",
      label: "Instruktur Berpengalaman",
      desc: "Praktisi profesional bidangnya masing-masing",
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: Star,
      value: "95%",
      label: "Kepuasan Peserta",
      desc: "Tingkat kepuasan materi & fasilitas pelatihan",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-1 bg-white relative z-20 -mt-8">
      <Container>
        {/* Tampilan Slider untuk HP (< sm) */}
        <div className="block sm:hidden pb-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.15}
            centeredSlides={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="pb-20 [&_.swiper-pagination]:!-bottom-4"
          >
            {statItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm h-full flex flex-col justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-black text-slate-900 tracking-tight">
                          {item.value}
                        </div>
                        <div className="text-sm font-bold text-slate-700">
                          {item.label}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                      {item.desc}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Tampilan Grid untuk Tablet & Desktop (>= sm) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-sm font-bold text-slate-700">
                      {item.label}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}