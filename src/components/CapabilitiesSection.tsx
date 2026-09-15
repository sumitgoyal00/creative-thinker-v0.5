import React from 'react';
import { TECH_STACK } from '../data/agencyData';
import { ArrowRight } from 'lucide-react';

interface CapabilitiesSectionProps {
  onNavigateToContact: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onNavigateToContact }) => {
  const capabilities = [
    {
      num: '01',
      title: 'End-to-End Production',
      subtitle: 'From initial concept storyboard to the final theatre-ready DCP render package.',
      stat: 'Complete In-House'
    },
    {
      num: '02',
      title: '4K & 8K Master Delivery',
      subtitle: 'Native large-format sensors, Cooke anamorphic glass, and lossless 12-bit ProRes finishing.',
      stat: 'DCI Cinema Standard'
    },
    {
      num: '03',
      title: 'Hyper-Agile Turnaround',
      subtitle: 'Rapid assembly cuts within 48 hours and instant timestamped Frame.io cloud collaboration.',
      stat: '7-Day First Cut'
    },
    {
      num: '04',
      title: 'Full Creative Control',
      subtitle: 'No middlemen, no template libraries. Dedicated director and supervisor attention on every frame.',
      stat: 'Auteur Direction'
    }
  ];

  return (
    <section id="capabilities" className="relative py-28 px-6 sm:px-10 lg:px-16 bg-[#0D0D0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#90D5FF] block mb-3">
            Studio Philosophy & Capabilities
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight max-w-4xl leading-[1.1]">
            Engineered For Visionaries Who Refuse Stock Formulas.
          </h2>
        </div>

        {/* Minimal Text-Led Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {capabilities.map((cap) => (
            <div
              key={cap.num}
              className="group border-t border-white/10 pt-6 hover:border-[#90D5FF]/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-neutral-500 group-hover:text-[#90D5FF] transition-colors block mb-4">
                  / {cap.num}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wide mb-3 group-hover:text-white">
                  {cap.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {cap.subtitle}
                </p>
              </div>

              <div className="font-mono text-[11px] text-[#90D5FF] tracking-wider uppercase">
                {cap.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Strip: Small, understated, not flashy */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 shrink-0">
              Verified Pipeline:
            </span>

            {/* Understated tech stack names */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono text-neutral-400">
              {TECH_STACK.map((tech, idx) => (
                <span key={tech.name} className="hover:text-[#90D5FF] transition-colors flex items-center gap-2">
                  <span className="text-white font-medium">{tech.name}</span>
                  {idx < TECH_STACK.length - 1 && <span className="text-neutral-700">•</span>}
                </span>
              ))}
            </div>

            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#90D5FF] hover:text-white transition-colors shrink-0 cursor-pointer"
            >
              <span>Commission A Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
