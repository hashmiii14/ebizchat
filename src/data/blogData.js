export const BLOG_POSTS = [
  {
    id: "manufacturing-whatsapp-automation",
    slug: "how-discrete-manufacturers-cut-dispatch-delays-with-whatsapp-erp-sync",
    title: "How Discrete Manufacturers Cut Dispatch Inquiry Delays by 75% Using WhatsApp ERP Sync",
    excerpt: "Discover how industrial manufacturers are eliminating manual dispatch calls by automatically pushing LR tracking copies, vehicle updates, and invoices straight from Orizer ERP to client WhatsApp threads.",
    category: "Manufacturing",
    date: "September 12, 2026",
    readTime: "6 min read",
    author: {
      name: "Orizer Engineering Team",
      role: "Industrial ERP Solutions Group",
    },
    featured: true,
    content: `
### The Friction in Traditional Industrial Dispatch

In traditional manufacturing operations, the moment finished goods clear final Quality Inspection (QC) and roll out of the factory gate, a second wave of manual labor begins:
1. Dispatch clerks manually email or WhatsApp Lorry Receipts (LRs) to dealers one by one.
2. Dealers make dozens of phone calls inquiring: *"Has the truck left? What is the driver's contact? Where is my invoice copy?"*
3. Critical sales reps spend up to 2 hours every day playing telephone between plant dispatchers and impatient buyers.

### Bridging the Shop Floor and Customer Messaging

With **Orizer eBizChat**, the workflow is digitized at the source. The moment a dispatch entry is saved inside **Orizer ERP**:
- A secure webhook immediately fires to eBizChat.
- The system pulls the transporter name, vehicle registration, LR docket number, and generated invoice PDF.
- A pre-approved WhatsApp Utility message is dispatched directly to the registered purchasing contact with full tracking details attached.

### The Measurable Impact on Operations

Manufacturing clients running this integration report:
- **75% reduction in inbound dispatch inquiry calls**, freeing the logistics desk to focus on carrier negotiations.
- **Immediate delivery acknowledgement** with double-blue ticks verifying receipt.
- **Faster accounting clearance**: because the dealer receives the stamped delivery receipt instantaneously, invoice approvals and payment processing cycles accelerate by an average of 9 business days.
    `,
  },
  {
    id: "lead-qualification-speed",
    slug: "the-5-minute-rule-how-instant-whatsapp-qualification-triples-b2b-conversions",
    title: "The 5-Minute Rule: How Instant WhatsApp Qualification Triples B2B Deal Velocity",
    excerpt: "Research shows reaching an inbound prospect within 5 minutes increases conversion odds by 391%. Learn how automated WhatsApp lead journeys outpace slow email forms.",
    category: "Lead Generation",
    date: "August 28, 2026",
    readTime: "5 min read",
    author: {
      name: "SaaS Product Strategy",
      role: "eBizChat Growth Team",
    },
    featured: false,
    content: `
### Why Website Contact Forms Fail Modern B2B Buyers

When an enterprise decision-maker submits a contact form on a B2B vendor's website, industry average response times hover between 12 to 24 hours. By the time a sales rep picks up the phone or sends an introductory email, the prospect has already moved on to other meetings or contacted competitors.

### Instant Inbound Engagement via LeadGen+

Orizer eBizChat transforms traditional static landing pages into interactive WhatsApp conversations:
1. **Immediate Touchpoint**: The prospect clicks 'Chat on WhatsApp' and initiates conversation with one tap.
2. **Deterministic Qualification**: An automated sequence politely captures required volume, company GST/details, and timeline within 60 seconds.
3. **Smart Scoring & Assignment**: High-value accounts (e.g. bulk procurement) are flagged with high priority and assigned in real time to the senior account executive.
4. **CRM Sync**: Lead parameters are immediately logged in the eBizChat pipeline and synced to Orizer CRM.
    `,
  },
  {
    id: "whatsapp-green-tick-guide",
    slug: "complete-guide-to-meta-verified-green-tick-for-indian-enterprises",
    title: "The Complete Guide to Meta Verified Green Tick for Indian Enterprises & SMBs",
    excerpt: "A practical walkthrough of eligibility criteria, documentation, Facebook Business Manager verification, and best practices to obtain the coveted WhatsApp Green Tick.",
    category: "WhatsApp API",
    date: "August 14, 2026",
    readTime: "7 min read",
    author: {
      name: "Compliance & Integration Specialist",
      role: "Meta Partner Operations",
    },
    featured: false,
    content: `
### What the Green Tick Represents

The green verification badge next to a WhatsApp Business account name confirms to recipients that Meta has verified the brand as an authentic, established entity. It builds instant consumer trust and increases message response rates by up to 28%.

### Key Prerequisites for Indian Businesses

To qualify for WhatsApp Official Business Account (OBA) status:
- Complete Facebook Business Manager verification with legal business documentation (GST Certificate, Certificate of Incorporation, MSME Udyam Registration).
- An active WhatsApp Business API phone number operating with a high Quality Rating.
- Organic brand presence and verifiable press coverage in regional or national publications.
- Clean compliance record with Meta's Commerce and Business policies.

Orizer eBizChat guides clients through every step of the verification docket to maximize first-time approval odds.
    `,
  },
  {
    id: "shared-inbox-best-practices",
    slug: "scaling-customer-conversations-without-chaos-shared-inbox-playbook",
    title: "Scaling Customer Conversations Without Chaos: The Multi-Agent WhatsApp Playbook",
    excerpt: "How scaling sales and support teams can operate from a single phone number using agent collision prevention, private notes, and skill-based routing.",
    category: "Customer Support",
    date: "July 30, 2026",
    readTime: "4 min read",
    author: {
      name: "Customer Operations Desk",
      role: "eBizChat Implementation",
    },
    featured: false,
    content: `
### The Danger of Personal WhatsApp Web Logins

Many growing businesses still rely on scanning QR codes onto 4 or 5 personal browser windows. The consequences are predictable:
- Reps accidentally talk over each other, sending contradicting prices.
- When an employee leaves, customer contact history and conversations walk out the door with them.
- Management has zero visibility into response times or customer satisfaction.

### Enterprise Control with a Shared Team Inbox

eBizChat solves this with an enterprise multi-agent architecture:
- Single verified corporate number, accessible to all authorized team members.
- Live collision indicators showing when a teammate is currently responding.
- Internal private notes where teammates can discuss complex terms before replying to the customer.
- Complete conversation logging preserved permanently on company servers.
    `,
  },
];

export const CASE_STUDIES = [
  {
    id: "heavy-machinery-oem",
    client: "Apex Industrial Dynamics",
    industry: "Heavy Machinery & Engineering OEM",
    location: "Ahmedabad, Gujarat",
    challenge: "Managing 350+ authorized component dealers across western India with manual telephone quotation follow-ups and delayed dispatch documentation.",
    solution: "Implemented Orizer eBizChat integrated with Orizer Manufacturing ERP modules (Inventory, Sales Order, and PPC Automation).",
    metrics: [
      { value: "72%", label: "Faster Quote-to-PO Cycle" },
      { value: "85%", label: "Dealers Self-Serving Stock Data" },
      { value: "₹42 Lakh", label: "Overdue Receivables Recovered in 60 Days" },
    ],
    quote: "eBizChat connected our plant dispatch directly to our dealers' pockets. The reduction in phone inquiries alone saved our sales desk 18 hours every single week.",
    author: "Director of Operations",
  },
  {
    id: "national-chemical-distributor",
    client: "Sterling Specialty Chemicals",
    industry: "Specialty Chemicals & Raw Material Distribution",
    location: "Vapi, Gujarat",
    challenge: "High volume of hazardous material dispatch certificates, MSDS sheets, and batch quality test reports requiring timely verification by chemical buyers.",
    solution: "Automated test certificate dispatch and payment reminders via verified WhatsApp Business API and eBizChat workflow engine.",
    metrics: [
      { value: "100%", label: "Traceable Batch Certificate Delivery" },
      { value: "4.9/5", label: "Client Audit & QC Compliance Score" },
      { value: "<30s", label: "Average Response for Price Lists" },
    ],
    quote: "Our buyers require instant batch inspection reports before unloading tankers. eBizChat delivers PDFs the exact second the laboratory approves the batch in Orizer ERP.",
    author: "Head of Supply Chain",
  },
];
