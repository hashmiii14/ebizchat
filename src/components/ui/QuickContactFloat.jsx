import React from 'react';
import { Phone } from 'lucide-react';
import { ORIZER_INFO } from '../../data/orizerData';

export default function QuickContactFloat() {
  const callNumber = ORIZER_INFO.contact.helpdeskPhones[0].raw; // +919898236655
  const callDisplay = ORIZER_INFO.contact.helpdeskPhones[0].number; // +91 98982 36655
  const whatsappNumber = '919998391947';
  const whatsappDisplay = '+91 99983 91947';

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello Orizer eBizChat Team, I would like to explore WhatsApp Business API, Lead Automation, and ERP integration for my business.'
  )}`;

  return (
    <>
      {/* ─── LEFT SIDE FLOATING BUTTON = CALL (VERTICALLY CENTERED) ─── */}
      <div className="fixed left-3 sm:left-5 top-1/2 -translate-y-1/2 z-50 pointer-events-auto">
        <a
          href={`tel:${callNumber}`}
          className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 transition-all hover:scale-110 active:scale-95 focus:outline-none"
          aria-label={`Call Orizer HelpDesk at ${callDisplay}`}
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-25 animate-ping -z-10" />

          {/* Official Phone Icon */}
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />

          {/* Tooltip on hover (appears to the right) */}
          <div className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-xl border border-slate-700 flex items-center gap-1.5">
            <span>Call HelpDesk:</span>
            <span className="font-mono text-emerald-400">{callDisplay}</span>
          </div>
        </a>
      </div>

      {/* ─── RIGHT SIDE FLOATING BUTTON = WHATSAPP (VERTICALLY CENTERED) ─── */}
      <div className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-50 pointer-events-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-all hover:scale-110 active:scale-95 focus:outline-none"
          aria-label={`Chat on WhatsApp at ${whatsappDisplay}`}
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-ping -z-10" />

          {/* Official WhatsApp SVG Icon */}
          <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25.7-.93 1.28-1.6 1.45-.48.12-1.1.22-3.19-.65-2.68-1.11-4.4-3.83-4.54-4.01-.13-.18-1.09-1.46-1.09-2.78 0-1.32.69-1.97.93-2.24.25-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4.06.6.53.22.52.75 1.83.82 1.97.07.13.11.3.02.48-.09.17-.14.28-.27.44-.14.15-.29.34-.41.46-.14.13-.28.28-.12.56.16.27.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.61-.07.17-.19.72-.84.91-1.13.19-.28.39-.24.65-.14.26.1 1.66.78 1.94.92.29.14.48.21.55.33.07.13.07.74-.18 1.44z" />
          </svg>

          {/* Tooltip on hover (appears to the left) */}
          <div className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-xl border border-slate-700 flex items-center gap-1.5">
            <span>Chat on WhatsApp:</span>
            <span className="font-mono text-emerald-400">{whatsappDisplay}</span>
          </div>
        </a>
      </div>
    </>
  );
}
