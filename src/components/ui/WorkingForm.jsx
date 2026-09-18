import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';
import { submitForm } from '../../services/formService';

export default function WorkingForm({
  formType = 'contact',
  title = 'Send an Inquiry',
  subtitle = 'An Orizer eBizChat specialist will reach out within 2 business hours.',
  buttonText = 'Submit Request',
  defaultBusinessType = 'Manufacturing',
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: defaultBusinessType,
    requirement: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: '',
    leadId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: '', leadId: '' });

    try {
      const res = await submitForm({
        type: formType,
        ...formData,
      });

      setStatus({
        submitting: false,
        success: true,
        error: '',
        leadId: res.leadId,
      });

      if (onSuccess) {
        onSuccess(res);
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Something went wrong. Please check your fields and try again.',
        leadId: '',
      });
    }
  };

  if (status.success) {
    return (
      <div className="bg-white rounded-2xl border border-emerald-200 p-8 text-center shadow-card animate-in fade-in-50">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Request Received Successfully!</h3>
        <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out, <strong className="text-slate-900">{formData.name}</strong>. Your inquiry reference is{' '}
          <span className="font-mono font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
            {status.leadId}
          </span>. An Orizer eBizChat consultant has been notified and will connect with you on{' '}
          <strong className="text-slate-900">{formData.phone}</strong> shortly.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 text-xs text-slate-500 font-mono">
          <ShieldCheck className="w-4 h-4 text-brand-600" />
          <span>Official Orizer Enterprise Security & Confidentiality Guaranteed</span>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <button
            type="button"
            onClick={() => {
              setStatus({ submitting: false, success: false, error: '', leadId: '' });
              setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                businessType: defaultBusinessType,
                requirement: '',
                message: '',
              });
            }}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline"
          >
            Submit another inquiry →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card text-left">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Alok Verma"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Work Email <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="alok@manufacturing.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              WhatsApp Contact Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              placeholder="e.g. Apex Industrial Works"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Industry Category
            </label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 transition-colors bg-white"
            >
              <option value="Manufacturing">Manufacturing & Engineering</option>
              <option value="Wholesale">Wholesale & Distribution</option>
              <option value="Ecommerce">E-Commerce & Retail</option>
              <option value="RealEstate">Real Estate & Infrastructure</option>
              <option value="Education">Education & EdTech</option>
              <option value="Services">Professional B2B Services</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Requirement or Automation Queries
          </label>
          <textarea
            name="requirement"
            rows="3"
            placeholder="Tell us about your team size, current ERP setup, or WhatsApp messaging volume..."
            value={formData.requirement}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 transition-colors resize-none"
          />
        </div>

        {status.error && (
          <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
            {status.error}
          </div>
        )}

        <button
          type="submit"
          disabled={status.submitting}
          className="w-full py-3 px-6 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-xl shadow-btn transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {status.submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing Request...
            </>
          ) : (
            <>
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-400 text-center font-mono pt-1">
          By submitting, you agree to receive official communication from Orizer ERP. Zero unsolicited spam.
        </p>
      </form>
    </div>
  );
}
