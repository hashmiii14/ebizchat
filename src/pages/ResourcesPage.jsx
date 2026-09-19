import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  FileText,
  HelpCircle,
  Award,
  ArrowRight,
  Sparkles,
  Download,
  CheckCircle2,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEOHead from '../components/ui/SEOHead';

export default function ResourcesPage({ onOpenDemoModal, onOpenContactModal }) {
  const resourceCategories = [
    {
      title: 'Industry Blog & Articles',
      desc: 'Expert guides on WhatsApp sales automation, ERP synchronization, and Meta Cloud API best practices.',
      path: '/blog',
      icon: FileText,
      badge: 'Updated Weekly',
      color: 'bg-orange-50 text-[#ff5500] border-orange-200',
    },
    {
      title: 'Frequently Asked Questions',
      desc: 'Comprehensive answers regarding pricing, onboarding, Meta verification, and enterprise security.',
      path: '/faq',
      icon: HelpCircle,
      badge: 'Knowledgebase',
      color: 'bg-orange-50 text-[#ff5500] border-orange-200',
    },
    {
      title: 'Enterprise Case Studies',
      desc: 'Real production metrics from manufacturing OEMs, national distributors, and scaling businesses.',
      path: '/case-studies',
      icon: Award,
      badge: 'Proven ROI',
      color: 'bg-zinc-100 text-zinc-800 border-zinc-200',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEOHead
        title="Knowledge Center, Guides & FAQ | eBizChat by Orizer"
        description="Comprehensive guides, API documentation, FAQs, and B2B case studies on conversational WhatsApp automation by Orizer Infotech."
        canonical="https://ebizchat.vercel.app/resources"
      />
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Resource Center' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 bg-[#fcfbf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#ff5500] text-xs font-mono font-semibold tracking-wide shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Orizer Knowledgebase & Playbooks</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Guides, Playbooks & Insights for{' '}
              <span className="text-[#ff5500]">
                Business Leaders.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Learn how modern enterprises streamline customer communication, connect shop-floor ERP processes with frontline messaging, and eliminate sales follow-up delays.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Cards */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resourceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="bg-white rounded-2xl border border-slate-200 p-8 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group text-left"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${cat.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to={cat.path}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 group-hover:text-brand-700"
                    >
                      Browse {cat.title}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Whitepaper Download */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-float text-left space-y-4">
            <span className="font-mono text-xs uppercase text-brand-400 font-bold tracking-wider">
              Featured 2026 Executive Playbook
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              The Manufacturer's Playbook: Automating Dispatches, Quotations & Dealer Networks via WhatsApp
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
              A comprehensive 28-page blueprint detailing ERP schema mapping, webhook architecture, LR docket notifications, and compliance checklists.
            </p>
            <div className="pt-4">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-colors shadow-btn"
              >
                <Download className="w-4 h-4" />
                Request Digital PDF Copy
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
