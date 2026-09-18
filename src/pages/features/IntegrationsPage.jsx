import React from 'react';
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Database,
  Code2,
  Lock,
  Cpu,
} from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { FEATURES_DATA } from '../../data/featuresData';
import { ORIZER_INFO } from '../../data/orizerData';

export default function IntegrationsPage({ onOpenDemoModal, onOpenContactModal }) {
  const feat = FEATURES_DATA.integrations;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Features', path: '/features' },
              { label: 'Orizer ERP & API Integrations' },
            ]}
          />
        </div>
      </div>

      <section className="pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-mono font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>{feat.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {feat.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {feat.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-btn transition-all"
              >
                Connect Your ERP & APIs
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-subtle transition-all"
              >
                <Calendar className="w-4 h-4 text-brand-600" />
                Book Architecture Review
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100 max-w-2xl mx-auto">
              {feat.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-mono font-bold text-2xl text-teal-600">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Orizer ERP Modules Synced */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Native ERP Connectivity"
            title="Pre-Built Connectors for Core Orizer ERP Modules"
            subtitle="No custom middleware required. eBizChat syncs directly with your existing Orizer database."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ORIZER_INFO.erpModules.map((mod) => (
              <div
                key={mod.name}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle text-left space-y-2 hover:border-brand-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs font-mono">
                  ERP
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{mod.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer API & Webhooks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Developer Infrastructure"
            title="REST APIs, Webhooks & Enterprise Connectors"
            subtitle="Trigger messages, sync contacts, and export conversation records into any third-party system."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {feat.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-subtle text-left space-y-2"
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

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold">Unify Your Enterprise IT & WhatsApp Today</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Speak with an Orizer ERP integration architect to plan your custom database and webhook mappings.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-btn transition-all"
            >
              Request Integration Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
