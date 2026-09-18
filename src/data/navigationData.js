export const NAVIGATION_LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "LeadGen+",
    path: "/leadgen",
    badge: "High ROI",
  },
  {
    name: "Features",
    path: "/features",
    hasDropdown: true,
    dropdownItems: [
      {
        title: "Marketing & Sales",
        description: "WhatsApp broadcasts, targeted campaigns, and dynamic catalog messaging",
        path: "/features/whatsapp-marketing",
        icon: "Megaphone",
      },
      {
        title: "Lead Management & CRM",
        description: "Multi-channel intake, automated qualification, and visual Kanban pipelines",
        path: "/features/lead-management",
        icon: "Filter",
      },
      {
        title: "Intelligent Chatbot",
        description: "Hybrid keyword & AI agent for 24/7 instant customer qualification",
        path: "/features/chatbot",
        icon: "Bot",
      },
      {
        title: "Shared Team Inbox",
        description: "Multi-agent collaboration with collision detection, notes, and routing",
        path: "/features/team-inbox",
        icon: "Inbox",
      },
      {
        title: "Workflow Automation",
        description: "Visual drag-and-drop trigger, condition, and action builder",
        path: "/features/automation",
        icon: "GitBranch",
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
        title: "E-Commerce & D2C",
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
      { label: "Features Overview", path: "/features" },
      { label: "LeadGen+ Engine", path: "/leadgen" },
      { label: "WhatsApp Marketing", path: "/features/whatsapp-marketing" },
      { label: "Shared Team Inbox", path: "/features/team-inbox" },
      { label: "Workflow Automation", path: "/features/automation" },
      { label: "Pricing & Plans", path: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Manufacturing ERP Sync", path: "/solutions/manufacturing" },
      { label: "E-Commerce & Retail", path: "/solutions/ecommerce" },
      { label: "Education & Training", path: "/solutions/education" },
      { label: "Real Estate & Builders", path: "/solutions/real-estate" },
      { label: "B2B Professional Services", path: "/solutions/services" },
      { label: "All Industry Solutions", path: "/solutions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resource Center", path: "/resources" },
      { label: "Product Guides & Docs", path: "/resources" },
      { label: "Industry Blog", path: "/blog" },
      { label: "Customer Case Studies", path: "/case-studies" },
      { label: "FAQs & Knowledgebase", path: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Orizer", path: "/about" },
      { label: "Orizer ERP Official", href: "https://orizer.in/" },
      { label: "Contact Us", path: "/contact" },
      { label: "Book a Demo", path: "/contact?tab=demo" },
      { label: "HelpDesk Support", path: "/contact" },
    ],
  },
  {
    title: "Legal & Trust",
    links: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
      { label: "Data Security Standards", path: "/about#security" },
      { label: "Meta Business Compliance", path: "/faq#compliance" },
    ],
  },
];
