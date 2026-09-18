import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  X as XIcon,
  HelpCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  Info,
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { PRICING_DATA } from '../data/pricingData';
import { FAQ_DATA } from '../data/faqData';

export default function PricingPage({ onOpenDemoModal, onOpenContactModal }) {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Pricing & Plans' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-semibold tracking-wide shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Transparent Enterprise SaaS Pricing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Simple, Predictable Plans for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500">
                Every Growth Stage.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Zero hidden charges. Pay transparent software subscriptions with direct-to-Meta official API wholesale rates and 100% data ownership.
            </p>

            {/* Annual vs Monthly Toggle */}
            <div className="pt-4 flex items-center justify-center gap-4">
              <span
                className={`text-xs font-semibold cursor-pointer ${
                  !isAnnual ? 'text-slate-900' : 'text-slate-400'
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly Billing
              </span>
              <button
                type="button"
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-12 h-6 rounded-full bg-slate-200 p-1 relative transition-colors focus:outline-none"
              >
                <div
                  className={`w-4 h-4 rounded-full bg-brand-600 shadow-sm transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
              <span
                className={`text-xs font-semibold cursor-pointer flex items-center gap-1.5 ${
                  isAnnual ? 'text-slate-900' : 'text-slate-400'
                }`}
                onClick={() => setIsAnnual(true)}
              >
                <span>Annual Billing</span>
                <span className="px-2 py-0.5 rounded-full bg-brand-100 text-brand-800 text-[10px] font-mono font-bold">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4 PLAN CARDS ─── */}
      <section className="py-12 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PRICING_DATA.plans.map((plan) => {
              const price =
                typeof plan.monthlyPrice === 'number'
                  ? isAnnual
                    ? plan.annualPrice
                    : plan.monthlyPrice
                  : plan.monthlyPrice;

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all ${
                    plan.popular
                      ? 'bg-white border-2 border-brand-500 shadow-xl ring-4 ring-brand-500/10'
                      : 'bg-white border border-slate-200 shadow-card hover:shadow-card-hover'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                      Most Popular Plan
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 text-lg">{plan.name}</span>
                      <span className="font-mono text-[10px] uppercase font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                        {plan.badge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 mb-5 min-h-[36px]">{plan.description}</p>

                    {/* Price display */}
                    <div className="pb-6 mb-6 border-b border-slate-100 flex items-baseline gap-1">
                      {typeof price === 'number' ? (
                        <>
                          <span className="text-slate-500 font-mono text-base font-normal">₹</span>
                          <span className="text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                            {price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-slate-400 ml-1">/ month</span>
                        </>
                      ) : (
                        <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                          Custom Pricing
                        </span>
                      )}
                    </div>

                    {/* Features list */}
                    <div className="space-y-2.5 text-xs text-slate-700 mb-8">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenContactModal}
                    className={`w-full py-3 rounded-xl font-semibold text-xs transition-all active:scale-[0.98] ${
                      plan.popular
                        ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-btn'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Configurable disclaimer note */}
          <div className="mt-8 text-center text-xs text-slate-500 max-w-xl mx-auto">
            * All subscription prices above are configurable placeholders for your business and exclude standard GST and official direct Meta WhatsApp conversation charges.
          </div>
        </div>
      </section>

      {/* ─── OFFICIAL META API CONVERSATION FEE TRANSPARENCY ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-card text-left space-y-4">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-brand-600" />
              <h3 className="text-xl font-bold text-slate-900">
                {PRICING_DATA.metaPricingNotice.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {PRICING_DATA.metaPricingNotice.description}
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-700">
              {PRICING_DATA.metaPricingNotice.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DETAILED FEATURE COMPARISON TABLE ─── */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Full Matrix"
            title="Comprehensive Feature Comparison"
            subtitle="Detailed breakdown of capabilities across all eBizChat tiers."
          />

          <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden text-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 font-bold text-slate-900 w-2/5">Capabilities</th>
                    <th className="p-4 font-bold text-slate-900 text-center">Starter</th>
                    <th className="p-4 font-bold text-slate-900 text-center">Growth</th>
                    <th className="p-4 font-bold text-brand-700 text-center bg-brand-50/40">Professional</th>
                    <th className="p-4 font-bold text-slate-900 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {PRICING_DATA.comparisonMatrix.map((section) => (
                    <React.Fragment key={section.category}>
                      <tr className="bg-slate-100/60 font-mono font-bold text-[11px] text-slate-500 uppercase tracking-wider">
                        <td colSpan="5" className="px-4 py-2.5">
                          {section.category}
                        </td>
                      </tr>
                      {section.features.map((feat) => (
                        <tr key={feat.name} className="hover:bg-slate-50/60">
                          <td className="p-4 font-medium text-slate-800">{feat.name}</td>
                          <td className="p-4 text-center">
                            {typeof feat.starter === 'boolean' ? (
                              feat.starter ? (
                                <Check className="w-4 h-4 text-brand-600 mx-auto" />
                              ) : (
                                <span className="text-slate-300">—</span>
                              )
                            ) : (
                              <span className="text-slate-700">{feat.starter}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof feat.growth === 'boolean' ? (
                              feat.growth ? (
                                <Check className="w-4 h-4 text-brand-600 mx-auto" />
                              ) : (
                                <span className="text-slate-300">—</span>
                              )
                            ) : (
                              <span className="text-slate-700">{feat.growth}</span>
                            )}
                          </td>
                          <td className="p-4 text-center bg-brand-50/20">
                            {typeof feat.pro === 'boolean' ? (
                              feat.pro ? (
                                <Check className="w-4 h-4 text-brand-600 mx-auto" />
                              ) : (
                                <span className="text-slate-300">—</span>
                              )
                            ) : (
                              <span className="font-semibold text-brand-800">{feat.pro}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof feat.enterprise === 'boolean' ? (
                              feat.enterprise ? (
                                <Check className="w-4 h-4 text-brand-600 mx-auto" />
                              ) : (
                                <span className="text-slate-300">—</span>
                              )
                            ) : (
                              <span className="font-semibold text-slate-900">{feat.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING FAQ ACCORDION ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Common Questions"
            title="Billing & Subscription FAQ"
            subtitle="Have questions about invoices, Meta charges, or onboarding support?"
          />

          <div className="space-y-3 text-left">
            {FAQ_DATA.filter((f) => f.category === 'Billing & Plans' || f.category === 'WhatsApp Business API').map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={item.question}
                  className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-sm text-slate-900 hover:text-brand-600"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180 text-brand-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold">Need a Custom Enterprise Deployment?</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            We offer dedicated instances, custom manufacturing ERP sync, on-premise hosting, and custom SLAs.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-btn transition-all"
            >
              Talk to Enterprise Sales
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
