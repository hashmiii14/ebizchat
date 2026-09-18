import React from 'react';
import { Link } from 'react-router-dom';
import {
  Filter,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  BarChart3,
  GitBranch,
} from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { FEATURES_DATA } from '../../data/featuresData';
import { KanbanMockup } from '../../components/ui/DashboardMockups';

export default function LeadManagementPage({ onOpenDemoModal, onOpenContactModal }) {
  const feat = FEATURES_DATA.leadManagement;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Features', path: '/features' },
              { label: 'Lead Management & CRM' },
            ]}
          />
        </div>
      </div>

      <section className="pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold">
                <Filter className="w-3.5 h-3.5" />
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
                  Streamline Your Pipeline
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-subtle transition-all"
                >
                  <Calendar className="w-4 h-4 text-brand-600" />
                  View Kanban Demo
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                {feat.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-mono font-bold text-2xl text-blue-600">{s.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <KanbanMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Pipeline Discipline"
            title="Designed for Fast Deal Cycles & Accountability"
            subtitle="Give your sales management real-time visibility into rep assignments and conversion bottlenecks."
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

      {/* 4-Step Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Lead Journey"
            title="How Leads Convert from Inbound to Closed Won"
            subtitle="Automated discipline at every milestone of the commercial relationship."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {feat.workflow.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-subtle text-left space-y-2"
              >
                <span className="font-mono text-3xl font-extrabold text-blue-600 block">
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
          <h2 className="text-3xl font-bold">Stop Losing Leads to Delayed Follow-Ups</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Deploy eBizChat Lead Management and boost your sales team's closing rate starting this week.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-btn transition-all"
            >
              Get Started with Lead Management
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
