import React from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  Truck,
  FileText,
  ShieldCheck,
  TrendingUp,
  Clock,
  BadgeCheck,
} from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { SOLUTIONS_DATA } from '../../data/solutionsData';
import { ORIZER_INFO } from '../../data/orizerData';
import WhatsAppSimulator from '../../components/ui/WhatsAppSimulator';

export default function ManufacturingPage({ onOpenDemoModal, onOpenContactModal }) {
  const sol = SOLUTIONS_DATA.manufacturing;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Solutions', path: '/solutions' },
              { label: 'Manufacturing & Industrial ERP Sync' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold">
                <Factory className="w-3.5 h-3.5 text-emerald-600" />
                <span>Orizer Core Specialty · Manufacturing ERP Sync</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                {sol.headline}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {sol.subheadline}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenContactModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-btn transition-all"
                >
                  Connect Orizer ERP to WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-subtle transition-all"
                >
                  <Calendar className="w-4 h-4 text-brand-600" />
                  Book Plant Walkthrough
                </button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                {sol.results.map((r) => (
                  <div key={r.label}>
                    <div className="font-mono font-bold text-2xl text-emerald-600">{r.metric}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <WhatsAppSimulator />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAIN POINTS VS ORIZER SOLUTION ─── */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Factory Floor Reality"
            title="Solving the 4 Greatest Communication Bottlenecks in Manufacturing"
            subtitle="Manual telephone tag between dispatch desks, sales reps, and dealers wastes hours every day."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sol.painPoints.map((pain, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-rose-200 shadow-subtle text-left space-y-2 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  ✕
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Common Industry Bottleneck #{i + 1}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{pain}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-8 rounded-3xl bg-brand-50/60 border border-brand-200 max-w-5xl mx-auto text-left flex items-start gap-4">
            <BadgeCheck className="w-8 h-8 text-brand-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">How Orizer eBizChat Bridges the Gap</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {sol.howHelps}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NATIVE ORIZER ERP MODULE SYNC TOUCHPOINTS ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Direct Module Connectivity"
            title="Connected with Your Core Orizer ERP Modules"
            subtitle="Automated WhatsApp triggers generated directly from factory floor events."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ORIZER_INFO.erpModules.map((m) => (
              <div
                key={m.name}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-subtle text-left space-y-2 hover:border-brand-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs font-mono">
                  ERP
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{m.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REAL FACTORY USE CASES ─── */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Production Workflows"
            title="Everyday Manufacturing Scenarios"
            subtitle="How plant managers, dispatch clerks, and accounts teams use eBizChat daily."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sol.useCases.map((uc) => (
              <div
                key={uc.title}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card text-left space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{uc.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold">Ready to Connect Your Factory Floor to WhatsApp?</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Schedule a dedicated manufacturing ERP consultation with Orizer's senior implementation team.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-btn transition-all"
            >
              Request Manufacturing Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
