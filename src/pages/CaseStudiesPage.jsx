import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Building2,
  MapPin,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { CASE_STUDIES } from '../data/blogData';

export default function CaseStudiesPage({ onOpenDemoModal, onOpenContactModal }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Resources', path: '/resources' },
              { label: 'Customer Case Studies' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-semibold tracking-wide">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Enterprise ROI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Proven Production Results in the Field
            </h1>
            <p className="text-base text-slate-600 font-normal">
              See how Indian manufacturing and distribution leaders use Orizer eBizChat to slash dispatch overheads and close deals faster.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES LIST ─── */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200 flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-card text-left space-y-6"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-2">
                <div>
                  <span className="font-mono text-xs font-bold text-brand-700 uppercase tracking-wider">
                    {cs.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">{cs.client}</h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{cs.location}</span>
                </div>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider text-rose-600">
                    The Challenge
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-normal">{cs.challenge}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider text-brand-600">
                    The eBizChat Solution
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-normal">{cs.solution}</p>
                </div>
              </div>

              {/* Metrics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="font-mono font-extrabold text-2xl sm:text-3xl text-brand-600">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-600 mt-1 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-brand-50/60 p-6 rounded-2xl border border-brand-200 text-slate-800 text-sm italic font-normal leading-relaxed">
                "{cs.quote}"
                <span className="block not-italic text-xs text-slate-500 font-mono mt-2 font-semibold">
                  — {cs.author}, {cs.client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold">Achieve Similar Measurable ROI for Your Operations</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Our team will perform a complimentary communication workflow audit on your current sales & dispatch process.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-btn transition-all"
            >
              Request Free Workflow Audit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
