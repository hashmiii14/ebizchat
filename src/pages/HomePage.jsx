import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CircleCheck,
  BadgeCheck,
  ShieldCheck,
  Layers,
  Users,
  BarChart3,
  Workflow,
  MessageSquare,
  User,
  Phone,
  Bot,
  Server,
  Target,
  Inbox,
  Factory,
  ShoppingCart,
  Building2,
  GraduationCap,
  Stethoscope,
  Quote,
  Award,
  ChevronDown,
  MapPin,
  Clock,
} from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';

export default function HomePage({ onOpenDemoModal, onOpenContactModal }) {
  // Feature tab state
  const [activeFeatureTab, setActiveFeatureTab] = useState('chatbot');

  // How it works step state
  const [activeStep, setActiveStep] = useState(0);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const featureTabs = [
    {
      id: 'chatbot',
      label: 'WhatsApp Chatbot Builder',
      icon: Bot,
      title: 'Build chatbots without writing code',
      body: 'Design automated conversation flows that answer FAQs, qualify leads, collect customer data, share catalogs and hand off to a live agent the moment intent is detected.',
      points: [
        'Drag-and-drop flow canvas with branching logic',
        'Reusable blocks for FAQs, forms and catalogs',
        'Live-agent handoff with full context',
        'Flow versioning and sandbox testing',
      ],
    },
    {
      id: 'api',
      label: 'WhatsApp API Integrations',
      icon: Server,
      title: 'Connect eBizChat to the systems you already run',
      body: 'Native connectors for Orizer ERP, Shopify and WooCommerce, plus webhooks and a documented REST API so order, stock and dispatch events trigger messages automatically.',
      points: [
        'Orizer ERP events for dispatch, stock and invoices',
        'Shopify and WooCommerce order notifications',
        'Outbound webhooks with retries',
        'REST API with scoped access tokens',
      ],
    },
    {
      id: 'leads',
      label: 'Lead Management',
      icon: Target,
      title: 'Capture, score and convert every enquiry',
      body: 'Every conversation becomes a lead record with source, score, stage and owner, so your sales team spends the day on buyers instead of chasing unresponsive contacts.',
      points: [
        'Automatic lead creation from any channel',
        'Rule-based scoring and qualification',
        'Round-robin and territory assignment',
        'Pipeline stages with follow-up reminders',
      ],
    },
    {
      id: 'inbox',
      label: 'Shared Team Inbox',
      icon: Inbox,
      title: 'One inbox for the whole customer-facing team',
      body: 'Agents, supervisors and managers work from a single queue with tags, notes, canned replies and internal mentions, so nothing sits unanswered.',
      points: [
        'Assignment rules and workload balancing',
        'Internal notes and @mentions',
        'Canned replies and quick templates',
        'First-response and resolution timers',
      ],
    },
  ];

  const currentFeature =
    featureTabs.find((f) => f.id === activeFeatureTab) || featureTabs[0];

  const howItWorksSteps = [
    {
      step: 1,
      title: 'Business Requirement Gathering',
      body: 'We map your goals, audience, buying cycle and lead quality criteria before a single message goes out.',
      previewText: 'Analyzing customer touchpoints, catalog taxonomy, and enterprise ERP sync requirements.',
    },
    {
      step: 2,
      title: 'Campaign and Sales Funnel Setup',
      body: 'Templates, chatbot flows, catalogs and funnel stages are configured around how your team actually sells.',
      previewText: 'Configuring Meta verified templates, conversation triggers, and SLA auto-escalation rules.',
    },
    {
      step: 3,
      title: 'Leads Generated via Multiple Mediums',
      body: 'WhatsApp, web forms, ads, QR codes and inbound calls all feed the same lead pipeline.',
      previewText: 'Incoming inquiries from Meta Ads, website widgets, and offline QR codes converge in one stream.',
    },
    {
      step: 4,
      title: 'Leads Qualified Using Automated Processes',
      body: 'Scoring rules, qualification questions and intent detection separate hot buyers from casual enquiries.',
      previewText: 'AI bot captures budget, timeline, and company size, assigning real-time priority scores (86/100).',
    },
    {
      step: 5,
      title: 'Leads Delivered on the Orizer Dashboard',
      body: 'Qualified leads land in your dashboard and ERP with full conversation history and an assigned owner.',
      previewText: 'Sales team notified instantly with 2-way Orizer ERP quotation and dispatch synchronization.',
    },
  ];

  const industrySolutions = [
    {
      title: 'Manufacturing',
      icon: Factory,
      body: 'Order tracking, dispatch alerts, quotation approvals and vendor updates connected to your Orizer ERP modules.',
      link: '/solutions',
    },
    {
      title: 'E-Commerce',
      icon: ShoppingCart,
      body: 'Recover abandoned carts, confirm COD orders and push delivery updates without switching platforms.',
      link: '/solutions',
    },
    {
      title: 'Real Estate',
      icon: Building2,
      body: 'Qualify site visit requests, share property brochures and route serious buyers to the right sales manager.',
      link: '/solutions',
    },
    {
      title: 'EdTech & Education',
      icon: GraduationCap,
      body: 'Answer admission enquiries instantly, schedule demo classes and follow up on enrolments automatically.',
      link: '/solutions',
    },
    {
      title: 'Healthcare & Services',
      icon: Stethoscope,
      body: 'Appointment booking, reminders, reports delivery and post-service feedback on a channel patients already use.',
      link: '/solutions',
    },
  ];

  const whyOrizerBadges = [
    { label: 'Official WhatsApp Business API', icon: BadgeCheck },
    { label: 'Enterprise-grade SLA & security', icon: ShieldCheck },
    { label: 'Native Orizer ERP integration', icon: Layers },
    { label: 'Dedicated onboarding and support', icon: Users },
    { label: 'Zero conversation markup', icon: BarChart3 },
    { label: 'API-driven scalability', icon: Workflow },
  ];

  const testimonials = [
    {
      quote:
        'Dispatch and quotation updates now reach our dealers automatically. Our sales coordinators saved nearly two hours a day.',
      name: 'Production Head',
      org: 'Precision components manufacturer, Vapi',
    },
    {
      quote:
        'Enquiries from ads land as scored leads with the full chat history. Our follow-up rate went from patchy to predictable.',
      name: 'Sales Manager',
      org: 'Building materials distributor, Surat',
    },
    {
      quote:
        'The shared inbox ended the WhatsApp-on-personal-phone problem. Every conversation is owned, tracked and measurable.',
      name: 'Customer Success Lead',
      org: 'D2C brand, Ahmedabad',
    },
  ];

  const faqList = [
    {
      question: 'Is Orizer eBizChat an official WhatsApp Business API platform?',
      answer:
        'Yes. eBizChat runs on the official WhatsApp Business API, so your business number stays verified, compliant and eligible for the green tick application process.',
    },
    {
      question: 'How long does onboarding take?',
      answer:
        'Most businesses go live within 3 to 5 working days. Our team handles number verification, template approvals, chatbot setup and agent training.',
    },
    {
      question: 'What kind of support do we get after go-live?',
      answer:
        'You get a dedicated onboarding manager plus HelpDesk support on +91 98982 36655 and +91 97379 11132, available 9 AM to 6 PM, Monday to Saturday.',
    },
    {
      question: 'Can eBizChat connect to our Orizer ERP modules?',
      answer:
        'Yes. eBizChat connects natively with Orizer ERP for Inventory, PPC Automation, MRP, QC, Purchase, Sales, Finance and MIS, so dispatch, stock and order events trigger WhatsApp updates automatically.',
    },
    {
      question: 'Do you support Shopify, WooCommerce and custom systems?',
      answer:
        'eBizChat ships with Shopify and WooCommerce apps, outbound webhooks and a documented REST API for any custom system your team runs.',
    },
    {
      question: 'Are conversation charges marked up?',
      answer:
        'No. Meta conversation charges are passed through at actual cost with zero markup. You only pay the eBizChat platform fee for your plan.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      <SEOHead
        title="eBizChat by Orizer | WhatsApp Automation, Lead Capture & CRM"
        description="Turn Every Customer Conversation Into Business Growth. eBizChat brings WhatsApp automation, lead capture, qualification, a shared team inbox and CRM into one platform, connected to Orizer ERP."
        canonicalUrl="https://ebizchat.vercel.app/"
      />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO SECTION (Exact Lovable Mockup & Copy)
      ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-surface py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-primary/25 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                Orizer eBizChat
              </span>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                Turn Every Customer Conversation Into{' '}
                <span className="text-primary">Business Growth</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                eBizChat brings WhatsApp automation, lead capture, qualification,
                a shared team inbox and CRM into one platform, connected to the
                Orizer ERP your operations already run on.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 cursor-pointer"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 cursor-pointer"
                >
                  Book a Demo
                </button>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CircleCheck className="h-4 w-4 text-primary shrink-0" />
                  No-code setup
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="h-4 w-4 text-primary shrink-0" />
                  Live in 3-5 days
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck className="h-4 w-4 text-primary shrink-0" />
                  Zero conversation markup
                </li>
              </ul>
            </div>

            {/* Hero Dual-Card Interactive Mockup */}
            <div className="relative">
              <div
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/60 blur-2xl"
                aria-hidden="true"
              />
              <div className="grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-[0_30px_70px_-40px_rgba(16,24,40,0.55)] sm:grid-cols-2 sm:p-5">
                {/* WhatsApp Chat Preview Card */}
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <div className="flex items-center gap-2 border-b border-border pb-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
                      <MessageSquare className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">
                        Shreya Patel
                      </p>
                      <p className="text-xs text-muted-foreground">
                        WhatsApp &middot; Online
                      </p>
                    </div>
                    <BadgeCheck className="ml-auto h-4 w-4 shrink-0 text-primary" />
                  </div>
                  <div className="space-y-3 pt-4 text-xs">
                    <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-card px-3 py-2 text-foreground shadow-sm">
                      Hi, I need a quotation for 500 units of SKU-2049.
                    </p>
                    <p className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-primary-foreground">
                      Sure. Stock is available. Sharing the quotation and dispatch
                      timeline now.
                    </p>
                    <p className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-primary-foreground">
                      Quotation QTN-10482 &middot; Dispatch in 4 working days
                    </p>
                    <div className="flex gap-2 pt-1">
                      <span className="rounded-full border border-primary/30 px-3 py-1 font-medium text-brand-deep bg-accent/50">
                        Approve
                      </span>
                      <span className="rounded-full border border-border px-3 py-1 font-medium text-muted-foreground">
                        Talk to sales
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lead Panel & Today Activity Column */}
                <div className="space-y-4">
                  {/* Lead Panel */}
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Lead panel
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-foreground">
                        <User className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">
                          Shreya Patel
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Bulk buyer &middot; Vapi, Gujarat
                        </p>
                      </div>
                    </div>
                    <dl className="mt-4 space-y-2 text-xs">
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted-foreground">Score</dt>
                        <dd className="font-semibold text-foreground">
                          86 / 100
                        </dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted-foreground">Stage</dt>
                        <dd className="font-semibold text-foreground">
                          Quotation sent
                        </dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted-foreground">Owner</dt>
                        <dd className="font-semibold text-foreground">
                          Rahul M.
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* Today Stats */}
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-primary" />
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Today
                      </p>
                    </div>
                    <div
                      className="mt-4 flex h-20 items-end gap-2"
                      aria-hidden="true"
                    >
                      <span
                        className="flex-1 rounded-t bg-primary/80"
                        style={{ height: '38%' }}
                      />
                      <span
                        className="flex-1 rounded-t bg-primary/80"
                        style={{ height: '55%' }}
                      />
                      <span
                        className="flex-1 rounded-t bg-primary/80"
                        style={{ height: '42%' }}
                      />
                      <span
                        className="flex-1 rounded-t bg-primary/80"
                        style={{ height: '72%' }}
                      />
                      <span
                        className="flex-1 rounded-t bg-primary/80"
                        style={{ height: '60%' }}
                      />
                      <span
                        className="flex-1 rounded-t bg-primary/80"
                        style={{ height: '88%' }}
                      />
                      <span
                        className="flex-1 rounded-t bg-primary/80"
                        style={{ height: '68%' }}
                      />
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <CircleCheck className="h-4 w-4 text-primary shrink-0" />
                      98.2% delivery &middot; 71% read rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: METRICS BAR (5 Columns)
      ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-background py-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <div className="text-center lg:text-left">
              <p className="text-3xl font-bold text-foreground">220+</p>
              <p className="text-sm text-muted-foreground">Completed Projects</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-3xl font-bold text-foreground">2,810+</p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-3xl font-bold text-foreground">494+</p>
              <p className="text-sm text-muted-foreground">Business Awards</p>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 lg:justify-start">
              <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                Meta Business Partner
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 lg:justify-start">
              <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                Enterprise-grade SLA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: KEY FEATURES (4 Interactive Tabs)
      ───────────────────────────────────────────────────────────── */}
      <section id="features" className="scroll-mt-32 py-16 sm:py-24 bg-surface">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 mx-auto max-w-3xl items-center text-center">
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              Capabilities
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Key Features Of The{' '}
              <span className="text-primary">eBizChat Platform</span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Everything your customer-facing teams need to market, sell and support
              on WhatsApp, backed by CRM and automation.
            </p>
          </div>

          {/* 4 Tabs Selector */}
          <div className="mt-10 overflow-x-auto">
            <div className="flex min-w-max gap-2 rounded-2xl border border-border bg-card p-2">
              {featureTabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = tab.id === activeFeatureTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFeatureTab(tab.id)}
                    aria-pressed={isActive}
                    className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Tab Content Box */}
          <div className="mt-8 grid items-center gap-10 rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-2">
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                {currentFeature.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {currentFeature.body}
              </p>
              <ul className="space-y-3">
                {currentFeature.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-foreground">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore all features <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right Mockup Representation */}
            <div className="relative">
              <div
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/60 blur-2xl"
                aria-hidden="true"
              />
              <div className="grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-[0_30px_70px_-40px_rgba(16,24,40,0.55)] sm:grid-cols-2 sm:p-5">
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <div className="flex items-center gap-2 border-b border-border pb-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
                      <currentFeature.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {activeFeatureTab === 'chatbot'
                          ? 'Shreya Patel'
                          : activeFeatureTab === 'api'
                          ? 'Orizer ERP Sync'
                          : activeFeatureTab === 'leads'
                          ? 'Deal Pipeline'
                          : 'Team Inbox'}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Active &middot; Live
                      </p>
                    </div>
                    <BadgeCheck className="ml-auto h-4 w-4 shrink-0 text-primary" />
                  </div>
                  <div className="space-y-3 pt-4 text-xs">
                    <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-card px-3 py-2 text-foreground shadow-sm">
                      {activeFeatureTab === 'chatbot'
                        ? 'Hi, I need a quotation for 500 units of SKU-2049.'
                        : activeFeatureTab === 'api'
                        ? 'Webhook event: Order #ORD-9821 confirmed in Orizer ERP.'
                        : activeFeatureTab === 'leads'
                        ? 'New inbound enquiry from Gujarat regional distributor.'
                        : 'Customer waiting for dispatch confirmation for 48s.'}
                    </p>
                    <p className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-primary-foreground">
                      {activeFeatureTab === 'chatbot'
                        ? 'Sure. Stock is available. Sharing quotation now.'
                        : activeFeatureTab === 'api'
                        ? 'Triggered WhatsApp template message with invoice PDF attached.'
                        : activeFeatureTab === 'leads'
                        ? 'Lead qualified: Score 86/100, assigned to Rahul M.'
                        : 'Agent Rahul assigned. Canned reply sent in 12 seconds.'}
                    </p>
                    <p className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-primary-foreground">
                      {activeFeatureTab === 'chatbot'
                        ? 'Quotation QTN-10482 · Dispatch in 4 working days'
                        : activeFeatureTab === 'api'
                        ? 'Tracking URL generated and delivered to recipient.'
                        : activeFeatureTab === 'leads'
                        ? 'Quotation QTN-10482 generated directly in ERP.'
                        : 'Ticket resolved with 5-star customer feedback rating.'}
                    </p>
                    <div className="flex gap-2 pt-1">
                      <span className="rounded-full border border-primary/30 px-3 py-1 font-medium text-brand-deep bg-accent/40">
                        Approve
                      </span>
                      <span className="rounded-full border border-border px-3 py-1 font-medium text-muted-foreground">
                        Talk to sales
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {activeFeatureTab === 'chatbot'
                        ? 'Lead panel'
                        : activeFeatureTab === 'api'
                        ? 'Integration Status'
                        : activeFeatureTab === 'leads'
                        ? 'Pipeline Stage'
                        : 'Agent Queue'}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-foreground">
                        <User className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">
                          Shreya Patel
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Bulk buyer &middot; Vapi, Gujarat
                        </p>
                      </div>
                    </div>
                    <dl className="mt-4 space-y-2 text-xs">
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted-foreground">Score</dt>
                        <dd className="font-semibold text-foreground">86 / 100</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted-foreground">Stage</dt>
                        <dd className="font-semibold text-foreground">Quotation sent</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-muted-foreground">Owner</dt>
                        <dd className="font-semibold text-foreground">Rahul M.</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-4">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-primary" />
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Today
                      </p>
                    </div>
                    <div className="mt-4 flex h-20 items-end gap-2" aria-hidden="true">
                      <span className="flex-1 rounded-t bg-primary/80" style={{ height: '38%' }} />
                      <span className="flex-1 rounded-t bg-primary/80" style={{ height: '55%' }} />
                      <span className="flex-1 rounded-t bg-primary/80" style={{ height: '42%' }} />
                      <span className="flex-1 rounded-t bg-primary/80" style={{ height: '72%' }} />
                      <span className="flex-1 rounded-t bg-primary/80" style={{ height: '60%' }} />
                      <span className="flex-1 rounded-t bg-primary/80" style={{ height: '88%' }} />
                      <span className="flex-1 rounded-t bg-primary/80" style={{ height: '68%' }} />
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <CircleCheck className="h-4 w-4 text-primary shrink-0" />
                      98.2% delivery &middot; 71% read rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: PROCESS / HOW DOES IT WORK? (5 Steps)
      ───────────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="scroll-mt-32 py-16 sm:py-24 bg-background">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 mx-auto max-w-3xl items-center text-center">
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              Process
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How Does It <span className="text-primary">Work?</span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              A five-step rollout that takes you from requirement gathering to
              qualified leads landing in your Orizer dashboard.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Step Accordion Buttons */}
            <div className="space-y-3">
              {howItWorksSteps.map((s, idx) => {
                const isCurrent = idx === activeStep;
                return (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    aria-expanded={isCurrent}
                    className={`w-full rounded-2xl border p-5 text-left transition-colors cursor-pointer ${
                      isCurrent
                        ? 'border-primary/40 bg-accent'
                        : 'border-border bg-card hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-md border border-primary/30 px-2 py-1 text-xs font-semibold text-brand-deep bg-white/70">
                        Step {s.step}
                      </span>
                      <span className="text-base font-bold text-foreground">
                        {s.title}
                      </span>
                    </div>
                    {isCurrent && (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Sticky Step Visualization Box */}
            <div className="lg:sticky lg:top-40 lg:self-start">
              <div className="relative">
                <div
                  className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/60 blur-2xl"
                  aria-hidden="true"
                />
                <div className="grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-[0_30px_70px_-40px_rgba(16,24,40,0.55)] sm:grid-cols-2 sm:p-5">
                  <div className="rounded-2xl border border-border bg-surface p-4">
                    <div className="flex items-center gap-2 border-b border-border pb-3">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
                        <MessageSquare className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">
                          Shreya Patel
                        </p>
                        <p className="text-xs text-muted-foreground">
                          WhatsApp &middot; Step {howItWorksSteps[activeStep].step}
                        </p>
                      </div>
                      <BadgeCheck className="ml-auto h-4 w-4 shrink-0 text-primary" />
                    </div>
                    <div className="space-y-3 pt-4 text-xs">
                      <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-card px-3 py-2 text-foreground shadow-sm">
                        Hi, I need a quotation for 500 units of SKU-2049.
                      </p>
                      <p className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-primary-foreground">
                        {howItWorksSteps[activeStep].previewText}
                      </p>
                      <p className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-primary-foreground">
                        Quotation QTN-10482 &middot; Dispatch in 4 working days
                      </p>
                      <div className="flex gap-2 pt-1">
                        <span className="rounded-full border border-primary/30 px-3 py-1 font-medium text-brand-deep bg-accent/40">
                          Approve
                        </span>
                        <span className="rounded-full border border-border px-3 py-1 font-medium text-muted-foreground">
                          Talk to sales
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-border bg-card p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Lead panel
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-foreground">
                          <User className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-foreground">
                            Shreya Patel
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Bulk buyer &middot; Vapi, Gujarat
                          </p>
                        </div>
                      </div>
                      <dl className="mt-4 space-y-2 text-xs">
                        <div className="flex justify-between gap-2">
                          <dt className="text-muted-foreground">Score</dt>
                          <dd className="font-semibold text-foreground">86 / 100</dd>
                        </div>
                        <div className="flex justify-between gap-2">
                          <dt className="text-muted-foreground">Stage</dt>
                          <dd className="font-semibold text-foreground">
                            {howItWorksSteps[activeStep].title}
                          </dd>
                        </div>
                        <div className="flex justify-between gap-2">
                          <dt className="text-muted-foreground">Owner</dt>
                          <dd className="font-semibold text-foreground">Rahul M.</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="rounded-2xl border border-border bg-card p-4">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-primary" />
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          Today
                        </p>
                      </div>
                      <div className="mt-4 flex h-20 items-end gap-2" aria-hidden="true">
                        <span className="flex-1 rounded-t bg-primary/80" style={{ height: '38%' }} />
                        <span className="flex-1 rounded-t bg-primary/80" style={{ height: '55%' }} />
                        <span className="flex-1 rounded-t bg-primary/80" style={{ height: '42%' }} />
                        <span className="flex-1 rounded-t bg-primary/80" style={{ height: '72%' }} />
                        <span className="flex-1 rounded-t bg-primary/80" style={{ height: '60%' }} />
                        <span className="flex-1 rounded-t bg-primary/80" style={{ height: '88%' }} />
                        <span className="flex-1 rounded-t bg-primary/80" style={{ height: '68%' }} />
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                        <CircleCheck className="h-4 w-4 text-primary shrink-0" />
                        98.2% delivery &middot; 71% read rate
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: SOLUTIONS (5 Industry Sectors)
      ───────────────────────────────────────────────────────────── */}
      <section id="solutions" className="scroll-mt-32 py-16 sm:py-24 bg-surface">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 mx-auto max-w-3xl items-center text-center">
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              Solutions
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built For The Way Your{' '}
              <span className="text-primary">Industry Sells</span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Pre-built conversation flows, templates and integrations tuned to each
              sector Orizer already serves.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industrySolutions.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_12px_30px_-18px_rgba(16,24,40,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_18px_40px_-22px_rgba(16,90,70,0.45)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <IconComponent className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                  <Link
                    to={item.link}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: WHY ORIZER (Badges + 3 Real Testimonials)
      ───────────────────────────────────────────────────────────── */}
      <section id="why" className="scroll-mt-32 py-16 sm:py-24 bg-background">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 mx-auto max-w-3xl items-center text-center">
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              Why Orizer
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Businesses Choose{' '}
              <span className="text-primary">eBizChat</span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Orizer has delivered ERP and automation for SME, MSME and manufacturing
              businesses for years. eBizChat brings that same discipline to customer
              conversations.
            </p>
          </div>

          {/* 6 Feature Badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {whyOrizerBadges.map((badge) => {
              const IconComponent = badge.icon;
              return (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground"
                >
                  <IconComponent className="h-4 w-4 text-primary shrink-0" />
                  {badge.label}
                </span>
              );
            })}
          </div>

          {/* 3 Real Testimonials */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_12px_30px_-18px_rgba(16,24,40,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_18px_40px_-22px_rgba(16,90,70,0.45)]"
              >
                <Quote className="h-6 w-6 text-primary" />
                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 text-sm font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">{t.org}</p>
              </div>
            ))}
          </div>

          {/* Business Awards Footer Banner */}
          <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <Award className="h-5 w-5 text-primary shrink-0" />
            <span>
              494+ business awards and 220+ delivered projects across India.
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: FAQ (6 Exact Accordion Items)
      ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="scroll-mt-32 py-16 sm:py-24 bg-surface">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 mx-auto max-w-3xl items-center text-center">
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              FAQs
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Questions Teams Ask{' '}
              <span className="text-primary">Before Going Live</span>
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="space-y-3">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-border bg-card px-5 transition-colors"
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-foreground cursor-pointer hover:text-primary transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-primary' : ''
                          }`}
                        />
                      </button>
                    </h3>
                    {isOpen && (
                      <div className="pb-4 text-sm leading-relaxed text-muted-foreground animate-in fade-in duration-200">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/faq"
                className="text-sm font-semibold text-primary hover:underline"
              >
                See all frequently asked questions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: FINAL CTA BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="rounded-3xl border border-primary/25 bg-accent px-6 py-12 text-center sm:px-12">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to turn conversations into revenue?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Talk to the Orizer team about WhatsApp automation, lead qualification
              and ERP-connected customer engagement for your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 cursor-pointer"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 cursor-pointer"
              >
                Talk to Sales
              </button>
              <a
                href="tel:+919624513385"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-brand-deep hover:underline"
              >
                <Phone className="h-4 w-4" />
                +91 96245 13385
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: ORIZER HEADQUARTERS & INTERACTIVE MAP
      ───────────────────────────────────────────────────────────── */}
      <section id="contact-map" className="py-16 sm:py-20 border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="inline-flex items-center rounded-full border border-primary/25 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                  Headquarters &amp; Support
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mt-3">
                  Visit Our Vapi <span className="text-primary">Corporate Office</span>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Orizer ERP Infotech Pvt. Ltd. welcomes you to our corporate headquarters in Vapi, Gujarat. Schedule an on-site demo or meet our solution engineering team.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Orizer Headquarters</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      O-4 &amp; 5, First Floor, Beside Zudio-Westside, Mohid Tower, Daman Road, Chala, Vapi (W), Gujarat 396191
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Direct Tele-HelpDesk</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Direct:{' '}
                      <a href="tel:+919624513385" className="text-brand-deep font-semibold hover:underline">
                        +91 96245 13385
                      </a>
                      <br />
                      Support: +91 98982 36655, +91 97379 11132
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Business Hours</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Monday to Saturday: 9:00 AM &ndash; 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenContactModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 cursor-pointer"
                >
                  Schedule an In-Person Meeting <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="lg:col-span-7 min-h-[380px] rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
              <iframe
                title="Orizer ERP Headquarters Location - Mohid Tower Vapi"
                src="https://maps.google.com/maps?q=Mohid+Tower,+Daman+Road,+Chala,+Vapi,+Gujarat+396191&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
