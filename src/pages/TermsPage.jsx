import React from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { ORIZER_INFO } from '../data/orizerData';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-slate-500 font-mono text-xs">
            Effective Date: September 2026 · Orizer ERP Software Solution
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or using <strong>Orizer eBizChat</strong>, you agree to be legally bound by these Terms of Service. If you are entering into these terms on behalf of a corporation or manufacturing entity, you warrant that you possess the requisite authority to bind that entity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Service Description & SLAs</h2>
          <p>
            eBizChat provides enterprise WhatsApp messaging infrastructure, shared team inboxes, automated workflows, and ERP synchronization. Service level agreements (SLAs), uptime guarantees, and support response tiers are governed by the specific tier subscribed to.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Acceptable Use & Anti-Spam Obligations</h2>
          <p>
            Subscribers must adhere to all applicable telecom regulations and Meta WhatsApp Commerce and Business Messaging policies. Sending unsolicited, deceptive, or spam messages to recipients who have not provided legitimate opt-in consent is strictly prohibited and grounds for immediate termination.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Billing and Conversation Fees</h2>
          <p>
            eBizChat subscriptions cover software access, multi-agent seats, and automation workflows. Meta WhatsApp API conversation charges are governed by Meta's published wholesale rate card and billed direct-to-Meta without markup.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">5. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in Vapi, Gujarat, India.
          </p>
        </section>
      </div>
    </div>
  );
}
