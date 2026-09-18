import React from 'react';
import { Link } from 'react-router-dom';
import {
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Send,
  Zap,
  Users,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { FEATURES_DATA } from '../../data/featuresData';
import WhatsAppSimulator from '../../components/ui/WhatsAppSimulator';

export default function WhatsAppMarketingPage({ onOpenDemoModal, onOpenContactModal }) {
  const feat = FEATURES_DATA.marketing;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Features', path: '/features' },
              { label: 'WhatsApp Marketing & Broadcasts' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold">
                <Megaphone className="w-3.5 h-3.5" />
                <span>{feat.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {feat.headline}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {feat.description}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenContactModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-btn transition-all"
                >
                  Start WhatsApp Campaigns
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-subtle transition-all"
                >
                  <Calendar className="w-4 h-4 text-brand-600" />
                  See Campaign Demo
                </button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                {feat.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-mono font-bold text-2xl text-brand-600">{s.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
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

      {/* ─── THE BUSINESS PROBLEM VS eBizChat SOLUTION ─── */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Challenge"
            title="Why Traditional Email & SMS Marketing Fails Modern Businesses"
            subtitle="Marketing emails get trapped in spam filters and SMS is blocked as spam. WhatsApp is where decision-makers read and respond."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Problem */}
            <div className="p-8 rounded-2xl bg-white border border-rose-200/80 shadow-card text-left space-y-4">
              <div className="text-xs font-mono font-bold uppercase text-rose-600 tracking-wider">
                The Traditional Hurdle
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Sub-15% Email Opens & Low Quality Inbound
              </h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Promotional newsletters buried under Gmail 'Promotions' tabs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>SMS links triggering security warnings on modern smartphones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>No ability to receive direct replies, quotes, or counter-inquiries.</span>
                </li>
              </ul>
            </div>

            {/* eBizChat Solution */}
            <div className="p-8 rounded-2xl bg-white border border-brand-300 shadow-card text-left space-y-4">
              <div className="text-xs font-mono font-bold uppercase text-brand-600 tracking-wider">
                The eBizChat Solution
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                High-Trust Interactive WhatsApp Broadcasts
              </h3>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>Verified Meta Green Tick brand identity builds instant trust.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>Rich interactive buttons (e.g. 'Request Quotation', 'Download Specs').</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>Direct two-way conversation starts instantly in your shared inbox.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DETAILED CAPABILITIES ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Deep Capabilities"
            title="Comprehensive Campaign Toolkit"
            subtitle="Built to comply 100% with Meta policies while driving massive engagement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {feat.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-subtle text-left space-y-2 hover:border-brand-300 transition-colors"
              >
                <h4 className="text-lg font-bold text-slate-900">{cap.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4-STEP WORKFLOW ─── */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Campaign Execution"
            title="How to Launch a Campaign in 4 Simple Steps"
            subtitle="From audience segment to real-time sales replies in minutes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {feat.workflow.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle text-left space-y-2"
              >
                <span className="font-mono text-3xl font-extrabold text-brand-600 block">
                  {st.step}
                </span>
                <h4 className="font-bold text-slate-900 text-base">{st.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold">Start Delivering 45%+ Open Rates Today</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Get your WhatsApp Business API account approved and launched with Orizer's white-glove onboarding.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-btn transition-all"
            >
              Get Started with WhatsApp Marketing
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
