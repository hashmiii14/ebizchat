import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Video, ArrowRight } from 'lucide-react';
import { submitForm } from '../../services/formService';
import { ORIZER_INFO } from '../../data/orizerData';

export default function DemoModal({ isOpen, onClose }) {
  const [step, setStep] = useState('datetime'); // 'datetime' | 'details' | 'confirmed'
  const [selectedDate, setSelectedDate] = useState('Mon, Oct 5');
  const [selectedTime, setSelectedTime] = useState('02:00 PM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [requirement, setRequirement] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [leadId, setLeadId] = useState('');

  if (!isOpen) return null;

  const dates = [
    { day: 'Mon', num: '05', month: 'Oct', full: 'Mon, Oct 5' },
    { day: 'Tue', num: '06', month: 'Oct', full: 'Tue, Oct 6' },
    { day: 'Wed', num: '07', month: 'Oct', full: 'Wed, Oct 7' },
    { day: 'Thu', num: '08', month: 'Oct', full: 'Thu, Oct 8' },
    { day: 'Fri', num: '09', month: 'Oct', full: 'Fri, Oct 9' },
    { day: 'Mon', num: '12', month: 'Oct', full: 'Mon, Oct 12' },
  ];

  const timeSlots = [
    '10:30 AM',
    '11:45 AM',
    '02:00 PM',
    '03:30 PM',
    '04:45 PM',
    '05:30 PM',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setErrorMsg('Please complete all required fields (*).');
      return;
    }
    setErrorMsg('');
    setSubmitting(true);
    try {
      const res = await submitForm({
        type: 'demo',
        name,
        email,
        phone,
        company,
        requirement,
        preferredDate: selectedDate,
        preferredTime: selectedTime,
      });
      setLeadId(res.leadId);
      setStep('confirmed');
    } catch (err) {
      setErrorMsg(err.message || 'Submission error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep('datetime');
    setErrorMsg('');
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setRequirement('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden animate-in fade-in-50 zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Book Live eBizChat Demo</h3>
              <p className="text-xs text-slate-500">With an Orizer Technical ERP Specialist</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {step === 'datetime' && (
            <div>
              <div className="mb-4">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  1. Select Date
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {dates.map((d) => {
                    const isSelected = selectedDate === d.full;
                    return (
                      <button
                        key={d.full}
                        type="button"
                        onClick={() => setSelectedDate(d.full)}
                        className={`p-2 rounded-xl border text-center transition-all ${
                          isSelected
                            ? 'bg-brand-50 border-brand-500 text-brand-700 shadow-sm ring-1 ring-brand-500'
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400">
                          {d.day}
                        </span>
                        <span className="block text-base font-bold text-slate-900 my-0.5">
                          {d.num}
                        </span>
                        <span className="block text-[10px] text-slate-500">{d.month}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  2. Select Time (IST)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-brand-50 border-brand-500 text-brand-700 shadow-sm ring-1 ring-brand-500 font-semibold'
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep('details')}
                className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-xl shadow-btn transition-colors flex items-center justify-center gap-2"
              >
                Continue to Company Details
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 'details' && (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="text-xs text-slate-500">
                  Selected Slot: <strong className="text-slate-800">{selectedDate} at {selectedTime} (IST)</strong>
                </div>
                <button
                  type="button"
                  onClick={() => setStep('datetime')}
                  className="text-xs text-brand-600 hover:underline font-medium"
                >
                  Change Time
                </button>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rajesh@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Company / Factory Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Precision Components Ltd"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Primary Objective / Requirements
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Connect Orizer ERP dispatch alerts to WhatsApp & manage 200 dealer inquiries"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 resize-none"
                />
              </div>

              {errorMsg && <p className="text-xs text-rose-500 font-medium">{errorMsg}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-xl shadow-btn transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? 'Confirming Demo Slot...' : 'Confirm Demo Reservation'}
              </button>
            </form>
          )}

          {step === 'confirmed' && (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Demo Confirmed!</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Reference ID: <span className="font-mono font-semibold text-slate-800">{leadId}</span>. We've sent a calendar invite to <span className="font-medium text-slate-800">{email}</span> and WhatsApp confirmation to <span className="font-medium text-slate-800">{phone}</span>.
              </p>

              <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex items-center gap-2 font-medium text-slate-800">
                  <Calendar className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span>{selectedDate} at {selectedTime} (IST)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Video className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span>Google Meet / Screen Share Link Attached</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span>30-Minute Tailored Walkthrough</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="mt-6 px-6 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
