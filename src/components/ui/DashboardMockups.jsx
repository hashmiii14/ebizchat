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
 * 1. HeroVisualMockup: Interactive Desktop Web App + Floating iPhone with Live Simulated Chat
 */
export function HeroVisualMockup() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'customer',
      text: 'Hi, interested in Orizer eBizChat. Can you automate our sales leads & ERP?',
      time: '11:40 AM',
    },
    {
      id: 2,
      sender: 'bot',
      text: 'Hello! 👋 Absolutely. eBizChat auto-qualifies WhatsApp leads in 15 seconds and syncs directly with Orizer ERP & CRM.',
      time: '11:40 AM',
    },
    {
      id: 3,
      sender: 'pdf',
      title: 'eBizChat_Orizer_Brochure.pdf',
      size: '2.4 MB · Verified Meta Solution',
      time: '11:41 AM',
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [activeQuickAction, setActiveQuickAction] = useState(null);

  const handleQuickAction = (actionText, replyText) => {
    if (isTyping) return;
    setActiveQuickAction(actionText);

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'customer',
      text: actionText,
      time: 'Just now',
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate instant bot response
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: replyText,
          time: 'Just now',
        },
      ]);
    }, 900);
  };

  return (
    <div className="relative w-full max-w-[660px] mx-auto lg:mr-0">
      {/* Ambient background glow orbs (Teal & Orange like orizer.netlify.app) */}
      <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[#00a48c]/15 blur-3xl pointer-events-none animate-mesh"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#ff3b00]/10 blur-3xl pointer-events-none animate-mesh" style={{ animationDelay: '3s' }}></div>

      {/* Desktop Web App Card */}
      <div className="relative bg-white rounded-3xl border border-black/[0.08] shadow-[0_20px_60px_-15px_rgba(14,15,16,0.12)] overflow-hidden text-xs">
        {/* Top App Header */}
        <div className="px-4 py-3 bg-[#0e0f10] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff3b00]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#00d4b2]"></span>
            </div>
            <div className="flex items-center gap-2 pl-2 border-l border-white/10">
              <span className="font-display font-bold tracking-tight text-white text-xs">EBIZCHAT</span>
              <span className="text-[10px] font-mono text-[#00d4b2] px-1.5 py-0.5 rounded bg-[#00a48c]/20 border border-[#00a48c]/30">
                by Orizer
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#00d4b2]">
            <span className="w-2 h-2 rounded-full bg-[#00d4b2] animate-ping-slow"></span>
            <span className="hidden sm:inline">Meta Cloud API: Connected</span>
            <span className="sm:hidden">Online</span>
          </div>
        </div>

        {/* 2-Column Desktop Chat Interface */}
        <div className="grid grid-cols-12 h-[390px] bg-[#f7f6f3]/60">
          {/* Left: Conversation List */}
          <div className="col-span-5 border-r border-black/[0.08] bg-white flex flex-col">
            <div className="p-3 border-b border-black/[0.06]">
              <div className="text-[11px] font-display font-bold text-[#0e0f10] mb-2 flex items-center justify-between">
                <span>Active Leads</span>
                <span className="text-[10px] font-mono text-[#00a48c] font-semibold">24 live</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="px-2 py-0.5 rounded-full bg-[#00a48c]/10 text-[#00a48c] text-[10px] font-bold">
                  Open (8)
                </span>
                <span className="px-2 py-0.5 rounded-full text-[#55585f] text-[10px] bg-neutral-100 font-medium">
                  Qualified (16)
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-black/[0.04] no-scrollbar">
              {/* Contact 1: Active Selected */}
              <div className="p-3 bg-[#00a48c]/5 border-l-4 border-[#00a48c] cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#0e0f10] text-[11px]">Jane Cooper</span>
                  <span className="text-[9px] text-[#00a48c] font-mono font-semibold">11:42 AM</span>
                </div>
                <p className="text-[10px] text-[#55585f] truncate mt-0.5 font-medium">
                  {messages[messages.length - 1].text || 'Interested in Orizer eBizChat'}
                </p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-emerald-100 text-emerald-800 font-semibold">
                    ₹4.8L Deal
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-orange-50 text-[#ff3b00] font-semibold border border-orange-200/50">
                    Hot Lead
                  </span>
                </div>
              </div>

              {/* Contact 2 */}
              <div className="p-3 hover:bg-neutral-50 cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#0e0f10] text-[11px]">Vikram Patel (Rajesh Textiles)</span>
                  <span className="text-[9px] text-[#9a9da3] font-mono">11:20 AM</span>
                </div>
                <p className="text-[10px] text-[#9a9da3] truncate mt-0.5">Please send updated quotation and GST invoice</p>
              </div>

              {/* Contact 3 */}
              <div className="p-3 hover:bg-neutral-50 cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#0e0f10] text-[11px]">Amit Sharma (Kalyan Poly)</span>
                  <span className="text-[9px] text-[#9a9da3] font-mono">10:05 AM</span>
                </div>
                <p className="text-[10px] text-[#9a9da3] truncate mt-0.5">Dispatch schedule confirmed for Monday</p>
              </div>
            </div>
          </div>

          {/* Right: Active Live Chat Area */}
          <div className="col-span-7 flex flex-col justify-between bg-[#f7f6f3]/80 relative">
            {/* Chat Header */}
            <div className="px-3.5 py-2.5 bg-white border-b border-black/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#00a48c] text-white font-bold flex items-center justify-center text-xs shadow-sm">
                  JC
                </div>
                <div>
                  <div className="font-display font-bold text-[#0e0f10] text-[11px]">Jane Cooper</div>
                  <div className="text-[9px] text-[#00a48c] flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00a48c] animate-pulse"></span> Auto-Assigned to Sales
                  </div>
                </div>
              </div>
              <span className="text-[9px] text-[#55585f] font-mono bg-neutral-100 px-2 py-0.5 rounded border border-black/5">
                Orizer CRM #OZ-984
              </span>
            </div>

            {/* Message Bubbles Container */}
            <div className="p-3 space-y-2.5 overflow-y-auto flex-1 no-scrollbar">
              {messages.map((m) => {
                if (m.sender === 'customer') {
                  return (
                    <div key={m.id} className="flex justify-start animate-fade-in">
                      <div className="max-w-[85%] bg-white border border-black/[0.08] rounded-2xl rounded-tl-sm p-2.5 shadow-sm text-[11px] text-[#0e0f10]">
                        <p>{m.text}</p>
                        <span className="text-[9px] text-[#9a9da3] block text-right mt-1 font-mono">{m.time}</span>
                      </div>
                    </div>
                  );
                }

                if (m.sender === 'pdf') {
                  return (
                    <div key={m.id} className="flex justify-end animate-fade-in">
                      <div className="w-64 bg-white border border-[#00a48c]/30 rounded-xl p-2.5 shadow-sm">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 font-bold text-[10px]">
                            PDF
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-[#0e0f10] text-[10px] truncate">
                              {m.title}
                            </div>
                            <div className="text-[9px] text-[#00a48c] font-medium">{m.size}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={m.id} className="flex justify-end animate-fade-in">
                    <div className="max-w-[88%] bg-[#00a48c] text-white rounded-2xl rounded-tr-sm p-2.5 shadow-sm text-[11px]">
                      <p>{m.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-white/80 font-mono">
                        <span>{m.time}</span>
                        <span className="text-white font-bold">✓✓</span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-end animate-fade-in">
                  <div className="bg-[#00a48c]/15 text-[#00a48c] rounded-2xl rounded-tr-sm px-3 py-2 flex items-center gap-1.5 border border-[#00a48c]/20">
                    <span className="text-[10px] font-semibold">eBizChat AI typing</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00a48c] animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00a48c] animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00a48c] animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Quick-Reply Simulation Chips */}
            <div className="px-3 py-1.5 bg-white/90 border-t border-black/[0.04] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-[9px] font-mono text-[#9a9da3] whitespace-nowrap">Try:</span>
              <button
                onClick={() => handleQuickAction('Can I see live pricing?', 'Plans start from ₹1,999/month with 0% Meta markup! Would you like a 14-day free trial?')}
                className="px-2 py-1 rounded-full text-[10px] font-semibold bg-[#f7f6f3] hover:bg-[#00a48c]/10 text-[#0e0f10] hover:text-[#00a48c] border border-black/5 hover:border-[#00a48c]/30 whitespace-nowrap transition-colors"
              >
                Pricing?
              </button>
              <button
                onClick={() => handleQuickAction('Does it connect to Orizer ERP?', 'Yes! We have native 2-way sync with Orizer ERP, SAP & Tally for automated dispatch, invoices & payment receipts.')}
                className="px-2 py-1 rounded-full text-[10px] font-semibold bg-[#f7f6f3] hover:bg-[#00a48c]/10 text-[#0e0f10] hover:text-[#00a48c] border border-black/5 hover:border-[#00a48c]/30 whitespace-nowrap transition-colors"
              >
                ERP Sync?
              </button>
              <button
                onClick={() => handleQuickAction('Book a quick live demo', 'Awesome! Our Vapi solution engineering team can demo live today. Please call +91 96245 13385.')}
                className="px-2 py-1 rounded-full text-[10px] font-semibold bg-[#ff3b00]/10 hover:bg-[#ff3b00]/20 text-[#ff3b00] border border-[#ff3b00]/20 whitespace-nowrap transition-colors"
              >
                Book Demo 🔥
              </button>
            </div>

            {/* Input Bar */}
            <div className="p-2.5 bg-white border-t border-black/[0.06] flex items-center gap-2">
              <input
                type="text"
                readOnly
                value="Select a prompt above or test click..."
                className="flex-1 bg-[#f7f6f3] rounded-xl px-3 py-2 text-[10px] text-[#55585f] border border-black/5 focus:outline-none"
              />
              <button
                onClick={() => handleQuickAction('Instant callback request', 'Callback scheduled! Our team will call you within 5 minutes.')}
                className="px-3 py-2 rounded-xl bg-[#00a48c] hover:bg-[#008a76] text-white font-semibold flex items-center gap-1 text-[10px] shadow-sm shadow-[#00a48c]/20"
              >
                <span>Send</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating iPhone Mockup with Live Broadcast Analytics */}
      <div className="hidden sm:block absolute -bottom-6 -right-6 w-[230px] bg-[#0e0f10] rounded-[36px] p-3 shadow-2xl border-2 border-white/10 z-20 transition-transform hover:scale-105 duration-300">
        {/* Dynamic Island Notch */}
        <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-between px-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4b2] animate-ping-slow"></span>
          <span className="text-[8px] font-mono text-[#00d4b2]">LIVE</span>
        </div>

        {/* iPhone Screen Content */}
        <div className="bg-white rounded-[26px] p-3 text-[10px] text-[#0e0f10] overflow-hidden border border-black/5">
          <div className="flex items-center justify-between text-[9px] text-[#9a9da3] font-mono mb-2">
            <span>9:41</span>
            <span className="text-[#00a48c] font-bold">5G · Meta API</span>
          </div>

          <div className="font-display font-bold text-[11px] text-[#0e0f10] mb-0.5">Campaign Pulse</div>
          <div className="text-[9px] text-[#00a48c] font-semibold mb-2 flex items-center gap-1 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00a48c] animate-pulse"></span> Broadcast Active
          </div>

          {/* Campaign Card */}
          <div className="p-2 bg-[#f7f6f3] rounded-xl border border-black/5 mb-2.5">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[10px] text-[#0e0f10]">Festive Flash Sale</span>
              <span className="px-1.5 py-0.2 rounded-full bg-[#00a48c]/15 text-[#00a48c] text-[8px] font-bold">
                98.4% Sent
              </span>
            </div>
            <div className="w-full bg-neutral-200 h-1 rounded-full overflow-hidden my-1">
              <div className="bg-[#00a48c] h-full w-[84%] rounded-full"></div>
            </div>
            <div className="text-[8px] text-[#55585f] font-mono">24,531 delivered in 18s</div>
          </div>

          {/* Metrics 2x2 Box */}
          <div className="grid grid-cols-2 gap-1.5 mb-2">
            <div className="bg-[#00a48c]/10 p-2 rounded-xl text-center border border-[#00a48c]/20">
              <div className="text-[8px] text-[#55585f]">Delivery Rate</div>
              <div className="font-extrabold text-[12px] text-[#00a48c] font-mono mt-0.5">99.2%</div>
            </div>
            <div className="bg-orange-50 p-2 rounded-xl text-center border border-orange-200/60">
              <div className="text-[8px] text-[#ff3b00]">Click CTR</div>
              <div className="font-extrabold text-[12px] text-[#ff3b00] font-mono mt-0.5">38.4%</div>
            </div>
          </div>

          {/* Live Verified Green Tick Note */}
          <div className="pt-2 border-t border-black/5 flex items-center justify-between text-[8px] text-[#55585f]">
            <span className="flex items-center gap-1 text-[#00a48c] font-bold">
              <CheckCircle2 className="w-3 h-3 text-[#00a48c]" /> Verified Green Tick
            </span>
            <span className="font-mono text-[8px] text-[#ff3b00] font-bold">0% Markup</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. AnalyticsOverviewMockup: 4 KPI Cards + Interactive Multi-Line Wave Chart
 */
export function AnalyticsOverviewMockup() {
  const [selectedKpi, setSelectedKpi] = useState('conversations');

  return (
    <div className="bg-white rounded-3xl border border-black/[0.08] shadow-[0_20px_60px_-15px_rgba(14,15,16,0.08)] p-6 sm:p-7 text-xs relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#00a48c]/5 blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-black/[0.06] relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#00a48c] flex items-center justify-center text-white font-display font-bold text-sm shadow-sm shadow-[#00a48c]/25">
            E
          </div>
          <div>
            <h3 className="font-display font-bold text-[#0e0f10] text-base tracking-tight">
              Analytics & Telemetry
            </h3>
            <p className="text-[10px] text-[#55585f]">Live WhatsApp Cloud API stream</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00a48c] animate-ping-slow"></span>
          <span className="px-3 py-1 rounded-full bg-[#f7f6f3] border border-black/5 text-[#0e0f10] text-[11px] font-mono font-semibold">
            Last 30 Days
          </span>
        </div>
      </div>

      {/* 4 Interactive KPI Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6 relative z-10">
        <button
          onClick={() => setSelectedKpi('conversations')}
          className={`p-3.5 rounded-2xl border text-left transition-all ${
            selectedKpi === 'conversations'
              ? 'bg-[#00a48c]/10 border-[#00a48c] shadow-sm shadow-[#00a48c]/20'
              : 'bg-[#f7f6f3]/80 border-black/[0.06] hover:bg-neutral-50'
          }`}
        >
          <div className="text-[11px] text-[#55585f] font-medium">Conversations</div>
          <div className="text-xl font-bold text-[#0e0f10] font-mono mt-1">24,531</div>
          <div className="text-[10px] text-[#00a48c] font-semibold mt-1 flex items-center gap-0.5 font-mono">
            <span>↑ 12.5% vs last mo</span>
          </div>
        </button>

        <button
          onClick={() => setSelectedKpi('replies')}
          className={`p-3.5 rounded-2xl border text-left transition-all ${
            selectedKpi === 'replies'
              ? 'bg-[#00a48c]/10 border-[#00a48c] shadow-sm shadow-[#00a48c]/20'
              : 'bg-[#f7f6f3]/80 border-black/[0.06] hover:bg-neutral-50'
          }`}
        >
          <div className="text-[11px] text-[#55585f] font-medium">Auto-Replies</div>
          <div className="text-xl font-bold text-[#0e0f10] font-mono mt-1">18,742</div>
          <div className="text-[10px] text-[#00a48c] font-semibold mt-1 flex items-center gap-0.5 font-mono">
            <span>↑ 24.1% qualified</span>
          </div>
        </button>

        <button
          onClick={() => setSelectedKpi('sla')}
          className={`p-3.5 rounded-2xl border text-left transition-all ${
            selectedKpi === 'sla'
              ? 'bg-[#00a48c]/10 border-[#00a48c] shadow-sm shadow-[#00a48c]/20'
              : 'bg-[#f7f6f3]/80 border-black/[0.06] hover:bg-neutral-50'
          }`}
        >
          <div className="text-[11px] text-[#55585f] font-medium">First Response SLA</div>
          <div className="text-xl font-bold text-[#0e0f10] font-mono mt-1">14.2s</div>
          <div className="text-[10px] text-[#ff3b00] font-semibold mt-1 flex items-center gap-0.5 font-mono">
            <span>⚡ 98.6% under 30s</span>
          </div>
        </button>

        <button
          onClick={() => setSelectedKpi('erpsync')}
          className={`p-3.5 rounded-2xl border text-left transition-all ${
            selectedKpi === 'erpsync'
              ? 'bg-[#00a48c]/10 border-[#00a48c] shadow-sm shadow-[#00a48c]/20'
              : 'bg-[#f7f6f3]/80 border-black/[0.06] hover:bg-neutral-50'
          }`}
        >
          <div className="text-[11px] text-[#55585f] font-medium">Orizer ERP Sync</div>
          <div className="text-xl font-bold text-[#0e0f10] font-mono mt-1">100%</div>
          <div className="text-[10px] text-[#00a48c] font-semibold mt-1 flex items-center gap-0.5 font-mono">
            <span>✓ 0 Sync Errors</span>
          </div>
        </button>
      </div>

      {/* Chart Legend */}
      <div className="flex items-center justify-between mb-3 px-1 relative z-10">
        <div className="flex items-center gap-4 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00a48c]"></span>
            <span className="font-semibold text-[#0e0f10]">Inbound Leads</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff3b00]"></span>
            <span className="font-semibold text-[#0e0f10]">Hot Conversions</span>
          </div>
        </div>
        <span className="text-[10px] text-[#9a9da3] font-mono">Live Meta Webhook Stream</span>
      </div>

      {/* SVG Dual-Wave Chart */}
      <div className="relative w-full h-44 bg-[#f7f6f3]/70 rounded-2xl p-3 border border-black/[0.06] flex flex-col justify-between overflow-hidden">
        <svg className="w-full h-32 overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="orizerTealGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00a48c" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00a48c" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="orizerOrangeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff3b00" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ff3b00" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="0" y1="25" x2="500" y2="25" stroke="rgba(14,15,16,0.06)" strokeDasharray="3 3" />
          <line x1="0" y1="65" x2="500" y2="65" stroke="rgba(14,15,16,0.06)" strokeDasharray="3 3" />
          <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(14,15,16,0.06)" strokeDasharray="3 3" />

          {/* Orange Curve (Conversions) */}
          <path
            d="M 0,85 Q 70,70 140,80 T 280,68 T 420,58 T 500,62 L 500,120 L 0,120 Z"
            fill="url(#orizerOrangeGrad)"
          />
          <path
            d="M 0,85 Q 70,70 140,80 T 280,68 T 420,58 T 500,62"
            fill="none"
            stroke="#ff3b00"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Teal Curve (Inbound Leads) */}
          <path
            d="M 0,55 Q 70,28 140,42 T 280,32 T 420,20 T 500,28 L 500,120 L 0,120 Z"
            fill="url(#orizerTealGrad)"
          />
          <path
            d="M 0,55 Q 70,28 140,42 T 280,32 T 420,20 T 500,28"
            fill="none"
            stroke="#00a48c"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Interactive Peak Dots with Glow */}
          <circle cx="280" cy="32" r="5" fill="#00a48c" stroke="#ffffff" strokeWidth="2.5" />
          <circle cx="420" cy="20" r="5" fill="#00a48c" stroke="#ffffff" strokeWidth="2.5" />
          <circle cx="280" cy="68" r="4.5" fill="#ff3b00" stroke="#ffffff" strokeWidth="2" />
          <circle cx="420" cy="58" r="4.5" fill="#ff3b00" stroke="#ffffff" strokeWidth="2" />
        </svg>

        {/* X-Axis Date Tickers */}
        <div className="flex items-center justify-between text-[10px] text-[#9a9da3] font-mono px-1">
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4 (Peak)</span>
          <span>Today</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. WorkflowBuilderMockup: Interactive Visual Drag-and-Drop Automation Canvas
 */
export function WorkflowBuilderMockup() {
  const [testActive, setTestActive] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleSimulate = () => {
    setTestActive(true);
    setActiveStep(1);

    setTimeout(() => setActiveStep(2), 600);
    setTimeout(() => setActiveStep(3), 1200);
    setTimeout(() => {
      setActiveStep(4);
      setTimeout(() => setTestActive(false), 2000);
    }, 1800);
  };

  return (
    <div className="bg-white rounded-3xl border border-black/[0.08] shadow-[0_20px_60px_-15px_rgba(14,15,16,0.08)] p-6 sm:p-7 text-xs relative overflow-hidden">
      {/* Top action toolbar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#0e0f10] text-white flex items-center justify-center font-bold">
            <GitBranch className="w-4 h-4 text-[#00d4b2]" />
          </div>
          <div>
            <span className="font-display font-bold text-[#0e0f10] text-sm block">Lead Router Workflow</span>
            <span className="text-[10px] text-[#55585f]">Auto-Trigger on Inbound WhatsApp Message</span>
          </div>
        </div>
        <button
          onClick={handleSimulate}
          disabled={testActive}
          className="px-3.5 py-1.5 rounded-xl bg-[#00a48c] hover:bg-[#008a76] text-white font-semibold text-[11px] flex items-center gap-1.5 shadow-sm shadow-[#00a48c]/20 active:scale-95 transition-all"
        >
          <span>{testActive ? 'Simulating...' : 'Test Flow'}</span>
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
        </button>
      </div>

      {/* Visual Canvas with Left Toolbar */}
      <div className="flex gap-4">
        {/* Left Mini Toolbar */}
        <div className="w-11 bg-[#f7f6f3] border border-black/[0.06] rounded-2xl py-3 flex flex-col items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#00a48c] text-white flex items-center justify-center shadow-sm">
            <GitBranch className="w-3.5 h-3.5" />
          </div>
          <div className="w-7 h-7 rounded-lg text-[#55585f] hover:text-[#0e0f10] flex items-center justify-center">
            <Inbox className="w-3.5 h-3.5" />
          </div>
          <div className="w-7 h-7 rounded-lg text-[#55585f] hover:text-[#0e0f10] flex items-center justify-center">
            <Filter className="w-3.5 h-3.5" />
          </div>
          <div className="w-7 h-7 rounded-lg text-[#55585f] hover:text-[#0e0f10] flex items-center justify-center">
            <Users className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Workflow Diagram Canvas */}
        <div className="flex-1 bg-[#f7f6f3]/60 rounded-2xl border border-dashed border-black/[0.1] p-5 flex flex-col items-center">
          {/* Node 1: Trigger */}
          <div
            className={`w-64 bg-white rounded-2xl p-3 text-left border transition-all duration-300 ${
              activeStep >= 1
                ? 'border-[#00a48c] ring-2 ring-[#00a48c]/30 shadow-md'
                : 'border-black/[0.08] shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-lg bg-[#00a48c]/15 text-[#00a48c] flex items-center justify-center text-[10px] font-bold">
                  ⚡
                </span>
                <span className="font-display font-bold text-[#0e0f10] text-xs">When user texts WhatsApp</span>
              </div>
              {activeStep >= 1 && <span className="text-[#00a48c] text-[10px] font-bold">✓ Active</span>}
            </div>
            <p className="text-[10px] text-[#55585f] pl-7">Triggers on keyword: "Pricing", "Brochure", "Order"</p>
          </div>

          {/* Connector Down with Animated Pulse */}
          <div className="w-0.5 h-5 bg-black/15 my-1 relative">
            <div
              className={`w-full h-full bg-[#00a48c] transition-all duration-300 ${
                activeStep >= 2 ? 'opacity-100' : 'opacity-0'
              }`}
            ></div>
          </div>

          {/* Node 2: Decision / Smart AI */}
          <div
            className={`w-64 bg-white rounded-2xl p-3 text-left border transition-all duration-300 ${
              activeStep >= 2
                ? 'border-[#ff3b00] ring-2 ring-[#ff3b00]/30 shadow-md'
                : 'border-black/[0.08] shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-lg bg-[#ff3b00] text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                  AI
                </span>
                <span className="font-display font-bold text-[#0e0f10] text-xs">Orizer AI Qualifier</span>
              </div>
              {activeStep >= 2 && <span className="text-[#ff3b00] text-[10px] font-bold">✓ Evaluating</span>}
            </div>
            <p className="text-[10px] text-[#55585f] pl-7">Extracts GST, City, Requirement & Budget</p>
          </div>

          {/* Connector Branching */}
          <div className="w-48 h-5 relative my-1">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-2.5 bg-black/15"></div>
            <div className="absolute top-2.5 left-6 right-6 h-0.5 bg-black/15"></div>
            <div className="absolute top-2.5 left-6 w-0.5 h-2.5 bg-black/15"></div>
            <div className="absolute top-2.5 right-6 w-0.5 h-2.5 bg-black/15"></div>
          </div>

          {/* Branches Row */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
            {/* Branch A: High Intent */}
            <div
              className={`bg-white rounded-2xl p-2.5 text-left border transition-all duration-300 ${
                activeStep >= 3
                  ? 'border-[#00a48c] ring-2 ring-[#00a48c]/30 shadow-md'
                  : 'border-black/[0.08] shadow-sm'
              }`}
            >
              <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 text-[9px] font-mono font-bold uppercase mb-1 inline-block">
                High Value Lead
              </span>
              <div className="font-semibold text-[#0e0f10] text-[11px]">Sync Orizer ERP & Notify Sales</div>
              <div className="text-[9px] text-[#55585f] mt-0.5 font-mono">Instant WhatsApp Alert sent</div>
            </div>

            {/* Branch B: General Info */}
            <div className="bg-white rounded-2xl p-2.5 text-left border border-black/[0.08] shadow-sm">
              <span className="px-1.5 py-0.2 rounded bg-neutral-100 text-[#55585f] text-[9px] font-mono font-bold uppercase mb-1 inline-block">
                General Query
              </span>
              <div className="font-semibold text-[#0e0f10] text-[11px]">Send Interactive PDF Catalog</div>
              <div className="text-[9px] text-[#55585f] mt-0.5 font-mono">Auto-handshake complete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
