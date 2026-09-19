import React from 'react';
import { motion } from 'framer-motion';
import {
  XCircle,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  TrendingUp,
  ShieldAlert,
  Send,
  MessageCircle,
  CheckCheck,
} from 'lucide-react';

export default function FormVsChatShowcase({ onOpenContactModal }) {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold font-mono tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE CONVERSATIONAL ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
            Static web forms are dead. <br />
            <span className="text-emerald-600">Conversations convert 3.8x better.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Nobody wants to fill out 10 form fields and wait 2 days for an email. eBizChat turns customer capture into an effortless, instant WhatsApp chat.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* ─── LEFT: TRADITIONAL WEB FORM (DULL & HIGH DROP-OFF) ─── */}
          <div className="lg:col-span-6 rounded-2xl border border-rose-200/80 bg-slate-50/60 p-6 flex flex-col justify-between relative shadow-xs">
            {/* Top Status */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                  <XCircle className="w-4 h-4 text-rose-500" />
                  <span>Traditional Web Form</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-100 text-rose-800 font-semibold">
                  1.8% Avg Conversion
                </span>
              </div>

              {/* Form Mockup */}
              <div className="space-y-3 bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-600">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="text"
                    readOnly
                    value="rahul.m@gmail.com"
                    className="w-full px-2.5 py-1.5 bg-slate-50 border border-rose-300 rounded-lg text-slate-500 text-xs"
                  />
                  <span className="text-[10px] text-rose-600 mt-0.5 flex items-center gap-1">
                    <AlertTriangle className="w-2.5 h-2.5" />
                    Please enter a corporate email address
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      First Name *
                    </label>
                    <div className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-400">
                      Rahul
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Company Size *
                    </label>
                    <div className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-400">
                      Select...
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Requirements & RFP Details (Min 50 chars) *
                  </label>
                  <div className="w-full h-14 px-2.5 py-1.5 bg-slate-100/70 border border-slate-200 rounded-lg text-slate-400 text-[11px] italic">
                    User abandoned typing here... 78% drop-off rate
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    disabled
                    className="w-full py-2 bg-slate-300 text-slate-600 font-bold rounded-lg text-xs cursor-not-allowed"
                  >
                    Submit Form (Wait 24–48 Hours)
                  </button>
                </div>
              </div>
            </div>

            {/* Pain Points */}
            <div className="mt-6 pt-4 border-t border-slate-200/80 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center gap-2 text-rose-700 text-[11px] font-medium">
                <XCircle className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                <span>High bounce rate on mobile devices (pinch and zoom friction)</span>
              </div>
              <div className="flex items-center gap-2 text-rose-700 text-[11px] font-medium">
                <XCircle className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                <span>Fake phone numbers entered just to bypass the form wall</span>
              </div>
              <div className="flex items-center gap-2 text-rose-700 text-[11px] font-medium">
                <XCircle className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                <span>Prospects go cold before sales reps reply via email</span>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: EBIZCHAT CONVERSATIONAL FLOW (VIBRANT & INSTANT) ─── */}
          <div className="lg:col-span-6 rounded-2xl border-2 border-emerald-500/80 bg-emerald-50/20 p-6 flex flex-col justify-between relative shadow-lg shadow-emerald-500/10">
            {/* Top Status */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-emerald-200/80 mb-4">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>eBizChat Conversational Flow</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-600 text-white font-bold">
                  24.6% Avg Conversion
                </span>
              </div>

              {/* Chat Experience Mockup */}
              <div className="space-y-2.5 bg-white p-4 rounded-xl border border-emerald-200/80 shadow-xs text-xs">
                {/* Incoming Prompt */}
                <div className="flex justify-start">
                  <div className="max-w-[88%] bg-slate-100 text-slate-800 rounded-xl rounded-tl-xs p-2.5 space-y-1">
                    <p className="font-medium text-slate-900">
                      Hi Rahul! 👋 Saw you’re exploring industrial valves.
                    </p>
                    <p className="text-slate-600">
                      What volume are you looking to order this quarter?
                    </p>
                  </div>
                </div>

                {/* Instant Tap Choices */}
                <div className="flex flex-wrap gap-1.5 pl-2">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-semibold border border-emerald-300 text-[10px]">
                    📦 50 – 200 Units
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold text-[10px] shadow-xs">
                    🏭 500+ Wholesale Tier (Selected)
                  </span>
                </div>

                {/* Instant Confirmation & Qualification */}
                <div className="flex justify-start">
                  <div className="max-w-[92%] bg-emerald-50 border border-emerald-200 text-emerald-950 rounded-xl rounded-tl-xs p-2.5 space-y-1.5">
                    <div className="flex items-center justify-between font-bold text-[10px] text-emerald-800">
                      <span>✓ 100% Real WhatsApp Number Verified</span>
                      <span>Instant</span>
                    </div>
                    <p className="text-[11px] text-slate-700">
                      Awesome! Wholesale catalog sent to your WhatsApp. Deal added to <span className="font-semibold text-slate-900">Suresh K.’s sales pipeline</span>.
                    </p>
                  </div>
                </div>

                {/* Speed Meter */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <Zap className="w-3 h-3" /> Average completion: 38 seconds
                  </span>
                  <span>Zero Typing Drop-off</span>
                </div>
              </div>
            </div>

            {/* Wins */}
            <div className="mt-6 pt-4 border-t border-emerald-200/80 space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-2 text-emerald-900 text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Verified genuine phone number captured with 100% deliverability</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-900 text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Instant automated response while customer intent is at peak</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-900 text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Synchronized directly with Orizer ERP & Sales CRM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenContactModal}
            className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition-all active:scale-[0.98] inline-flex items-center gap-2"
          >
            <span>Replace Your Clunky Forms with eBizChat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
