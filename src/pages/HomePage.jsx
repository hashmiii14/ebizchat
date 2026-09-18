import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Calendar,
  Megaphone,
  Inbox,
  Bot,
  TrendingUp,
  ShoppingBag,
  Heart,
  GraduationCap,
  Building2,
  Plane,
  Landmark,
  MoreHorizontal,
  Sparkles,
  Zap,
  ShieldCheck,
  Layers,
  Factory,
  ChevronDown,
  ChevronUp,
  FileText,
  HelpCircle,
  MessageSquare,
  Phone,
  ExternalLink,
  Clock,
  BarChart3,
  GitBranch,
  Users,
  Search,
  Star,
  Award,
  BookOpen,
  Headphones,
  Send,
  Database,
  Download,
  Truck,
  Filter,
  RefreshCw,
  Cpu,
  Share2,
  Briefcase,
  Sliders,
  Radio,
  Lock,
  Workflow,
} from 'lucide-react';
import {
  HeroVisualMockup,
  TeamInboxMockup,
  KanbanMockup,
  WorkflowBuilderMockup,
  LeadPipelineMockup,
  AnalyticsOverviewMockup,
  CampaignAnalyticsMockup,
} from '../components/ui/DashboardMockups';
import { ORIZER_INFO } from '../data/orizerData';
import { PRICING_DATA } from '../data/pricingData';
import { BLOG_POSTS } from '../data/blogData';
import SEOHead from '../components/ui/SEOHead';

export default function HomePage({ onOpenDemoModal, onOpenContactModal }) {
  // Interactive Product Showcase tab state
  const [productShowcaseTab, setProductShowcaseTab] = useState('inbox');

  // Key Features tab state (Cunnekt-style)
  const [keyFeaturesTab, setKeyFeaturesTab] = useState('chatbot');

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Exact 8 questions requested in prompt
  const faqList = [
    {
      q: 'What is eBizChat?',
      a: 'eBizChat is an enterprise-grade WhatsApp Business platform by Orizer that turns everyday customer conversations into real business opportunities. It combines multi-agent shared inboxes, visual lead generation pipelines, no-code chat automation, and native ERP/CRM connectivity into a single unified workspace.',
    },
    {
      q: 'Who is eBizChat for?',
      a: 'eBizChat is engineered for modern commercial enterprises, including manufacturing plants, wholesale distributors, retail and e-commerce brands, healthcare providers, real estate builders, and education institutes looking to eliminate lead leakage and automate WhatsApp operations.',
    },
    {
      q: 'How does WhatsApp automation work?',
      a: 'eBizChat connects directly to the official Meta WhatsApp Business Cloud API. When a customer sends a message or clicks a WhatsApp ad, our intelligent engine qualifies their intent, triggers multi-step conditional replies, schedules reminders, or hands off hot opportunities to live team agents.',
    },
    {
      q: 'Can eBizChat help with lead generation?',
      a: 'Yes. eBizChat automatically captures incoming prospect contact numbers, UTM campaign sources, and requirement details without form friction. It scores prospect intent in 3 quick WhatsApp prompts and places the deal directly onto a visual Kanban CRM board with assigned reps.',
    },
    {
      q: 'Can teams manage conversations collaboratively?',
      a: 'Absolutely. Multiple agents across sales, support, and dispatch can operate under a single official Meta-verified WhatsApp number. eBizChat prevents double-replies with collision detection, enables private team notes, and offers skill-based round-robin routing.',
    },
    {
      q: 'Can eBizChat integrate with business systems?',
      a: 'Yes. eBizChat provides native bi-directional synchronization with Orizer ERP for real-time dispatch alerts, LR docket tracking, and invoice PDFs. It also connects with CRMs, payment gateways, Shopify, WooCommerce, and custom enterprise databases via webhooks and REST APIs.',
    },
    {
      q: 'How do I get started?',
      a: 'Getting started takes under 15 minutes. You can either bring your existing WhatsApp number or register a new verified number. Our onboarding team at Orizer provides complete guided setup, template approvals, and ERP workflow mapping.',
    },
    {
      q: 'How is eBizChat related to Orizer?',
      a: 'eBizChat is built and backed by Orizer Infotech Pvt. Ltd. While Orizer provides comprehensive industrial enterprise solutions including ERP, CRM, and supply chain automation, eBizChat is Orizer’s dedicated platform focused specifically on WhatsApp customer communication, lead generation, and frontline workflows.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden">
      <SEOHead
        title="eBizChat - WhatsApp Business Platform & CRM Automation | Orizer"
        description="Enterprise WhatsApp Business platform by Orizer. Multi-agent shared inbox, visual Kanban pipelines, no-code chat automation, and 2-way ERP sync."
        canonical="https://ebizchat.vercel.app/"
      />
      {/* ───────────────────────────────────────────────────────────
          1. HERO SECTION (Cunnekt Quality & Layout)
      ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-22 overflow-hidden border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-6 text-left space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>WhatsApp Business Platform by Orizer</span>
              </div>

              {/* Main Heading: 2-3 lines, high contrast */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Turn WhatsApp Conversations Into{' '}
                <span className="text-emerald-600">Business Opportunities</span>
              </h1>

              {/* Supporting text */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                eBizChat helps businesses manage customer conversations, generate leads and automate WhatsApp communication from one powerful platform.
              </p>

              {/* 2 CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={onOpenContactModal}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all active:scale-[0.98] inline-flex items-center gap-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/features"
                  className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-all active:scale-[0.98] inline-flex items-center gap-2"
                >
                  <span>Explore Features</span>
                </Link>
              </div>

              {/* Small Trust Points: 4 items */}
              <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                  <span>WhatsApp Business</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                  <span>Lead Generation</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                  <span>Automation</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                  <span>Built by Orizer</span>
                </div>
              </div>
            </div>

            {/* Right Column: Large realistic product visual (Web App + Chat + Leads + Floating iPhone) */}
            <div className="lg:col-span-6 w-full pt-4 lg:pt-0 pb-6 sm:pb-10 lg:pb-6">
              <HeroVisualMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. ENTERPRISE TRUST STATEMENT & SECURITY STRIP (No fake logos)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-8 border-b border-slate-100 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-left">
            <div className="max-w-md">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-emerald-700 block mb-1">
                Enterprise Standards & Reliability
              </span>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                Trusted business communication infrastructure engineered by Orizer with 99.9% uptime architecture.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Meta Cloud API Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs">
                <Database className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Orizer ERP 2-Way Sync</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs">
                <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>AES-256 End-to-End Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. WHAT IS EBIZCHAT? (Requirement #8)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block">
                WHAT IS EBIZCHAT?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                Everything You Need to Build <span className="text-emerald-600">Better Customer Conversations</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                eBizChat is the central communication nervous system that connects your customers’ preferred messaging channel with your core business workflows. From first touch to closed sale and repeat orders, eBizChat organizes every interaction with speed and accountability.
              </p>

              {/* 6 Capability Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {[
                  {
                    title: 'WhatsApp Communication',
                    desc: 'Official WhatsApp Business API with zero ban risk and verified green tick readiness.',
                    icon: MessageSquare,
                  },
                  {
                    title: 'Automated Lead Capture',
                    desc: 'Capture phone numbers and UTM source instantly with zero form abandonment.',
                    icon: Zap,
                  },
                  {
                    title: 'Visual Automation',
                    desc: 'Drag-and-drop triggers, interactive quick replies, and multi-step conditional logic.',
                    icon: GitBranch,
                  },
                  {
                    title: 'Team Workflows',
                    desc: 'Shared multi-agent inbox, collision detection, and department routing.',
                    icon: Users,
                  },
                  {
                    title: 'Customer Engagement',
                    desc: 'Personalized broadcasts, rich media catalogs, and transactional order alerts.',
                    icon: Megaphone,
                  },
                  {
                    title: 'Business Follow-up',
                    desc: 'Automated payment reminders, quote tracking, and bi-directional ERP synchronization.',
                    icon: RefreshCw,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <item.icon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemoModal}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>See How It Works</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Product Screenshot: Unified Lead Funnel & Communication Pipeline */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white w-full max-w-lg group">
                <img
                  src="/images/lead-funnel-pipeline.png"
                  alt="eBizChat WhatsApp Communication & Full Lead Conversion Pipeline"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-4 text-white text-left">
                  <div className="text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Unified Lead Capture & Sales Pipeline</span>
                  </div>
                  <div className="text-[11px] text-emerald-200 mt-0.5">Multi-channel lead intake, automated qualification & live team routing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. LEAD GENERATION SECTION (Requirement #9)
      ─────────────────────────────────────────────────────────── */}
      <section id="lead-generation" className="py-20 lg:py-26 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              PIPELINE DISCIPLINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Turn Conversations Into <span className="text-emerald-600">Actionable Leads</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Don't lose high-intent buyers in messy chat lists. eBizChat converts incoming customer chats into structured CRM cards with automated qualification, lead scoring, and instant agent assignment.
            </p>
          </div>

          {/* Visual 7-Step Workflow Requested in Prompt:
              Customer Message -> Conversation -> Lead Capture -> Qualification -> Assignment -> Follow-up -> Business Opportunity */}
          <div className="mb-14 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 text-left flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>Automated WhatsApp Lead Journey:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {[
                { step: '01', title: 'Customer Message', desc: 'Inbound ad or QR scan' },
                { step: '02', title: 'Conversation', desc: 'Instant 0s response' },
                { step: '03', title: 'Lead Capture', desc: 'Phone & UTM source' },
                { step: '04', title: 'Qualification', desc: 'Budget & requirement' },
                { step: '05', title: 'Assignment', desc: 'Routed to sales rep' },
                { step: '06', title: 'Follow-up', desc: 'Automated CRM alerts' },
                { step: '07', title: 'Opportunity', desc: 'ERP Quotation & Deal' },
              ].map((item, idx) => (
                <div key={idx} className="relative p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
                  <div className="text-[10px] font-mono font-bold text-emerald-600 mb-1">{item.step}</div>
                  <div className="text-xs font-bold text-slate-900 leading-tight mb-1">{item.title}</div>
                  <div className="text-[10px] text-slate-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Kanban Pipeline Mockup & Detail Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 text-left space-y-5">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Visual Lead Pipeline with Real-Time ERP Context
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Track leads across Inbound, Qualified, Quote Sent, and Won deal stages. Every card includes buyer name, verified WhatsApp number, estimated deal value, and direct connection to Orizer ERP.
              </p>
              <div className="space-y-2.5 pt-1">
                {[
                  'Lead Status: Real-time stage badges (Fresh, Qualified, Negotiation, Won)',
                  'Lead Source: Automatic tagging for Click-to-WhatsApp ads, QR & Website',
                  'Assigned Team: Round-robin routing with dedicated sales owner',
                  'Follow-up Reminders: Automated calendar alerts to prevent pipeline stall',
                  'Customer Info: Company details, past order records, and credit limits',
                ].map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  to="/leadgen"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Lead Generation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadPipelineMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. KEY FEATURES OF WHATSAPP BUSINESS API PLATFORM (Requirement #10 & Cunnekt Screenshot)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-26 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Key <span className="text-emerald-600">Features</span> Of WhatsApp Business API Platform
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Everything modern businesses need to scale customer communication, automate support, and accelerate revenue.
            </p>
          </div>

          {/* Interactive Feature Pills Switcher (like Cunnekt UI) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {[
              { id: 'chatbot', label: 'Whatsapp Chatbot Builder', icon: Bot },
              { id: 'integrations', label: 'Whatsapp API Integrations', icon: Layers },
              { id: 'leadgen', label: 'Lead Management', icon: Filter },
              { id: 'marketing', label: 'WhatsApp Marketing', icon: Megaphone },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setKeyFeaturesTab(tab.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 ${
                  keyFeaturesTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Showcase Card */}
          <div className="bg-slate-50/70 rounded-3xl border border-slate-200/90 p-8 sm:p-12 text-left">
            {keyFeaturesTab === 'chatbot' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                    NO-CODE VISUAL BUILDER
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Whatsapp Chatbot Builder
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Create powerful WhatsApp chatbots without any coding. Design automated conversation flows to answer FAQs, qualify leads, collect user requirements, share product catalogs, and hand off chats to live team agents seamlessly.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Hybrid keyword rules + intelligent intent classification</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>24/7 instant response under 3 seconds with zero human latency</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Seamless human escalation with full chat history</span>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      to="/features/chatbot"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors inline-flex items-center gap-2"
                    >
                      <span>No-Code Chatbot Builder &gt;&gt;</span>
                    </Link>
                    <span className="px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-slate-600 font-mono">
                      Meta Cloud API Verified
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                    <img
                      src="/images/appointment-scheduling.png"
                      alt="WhatsApp Chatbot Builder"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {keyFeaturesTab === 'integrations' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                    ENTERPRISE CONNECTIVITY
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Whatsapp API Integrations
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Connect WhatsApp directly with the core business software your company already uses. Enable instant bi-directional data flow with Orizer ERP, external CRMs, payment gateways, and custom inventory databases.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Native Orizer ERP integration for automated dispatch notes & invoices</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Webhook triggers for order status and payment completion</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Comprehensive REST API endpoints with 99.9% uptime SLA</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link
                      to="/features/integrations"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors inline-flex items-center gap-2"
                    >
                      <span>Explore Integrations &gt;&gt;</span>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                    <img
                      src="/images/transactional-notifications.png"
                      alt="WhatsApp API Integrations"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {keyFeaturesTab === 'leadgen' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                    CONVERSION PIPELINE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Lead Management & CRM
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Manage leads end-to-end: capture, track, qualify, nurture, and convert seamlessly. Provide your sales reps with structured deal stages, follow-up timers, and customer buying signals.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Visual Kanban deal board with drag-and-drop stages</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Automated round-robin rep distribution and collision avoidance</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Complete interaction log and ledger history per account</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link
                      to="/features/lead-management"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors inline-flex items-center gap-2"
                    >
                      <span>Explore Lead CRM &gt;&gt;</span>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                    <img
                      src="/images/multi-agent-collaboration.png"
                      alt="Lead Management & CRM"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {keyFeaturesTab === 'marketing' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                    ENGAGE AT SCALE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    WhatsApp Marketing & Catalogs
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Deliver personalized marketing campaigns with 98% open rates. Showcase your products with multi-card interactive carousels, PDF spec sheets, and quick-reply action buttons directly in WhatsApp.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Pre-approved Meta message templates with personalized variables</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Real-time delivery, read, and click tracking reports</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Product collection showcase with instant checkout links</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link
                      to="/features/whatsapp-marketing"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors inline-flex items-center gap-2"
                    >
                      <span>Explore WhatsApp Marketing &gt;&gt;</span>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                    <img
                      src="/images/rich-media-engagement.png"
                      alt="WhatsApp Marketing & Catalogs"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. PRODUCT SHOWCASE SECTION (Requirement #11: Functional 5-Tab Dashboard)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-26 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              ALL-IN-ONE WORKSPACE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Powerful Tools for <span className="text-emerald-600">Smarter Business Communication</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Explore the realistic eBizChat interface. Switch between live modules below.
            </p>
          </div>

          {/* Interactive 5 Tabs Requested in Prompt:
              Inbox | Leads | Automation | Campaigns | Analytics */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'inbox', label: 'Inbox', icon: Inbox },
              { id: 'leads', label: 'Leads', icon: Filter },
              { id: 'automation', label: 'Automation', icon: GitBranch },
              { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setProductShowcaseTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 ${
                  productShowcaseTab === tab.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Mockup Preview Container */}
          <div className="max-w-6xl mx-auto transition-all duration-300">
            {productShowcaseTab === 'inbox' && <TeamInboxMockup />}
            {productShowcaseTab === 'leads' && <KanbanMockup />}
            {productShowcaseTab === 'automation' && <WorkflowBuilderMockup />}
            {productShowcaseTab === 'campaigns' && <CampaignAnalyticsMockup />}
            {productShowcaseTab === 'analytics' && <AnalyticsOverviewMockup />}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          7. WHATSAPP AUTOMATION SECTION (Requirement #12)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-26 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Visual Workflow Canvas */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <WorkflowBuilderMockup />
            </div>

            {/* Right Column: Heading & Copy */}
            <div className="lg:col-span-5 space-y-6 text-left order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block">
                INTELLIGENT WORKFLOWS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Automate conversations. <br />
                <span className="text-emerald-600">Delight customers.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Automate repetitive conversations while keeping customer interactions organized and connected to your business workflow.
              </p>

              {/* Workflow Node Steps Requested:
                  Trigger -> Message -> Customer Response -> Qualification -> Team Assignment -> Follow-up */}
              <div className="space-y-3 pt-2">
                {[
                  'Trigger: Instant reaction to customer inquiries, ad clicks, or ERP alerts',
                  'Message: Meta-approved templates with dynamic media and buttons',
                  'Customer Response: Instant parsing of customer keyword selections',
                  'Qualification: Automated budget and timeline screening in under 60s',
                  'Team Assignment: Routing to the right department (Sales, Accounts, Dispatch)',
                  'Follow-up: Scheduled reminders and order status tracking until closure',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenContactModal}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm inline-flex items-center gap-2"
                >
                  <span>Build your first workflow</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          8. INTEGRATIONS SECTION (Requirement #13: Real Systems Only)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              CONNECTED ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Seamlessly Connected to <span className="text-emerald-600">Your Business Stack</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Connect customer communication with the systems your business already uses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
            {[
              {
                title: 'WhatsApp Business Cloud API',
                type: 'Direct Meta Infrastructure',
                desc: 'Official tier-1 cloud API integration ensuring zero number bans, high throughput, and instant green badge verification.',
                icon: MessageSquare,
                badge: 'Official API',
              },
              {
                title: 'Orizer ERP Native Sync',
                type: 'Industrial ERP & CRM',
                desc: 'Deep bi-directional sync with production PPC, dispatch LR notes, GST invoice generation, and customer ledger balances.',
                icon: Factory,
                badge: 'Native 2-Way',
              },
              {
                title: 'Customer Relationship Management',
                type: 'CRM & Pipeline Systems',
                desc: 'Bi-directional contact syncing, stage updates, agent notes, and activity timeline tracking for every commercial relationship.',
                icon: Filter,
                badge: 'Real-Time Sync',
              },
              {
                title: 'Developer REST APIs',
                type: 'Custom Enterprise Endpoints',
                desc: 'Send transactional alerts, trigger chatbots, and query contact records programmatically with secure API tokens.',
                icon: Cpu,
                badge: 'JSON REST',
              },
              {
                title: 'Event-Driven Webhooks',
                type: 'Real-Time Event Streams',
                desc: 'Listen for inbound messages, delivery receipts, read statuses, and button clicks with zero polling overhead.',
                icon: GitBranch,
                badge: '< 50ms Latency',
              },
              {
                title: 'E-Commerce & Retail Sync',
                type: 'Shopify / WooCommerce',
                desc: 'Automated abandoned cart recovery, cash-on-delivery (COD) verification, and live tracking updates via WhatsApp.',
                icon: ShoppingBag,
                badge: 'E-Commerce',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 hover:shadow-md transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shadow-xs">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <div className="text-[11px] font-mono text-emerald-700 font-semibold mb-2">{item.type}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          9. HOW IT WORKS (Requirement #18: 4-Step Connected Journey)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 border-b border-slate-100 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              SIMPLE ONBOARDING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How <span className="text-emerald-600">eBizChat Works</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Four straightforward steps to modernize your business communications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left relative">
            {[
              {
                num: '01',
                name: 'Connect',
                desc: 'Connect your WhatsApp business communication with official Meta Cloud API verification in minutes.',
              },
              {
                num: '02',
                name: 'Configure',
                desc: 'Set up your workflows, team departments, auto-assignment queues, and business ERP rules.',
              },
              {
                num: '03',
                name: 'Engage',
                desc: 'Manage customer conversations, inquiries, and support tickets collaboratively in the team inbox.',
              },
              {
                num: '04',
                name: 'Convert',
                desc: 'Turn qualified conversations into structured leads, confirmed orders, and repeat business opportunities.',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs relative flex flex-col justify-between group hover:border-emerald-500 transition-colors"
              >
                <div>
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-emerald-600 block mb-3">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          10. SOLUTIONS FOR EVERY BUSINESS (Requirement #14)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              SECTOR SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Solutions for <span className="text-emerald-600">Every Business</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Practical WhatsApp workflows and templates designed for specific industry challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {[
              {
                title: 'Manufacturing & Industrial',
                desc: 'Enquiry management, sales communication, order tracking, dispatch alerts, and vendor PO communications linked with ERP.',
                icon: Factory,
                link: '/solutions/services',
              },
              {
                title: 'Retail & E-commerce',
                desc: 'Product enquiries, order communication, customer follow-ups, and automated abandoned cart recovery.',
                icon: ShoppingBag,
                link: '/solutions/ecommerce',
              },
              {
                title: 'Healthcare & Clinics',
                desc: 'Doctor consultation reminders, patient appointment booking, diagnostic report delivery, and care follow-ups.',
                icon: Heart,
                link: '/solutions/services',
              },
              {
                title: 'Education & EdTech',
                desc: 'Admissions enquiries, student fee payment reminders, live exam alerts, and parent communication.',
                icon: GraduationCap,
                link: '/solutions/education',
              },
              {
                title: 'Real Estate & Builders',
                desc: 'Lead qualification, property enquiries, site visit bookings, brochure downloads, and broker coordination.',
                icon: Building2,
                link: '/solutions/real-estate',
              },
              {
                title: 'Professional Services & B2B',
                desc: 'Quotation follow-ups, client onboarding, NDA exchange, and automated executive meeting coordination.',
                icon: Briefcase,
                link: '/solutions/services',
              },
              {
                title: 'Travel & Hospitality',
                desc: 'Booking confirmations, itinerary updates, automated check-in details, and 24/7 guest concierge support.',
                icon: Plane,
                link: '/solutions/services',
              },
              {
                title: 'Custom Enterprise Workflows',
                desc: 'Have unique operational requirements? Our Orizer engineering team customizes WhatsApp workflows for you.',
                icon: Sparkles,
                link: '/solutions',
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="bg-slate-50/60 rounded-xl border border-slate-200/80 p-5 hover:border-emerald-500 hover:bg-white hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white group-hover:bg-emerald-50 text-slate-700 group-hover:text-emerald-600 flex items-center justify-center transition-colors mb-3.5 border border-slate-200">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-emerald-600 transition-colors">
                  <span>View solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Customer Support Inbox Screenshot Showcase */}
          <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                  COLLABORATIVE SUPPORT
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Multi-Agent Team Inbox for Lightning-Fast Resolution
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Support your customers with team-based collaboration on one official WhatsApp Business number. Resolve queries in seconds with AI canned replies, collision warnings, and private internal notes.
                </p>
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Real-time SLA tracking and first-response timers</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Department queues (Sales, Support, Accounts, Dispatch)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white">
                  <img
                    src="/images/support-agent-inbox.png"
                    alt="Multi-Agent Support Inbox"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          11. WHY EBIZCHAT? (Requirement #15: 6 Core Value Propositions)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              THE ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why <span className="text-emerald-600">eBizChat?</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Built specifically for business productivity, accountability, and measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
            {[
              {
                title: 'Centralized Conversations',
                desc: 'Unify all customer chats from ads, websites, and offline stores into one single official Meta-verified WhatsApp number.',
                icon: Inbox,
              },
              {
                title: 'Faster Responses',
                desc: 'Cut response time from hours to seconds with 24/7 intelligent automated replies and instant department routing.',
                icon: Clock,
              },
              {
                title: 'Structured Lead Management',
                desc: 'Stop losing deals in cluttered chat histories. Every inquiry is automatically captured, qualified, and tracked on Kanban boards.',
                icon: Filter,
              },
              {
                title: 'Reduced Repetitive Work',
                desc: 'Automate repetitive inquiries like catalog sharing, order tracking, appointment bookings, and payment receipts.',
                icon: Sliders,
              },
              {
                title: 'Better Team Coordination',
                desc: 'Eliminate duplicate replies with real-time collision alerts, private internal notes, and supervisor monitoring.',
                icon: Users,
              },
              {
                title: 'Connected Business Workflows',
                desc: 'Direct connection with Orizer ERP ensures instant dispatch alerts, LR receipts, invoice PDFs, and ledger updates.',
                icon: Factory,
              },
            ].map((prop, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all text-left space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <prop.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{prop.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          12. BUILT BY ORIZER (Requirement #16 & #17: Verified Information)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Orizer ERP Ecosystem Overview */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block">
                PARENT COMPANY & ECOSYSTEM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Built by <span className="text-emerald-600">Orizer</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Orizer provides enterprise business technology solutions including ERP, CRM, manufacturing automation, and integrated industrial workflows across India. While Orizer specializes in comprehensive operational enterprise management, eBizChat focuses specifically on WhatsApp-based customer communication, frontline lead workflows, and automated client engagement.
              </p>

              {/* Direct Synced ERP Modules */}
              <div className="pt-1">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Direct Synced Orizer ERP Modules:
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    'Sales Order Processing',
                    'Production PPC & Batching',
                    'Dispatch & E-Way Bill Alerts',
                    'GST Invoicing & Billing',
                    'Inventory & Material Stock',
                    'Customer Ledger & Receivables',
                  ].map((mod, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200/70 text-xs text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="font-medium truncate">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Company Office Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-bold text-slate-900">Orizer Infotech Pvt. Ltd.</div>
                  <div className="text-slate-500">
                    {ORIZER_INFO.contact.office.building}, {ORIZER_INFO.contact.office.city}, Gujarat {ORIZER_INFO.contact.office.pincode}
                  </div>
                </div>
                <a
                  href="https://orizer.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-bold whitespace-nowrap"
                >
                  <span>Explore Orizer</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Orizer ERP Enterprise Visual Showcase */}
            <div className="lg:col-span-6 space-y-4">
              {/* Primary Card: Real-time ERP BI Dashboard */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
                <div className="relative">
                  <img
                    src="/images/bi-dashboard.jpg"
                    alt="Orizer ERP Business Intelligence & Production Analytics Dashboard"
                    className="w-full h-56 sm:h-64 object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-mono font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live ERP BI Sync</span>
                  </div>
                </div>
                <div className="p-4 bg-slate-900 text-white text-left">
                  <div className="text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Orizer ERP Business Intelligence & Production Analytics</span>
                  </div>
                  <div className="text-[11px] text-emerald-200 mt-0.5">
                    Real-time data synchronization for stock alerts, dispatches, and dealer billing
                  </div>
                </div>
              </div>

              {/* Secondary Card: Shop-floor & Manufacturing Deployment */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white flex flex-col sm:flex-row items-center group">
                <div className="w-full sm:w-48 h-36 flex-shrink-0 overflow-hidden">
                  <img
                    src="/images/factory.jpg"
                    alt="Orizer Industrial Shop-Floor Execution"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-left flex-1">
                  <div className="text-[11px] font-mono text-emerald-600 font-bold uppercase tracking-wider">
                    Shop-Floor & Warehouse Reliability
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                    Built for Real Heavy Manufacturing Operations
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    Designed to withstand high-volume dispatches, automated lorry receipts, and uninterrupted dealer communication across Gujarat and India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          13. TRANSPARENT PRICING PACKAGES
      ─────────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 lg:py-24 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              TRANSPARENT PRICING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Simple, Tailored Plans for <span className="text-emerald-600">Every Business</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Predictable enterprise software subscriptions with direct Meta Cloud API wholesale rates and 100% data ownership.
            </p>
          </div>

          {/* 4 Plan Cards: Starter | Growth | Professional | Enterprise */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left items-stretch">
            {PRICING_DATA.plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-all ${
                  plan.popular
                    ? 'border-emerald-500 shadow-xl shadow-emerald-500/10 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      {plan.badge}
                    </span>
                    {plan.popular && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] font-mono">
                        POPULAR
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-500 min-h-[44px] leading-relaxed mb-6 font-normal">
                    {plan.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight">
                      {plan.pricingDisplay}
                    </div>
                    <div className="text-[11px] text-emerald-700 font-medium mt-1">
                      {plan.pricingSub}
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Included Capabilities:
                    </span>
                    {plan.features.slice(0, 6).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={onOpenContactModal}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all ${
                      plan.popular
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs shadow-xs transition-colors"
            >
              <span>View Full Feature Comparison Matrix</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          14. RESOURCES SECTION (Requirement #20: Zero Overflow Grid)
      ─────────────────────────────────────────────────────────── */}
      <section id="resources" className="py-20 lg:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              KNOWLEDGE BASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Resources & <span className="text-emerald-600">Business Guides</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Learn how modern enterprises streamline sales automation and customer support on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                title: 'Product Guides',
                desc: 'Step-by-step documentation on setting up Meta WhatsApp Cloud API, shared inbox, and canned replies.',
                link: '/resources',
                icon: BookOpen,
                tag: 'Documentation',
              },
              {
                title: 'Business Guides',
                desc: 'Executive playbooks on WhatsApp lead generation, sales pipeline discipline, and response time reduction.',
                link: '/resources',
                icon: FileText,
                tag: 'Playbooks',
              },
              {
                title: 'Frequently Asked Questions',
                desc: 'Comprehensive answers regarding pricing, onboarding, Meta verification, and enterprise security.',
                link: '/faq',
                icon: HelpCircle,
                tag: 'Knowledgebase',
              },
              {
                title: 'Blogs & Insights',
                desc: 'Expert articles analyzing customer messaging trends, e-way bill automation, and manufacturing ERP sync.',
                link: '/blog',
                icon: Sparkles,
                tag: 'Insights',
              },
            ].map((res, idx) => (
              <Link
                key={idx}
                to={res.link}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shadow-xs">
                      <res.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      {res.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                    {res.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{res.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-emerald-600">
                  <span>Explore resource</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          14.5 BLOG & INSIGHTS PREVIEW
      ─────────────────────────────────────────────────────────── */}
      <section id="blog-preview" className="py-20 lg:py-24 border-b border-slate-100 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
                EXPERT PLAYBOOKS & STRATEGY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Latest Insights & <span className="text-emerald-600">WhatsApp Playbooks</span>
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Actionable engineering guides, B2B lead generation benchmarks, and ERP automation architectures from the eBizChat team.
              </p>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs shadow-xs transition-all self-start md:self-auto group"
            >
              <span>Explore All Articles ({BLOG_POSTS.length})</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-card-hover hover:border-emerald-500 transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-mono font-semibold border border-emerald-200">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-xs flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug mb-3">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6 font-normal">
                    {post.excerpt}
                  </p>
                </div>

                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">
                    {typeof post.author === 'object' ? post.author.name : post.author}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          15. FAQ ACCORDION (Requirement #21: Exact 8 User-Requested Questions)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked <span className="text-emerald-600">Questions</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Everything you need to know about eBizChat platform, onboarding, and Orizer technology.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqList.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-600 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <div
                      className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : 'text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          15. CONTACT / MAP SECTION (Requirement #15: Mohid Tower, Vapi, Gujarat)
      ─────────────────────────────────────────────────────────── */}
      <section id="contact-map" className="py-20 lg:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Connect with Our <span className="text-emerald-600">Headquarters</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Visit our corporate offices in Vapi, Gujarat or connect with our WhatsApp automation specialists.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Responsive Map */}
            <div className="lg:col-span-7 min-h-[360px] sm:min-h-[420px] relative bg-slate-100">
              <iframe
                title="Orizer ERP Headquarters Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.736341270273!2d72.91583!3d20.39347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf31885f8ddb%3A0x8bb89255a4325a66!2sMohid%20Tower%2C%20Daman%20Rd%2C%20Chala%2C%20Vapi%2C%20Gujarat%20396191!5e0!3m2!1sen!2sin!4v1710800000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Office details & Fast Action */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6 text-left border-t lg:border-t-0 lg:border-l border-slate-200">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[11px] font-semibold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Orizer Infotech Pvt. Ltd.</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Orizer ERP Campus</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {ORIZER_INFO.contact.office.fullAddress}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Mon – Sat: 9:00 AM – 6:00 PM IST (Sunday closed)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <a href="tel:+919898236655" className="hover:text-emerald-600 font-mono font-semibold">
                      +91 98982 36655 (HelpDesk)
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <a href="https://wa.me/919998391947" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 font-mono font-semibold">
                      +91 99983 91947 (WhatsApp Direct)
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenDemoModal}
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors text-center"
                >
                  Book Live Demo
                </button>
                <button
                  onClick={onOpenContactModal}
                  className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors text-center"
                >
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          16. FINAL CTA BANNER (Requirement #22)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-8 sm:p-14 lg:p-16 text-white text-left relative overflow-hidden shadow-2xl shadow-emerald-600/20">
            {/* Background decorative circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 -mb-20 w-60 h-60 rounded-full bg-black/10 blur-xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-white/20 text-white font-mono text-xs font-semibold uppercase tracking-wider backdrop-blur-sm inline-block">
                Start Growing Today
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Ready to Turn WhatsApp Conversations Into Business Growth?
              </h2>

              <p className="text-base sm:text-lg text-emerald-50 leading-relaxed max-w-2xl font-normal">
                Build better customer conversations, automate repetitive work and create a more organized lead-generation workflow with eBizChat.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenContactModal}
                  className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-emerald-700 font-extrabold text-sm shadow-lg transition-all active:scale-[0.98]"
                >
                  Get Started
                </button>
                <button
                  onClick={onOpenDemoModal}
                  className="px-8 py-3.5 rounded-xl bg-emerald-800/40 hover:bg-emerald-800/60 text-white font-bold text-sm border border-white/30 backdrop-blur-sm transition-all active:scale-[0.98]"
                >
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
