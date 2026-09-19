import React from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  ShoppingBag,
  GraduationCap,
  Building2,
  Briefcase,
  Heart,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  Layers,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEOHead from '../components/ui/SEOHead';
import { SOLUTIONS_DATA } from '../data/solutionsData';

export default function SolutionsPage({ onOpenDemoModal, onOpenContactModal }) {
  const industries = [
    {
      key: 'manufacturing',
      icon: Factory,
      data: SOLUTIONS_DATA.manufacturing,
      badge: 'Orizer Core Specialty · Native ERP Sync',
      featured: true,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
    {
      key: 'ecommerce',
      icon: ShoppingBag,
      data: SOLUTIONS_DATA.ecommerce,
      badge: 'High Velocity Retail',
      featured: false,
      color: 'bg-teal-50 text-teal-600 border-teal-200',
    },
    {
      key: 'healthcare',
      icon: Heart,
      data: SOLUTIONS_DATA.healthcare,
      badge: 'Clinics & Hospitals',
      featured: false,
      color: 'bg-rose-50 text-rose-600 border-rose-200',
    },
    {
      key: 'education',
      icon: GraduationCap,
      data: SOLUTIONS_DATA.education,
      badge: 'Institutes & EdTech',
      featured: false,
      color: 'bg-teal-50 text-teal-600 border-teal-200',
    },
    {
      key: 'realEstate',
      icon: Building2,
      data: SOLUTIONS_DATA.realEstate,
      badge: 'Builders & Developers',
      featured: false,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
    {
      key: 'services',
      icon: Briefcase,
      data: SOLUTIONS_DATA.services,
      badge: 'B2B Professional Services',
      featured: false,
      color: 'bg-teal-50 text-teal-600 border-teal-200',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEOHead
        title="Industry WhatsApp Solutions & Enterprise Blueprints | eBizChat"
        description="Tailored WhatsApp workflows for Manufacturing, Retail, Real Estate, Healthcare, Education, and Professional Services with native Orizer ERP synchronization."
        canonical="https://ebizchat.vercel.app/solutions"
      />
      {/* Breadcrumbs */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Industry Solutions' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-semibold tracking-wide shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Tailored for Enterprise Workflows</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Industry Solutions Built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500">
                Operational Impact.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Whether you are a manufacturing plant automating lorry receipt copies or an e-commerce store recovering abandoned checkouts, eBizChat is customized for your operational reality.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-btn transition-all"
              >
                Find Your Solution
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-subtle transition-all"
              >
                <Calendar className="w-4 h-4 text-brand-600" />
                Book Industry Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS GRID ─── */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Tailored Verticals"
            title="Select Your Industry to Explore Workflows"
            subtitle="Deep-dive into verified pain points, ERP integration touchpoints, and measurable business results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map(({ key, icon: IconComponent, data, badge, featured, color }) => (
              <div
                key={key}
                className={`bg-white rounded-2xl border p-8 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group ${
                  featured
                    ? 'border-brand-300 ring-2 ring-brand-500/10 lg:col-span-2 bg-gradient-to-br from-white via-emerald-50/20 to-white'
                    : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200 uppercase">
                      {badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {data.industry}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {data.subheadline}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                    {data.keyFeatures.slice(0, featured ? 4 : 3).map((feat, fi) => (
                      <div key={fi} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={`/solutions/${data.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 group-hover:text-brand-700"
                  >
                    Explore Complete {data.industry} Solution
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold">Don't See Your Specific Industry?</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Orizer ERP's modular architecture can be customized for any discrete or process business model.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-btn transition-all"
            >
              Consult with an Industry Architect
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
