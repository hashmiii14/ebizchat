import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AnnouncementBar() {
  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 font-medium text-[11px] border border-brand-500/30">
          <Sparkles className="w-3 h-3 text-brand-400" />
          Orizer ERP 2026 Release
        </span>
        <span className="text-slate-300">
          Connect your factory floor to WhatsApp: Native 2-Way Sync for Order Dispatches & Dealer CRM is now live.
        </span>
        <Link
          to="/solutions/manufacturing"
          className="inline-flex items-center gap-1 font-semibold text-brand-400 hover:text-brand-300 transition-colors underline underline-offset-2 ml-1"
        >
          Explore Manufacturing Sync
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
