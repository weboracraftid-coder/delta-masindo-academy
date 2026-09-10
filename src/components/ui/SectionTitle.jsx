import React from 'react';

export default function SectionTitle({
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto max-w-3xl',
    right: 'text-right ms-auto max-w-3xl',
  };

  return (
    <div
      className={`space-y-3 ${alignClasses[align] || alignClasses.center} ${className}`}
    >
      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
          {highlight ? (
            <span className="text-gradient">
              {title} {highlight}
            </span>
          ) : (
            title
          )}
        </h2>
      )}

      {subtitle && (
        <p className="text-base sm:text-lg leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}