import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  MessageCircle,
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
  Check,
  Send,
  PhoneCall,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import {
  HeroVisualMockup,
  AnalyticsOverviewMockup,
  WorkflowBuilderMockup,
} from '../components/ui/DashboardMockups';
import { ORIZER_INFO } from '../data/orizerData';

// Animation variants matching orizer.netlify.app smooth style
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.01,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
};

export default function HomePage({ onOpenDemoModal, onOpenContactModal }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white font-sans">
      {/* ───────────────────────────────────────────────────────────
          1. HERO SECTION (EXACT MATCH TO MOCKUP SCREENSHOT)
      ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-6 text-left space-y-6"
            >
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium tracking-tight shadow-sm">
                <span>WhatsApp Business Platform Powered by AI</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                The complete <br />
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

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenContactModal}
                  className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20 transition-colors"
                >
                  Start Free trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenDemoModal}
                  className="px-6 py-3.5 rounded-xl text-sm font-semibold text-emerald-600 bg-white hover:bg-emerald-50/60 border border-emerald-500 transition-colors"
                >
                  Book a demo
                </motion.button>
              </div>

              {/* 3 Proof Guarantees */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500" strokeWidth={2.5} />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500" strokeWidth={2.5} />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500" strokeWidth={2.5} />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Layered Desktop Web App + Floating iPhone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 w-full pt-4 lg:pt-0"
            >
              {/* Gentle floating motion like orizer.netlify.app */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <HeroVisualMockup />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. SOCIAL PROOF / LOGO BAR (EXACT MATCH TO MOCKUP)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-12 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-normal text-slate-400 mb-8"
          >
            Trusted by 10,000+ businesses worldwide
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300"
          >
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
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. "EVERYTHING YOU NEED TO BUILD STRONGER CUSTOMER RELATIONSHIPS"
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Everything you need to build <br />
              <span className="text-emerald-500">
                stronger customer relationships
              </span>
            </h2>
          </motion.div>

          {/* 4 Clean Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Card 1: WhatsApp Marketing */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                WhatsApp Marketing
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Create, personalize and send high-converting campaigns with rich media and templates.
              </p>
            </motion.div>

            {/* Card 2: Shared Team Inbox */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
                <Inbox className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Shared Team Inbox
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Manage all chats in one place. Assign, collaborate and resolve faster.
              </p>
            </motion.div>

            {/* Card 3: No-code Chatbots */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                No-code Chatbots
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Build smart workflows and chatbots in minutes with our drag-and-drop builder.
              </p>
            </motion.div>

            {/* Card 4: Sales Automation */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Sales Automation
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Automate follow-ups, qualify leads and close more deals on autopilot.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. SPLIT SECTION 1: THE INBOX & PLATFORM + ANALYTICS OVERVIEW
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & Features */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-5 space-y-6 text-left"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block">
                THE INBOX & PLATFORM
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Designed for teams. <br />
                Built for growth.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                From startups to enterprises, eBizChat helps you deliver exceptional customer experiences on WhatsApp at scale.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />
                  <span>Official WhatsApp Business API</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />
                  <span>Enterprise-grade security & reliability</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />
                  <span>Scalable for growing teams</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />
                  <span>Deep integrations with your favorite tools</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/features"
                  className="inline-block px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-semibold text-xs transition-colors"
                >
                  Explore all features
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Analytics Overview Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <AnalyticsOverviewMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. SPLIT SECTION 2: WORKFLOW BUILDER + AI-POWERED AUTOMATION
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Workflow Builder Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <WorkflowBuilderMockup />
            </motion.div>

            {/* Right Column: AI-Powered Automation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-5 space-y-6 text-left order-1 lg:order-2"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block">
                AI-POWERED AUTOMATION
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Automate conversations. <br />
                <span className="text-emerald-500">
                  Delight customers.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Use AI to understand intent, route conversations, and provide instant answers 24/7.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />
                  <span>AI-powered auto-responses</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />
                  <span>Smart routing & lead qualification</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />
                  <span>Multi-flow automation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />
                  <span>Multi-language support</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemoModal}
                  className="px-5 py-2.5 rounded-xl border border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-semibold text-xs transition-colors"
                >
                  Build your first workflow
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. SOLUTIONS FOR EVERY INDUSTRY (EXACT ICONS FROM MOCKUP)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-14"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-2">
              INDUSTRIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Solutions for{' '}
              <span className="text-emerald-500">
                every industry
              </span>
            </h2>
          </motion.div>

          {/* 7 Circular Nodes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-14"
          >
            {/* 1. E-commerce */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 group-hover:border-emerald-500 group-hover:text-emerald-600 shadow-sm transition-all duration-200">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-slate-700 group-hover:text-emerald-600 transition-colors">
                E-commerce
              </span>
            </motion.div>

            {/* 2. Healthcare */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 group-hover:border-emerald-500 group-hover:text-emerald-600 shadow-sm transition-all duration-200">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-slate-700 group-hover:text-emerald-600 transition-colors">
                Healthcare
              </span>
            </motion.div>

            {/* 3. Education */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 group-hover:border-emerald-500 group-hover:text-emerald-600 shadow-sm transition-all duration-200">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-slate-700 group-hover:text-emerald-600 transition-colors">
                Education
              </span>
            </motion.div>

            {/* 4. Real Estate */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 group-hover:border-emerald-500 group-hover:text-emerald-600 shadow-sm transition-all duration-200">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-slate-700 group-hover:text-emerald-600 transition-colors">
                Real Estate
              </span>
            </motion.div>

            {/* 5. Travel & Hospitality */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 group-hover:border-emerald-500 group-hover:text-emerald-600 shadow-sm transition-all duration-200">
                <Plane className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-slate-700 group-hover:text-emerald-600 transition-colors">
                Travel & Hospitality
              </span>
            </motion.div>

            {/* 6. Finance */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 group-hover:border-emerald-500 group-hover:text-emerald-600 shadow-sm transition-all duration-200">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-slate-700 group-hover:text-emerald-600 transition-colors">
                Finance
              </span>
            </motion.div>

            {/* 7. and more */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 group-hover:border-emerald-500 group-hover:text-emerald-600 shadow-sm transition-all duration-200">
                <MoreHorizontal className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-slate-700 group-hover:text-emerald-600 transition-colors">
                and more
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          7. HIGH-CONVERTING GREEN CTA BANNER (EXACT MATCH TO MOCKUP)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-700 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl text-white"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Title */}
              <div className="max-w-lg text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Ready to transform your <br />
                  WhatsApp conversations?
                </h2>
              </div>

              {/* Right Description & Buttons */}
              <div className="flex flex-col items-start lg:items-end gap-4">
                <p className="text-emerald-100 text-xs sm:text-sm font-normal text-left lg:text-right">
                  Join thousands of businesses growing faster <br className="hidden sm:inline" />
                  with eBizChat by Orizer.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onOpenContactModal}
                    className="px-6 py-3 rounded-xl bg-white text-emerald-700 hover:bg-slate-100 font-semibold text-xs shadow-md transition-colors"
                  >
                    Start Free trial
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onOpenDemoModal}
                    className="px-5 py-3 rounded-xl bg-transparent text-white border border-white hover:bg-white/10 font-semibold text-xs transition-colors"
                  >
                    Book a demo
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
