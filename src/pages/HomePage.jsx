import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
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
} from 'lucide-react';
import {
  HeroVisualMockup,
  AnalyticsOverviewMockup,
  WorkflowBuilderMockup,
} from '../components/ui/DashboardMockups';

export default function HomePage({ onOpenDemoModal, onOpenContactModal }) {
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
          2. FEATURES SECTION (Centered Heading + 4 Clean Cards in 1 Row)
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
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. SOLUTIONS FOR EVERY INDUSTRY (Clean Horizontal Row)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              INDUSTRIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Solutions for <span className="text-emerald-600">every industry</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Tailored WhatsApp solutions designed for specific business needs.
            </p>
          </div>

          {/* Clean Horizontal Row of 7 Industry Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {/* 1. E-commerce */}
            <Link
              to="/solutions/ecommerce"
              className="bg-white rounded-xl border border-slate-200/80 p-5 flex flex-col items-center gap-3 hover:border-emerald-500 hover:shadow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-emerald-50 text-slate-600 group-hover:text-emerald-600 flex items-center justify-center transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                E-commerce
              </span>
            </Link>

            {/* 2. Healthcare */}
            <Link
              to="/solutions/services"
              className="bg-white rounded-xl border border-slate-200/80 p-5 flex flex-col items-center gap-3 hover:border-emerald-500 hover:shadow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-emerald-50 text-slate-600 group-hover:text-emerald-600 flex items-center justify-center transition-colors">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                Healthcare
              </span>
            </Link>

            {/* 3. Education */}
            <Link
              to="/solutions/education"
              className="bg-white rounded-xl border border-slate-200/80 p-5 flex flex-col items-center gap-3 hover:border-emerald-500 hover:shadow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-emerald-50 text-slate-600 group-hover:text-emerald-600 flex items-center justify-center transition-colors">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                Education
              </span>
            </Link>

            {/* 4. Real Estate */}
            <Link
              to="/solutions/real-estate"
              className="bg-white rounded-xl border border-slate-200/80 p-5 flex flex-col items-center gap-3 hover:border-emerald-500 hover:shadow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-emerald-50 text-slate-600 group-hover:text-emerald-600 flex items-center justify-center transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                Real Estate
              </span>
            </Link>

            {/* 5. Travel & Hospitality */}
            <Link
              to="/solutions/services"
              className="bg-white rounded-xl border border-slate-200/80 p-5 flex flex-col items-center gap-3 hover:border-emerald-500 hover:shadow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-emerald-50 text-slate-600 group-hover:text-emerald-600 flex items-center justify-center transition-colors">
                <Plane className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                Travel & Hospitality
              </span>
            </Link>

            {/* 6. Finance */}
            <Link
              to="/solutions/services"
              className="bg-white rounded-xl border border-slate-200/80 p-5 flex flex-col items-center gap-3 hover:border-emerald-500 hover:shadow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-emerald-50 text-slate-600 group-hover:text-emerald-600 flex items-center justify-center transition-colors">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                Finance
              </span>
            </Link>

            {/* 7. and more */}
            <Link
              to="/solutions"
              className="bg-white rounded-xl border border-slate-200/80 p-5 flex flex-col items-center gap-3 hover:border-emerald-500 hover:shadow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-emerald-50 text-slate-600 group-hover:text-emerald-600 flex items-center justify-center transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                and more
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. FINAL CTA BANNER (Full-width green/teal banner matching reference)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 sm:p-12 lg:p-14 text-white shadow-lg">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Ready to transform your <br />
                  WhatsApp conversations?
                </h2>
                <p className="mt-3 text-emerald-100 text-sm sm:text-base font-normal">
                  Join thousands of businesses growing faster with eBizChat by Orizer.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenContactModal}
                  className="px-6 py-3 rounded-lg bg-white text-emerald-700 hover:bg-slate-50 font-bold text-sm shadow-sm transition-all active:scale-[0.98]"
                >
                  Start Free trial
                </button>
                <button
                  onClick={onOpenDemoModal}
                  className="px-6 py-3 rounded-lg bg-transparent text-white border border-white/60 hover:bg-white/10 font-bold text-sm transition-all active:scale-[0.98]"
                >
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
