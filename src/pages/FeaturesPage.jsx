import React from 'react';
import { Link } from 'react-router-dom';
import {
  Megaphone,
  Filter,
  Bot,
  Inbox,
  GitBranch,
  BarChart3,
  Layers,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEOHead from '../components/ui/SEOHead';
import { FEATURES_DATA } from '../data/featuresData';

export default function FeaturesPage({ onOpenDemoModal, onOpenContactModal }) {
  const featureList = [
    {
      key: 'marketing',
      icon: Megaphone,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      data: FEATURES_DATA.marketing,
    },
    {
      key: 'leadManagement',
      icon: Filter,
      color: 'bg-teal-50 text-teal-600 border-teal-200',
      data: FEATURES_DATA.leadManagement,
    },
    {
      key: 'chatbot',
      icon: Bot,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      data: FEATURES_DATA.chatbot,
    },
    {
      key: 'teamInbox',
      icon: Inbox,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      data: FEATURES_DATA.teamInbox,
    },
    {
      key: 'automation',
      icon: GitBranch,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      data: FEATURES_DATA.automation,
    },
    {
      key: 'analytics',
      icon: BarChart3,
      color: 'bg-rose-50 text-rose-600 border-rose-200',
      data: FEATURES_DATA.analytics,
    },
    {
      key: 'integrations',
      icon: Layers,
      color: 'bg-teal-50 text-teal-600 border-teal-200',
      data: FEATURES_DATA.integrations,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEOHead
        title="Enterprise WhatsApp Features & Modules | eBizChat by Orizer"
        description="Explore the complete eBizChat ecosystem: No-code chat automation, multi-agent team inbox, visual Kanban pipelines, broadcasts, and 2-way ERP sync."
        canonical="https://ebizchat.vercel.app/features"
      />
      {/* Breadcrumbs */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Features Ecosystem' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-semibold tracking-wide shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>The Complete eBizChat Feature Ecosystem</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Engineered for Speed, Scale &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500">
                ERP Connectivity.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every tool your sales, support, and dispatch teams need to capture leads, accelerate deal cycles, and automate customer communication on WhatsApp.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-btn transition-all"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-subtle transition-all"
              >
                <Calendar className="w-4 h-4 text-brand-600" />
                Book Live Feature Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7 MAJOR FEATURE PILLARS GRID ─── */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Platform Modules"
            title="Explore the eBizChat Capabilities"
            subtitle="Click through each module to explore deep workflows, product visuals, and real enterprise use cases."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureList.map(({ key, icon: IconComponent, color, data }) => (
              <div
                key={key}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {data.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {data.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {data.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                    {data.capabilities.slice(0, 3).map((cap) => (
                      <div key={cap.title} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span>{cap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={`/features/${data.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 group-hover:text-brand-700"
                  >
                    Deep Dive into {data.title}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENTERPRISE CTA SECTION ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Need a Custom Feature or Unique Manufacturing Workflow?
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            Orizer specializes in tailored ERP solutions and custom SOP development. We can customize eBizChat to match your plant's exact dispatch, billing, and dealer workflows.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-sm transition-all"
            >
              Discuss Custom Workflow Requirements
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
