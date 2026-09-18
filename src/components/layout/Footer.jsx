import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
  Send,
} from 'lucide-react';
import { submitForm } from '../../services/formService';
import BrandLogo from '../ui/BrandLogo';

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
    <footer className="bg-[#f7f6f3] text-[#55585f] border-t border-black/[0.08] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="lg:col-span-3 space-y-3.5">
            <Link to="/" className="inline-block">
              <BrandLogo size="md" showTagline={true} />
            </Link>
            <p className="text-[#55585f] text-xs leading-relaxed max-w-xs">
              eBizChat is the enterprise WhatsApp platform for automated customer journeys, multi-channel lead generation, and native Orizer ERP sync.
            </p>
            <div className="text-[11px] text-[#55585f] space-y-1 pt-1 font-mono">
              <p className="font-semibold text-[#0e0f10]">Orizer ERP Headquarters:</p>
              <p>Mohid Tower, Daman Road, Chala, Vapi, Gujarat 396191</p>
              <p>Phone: <a href="tel:+919624513385" className="text-[#00a48c] hover:underline font-bold">+91 96245 13385</a></p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white hover:bg-[#00a48c]/10 text-[#55585f] hover:text-[#00a48c] border border-black/5 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white hover:bg-[#00a48c]/10 text-[#55585f] hover:text-[#00a48c] border border-black/5 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white hover:bg-[#00a48c]/10 text-[#55585f] hover:text-[#00a48c] border border-black/5 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white hover:bg-[#00a48c]/10 text-[#55585f] hover:text-[#00a48c] border border-black/5 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-[#0e0f10] text-xs mb-3">Product</h4>
            <ul className="space-y-2 text-[#55585f]">
              <li><Link to="/features" className="hover:text-[#00a48c] transition-colors">Features</Link></li>
              <li><Link to="/features/integrations" className="hover:text-[#00a48c] transition-colors">Integrations</Link></li>
              <li><Link to="/features/whatsapp-marketing" className="hover:text-[#00a48c] transition-colors">WhatsApp API</Link></li>
              <li><Link to="/about" className="hover:text-[#00a48c] transition-colors">Security</Link></li>
              <li><Link to="/pricing" className="hover:text-[#00a48c] transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-[#0e0f10] text-xs mb-3">Solutions</h4>
            <ul className="space-y-2 text-[#55585f]">
              <li><Link to="/features/whatsapp-marketing" className="hover:text-[#00a48c] transition-colors">Marketing</Link></li>
              <li><Link to="/features/lead-management" className="hover:text-[#00a48c] transition-colors">Sales</Link></li>
              <li><Link to="/features/team-inbox" className="hover:text-[#00a48c] transition-colors">Support</Link></li>
              <li><Link to="/features/automation" className="hover:text-[#00a48c] transition-colors">Automation</Link></li>
              <li><Link to="/features/chatbot" className="hover:text-[#00a48c] transition-colors">Chatbots</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-[#0e0f10] text-xs mb-3">Resources</h4>
            <ul className="space-y-2 text-[#55585f]">
              <li><Link to="/faq" className="hover:text-[#00a48c] transition-colors">FAQs</Link></li>
              <li><Link to="/blog" className="hover:text-[#00a48c] transition-colors">Blog</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#00a48c] transition-colors">Case Studies</Link></li>
              <li><Link to="/resources" className="hover:text-[#00a48c] transition-colors">Webinars</Link></li>
              <li><Link to="/contact" className="hover:text-[#00a48c] transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h4 className="font-display font-bold text-[#0e0f10] text-xs mb-3">Company</h4>
            <ul className="space-y-2 text-[#55585f]">
              <li><Link to="/about" className="hover:text-[#00a48c] transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-[#00a48c] transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[#00a48c] transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="hover:text-[#00a48c] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-[#0e0f10] text-xs mb-2">Newsletter</h4>
            <p className="text-[#55585f] text-[11px] mb-3 leading-relaxed">
              Get the latest product updates and WhatsApp strategies.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-1.5 p-2 bg-[#00a48c]/10 border border-[#00a48c]/30 rounded-xl text-[#00a48c] text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex items-center gap-1.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-white border border-black/10 rounded-xl px-2.5 py-2 text-xs text-[#0e0f10] placeholder:text-[#9a9da3] focus:outline-none focus:border-[#00a48c]"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-8 h-8 rounded-xl bg-[#00a48c] hover:bg-[#008a76] text-white flex items-center justify-center flex-shrink-0 shadow-sm transition-colors disabled:opacity-50"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            {errorMsg && <p className="text-[10px] text-[#ff3b00] mt-1">{errorMsg}</p>}
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="border-t border-slate-100 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Orizer. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
