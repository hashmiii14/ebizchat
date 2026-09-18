import React from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { ORIZER_INFO } from '../data/orizerData';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-slate-500 font-mono text-xs">
            Last Updated: September 2026 · Orizer ERP Software Solution
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Overview and Commitment</h2>
          <p>
            Orizer ERP Software Solution ("Orizer", "we", "our") operates the <strong>eBizChat</strong> business communication, CRM, and WhatsApp automation platform. We are committed to maintaining the highest standards of data confidentiality, regulatory compliance, and operational integrity for our corporate clients and their end customers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Information We Process</h2>
          <p>In delivering eBizChat services, we process information categorized under:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li><strong>Account & Registration Details:</strong> Business name, authorized contact personnel, email address, corporate phone numbers, and billing details.</li>
            <li><strong>WhatsApp Business Data:</strong> Messages, delivery receipts, user opt-in records, and media attachments processed through the official Meta Cloud API.</li>
            <li><strong>ERP Integrated Records:</strong> Transactional metadata synchronized from Orizer ERP, including Purchase Order numbers, Lorry Receipt (LR) tracking identifiers, and invoice amounts.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Meta WhatsApp API Compliance</h2>
          <p>
            eBizChat operates strictly within the official Meta WhatsApp Business Terms of Service and WhatsApp Business Policy. We do not engage in unauthorized scraping or unapproved bulk messaging. All outbound broadcast templates are submitted to Meta for verification prior to delivery.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Data Ownership & Storage</h2>
          <p>
            Our enterprise clients retain 100% legal ownership of their customer contact records and conversational history. We do not sell, rent, or monetize client contact databases under any circumstances.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">5. Contact Information</h2>
          <p>
            For questions regarding privacy practices or data processing agreements, contact us at:
          </p>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs space-y-1">
            <div>Orizer ERP Software Solution</div>
            <div>{ORIZER_INFO.contact.office.fullAddress}</div>
            <div>Email: {ORIZER_INFO.contact.emails.support}</div>
            <div>Phone: {ORIZER_INFO.contact.mainPhone}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
