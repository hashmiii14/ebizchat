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
  Heart,
} from 'lucide-react';
import BrandLogo from '../ui/BrandLogo';
import { NAVIGATION_LINKS } from '../../data/navigationData';

// Map icon strings from navigation data to Lucide components
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
  Heart,
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedMobileItem(null);
  }, [location.pathname]);

  const handleMouseEnter = (name) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 160);
  };

  const isCurrentRoute = (link) => {
    if (link.path === '/lead-generation' || link.path === '/leadgen') {
      return location.pathname === '/lead-generation' || location.pathname === '/leadgen';
    }
    if (link.path === '/pricing') {
      return location.pathname === '/pricing';
    }
    if (link.path === '/features') {
      return location.pathname.startsWith('/features');
    }
    if (link.path === '/solutions') {
      return location.pathname.startsWith('/solutions');
    }
    if (link.path === '/resources') {
      return (
        location.pathname === '/resources' ||
        location.pathname.startsWith('/blog') ||
        location.pathname === '/faq' ||
        location.pathname === '/case-studies'
      );
    }
    return location.pathname === link.path;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(14,15,16,0.06)] border-b border-black/[0.08]'
          : 'bg-white/90 backdrop-blur-sm border-b border-black/[0.05]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo on the Left - Navigates to Homepage */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none py-1"
            title="eBizChat Homepage"
          >
            <BrandLogo size="md" showTagline={true} />
          </Link>

          {/* Desktop Navigation Links: LOGO | Lead Generation | Features | Solutions | Pricing | Resources */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 lg:gap-2 xl:gap-3">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = isCurrentRoute(link);

              if (link.hasDropdown) {
                const isOpen = activeDropdown === link.name;
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={link.path}
                      className={`px-3.5 lg:px-4 py-2 rounded-xl text-[14px] lg:text-[15px] font-semibold tracking-[-0.01em] transition-all flex items-center gap-1.5 focus:outline-none ${
                        isActive || isOpen
                          ? 'text-emerald-600 bg-emerald-50 font-bold'
                          : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400 group-hover:text-slate-700'
                        }`}
                      />
                    </Link>

                    {/* Clean Mega Dropdown Menu (Strictly constrained width to avoid any viewport overflow) */}
                    {isOpen && (
                      <div
                        className="absolute top-full right-0 lg:left-1/2 lg:-translate-x-1/2 pt-2 z-50 w-[calc(100vw-2rem)] sm:w-[500px] max-w-[540px]"
                      >
                        <div className="bg-white rounded-2xl shadow-[0_16px_40px_-10px_rgba(0,0,0,0.12)] border border-slate-200/90 p-3 ring-1 ring-black/5 animate-in fade-in-50 zoom-in-95 duration-150">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {link.dropdownItems.map((item) => {
                              const IconComponent = ICON_MAP[item.icon] || ArrowRight;
                              const isItemActive = location.pathname === item.path;
                              return (
                                <Link
                                  key={item.title}
                                  to={item.path}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                    isItemActive
                                      ? 'bg-emerald-50 text-emerald-600'
                                      : 'hover:bg-slate-50 text-slate-800'
                                  }`}
                                >
                                  <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors mt-0.5 ${
                                      isItemActive
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
                                    }`}
                                  >
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div
                                      className={`text-xs font-bold transition-colors flex items-center justify-between ${
                                        isItemActive
                                          ? 'text-emerald-600'
                                          : 'text-slate-900 group-hover:text-emerald-600'
                                      }`}
                                    >
                                      <span className="truncate">{item.title}</span>
                                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600 flex-shrink-0" />
                                    </div>
                                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-relaxed font-normal">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
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
                  className={`px-3.5 lg:px-4 py-2 rounded-xl text-[14px] lg:text-[15px] font-semibold tracking-[-0.01em] transition-all flex items-center gap-1.5 focus:outline-none ${
                    isActive
                      ? 'text-emerald-600 bg-emerald-50 font-bold'
                      : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle (Only visible on mobile/tablet) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Strictly minimal - contains ONLY the 5 navigation links) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto z-50 animate-in slide-in-from-top-2 duration-150">
          <div className="p-4 space-y-2">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = isCurrentRoute(link);

              if (link.hasDropdown) {
                const isExpanded = expandedMobileItem === link.name;
                return (
                  <div key={link.name} className="border-b border-slate-100 pb-2">
                    <div className="flex items-center justify-between">
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`py-2 px-2 text-base font-bold transition-colors ${
                          isActive ? 'text-emerald-600' : 'text-slate-900 hover:text-emerald-600'
                        }`}
                      >
                        {link.name}
                      </Link>
                      <button
                        onClick={() =>
                          setExpandedMobileItem(isExpanded ? null : link.name)
                        }
                        className="p-2 text-slate-500 hover:text-slate-900"
                        aria-label={`Expand ${link.name} sub-links`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-emerald-600' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="grid grid-cols-1 gap-1 pl-2 pt-1 pb-2">
                        {link.dropdownItems.map((sub) => {
                          const IconComponent = ICON_MAP[sub.icon] || ArrowRight;
                          const isSubActive = location.pathname === sub.path;
                          return (
                            <Link
                              key={sub.title}
                              to={sub.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-colors ${
                                isSubActive
                                  ? 'bg-emerald-50 text-emerald-600 font-semibold'
                                  : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                              }`}
                            >
                              <IconComponent className="w-4 h-4 text-emerald-600" />
                              <span>{sub.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-2 py-2.5 rounded-xl text-base font-bold border-b border-slate-100 transition-colors ${
                    isActive ? 'text-emerald-600' : 'text-slate-900 hover:text-emerald-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
