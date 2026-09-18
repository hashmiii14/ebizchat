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
  MoreHorizontal,
  Send,
  ShieldCheck,
} from 'lucide-react';
import {
  HeroVisualMockup,
  AnalyticsOverviewMockup,
  WorkflowBuilderMockup,
} from '../components/ui/DashboardMockups';
import { FAQ_DATA } from '../data/faqData';
import { ORIZER_INFO } from '../data/orizerData';

export default function HomePage({ onOpenDemoModal, onOpenContactModal }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* ───────────────────────────────────────────────────────────
          1. HERO SECTION (EXACT REFERENCE MOCKUP)
      ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left Column */}
            <div className="lg:col-span-6 text-left space-y-5">
              {/* Badge Pill */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100/80 border border-slate-200/80 text-slate-600 text-xs font-medium">
                <span>WhatsApp Business Platform Powered by AI</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                The complete <br className="hidden sm:inline" />
                WhatsApp solution <br />
                for{' '}
                <span className="text-emerald-500">
                  modern businesses
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                Engage, automate and grow with WhatsApp marketing, shared inbox, chatbots and sales automation — all in one powerful platform.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={onOpenContactModal}
                  className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 shadow-sm transition-all active:scale-[0.98]"
                >
                  Start Free trial
                </button>
                <button
                  onClick={onOpenDemoModal}
                  className="px-6 py-3 rounded-lg text-sm font-semibold text-emerald-600 bg-white hover:bg-slate-50 border border-emerald-400 transition-all active:scale-[0.98]"
                >
                  Book a demo
                </button>
              </div>

              {/* 3 Guarantees */}
              <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Hero Right Column: Layered Desktop + Floating iPhone Mockup */}
            <div className="lg:col-span-6 w-full pt-4 lg:pt-0">
              <HeroVisualMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. LOGO CLOUD / SOCIAL PROOF
      ─────────────────────────────────────────────────────────── */}
      <section className="py-12 border-t border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-8">
            Trusted by 10,000+ businesses worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
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
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. "EVERYTHING YOU NEED..." 4-FEATURE CARDS GRID
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Header */}
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything you need to build <br />
              <span className="text-emerald-500">
                stronger customer relationships
              </span>
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: WhatsApp Marketing */}
            <Link
              to="/features/whatsapp-marketing"
              className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 hover:shadow-lg transition-all duration-200 text-center flex flex-col items-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">WhatsApp Marketing</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Create, personalize and send high-converting campaigns with rich media and templates.
              </p>
            </Link>

            {/* Card 2: Shared Team Inbox */}
            <Link
              to="/features/team-inbox"
              className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 hover:shadow-lg transition-all duration-200 text-center flex flex-col items-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Inbox className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">Shared Team Inbox</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Manage and route all conversations from one place. Assign, collaborate and resolve faster.
              </p>
            </Link>

            {/* Card 3: No-code Chatbots */}
            <Link
              to="/features/chatbot"
              className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 hover:shadow-lg transition-all duration-200 text-center flex flex-col items-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">No-code Chatbots</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Build smart workflows and chatbots in minutes with our drag-and-drop builder.
              </p>
            </Link>

            {/* Card 4: Sales Automation */}
            <Link
              to="/features/automation"
              className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 hover:shadow-lg transition-all duration-200 text-center flex flex-col items-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">Sales Automation</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Automate follow-ups, qualify leads and close more deals on autopilot.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. SPLIT FEATURE 1: TEAM INBOX & ANALYTICS OVERVIEW
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-600">
                THE INBOX & PLATFORM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Designed for teams. <br />
                Built for growth.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                From startups to enterprises, eBizChat helps you deliver exceptional customer experiences on WhatsApp at scale.
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Official WhatsApp Business API</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Enterprise-grade security & reliability</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Scalable for growing teams</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Deep integrations with your favorite tools</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-emerald-600 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-all"
                >
                  Explore all features
                </Link>
              </div>
            </div>

            {/* Right: Analytics Overview Mockup */}
            <div className="lg:col-span-7">
              <AnalyticsOverviewMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. SPLIT FEATURE 2: VISUAL AUTOMATION & WORKFLOW BUILDER
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Workflow Builder Mockup */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <WorkflowBuilderMockup />
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-5 space-y-5 text-left order-1 lg:order-2">
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-600">
                AI-POWERED AUTOMATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Automate conversations. <br />
                Delight customers.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Use AI to understand intent, route conversations, and provide instant answers 24/7.
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>AI-powered auto-responses</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Smart routing & lead qualification</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Multi-flow automation</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Multi-language support</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-emerald-600 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-all"
                >
                  Build your first workflow
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. SOLUTIONS FOR EVERY INDUSTRY
      ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-10">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-600 block mb-1">
              INDUSTRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Solutions for <span className="text-emerald-500">every industry</span>
            </h2>
          </div>

          {/* Horizontal Industry Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/solutions/ecommerce"
              className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 mb-2 transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">
                E-commerce
              </span>
            </Link>

            <Link
              to="/solutions/manufacturing"
              className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border-2 border-emerald-400 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-2">
                <Factory className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-900">
                Manufacturing
              </span>
            </Link>

            <Link
              to="/solutions/services"
              className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 mb-2 transition-colors">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">
                Healthcare
              </span>
            </Link>

            <Link
              to="/solutions/education"
              className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 mb-2 transition-colors">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">
                Education
              </span>
            </Link>

            <Link
              to="/solutions/real-estate"
              className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 mb-2 transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">
                Real Estate
              </span>
            </Link>

            <Link
              to="/solutions/services"
              className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 mb-2 transition-colors">
                <Plane className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">
                Travel
              </span>
            </Link>

            <Link
              to="/solutions/services"
              className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 mb-2 transition-colors">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">
                Finance
              </span>
            </Link>

            <Link
              to="/solutions"
              className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 mb-2 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">
                and more
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          7. ORIZER ENTERPRISE HERITAGE & MANUFACTURING SPOTLIGHT
      ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-left max-w-xl">
              <span className="text-xs font-mono font-bold uppercase text-emerald-600 tracking-wider">
                ORIZER ERP LINAGE · 220+ ENTERPRISE IMPLEMENTATIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Built For Factories, Warehouses & Multi-Branch Sales Teams.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seamlessly sync with your factory shop floor, generate gate passes, auto-deliver GST invoice PDFs on dispatch, and track customer payments via WhatsApp.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto">
              <div className="text-center p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">220+</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Enterprise Projects</div>
              </div>
              <div className="text-center p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">2,810+</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Daily Active Users</div>
              </div>
              <div className="text-center p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">494+</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Industry Awards</div>
              </div>
              <div className="text-center p-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-mono">99.98%</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          8. HIGH-IMPACT GREEN CALL-TO-ACTION BANNER
      ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-700 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-xl text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Title */}
              <div className="max-w-lg text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Ready to transform your <br />
                  WhatsApp conversations?
                </h2>
              </div>

              {/* Right CTAs */}
              <div className="flex flex-col items-center lg:items-end gap-3.5">
                <p className="text-emerald-100 text-xs sm:text-sm font-medium">
                  Join thousands of businesses growing faster with eBizChat by Orizer.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenContactModal}
                    className="px-6 py-2.5 rounded-lg bg-white text-emerald-800 hover:bg-slate-100 font-semibold text-sm shadow-sm transition-all active:scale-[0.98]"
                  >
                    Start Free trial
                  </button>
                  <button
                    onClick={onOpenDemoModal}
                    className="px-6 py-2.5 rounded-lg bg-transparent text-white border border-white hover:bg-white/10 font-medium text-sm transition-all active:scale-[0.98]"
                  >
                    Book a demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          9. FREQUENTLY ASKED QUESTIONS ACCORDION
      ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-10">
            Everything you need to know about official WhatsApp API, CRM sync, and Orizer ERP connectivity.
          </p>

          <div className="space-y-3 text-left">
            {FAQ_DATA.slice(0, 5).map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-subtle"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-slate-900 text-sm focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/faq"
              className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 underline"
            >
              View all 20+ Frequently Asked Questions →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
