"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { programs } from '@/data/programs';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ProgramCard from '../program/ProgramCard';
import Button from '../ui/Button';

export default function ProgramPreview({ onOpenEnrollment }) {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Administrasi', 'Marketing', 'Teknologi', 'Culinary & F&B', 'Desain'];

  const filteredPrograms = activeCategory === 'Semua' 
    ? programs 
    : programs.filter(p => p.category === activeCategory);

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <Container>
        <SectionTitle
          preTitle="Katalog Vokasi"
          title="Program Pelatihan"
          highlight="Unggulan"
          subtitle="Pilih program pelatihan kerja yang relevan dengan passion dan target karir Anda di era digital."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap my-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <ProgramCard 
              key={program.id} 
              program={program} 
              onOpenEnrollment={onOpenEnrollment} 
            />
          ))}
        </div>

        {/* View All Programs Footer Link */}
        <div className="text-center pt-12">
          <Button href="/program" variant="primary" size="lg" icon={ArrowRight}>
            Lihat Semua Program & Kurikulum
          </Button>
        </div>
      </Container>
    </section>
  );
}
