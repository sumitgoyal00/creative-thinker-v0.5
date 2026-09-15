import React, { useState } from 'react';
import { QUOTE_OPTIONS } from '../data/agencyData';
import { QuoteFormData } from '../types';
import {
  Box,
  Building2,
  Tv,
  Sparkles,
  Clapperboard,
  Crown,
  Check,
  ChevronRight,
  ChevronLeft,
  Send,
  MessageCircle,
  FileCheck2,
  Clock,
  DollarSign,
  Layers,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface MultiStepQuoteFormProps {
  initialServiceId?: string | null;
}

export const MultiStepQuoteForm: React.FC<MultiStepQuoteFormProps> = ({ initialServiceId }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    service: initialServiceId || '3d-motion',
    budget: 'tier-2',
    timeline: 'standard',
    deliverableFormat: ['4K UHD Master', '9:16 Vertical Cut (TikTok / Reels / Shorts)'],
    name: '',
    whatsapp: '',
    email: '',
    brief: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [quoteReferenceId, setQuoteReferenceId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Update initial service when passed from featured cards
  React.useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, service: initialServiceId }));
    }
  }, [initialServiceId]);

  const totalSteps = 4;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const renderServiceIcon = (name: string) => {
    switch (name) {
      case 'Box':
        return <Box className="w-5 h-5 text-[#90D5FF]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#90D5FF]" />;
      case 'Tv':
        return <Tv className="w-5 h-5 text-[#90D5FF]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#90D5FF]" />;
      case 'Clapperboard':
        return <Clapperboard className="w-5 h-5 text-[#90D5FF]" />;
      case 'Crown':
        return <Crown className="w-5 h-5 text-[#90D5FF]" />;
      default:
        return <Layers className="w-5 h-5 text-[#90D5FF]" />;
    }
  };

  const handleNextStep = () => {
    setErrorMsg('');
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setErrorMsg('');
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const toggleFormat = (format: string) => {
    setFormData((prev) => {
      const exists = prev.deliverableFormat.includes(format);
      if (exists) {
        return {
          ...prev,
          deliverableFormat: prev.deliverableFormat.filter((f) => f !== format),
        };
      } else {
        return {
          ...prev,
          deliverableFormat: [...prev.deliverableFormat, format],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name or company name.');
      return;
    }
    if (!formData.email.trim() && !formData.whatsapp.trim()) {
      setErrorMsg('Please enter either a WhatsApp number or Email so we can deliver your quote.');
      return;
    }

    const ref = `CT-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteReferenceId(ref);
    setSubmitted(true);
  };

  // Find selected service label & budget label for summary
  const selectedServiceObj = QUOTE_OPTIONS.services.find((s) => s.id === formData.service);
  const selectedBudgetObj = QUOTE_OPTIONS.budgets.find((b) => b.id === formData.budget);
  const selectedTimelineObj = QUOTE_OPTIONS.timelines.find((t) => t.id === formData.timeline);

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Creative Thinker Studio! I would like to request an engineered production quote.\n\n` +
      `*Reference:* ${quoteReferenceId}\n` +
      `*Name:* ${formData.name}\n` +
      `*Service:* ${selectedServiceObj?.title || formData.service}\n` +
      `*Budget:* ${selectedBudgetObj?.label || formData.budget}\n` +
      `*Timeline:* ${selectedTimelineObj?.label || formData.timeline}\n` +
      `*Deliverables:* ${formData.deliverableFormat.join(', ')}\n` +
      `*Brief:* ${formData.brief || 'Custom brief via inquiry.'}`
    );
    return `https://wa.me/18005550199?text=${text}`;
  };

  return (
    <section
      id="quote-builder"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#90D5FF]" />
            Instant Estimate Pipeline
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Engineered <span className="text-[#90D5FF]">Production Quote</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Specify your creative vision, sensor deliverables, and schedule. Receive an itemized agency proposal within 12 business hours.
          </p>
        </div>

        {/* Main Quote Container */}
        <div className="relative rounded-3xl glass-panel border border-white/10 shadow-2xl overflow-hidden">
          {/* Thin Cyan Progress Bar at the top */}
          <div className="w-full bg-neutral-900 h-1.5 relative overflow-hidden">
            <div
              className="h-full bg-[#90D5FF] transition-all duration-500 ease-out shadow-[0_0_12px_#90D5FF]"
              style={{ width: `${submitted ? 100 : progressPercentage}%` }}
            />
          </div>

          {/* Steps Indicator Strip */}
          <div className="px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between bg-black/30">
            <div className="flex items-center gap-2 sm:gap-6 text-xs font-mono">
              {[
                { num: 1, label: 'Service' },
                { num: 2, label: 'Budget' },
                { num: 3, label: 'Timeline' },
                { num: 4, label: 'Project Brief' },
              ].map((step) => {
                const isPassed = currentStep > step.num;
                const isCurrent = currentStep === step.num;
                return (
                  <div
                    key={step.num}
                    className={`flex items-center gap-2 ${
                      isCurrent
                        ? 'text-[#90D5FF] font-bold'
                        : isPassed
                        ? 'text-white'
                        : 'text-neutral-600'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-mono border ${
                        isCurrent
                          ? 'border-[#90D5FF] bg-[#90D5FF]/10 text-[#90D5FF] shadow-[0_0_8px_rgba(144,213,255,0.4)]'
                          : isPassed
                          ? 'border-white bg-white/10 text-white'
                          : 'border-white/10 bg-white/5 text-neutral-500'
                      }`}
                    >
                      {isPassed ? <Check className="w-3.5 h-3.5" /> : step.num}
                    </span>
                    <span className="hidden sm:inline uppercase tracking-wider">{step.label}</span>
                  </div>
                );
              })}
            </div>

            <span className="text-xs font-mono text-neutral-400">
              Step {currentStep} of {totalSteps}
            </span>
          </div>

          {/* Form Content / Success Screen */}
          <div className="p-6 sm:p-10">
            {submitted ? (
              /* Success Confirmation View */
              <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#90D5FF]/10 border border-[#90D5FF] flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(144,213,255,0.4)]">
                  <FileCheck2 className="w-8 h-8 text-[#90D5FF]" />
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
                  Proposal Request Dispatched
                </h3>
                <p className="text-xs font-mono text-[#90D5FF] uppercase tracking-widest mb-4">
                  Reference: {quoteReferenceId}
                </p>
                <p className="text-neutral-300 text-sm max-w-lg mx-auto font-light mb-8">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our lead director and post-production supervisor are assembling your bespoke production breakdown.
                </p>

                {/* Selected Package Breakdown Summary */}
                <div className="max-w-md mx-auto rounded-2xl bg-black/50 border border-white/10 p-5 text-left mb-8 space-y-2 text-xs font-mono">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-neutral-400">Selected Discipline:</span>
                    <span className="text-white font-medium">{selectedServiceObj?.title}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-neutral-400">Budget Tier:</span>
                    <span className="text-[#90D5FF] font-medium">{selectedBudgetObj?.label}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-neutral-400">Target Timeline:</span>
                    <span className="text-white font-medium">{selectedTimelineObj?.label}</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-neutral-400 block mb-1">Deliverables:</span>
                    <div className="flex flex-wrap gap-1">
                      {formData.deliverableFormat.map((f) => (
                        <span key={f} className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-neutral-300">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-display font-bold text-sm uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>Send Directly via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setCurrentStep(1);
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono uppercase tracking-wider transition-all"
                  >
                    Start New Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Active Step Form */
              <form onSubmit={handleSubmit}>
                {errorMsg && (
                  <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-xs">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* STEP 1: Select Service (Icon Tiles) */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="mb-6">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                        Step 1: Choose Your Primary Focus Discipline
                      </h3>
                      <p className="text-neutral-400 text-xs sm:text-sm font-light">
                        Select the primary capability your project requires. You can expand deliverables in later steps.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {QUOTE_OPTIONS.services.map((svc) => {
                        const isSelected = formData.service === svc.id;
                        return (
                          <div
                            key={svc.id}
                            id={`quote-service-${svc.id}`}
                            onClick={() => setFormData({ ...formData, service: svc.id })}
                            className={`p-5 rounded-2xl cursor-pointer border transition-all duration-300 flex flex-col justify-between ${
                              isSelected
                                ? 'bg-[#90D5FF]/10 border-[#90D5FF] shadow-[0_0_20px_rgba(144,213,255,0.2)]'
                                : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/5'
                            }`}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                  isSelected
                                    ? 'bg-[#90D5FF] text-black'
                                    : 'bg-white/5 text-[#90D5FF]'
                                }`}
                              >
                                {renderServiceIcon(svc.icon)}
                              </div>
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  isSelected
                                    ? 'border-[#90D5FF] bg-[#90D5FF] text-black'
                                    : 'border-white/20'
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-display font-bold text-sm sm:text-base text-white mb-1">
                                {svc.title}
                              </h4>
                              <p className="text-neutral-400 text-xs font-light">
                                {svc.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: Budget Range (Tile Select) */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="mb-6">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                        Step 2: Projected Budget Allocation
                      </h3>
                      <p className="text-neutral-400 text-xs sm:text-sm font-light">
                        We tailor camera packages, CGI compute hours, and crew scale to optimize every dollar spent.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {QUOTE_OPTIONS.budgets.map((b) => {
                        const isSelected = formData.budget === b.id;
                        return (
                          <div
                            key={b.id}
                            id={`quote-budget-${b.id}`}
                            onClick={() => setFormData({ ...formData, budget: b.id })}
                            className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 flex items-start justify-between ${
                              isSelected
                                ? 'bg-[#90D5FF]/10 border-[#90D5FF] shadow-[0_0_20px_rgba(144,213,255,0.2)]'
                                : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/5'
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                                  isSelected
                                    ? 'bg-[#90D5FF] text-black'
                                    : 'bg-white/5 text-[#90D5FF]'
                                }`}
                              >
                                <DollarSign className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="font-display font-extrabold text-lg text-white mb-1">
                                  {b.label}
                                </div>
                                <p className="text-neutral-400 text-xs font-light">
                                  {b.subtitle}
                                </p>
                              </div>
                            </div>

                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? 'border-[#90D5FF] bg-[#90D5FF] text-black'
                                  : 'border-white/20'
                              }`}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3: Timeline & Deliverables (Tile Select) */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1">
                        Step 3: Schedule & Output Deliverables
                      </h3>
                      <p className="text-neutral-400 text-xs sm:text-sm font-light">
                        Select your preferred delivery window and required aspect ratios.
                      </p>
                    </div>

                    {/* Timeline Tiles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {QUOTE_OPTIONS.timelines.map((t) => {
                        const isSelected = formData.timeline === t.id;
                        return (
                          <div
                            key={t.id}
                            id={`quote-timeline-${t.id}`}
                            onClick={() => setFormData({ ...formData, timeline: t.id })}
                            className={`p-5 rounded-2xl cursor-pointer border transition-all duration-300 flex items-start justify-between ${
                              isSelected
                                ? 'bg-[#90D5FF]/10 border-[#90D5FF] shadow-[0_0_20px_rgba(144,213,255,0.2)]'
                                : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/5'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                                  isSelected
                                    ? 'bg-[#90D5FF] text-black'
                                    : 'bg-white/5 text-[#90D5FF]'
                                }`}
                              >
                                <Clock className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="font-display font-bold text-sm text-white mb-0.5">
                                  {t.label}
                                </h4>
                                <p className="text-neutral-400 text-xs font-light">
                                  {t.subtitle}
                                </p>
                              </div>
                            </div>

                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? 'border-[#90D5FF] bg-[#90D5FF] text-black'
                                  : 'border-white/20'
                              }`}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Deliverable Format Multi-Select */}
                    <div className="pt-4 border-t border-white/10">
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-3">
                        Include Deliverable Packages (Select all that apply):
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {QUOTE_OPTIONS.formats.map((fmt) => {
                          const active = formData.deliverableFormat.includes(fmt);
                          return (
                            <button
                              type="button"
                              key={fmt}
                              onClick={() => toggleFormat(fmt)}
                              className={`p-3 rounded-xl text-left text-xs font-medium border flex items-center justify-between transition-all cursor-pointer ${
                                active
                                  ? 'bg-[#90D5FF]/10 border-[#90D5FF] text-white'
                                  : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                              }`}
                            >
                              <span className="truncate pr-2">{fmt}</span>
                              <div
                                className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                  active
                                    ? 'border-[#90D5FF] bg-[#90D5FF] text-black'
                                    : 'border-white/20'
                                }`}
                              >
                                {active && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Project Brief + Name + WhatsApp + Email + Submit */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1">
                        Step 4: Project Brief & Contact Coordinates
                      </h3>
                      <p className="text-neutral-400 text-xs sm:text-sm font-light">
                        Tell us about your brand vision, key references, or locations.
                      </p>
                    </div>

                    {/* Brief Textarea */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        Project Brief or Reference Links (Optional)
                      </label>
                      <textarea
                        rows={4}
                        placeholder="E.g., Launching a mechanical watch line in Nov 2026. Looking for macro 3D CGI product renders and a 45-second mood video with synth sound design..."
                        value={formData.brief}
                        onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                        className="w-full rounded-xl bg-black/60 border border-white/10 p-4 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#90D5FF] transition-colors"
                      />
                    </div>

                    {/* Contact Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                          Your Name / Company *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Julian Vance"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#90D5FF] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                          WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 019-2834"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="w-full rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#90D5FF] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          placeholder="julian@brand.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#90D5FF] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Quick Recap Badge */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
                      <div>
                        <span className="text-white font-medium">{selectedServiceObj?.title}</span> •{' '}
                        <span className="text-[#90D5FF] font-medium">{selectedBudgetObj?.label}</span> •{' '}
                        <span>{selectedTimelineObj?.label}</span>
                      </div>
                      <span className="text-[#90D5FF] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Ready for Engineering Review
                      </span>
                    </div>
                  </div>
                )}

                {/* Form Navigation Controls */}
                <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      id="quote-btn-next"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#90D5FF] text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(144,213,255,0.4)] cursor-pointer"
                    >
                      <span>Continue to {currentStep === 1 ? 'Budget' : currentStep === 2 ? 'Timeline' : 'Brief'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      id="quote-btn-submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#90D5FF] text-black font-display font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(144,213,255,0.5)] cursor-pointer"
                    >
                      <Send className="w-4 h-4 fill-black" />
                      <span>Submit Quote Request</span>
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
