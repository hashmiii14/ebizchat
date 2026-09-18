export const FEATURES_DATA = {
  marketing: {
    slug: "whatsapp-marketing",
    badge: "Marketing & Outreach",
    title: "WhatsApp Marketing & Broadcast Campaigns",
    headline: "Drive 45%+ Open Rates with Personalized WhatsApp Broadcasts",
    description: "Launch targeted marketing campaigns, broadcast promotional catalogs, and recover dropped conversions directly through official Meta WhatsApp Business API channels.",
    stats: [
      { value: "45%+", label: "Average Open Rate" },
      { value: "5x", label: "Higher Engagement vs Email" },
      { value: "100%", label: "Meta Policy Compliant" },
      { value: "<2 sec", label: "Message Delivery Speed" },
    ],
    capabilities: [
      {
        title: "Verified Template Messaging",
        desc: "Build rich media templates with interactive quick-reply buttons, call-to-action links, and dynamic personalization tags pre-approved by Meta.",
      },
      {
        title: "Intelligent Audience Segmentation",
        desc: "Segment customers by purchase history, lead score, ERP account type, or geographic region for surgical targeting.",
      },
      {
        title: "Automated Drip Sequences",
        desc: "Set up multi-stage nurture sequences that educate prospects, deliver whitepapers, and automatically advance leads toward sales calls.",
      },
      {
        title: "Interactive Catalogs & Carousels",
        desc: "Showcase manufacturing products, spare parts, or retail inventories with rich product cards directly inside the customer's WhatsApp chat.",
      },
    ],
    workflow: [
      { step: "01", name: "Segment Audience", desc: "Filter contacts via ERP customer tiers or website lead tags" },
      { step: "02", name: "Select Template", desc: "Choose pre-approved high-converting message with dynamic variables" },
      { step: "03", name: "Schedule & Send", desc: "Dispatch at optimal time windows with rate-limiting protection" },
      { step: "04", name: "Track & Convert", desc: "Monitor delivery, read receipts, button clicks, and sales replies in real time" },
    ],
  },

  leadManagement: {
    slug: "lead-management",
    badge: "Lead Acceleration",
    title: "Lead Capture & Pipeline Management",
    headline: "Never Lose an Inbound Inquiry Again",
    description: "Consolidate leads from WhatsApp, website forms, social ads, and inbound phone inquiries into an automated visual pipeline with real-time scoring and SLA assignment.",
    stats: [
      { value: "0 min", label: "Instant Lead Capture" },
      { value: "3.2x", label: "Faster First Response Time" },
      { value: "100%", label: "Contact Traceability" },
      { value: "38%", label: "Pipeline Velocity Increase" },
    ],
    capabilities: [
      {
        title: "Omnichannel Lead Ingestion",
        desc: "Automatically funnel prospects from WhatsApp click-to-chat ads, QR codes, website widgets, and trade show campaigns into one unified dashboard.",
      },
      {
        title: "Automated Lead Scoring",
        desc: "Rank prospects based on budget, purchase timeline, company size, and conversational responses to prioritize high-value commercial accounts.",
      },
      {
        title: "Visual Kanban Stages",
        desc: "Drag and drop deals across stages: New Inbound, Contacted, Qualified, Quote Sent, Negotiation, and Closed-Won.",
      },
      {
        title: "Round-Robin Agent Distribution",
        desc: "Assign incoming leads evenly or based on product specialization, location, or current agent capacity to ensure rapid first touch.",
      },
    ],
    workflow: [
      { step: "01", name: "Prospect Reaches Out", desc: "Customer taps WhatsApp button on website or clicks a campaign link" },
      { step: "02", name: "Automatic Enrichment", desc: "System creates lead profile, captures phone, source, and initial requirement" },
      { step: "03", name: "Score & Route", desc: "Rule engine assigns high-priority leads directly to appropriate sales reps" },
      { step: "04", name: "ERP Sync", desc: "Lead converts into an official Orizer ERP inquiry or quotation draft" },
    ],
  },

  chatbot: {
    slug: "chatbot",
    badge: "Intelligent Automation",
    title: "Hybrid Conversational Chatbot",
    headline: "24/7 Precision Qualification with Seamless Human Handoff",
    description: "Combine guided conversational menus, keyword triggers, and natural language understanding to answer customer questions and qualify buyers around the clock.",
    stats: [
      { value: "24/7", label: "Continuous Availability" },
      { value: "65%", label: "Routine Queries Resolved" },
      { value: "<1 sec", label: "Instant Answer Latency" },
      { value: "Zero", label: "Hallucinated Specs" },
    ],
    capabilities: [
      {
        title: "Product Catalog & Spec Lookup",
        desc: "Empower customers to look up technical specifications, minimum order quantities, and stock availability directly through menu selections.",
      },
      {
        title: "Smart Human Escalation",
        desc: "When a customer requests custom negotiation or reaches high intent, the bot immediately alerts live reps in the shared team inbox.",
      },
      {
        title: "FAQ & Document Grounding",
        desc: "Ground responses in your verified company brochures, warranty terms, and manufacturing capabilities without speculative replies.",
      },
      {
        title: "Multilingual Business Messaging",
        desc: "Engage clients across English, Hindi, and regional languages to maximize customer comfort and conversion rates.",
      },
    ],
    workflow: [
      { step: "01", name: "Trigger Interaction", desc: "Customer greets or asks a question on your business WhatsApp" },
      { step: "02", name: "Intent Identification", desc: "System categorizes request into Quote, Spec, Order Status, or Support" },
      { step: "03", name: "Instant Resolution", desc: "Bot serves validated information or collects structured qualification details" },
      { step: "04", name: "Agent Takeover", desc: "Transfers seamlessly to executive with complete conversational transcript" },
    ],
  },

  teamInbox: {
    slug: "team-inbox",
    badge: "Team Collaboration",
    title: "Shared Team Inbox & Multi-Agent CRM",
    headline: "One WhatsApp Number, Infinite Team Collaboration",
    description: "Empower your entire sales, dispatch, and support team to operate from a single verified WhatsApp Business number without message chaos or duplicate replies.",
    stats: [
      { value: "Unlimited", label: "Team Agent Seats" },
      { value: "100%", label: "Collision Prevention" },
      { value: "360°", label: "Customer Conversation Log" },
      { value: "40%", label: "Resolution Speed Gain" },
    ],
    capabilities: [
      {
        title: "Collision Detection & Live Presence",
        desc: "See when another teammate is currently viewing or drafting a reply to avoid confusing the customer with double responses.",
      },
      {
        title: "Private Internal Notes & @Mentions",
        desc: "Tag colleagues, finance managers, or plant supervisors directly inside the customer conversation thread to collaborate privately.",
      },
      {
        title: "Custom Tags & Customer Attributes",
        desc: "Tag chats by 'Wholesale Dealer', 'Urgent Dispatch', 'VIP Account', or 'Payment Pending' for quick filtering and assignment.",
      },
      {
        title: "Quick-Reply Snippets",
        desc: "Equip your reps with verified standard answers, company bank details, and technical spec sheets accessible via slash commands.",
      },
    ],
    workflow: [
      { step: "01", name: "Centralized Arrival", desc: "All incoming messages land in a synchronized, real-time shared inbox" },
      { step: "02", name: "Agent Assignment", desc: "Thread is assigned automatically or claimed by an available specialist" },
      { step: "03", name: "Collaborative Resolution", desc: "Team discusses internally using notes and responds with verified data" },
      { step: "04", name: "Thread Resolution & Tagging", desc: "Chat is marked resolved with disposition tags for MIS analytics" },
    ],
  },

  automation: {
    slug: "automation",
    badge: "Workflow Builder",
    title: "No-Code Workflow & Business Automation",
    headline: "Put Repetitive Business Communication on Autopilot",
    description: "Build visual trigger-condition-action sequences that send order dispatches, follow up on unpaid quotes, notify field agents, and sync with your ERP automatically.",
    stats: [
      { value: "100+", label: "Trigger Combinations" },
      { value: "15 hrs", label: "Saved Per Rep Every Week" },
      { value: "Zero", label: "Missed Follow-Ups" },
      { value: "100%", label: "Auditable Execution Logs" },
    ],
    capabilities: [
      {
        title: "Visual Flow Canvas",
        desc: "Design complex communication workflows without writing code using intuitive trigger, delay, branch, and action nodes.",
      },
      {
        title: "Quotation & PO Follow-Up Sequences",
        desc: "Automatically check in with prospects at 24 hours, 72 hours, and 7 days after sending an official ERP price quotation.",
      },
      {
        title: "Payment & Ledger Alerts",
        desc: "Notify clients when invoices are due or payments are received, attaching PDF receipts directly via WhatsApp.",
      },
      {
        title: "Production & Dispatch Milestones",
        desc: "Trigger notifications as orders progress through Orizer ERP manufacturing stages: Cutting, Assembly, QC, and Shipping.",
      },
    ],
    workflow: [
      { step: "01", name: "Define Trigger", desc: "Event occurs (e.g. New Website Lead, Invoice Generated in ERP)" },
      { step: "02", name: "Set Condition", desc: "Evaluate logic (e.g. Order value > ₹50,000 OR State = Gujarat)" },
      { step: "03", name: "Execute Action", desc: "Send tailored WhatsApp notification, assign sales rep, schedule reminder" },
      { step: "04", name: "Branch on Response", desc: "Listen for customer reply and execute appropriate follow-up branch" },
    ],
  },

  analytics: {
    slug: "analytics",
    badge: "Business Intelligence",
    title: "Analytics, Reporting & MIS Insights",
    headline: "Full Visibility into Communication, Response Times & Sales Funnels",
    description: "Gain complete executive insight into message delivery rates, customer engagement, individual agent SLAs, and campaign revenue attribution.",
    stats: [
      { value: "Real-Time", label: "Telemetry & Live Logs" },
      { value: "1 Click", label: "Export to Excel & ERP" },
      { value: "100%", label: "Rep Activity Auditing" },
      { value: "Executive", label: "MIS Summary Dashboards" },
    ],
    capabilities: [
      {
        title: "Campaign Delivery & Conversion Tracking",
        desc: "Measure exact sent, delivered, read, and replied counts for every marketing broadcast and transactional notification.",
      },
      {
        title: "Agent Response Time & SLA Metrics",
        desc: "Track first response time, average resolution duration, and customer satisfaction scores across your entire support and sales fleet.",
      },
      {
        title: "Lead Funnel Bottleneck Detection",
        desc: "Identify exactly where prospects stall in your sales pipeline to coach sales reps and optimize conversational scripts.",
      },
      {
        title: "Executive MIS Reports for Management",
        desc: "Generate weekly and monthly reports aligning WhatsApp communication directly with sales revenue and inventory movement.",
      },
    ],
    workflow: [
      { step: "01", name: "Data Aggregation", desc: "Continuous event logging across messages, contacts, and ERP transactions" },
      { step: "02", name: "Real-Time Processing", desc: "Calculates response SLAs, throughput, and conversion metrics instantly" },
      { step: "03", name: "Interactive Visuals", desc: "Explore charts by date range, department, agent, or campaign type" },
      { step: "04", name: "Automated Digest", desc: "Schedule daily or weekly MIS PDF digests directly to leadership" },
    ],
  },

  integrations: {
    slug: "integrations",
    badge: "Ecosystem Connectivity",
    title: "Enterprise ERP & API Integrations",
    headline: "Seamless Connection to Orizer ERP and Your Existing IT Stack",
    description: "Connect eBizChat with Orizer ERP, legacy databases, CRM platforms, e-commerce stores, and custom accounting tools via enterprise webhooks and REST APIs.",
    stats: [
      { value: "Native", label: "Orizer ERP Integration" },
      { value: "<50ms", label: "Webhook Dispatch Latency" },
      { value: "RESTful", label: "Developer Friendly APIs" },
      { value: "End-to-End", label: "Encrypted Data Payloads" },
    ],
    capabilities: [
      {
        title: "Native Orizer ERP 2-Way Sync",
        desc: "Bi-directional data flow syncing customer balances, order dispatches, inventory counts, and price lists in real time.",
      },
      {
        title: "Robust REST APIs & Webhooks",
        desc: "Trigger WhatsApp messages from any external system via secure API tokens and receive inbound events via instant webhooks.",
      },
      {
        title: "E-Commerce & Payment Gateways",
        desc: "Integrate with Shopify, WooCommerce, Razorpay, and Cashfree for instant payment links and order status updates.",
      },
      {
        title: "CRM & Accounting Systems",
        desc: "Synchronize customer interactions with Salesforce, Zoho, Tally, or custom internal SQL databases without duplication.",
      },
    ],
    workflow: [
      { step: "01", name: "Secure Authentication", desc: "Establish authenticated API connection via TLS 1.3 and scoped tokens" },
      { step: "02", name: "Map Schema Fields", desc: "Align customer attributes and order statuses between ERP and eBizChat" },
      { step: "03", name: "Event Triggers", desc: "Configure webhooks for sales orders, dispatches, and incoming leads" },
      { step: "04", name: "Continuous Sync", desc: "Operate with real-time bidirectional synchronization and audit logs" },
    ],
  },
};
