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
    <footer className="bg-[#0a0a0a] text-zinc-400 border-t border-zinc-800/80 text-xs select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <BrandLogo size="md" showTagline={true} variant="white" />
            </Link>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              The modern conversational WhatsApp platform by Orizer. Visual no-code flow builder, multi-agent inbox, and 2-way ERP sync.
            </p>
            <div className="text-[11px] text-zinc-400 space-y-1.5 pt-2 font-mono">
              <p className="font-semibold text-white uppercase tracking-wider text-[10px]">Orizer ERP Headquarters:</p>
              <p className="text-zinc-300">Mohid Tower, Daman Road, Chala, Vapi, Gujarat 396191</p>
              <p>
                HelpDesk:{' '}
                <a href="tel:+919898236655" className="text-[#ff5500] hover:underline font-bold">
                  +91 98982 36655
                </a>
              </p>
              <p>
                WhatsApp Direct:{' '}
                <a
                  href="https://wa.me/919998391947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff5500] hover:underline font-bold"
                >
                  +91 99983 91947
                </a>
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-[#ff5500] text-zinc-400 hover:text-white border border-zinc-800 hover:border-[#ff5500] flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-[#ff5500] text-zinc-400 hover:text-white border border-zinc-800 hover:border-[#ff5500] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-[#ff5500] text-zinc-400 hover:text-white border border-zinc-800 hover:border-[#ff5500] flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-[#ff5500] text-zinc-400 hover:text-white border border-zinc-800 hover:border-[#ff5500] flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-xs mb-3 font-mono uppercase tracking-wider">Product</h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li><Link to="/features" className="hover:text-[#ff5500] transition-colors">Features</Link></li>
              <li><Link to="/features/integrations" className="hover:text-[#ff5500] transition-colors">Integrations</Link></li>
              <li><Link to="/features/whatsapp-marketing" className="hover:text-[#ff5500] transition-colors">WhatsApp API</Link></li>
              <li><Link to="/about-orizer" className="hover:text-[#ff5500] transition-colors">Security & Orizer</Link></li>
              <li><Link to="/pricing" className="hover:text-[#ff5500] transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-xs mb-3 font-mono uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li><Link to="/features/whatsapp-marketing" className="hover:text-[#ff5500] transition-colors">Marketing</Link></li>
              <li><Link to="/features/lead-management" className="hover:text-[#ff5500] transition-colors">Sales & CRM</Link></li>
              <li><Link to="/features/team-inbox" className="hover:text-[#ff5500] transition-colors">Support Inbox</Link></li>
              <li><Link to="/features/automation" className="hover:text-[#ff5500] transition-colors">Automation</Link></li>
              <li><Link to="/features/chatbot" className="hover:text-[#ff5500] transition-colors">Chatbots</Link></li>
            </ul>
          </div>

          {/* Resources & Company Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-xs mb-3 font-mono uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li><Link to="/about-orizer" className="hover:text-[#ff5500] transition-colors">About Orizer</Link></li>
              <li><Link to="/lead-generation" className="hover:text-[#ff5500] transition-colors">Lead Gen Guide</Link></li>
              <li><Link to="/blog" className="hover:text-[#ff5500] transition-colors">Articles & Case Studies</Link></li>
              <li><Link to="/resources" className="hover:text-[#ff5500] transition-colors">Knowledge Base</Link></li>
              <li><Link to="/contact" className="hover:text-[#ff5500] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-xs mb-2 font-mono uppercase tracking-wider">Updates</h4>
            <p className="text-zinc-400 text-[11px] mb-3 leading-relaxed">
              Subscribe to conversational marketing playbooks and product releases.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-1.5 p-2 bg-[#ff5500]/10 border border-[#ff5500]/30 rounded-lg text-[#ff5500] text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex items-center gap-1.5">
                <input
                  type="email"
                  required
                  placeholder="Enter email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5500]"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-8 h-8 rounded-lg bg-[#ff5500] hover:bg-[#e04a00] text-white flex items-center justify-center flex-shrink-0 shadow-xs transition-colors disabled:opacity-50 cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            {errorMsg && <p className="text-[10px] text-rose-500 mt-1">{errorMsg}</p>}
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="border-t border-zinc-900 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} eBizChat by Orizer Infotech Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
