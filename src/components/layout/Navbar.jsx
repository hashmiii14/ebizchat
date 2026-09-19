import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Megaphone,
  LayoutGrid,
  BarChart3,
  Inbox,
  Users,
  Target,
  Workflow,
  Zap,
  Plug,
  Factory,
  ShoppingCart,
  Building2,
  GraduationCap,
  Stethoscope,
  BookOpen,
  Newspaper,
  HelpCircle,
  PhoneCall,
  ArrowRight,
} from 'lucide-react';

const FEATURES_GROUPS = [
  {
    group: 'Marketing & Sales',
    items: [
      {
        title: 'WhatsApp Marketing',
        description: 'Broadcast campaigns and segmented journeys at scale.',
        to: '/features',
        icon: Megaphone,
      },
      {
        title: 'Catalogs & Templates',
        description: 'Showcase products with approved message templates.',
        to: '/features',
        icon: LayoutGrid,
      },
      {
        title: 'Campaign Analytics',
        description: 'Delivery, read and conversion reporting per campaign.',
        to: '/features',
        icon: BarChart3,
      },
    ],
  },
  {
    group: 'Inbox & CRM',
    items: [
      {
        title: 'Shared Team Inbox',
        description: 'One queue for every conversation across your team.',
        to: '/features',
        icon: Inbox,
      },
      {
        title: 'Contact Directory',
        description: 'Notes, tags, tasks and full conversation history.',
        to: '/features',
        icon: Users,
      },
      {
        title: 'Lead Management',
        description: 'Capture, score, assign and convert leads end to end.',
        to: '/leadgen',
        icon: Target,
      },
    ],
  },
  {
    group: 'Automation',
    items: [
      {
        title: 'Visual Chatbot Builder',
        description: 'Drag-and-drop conversation flows, no coding required.',
        to: '/features',
        icon: Workflow,
      },
      {
        title: 'Trigger Workflows',
        description: 'Auto-replies, drip sequences and escalation rules.',
        to: '/features',
        icon: Zap,
      },
      {
        title: 'Integrations',
        description: 'Orizer ERP, Shopify, WooCommerce, webhooks and REST API.',
        to: '/features',
        icon: Plug,
      },
    ],
  },
];

const SOLUTIONS_ITEMS = [
  {
    title: 'Manufacturing',
    description: 'Order tracking, dispatch alerts and quotation approvals.',
    to: '/solutions',
    icon: Factory,
  },
  {
    title: 'E-Commerce',
    description: 'Cart recovery, order updates and COD confirmation.',
    to: '/solutions',
    icon: ShoppingCart,
  },
  {
    title: 'Real Estate',
    description: 'Site visit booking, brochures and lead routing.',
    to: '/solutions',
    icon: Building2,
  },
  {
    title: 'Education',
    description: 'Admission enquiries, demo classes and follow-ups.',
    to: '/solutions',
    icon: GraduationCap,
  },
  {
    title: 'Services & Healthcare',
    description: 'Appointments, reminders and post-service feedback.',
    to: '/solutions',
    icon: Stethoscope,
  },
];

const RESOURCES_ITEMS = [
  {
    title: 'Resource Center',
    description: 'Guides, playbooks and onboarding material.',
    to: '/resources',
    icon: BookOpen,
  },
  {
    title: 'Blog',
    description: 'Insights on WhatsApp growth, CRM and automation.',
    to: '/blog',
    icon: Newspaper,
  },
  {
    title: 'FAQ',
    description: 'Answers on pricing, setup, API and compliance.',
    to: '/faq',
    icon: HelpCircle,
  },
  {
    title: 'Contact & Demo',
    description: 'Talk to the Orizer team or book a guided walkthrough.',
    to: '/contact',
    icon: PhoneCall,
  },
];

export default function Navbar({ onOpenDemoModal, onOpenContactModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileSection, setExpandedMobileSection] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedMobileSection(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (name) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navLinkClass =
    'text-sm font-semibold text-foreground/80 transition-colors hover:text-primary';

  return (
    <header className="sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-[#111921] text-white">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 flex flex-wrap items-center justify-between gap-2 py-2">
          <p className="text-xs font-medium sm:text-sm">
            New: WhatsApp Business Calling &amp; Automation for Enterprises!
          </p>
          <div className="flex items-center gap-4 text-xs font-medium sm:text-sm">
            <Link to="/contact" className="transition-colors hover:text-primary">
              Partners
            </Link>
            <Link to="/contact" className="transition-colors hover:text-primary">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className="border-b border-border bg-white/95 backdrop-blur relative"
        onMouseLeave={handleMouseLeave}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Orizer eBizChat home"
            className="flex shrink-0 items-center gap-2"
          >
            <img
              src="/logo.png"
              alt="eBizChat by Orizer"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            <Link to="/leadgen" className={navLinkClass}>
              LeadGen+
            </Link>

            {/* Features dropdown trigger */}
            <div
              className="relative py-4"
              onMouseEnter={() => handleMouseEnter('features')}
            >
              <button
                type="button"
                className={`flex items-center gap-1 ${navLinkClass}`}
                aria-expanded={activeDropdown === 'features'}
              >
                Features
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'features' ? 'rotate-180 text-primary' : ''}`} />
              </button>
            </div>

            {/* Solutions dropdown trigger */}
            <div
              className="relative py-4"
              onMouseEnter={() => handleMouseEnter('solutions')}
            >
              <button
                type="button"
                className={`flex items-center gap-1 ${navLinkClass}`}
                aria-expanded={activeDropdown === 'solutions'}
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180 text-primary' : ''}`} />
              </button>
            </div>

            {/* Resources dropdown trigger */}
            <div
              className="relative py-4"
              onMouseEnter={() => handleMouseEnter('resources')}
            >
              <button
                type="button"
                className={`flex items-center gap-1 ${navLinkClass}`}
                aria-expanded={activeDropdown === 'resources'}
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180 text-primary' : ''}`} />
              </button>
            </div>

            <Link to="/pricing" className={navLinkClass}>
              Pricing
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919624513385"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-3 py-2 text-sm font-semibold text-brand-deep transition-colors hover:bg-accent"
            >
              <Phone className="h-4 w-4" />
              +91 96245 13385
            </a>
            <button
              type="button"
              onClick={onOpenDemoModal}
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden text-foreground hover:bg-accent/40"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop Mega Dropdowns */}
        {activeDropdown && (
          <div
            className="absolute inset-x-0 top-full pt-1 z-50"
            onMouseEnter={() => {
              if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_28px_60px_-30px_rgba(16,24,40,0.35)] animate-in fade-in slide-in-from-top-1 duration-150">
                {/* Features dropdown */}
                {activeDropdown === 'features' && (
                  <div className="grid gap-8 md:grid-cols-3">
                    {FEATURES_GROUPS.map((group) => (
                      <div key={group.group}>
                        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          {group.group}
                        </p>
                        <ul className="space-y-4">
                          {group.items.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <li key={item.title}>
                                <Link
                                  to={item.to}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-surface"
                                >
                                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                    <IconComponent className="h-4 w-4" />
                                  </span>
                                  <div>
                                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                      {item.title}
                                    </p>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Solutions dropdown */}
                {activeDropdown === 'solutions' && (
                  <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Industry Solutions
                    </p>
                    <div className="grid gap-4 md:grid-cols-3">
                      {SOLUTIONS_ITEMS.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.title}
                            to={item.to}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface"
                          >
                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                              <IconComponent className="h-4 w-4" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                              </p>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Resources dropdown */}
                {activeDropdown === 'resources' && (
                  <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Resources &amp; Support
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      {RESOURCES_ITEMS.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.title}
                            to={item.to}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface"
                          >
                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                              <IconComponent className="h-4 w-4" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                              </p>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[105px] z-40 bg-white overflow-y-auto px-5 py-6 flex flex-col justify-between border-t border-border lg:hidden">
          <div className="space-y-4">
            <Link
              to="/leadgen"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-foreground hover:text-primary"
            >
              LeadGen+
            </Link>

            {/* Features Accordion */}
            <div className="border-b border-border pb-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedMobileSection(
                    expandedMobileSection === 'features' ? null : 'features'
                  )
                }
                className="flex w-full items-center justify-between py-2 text-base font-bold text-foreground"
              >
                <span>Features</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    expandedMobileSection === 'features' ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>
              {expandedMobileSection === 'features' && (
                <div className="mt-2 space-y-2 pl-3">
                  {FEATURES_GROUPS.flatMap((g) => g.items).map((item) => (
                    <Link
                      key={item.title}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-primary"
                    >
                      <item.icon className="h-4 w-4 text-primary" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Accordion */}
            <div className="border-b border-border pb-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedMobileSection(
                    expandedMobileSection === 'solutions' ? null : 'solutions'
                  )
                }
                className="flex w-full items-center justify-between py-2 text-base font-bold text-foreground"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    expandedMobileSection === 'solutions' ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>
              {expandedMobileSection === 'solutions' && (
                <div className="mt-2 space-y-2 pl-3">
                  {SOLUTIONS_ITEMS.map((item) => (
                    <Link
                      key={item.title}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-primary"
                    >
                      <item.icon className="h-4 w-4 text-primary" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Accordion */}
            <div className="border-b border-border pb-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedMobileSection(
                    expandedMobileSection === 'resources' ? null : 'resources'
                  )
                }
                className="flex w-full items-center justify-between py-2 text-base font-bold text-foreground"
              >
                <span>Resources</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    expandedMobileSection === 'resources' ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>
              {expandedMobileSection === 'resources' && (
                <div className="mt-2 space-y-2 pl-3">
                  {RESOURCES_ITEMS.map((item) => (
                    <Link
                      key={item.title}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-primary"
                    >
                      <item.icon className="h-4 w-4 text-primary" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-foreground hover:text-primary"
            >
              Pricing
            </Link>
          </div>

          <div className="pt-6 border-t border-border space-y-3">
            <a
              href="tel:+919624513385"
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-primary/30 py-3 text-sm font-semibold text-brand-deep bg-accent"
            >
              <Phone className="h-4 w-4" />
              +91 96245 13385
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 text-center"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
