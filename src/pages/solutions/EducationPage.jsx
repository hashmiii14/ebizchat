import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Calendar,
  CreditCard,
  Bell,
  BookOpen,
} from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { SOLUTIONS_DATA } from '../../data/solutionsData';

export default function EducationPage({ onOpenDemoModal, onOpenContactModal }) {
  const sol = SOLUTIONS_DATA.education;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Solutions', path: '/solutions' },
              { label: 'Education & EdTech' },
            ]}
          />
        </div>
      </div>

      <section className="pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-semibold">
              <GraduationCap className="w-3.5 h-3.5" />
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
                Automate Student Admissions
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-subtle transition-all"
              >
                <Calendar className="w-4 h-4 text-brand-600" />
                Book Campus Demo
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100 max-w-2xl mx-auto">
              {sol.results.map((r) => (
                <div key={r.label}>
                  <div className="font-mono font-bold text-2xl text-brand-600">{r.metric}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Campus Automation"
            title="Everyday Education Workflows on WhatsApp"
            subtitle="Keep students, parents, and faculties synchronized with 98% message read rates."
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
          <h2 className="text-3xl font-bold">Empower Your Campus Administration</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Schedule a demo to see how university admissions and fee reminders run seamlessly on eBizChat.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-btn transition-all"
            >
              Request Education Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
