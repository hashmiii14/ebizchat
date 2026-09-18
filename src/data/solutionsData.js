export const SOLUTIONS_DATA = {
  manufacturing: {
    slug: "manufacturing",
    industry: "Manufacturing & Industrial Enterprises",
    headline: "Automate Factory-to-Customer Communication with Direct Orizer ERP Sync",
    subheadline: "Empowering discrete and process manufacturers to automate dispatch notifications, dealer inquiries, purchase order approvals, and QC certificates over WhatsApp.",
    painPoints: [
      "Customers and dealers constantly calling dispatch desks for LR (Lorry Receipt) numbers and shipment tracking.",
      "Sales teams spending hours manually typing out product specs and price quotations already recorded in ERP.",
      "Vendors missing purchase order deadlines due to unread email inquiries.",
      "Delay in collecting outstanding payments due to delayed statement distribution.",
    ],
    howHelps: "eBizChat connects directly with your Orizer ERP database. The moment a dispatch entry is posted in Orizer ERP, a verified WhatsApp notification with LR number, driver contact, and invoice PDF is automatically dispatched to the customer. Dealers can check real-time stock and order statuses 24/7 without calling your staff.",
    keyFeatures: [
      "Automated Dispatch & Tracking Alerts (LR Number, Transporter Name, Tracking Link)",
      "Instant Sales Quotation & Proforma Invoice (PI) Delivery with PDF attachment",
      "PPC (Production Planning & Control) Milestone Updates for custom manufacturing jobs",
      "Vendor Purchase Order (PO) dispatch and automated delivery confirmation",
      "Quality Control (QC) inspection certificates and test reports delivery",
      "Automated Ledger Statements and Outstanding Payment Reminders with UPI links",
    ],
    useCases: [
      {
        title: "Automated Lorry Receipt (LR) Dispatch",
        desc: "When the dispatch manager enters goods leaving the factory gate into Orizer ERP, the dealer instantly receives a WhatsApp message with vehicle number, LR copy, and expected delivery date.",
      },
      {
        title: "Dealer Stock Availability Inquiry",
        desc: "Authorized distributors send 'STOCK <Item Code>' to your verified business number and receive live stock counts and current rates from the Orizer Inventory module.",
      },
      {
        title: "Overdue Payment Nudge with Ledger Statement",
        desc: "Automated friendly reminder sent 3 days before credit term expiry with attached ledger statement, reducing average payment collection cycles by 9 days.",
      },
    ],
    results: [
      { metric: "75%", label: "Reduction in Dispatch Status Calls" },
      { metric: "9 Days", label: "Faster Outstanding Payment Recovery" },
      { metric: "100%", label: "Accuracy with Direct ERP Data Grounding" },
      { metric: "4.8/5", label: "Dealer & Client Satisfaction Rating" },
    ],
  },

  ecommerce: {
    slug: "ecommerce",
    industry: "E-Commerce & Direct-to-Consumer (D2C)",
    headline: "Turn WhatsApp into Your Highest Converting Sales & Retention Channel",
    subheadline: "Recover abandoned shopping carts, verify Cash-on-Delivery (COD) orders instantly, and deliver real-time shipment updates that build customer loyalty.",
    painPoints: [
      "Cart abandonment rates averaging 70%+ across online stores.",
      "High Return-to-Origin (RTO) losses on unverified COD purchases.",
      "Support inboxes swamped with 'Where Is My Order?' (WISMO) queries.",
      "Low open rates on marketing emails and promotional SMS.",
    ],
    howHelps: "eBizChat automatically triggers high-converting WhatsApp reminders with personalized discounts to shoppers who abandon their checkout. For COD orders, an automated interactive WhatsApp button confirms the purchase before packaging, drastically reducing RTO expenses.",
    keyFeatures: [
      "Interactive 1-Click Abandoned Cart Recovery Sequences",
      "Automated COD Confirmation with Quick-Reply Buttons (Confirm / Cancel)",
      "Live Order Tracking & Courier Milestone Notifications (Bluedart, Delhivery, etc.)",
      "Post-Purchase Review & Rating Collection",
      "Direct WhatsApp Store Catalog with 1-Click Checkout Links",
      "Back-in-Stock and Price Drop Alerts for saved wishlist items",
    ],
    useCases: [
      {
        title: "1-Click COD Order Confirmation",
        desc: "Instantly prompt shoppers to verify delivery address and confirm COD purchase, filtering fake or unintentional orders before dispatch.",
      },
      {
        title: "Intelligent Cart Recovery Flow",
        desc: "Sends a personalized reminder 30 minutes after checkout drop-off showing the exact items left behind, recovering up to 24% of abandoned carts.",
      },
      {
        title: "Automated Courier Status Updates",
        desc: "Deliver updates when the parcel is packed, out for delivery, and delivered, including the delivery agent's OTP protocol.",
      },
    ],
    results: [
      { metric: "24%", label: "Average Cart Recovery Rate" },
      { metric: "35%", label: "Reduction in COD RTO Returns" },
      { metric: "60%", label: "Reduction in WISMO Support Tickets" },
      { metric: "5.4x", label: "Higher Click-Through vs SMS" },
    ],
  },

  education: {
    slug: "education",
    industry: "Education, Universities & EdTech",
    headline: "Streamline Student Admissions, Fee Reminders & Campus Alerts",
    subheadline: "Engage prospective students instantly, automate entrance exam inquiries, and keep parents updated with official institutional communications.",
    painPoints: [
      "Delayed responses to admission inquiries causing prospective students to choose competitor colleges.",
      "Manual phone calls for fee dues consuming hundreds of administrative hours.",
      "Important exam schedules and holiday circulars lost in unread student email inboxes.",
      "Fragmented communication between parents, students, and departmental faculty.",
    ],
    howHelps: "eBizChat deploys an admissions assistant that answers course syllabus, fee structure, and eligibility questions instantly. Automated reminders deliver fee payment links directly to parents' WhatsApp, with automated receipt delivery.",
    keyFeatures: [
      "24/7 Admission & Course Eligibility Inquiry Assistant",
      "Automated Semester Fee Due Reminders with Instant Payment Links",
      "Exam Hall Ticket, Schedule & Result Notifications",
      "Parent-Teacher Meeting & Attendance Alerts",
      "Application Form Status Tracking via Student Roll Number",
      "Placement Drive Announcements and Campus Bulletins",
    ],
    useCases: [
      {
        title: "Round-the-Clock Admission Counseling",
        desc: "Prospective students ask about seat availability, hostel accommodations, and cut-off marks, receiving accurate information and application forms.",
      },
      {
        title: "Fee Reminder with Online Payment Gateway",
        desc: "Parents receive automated notifications before tuition due dates with secure UPI payment links and instant payment acknowledgement.",
      },
      {
        title: "Urgent Campus & Exam Notifications",
        desc: "Broadcast sudden schedule changes or exam dates with 98% read rates within 15 minutes of release.",
      },
    ],
    results: [
      { metric: "3.5x", label: "Increase in Admission Inquiries Handled" },
      { metric: "40%", label: "Faster Fee Collection Cycles" },
      { metric: "98%", label: "Circular Read Rate on WhatsApp" },
      { metric: "70%", label: "Reduction in Routine Office Phone Calls" },
    ],
  },

  realEstate: {
    slug: "real-estate",
    industry: "Real Estate, Builders & Property Developers",
    headline: "Qualify High-Net-Worth Buyers & Book Site Visits Instantly",
    subheadline: "Capture property inquiries from ad campaigns, share brochures, filter genuine buyers by budget, and coordinate broker lead distribution.",
    painPoints: [
      "Ad campaign leads turning cold due to delayed follow-ups by sales agents.",
      "High volume of casual inquiries wasting field executive site visit time.",
      "Difficulties tracking which channel or broker originated the prospective buyer.",
      "Manual scheduling of weekend site visits leading to double bookings and no-shows.",
    ],
    howHelps: "When a homebuyer clicks a property advertisement, eBizChat greets them instantly on WhatsApp, provides the digital brochure and floor plans, qualifies their budget and possession timeline, and schedules an on-site visit directly with the project manager.",
    keyFeatures: [
      "Instant Property Brochure & Floor Plan Delivery on WhatsApp",
      "Automated Buyer Qualification (Budget, Location Preference, 2BHK/3BHK, Timeline)",
      "Self-Serve Site Visit Appointment Booking with Calendar Invites",
      "Automated Location Map & Directions Dispatch prior to visit",
      "Broker & Channel Partner Lead Registration and Tracking",
      "Construction Progress Milestone Photos & Investor Updates",
    ],
    useCases: [
      {
        title: "Instant Digital Brochure Dispatch",
        desc: "Home seekers receive high-resolution floor plans, project video walkthroughs, and pricing matrices the moment they inquire.",
      },
      {
        title: "Automated Site Visit Scheduling & Directions",
        desc: "Allows buyers to pick Saturday or Sunday time slots, sends Google Maps location, and alerts the on-site sales host.",
      },
      {
        title: "Construction Milestone Reports",
        desc: "Send existing buyers photo updates when slab casting or interior plastering is completed to maintain high trust.",
      },
    ],
    results: [
      { metric: "4.2x", label: "Higher Site Visit Show-Up Rate" },
      { metric: "80%", label: "Inquiries Handled in Under 30 Seconds" },
      { metric: "45%", label: "Higher Conversion from Ad Spend" },
      { metric: "100%", label: "Broker Lead Attribution Tracking" },
    ],
  },

  services: {
    slug: "services",
    industry: "B2B Professional Services & Consultancies",
    headline: "Accelerate Client Onboarding & Milestone Sign-Offs",
    subheadline: "Automate appointment bookings, document collection, proposal reviews, and support ticket management for modern service firms.",
    painPoints: [
      "Back-and-forth email tag to schedule discovery consultations.",
      "Delays in collecting required onboarding documents and KYC credentials.",
      "Clients unaware of project progress until formal billing reviews.",
      "Unstructured WhatsApp messages sent to personal employee phones without central tracking.",
    ],
    howHelps: "Provide clients a single verified corporate WhatsApp channel. Coordinate calendar appointments, collect project briefs, and send milestone sign-offs that keep projects on schedule and leadership fully accountable.",
    keyFeatures: [
      "Integrated Calendar Booking via WhatsApp with Timezone Conversion",
      "Secure Document & KYC Collection with Instant Cloud Upload",
      "Automated Milestone Status Updates & Project Deliverables Delivery",
      "Shared Client History across Project Managers and Account Executives",
      "Automated Retainer Invoice Reminders with Direct Payment Options",
      "Customer Feedback & Net Promoter Score (NPS) Surveys",
    ],
    useCases: [
      {
        title: "Frictionless Discovery Call Scheduling",
        desc: "Prospects select preferred consultation slots via simple interactive buttons without leaving their WhatsApp chat.",
      },
      {
        title: "Client Document Collection & Verification",
        desc: "Request required GST certificates, financial statements, or project briefs with automated reminders until received.",
      },
      {
        title: "Sprint & Milestone Delivery Sign-Offs",
        desc: "Notify clients when deliverables are ready for review with direct approval links.",
      },
    ],
    results: [
      { metric: "60%", label: "Reduction in Scheduling Back-and-Forth" },
      { metric: "3x", label: "Faster Client Document Collection" },
      { metric: "99%", label: "Accountability with Centralized Chat Logs" },
      { metric: "4.9/5", label: "Client Onboarding Experience Score" },
    ],
  },
};
