"use client";

import React, { useState, use } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import EnrollmentModal from '@/components/layout/EnrollmentModal';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import ArticleCard from '@/components/article/ArticleCard';
import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, Share2, Bookmark } from 'lucide-react';

export default function ArticleDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const article = articles.find(a => a.slug === slug);
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <>
      <Navbar onOpenEnrollment={() => setEnrollmentModalOpen(true)} />

      <main>
        <PageHeader
          title={article.title}
          subtitle={`Dipublikasikan oleh ${article.author}`}
          breadcrumbs={[
            { label: 'Artikel', href: '/artikel' },
            { label: article.category }
          ]}
        />

        <section className="py-12 sm:py-16 bg-slate-50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Main Article Body */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Meta details */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-600 font-medium">
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-blue-600" />
                      {article.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>
                  <Badge variant="primary">{article.category}</Badge>
                </div>

                {/* Main Image */}
                <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[320px] sm:h-[420px] object-cover"
                  />
                </div>

                {/* Article Prose Content */}
                <div 
                  className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-8">
                
                {/* Share Card */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-blue-600" />
                    <span>Bagikan Artikel Ini</span>
                  </h3>
                  <p className="text-xs text-slate-500">Bagikan artikel ini ke media sosial Anda untuk memberikan manfaat.</p>
                  <div className="flex gap-2 pt-1">
                    <button onClick={() => alert('Link artikel disalin!')} className="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-700 w-full cursor-pointer">
                      Salin Tautan
                    </button>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900">Artikel Terkait</h3>
                  <div className="space-y-6">
                    {relatedArticles.map((rel) => (
                      <ArticleCard key={rel.id} article={rel} />
                    ))}
                  </div>
                </div>

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
