import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Filter,
  Inbox,
  GitBranch,
  BarChart3,
  Layers,
  Factory,
  Building2,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  PhoneCall,
  BadgeCheck,
  Send,
  Zap,
} from 'lucide-react';
import WhatsAppSimulator from '../components/ui/WhatsAppSimulator';
import {
  TeamInboxMockup,
  KanbanMockup,
  WorkflowAutomationMockup,
  CampaignAnalyticsMockup,
} from '../components/ui/DashboardMockups';
import SectionHeader from '../components/ui/SectionHeader';
import { ORIZER_INFO } from '../data/orizerData';
import { FAQ_DATA } from '../data/faqData';
import { CASE_STUDIES } from '../data/blogData';

export default function HomePage({ onOpenDemoModal, onOpenContactModal }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left Copy */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Product Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-semibold tracking-wide shadow-subtle">
                <BadgeCheck className="w-4 h-4 text-brand-600" />
                <span>Orizer ERP · Official WhatsApp Business API Solution</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Turn Every Customer Conversation Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500">
                  Business Growth.
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                Connect verified WhatsApp messaging, multi-channel lead capture, and CRM automation directly with your <strong>Orizer ERP</strong>. Accelerate deal closures, automate factory dispatch alerts, and empower your team with a unified shared inbox.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenContactModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-btn transition-all active:scale-[0.98]"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-subtle transition-all active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4 text-brand-600" />
                  Book a Live Demo
                </button>
              </div>

              {/* Trust Micro-Bullets */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Meta Verified Cloud API</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Native Orizer ERP Sync</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Zero Unsolicited Spam</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual: Realistic Light-theme WhatsApp Simulator */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <WhatsAppSimulator />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST & VERIFIED STATS STRIP ─── */}
      <section className="py-10 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {ORIZER_INFO.stats.map((stat) => (
              <div key={stat.label} className="p-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-400 font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT eBizChat DOES (THE VALUE PILLARS) ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Platform Architecture"
            title="Everything You Need to Automate Business Communication"
            subtitle="eBizChat replaces fragmented personal chat apps, lost email inquiries, and manual data re-entry with a synchronized enterprise platform."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover transition-all group">
              <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Official WhatsApp Business API
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Broadcast pre-approved promotional campaigns, automate transactional notifications with rich buttons, and secure verified Green Tick brand credibility.
              </p>
              <Link
                to="/features/whatsapp-marketing"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 group-hover:text-brand-700"
              >
                Explore WhatsApp Marketing →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Inbox className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Multi-Agent Shared Team Inbox
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Unify sales, customer support, and plant dispatch under one official number. Prevent double replies with collision detection, internal notes, and tagging.
              </p>
              <Link
                to="/features/team-inbox"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-700"
              >
                Explore Team Inbox →
              </Link>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Native Orizer ERP 2-Way Sync
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Connect directly into Orizer ERP modules: dispatch LR numbers, customer ledger outstanding, purchase order approvals, and live inventory lookup.
              </p>
              <Link
                to="/solutions/manufacturing"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 group-hover:text-emerald-700"
              >
                Explore Manufacturing Sync →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEADGEN+ ENGINE PREVIEW ─── */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-left space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-mono font-bold">
                LeadGen+ Acceleration
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Capture Inbound Leads. Qualify Instantly. Close in Days.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Traditional website forms make prospects wait up to 24 hours. With <strong>LeadGen+</strong>, prospects trigger automated WhatsApp conversations where budget, quantity, and purchase timelines are verified in seconds.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Multi-Channel Ingestion</h4>
                    <p className="text-xs text-slate-500">Collect leads from WhatsApp click-to-chat ads, website widgets, and trade fair QR codes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Automated Scoring & Routing</h4>
                    <p className="text-xs text-slate-500">Qualify high-value buyers and route them to senior sales executives instantly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Automated Quotation Nurturing</h4>
                    <p className="text-xs text-slate-500">Follow up on pending quotations at 24h, 72h, and 7d without manual intervention.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/leadgen"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-sm transition-all"
                >
                  Explore Complete LeadGen+ Journey
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <KanbanMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SHARED TEAM INBOX SHOWCASE ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Collaboration & CRM"
            title="A Shared Team Inbox Engineered for Modern Enterprises"
            subtitle="Give your frontline team full customer context with CRM metadata, Orizer ERP order records, and private internal notes side-by-side."
          />

          <TeamInboxMockup />
        </div>
      </section>

      {/* ─── VISUAL WORKFLOW AUTOMATION ENGINE ─── */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="No-Code Workflow Engine"
            title="Automate Repetitive B2B Follow-Ups & Dispatches"
            subtitle="Visually design trigger-condition-action sequences that keep dealers informed, collect overdue payments, and eliminate phone follow-up delays."
          />

          <WorkflowAutomationMockup />
        </div>
      </section>

      {/* ─── TELEMETRY & REPORTING ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Business Intelligence"
            title="Actionable Analytics & Executive MIS Reporting"
            subtitle="Monitor campaign delivery rates, dealer engagement, and team response SLAs in real time with exportable executive summaries."
          />

          <CampaignAnalyticsMockup />
        </div>
      </section>

      {/* ─── INDUSTRY SOLUTIONS PREVIEW (HEAVY MANUFACTURING FOCUS) ─── */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Industry Tailored"
            title="Built for the Demands of Indian Manufacturing & B2B Enterprises"
            subtitle="Rooted in Orizer's decades of manufacturing ERP expertise. Customized workflows designed for your specific vertical."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Manufacturing - Primary / Highlighted Card */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-float relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 font-mono text-xs font-semibold border border-brand-500/30">
                  <Factory className="w-3.5 h-3.5" />
                  <span>Featured Solution · Native Orizer ERP Sync</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Manufacturing & Discrete Engineering
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                  Automate Lorry Receipt (LR) dispatch copies, driver contact notifications, tax invoice PDFs, dealer stock inquiries, and Quality Control (QC) inspection certificates straight from your shop floor.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-700/60 text-xs">
                  <div>
                    <span className="text-brand-400 font-mono font-bold block text-lg">75%</span>
                    <span className="text-slate-400">Fewer Dispatch Calls</span>
                  </div>
                  <div>
                    <span className="text-brand-400 font-mono font-bold block text-lg">9 Days</span>
                    <span className="text-slate-400">Faster Payment Recovery</span>
                  </div>
                  <div>
                    <span className="text-brand-400 font-mono font-bold block text-lg">100%</span>
                    <span className="text-slate-400">Verified ERP Grounding</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 relative z-10">
                <Link
                  to="/solutions/manufacturing"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-colors"
                >
                  Explore Manufacturing Deep Dive
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Wholesale & Distribution */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Wholesale & Dealers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Allow dealers to check stock availability, submit repeat orders, and receive monthly ledger statements directly on WhatsApp.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/solutions/services"
                  className="text-xs font-semibold text-brand-600 hover:underline inline-flex items-center gap-1"
                >
                  View Solution →
                </Link>
              </div>
            </div>

            {/* E-Commerce & Retail */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">E-Commerce & D2C</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Recover abandoned shopping carts, verify Cash-on-Delivery (COD) orders with 1 tap, and dispatch tracking alerts.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/solutions/ecommerce"
                  className="text-xs font-semibold text-brand-600 hover:underline inline-flex items-center gap-1"
                >
                  View Solution →
                </Link>
              </div>
            </div>

            {/* Real Estate */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Real Estate & Builders</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deliver digital brochures, qualify buyer budgets, and book on-site project walkthroughs with automated Google Maps directions.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/solutions/real-estate"
                  className="text-xs font-semibold text-brand-600 hover:underline inline-flex items-center gap-1"
                >
                  View Solution →
                </Link>
              </div>
            </div>

            {/* Education */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-card flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Education & Institutes</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automate admission counseling, entrance test inquiries, fee payment reminders, and campus circular broadcasts.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/solutions/education"
                  className="text-xs font-semibold text-brand-600 hover:underline inline-flex items-center gap-1"
                >
                  View Solution →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REAL CUSTOMER PROOF / ENTERPRISE CASE STUDY ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Proven Production Results"
            title="Real-World Production Impact at Apex Industrial Dynamics"
            subtitle="A leading heavy engineering OEM operating across 350+ dealer locations in Western India."
          />

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-brand-700 uppercase">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Verified Production Deployment · Ahmedabad, Gujarat</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                  "eBizChat connected our plant dispatch directly to our dealers' pockets. The reduction in phone calls alone saved our sales desk 18 hours every week."
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  — Director of Operations, Apex Industrial Dynamics
                </p>
                <div className="pt-4 flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-mono text-slate-700">
                    Orizer Inventory Module
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-mono text-slate-700">
                    PPC Automation
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-mono text-slate-700">
                    Auto-Dispatch Webhook
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-subtle">
                  <div className="text-2xl font-bold text-brand-600 font-mono">72%</div>
                  <div className="text-xs text-slate-600 font-medium mt-0.5">Faster Quote-to-PO Cycle</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-subtle">
                  <div className="text-2xl font-bold text-brand-600 font-mono">85%</div>
                  <div className="text-xs text-slate-600 font-medium mt-0.5">Dealers Self-Serving Stock Data</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-subtle">
                  <div className="text-2xl font-bold text-brand-600 font-mono">₹42 Lakh</div>
                  <div className="text-xs text-slate-600 font-medium mt-0.5">Receivables Cleared in 60 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FREQUENTLY ASKED QUESTIONS PREVIEW ─── */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about getting started with Orizer eBizChat."
          />

          <div className="space-y-3 text-left">
            {FAQ_DATA.slice(0, 5).map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.question}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-subtle"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-sm sm:text-base text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 flex-shrink-0 ml-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline inline-flex items-center gap-1"
            >
              Browse all FAQs and compliance docs →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CONVERSION CTA ─── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/5 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 font-mono text-xs font-semibold border border-brand-500/30">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>Ready to Automate Customer Engagement?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Connect Your Business to WhatsApp with{' '}
            <span className="text-brand-400">Orizer eBizChat</span>.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Schedule a 30-minute personalized walkthrough with an Orizer ERP specialist. See how your inventory, orders, and sales pipelines connect seamlessly to WhatsApp.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-btn transition-all active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              Book a Discovery Demo
            </button>
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all active:scale-[0.98]"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-6 text-xs text-slate-400 font-mono">
            Direct HelpDesk: <a href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`} className="text-white hover:underline">{ORIZER_INFO.contact.mainPhone}</a> · {ORIZER_INFO.contact.emails.sales}
          </div>
        </div>
      </section>
    </div>
  );
}
