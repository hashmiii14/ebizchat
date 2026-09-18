import React from 'react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}) {
  return (
    <div
      className={`max-w-3xl mb-12 ${
        centered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono uppercase tracking-wider font-semibold mb-3`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
