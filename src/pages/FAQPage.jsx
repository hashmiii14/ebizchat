import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { FAQ_CATEGORIES, FAQ_DATA } from '../data/faqData';
import { ORIZER_INFO } from '../data/orizerData';

export default function FAQPage({ onOpenContactModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Resources', path: '/resources' },
              { label: 'Frequently Asked Questions' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-semibold tracking-wide">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Orizer Knowledgebase</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h1>
            <p className="text-base text-slate-600 font-normal">
              Clear, transparent answers regarding WhatsApp Meta policies, Orizer ERP integration, and pricing.
            </p>

            {/* Search Box */}
            <div className="pt-4 max-w-xl mx-auto">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search questions by keyword (e.g. ERP sync, Green Tick, pricing)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-800 shadow-subtle focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="border-y border-slate-200 bg-slate-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ─── ACCORDION LIST ─── */}
      <section className="py-16 bg-white flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3.5 text-left">
            {filteredFaqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.question}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-subtle transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left font-bold text-sm sm:text-base text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <span className="w-2 h-2 rounded-full bg-brand-500 flex-shrink-0"></span>
                      <span>{item.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                      <div className="font-mono text-[10px] text-brand-700 uppercase font-semibold mb-2">
                        Category: {item.category}
                      </div>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-16 text-slate-500 text-sm">
              No questions found matching your search. Please reach out to our HelpDesk directly.
            </div>
          )}

          {/* Quick HelpDesk Box */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-3">
            <h4 className="font-bold text-slate-900 text-lg">Still have a question?</h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Our technical architects are available Monday through Saturday, 9 AM – 6 PM IST.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${ORIZER_INFO.contact.mainPhoneRaw}`}
                className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-semibold hover:bg-slate-100"
              >
                Call: {ORIZER_INFO.contact.mainPhone}
              </a>
              <button
                onClick={onOpenContactModal}
                className="px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-semibold hover:bg-brand-700 shadow-sm"
              >
                Submit Written Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
