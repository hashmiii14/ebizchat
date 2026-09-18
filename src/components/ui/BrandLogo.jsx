import React from 'react';

/**
 * BrandLogo - Vector-sharp eBizChat logo by Orizer
 * Ensures proper branding across navbar, footer, loader, and modals without blur or distortion.
 */
export default function BrandLogo({
  size = 'md',
  variant = 'default',
  showTagline = true,
  className = '',
}) {
  // Size mapping
  const sizeMap = {
    sm: {
      icon: 'w-7 h-7',
      text: 'text-lg',
      tagline: 'text-[9px]',
      gap: 'gap-2',
    },
    md: {
      icon: 'w-9 h-9',
      text: 'text-2xl',
      tagline: 'text-[10px]',
      gap: 'gap-2.5',
    },
    lg: {
      icon: 'w-11 h-11',
      text: 'text-3xl',
      tagline: 'text-xs',
      gap: 'gap-3',
    },
    xl: {
      icon: 'w-14 h-14',
      text: 'text-4xl',
      tagline: 'text-sm',
      gap: 'gap-3.5',
    },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  // Variant color mapping
  const textColor = variant === 'white' ? 'text-white' : 'text-slate-900';
  const accentColor = variant === 'white' ? 'text-emerald-400' : 'text-emerald-600';
  const taglineColor = variant === 'white' ? 'text-emerald-200/80' : 'text-slate-500';

  return (
    <div className={`flex items-center ${currentSize.gap} select-none ${className}`}>
      {/* Crisp Vector SVG Mark */}
      <div className={`${currentSize.icon} rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-sm flex-shrink-0 transition-transform group-hover:scale-105`}>
        <svg
          className="w-3/5 h-3/5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Chat Bubble */}
          <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.58 3.38 17.07L2.05 21.95L7.07 20.64C8.52 21.5 10.2 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" />
          {/* S-wave converse wave in white */}
          <path
            d="M8.5 9.5C9.5 8.5 11.5 8 13.5 8.5C15.5 9 16.5 10.5 15.5 12C14.5 13.5 11 13 10.5 14.5C10 15.5 11 16.5 13 16.5"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Typography */}
      {variant !== 'minimal' && (
        <div className="flex flex-col leading-none">
          <div className={`font-extrabold tracking-tight ${currentSize.text} font-sans flex items-center`}>
            <span className={textColor}>eBiz</span>
            <span className={accentColor}>Chat</span>
          </div>
          {showTagline && (
            <span className={`${currentSize.tagline} font-mono font-semibold tracking-wider ${taglineColor} uppercase mt-0.5`}>
              by Orizer
            </span>
          )}
        </div>
      )}
    </div>
  );
}
