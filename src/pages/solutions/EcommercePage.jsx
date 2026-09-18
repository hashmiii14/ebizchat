import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Truck,
  RotateCcw,
  Star,
  Zap,
} from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { SOLUTIONS_DATA } from '../../data/solutionsData';

export default function EcommercePage({ onOpenDemoModal, onOpenContactModal }) {
  const sol = SOLUTIONS_DATA.ecommerce;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Solutions', path: '/solutions' },
              { label: 'E-Commerce & D2C Brands' },
            ]}
          />
        </div>
      </div>

      <section className="pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{sol.industry}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {sol.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {sol.subheadline}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-btn transition-all"
              >
                Boost E-Commerce Sales
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-subtle transition-all"
              >
                <Calendar className="w-4 h-4 text-brand-600" />
                Book E-Commerce Demo
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100 max-w-2xl mx-auto">
              {sol.results.map((r) => (
                <div key={r.label}>
                  <div className="font-mono font-bold text-2xl text-emerald-600">{r.metric}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="D2C Challenges"
            title="Solving the High-Cost Pitfalls of Modern Online Retail"
            subtitle="Cart drop-offs and COD return-to-origin losses drain e-commerce profit margins."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sol.painPoints.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle text-left flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  ✕
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="High ROI Flows"
            title="High-Converting E-Commerce Scenarios"
            subtitle="Automated workflows that generate immediate revenue recovery."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sol.useCases.map((uc) => (
              <div
                key={uc.title}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-subtle text-left space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
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
          <h2 className="text-3xl font-bold">Recover Lost Carts & Cut RTO Today</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Integrate eBizChat with your Shopify, WooCommerce, or custom e-commerce store in minutes.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-btn transition-all"
            >
              Start E-Commerce Setup
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
