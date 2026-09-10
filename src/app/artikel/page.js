"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import EnrollmentModal from '@/components/layout/EnrollmentModal';
import Container from '@/components/ui/Container';
import ArticleCard from '@/components/article/ArticleCard';
import { articles } from '@/data/articles';
import { Search, Filter } from 'lucide-react';

export default function ArticlesPage() {
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Semua', 'Tips Karier', 'Dunia Kerja', 'Pelatihan', 'Sertifikasi', 'Teknologi'];

  const filteredArticles = articles.filter(a => {
    const matchesCategory = activeCategory === 'Semua' || a.category === activeCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar onOpenEnrollment={() => setEnrollmentModalOpen(true)} />

      <main>
        <PageHeader 
          title="Artikel & Informasi"
          subtitle="Baca wawasan seputar strategi karir, tren keahlian industri, sertifikasi kompetensi, dan informasi terbaru."
          breadcrumbs={[{ label: 'Artikel' }]}
        />

        <section className="py-12 sm:py-16 bg-slate-50 min-h-[60vh]">
          <Container>
            
            {/* Filter Bar */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Search input */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="Cari topik artikel..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* Categories */}
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        activeCategory === cat
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

              </div>
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((art) => (
                  <ArticleCard key={art.id} article={art} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center max-w-md mx-auto border border-slate-200 space-y-3">
                <Filter className="w-10 h-10 text-slate-400 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">Artikel Tidak Ditemukan</h3>
                <p className="text-xs text-slate-500">Coba ubah filter pencarian Anda.</p>
                <button
                  onClick={() => { setActiveCategory('Semua'); setSearchQuery(''); }}
                  className="text-xs font-bold text-blue-600 hover:underline pt-2 inline-block cursor-pointer"
                >
                  Reset Filter
                </button>
              </div>
            )}

          </Container>
        </section>
      </main>

      <Footer />
      <EnrollmentModal isOpen={enrollmentModalOpen} onClose={() => setEnrollmentModalOpen(false)} />
    </>
  );
}
