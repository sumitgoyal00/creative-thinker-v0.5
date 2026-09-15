import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';
import { Box, Building2, Tv, Sparkles, Clapperboard, ArrowUpRight, Play, CheckCircle2 } from 'lucide-react';

interface FeaturedServicesProps {
  onSelectServiceForQuote: (serviceId: string) => void;
  onPreviewServiceVideo: (service: ServiceItem) => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({
  onSelectServiceForQuote,
  onPreviewServiceVideo,
}) => {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Helper to render lucide icon by name
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Box':
        return <Box className="w-6 h-6 text-[#90D5FF]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#90D5FF]" />;
      case 'Tv':
        return <Tv className="w-6 h-6 text-[#90D5FF]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#90D5FF]" />;
      case 'Clapperboard':
        return <Clapperboard className="w-6 h-6 text-[#90D5FF]" />;
      default:
        return <Box className="w-6 h-6 text-[#90D5FF]" />;
    }
  };

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-white/5">
      {/* Background glow or subtle gradient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#90D5FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#90D5FF]" />
              Core Disciplines
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Featured <span className="text-[#90D5FF]">Services</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-light">
            Engineered through high-performance sensors, GPU particle compute, and bespoke color science to elevate brands above the digital noise.
          </p>
        </div>

        {/* Asymmetric Bento Grid (5 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {SERVICES_DATA.map((service, index) => {
            // Asymmetric layout spans:
            // 0: 3D Animation -> md:col-span-7 (prominent showcase)
            // 1: Construction & Real Estate -> md:col-span-5
            // 2: Commercials -> md:col-span-4
            // 3: Weddings & Events -> md:col-span-4
            // 4: Short Films -> md:col-span-4
            const spanClass =
              index === 0
                ? 'md:col-span-7 min-h-[380px]'
                : index === 1
                ? 'md:col-span-5 min-h-[380px]'
                : 'md:col-span-4 min-h-[360px]';

            const isHovered = hoveredCardId === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onMouseEnter={() => setHoveredCardId(service.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className={`group relative rounded-2xl overflow-hidden glass-panel glass-panel-hover flex flex-col justify-between p-7 transition-all duration-500 ${spanClass}`}
              >
                {/* Background Image/Video with subtle scale */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={service.posterImage}
                    alt={service.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-[0.28]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/70 to-transparent" />
                  {/* Subtle cyan glow line at top on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#90D5FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Card Top: Icon & Badge */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#90D5FF]/50 group-hover:bg-[#90D5FF]/10 transition-colors">
                      {renderIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-[#90D5FF]/10 text-[#90D5FF] border border-[#90D5FF]/20">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Play preview trigger button */}
                  <button
                    onClick={() => onPreviewServiceVideo(service)}
                    title="Preview Sample"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#90D5FF] text-white hover:text-black flex items-center justify-center transition-all duration-300 opacity-80 group-hover:opacity-100 cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </button>
                </div>

                {/* Card Middle: Titles & Description */}
                <div className="relative z-10 my-4">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-white transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Deliverables tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-300 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#90D5FF]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Specs & CTA Action */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between gap-4 text-xs font-mono text-neutral-400">
                  <span className="truncate">{service.specs}</span>
                  <button
                    onClick={() => onSelectServiceForQuote(service.id)}
                    className="inline-flex items-center gap-1 text-[#90D5FF] hover:text-white font-sans font-semibold tracking-wide transition-colors cursor-pointer"
                  >
                    <span>Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
