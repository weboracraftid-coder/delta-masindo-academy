import React from 'react';
import Link from 'next/link';
import { Clock, BarChart, ArrowRight } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ProgramCard({ program, onOpenEnrollment }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
      
      {/* Image Banner & Badge */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge variant="primary" className="bg-white/90 backdrop-blur-md shadow-xs">
            {program.category}
          </Badge>
        </div>
        {program.badgeText && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-500 text-white shadow-xs">
              {program.badgeText}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {program.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
            {program.shortDescription}
          </p>
        </div>

        {/* Metadata info */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BarChart className="w-4 h-4 text-sky-600" />
            <span>{program.level}</span>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-2 flex items-center gap-2">
          <Button 
            href={`/program/${program.slug}`} 
            variant="outline" 
            size="sm" 
            className="w-full justify-center"
            icon={ArrowRight}
          >
            Lihat Detail
          </Button>
        </div>
      </div>

    </div>
  );
}
