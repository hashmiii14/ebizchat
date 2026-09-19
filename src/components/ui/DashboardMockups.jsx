import React, { useState } from 'react';
import {
  Inbox,
  Users,
  Filter,
  CheckCircle2,
  Clock,
  ArrowRight,
  GitBranch,
  BarChart3,
  Search,
  Tag,
  Paperclip,
  Send,
  MoreHorizontal,
  DollarSign,
  TrendingUp,
  FileCheck,
  ShieldAlert,
} from 'lucide-react';

export function TeamInboxMockup() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-float overflow-hidden text-xs">
      {/* Top Application Bar */}
      <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="text-slate-400 font-mono text-[11px]">Orizer eBizChat · Shared Team Inbox (Production)</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-brand-400">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
          <span>WhatsApp API: Connected (99.9% Uptime)</span>
        </div>
      </div>

      {/* 3-Column SaaS Interface with mobile horizontal scroll containment */}
      <div className="overflow-x-auto w-full">
        <div className="grid grid-cols-12 h-[480px] min-w-[760px] md:min-w-0">
        {/* Left Column: Conversation List */}
        <div className="col-span-12 md:col-span-4 border-r border-slate-200 flex flex-col bg-slate-50/50">
          <div className="p-3 border-b border-slate-200 bg-white">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                readOnly
                value="Search dealer, PO number, or GSTIN..."
                className="w-full pl-8 pr-3 py-1.5 bg-slate-100 rounded-lg text-slate-600 text-xs border border-transparent focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-1 mt-2">
              <button className="px-2 py-0.5 rounded bg-brand-50 text-brand-700 font-semibold border border-brand-200">
                All (24)
              </button>
              <button className="px-2 py-0.5 rounded text-slate-500 hover:bg-slate-100">
                Assigned to Me (8)
              </button>
              <button className="px-2 py-0.5 rounded text-slate-500 hover:bg-slate-100">
                Urgent Dispatch (3)
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
            {/* Conversation Item 1 */}
            <div className="p-3 bg-brand-50/40 border-l-4 border-brand-600 cursor-pointer">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-slate-900 text-xs truncate">
                  Apex Dynamics (Ahmedabad)
                </span>
                <span className="text-[10px] text-slate-400 font-mono">11:42 AM</span>
              </div>
              <p className="text-slate-600 text-[11px] line-clamp-1 mb-1.5">
                Received the LR copy. Can you also share our ledger balance?
              </p>
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-100 text-emerald-800 font-medium">
                  PO #OZ-8821
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-slate-100 text-slate-700 font-medium">
                  Rep: Suresh K.
                </span>
              </div>
            </div>

            {/* Conversation Item 2 */}
            <div className="p-3 hover:bg-white cursor-pointer">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-slate-900 text-xs truncate">
                  Kalyan Polymers (Surat)
                </span>
                <span className="text-[10px] text-slate-400 font-mono">10:15 AM</span>
              </div>
              <p className="text-slate-500 text-[11px] line-clamp-1 mb-1.5">
                Please dispatch 100 bags of HDPE Granules by Friday.
              </p>
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-amber-100 text-amber-800 font-medium">
                  Quotation Stage
                </span>
              </div>
            </div>

            {/* Conversation Item 3 */}
            <div className="p-3 hover:bg-white cursor-pointer">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-slate-900 text-xs truncate">
                  Bharat Heavy Pumps (Vadodara)
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Yesterday</span>
              </div>
              <p className="text-slate-500 text-[11px] line-clamp-1 mb-1.5">
                Quality Inspection certificate verified. Payment scheduled for Monday.
              </p>
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-slate-100 text-slate-700">
                  QC Approved
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column: Live Conversation Thread */}
        <div className="col-span-12 md:col-span-5 flex flex-col bg-white border-r border-slate-200">
          <div className="p-3 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
            <div>
              <div className="font-semibold text-slate-900 text-xs flex items-center gap-1.5">
                <span>Apex Dynamics Pvt Ltd</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">+91 98251 44320 · GSTIN: 24AAACA1234F1Z5</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="px-2 py-0.5 rounded bg-brand-100 text-brand-800 text-[10px] font-semibold">
                Orizer ERP Synced
              </span>
            </div>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-[#fafafa]">
            {/* System banner */}
            <div className="text-center">
              <span className="bg-slate-200/80 px-2.5 py-0.5 rounded-full text-[10px] text-slate-600 font-mono">
                Order auto-synced from Orizer Manufacturing ERP
              </span>
            </div>

            {/* Chat Messages */}
            <div className="flex flex-col items-start max-w-[85%] bg-white border border-slate-200 rounded-xl rounded-tl-none p-2.5 shadow-subtle">
              <p className="text-slate-800 text-xs">Hi Orizer team, can you check dispatch status for our PO #OZ-8821?</p>
              <span className="text-[9px] text-slate-400 mt-1 self-end">11:40 AM</span>
            </div>

            <div className="flex flex-col items-end max-w-[85%] ml-auto bg-brand-50 border border-brand-200 rounded-xl rounded-tr-none p-2.5 shadow-subtle">
              <p className="text-slate-800 text-xs">
                PO #OZ-8821 dispatched today via V-Trans (LR #994201). ETA: Tomorrow 11:30 AM. Invoice INV-8821 attached.
              </p>
              <span className="text-[9px] text-brand-700 mt-1 flex items-center gap-1">
                <span>11:41 AM · Bot Trigger</span>
                <CheckCircle2 className="w-3 h-3 text-brand-600" />
              </span>
            </div>

            {/* Internal Team Note */}
            <div className="bg-amber-50/90 border border-amber-300 rounded-xl p-2.5 text-[11px] text-amber-900 max-w-[95%] mx-auto">
              <div className="flex items-center justify-between font-semibold text-[10px] mb-1 text-amber-950">
                <span>🔒 Private Internal Note (@Suresh)</span>
                <span>11:42 AM</span>
              </div>
              <p>Client has an open credit line of ₹5,00,000. Finance has cleared the dispatch.</p>
            </div>
          </div>

          {/* Quick Reply Bar */}
          <div className="p-2.5 border-t border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[10px] font-mono text-slate-400">Quick Templates:</span>
              <button className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] hover:bg-slate-200">
                /dispatch-status
              </button>
              <button className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] hover:bg-slate-200">
                /bank-details
              </button>
              <button className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] hover:bg-slate-200">
                /ledger-pdf
              </button>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value="Type reply as Suresh K. or insert dynamic template..."
                className="flex-1 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 text-xs focus:outline-none"
              />
              <button className="px-3 py-1.5 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Customer ERP Profile & Attributes */}
        <div className="col-span-12 md:col-span-3 bg-slate-50/70 p-3.5 space-y-3 overflow-y-auto">
          <div className="pb-2 border-b border-slate-200">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Orizer Customer Record
            </div>
            <div className="font-bold text-slate-900 text-sm">Apex Dynamics Pvt Ltd</div>
            <div className="text-[11px] text-slate-500">Tier 1 Manufacturing Dealer</div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-subtle">
              <span className="text-[10px] text-slate-400 block font-mono">ERP Outstanding</span>
              <span className="font-bold text-base text-slate-900">₹1,48,200</span>
              <span className="text-[10px] text-emerald-600 block">Credit Limit: ₹5,00,000 (Safe)</span>
            </div>

            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-subtle space-y-1.5">
              <span className="text-[10px] text-slate-400 block font-mono">Account Metadata</span>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Assigned Executive:</span>
                <span className="font-medium text-slate-800">Suresh K.</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Sales Region:</span>
                <span className="font-medium text-slate-800">Gujarat / West</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Orizer Customer ID:</span>
                <span className="font-mono text-slate-800">#CUST-9041</span>
              </div>
            </div>

            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-subtle">
              <span className="text-[10px] text-slate-400 block font-mono mb-1">Active Pipeline Deals</span>
              <div className="text-[11px] font-medium text-slate-800">50x Flange Valves</div>
              <div className="text-[10px] text-emerald-600">Stage: Dispatched · ₹2,85,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export function KanbanMockup() {
  const columns = [
    {
      title: "New Inbound Inquiries",
      count: 4,
      color: "border-slate-300",
      leads: [
        { name: "Kalyan Polychem", val: "₹1,80,000", time: "10m ago", source: "WhatsApp Click-to-Chat" },
        { name: "Mehta Auto Gears", val: "₹3,40,000", time: "25m ago", source: "Website Lead Form" },
      ],
    },
    {
      title: "Qualified / Specs Reviewed",
      count: 3,
      color: "border-teal-500",
      leads: [
        { name: "Shivani Engineering", val: "₹4,20,000", time: "2h ago", source: "Catalog Inquiry" },
      ],
    },
    {
      title: "Orizer ERP Quotation Sent",
      count: 5,
      color: "border-amber-400",
      leads: [
        { name: "Gujarat Castings", val: "₹8,50,000", time: "1d ago", source: "Direct Referral" },
        { name: "Surat Power Systems", val: "₹2,10,000", time: "2d ago", source: "Trade Expo QR" },
      ],
    },
    {
      title: "PO Received & Dispatched",
      count: 8,
      color: "border-emerald-500",
      leads: [
        { name: "Apex Dynamics Pvt Ltd", val: "₹2,85,000", time: "Just now", source: "WhatsApp Channel" },
      ],
    },
  ];

  return (
    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-float overflow-x-auto text-xs">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-brand-600" />
          <span className="font-bold text-slate-900 text-sm">LeadGen+ Visual Pipeline</span>
          <span className="px-2 py-0.5 rounded-full bg-brand-100 text-brand-800 text-[10px] font-semibold">
            20 Deals in Progress · ₹22.85 Lakh Total Pipeline
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-500 text-[11px] font-mono">
          <span>Sort: By Highest Deal Value</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 min-w-[700px]">
        {columns.map((col) => (
          <div key={col.title} className="bg-slate-100/80 rounded-xl p-2.5 flex flex-col gap-2">
            <div className={`flex items-center justify-between pb-1.5 border-b-2 ${col.color}`}>
              <span className="font-semibold text-slate-800 text-[11px] truncate">{col.title}</span>
              <span className="px-1.5 py-0.2 rounded-full bg-white text-slate-600 font-mono text-[10px] font-bold">
                {col.count}
              </span>
            </div>

            <div className="space-y-2">
              {col.leads.map((lead) => (
                <div
                  key={lead.name}
                  className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-subtle space-y-1 hover:border-brand-400 transition-colors"
                >
                  <div className="font-semibold text-slate-900 text-xs">{lead.name}</div>
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="font-bold text-emerald-700">{lead.val}</span>
                    <span className="text-slate-400 text-[9px]">{lead.time}</span>
                  </div>
                  <div className="text-[9px] text-slate-500 truncate pt-1 border-t border-slate-100">
                    Source: {lead.source}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorkflowAutomationMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-float p-6 text-xs overflow-hidden">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-brand-600" />
            <h4 className="font-bold text-slate-900 text-sm">Visual Workflow Canvas: Manufacturing Order Dispatch</h4>
          </div>
          <p className="text-slate-500 text-xs mt-0.5">Automated sequence triggered when goods exit factory gate</p>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
          Active Workflow
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
        {/* Step 1: Trigger */}
        <div className="w-full md:w-1/4 bg-slate-50 border-2 border-brand-500 rounded-xl p-3.5 relative shadow-subtle">
          <span className="px-1.5 py-0.5 rounded bg-brand-100 text-brand-800 text-[9px] font-mono font-bold uppercase mb-2 inline-block">
            1. ERP Trigger
          </span>
          <div className="font-bold text-slate-900 text-xs mb-1">Dispatch Entry Created</div>
          <p className="text-slate-500 text-[11px]">Orizer ERP generates invoice & transporter LR number</p>
        </div>

        <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0 rotate-90 md:rotate-0" />

        {/* Step 2: Condition */}
        <div className="w-full md:w-1/4 bg-slate-50 border border-slate-200 rounded-xl p-3.5 relative shadow-subtle">
          <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-800 text-[9px] font-mono font-bold uppercase mb-2 inline-block">
            2. Logic Check
          </span>
          <div className="font-bold text-slate-900 text-xs mb-1">Customer Opt-in & GST Valid?</div>
          <p className="text-slate-500 text-[11px]">Verify registered WhatsApp mobile number on account</p>
        </div>

        <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0 rotate-90 md:rotate-0" />

        {/* Step 3: Action */}
        <div className="w-full md:w-1/4 bg-emerald-50 border border-emerald-300 rounded-xl p-3.5 relative shadow-subtle">
          <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px] font-mono font-bold uppercase mb-2 inline-block">
            3. Instant Action
          </span>
          <div className="font-bold text-slate-900 text-xs mb-1">Send WhatsApp Message</div>
          <p className="text-slate-600 text-[11px]">Dispatch details, LR PDF copy, driver contact & tracking URL</p>
        </div>

        <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0 rotate-90 md:rotate-0" />

        {/* Step 4: Delayed Action */}
        <div className="w-full md:w-1/4 bg-slate-50 border border-slate-200 rounded-xl p-3.5 relative shadow-subtle">
          <span className="px-1.5 py-0.5 rounded bg-teal-100 text-teal-800 text-[9px] font-mono font-bold uppercase mb-2 inline-block">
            4. Smart Nudge
          </span>
          <div className="font-bold text-slate-900 text-xs mb-1">Wait 48h → Delivery Check</div>
          <p className="text-slate-500 text-[11px]">Auto-ask dealer for goods receipt confirmation & rating</p>
        </div>
      </div>
    </div>
  );
}

export function CampaignAnalyticsMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-float p-6 text-xs">
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-brand-600" />
            <h4 className="font-bold text-slate-900 text-sm">Monthly Communication Telemetry & MIS</h4>
          </div>
          <p className="text-slate-500 text-xs mt-0.5">Real-time statistics across broadcasts, dealer notifications, and agent SLAs</p>
        </div>
        <span className="text-slate-400 font-mono text-xs">Period: Last 30 Days</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-[11px] text-slate-500 font-mono block">Messages Dispatched</span>
          <span className="font-bold text-2xl text-slate-900 font-mono">148,920</span>
          <span className="text-[10px] text-emerald-600 font-medium">99.8% Meta Delivery</span>
        </div>
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-[11px] text-slate-500 font-mono block">Average Read Rate</span>
          <span className="font-bold text-2xl text-emerald-600 font-mono">94.2%</span>
          <span className="text-[10px] text-slate-500">Within 15 mins of delivery</span>
        </div>
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-[11px] text-slate-500 font-mono block">First Response Time</span>
          <span className="font-bold text-2xl text-slate-900 font-mono">1m 18s</span>
          <span className="text-[10px] text-emerald-600 font-medium">68% faster than industry avg</span>
        </div>
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-[11px] text-slate-500 font-mono block">Deals Closed via Chat</span>
          <span className="font-bold text-2xl text-brand-700 font-mono">₹48.6 L</span>
          <span className="text-[10px] text-emerald-600 font-medium">Synced with Orizer ERP</span>
        </div>
      </div>

      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-sm">
            MIS
          </div>
          <div>
            <div className="font-semibold text-slate-900">Weekly Executive Management Report</div>
            <div className="text-slate-500 text-[11px]">Includes dealer response velocity, outstanding collections, and lead sources</div>
          </div>
        </div>
        <button className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors">
          Download PDF
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// EXACT REFERENCE SCREENSHOT MOCKUPS (Clean White & Emerald)
// -------------------------------------------------------------

/**
 * 1. HeroVisualMockup: Layered Desktop Web App + Overlapping iPhone Mockup
 */
export function HeroVisualMockup() {
  return (
    <div className="relative w-full max-w-[620px] mx-auto lg:mr-0 select-none">
      {/* Ambient Radial Backdrop Glow (matches social preview visual language) */}
      <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Desktop Web App Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.14)] overflow-hidden text-xs">
        {/* Top App Header (Dark slate top bar matching social preview aesthetic) */}
        <div className="px-3.5 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <div className="flex items-center gap-2 pl-2 border-l border-slate-700">
              <span className="font-mono text-[11px] font-semibold text-slate-300 tracking-wider uppercase">
                eBizChat Console
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                PROD
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="hidden sm:inline">Meta Cloud API 99.9%</span>
          </div>
        </div>

        {/* Secondary Clean White Toolbar */}
        <div className="px-3.5 py-2 bg-white border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-emerald-600 flex items-center justify-center text-white">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.58 3.38 17.07L2.05 21.95L7.07 20.64C8.52 21.5 10.2 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" />
              </svg>
            </div>
            <span className="font-extrabold text-slate-900 tracking-tight text-xs">
              All Inboxes <span className="font-normal text-slate-400 font-mono text-[11px]">(24 active)</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-600 border border-slate-200">
              Orizer ERP Sync: ON
            </span>
          </div>
        </div>

        {/* 2-Column Interface: Conversations list + Active Chat */}
        <div className="grid grid-cols-12 h-[370px] bg-white">
          {/* Left Column: All Conversations */}
          <div className="col-span-5 border-r border-slate-100 flex flex-col bg-slate-50/40">
            <div className="p-2.5 border-b border-slate-100 bg-white">
              <div className="text-[11px] font-bold text-slate-900 mb-1.5 flex items-center justify-between">
                <span>All Conversations</span>
                <span className="text-[10px] text-slate-400 font-mono">24</span>
              </div>
              <div className="flex items-center gap-1 text-[10px]">
                <span className="px-2 py-0.5 rounded font-bold text-emerald-700 bg-emerald-50">
                  Open
                </span>
                <span className="px-2 py-0.5 rounded text-slate-500 hover:text-slate-700">
                  Pending
                </span>
                <span className="px-2 py-0.5 rounded text-slate-500 hover:text-slate-700">
                  Resolved
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-slate-100/80">
              {/* Contact 1 */}
              <div className="p-2.5 hover:bg-white cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-700 flex-shrink-0">
                      RS
                    </span>
                    <span className="font-semibold text-slate-800 text-[11px] truncate">
                      Ryan Smith
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-mono">11:45</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-[10px] text-slate-500 truncate">Can you share the pricing plan?</p>
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 text-white font-bold text-[8px] flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                </div>
              </div>

              {/* Contact 2: Active Selected (Jane Cooper) */}
              <div className="p-2.5 bg-emerald-50/60 border-l-2 border-emerald-600 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
                      JC
                    </span>
                    <span className="font-bold text-slate-900 text-[11px] truncate">
                      Jane Cooper
                    </span>
                  </div>
                  <span className="text-[9px] text-emerald-700 font-semibold font-mono">11:42</span>
                </div>
                <p className="text-[10px] text-slate-600 truncate mt-1 font-medium">
                  Perfect, thank you!
                </p>
              </div>

              {/* Contact 3 */}
              <div className="p-2.5 hover:bg-white cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-700 flex-shrink-0">
                      AF
                    </span>
                    <span className="font-semibold text-slate-800 text-[11px] truncate">
                      Albert Fox
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-mono">10:30</span>
                </div>
                <p className="text-[10px] text-slate-400 truncate mt-1">Looking for ERP integration...</p>
              </div>

              {/* Contact 4 */}
              <div className="p-2.5 hover:bg-white cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-700 flex-shrink-0">
                      CF
                    </span>
                    <span className="font-semibold text-slate-800 text-[11px] truncate">
                      Cody Fisher
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-mono">09:15</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-[10px] text-slate-400 truncate">Campaign delay issues...</p>
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 text-white font-bold text-[8px] flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                </div>
              </div>

              {/* Contact 5 */}
              <div className="p-2.5 hover:bg-white cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-700 flex-shrink-0">
                      EH
                    </span>
                    <span className="font-semibold text-slate-800 text-[11px] truncate">
                      Esther Howard
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-mono">Yesterday</span>
                </div>
                <p className="text-[10px] text-slate-400 truncate mt-1">Thanks for the quick response</p>
              </div>
            </div>
          </div>

          {/* Right Column: Active Chat Thread */}
          <div className="col-span-7 flex flex-col justify-between bg-slate-50/20">
            {/* Thread Header */}
            <div className="px-3.5 py-2 bg-white border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center">
                  JC
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-[11px]">Jane Cooper</div>
                  <div className="text-[9px] text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
                  </div>
                </div>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">WhatsApp API</span>
            </div>

            {/* Chat Thread Messages */}
            <div className="p-3 space-y-2.5 flex-1 overflow-y-auto">
              {/* Incoming Customer Message */}
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-2.5 shadow-xs text-[11px] text-slate-800">
                  <p>Hi, I'm interested in your product. Can you share more details?</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1 font-mono">11:40 AM</span>
                </div>
              </div>

              {/* Outgoing Bot Message */}
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-emerald-600 text-white rounded-2xl rounded-tr-sm p-2.5 shadow-xs text-[11px]">
                  <p>Hello Jane! Here's a quick overview of what we offer.</p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-emerald-100 font-mono">
                    <span>11:41 AM</span>
                    <span>✓✓</span>
                  </div>
                </div>
              </div>

              {/* Attached PDF Card */}
              <div className="flex justify-end">
                <div className="w-60 bg-white border border-slate-200/90 rounded-xl p-2.5 shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 font-bold text-[10px] flex-shrink-0">
                      PDF
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-slate-900 text-[11px] truncate">
                        Product-Overview.pdf
                      </div>
                      <div className="text-[9px] text-emerald-600 font-medium">2.4 MB · Download</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Incoming Customer Reply */}
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-2.5 shadow-xs text-[11px] text-slate-800">
                  <p>Perfect, thank you!</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1 font-mono">11:42 AM</span>
                </div>
              </div>
            </div>

            {/* Bottom Input Field */}
            <div className="p-2.5 bg-white border-t border-slate-100 flex items-center gap-2">
              <input
                type="text"
                readOnly
                value="Type a message..."
                className="flex-1 bg-slate-50 rounded-lg px-3 py-1.5 text-[11px] text-slate-400 border border-slate-200/80 focus:outline-none"
              />
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <Send className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* iPhone 16 Pro Mockup (WhatsApp Business Verified Experience) */}
      <div className="-mt-10 sm:mt-0 sm:absolute sm:-bottom-6 sm:right-0 lg:right-[-6px] xl:right-[-10px] w-[235px] sm:w-[245px] lg:w-[260px] max-w-[85vw] mx-auto sm:mx-0 z-20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl select-none">
        {/* Outer Titanium Frame with Physical Side Buttons */}
        <div className="relative bg-slate-900 rounded-[48px] p-[9px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.15)] ring-1 ring-black/40">
          {/* Physical Side Buttons (Mute / Action / Volume on Left, Power on Right) */}
          <div className="hidden sm:block absolute -left-[3px] top-20 w-[3px] h-6 bg-slate-700 rounded-l-sm"></div>
          <div className="hidden sm:block absolute -left-[3px] top-28 w-[3px] h-10 bg-slate-700 rounded-l-sm"></div>
          <div className="hidden sm:block absolute -left-[3px] top-40 w-[3px] h-10 bg-slate-700 rounded-l-sm"></div>
          <div className="hidden sm:block absolute -right-[3px] top-28 w-[3px] h-14 bg-slate-700 rounded-r-sm"></div>

          {/* OLED Screen Bezel */}
          <div className="bg-[#0b141a] rounded-[40px] overflow-hidden text-slate-100 flex flex-col border border-black/80">
            {/* iOS Status Bar & Dynamic Island */}
            <div className="pt-2 px-5 pb-1 flex items-center justify-between text-[10px] font-semibold text-white/90 bg-[#128C7E]">
              <span className="font-mono text-[11px] tracking-tight">9:41</span>

              {/* Dynamic Island Pill */}
              <div className="w-[84px] h-[20px] bg-black rounded-full flex items-center justify-between px-2 shadow-inner">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              </div>

              {/* iOS Icons */}
              <div className="flex items-center gap-1 text-[9px]">
                <span className="font-bold text-[8px]">5G</span>
                <div className="w-4 h-2 border border-white/80 rounded-xs p-0.5 flex items-center">
                  <div className="h-full w-full bg-emerald-400 rounded-2xs"></div>
                </div>
              </div>
            </div>

            {/* WhatsApp App Header (Meta Verified Green Badge) */}
            <div className="px-3 py-2 bg-[#075E54] text-white flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-emerald-400/40 flex items-center justify-center text-[10px] font-extrabold text-white">
                  eB
                </div>
                <div>
                  <div className="font-bold text-[11px] flex items-center gap-1 leading-none text-white">
                    <span>eBizChat Business</span>
                    {/* Meta Official Green Verification Badge */}
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center text-[8px] font-black" title="Verified WhatsApp Business">
                      ✓
                    </span>
                  </div>
                  <div className="text-[9px] text-emerald-200 mt-0.5 leading-none">
                    Official Business Account
                  </div>
                </div>
              </div>

              {/* Video / Call Action Icons */}
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                </div>
                <MoreHorizontal className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* WhatsApp Chat Body */}
            <div className="p-2.5 bg-[#efeae2] space-y-2 text-[10px] min-h-[220px]">
              {/* Date Pill */}
              <div className="flex justify-center">
                <span className="px-2 py-0.5 rounded-md bg-white/80 shadow-2xs text-[8px] font-semibold text-slate-600 uppercase tracking-wider">
                  Today
                </span>
              </div>

              {/* Outgoing Message (Customer Inquiry) */}
              <div className="flex justify-end">
                <div className="max-w-[88%] bg-[#d9fdd3] text-slate-800 rounded-xl rounded-tr-xs p-2 shadow-2xs">
                  <p className="leading-snug text-[10px]">
                    Hi! Please share the LR copy and live dispatch status for PO #OZ-8821.
                  </p>
                  <div className="flex items-center justify-end gap-1 text-[8px] text-slate-500 mt-0.5">
                    <span>09:40 AM</span>
                    <span className="text-emerald-700 font-bold">✓✓</span>
                  </div>
                </div>
              </div>

              {/* Incoming Bot Message (Instant Automation) */}
              <div className="flex justify-start">
                <div className="max-w-[92%] bg-white text-slate-800 rounded-xl rounded-tl-xs p-2 shadow-2xs">
                  <div className="text-[9px] font-bold text-emerald-800 flex items-center gap-1 mb-1">
                    <span>🤖 Orizer ERP Bot</span>
                    <span className="text-[8px] text-slate-400 font-normal">· Instant</span>
                  </div>
                  <p className="leading-snug text-[10px]">
                    Hello Apex Dynamics! Your consignment is in transit via <span className="font-semibold text-slate-900">V-Trans (Tracking #VT-99201)</span>.
                  </p>

                  {/* Attached PDF Preview Card */}
                  <div className="mt-1.5 p-2 rounded-lg bg-slate-50 border border-slate-200/90 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-rose-500 text-white flex items-center justify-center font-bold text-[9px] flex-shrink-0">
                      PDF
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-slate-900 truncate text-[10px]">
                        LR_Consignment_8821.pdf
                      </div>
                      <div className="text-[8px] text-slate-500">184 KB · Verified Digital Signature</div>
                    </div>
                  </div>

                  {/* Interactive Quick Buttons */}
                  <div className="mt-2 pt-1.5 border-t border-slate-100 flex flex-col gap-1">
                    <button className="w-full py-1 rounded-md bg-emerald-50 text-emerald-700 font-bold text-[9px] text-center hover:bg-emerald-100 transition-colors border border-emerald-200">
                      📍 Live GPS Tracking
                    </button>
                    <button className="w-full py-1 rounded-md bg-slate-100 text-slate-700 font-semibold text-[9px] text-center hover:bg-slate-200 transition-colors">
                      📞 Connect with Dispatch Manager
                    </button>
                  </div>

                  <div className="flex items-center justify-end text-[8px] text-slate-400 mt-1">
                    <span>09:41 AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom iOS Home Indicator */}
            <div className="py-1.5 bg-[#f0f2f5] flex items-center justify-center">
              <div className="w-20 h-1 bg-slate-400/80 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. AnalyticsOverviewMockup: 4 KPI Cards + Clean Dual-Line SVG Graph
 */
export function AnalyticsOverviewMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_12px_36px_-10px_rgba(15,23,42,0.08)] p-6 sm:p-7 text-xs relative overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm tracking-tight">
              Analytics Overview
            </h3>
            <p className="text-[11px] text-slate-500">Live WhatsApp Cloud API performance</p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700 text-[11px] font-medium">
          Last 30 Days ▾
        </span>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100 text-left">
          <div className="text-[11px] text-slate-500 font-medium">Conversations</div>
          <div className="text-xl font-bold text-slate-900 font-mono mt-1">24,531</div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-1 font-mono">
            ↑ 18.2%
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100 text-left">
          <div className="text-[11px] text-slate-500 font-medium">Replies</div>
          <div className="text-xl font-bold text-slate-900 font-mono mt-1">8,742</div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-1 font-mono">
            ↑ 14.1%
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100 text-left">
          <div className="text-[11px] text-slate-500 font-medium">Resolution Rate</div>
          <div className="text-xl font-bold text-slate-900 font-mono mt-1">92.1%</div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-1 font-mono">
            ↑ 4.3%
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100 text-left">
          <div className="text-[11px] text-slate-500 font-medium">Satisfaction</div>
          <div className="text-xl font-bold text-slate-900 font-mono mt-1">4.8/5</div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-1 font-mono">
            ↑ 0.2%
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-5 mb-3 px-1 text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span className="font-semibold text-slate-800">Conversations</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
          <span className="font-semibold text-slate-600">Replies</span>
        </div>
      </div>

      {/* SVG Dual-Line Graph */}
      <div className="relative w-full h-44 bg-slate-50/50 rounded-xl p-3 border border-slate-100 flex flex-col justify-between overflow-hidden">
        <svg className="w-full h-32 overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="tealGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(226,232,240,0.8)" strokeDasharray="3 3" />
          <line x1="0" y1="55" x2="500" y2="55" stroke="rgba(226,232,240,0.8)" strokeDasharray="3 3" />
          <line x1="0" y1="90" x2="500" y2="90" stroke="rgba(226,232,240,0.8)" strokeDasharray="3 3" />

          {/* Replies Curve (Teal) */}
          <path
            d="M 0,80 Q 60,70 120,76 T 240,64 T 360,55 T 500,60 L 500,120 L 0,120 Z"
            fill="url(#tealGradient)"
          />
          <path
            d="M 0,80 Q 60,70 120,76 T 240,64 T 360,55 T 500,60"
            fill="none"
            stroke="#14b8a6"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Conversations Curve (Emerald) */}
          <path
            d="M 0,45 Q 60,25 120,38 T 240,28 T 360,18 T 500,24 L 500,120 L 0,120 Z"
            fill="url(#emeraldGradient)"
          />
          <path
            d="M 0,45 Q 60,25 120,38 T 240,28 T 360,18 T 500,24"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <circle cx="240" cy="28" r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
          <circle cx="360" cy="18" r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
          <circle cx="240" cy="64" r="4" fill="#14b8a6" stroke="#ffffff" strokeWidth="2" />
          <circle cx="360" cy="55" r="4" fill="#14b8a6" stroke="#ffffff" strokeWidth="2" />
        </svg>

        {/* X-Axis Date Tickers */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono px-1">
          <span>May 13</span>
          <span>May 20</span>
          <span>May 27</span>
          <span>Jun 03</span>
          <span>Jun 10</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. WorkflowBuilderMockup: Visual Flowchart Trigger -> AI Route -> Action Branches
 */
export function WorkflowBuilderMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_12px_36px_-10px_rgba(15,23,42,0.08)] p-6 sm:p-7 text-xs relative overflow-hidden select-none">
      {/* Visual Canvas with Left Mini Toolbar */}
      <div className="flex gap-4">
        {/* Left Mini Rail */}
        <div className="w-10 bg-slate-50 border border-slate-100 rounded-xl py-3 flex flex-col items-center gap-3 flex-shrink-0">
          <div className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center shadow-xs">
            <GitBranch className="w-3.5 h-3.5" />
          </div>
          <div className="w-6 h-6 rounded-md text-slate-400 flex items-center justify-center">
            <Inbox className="w-3.5 h-3.5" />
          </div>
          <div className="w-6 h-6 rounded-md text-slate-400 flex items-center justify-center">
            <Filter className="w-3.5 h-3.5" />
          </div>
          <div className="w-6 h-6 rounded-md text-slate-400 flex items-center justify-center">
            <Users className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Diagram Canvas */}
        <div className="flex-1 bg-slate-50/70 rounded-xl border border-dashed border-slate-200 p-5 flex flex-col items-center">
          {/* Node 1: Trigger */}
          <div className="w-60 sm:w-64 bg-white rounded-xl p-3 text-left border border-slate-200/90 shadow-xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span className="font-bold text-slate-900 text-xs">When User Sends Message</span>
            </div>
            <p className="text-[10px] text-slate-500 pl-7">Triggers when a user sends a message</p>
          </div>

          {/* Connector Arrow */}
          <div className="w-0.5 h-6 bg-slate-300 my-1 relative flex items-center justify-center">
            <span className="absolute bottom-0 w-1.5 h-1.5 border-b-2 border-r-2 border-slate-400 rotate-45"></span>
          </div>

          {/* Node 2: Smart AI Route */}
          <div className="w-60 sm:w-64 bg-white rounded-xl p-3 text-left border border-emerald-200 ring-1 ring-emerald-500/20 shadow-xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
                AI
              </span>
              <span className="font-bold text-slate-900 text-xs">Smart AI Route</span>
            </div>
            <p className="text-[10px] text-slate-500 pl-7">Use AI to understand intent & classify</p>
          </div>

          {/* Branching Connectors */}
          <div className="w-48 h-5 relative my-1">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-2.5 bg-slate-300"></div>
            <div className="absolute top-2.5 left-6 right-6 h-0.5 bg-slate-300"></div>
            <div className="absolute top-2.5 left-6 w-0.5 h-2.5 bg-slate-300"></div>
            <div className="absolute top-2.5 right-6 w-0.5 h-2.5 bg-slate-300"></div>
          </div>

          {/* Branches Row */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
            {/* Branch 1: Interested */}
            <div className="bg-white rounded-xl p-2.5 text-left border border-slate-200/90 shadow-xs">
              <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[9px] font-bold uppercase mb-1 inline-block">
                Interested
              </span>
              <div className="font-bold text-slate-900 text-[11px]">Assign to Sales Team</div>
              <div className="text-[9px] text-slate-500 mt-0.5">Auto-tag high priority lead</div>
            </div>

            {/* Branch 2: Not Interested */}
            <div className="bg-white rounded-xl p-2.5 text-left border border-slate-200/90 shadow-xs">
              <span className="px-1.5 py-0.2 rounded bg-slate-100 text-slate-700 text-[9px] font-bold uppercase mb-1 inline-block">
                Not Interested
              </span>
              <div className="font-bold text-slate-900 text-[11px]">Send Follow-up Message</div>
              <div className="text-[9px] text-slate-500 mt-0.5">Automated nurture sequence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. LeadPipelineMockup: Real SaaS Kanban Board for WhatsApp Lead Generation
 */
export function LeadPipelineMockup() {
  const columns = [
    {
      title: "Inbound Leads",
      count: 14,
      color: "border-emerald-500",
      leads: [
        {
          name: "Siddharth Verma",
          company: "Rajeshwari Textiles",
          phone: "+91 98251 •••••",
          source: "Click-to-WhatsApp Ad",
          value: "₹2,40,000",
          time: "2m ago",
          tag: "PPC ERP Inquiry",
          tagColor: "bg-emerald-50 text-emerald-700",
          rep: "Priya S."
        },
        {
          name: "Amit Patel",
          company: "Baroda Valves Ltd",
          phone: "+91 97241 •••••",
          source: "Website QR Scan",
          value: "₹1,80,000",
          time: "15m ago",
          tag: "Inventory Sync",
          tagColor: "bg-teal-50 text-teal-700",
          rep: "Rohan M."
        }
      ]
    },
    {
      title: "AI Qualified",
      count: 8,
      color: "border-teal-500",
      leads: [
        {
          name: "Karan Mehta",
          company: "Precision Forgings",
          phone: "+91 94260 •••••",
          source: "WhatsApp Chatbot",
          value: "₹4,50,000",
          time: "1h ago",
          tag: "50+ User License",
          tagColor: "bg-teal-50 text-teal-700",
          rep: "Priya S."
        },
        {
          name: "Deepak Shah",
          company: "Navrang Chem (Vapi)",
          phone: "+91 99099 •••••",
          source: "Direct Referral",
          value: "₹3,20,000",
          time: "3h ago",
          tag: "Orizer ERP Bundle",
          tagColor: "bg-amber-50 text-amber-700",
          rep: "Suresh K."
        }
      ]
    },
    {
      title: "Quotation Sent",
      count: 5,
      color: "border-amber-500",
      leads: [
        {
          name: "Vikram Singhania",
          company: "Apex Polymers Pvt Ltd",
          phone: "+91 98980 •••••",
          source: "Trade Expo 2026",
          value: "₹6,80,000",
          time: "Yesterday",
          tag: "PDF Quotation #OZ-914",
          tagColor: "bg-emerald-50 text-emerald-700",
          rep: "Suresh K."
        }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_12px_36px_-10px_rgba(15,23,42,0.08)] p-4 sm:p-5 text-xs select-none overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
            ⚡
          </div>
          <div>
            <span className="font-bold text-slate-900 text-xs sm:text-sm">WhatsApp Lead Pipeline</span>
            <span className="text-[10px] text-slate-400 block sm:inline sm:ml-2 font-mono">Live ERP Sync (27 Active Leads)</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-700 font-semibold text-[10px] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Auto-Qualify: ON
          </span>
        </div>
      </div>

      {/* 3-Column Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {columns.map((col) => (
          <div key={col.title} className="bg-slate-50/70 rounded-xl p-3 border border-slate-100">
            {/* Column Header */}
            <div className={`flex items-center justify-between pb-2 border-b-2 ${col.color} mb-2.5`}>
              <span className="font-bold text-slate-800 text-[11px]">{col.title}</span>
              <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 font-bold text-[9px] flex items-center justify-center">
                {col.count}
              </span>
            </div>

            {/* Lead Cards */}
            <div className="space-y-2">
              {col.leads.map((lead) => (
                <div key={lead.name} className="bg-white rounded-lg p-2.5 border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-colors">
                  <div className="flex items-start justify-between gap-1">
                    <div>
                      <div className="font-bold text-slate-900 text-[11px] leading-tight">{lead.name}</div>
                      <div className="text-[10px] text-slate-500">{lead.company}</div>
                    </div>
                    <span className="font-bold text-emerald-700 font-mono text-[10px] whitespace-nowrap bg-emerald-50 px-1.5 py-0.5 rounded">
                      {lead.value}
                    </span>
                  </div>

                  <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400">
                    <span className={`px-1.5 py-0.2 rounded font-semibold ${lead.tagColor}`}>
                      {lead.tag}
                    </span>
                    <span className="font-mono">{lead.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

