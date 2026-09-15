import React, { useEffect } from 'react';
import { X, Award, FileText, Users, Mail, Phone, MessageCircle, Send, CheckCircle2, Shield, ArrowUpRight } from 'lucide-react';
import { AWARDS_DATA, NEWS_DATA, SERVICES_DATA, TECH_STACK } from '../data/agencyData';
import logoImg from '../assets/images/logo.png';

export type StudioModalType = 'about' | 'showcase' | 'awards' | 'news' | 'contact' | null;

interface StudioInfoModalProps {
  modalType: StudioModalType;
  onClose: () => void;
  onOpenShowreel: () => void;
}

export const StudioInfoModal: React.FC<StudioInfoModalProps> = ({
  modalType,
  onClose,
  onOpenShowreel,
}) => {
  useEffect(() => {
    if (modalType) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalType]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalType) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalType, onClose]);

  if (!modalType) return null;

  return (
    <div
      id="studio-info-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0D0D0D] border border-white/15 rounded-none flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)]">
        {/* Top Header bar with cyan accent border */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#00F0FF]" />
            <span className="font-display font-extrabold text-lg sm:text-xl uppercase tracking-wider text-white">
              {modalType === 'about' && 'ABOUT CREATIVE THINKER'}
              {modalType === 'showcase' && 'STUDIO DISCIPLINES & SHOWCASE'}
              {modalType === 'awards' && 'HONORS & FESTIVAL RECOGNITION'}
              {modalType === 'news' && 'STUDIO JOURNAL & FIELD LOGS'}
              {modalType === 'contact' && 'COMMISSION & REACH US'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-[#00F0FF] hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
          {/* ABOUT MODAL */}
          {modalType === 'about' && (
            <div className="space-y-8">
              <div className="w-full rounded overflow-hidden border border-white/10 shadow-2xl bg-black">
                <img
                  src={logoImg}
                  alt="Creative Thinker"
                  className="w-full h-auto object-contain max-h-64 p-4"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="border-l-4 border-[#00F0FF] pl-4 sm:pl-5">
                <p className="text-base sm:text-lg md:text-xl font-display font-bold text-white tracking-tight leading-snug">
                  "We Don't Just Edit Videos - We Turn Your Vision Into a Story."
                </p>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest mt-2 block">
                  Creative Thinker // Visual Content & Media Production
                </span>
              </div>

              <div className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed space-y-4">
                <p className="font-bold text-white">
                  Creative Thinker is a professional visual content and media production company specializing in construction site photography, drone videography, ground-camera shoots, and high-quality video editing.
                </p>
                <p>
                  We help construction companies, developers, builders, and project teams professionally showcase and document their projects through every stage of development. From monthly construction progress updates to complete project presentations, we capture every important detail with a combination of <em className="text-white not-italic font-medium">aerial drone footage, ground-level cinematography, photography, and professional editing.</em>
                </p>
                <p>
                  Our team transforms raw site footage into <em className="text-white not-italic font-medium">engaging, informative, and visually impressive content</em> that can be used for client updates, project presentations, social media, marketing, documentation, and project archives.
                </p>
              </div>
            </div>
          )}

          {/* SHOWCASE MODAL */}
          {modalType === 'showcase' && (
            <div className="space-y-6">
              <p className="text-sm font-light text-neutral-300">
                Our creative division is partitioned into four specialized production wings:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES_DATA.map((srv) => (
                  <div
                    key={srv.id}
                    className="p-5 border border-white/10 bg-white/[0.02] hover:border-[#00F0FF]/40 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest block mb-1">
                      {srv.badge}
                    </span>
                    <h4 className="font-display font-bold text-lg text-white uppercase mb-2">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                      {srv.description}
                    </p>
                    <div className="text-[10px] font-mono text-neutral-500">
                      SPECS: {srv.specs}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AWARDS MODAL */}
          {modalType === 'awards' && (
            <div className="space-y-4">
              <div className="divide-y divide-white/10 border-t border-b border-white/10">
                {AWARDS_DATA.map((award) => (
                  <div key={award.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-[#00F0FF] font-bold">{award.year}</span>
                      <div>
                        <h4 className="font-display font-bold text-white text-sm uppercase">{award.organization}</h4>
                        <span className="text-xs text-neutral-400">{award.category}</span>
                      </div>
                    </div>
                    <div className="text-right font-mono text-xs text-neutral-300">
                      <span className="text-[#00F0FF] font-semibold">{award.title}</span>
                      <span className="text-neutral-500 block text-[10px]">Project: {award.project}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NEWS MODAL */}
          {modalType === 'news' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {NEWS_DATA.map((item) => (
                  <div key={item.id} className="border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-wider block mb-1">{item.category}</span>
                      <h4 className="font-display font-bold text-base text-white uppercase leading-snug mb-2">{item.title}</h4>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">{item.excerpt}</p>
                    </div>
                    <div className="text-[10px] font-mono text-neutral-500 pt-3 border-t border-white/5 flex justify-between">
                      <span>{item.date}</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONTACT MODAL */}
          {modalType === 'contact' && (
            <div className="space-y-6">
              <p className="text-sm text-neutral-300 font-light">
                Direct production inquiries and project commissioning. We respond within 12 hours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 bg-white/[0.02] border border-white/10">
                  <span className="text-neutral-500 uppercase block mb-1">Reach Us</span>
                  <a href="tel:+917042693329" className="text-white font-bold hover:text-[#00F0FF] transition-colors">
                    +91 70426 93329
                  </a>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/10">
                  <span className="text-neutral-500 uppercase block mb-1">Mail Us</span>
                  <a href="mailto:Creativethinker027@gmail.com" className="text-white font-bold hover:text-[#00F0FF] transition-colors break-all">
                    Creativethinker027@gmail.com
                  </a>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/10">
                  <span className="text-neutral-500 uppercase block mb-1">Visit Us</span>
                  <span className="text-white font-bold block">World Cup Square</span>
                  <span className="text-neutral-400 text-[10px]">Indore, Madhya Pradesh, India</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href="https://wa.me/917042693329?text=Hello%20Creative%20Thinker%20Studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#00F0FF] text-black font-display font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Direct</span>
                </a>
                <span className="text-neutral-500 font-mono text-xs">
                  Domain: creativethinker.site
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
