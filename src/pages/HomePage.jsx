import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  Filter,
  Inbox,
  GitBranch,
  BarChart3,
  Factory,
  Building2,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Sparkles,
  Megaphone,
  Bot,
  TrendingUp,
  Heart,
  Plane,
  ShieldCheck,
  BadgeCheck,
  Zap,
  Sliders,
  DollarSign,
  Clock,
  Send,
  ExternalLink,
  Users,
  Check,
  FileText,
  BookOpen,
  HelpCircle,
  Award,
  Layers,
  PhoneCall,
  UserCheck,
  Headphones,
  FileSpreadsheet,
} from 'lucide-react';
import {
  HeroVisualMockup,
  AnalyticsOverviewMockup,
  WorkflowBuilderMockup,
  KanbanMockup,
  TeamInboxMockup,
  CampaignAnalyticsMockup,
} from '../components/ui/DashboardMockups';
import { ORIZER_INFO } from '../data/orizerData';
import { FAQ_DATA } from '../data/faqData';

export default function HomePage({ onOpenDemoModal, onOpenContactModal }) {
  // Product Showcase Tab Switcher State
  const [activeShowcaseTab, setActiveShowcaseTab] = useState('inbox');

  // Solutions Hub Tab State ('role' vs 'industry')
  const [solutionsView, setSolutionsView] = useState('industry');

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* ───────────────────────────────────────────────────────────
          SECTION 1: HERO
      ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-20 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 text-left space-y-5 animate-fade-in-up">
              {/* Product Badge Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-xs font-semibold tracking-tight shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-mono uppercase text-[11px] text-emerald-700 font-bold">
                  Official Meta Business Platform
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600 font-normal">by Orizer</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-slate-900 leading-[1.14]">
                Turn WhatsApp Conversations Into{' '}
                <span className="text-emerald-600 underline decoration-emerald-300/70 decoration-wavy decoration-2">
                  Real Business Growth
                </span>
              </h1>

              {/* Subtitle / Product Explanation */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                eBizChat empowers modern enterprises and sales teams to automate customer journeys, capture and qualify inbound leads in under 15 seconds, collaborate in a shared team inbox, and synchronize communication directly with your <strong>Orizer ERP</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={onOpenContactModal}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all active:scale-[0.98] flex items-center gap-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenDemoModal}
                  className="px-5 py-3.5 rounded-xl text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all active:scale-[0.98] flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span>Book a Demo</span>
                </button>
                <a
                  href="#features"
                  className="px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-emerald-600 hover:bg-slate-100 transition-colors"
                >
                  Explore Features ↓
                </a>
              </div>

              {/* Trust Guarantees */}
              <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Official Meta Cloud API</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero Meta Markup</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Free Green Tick Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Layered Real Product Visual Mockup */}
            <div className="lg:col-span-6 w-full pt-4 lg:pt-0 animate-fade-in-up">
              <HeroVisualMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SECTION 2: LEAD GENERATION (VISUAL LEAD FUNNEL)
      ─────────────────────────────────────────────────────────── */}
      <section id="lead-generation" className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-2">
              LEAD GENERATION ENGINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Turn Inbound WhatsApp Traffic Into Qualified Pipeline
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Never let high-intent buyers wait hours for a reply. eBizChat automates the entire customer journey from initial discovery to qualified meeting in under 60 seconds.
            </p>
          </div>

          {/* 6-Stage Visual Funnel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Stage 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm relative group hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center">
                  01
                </span>
                <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Touchpoint</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Customer Discovers Business</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prospect clicks a Click-to-WhatsApp Meta Ad, scans a product QR code at an exhibition, or clicks the website chat button.
              </p>
              <div className="mt-4 p-2.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 font-mono flex items-center justify-between">
                <span>Source: Meta Ad #OZ-Industrial</span>
                <span className="text-emerald-600 font-bold">100% Attributed</span>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm relative group hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center">
                  02
                </span>
                <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Engagement</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Instant Automated Greeting</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Under 15 seconds, eBizChat sends an official verified welcome message with personalized customer details and an interactive service menu.
              </p>
              <div className="mt-4 p-2.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 font-mono flex items-center justify-between">
                <span>Response Time: &lt; 12s</span>
                <span className="text-emerald-600 font-bold">24/7 Active</span>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm relative group hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center">
                  03
                </span>
                <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Qualification</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Automated Qualification</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Smart chatbot asks targeted qualification questions: product requirement, estimated monthly volume, delivery location, and budget.
              </p>
              <div className="mt-4 p-2.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 font-mono flex items-center justify-between">
                <span>Answers Verified: 4/4</span>
                <span className="text-emerald-600 font-bold">Score: Hot Lead</span>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm relative group hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center">
                  04
                </span>
                <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold">CRM Intake</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Structured Lead Captured</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Contact details, inquiry parameters, and GST numbers are automatically parsed and enriched into the visual Kanban CRM pipeline.
              </p>
              <div className="mt-4 p-2.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 font-mono flex items-center justify-between">
                <span>Deal Size: ₹4,80,000</span>
                <span className="text-emerald-600 font-bold">Stage: Qualified</span>
              </div>
            </div>

            {/* Stage 5 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm relative group hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center">
                  05
                </span>
                <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Routing</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Sales Team Notified</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lead is instantly assigned to the appropriate regional sales manager with round-robin rules and mobile WhatsApp alerts.
              </p>
              <div className="mt-4 p-2.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 font-mono flex items-center justify-between">
                <span>Assigned: Amit Sharma</span>
                <span className="text-emerald-600 font-bold">Collision Free</span>
              </div>
            </div>

            {/* Stage 6 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm relative group hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center">
                  06
                </span>
                <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Conversion</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Follow-Up & Conversion</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sales rep sends official PDF quotation, schedules meeting via 1-tap WhatsApp button, and syncs order status into Orizer ERP.
              </p>
              <div className="mt-4 p-2.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 font-mono flex items-center justify-between">
                <span>Quotation: #QT-2026-89</span>
                <span className="text-emerald-600 font-bold">Deal Won</span>
              </div>
            </div>
          </div>

          {/* Interactive Lead Card Mockup Showcase */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  Live Funnel Telemetry
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Stop Losing Leads to Slow Manual Messaging
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Companies using eBizChat experience a <strong>38% increase in deal conversion</strong> by reducing lead response times from hours to seconds.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <Link
                    to="/leadgen"
                    className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Explore LeadGen Engine</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={onOpenDemoModal}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                  >
                    See Funnel Demo
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-slate-800/80 rounded-2xl border border-slate-700 p-5 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                    <span className="font-bold text-white">LIVE INBOUND QUALIFICATION STREAM</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">SLA: 14s</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Vikram Patel (Rajesh Textiles Ltd)</div>
                      <div className="text-[11px] text-slate-400">Requirement: 5,000 m Fabric · Est: ₹4.8 Lakhs</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                      QUALIFIED & QUOTE SENT
                    </span>
                  </div>
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Meera Nair (Apex Engineering)</div>
                      <div className="text-[11px] text-slate-400">Requirement: CNC Lathe Spare Parts Catalog</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-400 font-bold text-[10px]">
                      CATALOG DISPATCHED
                    </span>
                  </div>
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Karan Singhania (Surat Polymers)</div>
                      <div className="text-[11px] text-slate-400">Requirement: Dispatch Lorry Receipt #LR-8912</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 font-bold text-[10px]">
                      ERP LR SYNCED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SECTION 3: FEATURES (MIXED EDITORIAL GRID)
      ─────────────────────────────────────────────────────────── */}
      <section id="features" className="py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-2">
              COMPREHENSIVE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything You Need to Manage, Automate & Scale WhatsApp
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Enterprise-grade tools built specifically for commercial teams, customer communication, and operations.
            </p>
          </div>

          {/* Mixed Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            {/* 1. Large Feature Card (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between card-hover">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                  <Inbox className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                  SHARED TEAM INBOX
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Multi-Agent Collaboration Without Dropped Chats
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Equip your sales, customer support, and billing teams with a unified inbox. Assign chats to agents, leave private internal notes, set conversation tags, and eliminate agent collision with live typing visibility.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <strong className="block text-slate-900 mb-0.5">Agent Collision Lock</strong>
                    <span className="text-slate-500">Alerts if another rep is replying</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <strong className="block text-slate-900 mb-0.5">Private Internal Notes</strong>
                    <span className="text-slate-500">Collaborate invisible to customer</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/features/team-inbox"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                >
                  Explore Team Inbox →
                </Link>
                <span className="text-[11px] font-mono text-slate-400">SOC2 Certified Infrastructure</span>
              </div>
            </div>

            {/* 2 & 3. Two Stacked Smaller Cards (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Card 2: No-code Chatbots */}
              <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm flex-1 card-hover">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">No-Code Chatbot Builder</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Drag-and-drop conversational workflows with branching logic, keyword triggers, and instant FAQ resolution 24/7.
                </p>
                <Link
                  to="/features/chatbot"
                  className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1"
                >
                  Chatbot Builder Details →
                </Link>
              </div>

              {/* Card 3: Broadcast Campaigns */}
              <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm flex-1 card-hover">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  <Megaphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">WhatsApp Marketing Broadcasts</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Send personalized announcements, catalog offers, and festival greetings to opted-in audiences with 98% delivery rate.
                </p>
                <Link
                  to="/features/whatsapp-marketing"
                  className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1"
                >
                  Broadcast Campaigns →
                </Link>
              </div>
            </div>
          </div>

          {/* Wide Horizontal Feature (Card 4) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm card-hover mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-3 text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase">
                  ENTERPRISE ERP & CRM MESH
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Direct Two-Way Synchronization With Your Business Systems
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Bridge front-line WhatsApp communication directly into <strong>Orizer ERP</strong>, Tally Prime, SAP Business One, Zoho, and Salesforce. Trigger automated GST invoices, delivery slips, purchase orders, and payment reminders.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700">
                  <span className="flex items-center gap-1">✓ Automated GST Invoice PDF Dispatch</span>
                  <span className="flex items-center gap-1">✓ Live LR Copy & Gate Pass Delivery</span>
                  <span className="flex items-center gap-1">✓ Zero-Latency Webhook Sync</span>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-end gap-3">
                <Link
                  to="/features/integrations"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center shadow-sm transition-colors"
                >
                  Explore All Integrations
                </Link>
                <button
                  onClick={onOpenDemoModal}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs text-center transition-colors"
                >
                  Request Custom ERP Bridge
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SECTION 4: SOLUTIONS (ROLE & INDUSTRY HUB)
      ─────────────────────────────────────────────────────────── */}
      <section id="solutions" className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-2">
              TAILORED BUSINESS SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Built for Every Department and Commercial Model
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Explore concrete conversational workflows engineered for operational departments and specialized industry verticals.
            </p>

            {/* Toggle Switcher: By Industry vs By Role */}
            <div className="inline-flex items-center p-1 bg-slate-100 rounded-2xl mt-6 border border-slate-200">
              <button
                onClick={() => setSolutionsView('industry')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  solutionsView === 'industry'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                By Industry Verticals
              </button>
              <button
                onClick={() => setSolutionsView('role')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  solutionsView === 'role'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                By Department Role
              </button>
            </div>
          </div>

          {/* VIEW A: BY INDUSTRY */}
          {solutionsView === 'industry' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Manufacturing (Primary Spotlight) */}
              <div className="p-7 rounded-3xl bg-white border-2 border-emerald-500 shadow-md card-hover relative group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Factory className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase">
                    Orizer Heritage
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Manufacturing & Industrial</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Automate gate passes upon factory dispatch, deliver live lorry receipt (LR) copies, trigger GST invoice PDFs, and broadcast raw material price updates to dealer networks.
                </p>
                <Link
                  to="/solutions/manufacturing"
                  className="text-xs font-bold text-emerald-600 group-hover:underline flex items-center gap-1"
                >
                  Explore Manufacturing Playbook →
                </Link>
              </div>

              {/* 2. Retail & E-Commerce */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm card-hover group">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Retail & E-Commerce</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Recover abandoned checkouts with automated 2-step nudges, confirm cash-on-delivery (COD) orders via interactive WhatsApp buttons, and send live courier tracking.
                </p>
                <Link
                  to="/solutions/ecommerce"
                  className="text-xs font-bold text-emerald-600 group-hover:underline flex items-center gap-1"
                >
                  Explore E-Commerce Playbook →
                </Link>
              </div>

              {/* 3. Education & EdTech */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm card-hover group">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Education & EdTech</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Respond to student admission inquiries in under 15 seconds, automate counseling interview bookings, and send fee installment alerts with payment links.
                </p>
                <Link
                  to="/solutions/education"
                  className="text-xs font-bold text-emerald-600 group-hover:underline flex items-center gap-1"
                >
                  Explore Education Playbook →
                </Link>
              </div>

              {/* 4. Real Estate & Infrastructure */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm card-hover group">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Real Estate & Infrastructure</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Pre-qualify buyer budgets via structured questionnaires, share high-res PDF floorplans and project videos, and automate site visit confirmations.
                </p>
                <Link
                  to="/solutions/real-estate"
                  className="text-xs font-bold text-emerald-600 group-hover:underline flex items-center gap-1"
                >
                  Explore Real Estate Playbook →
                </Link>
              </div>

              {/* 5. Tour, Travel & Hospitality */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm card-hover group">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                  <Plane className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Tour, Travel & Hospitality</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Deliver customized trip itineraries in PDF, confirm hotel and flight vouchers, automate advance balance alerts, and gather post-trip reviews.
                </p>
                <Link
                  to="/solutions/services"
                  className="text-xs font-bold text-emerald-600 group-hover:underline flex items-center gap-1"
                >
                  Explore Travel Playbook →
                </Link>
              </div>

              {/* 6. Professional & B2B Services */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm card-hover group">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Professional & B2B Services</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Onboard new corporate clients seamlessly, schedule video consultations, automate recurring retainer reminders, and send document signature notices.
                </p>
                <Link
                  to="/solutions/services"
                  className="text-xs font-bold text-emerald-600 group-hover:underline flex items-center gap-1"
                >
                  Explore Services Playbook →
                </Link>
              </div>
            </div>
          )}

          {/* VIEW B: BY DEPARTMENT ROLE */}
          {solutionsView === 'role' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sales Teams */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm card-hover">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Sales Teams</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Instant Click-to-WhatsApp inbound ad attribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Automated lead qualification and round-robin distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Visual Kanban deal stage management and value tracking</span>
                  </li>
                </ul>
                <button
                  onClick={onOpenDemoModal}
                  className="text-xs font-bold text-emerald-600 hover:underline"
                >
                  See Sales Demo →
                </button>
              </div>

              {/* Marketing Teams */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm card-hover">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                  <Megaphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Marketing Teams</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>High-volume broadcast campaigns with 98% delivery rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Audience segmentation by customer tags, purchase volume & city</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Detailed telemetry: delivered, read receipts, and button CTR</span>
                  </li>
                </ul>
                <button
                  onClick={onOpenDemoModal}
                  className="text-xs font-bold text-emerald-600 hover:underline"
                >
                  See Marketing Demo →
                </button>
              </div>

              {/* Customer Support */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm card-hover">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Customer Support</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Shared team inbox with SLA tracking and collision detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>24/7 automated FAQ deflection resolving ~76% of routine inquiries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Automated post-resolution CSAT feedback surveys</span>
                  </li>
                </ul>
                <button
                  onClick={onOpenDemoModal}
                  className="text-xs font-bold text-emerald-600 hover:underline"
                >
                  See Support Demo →
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SECTION 5: HOW EBIZCHAT WORKS (4-STEP PROGRESSION)
      ─────────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-2">
              SIMPLE ONBOARDING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Get Up and Running in 4 Clear Steps
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              From official Meta verification to active production conversations in under 48 hours.
            </p>
          </div>

          {/* 4-Step Progressive Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between card-hover">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 font-mono font-bold text-sm flex items-center justify-center mb-5">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Connect Official WhatsApp</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Link your verified business phone number via official Meta Cloud API with our full Green Tick application guidance.
                </p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] font-mono text-emerald-700 border border-slate-200">
                ✓ Tier 4 API Scalability
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between card-hover">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 font-mono font-bold text-sm flex items-center justify-center mb-5">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Build Your Workflow</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Set up automated greetings, lead qualification questions, out-of-office triggers, and round-robin routing rules with zero code.
                </p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] font-mono text-emerald-700 border border-slate-200">
                ✓ Visual Flow Canvas
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between card-hover">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 font-mono font-bold text-sm flex items-center justify-center mb-5">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Capture & Collaborate</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Frontline messages flow into your shared team inbox. Agents respond collaboratively with private notes, templates, and collision detection.
                </p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] font-mono text-emerald-700 border border-slate-200">
                ✓ Shared Multi-Agent Inbox
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between card-hover">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 font-mono font-bold text-sm flex items-center justify-center mb-5">
                  04
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Convert Into Revenue</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Track qualified opportunities in your CRM pipeline, send official quotations, and synchronize order dispatch slips directly with Orizer ERP.
                </p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] font-mono text-emerald-700 border border-slate-200">
                ✓ Native ERP & CRM Sync
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SECTION 6: PRODUCT / UI SHOWCASE ("SEE EBIZCHAT IN ACTION")
      ─────────────────────────────────────────────────────────── */}
      <section id="product-showcase" className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-2">
              REAL PRODUCT INTERFACE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              See eBizChat in Action
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Switch between actual product modules to experience the unified dashboard used by operations and commercial teams daily.
            </p>
          </div>

          {/* 5-Tab Module Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveShowcaseTab('inbox')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeShowcaseTab === 'inbox'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Inbox className="w-4 h-4" />
              <span>Team Inbox</span>
            </button>

            <button
              onClick={() => setActiveShowcaseTab('automation')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeShowcaseTab === 'automation'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <GitBranch className="w-4 h-4" />
              <span>Automation Flows</span>
            </button>

            <button
              onClick={() => setActiveShowcaseTab('campaigns')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeShowcaseTab === 'campaigns'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Megaphone className="w-4 h-4" />
              <span>Broadcast Campaigns</span>
            </button>

            <button
              onClick={() => setActiveShowcaseTab('leads')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeShowcaseTab === 'leads'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>Lead Management</span>
            </button>

            <button
              onClick={() => setActiveShowcaseTab('analytics')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeShowcaseTab === 'analytics'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Analytics & SLAs</span>
            </button>
          </div>

          {/* Active Screen Display */}
          <div className="bg-slate-100/60 p-3 sm:p-6 rounded-3xl border border-slate-200/90 shadow-xl">
            {activeShowcaseTab === 'inbox' && <TeamInboxMockup />}
            {activeShowcaseTab === 'automation' && <WorkflowBuilderMockup />}
            {activeShowcaseTab === 'campaigns' && <CampaignAnalyticsMockup />}
            {activeShowcaseTab === 'leads' && <KanbanMockup />}
            {activeShowcaseTab === 'analytics' && <AnalyticsOverviewMockup />}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SECTION 7: INTEGRATIONS (ENTERPRISE CONNECTORS)
      ─────────────────────────────────────────────────────────── */}
      <section id="integrations" className="py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-2">
              CONNECTED ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Direct Connectors for Your Enterprise Stack
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              No fragile third-party scrapers. Genuine, official REST integrations and webhook bridges for mission-critical software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Meta Cloud API */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm card-hover">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  WA
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Official Tier 4
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Meta WhatsApp Cloud API</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct official API with highest throughput, high message delivery guarantees, and zero risk of phone number blocking.
              </p>
            </div>

            {/* Orizer ERP */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm card-hover">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                  OZ
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Native 2-Way Sync
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Orizer ERP</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamless synchronization with shop floor dispatch, PPC modules, inventory stock, PO alerts, and outstanding payment ledgers.
              </p>
            </div>

            {/* Tally Prime */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm card-hover">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                  TL
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                  Accounting Sync
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Tally Prime</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automatically dispatch GST tax invoices, payment receipt vouchers, and overdue payment alerts directly to customers on WhatsApp.
              </p>
            </div>

            {/* SAP Business One */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm card-hover">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-xs">
                  SAP
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                  Enterprise B1
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">SAP Business One</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect enterprise sales orders, material dispatch notifications, and vendor purchase order approvals.
              </p>
            </div>

            {/* CRM Connectors */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm card-hover">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs">
                  CRM
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                  Bi-Directional
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Zoho, Salesforce & HubSpot</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bi-directional lead intake, contact history synchronization, and automatic deal pipeline updates across commercial systems.
              </p>
            </div>

            {/* Webhooks & REST API */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm card-hover">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                  API
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                  Zero Latency
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Custom Webhooks & REST API</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trigger real-time WhatsApp alerts from any custom internal software with HMAC security and comprehensive payload telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SECTION 8: WHY EBIZCHAT & BUILT BY ORIZER
      ─────────────────────────────────────────────────────────── */}
      <section id="why-ebizchat" className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Part A: Why eBizChat Exists */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-2">
              THE CORE PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why eBizChat?
            </h2>
            <p className="text-base sm:text-lg text-slate-700 mt-4 leading-relaxed">
              WhatsApp is where your customers, dealers, and suppliers already communicate. eBizChat brings that informal communication into a structured, accountable, and automated enterprise workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Conversations Become Leads</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Inbound queries are immediately captured with contact records, timestamps, and deal values rather than getting lost on personal employee phones.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Eliminate Repetitive Work</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automate price lists, catalogs, quotation requests, and payment reminders so your team focuses only on high-value conversations.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Prevent Dropped Inquiries</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Shared inbox with collision prevention ensures multiple representatives can handle inquiries collaboratively with complete transparency.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Direct ERP & Financial Sync</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect customer communication directly to billing, inventory, and dispatch systems without manual copy-pasting.
              </p>
            </div>
          </div>

          {/* Part B: Dedicated "Built by Orizer" Enterprise Showcase */}
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                  <BadgeCheck className="w-4 h-4" />
                  BUILT BY ORIZER
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Enterprise Pedigree Grounded in Real Industrial Technology
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  eBizChat is not an unverified side-project. It is engineered and maintained by <strong>Orizer</strong>, an established enterprise resource planning (ERP) and business automation software company headquartered in Vapi, Gujarat.
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  While Orizer's core ERP software powers shop floor production planning, inventory, QC, and financial accounting for hundreds of industrial plants, <strong>eBizChat</strong> was built specifically to bridge that operational engine with frontline customer WhatsApp communication.
                </p>

                {/* Real Verified Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">220+</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Enterprise Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">2,810+</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Active Business Users</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">99.8%</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Delivery SLA</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="https://orizer.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-colors inline-flex items-center gap-2"
                  >
                    <span>Explore Orizer ERP (orizer.in)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`}
                    className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs border border-slate-700 transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Call Vapi HO: +91 96245 13385</span>
                  </a>
                </div>
              </div>

              {/* Head Office Address Box */}
              <div className="lg:col-span-5 bg-slate-800/90 rounded-2xl border border-slate-700 p-6 space-y-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-400 font-bold border-b border-slate-700 pb-3">
                  <Building2 className="w-4 h-4" />
                  <span>ORIZER HEAD OFFICE (VAPI)</span>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <p className="font-semibold text-white">Orizer Enterprise Solutions</p>
                  <p>H.O: O-4 & 5, First Floor, Beside Zudio-Westside</p>
                  <p>Mohid Tower, Daman Road, Chala</p>
                  <p>Vapi (W) - 396191, Gujarat, India</p>
                </div>
                <div className="pt-2 border-t border-slate-700 space-y-1 text-slate-400 text-[11px]">
                  <p>Support Desk: support@orizer.in</p>
                  <p>Enterprise Sales: sales@orizer.in</p>
                  <p>Business Hours: 9:00 AM – 6:00 PM IST (Mon–Sat)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SECTION 9: PRICING (TRANSPARENT PLANS WITH COMPARISON)
      ─────────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-2">
              TRANSPARENT PRICING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Predictable Plans With Zero Meta Conversation Markup
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              We pass official Meta conversation rates directly without artificial hidden markups, saving you up to 40% on high-volume business messaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Starter */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between card-hover">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-slate-500">Starter</span>
                <div className="mt-4 mb-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold font-mono text-slate-900">₹1,999</span>
                  <span className="text-xs text-slate-500">/ month</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Ideal for small businesses and growing shops establishing an official WhatsApp Business presence.
                </p>

                <ul className="space-y-3 text-xs text-slate-700 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Official Meta WhatsApp Cloud API</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Up to 3 Team Agent Seats</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Shared Team Inbox & Canned Replies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Standard Broadcast Messaging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>0% Markup on Meta Conversations</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenContactModal}
                className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
              >
                Choose Starter
              </button>
            </div>

            {/* Growth (Featured) */}
            <div className="bg-white rounded-3xl border-2 border-emerald-500 p-8 shadow-xl flex flex-col justify-between relative card-hover">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                Most Popular for B2B
              </div>
              <div>
                <span className="text-xs font-mono uppercase font-bold text-emerald-600">Growth</span>
                <div className="mt-4 mb-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold font-mono text-slate-900">₹4,499</span>
                  <span className="text-xs text-slate-500">/ month</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  For active commercial operations, sales teams, and multi-agent customer support.
                </p>

                <ul className="space-y-3 text-xs text-slate-700 mb-8">
                  <li className="flex items-center gap-2 font-semibold text-slate-900">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Everything in Starter included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Up to 10 Team Agent Seats</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>No-Code Chatbot Flow Builder</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Visual Kanban Lead Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Free Official Green Tick Application</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenContactModal}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-colors"
              >
                Start Growth Plan
              </button>
            </div>

            {/* Enterprise / Custom */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between card-hover">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-slate-500">Enterprise</span>
                <div className="mt-4 mb-2 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-slate-900">Custom</span>
                  <span className="text-xs text-slate-500">/ Talk to Sales</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  For manufacturing plants, distributors, and high-volume operations requiring native ERP sync.
                </p>

                <ul className="space-y-3 text-xs text-slate-700 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Unlimited Agent Seats</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Native Orizer ERP, Tally or SAP Sync</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Automated GST Invoice & LR Dispatch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Dedicated Technical Account Manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Custom API & SLA Guarantee (99.98%)</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenDemoModal}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
              >
                Talk to Enterprise Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SECTION 10: RESOURCES (GUIDES, PLAYBOOKS, DOCS)
      ─────────────────────────────────────────────────────────── */}
      <section id="resources" className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-2">
              KNOWLEDGE & GUIDES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Resources to Accelerate Your WhatsApp Strategy
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Step-by-step documentation, B2B sales playbooks, and developer API references to scale your communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Guide 1 */}
            <Link
              to="/resources"
              className="p-6 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm card-hover flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  WhatsApp API Quickstart Guide
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Official Meta WABA onboarding documentation, business verification guidelines, and Green Tick application checklist.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-600 group-hover:underline flex items-center gap-1">
                Read Guide →
              </span>
            </Link>

            {/* Guide 2 */}
            <Link
              to="/leadgen"
              className="p-6 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm card-hover flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <Filter className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Inbound Lead Gen Playbook
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  How high-performing commercial teams qualify prospects in 15 seconds and boost deal close rates by 38%.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-600 group-hover:underline flex items-center gap-1">
                Read Playbook →
              </span>
            </Link>

            {/* Guide 3 */}
            <Link
              to="/solutions/manufacturing"
              className="p-6 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm card-hover flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Manufacturing WhatsApp ERP Workflows
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Automate gate pass alerts, GST invoice PDF delivery upon dispatch, and lorry receipt (LR) copies directly to dealers.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-600 group-hover:underline flex items-center gap-1">
                Read Playbook →
              </span>
            </Link>

            {/* Guide 4 */}
            <Link
              to="/features/integrations"
              className="p-6 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm card-hover flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Developer API & Webhook Specs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  REST endpoints, message event schemas, webhook HMAC validation, and code samples for bidirectional sync.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-600 group-hover:underline flex items-center gap-1">
                Explore API Specs →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SECTION 11: FREQUENTLY ASKED QUESTIONS (ACCORDION)
      ─────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-2">
              CLEAR ANSWERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Everything you need to know about Meta WABA verification, pricing, chatbots, and Orizer ERP connectivity.
            </p>
          </div>

          <div className="space-y-3.5 text-left">
            {FAQ_DATA.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4.5 flex items-center justify-between text-left font-bold text-slate-900 text-sm focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5 bg-slate-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Direct HelpDesk Card */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 text-left">
            <div>
              <strong className="text-slate-900 text-sm block">Have an operational question not listed here?</strong>
              Our enterprise solution engineers in Vapi and Mumbai are ready to guide you on WhatsApp API & factory sync.
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Call Directly</span>
              </a>
              <button
                onClick={onOpenContactModal}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors"
              >
                Talk to Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          SECTION 12: FINAL HIGH-IMPACT CALL-TO-ACTION
      ─────────────────────────────────────────────────────────── */}
      <section id="cta" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Title */}
              <div className="max-w-xl text-left space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-200 text-xs font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Official Meta WABA Partner by Orizer
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Ready to Turn WhatsApp Conversations Into Real Business Opportunities?
                </h2>
                <p className="text-emerald-100 text-xs sm:text-sm font-normal leading-relaxed">
                  Join hundreds of forward-thinking businesses and industrial manufacturers using eBizChat by Orizer to automate customer journeys, capture leads, and scale revenue.
                </p>
              </div>

              {/* Right Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenContactModal}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-emerald-900 hover:bg-slate-100 font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                >
                  Get Started Free
                </button>
                <button
                  onClick={onOpenDemoModal}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-transparent text-white border border-white hover:bg-white/10 font-bold text-sm transition-all active:scale-[0.98]"
                >
                  Book Live Demo
                </button>
                <a
                  href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`}
                  className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-emerald-800/90 hover:bg-emerald-900 text-white font-mono font-bold text-sm transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-emerald-300" />
                  <span>+91 96245 13385</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
