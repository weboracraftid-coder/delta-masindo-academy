import { programs } from '@/data/programs';
import { notFound } from 'next/navigation';
import ProgramDetailClient from './ProgramDetailClient';

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default async function ProgramDetailPage({ params }) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailClient program={program} />;
}