import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  ArrowRight,
  CheckCircle2,
  Calendar,
  FileText,
  Clock,
  ShieldCheck,
  Activity,
  Bell,
  Sparkles,
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { SOLUTIONS_DATA } from '../../data/solutionsData';

export default function HealthcarePage({ onOpenDemoModal, onOpenContactModal }) {
  const sol = SOLUTIONS_DATA.healthcare;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Solutions', path: '/solutions' },
              { label: 'Healthcare & Diagnostic Clinics' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono font-semibold">
                <Heart className="w-3.5 h-3.5 text-rose-600" />
                <span>Healthcare Communication · HIPAA & Data Privacy</span>
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
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm transition-all"
                >
                  Deploy for Your Clinic or Hospital
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-xs transition-all"
                >
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  Book Live Demo
                </button>
              </div>

              {/* Metrics strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                {sol.results.map((res, i) => (
                  <div key={i} className="text-left">
                    <div className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight text-emerald-600">
                      {res.metric}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{res.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Interactive Patient Chat Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-slate-900 p-3 shadow-2xl ring-1 ring-slate-800">
                <div className="rounded-2xl bg-[#0b141a] p-4 text-white space-y-3 font-sans text-xs">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-xs">
                      +
                    </div>
                    <div>
                      <div className="font-semibold text-slate-100 flex items-center gap-1">
                        <span>City Care Hospital</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="text-[10px] text-slate-400">Verified WhatsApp Business</div>
                    </div>
                  </div>

                  {/* Patient Msg */}
                  <div className="flex justify-end">
                    <div className="bg-[#005c4b] text-white p-2.5 rounded-2xl rounded-tr-xs max-w-[85%] text-[11px] leading-relaxed">
                      Hi, I want to book an appointment with Dr. Mehta (Cardiology) for tomorrow.
                      <div className="text-[9px] text-emerald-200 text-right mt-1">10:14 AM ✓✓</div>
                    </div>
                  </div>

                  {/* Bot Msg */}
                  <div className="flex justify-start">
                    <div className="bg-[#202c33] text-slate-200 p-2.5 rounded-2xl rounded-tl-xs max-w-[90%] text-[11px] space-y-2">
                      <p>Hello! Dr. Mehta has the following consultation slots available tomorrow, 11:00 AM or 4:30 PM.</p>
                      <div className="flex flex-col gap-1.5 pt-1">
                        <span className="p-1.5 rounded-lg bg-[#111b21] border border-emerald-500/40 text-emerald-400 text-center font-semibold text-[10px]">
                          Book 11:00 AM Slot
                        </span>
                        <span className="p-1.5 rounded-lg bg-[#111b21] border border-slate-700 text-slate-300 text-center text-[10px]">
                          Book 04:30 PM Slot
                        </span>
                      </div>
                      <div className="text-[9px] text-slate-400 text-right">10:14 AM</div>
                    </div>
                  </div>

                  {/* Confirmation Card */}
                  <div className="flex justify-start">
                    <div className="bg-[#202c33] border border-emerald-500/30 text-slate-200 p-2.5 rounded-2xl rounded-tl-xs max-w-[90%] text-[11px] space-y-1.5">
                      <div className="flex items-center gap-1 text-emerald-400 font-bold text-[10px]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Appointment Confirmed #APT-8492</span>
                      </div>
                      <p className="text-[10px] text-slate-300">
                        OPD Room 204 · Token #12. Fasting blood report ready for pickup or download below:
                      </p>
                      <div className="p-2 rounded-lg bg-[#111b21] border border-slate-700 flex items-center justify-between text-[10px]">
                        <span className="flex items-center gap-1.5 text-slate-300 font-mono">
                          <FileText className="w-3.5 h-3.5 text-rose-400" />
                          <span>CBC_Report_P102.pdf</span>
                        </span>
                        <span className="text-emerald-400 font-bold">Download</span>
                      </div>
                      <div className="text-[9px] text-slate-400 text-right">10:15 AM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges vs eBizChat Solution */}
      <section className="py-16 bg-slate-50/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              CLINICAL EFFICIENCY
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Solving Front-Desk Overload & Patient Friction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-white border border-rose-100 shadow-xs">
              <div className="flex items-center gap-2 mb-4 text-rose-600 font-bold text-sm">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Common Healthcare Communication Roadblocks</span>
              </div>
              <ul className="space-y-3">
                {sol.painPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <span className="text-rose-500 font-bold mt-0.5">✕</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-emerald-100 shadow-xs">
              <div className="flex items-center gap-2 mb-4 text-emerald-700 font-bold text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>The eBizChat Automated Clinical Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-4">
                {sol.howHelps}
              </p>
              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-xs text-emerald-900 font-medium">
                HIPAA-ready encryption · Automated password verification for PDF diagnostic reports · Zero waiting queues.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              PLATFORM CAPABILITIES
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Complete Patient Engagement Suite
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sol.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 hover:bg-white transition-all text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{feat}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fully automated via Meta WhatsApp Cloud API with instant EHR/HMS synchronisation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Modernize Your Patient Communication?
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Join leading diagnostic labs, specialized clinics, and multi-specialty hospitals operating on eBizChat.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenContactModal}
              className="px-7 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-colors"
            >
              Get Started Now
            </button>
            <button
              onClick={onOpenDemoModal}
              className="px-7 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors"
            >
              Request Healthcare Architecture Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
