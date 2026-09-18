import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MapPin,
  FileText,
  Users,
} from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { SOLUTIONS_DATA } from '../../data/solutionsData';

export default function RealEstatePage({ onOpenDemoModal, onOpenContactModal }) {
  const sol = SOLUTIONS_DATA.realEstate;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Solutions', path: '/solutions' },
              { label: 'Real Estate & Infrastructure' },
            ]}
          />
        </div>
      </div>

      <section className="pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-mono font-semibold">
              <Building2 className="w-3.5 h-3.5" />
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
                Accelerate Property Sales
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-subtle transition-all"
              >
                <Calendar className="w-4 h-4 text-brand-600" />
                Book Real Estate Demo
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100 max-w-2xl mx-auto">
              {sol.results.map((r) => (
                <div key={r.label}>
                  <div className="font-mono font-bold text-2xl text-amber-600">{r.metric}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Site Visit Acceleration"
            title="Everyday Real Estate Workflows"
            subtitle="Engage buyers the second they express interest in residential or commercial projects."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sol.useCases.map((uc) => (
              <div
                key={uc.title}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card text-left space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
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
          <h2 className="text-3xl font-bold">Triple Your Weekend Site Visit Show-Up Rate</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Automate brochure delivery and appointment scheduling for your sales team.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-btn transition-all"
            >
              Get Started for Builders
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
