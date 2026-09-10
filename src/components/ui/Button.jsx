import React from 'react';
import Link from 'next/link';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false,
  icon: Icon
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 focus:ring-blue-500 active:scale-[0.98]',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 focus:ring-slate-400 active:scale-[0.98]',
    accent: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md shadow-amber-500/20 focus:ring-amber-400 active:scale-[0.98]',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 active:scale-[0.98]',
    white: 'bg-white text-blue-700 hover:bg-blue-50 shadow-md focus:ring-white active:scale-[0.98]',
    ghost: 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 focus:ring-blue-400'
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base font-semibold gap-2.5'
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </button>
  );
}
