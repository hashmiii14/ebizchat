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
  Landmark,
  ShieldCheck,
  BadgeCheck,
  Zap,
  Sliders,
  DollarSign,
  Clock,
  Send,
  ExternalLink,
} from 'lucide-react';
import {
  HeroVisualMockup,
  AnalyticsOverviewMockup,
  WorkflowBuilderMockup,
  KanbanMockup,
  TeamInboxMockup,
  CampaignAnalyticsMockup,
} from '../components/ui/DashboardMockups';
import { FAQ_DATA } from '../data/faqData';
import { ORIZER_INFO } from '../data/orizerData';

export default function HomePage({ onOpenDemoModal, onOpenContactModal }) {
  // Cunnekt-style interactive feature tab switcher state
  const [activeFeatureTab, setActiveFeatureTab] = useState('chatbot');

  // Interactive ROI Calculator state
  const [calcVolume, setCalcVolume] = useState(15000);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Dynamic ROI calculation metrics
  const estimatedMetaCost = Math.round(calcVolume * 0.48); // ~0.48 INR avg Meta conversation rate
  const automatedQueries = Math.round(calcVolume * 0.76); // 76% automated resolution
  const hoursSaved = Math.round((automatedQueries * 3.5) / 60); // 3.5 mins per query saved
  const estimatedRevenueBoost = (calcVolume * 0.042 * 1200).toLocaleString('en-IN'); // 4.2% conversion boost

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* ───────────────────────────────────────────────────────────
          1. HERO SECTION (CUNNEKT ARCHITECTURE + CLEAN LIGHT MOCKUP)
      ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-20 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left Column */}
            <div className="lg:col-span-6 text-left space-y-5 animate-fade-in-up">
              {/* Meta Official Partner Badge Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-xs font-semibold tracking-tight shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-mono uppercase text-[11px] text-emerald-700">
                  Official Meta Business Partner
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600 font-normal">WABA Cloud API</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Unlock the Power of <br className="hidden sm:inline" />
                WhatsApp API for <br />
                <span className="text-emerald-600 underline decoration-emerald-300/60 decoration-wavy decoration-2">
                  Your Business
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                Grow revenue, automate customer support 24/7, and close leads 3x faster. Launch official Meta broadcast campaigns, collaborate in a shared team inbox, and sync directly with your <strong>Orizer ERP</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={onOpenContactModal}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all active:scale-[0.98] flex items-center gap-2"
                >
                  Start 7-Day Free Trial
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenDemoModal}
                  className="px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all active:scale-[0.98] flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  Book Live Demo
                </button>
                <a
                  href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`}
                  className="px-4 py-3.5 rounded-xl text-sm font-semibold font-mono text-slate-700 hover:text-emerald-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                  title="Call Sales Now"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span className="hidden sm:inline">+91 96245 13385</span>
                </a>
              </div>

              {/* 3 Guarantees / Proof Bullets */}
              <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Free Green Tick Support</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero Meta Markup</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            {/* Hero Right Column: Layered Desktop Web App + Floating iPhone Mockup */}
            <div className="lg:col-span-6 w-full pt-4 lg:pt-0 animate-fade-in-up">
              <HeroVisualMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. CUNNEKT LOGO CLOUD & TRUST PROOF
      ─────────────────────────────────────────────────────────── */}
      <section className="py-10 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold font-mono">
              Trusted by 3,000+ businesses and manufacturing plants globally
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="text-xl sm:text-2xl font-black tracking-widest text-slate-800 font-serif">
              L'ORÉAL
            </span>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-700">
              Chargebee
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-slate-800">
              OYO
            </span>
            <span className="text-lg sm:text-xl font-black tracking-wider text-slate-800 uppercase">
              DECATHLON
            </span>
            <span className="text-lg sm:text-xl font-semibold tracking-tight text-slate-700">
              freshworks
            </span>
            <span className="text-lg sm:text-xl font-extrabold tracking-widest text-slate-800 uppercase">
              CRED
            </span>
            <span className="text-lg sm:text-xl font-black tracking-tight text-slate-700">
              TATA
            </span>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. CUNNEKT'S SIGNATURE INTERACTIVE FEATURE TAB SWITCHER
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 mb-2 block">
              KEY FEATURES OF WHATSAPP BUSINESS API PLATFORM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Everything you need to automate conversations & close deals faster
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Explore the four core engines powering enterprise communication, support, and sales on WhatsApp.
            </p>
          </div>

          {/* Tab Navigation Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            <button
              onClick={() => setActiveFeatureTab('chatbot')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeFeatureTab === 'chatbot'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Bot className="w-4 h-4" />
              Whatsapp Chatbot Builder
            </button>

            <button
              onClick={() => setActiveFeatureTab('integrations')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeFeatureTab === 'integrations'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <GitBranch className="w-4 h-4" />
              Whatsapp API Integrations
            </button>

            <button
              onClick={() => setActiveFeatureTab('leadgen')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeFeatureTab === 'leadgen'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Filter className="w-4 h-4" />
              Lead Management
            </button>

            <button
              onClick={() => setActiveFeatureTab('marketing')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeFeatureTab === 'marketing'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Megaphone className="w-4 h-4" />
              WhatsApp Marketing
            </button>
          </div>

          {/* Dynamic Tab Content Box */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 transition-all duration-300">
            {/* TAB 1: CHATBOT BUILDER */}
            {activeFeatureTab === 'chatbot' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fade-in">
                <div className="lg:col-span-5 space-y-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    No-Code Drag-and-Drop Chatbot Builder
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Create powerful WhatsApp chatbots without any coding. Design automated conversation flows to answer FAQs, qualify inbound leads, share catalog pricing, and hand off chats to live agents seamlessly.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>Visual flow designer with intent recognition</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>24/7 instant response in under 15 seconds</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>Multi-language translation support (Hindi, Gujarati, English)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>Smart human agent takeover when high-ticket intent detected</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-3">
                    <Link
                      to="/features/chatbot"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
                    >
                      Explore Chatbot Builder
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={onOpenDemoModal}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition-colors"
                    >
                      Try Interactive Flow
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <WorkflowBuilderMockup />
                </div>
              </div>
            )}

            {/* TAB 2: API & ERP INTEGRATIONS */}
            {activeFeatureTab === 'integrations' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fade-in">
                <div className="lg:col-span-5 space-y-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <GitBranch className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Connect With Your ERP, CRM & E-Commerce Tools
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Connect WhatsApp Business API seamlessly with your <strong>Orizer ERP</strong>, Tally Prime, SAP Business One, Shopify, Zoho, and WooCommerce. Sync contacts, orders, dispatch slips, and payments in real time.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>Automated GST Invoice PDF & LR copy dispatch</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>Gate pass generation & delivery confirmation via WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>IndiaMart & TradeIndia lead capture webhooks</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>REST APIs & Webhooks with 99.98% delivery guarantee</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/features/integrations"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
                    >
                      View All 50+ Connectors
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Visual Connector Matrix */}
                <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6">
                  <div className="text-xs font-bold text-slate-800 mb-4 flex items-center justify-between">
                    <span>Live Two-Way Integration Mesh</span>
                    <span className="text-[10px] text-emerald-600 font-mono">Zero Latency Webhooks</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                        OZ
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">Orizer ERP</div>
                        <div className="text-[9px] text-emerald-600 font-medium">Native Sync</div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                        TL
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">Tally Prime</div>
                        <div className="text-[9px] text-slate-500">Invoice Sync</div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                        SP
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">Shopify</div>
                        <div className="text-[9px] text-slate-500">Order Alerts</div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-xs">
                        SAP
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">SAP B1</div>
                        <div className="text-[9px] text-slate-500">Enterprise Sync</div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs">
                        IM
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">IndiaMart</div>
                        <div className="text-[9px] text-slate-500">Instant Leads</div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs">
                        ZH
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">Zoho CRM</div>
                        <div className="text-[9px] text-slate-500">Lead Routing</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-600">Need a custom manufacturing API bridge?</span>
                    <button
                      onClick={onOpenDemoModal}
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      Talk to Solution Engineer →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: LEAD MANAGEMENT */}
            {activeFeatureTab === 'leadgen' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fade-in">
                <div className="lg:col-span-5 space-y-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Filter className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Capture, Route & Convert Inbound Leads in 15 Seconds
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Stop losing hot prospects to slow response times. Ingest leads automatically from Meta Ads, IndiaMart, and website forms. Trigger instant WhatsApp qualification and assign them to your frontline sales reps.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>Instant Click-to-WhatsApp ad attribution</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>Automatic round-robin sales agent assignment</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>Visual Kanban sales pipeline tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>38% higher conversion rate proven on B2B inquiries</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/leadgen"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
                    >
                      Explore LeadGen+ Engine
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <KanbanMockup />
                </div>
              </div>
            )}

            {/* TAB 4: WHATSAPP MARKETING */}
            {activeFeatureTab === 'marketing' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fade-in">
                <div className="lg:col-span-5 space-y-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    High-Volume WhatsApp Broadcast Campaigns
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Launch personalized promotions, catalog updates, price list drops, and festival greetings to unlimited opted-in customers with zero fear of number blocking.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>98% delivery rate with Meta Cloud API Tier 4 scale</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>Interactive Quick-Reply buttons & call-to-action cards</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>Audience segmentation by city, dealer grade & order volume</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>Real-time read receipts and click analytics telemetry</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/features/whatsapp-marketing"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
                    >
                      Explore Broadcast Marketing
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <CampaignAnalyticsMockup />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. CUNNEKT INTERACTIVE ROI & WHATSAPP COST CALCULATOR
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-1">
              ESTIMATE YOUR SAVINGS & ROI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Interactive WhatsApp ROI & Cost Calculator
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Slide to your expected monthly WhatsApp conversations to calculate Meta API expenses, hours saved, and estimated pipeline boost.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50/80 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg">
            {/* Slider Control */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-slate-800">
                  Monthly WhatsApp Conversations:
                </span>
                <span className="text-2xl font-extrabold font-mono text-emerald-600 bg-white px-4 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                  {calcVolume.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="100000"
                step="1000"
                value={calcVolume}
                onChange={(e) => setCalcVolume(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2">
                <span>2,000 / mo</span>
                <span>50,000 / mo</span>
                <span>1,00,000+ / mo</span>
              </div>
            </div>

            {/* Calculated Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm">
                <span className="text-[11px] text-slate-500 font-medium block mb-1">
                  Est. Meta Cloud API Fee
                </span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">
                  ₹{estimatedMetaCost.toLocaleString('en-IN')}
                </div>
                <span className="text-[10px] text-emerald-600 font-semibold block mt-1">
                  0% Markup Guarantee
                </span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm">
                <span className="text-[11px] text-slate-500 font-medium block mb-1">
                  Auto-Answered Queries
                </span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-600">
                  {automatedQueries.toLocaleString('en-IN')}
                </div>
                <span className="text-[10px] text-slate-500 block mt-1">
                  76% Bot Resolution
                </span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm">
                <span className="text-[11px] text-slate-500 font-medium block mb-1">
                  Team Hours Saved
                </span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">
                  {hoursSaved} hrs
                </div>
                <span className="text-[10px] text-emerald-600 font-semibold block mt-1">
                  ~{Math.round(hoursSaved / 8)} Working Days
                </span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm">
                <span className="text-[11px] text-slate-500 font-medium block mb-1">
                  Est. Pipeline Recovered
                </span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-700">
                  ₹{estimatedRevenueBoost}
                </div>
                <span className="text-[10px] text-slate-500 block mt-1">
                  Via 15s Lead Follow-up
                </span>
              </div>
            </div>

            {/* Bottom Actions inside Calculator */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left text-xs text-slate-600">
                <strong className="text-slate-900 block">Transparent Pricing · Zero Hidden Cost</strong>
                Meta fees are billed directly with full pass-through and official compliance.
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={onOpenContactModal}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
                >
                  Get Exact Proposal
                </button>
                <Link
                  to="/pricing"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. WHY ORIZER EBIZCHAT? (CUNNEKT CORE TRUST MATRIX)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-1">
              TRUSTED ENTERPRISE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why 3,000+ Businesses Choose Orizer eBizChat
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Everything required to scale WhatsApp communication safely with enterprise-grade reliability and zero platform friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Trust 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Official Meta Business Partner
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Authorized Meta BSP with Tier 4 Cloud API scalability. No third-party scrapers, zero risk of account ban.
              </p>
            </div>

            {/* Trust 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Free Green Tick Verification
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Complete documentation support and expedited Meta verification to obtain the official green badge beside your brand name.
              </p>
            </div>

            {/* Trust 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Zero Conversation Markup
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We pass official Meta rates directly without artificial per-message markups, saving you up to 40% on high-volume broadcasts.
              </p>
            </div>

            {/* Trust 4 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Native Factory & ERP Sync
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Engineered by Orizer ERP with 220+ manufacturing implementations. Direct sync with factory dispatch, inventory & accounts.
              </p>
            </div>

            {/* Trust 5 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Dedicated Onboarding & Account Mgr
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Real engineers available in Vapi and Mumbai. Call us directly on +91 96245 13385 or reach your dedicated rep 24/7.
              </p>
            </div>

            {/* Trust 6 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                99.98% System Uptime SLA
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enterprise redundancy, SOC2 and DPDP data compliance. Your customer and financial communication never goes down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. TAILORED SOLUTIONS FOR YOUR INDUSTRY (CUNNEKT MODEL)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-14 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-1">
              INDUSTRY SPECIFIC PLAYBOOKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tailored WhatsApp Solutions for Your Industry
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Pre-built conversational flows, ERP webhooks, and automation templates customized for each business model.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {/* 1. Manufacturing (Primary) */}
            <Link
              to="/solutions/manufacturing"
              className="p-7 rounded-2xl bg-white border-2 border-emerald-400 shadow-md card-hover group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Factory className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase font-mono">
                  Primary Spotlight
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                Manufacturing & Industrial
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Automate gate passes, trigger GST invoice PDFs upon dispatch, deliver live lorry receipt (LR) copies, and broadcast price lists to dealer networks.
              </p>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 group-hover:underline">
                Explore Manufacturing Playbook →
              </span>
            </Link>

            {/* 2. E-Commerce */}
            <Link
              to="/solutions/ecommerce"
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                E-Commerce & Retail
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Recover up to 28% of abandoned carts with automated sequence nudges, confirm COD orders via 1-tap WhatsApp buttons, and send live tracking.
              </p>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 group-hover:underline">
                Explore E-Commerce Playbook →
              </span>
            </Link>

            {/* 3. Tour & Travel */}
            <Link
              to="/solutions/services"
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                Tour, Travel & Hospitality
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Share full PDF itineraries, send flight/hotel booking vouchers, automate advance payment reminders, and collect post-trip reviews on WhatsApp.
              </p>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 group-hover:underline">
                Explore Travel Playbook →
              </span>
            </Link>

            {/* 4. Education & EdTech */}
            <Link
              to="/solutions/education"
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                Education & EdTech
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Respond to student admission enquiries in 15 seconds, schedule counseling calls, and automate installment fee reminders to parents.
              </p>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 group-hover:underline">
                Explore EdTech Playbook →
              </span>
            </Link>

            {/* 5. Real Estate & Builders */}
            <Link
              to="/solutions/real-estate"
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                Real Estate & Builders
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Qualify buyer budgets via automated WhatsApp questionnaires, deliver project floorplans in PDF, and schedule verified site visits.
              </p>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 group-hover:underline">
                Explore Real Estate Playbook →
              </span>
            </Link>

            {/* 6. Healthcare & Clinics */}
            <Link
              to="/solutions/services"
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                Healthcare & Diagnostic Labs
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Book doctor consultations, deliver blood test reports securely in PDF, and send pre-appointment fasting instructions to patients.
              </p>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 group-hover:underline">
                Explore Healthcare Playbook →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          7. HIGH-IMPACT GREEN CALL-TO-ACTION BANNER
      ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Title */}
              <div className="max-w-lg text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-200">
                    Plans Start @ ₹1,999/Month
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Ready to transform your <br />
                  WhatsApp conversations?
                </h2>
                <p className="text-emerald-100 text-xs sm:text-sm font-normal mt-2">
                  Get full access with 7-day free trial. Setup takes under 48 hours with dedicated support from Orizer ERP.
                </p>
              </div>

              {/* Right CTAs */}
              <div className="flex flex-col items-center lg:items-end gap-3.5">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenContactModal}
                    className="px-6 py-3 rounded-xl bg-white text-emerald-900 hover:bg-slate-100 font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                  >
                    Start 7-Day Free Trial
                  </button>
                  <button
                    onClick={onOpenDemoModal}
                    className="px-5 py-3 rounded-xl bg-transparent text-white border border-white hover:bg-white/10 font-semibold text-sm transition-all active:scale-[0.98]"
                  >
                    Book Live Demo
                  </button>
                  <a
                    href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`}
                    className="px-4 py-3 rounded-xl bg-emerald-800/80 hover:bg-emerald-900 text-white font-mono font-bold text-sm transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-emerald-300" />
                    +91 96245 13385
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          8. CUNNEKT-STYLE EXPANDABLE FAQ ACCORDION
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-1">
            CLEAR ANSWERS TO FREQUENT QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-12">
            Everything you need to know about Meta WABA verification, pricing, chatbots, and Orizer ERP connectivity.
          </p>

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

          <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 text-left">
            <div>
              <strong className="text-slate-900 text-sm block">Have a question not listed here?</strong>
              Our solution specialists in Vapi and Mumbai are ready to guide you on WhatsApp API & factory sync.
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                Call Directly
              </a>
              <button
                onClick={onOpenContactModal}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors"
              >
                Contact Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
