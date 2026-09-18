import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Factory,
  Award,
  Users,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { ORIZER_INFO } from '../data/orizerData';

export default function AboutPage({ onOpenDemoModal, onOpenContactModal }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Orizer' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-semibold tracking-wide">
              <Building2 className="w-3.5 h-3.5" />
              <span>Company Story & Leadership</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Pioneering Industrial ERP & Modern Business Communication
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Orizer is a premier Enterprise Resource Planning (ERP) provider specializing in customizable, scalable operational solutions for SME, MSME, and manufacturing enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* ─── VERIFIED STATS STRIP ─── */}
      <section className="py-12 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {ORIZER_INFO.stats.map((s) => (
              <div key={s.label} className="p-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-400 font-mono">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white mt-1">{s.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{s.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE STORY: FROM ERP TO eBizChat ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              The Evolution of eBizChat
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4 font-normal">
              For over a decade, Orizer has been trusted by hundreds of manufacturing enterprises to manage their most critical core operations: Inventory Control, Production Planning & Control (PPC Automation), Material Requirements Planning (MRP), Quality Control (QC), Purchasing, Sales, and Financial Accounting.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3 font-normal">
              However, we identified a persistent, costly friction point across the industrial landscape: while back-office factory processes were fully digitized in ERP, front-office communications with dealers, buyers, and vendors remained trapped in manual telephone calls, delayed email inboxes, and chaotic personal WhatsApp threads.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3 font-normal">
              <strong>Orizer eBizChat</strong> was born to bridge this exact divide. By pairing the official Meta WhatsApp Business API directly with your underlying Orizer ERP database, eBizChat transforms customer conversations into automated business actions: instant LR copies, real-time dealer stock lookup, verified proforma invoices, and automated quotation nurturing.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-1">Customizable Architecture</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No two factories operate identically. Our solutions adapt to your exact shop-floor SOPs and dealer credit terms.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-1">Measurable ROI</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We measure success in hours saved at the dispatch desk, faster receivable clearances, and tripled sales lead velocity.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-1">100% Asset Ownership</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero data lock-in. Your official WhatsApp number, Meta WABA account, and customer records remain 100% yours.
              </p>
            </div>
          </div>

          {/* Orizer Industrial ERP & Analytics Visual Showcase */}
          <div className="pt-8">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                ECOSYSTEM VISUALS
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Industrial Roots. Next-Gen Frontline Messaging.
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white group">
                <div className="h-52 overflow-hidden bg-slate-100">
                  <img
                    src="/images/bi-dashboard.jpg"
                    alt="Orizer Business Intelligence ERP Dashboard"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 text-left">
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">
                    Orizer Analytics Core
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-2">Executive Business Intelligence</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Live operational reporting, plant dispatch KPIs, and customer credit ledger integration.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white group">
                <div className="h-52 overflow-hidden bg-slate-100">
                  <img
                    src="/images/factory.jpg"
                    alt="Orizer Manufacturing & Industrial Plant Automation"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 text-left">
                  <span className="text-[10px] font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full uppercase">
                    Industrial Heritage
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-2">Factory Floor to Customer Handshake</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Proven in manufacturing hubs across Gujarat and India, automating dispatch, LR, and inventory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECURITY & COMPLIANCE SECTION ─── */}
      <section id="security" className="py-20 bg-slate-50/70 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
          <SectionHeader
            badge="Enterprise Trust"
            title="Security, Privacy & Data Governance"
            subtitle="Built to satisfy the stringent compliance requirements of enterprise manufacturers and financial controllers."
            centered={false}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 mb-0.5">TLS 1.3 Transport Encryption</strong>
                <span className="text-slate-600">All data in transit is protected using bank-grade cryptographic protocols.</span>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 mb-0.5">Meta Business Tier Compliance</strong>
                <span className="text-slate-600">Strict adherence to WhatsApp opt-in and commercial messaging policies.</span>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 mb-0.5">Granular Role-Based Access (RBAC)</strong>
                <span className="text-slate-600">Control which agents can view invoices, customer phone numbers, or credit limits.</span>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 mb-0.5">Auditable Message Logs</strong>
                <span className="text-slate-600">Permanent record of all customer and agent interactions for complete accountability.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORPORATE HEADQUARTERS & CONTACT VERIFICATION ─── */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <SectionHeader
            badge="Verified Corporate Presence"
            title="Orizer Headquarters & Contact Details"
            subtitle="Visit our corporate office or connect directly with our management desk."
            centered={false}
          />

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">Corporate Head Office</strong>
                <span className="text-slate-600 leading-relaxed">{ORIZER_INFO.contact.office.fullAddress}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Clock className="w-5 h-5 text-brand-600 flex-shrink-0" />
              <div>
                <strong className="text-slate-900 font-semibold">Working Hours: </strong>
                <span className="text-slate-600">{ORIZER_INFO.contact.businessHours}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200 text-xs">
              <a
                href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`}
                className="px-4 py-2 bg-white border border-slate-300 rounded-xl text-slate-800 font-semibold hover:bg-slate-100"
              >
                Main Desk: {ORIZER_INFO.contact.mainPhone}
              </a>
              <Link
                to="/contact"
                className="px-4 py-2 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 shadow-sm"
              >
                Visit Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
