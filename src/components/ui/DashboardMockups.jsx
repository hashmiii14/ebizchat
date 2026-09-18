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

      {/* 3-Column SaaS Interface */}
      <div className="grid grid-cols-12 h-[480px]">
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
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-blue-100 text-blue-800 font-medium">
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
      color: "border-blue-400",
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
          <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 text-[9px] font-mono font-bold uppercase mb-2 inline-block">
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
          <span className="px-1.5 py-0.5 rounded bg-purple-100 text-purple-800 text-[9px] font-mono font-bold uppercase mb-2 inline-block">
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
// EXACT REFERENCE SCREENSHOT MOCKUPS
// -------------------------------------------------------------

/**
 * 1. HeroVisualMockup: Desktop Web App + Floating iPhone
 */
export function HeroVisualMockup() {
  return (
    <div className="relative w-full max-w-[660px] mx-auto lg:mr-0">
      {/* Desktop Web App Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden text-xs">
        {/* Top App Header */}
        <div className="px-4 py-2.5 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
              E
            </div>
            <span className="font-extrabold text-slate-900 tracking-tight text-xs">EBIZCHAT</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] text-slate-600 font-medium">WhatsApp API Online</span>
          </div>
        </div>

        {/* 2-Column Desktop Chat Interface */}
        <div className="grid grid-cols-12 h-[380px] bg-slate-50/40">
          {/* Left: Conversation List */}
          <div className="col-span-5 border-r border-slate-200 bg-white flex flex-col">
            <div className="p-2.5 border-b border-slate-100">
              <div className="text-[11px] font-bold text-slate-800 mb-1.5 flex items-center justify-between">
                <span>All Conversations</span>
                <span className="text-[10px] text-slate-400 font-normal">24 active</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold">
                  Open (8)
                </span>
                <span className="px-2 py-0.5 rounded-full text-slate-500 text-[10px]">
                  Pending (4)
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
              {/* Contact 1 */}
              <div className="p-2.5 hover:bg-slate-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800 text-[11px]">Ryan Smith</span>
                  <span className="text-[9px] text-slate-400">12:45</span>
                </div>
                <p className="text-[10px] text-slate-500 truncate mt-0.5">Is the updated catalog ready?</p>
              </div>

              {/* Contact 2: Active */}
              <div className="p-2.5 bg-emerald-50/70 border-l-2 border-emerald-600 cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-[11px]">Jane Cooper</span>
                  <span className="text-[9px] text-emerald-700 font-semibold">11:42</span>
                </div>
                <p className="text-[10px] text-slate-700 truncate mt-0.5 font-medium">Perfect, thank you!</p>
              </div>

              {/* Contact 3 */}
              <div className="p-2.5 hover:bg-slate-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800 text-[11px]">Robert Fox</span>
                  <span className="text-[9px] text-slate-400">11:20</span>
                </div>
                <p className="text-[10px] text-slate-500 truncate mt-0.5">Looking for pricing options</p>
              </div>

              {/* Contact 4 */}
              <div className="p-2.5 hover:bg-slate-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800 text-[11px]">Cody Fisher</span>
                  <span className="text-[9px] text-slate-400">10:05</span>
                </div>
                <p className="text-[10px] text-slate-500 truncate mt-0.5">Can you help me with setup?</p>
              </div>

              {/* Contact 5 */}
              <div className="p-2.5 hover:bg-slate-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800 text-[11px]">Darlene Robertson</span>
                  <span className="text-[9px] text-slate-400">Yesterday</span>
                </div>
                <p className="text-[10px] text-slate-500 truncate mt-0.5">Thanks for the quick support!</p>
              </div>
            </div>
          </div>

          {/* Right: Active Chat Area */}
          <div className="col-span-7 flex flex-col justify-between bg-slate-50/60">
            {/* Chat Header */}
            <div className="px-3.5 py-2 bg-white border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px]">
                  JC
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-[11px]">Jane Cooper</div>
                  <div className="text-[9px] text-emerald-600 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
                  </div>
                </div>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">ID: #9842</span>
            </div>

            {/* Message Bubbles */}
            <div className="p-3 space-y-2.5 overflow-y-auto">
              {/* Bubble 1: Customer */}
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-2.5 shadow-sm text-[11px] text-slate-800">
                  <p>Hi, interested in your product. Can you share more details?</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">11:40 AM</span>
                </div>
              </div>

              {/* Bubble 2: Bot / Agent */}
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-emerald-600 text-white rounded-2xl rounded-tr-sm p-2.5 shadow-sm text-[11px]">
                  <p>Hello Jane! Sure, here's a quick overview of what we offer.</p>
                  <span className="text-[9px] text-emerald-100 block text-right mt-1">11:41 AM</span>
                </div>
              </div>

              {/* Bubble 3: Attachment Card */}
              <div className="flex justify-end">
                <div className="w-64 bg-white border border-slate-200 rounded-xl p-2.5 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 font-bold text-[10px]">
                      PDF
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 text-[11px] truncate">
                        Product-Overview.pdf
                      </div>
                      <div className="text-[9px] text-slate-400">2.4 MB · Document</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bubble 4: Customer */}
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-2.5 shadow-sm text-[11px] text-slate-800">
                  <p>Perfect, thank you!</p>
                  <span className="text-[9px] text-slate-400 block text-right mt-1">11:42 AM</span>
                </div>
              </div>
            </div>

            {/* Chat Input Bar */}
            <div className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                readOnly
                placeholder="Type your message..."
                className="flex-1 bg-slate-100 rounded-lg px-3 py-1.5 text-[11px] text-slate-600 border border-transparent focus:outline-none"
              />
              <button className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-700">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating iPhone Mockup (Overlapping right) */}
      <div className="hidden sm:block absolute -bottom-6 -right-6 w-[220px] bg-slate-900 rounded-[34px] p-2.5 shadow-2xl border-2 border-slate-700/60 z-10 transition-transform hover:scale-105 duration-200">
        {/* Dynamic Island Notch */}
        <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-end px-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        </div>

        {/* iPhone Screen Content */}
        <div className="bg-white rounded-[26px] p-3 text-[10px] text-slate-800 overflow-hidden">
          {/* Top Status */}
          <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono mb-2">
            <span>9:41</span>
            <span>5G 100%</span>
          </div>

          <div className="text-[11px] font-bold text-slate-900 mb-1">Messages</div>
          <div className="text-[9px] text-emerald-600 font-semibold mb-2 flex items-center gap-1">
            <span>● Analytics Overview</span>
          </div>

          {/* Campaign Card */}
          <div className="p-2 bg-emerald-50/80 rounded-xl border border-emerald-200/80 mb-2">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[10px] text-slate-900">Holiday Special</span>
              <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 text-[8px] font-semibold">
                Completed
              </span>
            </div>
            <div className="text-[9px] text-slate-500">Sent: 24,531 · Read: 82.1%</div>
          </div>

          {/* Metrics 4-Box */}
          <div className="grid grid-cols-2 gap-1.5 mb-2">
            <div className="bg-slate-50 p-1.5 rounded-lg text-center border border-slate-100">
              <div className="text-[8px] text-slate-400">Delivery Rate</div>
              <div className="font-extrabold text-[11px] text-slate-900 font-mono">98.4%</div>
            </div>
            <div className="bg-slate-50 p-1.5 rounded-lg text-center border border-slate-100">
              <div className="text-[8px] text-slate-400">Click Rate</div>
              <div className="font-extrabold text-[11px] text-emerald-600 font-mono">34.5%</div>
            </div>
          </div>

          {/* Top Countries */}
          <div className="border-t border-slate-100 pt-1.5">
            <div className="text-[9px] font-bold text-slate-700 mb-1">Top Countries</div>
            <div className="space-y-1 text-[8px] text-slate-600">
              <div className="flex justify-between">
                <span>USA</span>
                <span className="font-semibold text-slate-800">42.1%</span>
              </div>
              <div className="flex justify-between">
                <span>Brazil</span>
                <span className="font-semibold text-slate-800">28.5%</span>
              </div>
              <div className="flex justify-between">
                <span>India</span>
                <span className="font-semibold text-slate-800">18.2%</span>
              </div>
              <div className="flex justify-between">
                <span>UK</span>
                <span className="font-semibold text-slate-800">11.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. AnalyticsOverviewMockup: 4 KPI Cards + Smooth Multi-Line Wave Chart
 */
export function AnalyticsOverviewMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-float p-6 text-xs">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
            E
          </div>
          <h3 className="font-bold text-slate-900 text-base tracking-tight">
            Analytics Overview
          </h3>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium">
          Last 30 Days
        </span>
      </div>

      {/* 4 KPI Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
        <div className="p-3.5 bg-slate-50/70 rounded-xl border border-slate-200">
          <div className="text-[11px] text-slate-500 font-medium">Conversations</div>
          <div className="text-xl font-bold text-slate-900 font-mono mt-0.5">24,531</div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
            <span>↑ 12.5%</span>
          </div>
        </div>

        <div className="p-3.5 bg-slate-50/70 rounded-xl border border-slate-200">
          <div className="text-[11px] text-slate-500 font-medium">Replies</div>
          <div className="text-xl font-bold text-slate-900 font-mono mt-0.5">8,742</div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
            <span>↑ 24.1%</span>
          </div>
        </div>

        <div className="p-3.5 bg-slate-50/70 rounded-xl border border-slate-200">
          <div className="text-[11px] text-slate-500 font-medium">Resolution Rate</div>
          <div className="text-xl font-bold text-slate-900 font-mono mt-0.5">92.1%</div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
            <span>↑ 4.3%</span>
          </div>
        </div>

        <div className="p-3.5 bg-slate-50/70 rounded-xl border border-slate-200">
          <div className="text-[11px] text-slate-500 font-medium">Satisfaction</div>
          <div className="text-xl font-bold text-slate-900 font-mono mt-0.5">4.8/5</div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
            <span>↑ 0.2%</span>
          </div>
        </div>
      </div>

      {/* Chart Legend */}
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-4 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-slate-700">Conversations</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span className="font-semibold text-slate-700">Replies</span>
          </div>
        </div>
        <span className="text-[10px] text-slate-400 font-mono">Updated 5m ago</span>
      </div>

      {/* SVG Dual-Wave Chart */}
      <div className="relative w-full h-44 bg-slate-50/50 rounded-xl p-2 border border-slate-100 flex flex-col justify-between">
        <svg className="w-full h-32 overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="emeraldGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="0" y1="20" x2="500" y2="20" stroke="#e2e8f0" strokeDasharray="3 3" />
          <line x1="0" y1="60" x2="500" y2="60" stroke="#e2e8f0" strokeDasharray="3 3" />
          <line x1="0" y1="100" x2="500" y2="100" stroke="#e2e8f0" strokeDasharray="3 3" />

          {/* Teal Area & Curve (Replies) */}
          <path
            d="M 0,80 Q 70,60 140,75 T 280,65 T 420,55 T 500,60 L 500,120 L 0,120 Z"
            fill="url(#tealGrad)"
          />
          <path
            d="M 0,80 Q 70,60 140,75 T 280,65 T 420,55 T 500,60"
            fill="none"
            stroke="#14b8a6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Emerald Area & Curve (Conversations) */}
          <path
            d="M 0,55 Q 70,30 140,45 T 280,35 T 420,25 T 500,30 L 500,120 L 0,120 Z"
            fill="url(#emeraldGrad)"
          />
          <path
            d="M 0,55 Q 70,30 140,45 T 280,35 T 420,25 T 500,30"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Peak Dots */}
          <circle cx="280" cy="35" r="4" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
          <circle cx="420" cy="25" r="4" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
          <circle cx="280" cy="65" r="4" fill="#14b8a6" stroke="#ffffff" strokeWidth="2" />
          <circle cx="420" cy="55" r="4" fill="#14b8a6" stroke="#ffffff" strokeWidth="2" />
        </svg>

        {/* X-Axis Date Tickers */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono px-1">
          <span>May 12</span>
          <span>May 19</span>
          <span>May 26</span>
          <span>May 31</span>
          <span>Jun 07</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. WorkflowBuilderMockup: Visual Drag-and-Drop Automation Canvas
 */
export function WorkflowBuilderMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-float p-6 text-xs relative overflow-hidden">
      {/* Visual Canvas with Left Toolbar */}
      <div className="flex gap-4">
        {/* Left Toolbar */}
        <div className="w-10 bg-slate-50 border border-slate-200 rounded-xl py-3 flex flex-col items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
            <GitBranch className="w-3.5 h-3.5" />
          </div>
          <div className="w-7 h-7 rounded-lg text-slate-400 hover:text-slate-700 flex items-center justify-center">
            <Inbox className="w-3.5 h-3.5" />
          </div>
          <div className="w-7 h-7 rounded-lg text-slate-400 hover:text-slate-700 flex items-center justify-center">
            <Filter className="w-3.5 h-3.5" />
          </div>
          <div className="w-7 h-7 rounded-lg text-slate-400 hover:text-slate-700 flex items-center justify-center">
            <Users className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Workflow Diagram Canvas */}
        <div className="flex-1 bg-slate-50/50 rounded-xl border border-dashed border-slate-200 p-5 flex flex-col items-center">
          {/* Node 1: Trigger */}
          <div className="w-64 bg-white border border-slate-200 rounded-xl p-3 shadow-subtle text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                ⚡
              </span>
              <span className="font-bold text-slate-900 text-xs">When user sends message</span>
            </div>
            <p className="text-[10px] text-slate-500 pl-7">Triggers when user sends a WhatsApp message</p>
          </div>

          {/* Connector Down */}
          <div className="w-0.5 h-6 bg-slate-300 my-1 relative">
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-r border-b border-slate-400 rotate-45"></div>
          </div>

          {/* Node 2: Decision / Smart AI */}
          <div className="w-64 bg-white border border-emerald-300 rounded-xl p-3 shadow-subtle text-left ring-2 ring-emerald-500/20">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
                AI
              </span>
              <span className="font-bold text-slate-900 text-xs">Smart AI Reply</span>
            </div>
            <p className="text-[10px] text-slate-500 pl-7">Uses AI to understand intent & respond automatically</p>
          </div>

          {/* Connector Branching */}
          <div className="w-48 h-6 relative my-1">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-slate-300"></div>
            <div className="absolute top-3 left-6 right-6 h-0.5 bg-slate-300"></div>
            <div className="absolute top-3 left-6 w-0.5 h-3 bg-slate-300"></div>
            <div className="absolute top-3 right-6 w-0.5 h-3 bg-slate-300"></div>
          </div>

          {/* Branches Row */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
            {/* Branch A: Interested */}
            <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-2.5 text-left">
              <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[9px] font-bold uppercase mb-1 inline-block">
                Interested
              </span>
              <div className="font-semibold text-slate-900 text-[11px]">Assign to Sales Team</div>
              <div className="text-[9px] text-slate-500 mt-0.5">Route to available rep</div>
            </div>

            {/* Branch B: Not Interested */}
            <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-2.5 text-left">
              <span className="px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 text-[9px] font-bold uppercase mb-1 inline-block">
                Not Interested
              </span>
              <div className="font-semibold text-slate-900 text-[11px]">Send follow-up sequence</div>
              <div className="text-[9px] text-slate-500 mt-0.5">Re-engage after 48h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
