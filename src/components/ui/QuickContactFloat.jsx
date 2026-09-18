import React, { useState } from 'react';
import { Phone, MessageCircle, X, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { ORIZER_INFO } from '../../data/orizerData';
import { submitForm } from '../../services/formService';

export default function QuickContactFloat() {
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [nameInput, setNameInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCallbackSubmit = async (e) => {
    e.preventDefault();
    if (!phoneInput || phoneInput.length < 8) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitting(true);
    try {
      await submitForm({
        type: 'callback_request',
        name: nameInput || 'Quick Callback Lead',
        phone: `${countryCode} ${phoneInput}`,
        urgency: 'Immediate (within 5 mins)',
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowCallbackModal(false);
        setPhoneInput('');
        setNameInput('');
      }, 3500);
    } catch (err) {
      setErrorMsg(err.message || 'Request failed. Please call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/919624513385?text=${encodeURIComponent(
    'Hello Orizer eBizChat Team, I would like to explore the WhatsApp Business API, Lead Automation, and ERP integration for my business.'
  )}`;

  return (
    <>
      {/* ─── FLOATING ACTION BAR (BOTTOM RIGHT) ─── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Floating Call Back Request Trigger */}
        <button
          onClick={() => setShowCallbackModal(true)}
          className="group flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 px-3.5 py-2 rounded-full shadow-lg border border-slate-200 text-xs font-semibold transition-all hover:scale-105 active:scale-95"
          title="Request an immediate 5-minute callback"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="hidden sm:inline">Request Call Back</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
        </button>

        {/* Direct Phone Call Button */}
        <a
          href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`}
          className="group flex items-center gap-2 bg-slate-900 hover:bg-slate-850 text-white px-3.5 py-2 rounded-full shadow-lg border border-slate-800 text-xs font-semibold transition-all hover:scale-105 active:scale-95"
          title="Call Sales Directly"
        >
          <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="hidden sm:inline">+91 96245 13385</span>
        </a>

        {/* Floating WhatsApp Chat Button (Primary Pulse) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-all hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp with Orizer Team"
        >
          {/* Notification Ping Badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
            1
          </span>
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25.7-.93 1.28-1.6 1.45-.48.12-1.1.22-3.19-.65-2.68-1.11-4.4-3.83-4.54-4.01-.13-.18-1.09-1.46-1.09-2.78 0-1.32.69-1.97.93-2.24.25-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4.06.6.53.22.52.75 1.83.82 1.97.07.13.11.3.02.48-.09.17-.14.28-.27.44-.14.15-.29.34-.41.46-.14.13-.28.28-.12.56.16.27.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.61-.07.17-.19.72-.84.91-1.13.19-.28.39-.24.65-.14.26.1 1.66.78 1.94.92.29.14.48.21.55.33.07.13.07.74-.18 1.44z" />
          </svg>
        </a>
      </div>

      {/* ─── INSTANT 5-MINUTE CALLBACK MODAL ─── */}
      {showCallbackModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200">
            {/* Close Button */}
            <button
              onClick={() => setShowCallbackModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Request Received!</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                  Our Orizer solutions team will call you at <strong className="text-slate-900 font-mono">{countryCode} {phoneInput}</strong> within <strong>5 minutes</strong>.
                </p>
                <div className="pt-2 text-xs text-emerald-600 font-medium flex items-center justify-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Callback SLA: &lt; 300 Seconds</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600">
                    Instant Call Back Guarantee
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Request An Immediate Call Back
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-5 leading-relaxed">
                  Enter your phone number below. Our enterprise WhatsApp & ERP specialist will get in touch with you within <strong>5 minutes</strong>.
                </p>

                <form onSubmit={handleCallbackSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Sharma"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2.5 text-xs font-mono text-slate-800 focus:outline-none focus:border-emerald-500"
                      >
                        <option value="+91">IN (+91)</option>
                        <option value="+1">USA (+1)</option>
                        <option value="+44">UK (+44)</option>
                        <option value="+971">UAE (+971)</option>
                        <option value="+65">SG (+65)</option>
                      </select>
                      <input
                        type="tel"
                        required
                        placeholder="98765 43210"
                        value={phoneInput}
                        onChange={(e) => setPhoneInput(e.target.value)}
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-rose-500 font-medium">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    {submitting ? 'Connecting...' : 'Call Me In 5 Minutes'}
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="pt-1 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      100% Privacy. No Spam.
                    </span>
                    <span>Direct: +91 96245 13385</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
