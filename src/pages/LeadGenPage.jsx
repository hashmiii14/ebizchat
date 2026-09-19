import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Filter,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  Search,
  Users,
  Target,
  Zap,
  PhoneCall,
  GitBranch,
  BarChart3,
  TrendingUp,
  Clock,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { KanbanMockup, WorkflowAutomationMockup } from '../components/ui/DashboardMockups';
import WorkingForm from '../components/ui/WorkingForm';
import SEOHead from '../components/ui/SEOHead';

export default function LeadGenPage({ onOpenDemoModal, onOpenContactModal }) {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      name: "1. Research",
      tagline: "Pinpoint High-Intent Commercial Buyers",
      desc: "Identify ICP (Ideal Customer Profile) segments by industrial vertical, company turnover, geographic cluster, and consumption volume.",
      deliverables: ["Custom Audience Persona Definition", "ERP Historical Re-order Segmentation", "Lookalike Targeting Strategy"],
    },
    {
      name: "2. Reach",
      tagline: "Outreach Across Verified Touchpoints",
      desc: "Engage prospects across Meta Click-to-WhatsApp Ads, targeted WhatsApp broadcasts, trade directory campaigns, and digital QR codes.",
      deliverables: ["Meta-Approved Broadcast Templates", "QR Codes for Trade Exhibitions", "Click-to-Chat Landing Page Widgets"],
    },
    {
      name: "3. Capture",
      tagline: "Instant Zero-Drop Inbound Ingestion",
      desc: "Remove friction. When prospects click your ads or scan your product catalogues, they land directly in WhatsApp with zero form fatigue.",
      deliverables: ["1-Click Direct Chat Ingestion", "Automated Contact Profile Generation", "Source Campaign & Keyword Tracking"],
    },
    {
      name: "4. Qualify",
      tagline: "Automated Conversational Discovery",
      desc: "An intelligent qualification sequence captures volume requirements, delivery timelines, and budget expectations within 60 seconds.",
      deliverables: ["Dynamic Lead Scoring (A/B/C Priority)", "Instant High-Value Buyer Alerts", "GSTIN & Business Verification Check"],
    },
    {
      name: "5. Manage",
      tagline: "Visual Kanban Pipeline & Assignment",
      desc: "Auto-assign qualified deals to sales reps via round-robin or product domain expertise, tracked across clear visual deal stages.",
      deliverables: ["Drag-and-Drop Deal Pipeline", "Round-Robin Rep Distribution", "First-Touch SLA Timers (Under 5 mins)"],
    },
    {
      name: "6. Nurture",
      tagline: "Automated Multi-Touch Follow-Ups",
      desc: "Never let hot deals go cold. Automated sequences deliver product spec sheets, case studies, and friendly reminders when quotes remain unapproved.",
      deliverables: ["24h / 72h / 7d Quotation Follow-ups", "Technical Brochure Dispatch", "Client Testimonial Sharing"],
    },
    {
      name: "7. Convert",
      tagline: "Seamless Orizer ERP Deal Closure",
      desc: "Move qualified buyers directly into formal Orizer ERP sales orders, proforma invoices, and payment confirmations.",
      deliverables: ["1-Click ERP Quote Generation", "UPI / Bank Detail Sharing", "Sales Order Booking Confirmation"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEOHead
        title="WhatsApp Lead Generation Engine | eBizChat by Orizer"
        description="Capture high-intent B2B commercial buyers without form friction. 7-stage automated conversational pipeline with native Orizer ERP synchronization."
        canonical="https://ebizchat.vercel.app/lead-generation"
      />
      {/* Top Header & Breadcrumbs */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'LeadGen+ Engine' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-semibold tracking-wide shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Orizer LeadGen+ Engine</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              The 7-Stage Engine for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500">
                Predictable Inbound Sales.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Attract high-intent commercial buyers, qualify specifications automatically on WhatsApp, and accelerate pipeline velocity from initial click to closed Orizer ERP sales order.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-btn transition-all active:scale-[0.98]"
              >
                Launch LeadGen+ for Your Team
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-subtle transition-all active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-brand-600" />
                Book Pipeline Walkthrough
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE 7-STAGE JOURNEY INTERACTIVE EXPLORER ─── */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Complete Conversion Journey"
            title="From First Discovery to Signed Sales Contract"
            subtitle="Explore how eBizChat guides every prospect through a disciplined, automated 7-step conversion journey."
          />

          {/* Stage Buttons Tabs */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 custom-scrollbar">
            {stages.map((st, i) => (
              <button
                key={st.name}
                onClick={() => setActiveStage(i)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  activeStage === i
                    ? 'bg-brand-600 border-brand-600 text-white shadow-btn'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <span>{st.name}</span>
              </button>
            ))}
          </div>

          {/* Active Stage Deep Dive Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-card max-w-4xl mx-auto text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-brand-600 tracking-wider">
                  Stage {activeStage + 1} of 7
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {stages[activeStage].tagline}
                </h3>
              </div>
              <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-semibold self-start sm:self-auto">
                Step: {stages[activeStage].name}
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              {stages[activeStage].desc}
            </p>

            <div>
              <h4 className="font-semibold text-slate-900 text-xs uppercase font-mono tracking-wider mb-4">
                What eBizChat Delivers in this Stage:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {stages[activeStage].deliverables.map((del, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MULTI-CHANNEL INTAKE SHOWCASE ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Omnichannel Intake"
            title="Consolidate Inbound Leads from Every Business Touchpoint"
            subtitle="Never let an inquiry get lost between personal phones, sticky notes, or spreadsheet tabs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                WA
              </div>
              <h4 className="font-bold text-slate-900 text-base">WhatsApp Click-to-Chat Ads</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect Meta Instagram & Facebook ads straight into WhatsApp. Leads start conversations with pre-filled product intent tags.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                WEB
              </div>
              <h4 className="font-bold text-slate-900 text-base">Website Floating Widget</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-converting website widget that lets website visitors ask questions and receive answers on their personal phone.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                QR
              </div>
              <h4 className="font-bold text-slate-900 text-base">Trade Fair & Catalog QR Codes</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Print smart QR codes on brochures, product packaging, and expo banners. Instant lead capture with attribution tracking.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                API
              </div>
              <h4 className="font-bold text-slate-900 text-base">IndiaMART & TradeIndia Webhooks</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Auto-ingest commercial B2B portal inquiries into your shared inbox within 5 seconds of submission.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                IVR
              </div>
              <h4 className="font-bold text-slate-900 text-base">Missed Call & IVR Auto-Text</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                When a customer calls after business hours, automatically trigger a WhatsApp message with catalog options.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                ERP
              </div>
              <h4 className="font-bold text-slate-900 text-base">Orizer ERP Customer Sync</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automatically identify if the inbound contact is an existing distributor, past quotation lead, or brand-new prospect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KANBAN PIPELINE MANAGEMENT ─── */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Visual Pipeline"
            title="Visual Lead Pipeline with Strict SLA Discipline"
            subtitle="Track every opportunity as it moves through qualification, formal ERP quotation, price negotiation, and closed orders."
          />

          <KanbanMockup />
        </div>
      </section>

      {/* ─── LEADGEN+ INLINE WORKING FORM ─── */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="Start Generating Leads"
            title="Ready to Supercharge Your Sales Pipeline?"
            subtitle="Fill out your requirements below to calculate your LeadGen+ deployment timeline with an Orizer specialist."
          />

          <WorkingForm
            formType="leadgen_inquiry"
            title="LeadGen+ Strategy Consultation"
            subtitle="Receive a customized inbound pipeline audit for your company."
            buttonText="Request LeadGen+ Proposal"
          />
        </div>
      </section>
    </div>
  );
}
