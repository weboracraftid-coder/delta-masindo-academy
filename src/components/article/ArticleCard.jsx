import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
      
      {/* Image Banner */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="accent" className="bg-white/90 backdrop-blur-md">
            {article.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-2">
          <Button 
            href={`/artikel/${article.slug}`} 
            variant="ghost" 
            size="sm" 
            className="p-0 text-blue-600 hover:text-blue-800 font-bold gap-1"
            icon={ArrowRight}
          >
            Baca Selengkapnya
          </Button>
        </div>
      </div>

    </div>
  );
}
