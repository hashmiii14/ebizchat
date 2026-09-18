import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import WorkingForm from '../components/ui/WorkingForm';
import { ORIZER_INFO } from '../data/orizerData';

export default function ContactPage({ onOpenDemoModal }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('quote'); // 'quote' | 'demo' | 'support'

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('tab') === 'demo') {
      setActiveTab('demo');
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-semibold tracking-wide">
              <Phone className="w-3.5 h-3.5" />
              <span>Get in Touch with Orizer eBizChat</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              We're Here to Help Your Business Automate
            </h1>
            <p className="text-base text-slate-600 font-normal">
              Connect with our enterprise solution architects, book a live product demonstration, or get instant technical support.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Verified Contact Information & Office Details */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Corporate Contact Details
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Direct communication channels for Orizer ERP Software Solution. Our support and onboarding team is available across Gujarat and pan-India.
                </p>
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-slate-700">
                {/* Main Phone */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">
                      Main Inquiries & CMO Desk
                    </strong>
                    <a
                      href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`}
                      className="text-brand-700 font-mono font-bold text-base hover:underline"
                    >
                      {ORIZER_INFO.contact.mainPhone}
                    </a>
                    <span className="block text-xs text-slate-500 mt-0.5">Monday to Saturday, 9 AM – 6 PM</span>
                  </div>
                </div>

                {/* HelpDesk Numbers */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-slate-900 font-semibold">
                      Dedicated Technical HelpDesks
                    </strong>
                    {ORIZER_INFO.contact.helpdeskPhones.map((hp) => (
                      <div key={hp.number} className="flex items-center gap-2">
                        <a
                          href={`tel:${hp.raw}`}
                          className="font-mono font-semibold text-slate-800 hover:text-brand-600"
                        >
                          {hp.number}
                        </a>
                        <span className="text-[11px] text-slate-400 font-mono">({hp.label})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email Channels */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-1">
                      Email Inquiries
                    </strong>
                    <div className="space-y-1">
                      <div>
                        <span className="text-slate-500 text-xs">Sales: </span>
                        <a href={`mailto:${ORIZER_INFO.contact.emails.sales}`} className="text-brand-600 font-medium hover:underline">
                          {ORIZER_INFO.contact.emails.sales}
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-500 text-xs">Support: </span>
                        <a href={`mailto:${ORIZER_INFO.contact.emails.support}`} className="text-brand-600 font-medium hover:underline">
                          {ORIZER_INFO.contact.emails.support}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corporate Address */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">
                      Head Office
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {ORIZER_INFO.contact.office.fullAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Working Forms System */}
            <div className="lg:col-span-7">
              {/* Tab Selector */}
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setActiveTab('quote')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'quote'
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  Get a Quote / Proposal
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('demo')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'demo'
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  Book Live Demo
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('support')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'support'
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  General Inquiries
                </button>
              </div>

              {/* Form Render based on Active Tab */}
              {activeTab === 'quote' && (
                <WorkingForm
                  formType="quote_request"
                  title="Request an Enterprise Quote"
                  subtitle="Provide your requirements to receive a customized pricing quote and ROI breakdown."
                  buttonText="Request Official Quotation"
                />
              )}

              {activeTab === 'demo' && (
                <WorkingForm
                  formType="demo_booking"
                  title="Schedule a Live System Demo"
                  subtitle="Walk through the WhatsApp shared inbox, visual workflows, and Orizer ERP live sync."
                  buttonText="Confirm Demo Schedule"
                />
              )}

              {activeTab === 'support' && (
                <WorkingForm
                  formType="support_inquiry"
                  title="Contact Orizer HelpDesk"
                  subtitle="Submit questions regarding Meta onboarding, API limits, or ERP schema integrations."
                  buttonText="Send Message to HelpDesk"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map & Office Directions Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 font-mono block mb-2">
              HEADQUARTERS & DIRECTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Visit Us in Vapi, Gujarat
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Our engineering, deployment, and customer onboarding headquarters are centrally located in Vapi.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 grid grid-cols-1 lg:grid-cols-12">
            {/* Map Iframe */}
            <div className="lg:col-span-8 min-h-[380px] sm:min-h-[440px] relative bg-slate-100">
              <iframe
                title="Orizer ERP Headquarters Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.736341270273!2d72.91583!3d20.39347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf31885f8ddb%3A0x8bb89255a4325a66!2sMohid%20Tower%2C%20Daman%20Rd%2C%20Chala%2C%20Vapi%2C%20Gujarat%20396191!5e0!3m2!1sen!2sin!4v1710800000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Office Information Panel */}
            <div className="lg:col-span-4 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6 text-left border-t lg:border-t-0 lg:border-l border-slate-200">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[11px] font-semibold mb-3">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Orizer Infotech Pvt. Ltd.</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Orizer Campus</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                  {ORIZER_INFO.contact.office.fullAddress}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Mon – Sat: 9:00 AM – 6:00 PM IST</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <a href="tel:+919898236655" className="hover:text-emerald-600 font-mono font-semibold">
                      +91 98982 36655
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <a href="https://wa.me/919998391947" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 font-mono font-semibold">
                      +91 99983 91947 (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Industrial Partner</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Visitor parking available. Prior appointments recommended for live architectural demos.
                </p>
                <a
                  href="https://maps.google.com/?q=Mohid+Tower+Daman+Road+Chala+Vapi+Gujarat+396191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-600 font-bold text-[11px] hover:underline pt-1"
                >
                  <span>Open in Google Maps App</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
