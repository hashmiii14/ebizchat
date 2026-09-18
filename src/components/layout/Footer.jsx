import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { FOOTER_SECTIONS } from '../../data/navigationData';
import { ORIZER_INFO } from '../../data/orizerData';
import { submitForm } from '../../services/formService';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setSubmitting(true);
    try {
      await submitForm({
        type: 'newsletter',
        email: newsletterEmail,
      });
      setSubscribed(true);
      setNewsletterEmail('');
    } catch (err) {
      setErrorMsg(err.message || 'Subscription failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-sm">
      {/* Upper Pre-Footer: Newsletter & Contact Quick Connect */}
      <div className="border-b border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Value Proposition */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-brand-400 font-semibold">
                  Official Orizer Enterprise Platform
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Stay updated with modern business automation insights.
              </h3>
              <p className="text-slate-400 text-sm mt-1 max-w-lg">
                Join 2,800+ manufacturers, distributors, and business leaders receiving our monthly briefing on WhatsApp sales automation and ERP sync strategies.
              </p>
            </div>

            {/* Right: Working Newsletter Form */}
            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-brand-950/60 border border-brand-700/50 text-brand-300">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-sm">You are subscribed!</div>
                    <div className="text-xs text-brand-300/80">Thank you for joining the Orizer community.</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email..."
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full bg-slate-850 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Subscribing...' : 'Subscribe'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
              {errorMsg && <p className="text-xs text-rose-400 mt-2 font-medium">{errorMsg}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Links Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Column 1: Brand & Verified Contact */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2 pr-4">
              <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                  O
                </div>
                <div className="flex items-center gap-1 text-xl font-bold text-white tracking-tight">
                  Orizer <span className="text-brand-400 font-semibold">eBizChat</span>
                </div>
              </Link>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Official business messaging and customer engagement platform by <strong>Orizer ERP</strong>. Bridging industrial manufacturing processes with frontline WhatsApp communications.
              </p>

              {/* Verified Contact Details */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{ORIZER_INFO.contact.office.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <a href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`} className="hover:text-white transition-colors">
                    Main: {ORIZER_INFO.contact.mainPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <span>{ORIZER_INFO.contact.businessHours}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <a href={`mailto:${ORIZER_INFO.contact.emails.sales}`} className="hover:text-white transition-colors">
                    {ORIZER_INFO.contact.emails.sales}
                  </a>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {FOOTER_SECTIONS.map((col) => (
              <div key={col.title} className="col-span-1">
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-4 font-mono">
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-xs">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.path} className="text-slate-400 hover:text-white transition-colors">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer: Legal & Copyright */}
      <div className="border-t border-slate-800 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span>© {new Date().getFullYear()} Orizer ERP Software Solution. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
              Official Meta Tech Partner Architecture
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
            <a href="https://orizer.in" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">
              Official Orizer.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
