import React, { useState } from 'react';
import { Send, MessageCircle, Mail, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '', // Email or WhatsApp
    brief: '',
    discipline: 'All Production',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) return;
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Creative Thinker Studio! I would like to inquire about a video production project.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Contact:* ${formData.contact}\n` +
      `*Discipline:* ${formData.discipline}\n` +
      `*Brief:* ${formData.brief || 'Custom campaign brief'}`
    );
    return `https://wa.me/917042693329?text=${text}`;
  };

  return (
    <section id="contact" className="relative min-h-screen py-28 px-6 sm:px-10 lg:px-16 bg-[#0D0D0D] border-t border-white/5 flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full flex-grow flex flex-col justify-center">
        {/* Massive Minimal Headline (Red Chillies style) */}
        <div className="mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#90D5FF] block mb-3">
            Direct Studio Inquiries
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-none mb-4">
            Let's Talk.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl">
            Whether preparing a global commercial, a 3D architectural film, or festival finishing—reach our production desk directly.
          </p>
        </div>

        {/* Minimal Form Container */}
        {submitted ? (
          <div className="rounded-2xl glass-panel border border-[#90D5FF]/40 p-8 sm:p-12 text-center animate-in fade-in duration-300 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#90D5FF]/10 border border-[#90D5FF] flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(144,213,255,0.4)]">
              <CheckCircle2 className="w-8 h-8 text-[#90D5FF]" />
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
              Transmission Received
            </h3>
            <p className="text-neutral-300 text-sm max-w-md mx-auto font-light mb-8">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our director or executive producer will reply within 12 hours with availability and project next steps.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-display font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)]"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Open Instant WhatsApp Chat</span>
              </a>

              <button
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-mono uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer"
              >
                Send Another Note
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
            {/* Input Row: Name & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  Your Name / Agency *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Julian Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-[#90D5FF] p-4 text-white text-sm placeholder-neutral-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  Email or WhatsApp *
                </label>
                <input
                  type="text"
                  required
                  placeholder="julian@brand.com or +1 (555) 019-2834"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-[#90D5FF] p-4 text-white text-sm placeholder-neutral-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Discipline Selector */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Primary Scope of Interest
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['3D & Motion', 'Construction & Drone', 'Tracking & Marking'].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setFormData({ ...formData, discipline: item })}
                    className={`py-3 px-4 rounded-xl text-xs font-mono text-center border transition-all cursor-pointer ${
                      formData.discipline === item
                        ? 'bg-[#90D5FF]/10 border-[#90D5FF] text-[#90D5FF] font-semibold'
                        : 'bg-white/[0.02] border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Brief */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Project Brief or Vision
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about the project schedule, target platforms, or creative references..."
                value={formData.brief}
                onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                className="w-full rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-[#90D5FF] p-4 text-white text-sm placeholder-neutral-600 focus:outline-none transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#90D5FF] hover:bg-white text-black font-display font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(144,213,255,0.4)] cursor-pointer"
              >
                <span>Transmit Brief</span>
                <Send className="w-3.5 h-3.5 fill-black" />
              </button>

              <div className="text-xs font-mono text-neutral-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#90D5FF]" />
                Direct review by Lead Director
              </div>
            </div>
          </form>
        )}
      </div>

      {/* Understated Studio Coordinates Footer Bar */}
      <div className="max-w-5xl mx-auto w-full pt-16 mt-16 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs font-mono text-neutral-400">
        <div className="space-y-1">
          <div className="text-white font-bold font-display uppercase tracking-wider">
            Creative Thinker Studio
          </div>
          <p className="text-neutral-500">
            Domain: creativethinker.site • Registered Production Facility
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <a
            href="mailto:Creativethinker027@gmail.com"
            className="hover:text-[#90D5FF] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#90D5FF]" />
            <span>Creativethinker027@gmail.com</span>
          </a>
          <a
            href="https://wa.me/917042693329"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#25D366] transition-colors flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>+91 70426 93329</span>
          </a>
        </div>
      </div>
    </section>
  );
};
