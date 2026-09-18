import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
} from 'lucide-react';
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 flex items-center justify-center text-white font-bold text-xl shadow-btn transition-transform group-hover:scale-105">
              <span>O</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
                  Orizer
                </span>
                <span className="text-xl font-bold tracking-tight text-brand-600 font-sans">
                  eBizChat
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-medium">
                Business Automation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAVIGATION_LINKS.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              if (link.hasDropdown) {
                const isOpen = activeDropdown === link.name;
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 focus:outline-none ${
                        isActive || isOpen
                          ? 'text-brand-600 bg-brand-50/60'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                      aria-expanded={isOpen}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-brand-600' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Mega Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px] z-50">
                        <div className="bg-white rounded-2xl shadow-float border border-slate-200/80 p-3 grid grid-cols-1 gap-1 ring-1 ring-black/5 animate-in fade-in-50 zoom-in-95 duration-150">
                          {link.dropdownItems.map((item) => {
                            const IconComponent = ICON_MAP[item.icon] || ArrowRight;
                            return (
                              <Link
                                key={item.title}
                                to={item.path}
                                className="group flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                              >
                                <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100/80 flex items-center justify-center text-brand-600 flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors mt-0.5">
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors flex items-center justify-between">
                                    {item.title}
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-600" />
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
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? 'text-brand-600 bg-brand-50/60 font-semibold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono font-semibold bg-brand-100 text-brand-700 border border-brand-200">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-all active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-brand-600" />
              Book a Demo
            </button>
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-btn transition-all active:scale-[0.98]"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenContactModal}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-sm"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto z-50">
          <div className="p-4 space-y-3">
            {NAVIGATION_LINKS.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="border-b border-slate-100 pb-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold px-2 py-1">
                      {link.name}
                    </div>
                    <div className="grid grid-cols-1 gap-1 mt-1">
                      {link.dropdownItems.map((sub) => {
                        const IconComponent = ICON_MAP[sub.icon] || ArrowRight;
                        return (
                          <Link
                            key={sub.title}
                            to={sub.path}
                            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-brand-600 hover:bg-slate-50"
                          >
                            <IconComponent className="w-4 h-4 text-brand-600" />
                            <span className="font-medium">{sub.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:text-brand-600 hover:bg-slate-50 border-b border-slate-100"
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile CTAs */}
            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-300 text-slate-800 font-medium text-sm hover:bg-slate-50"
              >
                <Calendar className="w-4 h-4 text-brand-600" />
                Book a Demo
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 shadow-sm"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="pt-2 text-center text-xs text-slate-400 font-mono">
                Official Orizer HelpDesk: {ORIZER_INFO.contact.mainPhone}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
