import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Bot,
  Users,
  Database,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Filter,
  CheckCheck,
  Layers,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';

/**
 * CustomerConversationsVisual - Custom Code Component
 * Replaces the incorrect static image in "Everything You Need to Build Better Customer Conversations".
 * An interactive, Typebot-styled visual pipeline demonstrating eBizChat's multi-stage conversational engine:
 * 1. WhatsApp Inbound -> 2. AI Lead Qualification -> 3. Agent Inbox Routing -> 4. 2-Way Orizer ERP Sync.
 */
export default function CustomerConversationsVisual() {
  const [activeStage, setActiveStage] = useState('qualify');

  const stages = [
    {
      id: 'inbound',
      title: '1. Inbound Stream',
      subtitle: 'Meta Cloud API',
      icon: MessageSquare,
      color: '#25D366',
    },
    {
      id: 'qualify',
      title: '2. Smart Qualification',
      subtitle: 'Intent & Lead Scoring',
      icon: Bot,
      color: '#ff5500',
    },
    {
      id: 'inbox',
      title: '3. Multi-Agent Routing',
      subtitle: 'Collision-Safe Inbox',
      icon: Users,
      color: '#ff7747',
    },
    {
      id: 'erp',
      title: '4. 2-Way ERP Sync',
      subtitle: 'Orizer Enterprise Live',
      icon: Database,
      color: '#0a0a0a',
    },
  ];

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl border border-zinc-200/90 bg-white shadow-xl shadow-zinc-950/5 overflow-hidden select-none">
      {/* Studio Header Bar */}
      <div className="bg-[#0a0a0a] px-4 sm:px-6 py-3.5 border-b border-zinc-800 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono font-medium text-zinc-300 ml-2 hidden sm:inline">
            eBizChat Conversational Architecture
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ff5500]/20 border border-[#ff5500]/40 text-[#ff5500] text-[10px] font-mono font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-pulse" />
            Live Engine Active
          </span>
        </div>
      </div>

      {/* Stage Selector Pills */}
      <div className="bg-[#fcfbf8] border-b border-zinc-200 p-2 sm:p-3 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 min-w-max">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0a0a0a] text-white shadow-md'
                    : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200/80'
                }`}
              >
                <div
                  className="w-5 h-5 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: stage.color }}
                >
                  <Icon className="w-3 h-3" />
                </div>
                <div className="text-left">
                  <div className="font-bold leading-tight">{stage.title}</div>
                  <div className="text-[10px] opacity-70 font-mono hidden sm:block">
                    {stage.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Visual Canvas Area */}
      <div className="p-4 sm:p-6 bg-radial from-white via-[#fcfbf8] to-[#f7f5f0] min-h-[320px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {activeStage === 'inbound' && (
            <motion.div
              key="stage-inbound"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 max-w-lg mx-auto w-full"
            >
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2 mb-3">
                  <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    Official Meta WhatsApp Cloud API Stream
                  </span>
                  <span className="text-[10px] font-mono font-bold text-zinc-400">0.08s latency</span>
                </div>
                {/* Simulated Inbound WhatsApp Bubble */}
                <div className="bg-[#DCF8C6] p-3 rounded-xl rounded-tr-none text-zinc-900 text-xs shadow-xs max-w-[88%] ml-auto">
                  <p className="font-medium">
                    "Hi, we need 500 units of Industrial Pump Casing OZ-880. Can you share specs and delivery schedule?"
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-zinc-500">
                    <span>11:42 AM</span>
                    <CheckCheck className="w-3 h-3 text-sky-600" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3 rounded-xl bg-white border border-zinc-200">
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block">Capture Channel</span>
                  <span className="text-xs font-bold text-zinc-900">Click-to-WhatsApp Ad</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-zinc-200">
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block">UTM Source</span>
                  <span className="text-xs font-bold text-[#ff5500]">google_cpc_machinery</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeStage === 'qualify' && (
            <motion.div
              key="stage-qualify"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3.5 max-w-lg mx-auto w-full"
            >
              {/* Bot Qualification Logic Node */}
              <div className="rounded-xl border-2 border-[#ff5500]/30 bg-orange-50/40 p-4 shadow-sm text-left">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#ff5500] text-white flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-950">Intelligent Qualifier Bot</h4>
                      <p className="text-[10px] text-zinc-500">Extracts quantity, budget & urgency in 3 prompts</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#ff5500] text-white text-[10px] font-mono font-bold">
                    Score: 92/100
                  </span>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-orange-200/60 font-mono text-[11px]">
                  <div className="flex justify-between text-zinc-700">
                    <span>Verified Intent:</span>
                    <span className="font-bold text-zinc-950">Bulk Procurement</span>
                  </div>
                  <div className="flex justify-between text-zinc-700">
                    <span>Estimated Deal Value:</span>
                    <span className="font-bold text-[#ff5500]">₹6,25,000 (Tier A)</span>
                  </div>
                  <div className="flex justify-between text-zinc-700">
                    <span>Auto-Action:</span>
                    <span className="text-emerald-700 font-semibold">Priority Routing Triggered</span>
                  </div>
                </div>
              </div>

              {/* Bot Prompt Reply */}
              <div className="bg-white border border-zinc-200 p-3 rounded-xl text-left text-xs">
                <div className="text-[10px] font-mono text-zinc-400 mb-1">Bot Automated Response:</div>
                <p className="text-zinc-800 font-medium">
                  "Specification sheet for OZ-880 dispatched. I am connecting you with Vikram (Industrial Pump Lead) right away."
                </p>
              </div>
            </motion.div>
          )}

          {activeStage === 'inbox' && (
            <motion.div
              key="stage-inbox"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3.5 max-w-lg mx-auto w-full text-left"
            >
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 text-white font-bold text-xs flex items-center justify-center">
                      VK
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-900">Vikram K. (West Zone Lead)</div>
                      <div className="text-[10px] text-zinc-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Rep Active Now · Collision Lock Engaged
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 font-mono text-[10px] font-bold">
                    Round-Robin Match
                  </span>
                </div>

                {/* Team Private Internal Note */}
                <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-[11px] text-amber-900 mb-2">
                  <span className="font-bold">🔒 Private Note (Hidden from client):</span> Client requested 500 units by next Friday. Offered 12% wholesale margin approved by management.
                </div>

                <div className="flex items-center justify-between text-[11px] text-zinc-600 font-mono pt-1">
                  <span>First Response SLA: <strong className="text-zinc-950">28 seconds</strong></span>
                  <span className="text-emerald-600 font-bold">✓ Zero Duplicate Replies</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeStage === 'erp' && (
            <motion.div
              key="stage-erp"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3.5 max-w-lg mx-auto w-full text-left"
            >
              <div className="rounded-xl border border-zinc-900 bg-[#0a0a0a] text-white p-4 shadow-lg">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#ff5500]" />
                    <span className="text-xs font-bold font-mono">Orizer Enterprise ERP Synced</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/80 text-[10px] font-mono">
                    2-Way Live Sync
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-[11px] font-mono mb-3">
                  <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-400 block text-[10px]">ERP Sales Order</span>
                    <span className="font-bold text-white">#SO-2026-9941</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-400 block text-[10px]">Inventory Check</span>
                    <span className="font-bold text-emerald-400">Available (Vapi Plant)</span>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-zinc-900/90 border border-zinc-800 text-[11px] text-zinc-300 flex items-center justify-between">
                  <span>Auto-PDF Invoice generated & sent to customer via WhatsApp API</span>
                  <CheckCircle2 className="w-4 h-4 text-[#ff5500] flex-shrink-0" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Summary Banner */}
      <div className="bg-[#fcfbf8] px-4 sm:px-6 py-3 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-600">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
          <span className="font-medium text-zinc-900">
            Click any stage above to inspect live pipeline data transformation.
          </span>
        </div>
        <span className="font-mono text-[11px] text-zinc-500">
          Native 2-Way Sync with Orizer ERP
        </span>
      </div>
    </div>
  );
}
