import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
} from 'lucide-react';
import {
  HeroVisualMockup,
  AnalyticsOverviewMockup,
  WorkflowBuilderMockup,
  LeadPipelineMockup,
} from '../components/ui/DashboardMockups';
import { ORIZER_INFO } from '../data/orizerData';

export default function HomePage({ onOpenDemoModal, onOpenContactModal }) {
  const [activeSolutionTab, setActiveSolutionTab] = useState('sales');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [billingCycle, setBillingCycle] = useState('monthly');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white font-sans">
      {/* ───────────────────────────────────────────────────────────
          1. HERO SECTION (Clean White, Eyebrow, 2-3 Line Headline, CTAs, Dual Mockup)
      ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-6 text-left space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/80 text-slate-700 text-xs font-medium">
                <span>WhatsApp Business Platform Powered by AI</span>
              </div>

              {/* Strong 2–3 line Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                The complete <br />
                WhatsApp solution <br />
                for <span className="text-emerald-600">modern businesses</span>
              </h1>

              {/* Short Description */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                Engage, automate and grow with WhatsApp marketing, shared inbox, chatbots and sales automation — all in one powerful platform.
              </p>

              {/* 2 CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={onOpenContactModal}
                  className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all active:scale-[0.98]"
                >
                  Start Free trial
                </button>
                <button
                  onClick={onOpenDemoModal}
                  className="px-6 py-3 rounded-lg text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-all active:scale-[0.98]"
                >
                  Book a demo
                </button>
              </div>

              {/* 3 Proof Guarantees */}
              <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" strokeWidth={2.5} />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" strokeWidth={2.5} />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" strokeWidth={2.5} />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Right Column: Layered Desktop Web App + Overlapping iPhone Mockup */}
            <div className="lg:col-span-6 w-full pt-4 lg:pt-0">
              <HeroVisualMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          TRUSTED CUSTOMER LOGO ROW (Static clean row matching reference)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-12 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-8">
            Trusted by 10,000+ businesses worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:gap-20 opacity-70">
            <span className="text-xl sm:text-2xl font-serif font-black tracking-widest text-slate-800 hover:opacity-100 transition-opacity">
              L'ORÉAL
            </span>
            <span className="text-lg sm:text-xl font-sans font-bold tracking-tight text-slate-800 hover:opacity-100 transition-opacity">
              Chargebee
            </span>
            <span className="text-2xl sm:text-3xl font-sans font-black tracking-tighter text-slate-800 hover:opacity-100 transition-opacity">
              OYO
            </span>
            <span className="text-lg sm:text-xl font-sans font-black tracking-wider uppercase text-slate-800 hover:opacity-100 transition-opacity">
              DECATHLON
            </span>
            <span className="text-lg sm:text-xl font-sans font-semibold tracking-tight text-slate-800 hover:opacity-100 transition-opacity">
              freshworks
            </span>
            <span className="text-lg sm:text-xl font-mono font-black tracking-widest uppercase text-slate-800 hover:opacity-100 transition-opacity">
              CRED
            </span>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. LEAD GENERATION SECTION (Capture, Qualify & Kanban Pipeline)
      ─────────────────────────────────────────────────────────── */}
      <section id="lead-generation" className="py-20 lg:py-28 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider font-mono">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                <span>Multi-Channel Lead Generation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight">
                Capture, Qualify & Convert Leads on <span className="text-emerald-600">WhatsApp in Real-Time</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Eliminate friction and lead leakage. eBizChat automatically ingests customer inquiries from Click-to-WhatsApp ads, website QR codes, and offline campaigns, scores them instantly with AI, and routes them to your sales agents with complete ERP context.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                      0s
                    </span>
                    <h4 className="text-xs font-bold text-slate-900">Instant Lead Capture</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Capture phone numbers & UTM campaign source directly with zero form friction.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                      AI
                    </span>
                    <h4 className="text-xs font-bold text-slate-900">Smart Qualification</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Qualify budget, requirement, and urgency in 3 automated WhatsApp prompts.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs">
                      📊
                    </span>
                    <h4 className="text-xs font-bold text-slate-900">Visual Kanban CRM</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Track leads across Inbound, Qualified, Quote Sent, and Won deal stages.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                      🔄
                    </span>
                    <h4 className="text-xs font-bold text-slate-900">Orizer ERP Sync</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Direct sync with manufacturing PPC, quotation generation, and contact records.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenContactModal}
                  className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs transition-colors"
                >
                  Start Capturing Leads
                </button>
                <Link
                  to="/leadgen"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-colors"
                >
                  <span>Explore Lead Generation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </div>
            </div>

            {/* Right: SaaS Kanban Board Mockup */}
            <div className="lg:col-span-6 w-full">
              <LeadPipelineMockup />
            </div>
          </div>

          {/* Sub-Showcase: Automated Appointment Scheduling via WhatsApp */}
          <div className="mt-16 pt-16 border-t border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Automated Appointment Scheduling</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Turn conversations into confirmed appointments <span className="text-emerald-600">in under 60 seconds</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Allow prospects and clients to book demos, factory site visits, consultations, or service appointments directly inside WhatsApp. eBizChat checks real-time slot availability, sends automated calendar confirmations, and triggers timely reminders to eliminate no-shows.
                </p>
                <div className="space-y-2.5 pt-1">
                  {[
                    'Automated 3-tap booking flow directly in WhatsApp chat',
                    'Bi-directional sync with Google Calendar, Outlook & Orizer ERP',
                    'Automated 24-hour and 1-hour pre-appointment reminders',
                    'Instant reschedule & cancellation options with zero human effort',
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <button
                    onClick={onOpenDemoModal}
                    className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs inline-flex items-center gap-2"
                  >
                    <span>Try Booking Flow Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white max-w-md w-full group">
                  <img
                    src="/images/appointment-scheduling.png"
                    alt="eBizChat Automated Appointment Scheduling via WhatsApp"
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent p-4 text-white text-left">
                    <div className="text-xs font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live WhatsApp Appointment Booking Bot</span>
                    </div>
                    <div className="text-[11px] text-emerald-200">99.4% booking completion rate with automated slot selection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. FEATURES SECTION (Centered Heading + 4 Clean Cards in 1 Row)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Everything you need to build <br />
              <span className="text-emerald-600">stronger customer relationships</span>
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Empower your team with a complete suite of WhatsApp engagement tools designed to drive conversions and customer delight.
            </p>
          </div>

          {/* 4 Clean Feature Cards in 1 Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: WhatsApp Marketing */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-7 text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                WhatsApp Marketing
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Create, personalize and send high-converting campaigns with rich media and templates.
              </p>
            </div>

            {/* Card 2: Shared Team Inbox */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-7 text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <Inbox className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Shared Team Inbox
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Manage all chats in one place. Assign, collaborate and resolve faster.
              </p>
            </div>

            {/* Card 3: No-code Chatbots */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-7 text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                No-code Chatbots
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Build smart workflows and chatbots in minutes with our drag-and-drop builder.
              </p>
            </div>

            {/* Card 4: Sales Automation */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-7 text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Sales Automation
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Automate follow-ups, qualify leads and close more deals on autopilot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. PRODUCT SHOWCASE 1 (Left Content, Right Dashboard Screenshot)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono">
                THE INBOX & PLATFORM
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight">
                Designed for teams. <br />
                Built for growth.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                From startups to enterprises, eBizChat helps you deliver exceptional customer experiences on WhatsApp.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                  <span>Official WhatsApp Business API</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                  <span>Enterprise-grade security & scalability</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                  <span>Scalable for growing teams</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                  <span>Deep integrations with your favorite tools & Orizer ERP</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-colors"
                >
                  <span>Explore all features</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </div>
            </div>

            {/* Right Column: Realistic Analytics Dashboard Mockup */}
            <div className="lg:col-span-7">
              <AnalyticsOverviewMockup />
            </div>
          </div>

          {/* Sub-Showcase: Enterprise Multi-Agent Boardroom Collaboration */}
          <div className="mt-16 pt-16 border-t border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 flex justify-center order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white w-full group">
                  <img
                    src="/images/multi-agent-collaboration.png"
                    alt="eBizChat Multi-Agent Collaboration & Enterprise Teamwork"
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent p-4 text-white text-left">
                    <div className="text-xs font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Enterprise Shared Team Inbox & Wall Monitor Display</span>
                    </div>
                    <div className="text-[11px] text-emerald-200">Unlimited simultaneous agents under 1 official Meta WhatsApp Business number</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 text-left space-y-4 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Teamwork & Collaboration</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Multi-agent collaboration on <span className="text-emerald-600">one official WhatsApp number</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Break departmental silos. Connect your sales reps, technical support engineers, and billing accounts teams on a single verified WhatsApp Business API number. Eliminate customer overlap with collision alerts, auto-assignment queues, and private internal notes.
                </p>
                <div className="space-y-2.5 pt-1">
                  {[
                    'Round-robin and skill-based conversation auto-assignment',
                    'Real-time collision detection so two agents never double-reply',
                    'Private internal comments visible only to team members',
                    'Departmental inbox separation (Sales, Support, Accounts, Dispatch)',
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    to="/features/team-inbox"
                    className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs inline-flex items-center gap-2"
                  >
                    <span>Explore Shared Team Inbox</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. AUTOMATION SECTION (Reversed Layout: Left Visual Workflow, Right Content)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Visual Workflow Interface */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <WorkflowBuilderMockup />
            </div>

            {/* Right Column: Heading & Content */}
            <div className="lg:col-span-5 space-y-6 text-left order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono">
                AI-POWERED AUTOMATION
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight">
                Automate conversations. <br />
                <span className="text-emerald-600">Delight customers.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Use AI to understand intent, route conversations, and provide instant answers 24/7.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                  <span>AI-powered auto-responses</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                  <span>Smart routing & lead qualification</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                  <span>Multi-flow automation</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                  <span>Multi-language support</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenContactModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-colors"
                >
                  <span>Build your first workflow</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Sub-Showcase: Rich Media Product Carousels & Quick Replies */}
          <div className="mt-16 pt-16 border-t border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
                  <Megaphone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Rich Media & Catalogs</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Interactive product carousels, video demos & <span className="text-emerald-600">quick-reply action buttons</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Move beyond plain text messages. Deliver immersive shopping experiences directly inside WhatsApp with multi-card carousels, product collections, and interactive quick-reply pills that drive 45%+ reply rates.
                </p>
                <div className="space-y-2.5 pt-1">
                  {[
                    'Dynamic product carousels with price tags and checkout links',
                    'High-definition video teasers & interactive PDF catalogs',
                    'One-tap Quick Reply buttons for frictionless customer decisions',
                    '100% Meta Cloud API verified templates with zero ban risk',
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    to="/features/whatsapp-marketing"
                    className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs inline-flex items-center gap-2"
                  >
                    <span>Explore Marketing Templates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white max-w-md w-full group">
                  <img
                    src="/images/rich-media-engagement.png"
                    alt="eBizChat Rich Media & Personalized WhatsApp Engagement"
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent p-4 text-white text-left">
                    <div className="text-xs font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Interactive WhatsApp Product Carousel Flow</span>
                    </div>
                    <div className="text-[11px] text-emerald-200">Personalized product cards, demo video, and quick reply action buttons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. HOW EBIZCHAT WORKS (4 Simple Steps Progressive Flow)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              From setup to scale in <span className="text-emerald-600">4 simple steps</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Deploy enterprise WhatsApp messaging without complex coding or months of integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Connect Meta Cloud API",
                desc: "Link your official WhatsApp Business number via Meta's secure Cloud API in under 5 minutes with zero server maintenance.",
                icon: Zap,
              },
              {
                step: "02",
                title: "Sync CRM & ERP Contacts",
                desc: "Seamlessly import your customer lists, vendor contacts, and lead databases directly from Orizer ERP, Excel, or custom CRM.",
                icon: Database,
              },
              {
                step: "03",
                title: "Design Visual Workflows",
                desc: "Drag-and-drop triggers, interactive message templates, quick reply buttons, and intelligent round-robin agent routing rules.",
                icon: GitBranch,
              },
              {
                step: "04",
                title: "Engage, Convert & Scale",
                desc: "Broadcast targeted campaigns, route live chats to your sales & support agents, and automate follow-ups 24/7.",
                icon: TrendingUp,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-emerald-300 transition-colors font-mono">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <span>Step {item.step}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          7. SOLUTIONS BY TEAM (Interactive Department Tabs)
      ─────────────────────────────────────────────────────────── */}
      <section id="solutions" className="py-20 lg:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              SOLUTIONS BY TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered for every <span className="text-emerald-600">revenue & operations team</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              From frontline lead capture to factory floor dispatch, see how eBizChat empowers every department.
            </p>
          </div>

          {/* Tab Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {[
              { id: 'sales', label: 'Sales & Lead Gen', icon: TrendingUp },
              { id: 'marketing', label: 'Marketing & Broadcasts', icon: Send },
              { id: 'support', label: 'Customer Support', icon: Headphones },
              { id: 'operations', label: 'Operations & ERP Sync', icon: Factory },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSolutionTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSolutionTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Showcase Panel */}
          <div className="bg-slate-50/70 rounded-2xl border border-slate-200/80 p-6 sm:p-10 lg:p-12">
            {activeSolutionTab === 'sales' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-5 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    <span>High-Velocity Sales Engine</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Accelerate your sales pipeline & close deals 3x faster
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Capture incoming enquiries from Meta Ads, website QR codes, and landing pages instantly. Auto-qualify prospects with interactive conversational bots and route warm leads directly to your top closers.
                  </p>
                  <div className="space-y-3 pt-2">
                    {[
                      'Instant auto-response within 2 seconds of enquiry',
                      'Automated lead scoring and round-robin sales agent assignment',
                      'Send interactive product catalogs and quotation PDFs in chat',
                      'Payment collection links with instant webhook confirmation',
                    ].map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={onOpenDemoModal}
                      className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm inline-flex items-center gap-2"
                    >
                      <span>Book Sales Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Sales Tab Visual Mockup */}
                <div className="lg:col-span-6">
                  <div className="bg-white rounded-xl border border-slate-200 shadow-md p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                          SP
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">Siddharth Patel</div>
                          <div className="text-[10px] text-slate-500">Lead Score: 94/100 • Ahmedabad Industrial</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                        Hot Lead (RFQ #4920)
                      </span>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-xs">
                      <div className="bg-emerald-600 text-white rounded-lg rounded-tr-none p-3 max-w-[85%] ml-auto shadow-sm">
                        <div className="font-semibold text-[11px] mb-1">eBizChat Sales Bot:</div>
                        Hello Mr. Patel! Thanks for requesting a quote for 500 units of Industrial Valves (Model IV-200). Here is your quotation:
                        <div className="mt-2 p-2 bg-white/10 rounded flex items-center justify-between text-[10px]">
                          <span>📄 Quotation_IV200.pdf (420 KB)</span>
                          <span className="underline cursor-pointer">Download</span>
                        </div>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-lg rounded-tl-none p-3 max-w-[85%] shadow-sm text-slate-800">
                        <div className="font-semibold text-[11px] text-slate-900 mb-1">Siddharth Patel:</div>
                        Received the quote! Can we proceed with 50% advance via NEFT or online payment link?
                      </div>
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 flex items-center justify-between">
                        <div className="text-[11px] font-medium text-emerald-900">
                          ⚡ Auto-Assigned to Senior Rep: <b>Rahul Shah (Desk 02)</b>
                        </div>
                        <span className="text-[10px] text-emerald-700 font-mono font-bold">10:42 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSolutionTab === 'marketing' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-5 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-100 text-teal-800 text-xs font-semibold">
                    <span>98% Open Rate Broadcast Engine</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    High-engagement marketing broadcasts with zero spam risk
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Move beyond low-converting emails and SMS. Send hyper-personalized WhatsApp campaigns, seasonal promotions, and re-engagement offers officially approved by Meta.
                  </p>
                  <div className="space-y-3 pt-2">
                    {[
                      'Targeted audience segmentation based on tags and ERP history',
                      'Rich media templates with CTA buttons, carousels, and video',
                      'Granular campaign delivery analytics (sent, read, clicked, replied)',
                      'Automated abandoned cart & renewal follow-ups with promo codes',
                    ].map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={onOpenDemoModal}
                      className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm inline-flex items-center gap-2"
                    >
                      <span>Explore Marketing Suite</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Marketing Tab Visual Mockup */}
                <div className="lg:col-span-6">
                  <div className="bg-white rounded-xl border border-slate-200 shadow-md p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <div className="text-xs font-bold text-slate-900">Diwali Festive B2B Promo 2025</div>
                        <div className="text-[10px] text-slate-500">Target: 4,850 Verified Enterprise Buyers</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        Delivered
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-100">
                        <div className="text-lg font-black text-slate-900 font-mono">98.4%</div>
                        <div className="text-[10px] text-slate-500 font-medium">Read Rate</div>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-100">
                        <div className="text-lg font-black text-emerald-600 font-mono">41.8%</div>
                        <div className="text-[10px] text-slate-500 font-medium">Click-Through</div>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-100">
                        <div className="text-lg font-black text-slate-900 font-mono">₹4.2L</div>
                        <div className="text-[10px] text-slate-500 font-medium">Attributed Sales</div>
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center justify-between text-xs text-emerald-900">
                      <span>✓ 100% Meta Cloud API Compliant • Zero Number Ban Risk</span>
                      <span className="text-[10px] font-bold text-emerald-700">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSolutionTab === 'support' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-5 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    <span>Multi-Agent Shared Inbox</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Collaborative team inbox for lightning-fast resolution
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Empower your support team with a unified inbox for multiple agents operating under one official WhatsApp Business number. Resolve queries in seconds with AI canned replies and internal notes.
                  </p>
                  <div className="space-y-3 pt-2">
                    {[
                      'Multi-agent assignment with department-based queues & tags',
                      'Quick canned responses and private internal team notes',
                      'AI co-pilot that drafts suggested answers based on your FAQs',
                      'Real-time SLA monitoring, response timers, and CSAT ratings',
                    ].map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={onOpenDemoModal}
                      className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm inline-flex items-center gap-2"
                    >
                      <span>Explore Support Inbox</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Support Tab Visual Showcase with user screenshot */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white max-w-lg w-full group">
                    <img
                      src="/images/support-agent-inbox.png"
                      alt="eBizChat Multi-Agent Support Inbox & Ticket Resolution"
                      className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent p-4 text-white text-left">
                      <div className="text-xs font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Enterprise Support Inbox</span>
                      </div>
                      <div className="text-[11px] text-emerald-200">Real-time agent assignment, response SLAs & multi-agent resolution</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSolutionTab === 'operations' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-5 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-semibold">
                    <span>Orizer ERP 2-Way Sync</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Bridging WhatsApp directly with shop floor operations
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Automate critical operational notifications directly from your Orizer ERP database. Send automatic dispatch alerts, e-way bills, quality test certificates, and overdue payment notices without manual intervention.
                  </p>
                  <div className="space-y-3 pt-2">
                    {[
                      'Automated sales order confirmation & live tracking updates',
                      'Real-time raw material stock queries & vendor PO approvals',
                      'Payment overdue reminders with attached GST invoice PDFs',
                      'Production batch completion alerts sent directly to clients',
                    ].map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={onOpenDemoModal}
                      className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm inline-flex items-center gap-2"
                    >
                      <span>See ERP Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Operations Tab Visual Mockup */}
                <div className="lg:col-span-6">
                  <div className="bg-white rounded-xl border border-slate-200 shadow-md p-5 space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <div className="text-xs font-bold text-slate-900">Orizer ERP Automated Dispatch Bot</div>
                        <div className="text-[10px] text-slate-500">Trigger: Vehicle Dispatched from Vapi Plant</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        Auto-Fired
                      </span>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-xs">
                      <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-1.5 shadow-sm">
                        <div className="text-emerald-700 font-bold text-xs flex items-center gap-1.5">
                          <span>📦 Shipment Dispatched • LR #984210</span>
                        </div>
                        <p className="text-slate-700 text-[11px]">
                          Dear <b>Mehta Enterprises</b>, your order <b>#OE-2025-104</b> has been dispatched via V-Trans (Vehicle: GJ-15-XX-1234).
                        </p>
                        <div className="pt-1 flex flex-wrap gap-2 text-[10px]">
                          <span className="px-2 py-1 bg-slate-100 rounded text-slate-700 font-mono font-medium">
                            E-Way Bill: 241098234123
                          </span>
                          <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded font-semibold">
                            Est. Delivery: Tomorrow, 2:00 PM
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-slate-600 text-[11px] flex items-center justify-between">
                      <span>✓ ERP Stock Deducted & Invoice Emailed</span>
                      <span className="text-emerald-600 font-bold">Synced with Orizer ERP</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          8. SOLUTIONS FOR EVERY INDUSTRY (7 Rich Cards)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              INDUSTRIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pre-built solutions for <span className="text-emerald-600">every industry</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Tailored WhatsApp workflows, compliance templates, and integrations for your sector.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {[
              {
                title: "Manufacturing & Industrial",
                desc: "Automate order tracking, dispatch alerts, stock inquiries, and vendor RFQ communications linked with ERP.",
                icon: Factory,
                link: "/solutions/services",
              },
              {
                title: "E-Commerce & Retail",
                desc: "Recover abandoned carts, send automated shipment notifications, and take orders via interactive WhatsApp catalog.",
                icon: ShoppingBag,
                link: "/solutions/ecommerce",
              },
              {
                title: "Healthcare & Clinics",
                desc: "Appointment bookings, doctor consult reminders, diagnostic test report delivery, and post-visit follow-ups.",
                icon: Heart,
                link: "/solutions/services",
              },
              {
                title: "Education & EdTech",
                desc: "Instant admissions enquiries, fee payment reminders, live webinar alerts, and parent-teacher communications.",
                icon: GraduationCap,
                link: "/solutions/education",
              },
              {
                title: "Real Estate & Builders",
                desc: "Site visit scheduling, brochure downloads, lead qualification, and automated broker partner coordination.",
                icon: Building2,
                link: "/solutions/real-estate",
              },
              {
                title: "Travel & Hospitality",
                desc: "Booking confirmations, itinerary updates, automated check-in details, and 24/7 guest concierge support.",
                icon: Plane,
                link: "/solutions/services",
              },
              {
                title: "Finance & B2B Services",
                desc: "EMI payment reminders, KYC document collection, loan application updates, and insurance policy renewals.",
                icon: Landmark,
                link: "/solutions/services",
              },
              {
                title: "Custom Enterprise Workflows",
                desc: "Have unique operational requirements? Our Orizer engineering team customizes WhatsApp workflows for you.",
                icon: Sparkles,
                link: "/solutions",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="bg-white rounded-xl border border-slate-200/80 p-5 hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-50 group-hover:bg-emerald-50 text-slate-700 group-hover:text-emerald-600 flex items-center justify-center transition-colors mb-3.5">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-emerald-600 transition-colors">
                  <span>Explore workflows</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          9. POWERED BY ORIZER ERP (Enterprise Deep Integration & Stats)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Orizer ERP Overview */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block">
                BACKED BY ORIZER ERP
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                The only WhatsApp platform with <span className="text-emerald-600">native industrial ERP sync</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {ORIZER_INFO.description}
              </p>

              {/* Orizer ERP Modules Grid */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Direct Synced ERP Modules:
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {ORIZER_INFO.erpModules.slice(0, 6).map((mod, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200/70 text-xs text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="font-medium truncate">{mod.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Company Badge */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-bold text-slate-900">Orizer Infotech Pvt. Ltd.</div>
                  <div className="text-slate-500">{ORIZER_INFO.contact.office.building}, {ORIZER_INFO.contact.office.city}, Gujarat</div>
                </div>
                <a
                  href="https://orizer.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-bold whitespace-nowrap"
                >
                  <span>Visit Orizer Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Verified Stats Display */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {ORIZER_INFO.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 transition-all text-left group"
                  >
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono group-hover:text-emerald-600 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold text-slate-800 mt-1">
                      {stat.label}
                    </div>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-left flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-emerald-900">Need ERP Integration Consultation?</div>
                  <div className="text-[11px] text-emerald-700">Speak directly with our Vapi engineering team</div>
                </div>
                <a
                  href={`tel:${ORIZER_INFO.contact.helpdeskPhones[0].raw}`}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors whitespace-nowrap"
                >
                  {ORIZER_INFO.contact.helpdeskPhones[0].number}
                </a>
              </div>
            </div>
          </div>

          {/* Sub-Showcase: Automated Operational & Transactional Alerts */}
          <div className="mt-16 pt-16 border-t border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white max-w-md w-full group">
                  <img
                    src="/images/transactional-notifications.png"
                    alt="eBizChat Automated Transactional WhatsApp Notifications & ERP Dispatch Alerts"
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent p-4 text-white text-left">
                    <div className="text-xs font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Orizer ERP Real-Time Dispatch Engine</span>
                    </div>
                    <div className="text-[11px] text-emerald-200">Automated e-way bills, delivery updates & GST invoice attachments</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 text-left space-y-4 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
                  <Truck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Real-Time Dispatch & Operational Alerts</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Zero-delay transactional notifications <span className="text-emerald-600">straight from your ERP</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Trigger instant WhatsApp alerts the exact second an order status changes in Orizer ERP. From warehouse truck loading and gate passes to transit milestone tracking and automated payment receipts — keep your buyers, dealers, and suppliers updated automatically.
                </p>
                <div className="space-y-2.5 pt-1">
                  {[
                    'Instant dispatch alerts with live lorry receipt (LR) and tracking numbers',
                    'Automated GST invoice PDF delivery via verified Meta WhatsApp API',
                    'Bi-directional ledger balance checks and payment confirmation receipts',
                    'Proactive delay warnings and expected time of arrival (ETA) notices',
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <button
                    onClick={onOpenDemoModal}
                    className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs inline-flex items-center gap-2"
                  >
                    <span>Request Live ERP Integration Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          10. TRANSPARENT PRICING PLANS
      ─────────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 lg:py-24 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              TRANSPARENT PRICING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Simple, predictable plans for <span className="text-emerald-600">growing businesses</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              No hidden setup fees. No vendor lock-in. Scale as your customer conversations expand.
            </p>
          </div>

          {/* Billing Switcher Toggle */}
          <div className="flex items-center justify-center gap-3 mb-14">
            <span className={`text-xs font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-12 h-6 rounded-full bg-slate-200 p-0.5 transition-colors relative"
            >
              <div
                className={`w-5 h-5 rounded-full bg-emerald-600 transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-semibold flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
              <span>Yearly</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                Save 20%
              </span>
            </span>
          </div>

          {/* 3 Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left max-w-6xl mx-auto items-stretch">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="text-sm font-bold text-slate-900 mb-1">Starter</div>
                <p className="text-xs text-slate-500 mb-4">
                  For small businesses launching on official WhatsApp Business API.
                </p>
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">
                    {billingCycle === 'yearly' ? '₹1,599' : '₹1,999'}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ month</span>
                </div>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900 mb-2">Included Features:</div>
                  {[
                    '1,000 Free Service Conversations / mo',
                    '1 Official WhatsApp Business Number',
                    '3 Team Agent Logins & Shared Inbox',
                    'Basic Visual Flow Builder',
                    'Contact Tagging & Segmentation',
                    'Standard Meta Cloud API Access',
                    'Standard Email & Chat Support',
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenContactModal}
                  className="w-full py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-900 font-bold text-xs transition-colors"
                >
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* Growth Plan (Popular) */}
            <div className="bg-white rounded-2xl border-2 border-emerald-500 p-8 shadow-lg relative flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                MOST POPULAR
              </div>

              <div>
                <div className="text-sm font-bold text-slate-900 mb-1">Growth</div>
                <p className="text-xs text-slate-500 mb-4">
                  For scaling teams automating sales, broadcasts, and support queues.
                </p>
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">
                    {billingCycle === 'yearly' ? '₹3,839' : '₹4,799'}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ month</span>
                </div>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900 mb-2">Everything in Starter, plus:</div>
                  {[
                    '5,000 Free Service Conversations / mo',
                    '2 Official WhatsApp Numbers',
                    '10 Team Agents + Advanced Permissions',
                    'Multi-Branch Automation Workflow Builder',
                    'Full Lead Pipeline Kanban Board',
                    'Shopify / WooCommerce Webhook Sync',
                    'Interactive Catalogs & CTA Buttons',
                    'Priority WhatsApp HelpDesk Support',
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="font-medium text-slate-900">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenContactModal}
                  className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  Start 14-Day Free Trial
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="text-sm font-bold text-slate-900 mb-1">Enterprise</div>
                <p className="text-xs text-slate-500 mb-4">
                  For large manufacturers and enterprises requiring native ERP sync.
                </p>
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">
                    Custom
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ tailored SLA</span>
                </div>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900 mb-2">Enterprise Capabilities:</div>
                  {[
                    'Unlimited Team Agents & Custom Numbers',
                    'Direct Native Connector for Orizer ERP / SAP',
                    'Custom AI Chatbot Trained on Company Data',
                    'Dedicated Account Manager & Technical SLA',
                    'Green Checkmark Badge Verification Filing',
                    'Custom API Webhooks & ERP Database Sync',
                    'Enterprise On-Premise / Private Cloud Setup',
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-900 font-bold text-xs transition-colors"
                >
                  Talk to Enterprise Sales
                </button>
              </div>
            </div>
          </div>

          {/* Meta Conversation Fee Transparency Callout */}
          <div className="max-w-3xl mx-auto mt-10 p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600 text-left flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">Transparent Meta Pricing: </span>
              Meta Cloud API conversation fees (Marketing, Utility, Authentication, and Service) are passed through at Meta's official base rates with zero markups. The first 1,000 service conversations every month are 100% free under Meta's policy.
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          11. RESOURCES & KNOWLEDGE PLAYBOOKS
      ─────────────────────────────────────────────────────────── */}
      <section id="resources" className="py-20 lg:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              RESOURCES & GUIDES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything you need to master <span className="text-emerald-600">WhatsApp automation</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Step-by-step guides, conversion playbooks, and technical whitepapers crafted by Orizer engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: "Meta Verification Guide",
                title: "Official WhatsApp Cloud API & Green Tick Badge Verification Checklist",
                desc: "Complete walkthrough on Meta Business Manager verification, display name approvals, and applying for the prestigious official green tick.",
                readTime: "6 min read",
                icon: ShieldCheck,
              },
              {
                tag: "Marketing Playbook",
                title: "25+ High-Converting WhatsApp Broadcast Templates for Indian Businesses",
                desc: "Tested copy templates for Diwali sales, festive flash offers, abandoned cart reminders, and payment follow-ups with high CTR.",
                readTime: "8 min read",
                icon: Megaphone,
              },
              {
                tag: "ERP Whitepaper",
                title: "Connecting WhatsApp CRM with Manufacturing ERP: The 2025 Blueprint",
                desc: "How leading Indian manufacturers automate dispatch notifications, inventory stock queries, and vendor purchase approvals via WhatsApp.",
                readTime: "10 min read",
                icon: FileText,
              },
            ].map((res, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 p-6 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-[11px] font-bold">
                      {res.tag}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {res.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2.5 leading-snug">
                    {res.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {res.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-600 group-hover:underline inline-flex items-center gap-1">
                    <span>Read Free Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          12. FREQUENTLY ASKED QUESTIONS (Accordion)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Got questions? We have <span className="text-emerald-600">answers</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Everything you need to know about eBizChat, Meta Cloud API, and Orizer ERP integration.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How is eBizChat different from the standard WhatsApp Business app?",
                a: "The regular WhatsApp Business mobile app is limited to 1 phone or 4 linked devices, lacks multi-agent routing, has a broadcast limit of only 256 contacts who must save your number, and cannot connect to ERP databases. eBizChat operates on the official Meta Cloud API, enabling unlimited simultaneous agent logins, broadcast messaging to tens of thousands of opted-in customers, automated visual bot workflows, and direct two-way integration with Orizer ERP and custom databases.",
              },
              {
                q: "Can I use my existing business phone number with eBizChat?",
                a: "Yes! You can use your existing landline or mobile phone number, provided it is not actively registered on a personal WhatsApp or WhatsApp Business mobile app (our onboarding team can guide you through a quick 5-minute migration). Alternatively, you can provision a fresh virtual mobile or toll-free number for your official business profile.",
              },
              {
                q: "What is the Meta Green Tick badge and will eBizChat help us get verified?",
                a: "The green tick badge beside your brand name signifies an official, verified business account recognized by Meta. While Meta reserves final approval based on brand notability and regulatory compliance, our dedicated team at Orizer assists you with Meta Business Manager verification, documentation submission, and application filing at no additional charge.",
              },
              {
                q: "How does eBizChat integrate with Orizer ERP and other CRM software?",
                a: "eBizChat comes with native pre-built connectors for Orizer ERP (PPC, Inventory, Order Processing, Financial Accounting), as well as open REST APIs and webhooks for platforms like Shopify, WooCommerce, Zoho, HubSpot, Tally, and custom SQL databases. You can trigger automated WhatsApp messages on ERP events and push captured lead data back into your CRM automatically.",
              },
              {
                q: "How does WhatsApp / Meta conversation pricing work?",
                a: "WhatsApp charges for conversations based on categories defined by Meta: Marketing, Utility, Authentication, and Service. Utility and customer-initiated service conversations are charged at Meta's minimal official base rates with zero platform markups from eBizChat. Plus, Meta provides the first 1,000 customer-initiated service conversations every month 100% free.",
              },
              {
                q: "How long does onboarding and deployment take?",
                a: "Most businesses go live within 24 hours. Our dedicated onboarding specialists at Orizer (HelpDesk: +91 98982 36655) assist you step-by-step with Meta Business verification, number activation, workflow configuration, and team training to ensure an effortless launch.",
              },
            ].map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200/80 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-600">
            <span>Still have questions about WhatsApp Business API?</span>
            <a
              href={`tel:${ORIZER_INFO.contact.helpdeskPhones[0].raw}`}
              className="text-emerald-600 hover:text-emerald-700 font-bold inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Orizer HelpDesk: {ORIZER_INFO.contact.helpdeskPhones[0].number}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          13. FINAL CTA BANNER
      ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 sm:p-12 lg:p-14 text-white shadow-lg">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-100 text-xs font-semibold mb-3">
                  <span>Start in under 24 hours</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Ready to transform your <br />
                  WhatsApp conversations?
                </h2>
                <p className="mt-3 text-emerald-100 text-sm sm:text-base font-normal">
                  Join 2,810+ business users growing faster with eBizChat by Orizer.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto">
                <button
                  onClick={onOpenContactModal}
                  className="px-6 py-3 rounded-lg bg-white text-emerald-700 hover:bg-slate-50 font-bold text-sm shadow-sm transition-all active:scale-[0.98] text-center"
                >
                  Start Free Trial
                </button>
                <button
                  onClick={onOpenDemoModal}
                  className="px-6 py-3 rounded-lg bg-transparent text-white border border-white/60 hover:bg-white/10 font-bold text-sm transition-all active:scale-[0.98] text-center"
                >
                  Book Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
