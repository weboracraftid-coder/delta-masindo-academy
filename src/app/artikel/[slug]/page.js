import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';
import ArticleDetailClient from './ArticleDetailClient';

// generateStaticParams WAJIB di Server Component
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((a) => a.id !== article.id).slice(0, 2);

  return <ArticleDetailClient article={article} relatedArticles={relatedArticles} />;
}