import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(4,minmax(0,1fr))]">
          {/* Brand & Address Column */}
          <div className="space-y-4">
            <Link
              to="/"
              aria-label="Orizer eBizChat home"
              className="flex shrink-0 items-center gap-2"
            >
              <img
                src="/logo.png"
                alt="eBizChat by Orizer"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              eBizChat is Orizer&apos;s business communication platform for SME, MSME and manufacturing teams: WhatsApp automation, lead capture, shared inbox and CRM connected to your ERP.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  H.O : O-4 &amp; 5, First Floor, Beside Zudio-Westside, Mohid Tower, Daman Road, Chala, Vapi (W), 396191, Gujarat, India
                </span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  <a href="tel:+919624513385" className="hover:text-primary font-medium text-foreground">
                    +91 96245 13385
                  </a>
                  <br />
                  HelpDesk: +91 98982 36655, +91 97379 11132
                </span>
              </li>
              <li className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>9 AM - 6 PM, Monday to Saturday</span>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <p className="mb-4 text-sm font-bold text-foreground">Product</p>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Features Overview
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Shared Team Inbox
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Automation
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/leadgen" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  LeadGen+
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <p className="mb-4 text-sm font-bold text-foreground">Solutions</p>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Services &amp; Healthcare
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <p className="mb-4 text-sm font-bold text-foreground">Resources</p>
            <ul className="space-y-3">
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Resource Center
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <p className="mb-4 text-sm font-bold text-foreground">Company</p>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Get Started
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Support HelpDesk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Orizer. eBizChat is a product of Orizer. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <Link to="/faq" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/faq" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="hover:text-primary transition-colors">
              Data Processing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
