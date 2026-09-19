import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  MessageSquare,
  GitBranch,
  FileText,
  Truck,
  CheckCircle2,
  Users,
  Database,
  ArrowRight,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Send,
  MoreHorizontal,
  FileCheck,
} from 'lucide-react';

export default function TypebotHeroCanvas() {
  // Active selected branch in the interactive demo
  // 'catalog' | 'dispatch' | 'sales'
  const [selectedBranch, setSelectedBranch] = useState('catalog');
  const [activeStep, setActiveStep] = useState(2); // 1: initial, 2: selected branch response
  const [activeViewMode, setActiveViewMode] = useState('both'); // for mobile tab toggle: 'builder' | 'simulator'

  const branches = {
    catalog: {
      id: 'catalog',
      userChoice: 'Wholesale Catalog & Pricing',
      botReply: 'Here is our latest 2026 Product Specification Catalog with commercial tier discounts.',
      attachment: {
        type: 'pdf',
        name: 'Orizer_Wholesale_Catalog_2026.pdf',
        size: '3.4 MB',
        tag: 'PDF Catalog',
      },
      erpSync: 'Lead scored: ₹5L+ Wholesale · Deal created in CRM',
      activeNode: 'node-catalog',
    },
    dispatch: {
      id: 'dispatch',
      userChoice: 'Order Status & LR Copy',
      botReply: 'PO #OZ-8821 dispatched today via V-Trans Cargo (Tracking #VT-994201). Consignment is in transit.',
      attachment: {
        type: 'lr',
        name: 'LR_Consignment_8821.pdf',
        size: '184 KB',
        tag: 'Signed LR Copy',
      },
      erpSync: 'Real-time Orizer ERP query · Dispatched at 10:15 AM',
      activeNode: 'node-dispatch',
    },
    sales: {
      id: 'sales',
      userChoice: 'Connect with Sales Specialist',
      botReply: 'Connecting you with Suresh K. (Senior Enterprise Solutions Lead, West Zone). Standby...',
      attachment: {
        type: 'rep',
        name: 'Suresh Kumar (Sales Lead)',
        size: 'Avg reply: 45 sec',
        tag: 'Live Human Rep',
      },
      erpSync: 'Collision avoidance locked · Internal note sent to Suresh',
      activeNode: 'node-sales',
    },
  };

  const currentBranchData = branches[selectedBranch];

  const handleSelectChoice = (branchKey) => {
    setSelectedBranch(branchKey);
    setActiveStep(2);
  };

  const handleReset = () => {
    setSelectedBranch('catalog');
    setActiveStep(1);
    setTimeout(() => setActiveStep(2), 600);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto select-none">
      {/* Ambient Radial Backdrop Glow */}
      <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-[#ff5500]/15 via-amber-500/10 to-transparent rounded-3xl blur-3xl -z-10 pointer-events-none" />

      {/* Top Experience Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 text-white rounded-t-2xl border border-slate-800 text-xs shadow-md">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] text-slate-400 pl-2 border-l border-slate-700">
            eBizChat Studio · Visual Conversational Flow Builder
          </span>
          <span className="sm:hidden font-mono text-[11px] text-slate-300">
            Flow Studio
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile switcher: Builder vs Phone */}
          <div className="lg:hidden flex items-center bg-zinc-800 p-0.5 rounded-lg text-[10px] font-semibold">
            <button
              onClick={() => setActiveViewMode('builder')}
              className={`px-2 py-1 rounded-md transition-all ${
                activeViewMode === 'builder'
                  ? 'bg-[#ff5500] text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Flow Canvas
            </button>
            <button
              onClick={() => setActiveViewMode('simulator')}
              className={`px-2 py-1 rounded-md transition-all ${
                activeViewMode === 'simulator'
                  ? 'bg-[#ff5500] text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Live Phone
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-[#ff5500]">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
            <span>Interactive Simulator</span>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-[11px] font-mono transition-colors"
            title="Reset simulation to initial state"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden md:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Main Dual Studio: Flow Canvas (Left) + Interactive Phone (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-b-2xl border-x border-b border-zinc-200/90 shadow-[0_25px_60px_-15px_rgba(10,10,10,0.1)] overflow-hidden">
        {/* ─── LEFT: TYPEBOT-STYLE NODE FLOW CANVAS ─── */}
        <div
          className={`lg:col-span-7 p-4 sm:p-6 bg-[#fcfbf8] border-b lg:border-b-0 lg:border-r border-zinc-200 relative overflow-hidden bg-dot-grid ${
            activeViewMode === 'simulator' ? 'hidden lg:block' : 'block'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-950 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#ff5500]" />
                No-Code Node Tree
              </span>
              <span className="text-[11px] text-zinc-500 font-mono hidden sm:inline">
                Flow: Inbound_Lead_Funnels_v2
              </span>
            </div>
            <span className="text-[10px] text-zinc-400 font-mono">
              Click buttons on right to trigger flow ➔
            </span>
          </div>

          {/* Node 1: Trigger Node */}
          <div className="space-y-3 relative">
            <div className="bg-white rounded-xl border border-zinc-200 p-3 shadow-xs hover:shadow-sm transition-all max-w-[420px]">
              <div className="flex items-center justify-between text-[11px] font-bold text-zinc-900 mb-1">
                <div className="flex items-center gap-1.5 text-[#ff5500]">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>1. Trigger: Inbound WhatsApp Inquiry</span>
                </div>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-orange-50 text-[#ff5500] border border-orange-200 font-bold">
                  EVENT
                </span>
              </div>
              <p className="text-[11px] text-zinc-500">
                Customer sends WhatsApp message or clicks "Send WhatsApp" Ad on Meta.
              </p>
            </div>

            {/* Connecting Wire */}
            <div className="w-0.5 h-4 bg-[#ff5500]/50 ml-6 relative">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] absolute -bottom-1 -left-[2px] animate-pulse" />
            </div>

            {/* Node 2: Message Bubble + Question */}
            <div className="bg-white rounded-xl border border-zinc-200 p-3 shadow-xs hover:shadow-sm transition-all max-w-[440px]">
              <div className="flex items-center justify-between text-[11px] font-bold text-zinc-900 mb-1">
                <div className="flex items-center gap-1.5 text-zinc-800">
                  <MessageSquare className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>2. Send Message with Quick-Reply Buttons</span>
                </div>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-zinc-100 text-zinc-600">
                  PROMPT
                </span>
              </div>
              <div className="bg-zinc-50 rounded-lg p-2 text-[11px] text-zinc-700 font-mono border border-zinc-100">
                "Hello! Welcome to Orizer eBizChat. What are you looking to do today?"
              </div>
            </div>

            {/* Connecting Wire */}
            <div className="w-0.5 h-4 bg-[#ff5500]/50 ml-6 relative">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] absolute -bottom-1 -left-[2px]" />
            </div>

            {/* Node 3: Conditional Multi-Branch */}
            <div className="bg-white rounded-xl border border-zinc-200 p-3.5 shadow-xs">
              <div className="flex items-center justify-between text-[11px] font-bold text-zinc-900 mb-2">
                <div className="flex items-center gap-1.5 text-zinc-800">
                  <GitBranch className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>3. Branch Logic (User Choice Selection)</span>
                </div>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-orange-50 text-[#ff5500] border border-orange-200 font-bold">
                  ROUTER
                </span>
              </div>

              {/* 3 Interactive Branches */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                {/* Branch A: Catalog */}
                <button
                  onClick={() => handleSelectChoice('catalog')}
                  className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer ${
                    selectedBranch === 'catalog'
                      ? 'bg-orange-50/90 border-[#ff5500] ring-2 ring-[#ff5500]/30 shadow-xs'
                      : 'bg-zinc-50 border-zinc-200 hover:bg-white hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-[11px] text-zinc-900 mb-0.5">
                    <span>Wholesale</span>
                    <span className="text-[9px] font-mono text-[#ff5500] font-bold">Branch A</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 leading-tight">
                    Send 2026 PDF specs & auto-qualify deal volume.
                  </p>
                </button>

                {/* Branch B: Dispatch */}
                <button
                  onClick={() => handleSelectChoice('dispatch')}
                  className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer ${
                    selectedBranch === 'dispatch'
                      ? 'bg-orange-50/90 border-[#ff5500] ring-2 ring-[#ff5500]/30 shadow-xs'
                      : 'bg-zinc-50 border-zinc-200 hover:bg-white hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-[11px] text-zinc-900 mb-0.5">
                    <span>Order Status</span>
                    <span className="text-[9px] font-mono text-[#ff5500] font-bold">Branch B</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 leading-tight">
                    Query Orizer ERP for live LR & dispatch ETA.
                  </p>
                </button>

                {/* Branch C: Sales Rep */}
                <button
                  onClick={() => handleSelectChoice('sales')}
                  className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer ${
                    selectedBranch === 'sales'
                      ? 'bg-orange-50/90 border-[#ff5500] ring-2 ring-[#ff5500]/30 shadow-xs'
                      : 'bg-zinc-50 border-zinc-200 hover:bg-white hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-[11px] text-zinc-900 mb-0.5">
                    <span>Live Rep</span>
                    <span className="text-[9px] font-mono text-[#ff5500] font-bold">Branch C</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 leading-tight">
                    Assign rep with collision lock & team note.
                  </p>
                </button>
              </div>
            </div>

            {/* Connecting Wire */}
            <div className="w-0.5 h-4 bg-[#ff5500]/50 ml-6 relative">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] absolute -bottom-1 -left-[2px]" />
            </div>

            {/* Node 4: Active Resolution & Enterprise ERP Action */}
            <motion.div
              key={selectedBranch}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-[#0a0a0a] text-white rounded-xl p-3.5 shadow-md border border-zinc-800"
            >
              <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                <div className="flex items-center gap-1.5 text-[#ff5500]">
                  <Database className="w-3.5 h-3.5" />
                  <span>4. Instant Backend Sync · Orizer Ecosystem</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-700">
                  LIVE ACTION
                </span>
              </div>
              <p className="text-xs text-zinc-200 font-mono">
                {currentBranchData.erpSync}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ─── RIGHT: LIVE INTERACTIVE WHATSAPP SIMULATOR ─── */}
        <div
          className={`lg:col-span-5 p-4 sm:p-6 flex flex-col items-center justify-center bg-slate-100/60 relative ${
            activeViewMode === 'builder' ? 'hidden lg:flex' : 'flex'
          }`}
        >
          {/* Phone Mockup Frame */}
          <div className="w-full max-w-[285px] sm:max-w-[300px] select-none">
            <div className="relative bg-slate-950 rounded-[44px] p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.15)] ring-1 ring-black/40">
              {/* iPhone Side Buttons */}
              <div className="hidden sm:block absolute -left-[3px] top-24 w-[3px] h-8 bg-slate-700 rounded-l-sm" />
              <div className="hidden sm:block absolute -left-[3px] top-36 w-[3px] h-8 bg-slate-700 rounded-l-sm" />
              <div className="hidden sm:block absolute -right-[3px] top-28 w-[3px] h-12 bg-slate-700 rounded-r-sm" />

              {/* Inner Screen */}
              <div className="bg-[#efeae2] rounded-[36px] overflow-hidden flex flex-col border border-black/80 text-slate-800 text-xs">
                {/* iOS Dynamic Island & Status Bar */}
                <div className="pt-2 px-5 pb-1 flex items-center justify-between text-[10px] font-semibold text-white/90 bg-[#128C7E]">
                  <span className="font-mono text-[11px]">9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full flex items-center justify-between px-2">
                    <div className="w-2 h-2 rounded-full bg-slate-900" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <span className="text-[9px] font-bold">5G 100%</span>
                </div>

                {/* WhatsApp App Header with Verified Green Tick */}
                <div className="px-3 py-2 bg-[#075E54] text-white flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/15 border border-emerald-400/40 flex items-center justify-center font-black text-[10px]">
                      eB
                    </div>
                    <div>
                      <div className="font-bold text-[11px] flex items-center gap-1 leading-none">
                        <span>eBizChat Official</span>
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center text-[8px] font-black" title="Verified Business">
                          ✓
                        </span>
                      </div>
                      <span className="text-[9px] text-emerald-200 block leading-none mt-0.5">
                        WhatsApp Verified Business
                      </span>
                    </div>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-white/70" />
                </div>

                {/* Chat Message Stream */}
                <div className="p-3 space-y-2.5 min-h-[360px] max-h-[420px] overflow-y-auto text-[11px]">
                  {/* Today Pill */}
                  <div className="text-center">
                    <span className="px-2 py-0.5 rounded-md bg-white/80 text-slate-500 font-mono text-[9px] uppercase tracking-wider shadow-2xs">
                      Today
                    </span>
                  </div>

                  {/* Message 1: Initial Bot Greeting */}
                  <div className="flex justify-start">
                    <div className="max-w-[90%] bg-white rounded-xl rounded-tl-xs p-2.5 shadow-2xs space-y-1">
                      <div className="text-[9px] font-bold text-emerald-700 flex items-center gap-1">
                        <span>🤖 Orizer Flow Engine</span>
                        <span className="text-slate-400 font-normal">· Instant</span>
                      </div>
                      <p className="leading-snug">
                        Hello! Welcome to <span className="font-semibold text-slate-900">Orizer eBizChat</span>.
                      </p>
                      <p className="leading-snug text-slate-600">
                        What are you looking to do today?
                      </p>
                      <span className="text-[8px] text-slate-400 block text-right font-mono">09:40 AM</span>
                    </div>
                  </div>

                  {/* Interactive Option Chips inside Chat */}
                  <div className="space-y-1 pl-1">
                    <span className="text-[9px] text-slate-500 font-mono block">Tap an option to test:</span>
                    <button
                      onClick={() => handleSelectChoice('catalog')}
                      className={`w-full py-1.5 px-2.5 rounded-lg text-[10px] font-semibold text-left transition-all border flex items-center justify-between ${
                        selectedBranch === 'catalog'
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50'
                      }`}
                    >
                      <span>1. Wholesale Catalog & Pricing</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => handleSelectChoice('dispatch')}
                      className={`w-full py-1.5 px-2.5 rounded-lg text-[10px] font-semibold text-left transition-all border flex items-center justify-between ${
                        selectedBranch === 'dispatch'
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50'
                      }`}
                    >
                      <span>2. Order Status & LR Copy</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => handleSelectChoice('sales')}
                      className={`w-full py-1.5 px-2.5 rounded-lg text-[10px] font-semibold text-left transition-all border flex items-center justify-between ${
                        selectedBranch === 'sales'
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50'
                      }`}
                    >
                      <span>3. Connect with Live Sales Rep</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Message 2: Customer Selected Response */}
                  <AnimatePresence mode="wait">
                    {activeStep >= 2 && (
                      <motion.div
                        key={selectedBranch + '-user'}
                        initial={{ opacity: 0, scale: 0.95, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-end"
                      >
                        <div className="max-w-[85%] bg-[#d9fdd3] rounded-xl rounded-tr-xs p-2 shadow-2xs">
                          <p className="leading-snug font-medium text-slate-900">
                            {currentBranchData.userChoice}
                          </p>
                          <div className="flex items-center justify-end gap-1 text-[8px] text-slate-500 mt-0.5">
                            <span>09:41 AM</span>
                            <span className="text-emerald-700 font-bold">✓✓</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Message 3: Bot Dynamic Reply & Rich Media Card */}
                  <AnimatePresence mode="wait">
                    {activeStep >= 2 && (
                      <motion.div
                        key={selectedBranch + '-bot'}
                        initial={{ opacity: 0, scale: 0.95, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="flex justify-start space-y-1.5 flex-col"
                      >
                        <div className="max-w-[92%] bg-white rounded-xl rounded-tl-xs p-2.5 shadow-2xs space-y-2">
                          <p className="leading-snug text-slate-800">
                            {currentBranchData.botReply}
                          </p>

                          {/* Dynamic Attachment Card */}
                          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/90 flex items-center gap-2">
                            <div className="w-7 h-7 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold text-[9px] flex-shrink-0">
                              {currentBranchData.attachment.type === 'pdf' ? (
                                <FileText className="w-3.5 h-3.5" />
                              ) : currentBranchData.attachment.type === 'lr' ? (
                                <Truck className="w-3.5 h-3.5" />
                              ) : (
                                <Users className="w-3.5 h-3.5" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-slate-900 text-[10px] truncate">
                                {currentBranchData.attachment.name}
                              </div>
                              <div className="text-[8px] text-emerald-700 font-medium">
                                {currentBranchData.attachment.size} · {currentBranchData.attachment.tag}
                              </div>
                            </div>
                          </div>

                          <span className="text-[8px] text-slate-400 block text-right font-mono">09:41 AM</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* iOS Bottom Input Bar */}
                <div className="p-2 bg-[#f0f2f5] border-t border-slate-200 flex items-center gap-1.5">
                  <div className="flex-1 bg-white rounded-full px-3 py-1 text-[10px] text-slate-400 border border-slate-200">
                    Type a reply...
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#128C7E] text-white flex items-center justify-center">
                    <Send className="w-3 h-3" />
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="py-1 bg-[#f0f2f5] flex items-center justify-center">
                  <div className="w-16 h-1 bg-slate-400/80 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Live Indicator Pills under Phone */}
          <div className="mt-3 flex items-center gap-2 text-[10px] text-zinc-600 font-mono">
            <span className="inline-block w-2 h-2 rounded-full bg-[#ff5500] animate-ping" />
            <span>Interactive Demo · Tap options above to test live</span>
          </div>
        </div>
      </div>
    </div>
  );
}
