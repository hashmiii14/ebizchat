import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Megaphone,
  Filter,
  Bot,
  Inbox,
  GitBranch,
  BarChart3,
  Layers,
  Factory,
  ShoppingBag,
  GraduationCap,
  Building2,
  Briefcase,
  BookOpen,
  FileText,
  HelpCircle,
  Award,
  PhoneCall,
  Calendar,
  LogIn,
} from 'lucide-react';
import BrandLogo from '../ui/BrandLogo';
import { NAVIGATION_LINKS } from '../../data/navigationData';
import { ORIZER_INFO } from '../../data/orizerData';

// Map icon strings to Lucide components
const ICON_MAP = {
  Megaphone,
  Filter,
  Bot,
  Inbox,
  GitBranch,
  BarChart3,
  Layers,
  Factory,
  ShoppingBag,
  GraduationCap,
  Building2,
  Briefcase,
  BookOpen,
  FileText,
  HelpCircle,
  Award,
};

export default function Navbar({ onOpenDemoModal, onOpenContactModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (name) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Smooth scroll handler for in-page anchors
  const handleNavClick = (link, e) => {
    if (link.hash && location.pathname === '/') {
      const targetElement = document.querySelector(link.hash);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#f7f6f3]/95 backdrop-blur-md shadow-sm border-b border-black/[0.08]'
          : 'bg-[#f7f6f3]/85 backdrop-blur-sm border-b border-black/[0.06]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo on Far Left (Professionally sized, clickable, returns home) */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none py-1"
            title="eBizChat by Orizer Home"
          >
            <BrandLogo size="md" showTagline={true} />
          </Link>

          {/* Desktop Navigation (Product, Solutions, Resources, Pricing, Partners) */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {NAVIGATION_LINKS.map((link) => {
              const isCurrentRoute =
                link.path !== '/' && location.pathname.startsWith(link.path);

              if (link.hasDropdown) {
                const isOpen = activeDropdown === link.name;
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href={location.pathname === '/' && link.hash ? link.hash : link.path}
                      onClick={(e) => handleNavClick(link, e)}
                      className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer ${
                        isCurrentRoute || isOpen
                          ? 'text-[#00a48c] bg-[#00a48c]/10 font-bold'
                          : 'text-[#55585f] hover:text-[#0e0f10] hover:bg-black/5'
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'
                        }`}
                      />
                    </a>

                    {/* Mega Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px] z-50">
                        <div className="bg-white rounded-2xl shadow-float border border-slate-200/90 p-3.5 grid grid-cols-1 gap-1 ring-1 ring-black/5 animate-in fade-in-50 zoom-in-95 duration-150">
                          {link.dropdownItems.map((item) => {
                            const IconComponent = ICON_MAP[item.icon] || ArrowRight;
                            return (
                              <Link
                                key={item.title}
                                to={item.path}
                                className="group flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                              >
                                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors mt-0.5">
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                                    {item.title}
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-600" />
                                  </div>
                                  <p className="text-xs text-slate-500 line-clamp-2 mt-0.5 font-normal">
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
                );
              }

              return (
                <a
                  key={link.name}
                  href={location.pathname === '/' && link.hash ? link.hash : link.path}
                  onClick={(e) => handleNavClick(link, e)}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isCurrentRoute
                      ? 'text-emerald-700 bg-emerald-50/70'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Side: Login + Call + Get Started / Book Demo */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono text-[#55585f] hover:text-[#00a48c] px-2.5 py-2 rounded-lg transition-colors border border-transparent hover:border-black/5"
              title="Call Sales Directly"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#00a48c]" />
              <span>+91 96245 13385</span>
            </a>

            {/* Login Link */}
            <button
              onClick={onOpenContactModal}
              className="text-xs font-bold text-[#0e0f10] hover:text-[#00a48c] px-2.5 py-2 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5 text-[#9a9da3]" />
              <span>Log in</span>
            </button>

            {/* Book Demo Button */}
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#0e0f10] hover:text-[#0e0f10] bg-white hover:bg-neutral-50 border border-black/15 shadow-sm transition-all active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#00a48c]" />
              <span>Book a demo</span>
            </button>

            {/* Start Free Trial Button */}
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#00a48c] hover:bg-[#008a76] shadow-sm shadow-[#00a48c]/25 transition-all active:scale-[0.98]"
            >
              <span>Start Free trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenContactModal}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm"
            >
              Start Free trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto z-50 animate-in slide-in-from-top-2 duration-150">
          <div className="p-4 space-y-3">
            {NAVIGATION_LINKS.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="border-b border-slate-100 pb-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold px-2 py-1">
                      {link.name}
                    </div>
                    <div className="grid grid-cols-1 gap-1 mt-1">
                      {link.dropdownItems.map((sub) => {
                        const IconComponent = ICON_MAP[sub.icon] || ArrowRight;
                        return (
                          <Link
                            key={sub.title}
                            to={sub.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                          >
                            <IconComponent className="w-4 h-4 text-emerald-600" />
                            <span className="font-semibold">{sub.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={location.pathname === '/' && link.hash ? link.hash : link.path}
                  onClick={(e) => {
                    handleNavClick(link, e);
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 border-b border-slate-100"
                >
                  {link.name}
                </a>
              );
            })}

            {/* Mobile Actions */}
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-mono font-bold text-xs hover:bg-slate-200"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>Call: +91 96245 13385</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-300 text-slate-800 font-bold text-sm hover:bg-slate-50"
              >
                <Calendar className="w-4 h-4 text-emerald-600" />
                Book a Demo
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-sm"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center text-xs text-slate-400 font-mono">
                Official Orizer HelpDesk · {ORIZER_INFO.contact.office.city}, {ORIZER_INFO.contact.office.state}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
