import React from 'react';
import { ArrowRight, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ORIZER_INFO } from '../../data/orizerData';

export default function AnnouncementBar() {
  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap text-center sm:text-left">
        {/* Left: Meta Partner Announcement */}
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium text-[11px] border border-emerald-500/30 font-mono">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            Official Meta WABA Partner
          </span>
          <span className="text-slate-300 hidden md:inline">
            Free Green Tick Verification & Zero Meta Markup on Cloud API Conversations.
          </span>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-2 ml-1"
          >
            See Pricing
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Right: Direct Phone Dialing */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-300 ml-auto">
          <span>Need Instant Enterprise Advice?</span>
          <a
            href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`}
            className="inline-flex items-center gap-1.5 font-bold font-mono text-emerald-400 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            +91 96245 13385
          </a>
        </div>
      </div>
    </div>
  );
}
