export const NAVIGATION_LINKS = [
  {
    name: "Lead Generation",
    path: "/lead-generation",
    hash: "#lead-generation",
  },
  {
    name: "Features",
    path: "/features",
    hasDropdown: true,
    dropdownItems: [
      {
        title: "WhatsApp Marketing",
        description: "WhatsApp broadcasts, targeted campaigns, and dynamic catalog messaging",
        path: "/features/whatsapp-marketing",
        icon: "Megaphone",
      },
      {
        title: "Shared Team Inbox",
        description: "Multi-agent collaboration with collision detection, notes, and routing",
        path: "/features/team-inbox",
        icon: "Inbox",
      },
      {
        title: "No-Code Chatbots",
        description: "Hybrid keyword & AI agent for 24/7 instant customer qualification",
        path: "/features/chatbot",
        icon: "Bot",
      },
      {
        title: "Sales Automation",
        description: "Visual drag-and-drop trigger, condition, and action builder",
        path: "/features/automation",
        icon: "GitBranch",
      },
      {
        title: "Lead Management & CRM",
        description: "Multi-channel intake, automated qualification, and visual Kanban pipelines",
        path: "/features/lead-management",
        icon: "Filter",
      },
      {
        title: "Analytics & Intelligence",
        description: "Real-time delivery rates, team SLA metrics, and MIS business reports",
        path: "/features/analytics",
        icon: "BarChart3",
      },
      {
        title: "ERP & API Integrations",
        description: "Deep bidirectional synchronization with Orizer ERP and enterprise systems",
        path: "/features/integrations",
        icon: "Layers",
      },
    ],
  },
  {
    name: "Solutions",
    path: "/solutions",
    hasDropdown: true,
    dropdownItems: [
      {
        title: "Manufacturing & Industrial",
        description: "Direct Orizer ERP sync for dispatch notes, PO alerts, and dealer communication",
        path: "/solutions/manufacturing",
        icon: "Factory",
      },
      {
        title: "E-Commerce & Retail",
        description: "Abandoned cart recovery, COD confirmation, and automated order tracking",
        path: "/solutions/ecommerce",
        icon: "ShoppingBag",
      },
      {
        title: "Education & EdTech",
        description: "Student admission inquiries, fee reminders, and attendance updates",
        path: "/solutions/education",
        icon: "GraduationCap",
      },
      {
        title: "Real Estate & Infrastructure",
        description: "Instant buyer qualification, site visit booking, and broker management",
        path: "/solutions/real-estate",
        icon: "Building2",
      },
      {
        title: "Healthcare & Clinics",
        description: "24/7 OPD appointment bookings, secure diagnostic report delivery, and patient reminders",
        path: "/solutions/healthcare",
        icon: "Heart",
      },
      {
        title: "Professional Services & B2B",
        description: "Client onboarding, automated meeting scheduling, and quotation follow-ups",
        path: "/solutions/services",
        icon: "Briefcase",
      },
    ],
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Resources",
    path: "/resources",
    hasDropdown: true,
    dropdownItems: [
      {
        title: "Resource Center",
        description: "Product documentation, WhatsApp API setup guides, and whitepapers",
        path: "/resources",
        icon: "BookOpen",
      },
      {
        title: "Blog & Insights",
        description: "Expert articles on WhatsApp sales automation and ERP connectivity",
        path: "/blog",
        icon: "FileText",
      },
      {
        title: "Frequently Asked Questions",
        description: "Everything you need to know about Meta API, pricing, and onboarding",
        path: "/faq",
        icon: "HelpCircle",
      },
      {
        title: "Customer Case Studies",
        description: "Real-world production results from manufacturing and enterprise clients",
        path: "/case-studies",
        icon: "Award",
      },
    ],
  },
];

export const FOOTER_SECTIONS = [
  {
    title: "Product",
    links: [
      { label: "Features", path: "/features" },
      { label: "Integrations", path: "/features/integrations" },
      { label: "WhatsApp API", path: "/features/whatsapp-marketing" },
      { label: "Security", path: "/about" },
      { label: "Pricing", path: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Marketing", path: "/features/whatsapp-marketing" },
      { label: "Sales", path: "/features/lead-management" },
      { label: "Support", path: "/features/team-inbox" },
      { label: "Automation", path: "/features/automation" },
      { label: "Chatbots", path: "/features/chatbot" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", path: "/faq" },
      { label: "Blog", path: "/blog" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "Webinars", path: "/resources" },
      { label: "Help Center", path: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Careers", path: "/about" },
      { label: "Partners", path: "/contact" },
      { label: "Contact Us", path: "/contact" },
    ],
  },
];
