import React, { useState } from 'react';
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
  Zap,
  Activity,
  Award,
  Clock,
  ChevronRight,
} from 'lucide-react';
import {
  HeroVisualMockup,
  AnalyticsOverviewMockup,
  WorkflowBuilderMockup,
} from '../components/ui/DashboardMockups';
import { ORIZER_INFO } from '../data/orizerData';

// Animation variants matching orizer.netlify.app smooth entrance style
const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export default function HomePage({ onOpenDemoModal, onOpenContactModal }) {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f6f3] text-[#0e0f10] selection:bg-[#ff3b00] selection:text-white font-body relative">
      {/* Ambient background mesh glows matching orizer.netlify.app */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,164,140,0.12),transparent_70%)] pointer-events-none blur-3xl z-0 animate-mesh"></div>
      <div className="fixed top-1/2 right-10 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(255,59,0,0.08),transparent_65%)] pointer-events-none blur-3xl z-0 animate-mesh" style={{ animationDelay: '4s' }}></div>

      {/* ───────────────────────────────────────────────────────────
          1. HERO SECTION (ORIZER THEME & INTERACTIVE LIVE SIMULATOR)
      ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-black/[0.06] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-6 text-left space-y-7"
            >
              {/* Pill Badge with Live Radar Ping */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-black/[0.08] text-[#0e0f10] text-xs font-mono tracking-tight shadow-sm hover:border-[#00a48c]/40 transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-ping-slow"></span>
                <span className="font-semibold">WhatsApp Business Platform Powered by AI</span>
                <span className="text-[#00a48c] font-bold pl-1">✦ Meta Tier 4</span>
              </div>

              {/* Main Headline in Clash Display */}
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-[#0e0f10] font-display leading-[1.08]">
                The complete <br />
                WhatsApp solution <br />
                for{' '}
                <span className="text-[#00a48c] relative inline-block">
                  modern businesses
                  <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-[#00a48c]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#55585f] font-normal leading-relaxed max-w-xl">
                Engage, automate and grow with WhatsApp marketing, shared inbox, chatbots and sales automation — tightly integrated with <span className="font-semibold text-[#0e0f10]">Orizer ERP</span>.
              </p>

              {/* Action Buttons with tactile hover */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenContactModal}
                  className="px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-[#00a48c] hover:bg-[#008a76] shadow-lg shadow-[#00a48c]/30 transition-all flex items-center gap-2"
                >
                  <span>Start Free trial</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenDemoModal}
                  className="px-7 py-3.5 rounded-2xl text-sm font-bold text-[#0e0f10] bg-white hover:bg-neutral-50 border border-black/15 shadow-sm transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#00a48c]" />
                  <span>Book a demo</span>
                </motion.button>
              </div>

              {/* 3 Proof Guarantees */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#55585f] font-mono">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#00a48c]" strokeWidth={2.5} />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#00a48c]" strokeWidth={2.5} />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#00a48c]" strokeWidth={2.5} />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Layered Desktop Web App + Floating iPhone Mockup with Live Simulator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 w-full pt-6 lg:pt-0"
            >
              {/* Continuous floating motion like orizer.netlify.app */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <HeroVisualMockup />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. CONTINUOUS MARQUEE TICKER (TRUSTED BY 10,000+ BUSINESSES)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-8 border-b border-black/[0.06] bg-white/70 backdrop-blur-sm overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#9a9da3]">
            Trusted by 10,000+ fast-growing businesses & manufacturing leaders
          </p>
        </div>

        {/* Infinite Moving Ribbon */}
        <div className="w-full overflow-hidden flex items-center">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-2 text-[#0e0f10]">
            <span className="text-2xl font-black tracking-widest opacity-80 hover:opacity-100 hover:text-[#00a48c] transition-all font-serif">
              L'ORÉAL
            </span>
            <span className="text-xl font-bold tracking-tight opacity-75 hover:opacity-100 hover:text-[#00a48c] transition-all">
              Chargebee
            </span>
            <span className="text-3xl font-extrabold tracking-tighter opacity-80 hover:opacity-100 hover:text-[#00a48c] transition-all font-display">
              OYO
            </span>
            <span className="text-xl font-black tracking-wider uppercase opacity-80 hover:opacity-100 hover:text-[#00a48c] transition-all">
              DECATHLON
            </span>
            <span className="text-xl font-semibold tracking-tight opacity-75 hover:opacity-100 hover:text-[#00a48c] transition-all">
              freshworks
            </span>
            <span className="text-xl font-extrabold tracking-widest uppercase opacity-80 hover:opacity-100 hover:text-[#00a48c] transition-all font-mono">
              CRED
            </span>
            <span className="px-3 py-1 rounded-full bg-[#00a48c]/10 text-[#00a48c] font-mono text-xs font-bold border border-[#00a48c]/30 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00a48c]" />
              Verified WhatsApp Business Cloud Partner
            </span>
            <span className="text-2xl font-black tracking-widest opacity-80 hover:opacity-100 hover:text-[#00a48c] transition-all font-serif">
              L'ORÉAL
            </span>
            <span className="text-xl font-bold tracking-tight opacity-75 hover:opacity-100 hover:text-[#00a48c] transition-all">
              Chargebee
            </span>
            <span className="text-3xl font-extrabold tracking-tighter opacity-80 hover:opacity-100 hover:text-[#00a48c] transition-all font-display">
              OYO
            </span>
            <span className="text-xl font-black tracking-wider uppercase opacity-80 hover:opacity-100 hover:text-[#00a48c] transition-all">
              DECATHLON
            </span>
            <span className="text-xl font-semibold tracking-tight opacity-75 hover:opacity-100 hover:text-[#00a48c] transition-all">
              freshworks
            </span>
            <span className="text-xl font-extrabold tracking-widest uppercase opacity-80 hover:opacity-100 hover:text-[#00a48c] transition-all font-mono">
              CRED
            </span>
            <span className="px-3 py-1 rounded-full bg-[#ff3b00]/10 text-[#ff3b00] font-mono text-xs font-bold border border-[#ff3b00]/30 flex items-center gap-1.5">
              ⚡ 0% Meta Markup Guarantee
            </span>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. "EVERYTHING YOU NEED TO BUILD STRONGER CUSTOMER RELATIONSHIPS"
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-black/[0.06] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#00a48c] block mb-3">
              POWER & CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0e0f10] font-display tracking-tight leading-tight">
              Everything you need to build <br />
              <span className="text-[#00a48c]">
                stronger customer relationships
              </span>
            </h2>
            <p className="mt-4 text-[#55585f] text-sm sm:text-base max-w-xl mx-auto">
              Replace fragmented tools with a single unified operating system for high-intent customer conversations.
            </p>
          </motion.div>

          {/* 4 Clean Elevated Cards on #f7f6f3 */}
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
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredFeature(1)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="bg-white rounded-3xl border border-black/[0.08] p-8 shadow-[0_10px_30px_-10px_rgba(14,15,16,0.06)] hover:shadow-[0_20px_50px_-15px_rgba(0,164,140,0.25)] hover:border-[#00a48c]/40 transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#00a48c]/10 border border-[#00a48c]/20 flex items-center justify-center text-[#00a48c] mb-6 shadow-sm group-hover:bg-[#00a48c] group-hover:text-white transition-all duration-300">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div className="text-[11px] font-mono text-[#00a48c] font-bold uppercase tracking-wider mb-1">
                  01 · BROADCAST
                </div>
                <h3 className="text-xl font-bold font-display text-[#0e0f10] mb-2.5">
                  WhatsApp Marketing
                </h3>
                <p className="text-xs sm:text-sm text-[#55585f] leading-relaxed font-normal">
                  Create, personalize and send high-converting campaigns with rich media, interactive buttons and dynamic catalog tags.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-black/[0.04] flex items-center justify-between text-xs font-semibold text-[#00a48c] group-hover:translate-x-1 transition-transform">
                <span>98.4% open rate</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Card 2: Shared Team Inbox */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredFeature(2)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="bg-white rounded-3xl border border-black/[0.08] p-8 shadow-[0_10px_30px_-10px_rgba(14,15,16,0.06)] hover:shadow-[0_20px_50px_-15px_rgba(0,164,140,0.25)] hover:border-[#00a48c]/40 transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#00a48c]/10 border border-[#00a48c]/20 flex items-center justify-center text-[#00a48c] mb-6 shadow-sm group-hover:bg-[#00a48c] group-hover:text-white transition-all duration-300">
                  <Inbox className="w-7 h-7" />
                </div>
                <div className="text-[11px] font-mono text-[#00a48c] font-bold uppercase tracking-wider mb-1">
                  02 · COLLABORATION
                </div>
                <h3 className="text-xl font-bold font-display text-[#0e0f10] mb-2.5">
                  Shared Team Inbox
                </h3>
                <p className="text-xs sm:text-sm text-[#55585f] leading-relaxed font-normal">
                  Multi-agent collaboration with collision detection, private internal notes, automated tags, and smart round-robin routing.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-black/[0.04] flex items-center justify-between text-xs font-semibold text-[#00a48c] group-hover:translate-x-1 transition-transform">
                <span>Zero duplicate replies</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Card 3: No-code Chatbots */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredFeature(3)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="bg-white rounded-3xl border border-black/[0.08] p-8 shadow-[0_10px_30px_-10px_rgba(14,15,16,0.06)] hover:shadow-[0_20px_50px_-15px_rgba(0,164,140,0.25)] hover:border-[#00a48c]/40 transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#00a48c]/10 border border-[#00a48c]/20 flex items-center justify-center text-[#00a48c] mb-6 shadow-sm group-hover:bg-[#00a48c] group-hover:text-white transition-all duration-300">
                  <Bot className="w-7 h-7" />
                </div>
                <div className="text-[11px] font-mono text-[#00a48c] font-bold uppercase tracking-wider mb-1">
                  03 · INTELLIGENCE
                </div>
                <h3 className="text-xl font-bold font-display text-[#0e0f10] mb-2.5">
                  No-code Chatbots
                </h3>
                <p className="text-xs sm:text-sm text-[#55585f] leading-relaxed font-normal">
                  Build 24/7 AI conversational flows in minutes. Instantly answer FAQs, share brochures, and hand off to human reps.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-black/[0.04] flex items-center justify-between text-xs font-semibold text-[#00a48c] group-hover:translate-x-1 transition-transform">
                <span>15-second response time</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Card 4: Sales Automation */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredFeature(4)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="bg-white rounded-3xl border border-black/[0.08] p-8 shadow-[0_10px_30px_-10px_rgba(14,15,16,0.06)] hover:shadow-[0_20px_50px_-15px_rgba(0,164,140,0.25)] hover:border-[#00a48c]/40 transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#ff3b00]/10 border border-[#ff3b00]/20 flex items-center justify-center text-[#ff3b00] mb-6 shadow-sm group-hover:bg-[#ff3b00] group-hover:text-white transition-all duration-300">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div className="text-[11px] font-mono text-[#ff3b00] font-bold uppercase tracking-wider mb-1">
                  04 · CONVERSION
                </div>
                <h3 className="text-xl font-bold font-display text-[#0e0f10] mb-2.5">
                  Sales Automation
                </h3>
                <p className="text-xs sm:text-sm text-[#55585f] leading-relaxed font-normal">
                  Automate lead qualification, trigger payment links, schedule site visits, and push records straight to Orizer ERP.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-black/[0.04] flex items-center justify-between text-xs font-semibold text-[#ff3b00] group-hover:translate-x-1 transition-transform">
                <span>3.4x lead conversion</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. SPLIT SECTION 1: THE INBOX & PLATFORM + ANALYTICS OVERVIEW
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-black/[0.06] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Text & Features */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-5 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a48c]/10 text-[#00a48c] text-[11px] font-mono font-bold uppercase tracking-wider">
                <span>THE INBOX & PLATFORM</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0e0f10] font-display tracking-tight leading-tight">
                Designed for teams. <br />
                Built for growth.
              </h2>

              <p className="text-sm sm:text-base text-[#55585f] leading-relaxed">
                From fast-growing manufacturers to multi-city sales teams, eBizChat centralizes every customer interaction into an accountable, audit-proof platform.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0e0f10] font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#00a48c]/15 text-[#00a48c] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>Official Meta WhatsApp Business Cloud Tier 4 API</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0e0f10] font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#00a48c]/15 text-[#00a48c] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>Multi-Agent Collision Lock with live typing warnings</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0e0f10] font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#00a48c]/15 text-[#00a48c] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>Instant First-Response SLA tracking & escalation rules</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0e0f10] font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#00a48c]/15 text-[#00a48c] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>Native 2-Way Synchronization with Orizer ERP & Tally Prime</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-black/15 text-[#0e0f10] hover:text-[#00a48c] hover:border-[#00a48c] font-bold text-xs shadow-sm transition-all hover:translate-x-1"
                >
                  <span>Explore all features</span>
                  <ArrowRight className="w-4 h-4 text-[#00a48c]" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Interactive Analytics Overview Mockup */}
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
      <section className="py-20 lg:py-28 border-b border-black/[0.06] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Interactive Workflow Builder Mockup */}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3b00]/10 text-[#ff3b00] text-[11px] font-mono font-bold uppercase tracking-wider">
                <span>AI-POWERED AUTOMATION</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0e0f10] font-display tracking-tight leading-tight">
                Automate conversations. <br />
                <span className="text-[#00a48c]">
                  Delight customers.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#55585f] leading-relaxed">
                Empower your business to respond within 15 seconds. Our visual drag-and-drop workflow canvas lets anyone deploy enterprise automation in minutes.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0e0f10] font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#00a48c]/15 text-[#00a48c] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>AI-powered customer qualification & budget scoring</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0e0f10] font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#00a48c]/15 text-[#00a48c] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>Automated dispatch notifications & GST invoice delivery</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0e0f10] font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#00a48c]/15 text-[#00a48c] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>Dynamic product catalogs with instant WhatsApp checkout</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0e0f10] font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#00a48c]/15 text-[#00a48c] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>Instant escalation to human reps for VIP deals</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenDemoModal}
                  className="px-6 py-3 rounded-2xl bg-[#00a48c] hover:bg-[#008a76] text-white font-bold text-xs shadow-md shadow-[#00a48c]/25 transition-all flex items-center gap-2"
                >
                  <span>Build your first workflow</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. SOLUTIONS FOR EVERY INDUSTRY (EXACT ICONS WITH ORIZER ACCENTS)
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-b border-black/[0.06] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#00a48c] block mb-3">
              VERTICAL SPECIALIZATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0e0f10] font-display tracking-tight">
              Solutions for{' '}
              <span className="text-[#00a48c]">
                every industry
              </span>
            </h2>
            <p className="mt-4 text-[#55585f] text-sm sm:text-base max-w-xl mx-auto">
              Pre-built conversational playbooks designed for specific commercial workflows and customer expectations.
            </p>
          </motion.div>

          {/* 7 Circular Nodes with Tactile Glow */}
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
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border border-black/10 bg-white flex items-center justify-center text-[#55585f] group-hover:border-[#00a48c] group-hover:text-[#00a48c] group-hover:bg-[#00a48c]/5 shadow-sm transition-all duration-200">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#0e0f10] group-hover:text-[#00a48c] transition-colors font-display">
                E-commerce
              </span>
            </motion.div>

            {/* 2. Healthcare */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border border-black/10 bg-white flex items-center justify-center text-[#55585f] group-hover:border-[#00a48c] group-hover:text-[#00a48c] group-hover:bg-[#00a48c]/5 shadow-sm transition-all duration-200">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#0e0f10] group-hover:text-[#00a48c] transition-colors font-display">
                Healthcare
              </span>
            </motion.div>

            {/* 3. Education */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border border-black/10 bg-white flex items-center justify-center text-[#55585f] group-hover:border-[#00a48c] group-hover:text-[#00a48c] group-hover:bg-[#00a48c]/5 shadow-sm transition-all duration-200">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#0e0f10] group-hover:text-[#00a48c] transition-colors font-display">
                Education
              </span>
            </motion.div>

            {/* 4. Real Estate */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border border-black/10 bg-white flex items-center justify-center text-[#55585f] group-hover:border-[#00a48c] group-hover:text-[#00a48c] group-hover:bg-[#00a48c]/5 shadow-sm transition-all duration-200">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#0e0f10] group-hover:text-[#00a48c] transition-colors font-display">
                Real Estate
              </span>
            </motion.div>

            {/* 5. Travel & Hospitality */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border border-black/10 bg-white flex items-center justify-center text-[#55585f] group-hover:border-[#00a48c] group-hover:text-[#00a48c] group-hover:bg-[#00a48c]/5 shadow-sm transition-all duration-200">
                <Plane className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#0e0f10] group-hover:text-[#00a48c] transition-colors font-display">
                Travel & Hospitality
              </span>
            </motion.div>

            {/* 6. Finance */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border border-black/10 bg-white flex items-center justify-center text-[#55585f] group-hover:border-[#00a48c] group-hover:text-[#00a48c] group-hover:bg-[#00a48c]/5 shadow-sm transition-all duration-200">
                <Landmark className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#0e0f10] group-hover:text-[#00a48c] transition-colors font-display">
                Finance
              </span>
            </motion.div>

            {/* 7. and more (Manufacturing ERP highlight) */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border border-[#00a48c]/40 bg-[#00a48c]/10 flex items-center justify-center text-[#00a48c] group-hover:border-[#00a48c] group-hover:bg-[#00a48c] group-hover:text-white shadow-sm transition-all duration-200">
                <MoreHorizontal className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#00a48c] transition-colors font-display">
                Manufacturing & More →
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          7. HIGH-CONVERTING ORIZER CTA BANNER
      ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[36px] bg-gradient-to-r from-[#006f5f] via-[#00a48c] to-[#008a76] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl text-white border border-white/10"
          >
            {/* Background glowing rings */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#ff3b00]/20 blur-2xl pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              {/* Left Title */}
              <div className="max-w-xl text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-mono font-semibold mb-4 backdrop-blur-sm">
                  <span>✦ Start converting today</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-[1.1]">
                  Ready to transform your <br />
                  WhatsApp conversations?
                </h2>
              </div>

              {/* Right Description & Buttons */}
              <div className="flex flex-col items-start lg:items-end gap-5">
                <p className="text-emerald-50 text-sm sm:text-base font-normal text-left lg:text-right max-w-md">
                  Join thousands of businesses growing faster with <span className="font-semibold text-white">eBizChat by Orizer</span>. Zero setup fees, 14-day free trial.
                </p>

                <div className="flex flex-wrap items-center gap-3.5">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onOpenContactModal}
                    className="px-7 py-3.5 rounded-2xl bg-white text-[#006f5f] hover:bg-neutral-100 font-bold text-xs shadow-lg transition-all"
                  >
                    Start Free trial
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onOpenDemoModal}
                    className="px-6 py-3.5 rounded-2xl bg-transparent text-white border border-white hover:bg-white/10 font-bold text-xs transition-all flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Book a demo</span>
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
