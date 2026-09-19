import React from 'react';
import logoImg from '../../assets/logo.png';

/**
 * BrandLogo - Official eBizChat logo by Orizer
 * Uses the user-provided official logo asset without distortion.
 */
export default function BrandLogo({
  size = 'md',
  showTagline = true,
  className = '',
  variant = 'default',
}) {
  const sizeMap = {
    sm: { height: 'h-7', tagline: 'text-[9px]' },
    md: { height: 'h-8 sm:h-9 lg:h-10', tagline: 'text-[10px]' },
    lg: { height: 'h-10 sm:h-11 lg:h-12', tagline: 'text-xs' },
    xl: { height: 'h-12 sm:h-14 lg:h-16', tagline: 'text-sm' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Official eBizChat Logo Image (Cropped, 100% Transparent PNG) */}
      <img
        src={logoImg}
        alt="eBizChat Logo"
        draggable="false"
        className={`${currentSize.height} w-auto max-w-[220px] sm:max-w-[260px] object-contain shrink-0 transition-transform duration-200 group-hover:scale-[1.02] ${
          variant === 'white' ? 'brightness-0 invert' : ''
        }`}
        loading="eager"
      />

      {/* Orizer Ecosystem Pill */}
      {showTagline && (
        <span
          className={`hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold font-mono tracking-wide uppercase transition-colors ${
            variant === 'white'
              ? 'bg-white/10 border border-white/15 text-zinc-300'
              : 'bg-zinc-100 border border-zinc-200/90 text-zinc-700'
          }`}
        >
          <span>by Orizer</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] inline-block animate-pulse" />
        </span>
      )}
    </div>
  );
}
