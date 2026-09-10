import React from 'react';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/data/articles';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ArticleCard from '../article/ArticleCard';
import Button from '../ui/Button';

export default function ArticlesPreview() {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <Container>
        <SectionTitle
          preTitle="Wawasan & Tips"
          title="Artikel &"
          highlight="Informasi Karir"
          subtitle="Dapatkan wawasan seputar tips dunia kerja, panduan persaingan karir, dan perkembangan teknologi vokasi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {articles.slice(0, 3).map((art) => (
            <ArticleCard key={art.id} article={art} />
          ))}
        </div>

        <div className="text-center pt-10">
          <Button href="/artikel" variant="primary" size="md" icon={ArrowRight}>
            Lihat Seluruh Artikel & Informasi
          </Button>
        </div>
      </Container>
    </section>
  );
}
