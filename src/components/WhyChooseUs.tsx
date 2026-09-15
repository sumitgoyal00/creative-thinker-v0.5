import React from 'react';
import { DIFFERENTIATORS, TECH_STACK } from '../data/agencyData';
import { Camera, Cpu, Sliders, Zap, ShieldCheck, Layers, Film, Box, Cuboid, Palette, Aperture, Navigation, Gamepad2, Sun } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Camera':
        return <Camera className="w-6 h-6 text-[#00F0FF]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#00F0FF]" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-[#00F0FF]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#00F0FF]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#00F0FF]" />;
    }
  };

  const renderTechIcon = (name: string) => {
    switch (name) {
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#00F0FF]" />;
      case 'Film':
        return <Film className="w-4 h-4 text-[#00F0FF]" />;
      case 'Box':
        return <Box className="w-4 h-4 text-[#00F0FF]" />;
      case 'Cuboid':
        return <Cuboid className="w-4 h-4 text-[#00F0FF]" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-[#00F0FF]" />;
      case 'Camera':
        return <Camera className="w-4 h-4 text-[#00F0FF]" />;
      case 'Aperture':
        return <Aperture className="w-4 h-4 text-[#00F0FF]" />;
      case 'Navigation':
        return <Navigation className="w-4 h-4 text-[#00F0FF]" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-4 h-4 text-[#00F0FF]" />;
      case 'Sun':
        return <Sun className="w-4 h-4 text-[#00F0FF]" />;
      default:
        return <Cpu className="w-4 h-4 text-[#00F0FF]" />;
    }
  };

  return (
    <section id="why-us" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              The Standard
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Why Choose <span className="text-[#00F0FF]">Creative Thinker</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-light">
            We operate at the convergence of cutting-edge hardware physics and auteur creative direction. No stock footage templates. No generic shortcuts.
          </p>
        </div>

        {/* 4 Differentiator Cards with Large Faint Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {DIFFERENTIATORS.map((diff) => (
            <div
              key={diff.id}
              id={`diff-card-${diff.id}`}
              className="group relative rounded-2xl glass-panel glass-panel-hover p-8 overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              {/* Large Faint Background Number (01, 02, 03, 04) */}
              <span className="absolute -top-6 -right-3 font-display font-black text-8xl sm:text-9xl text-white/[0.04] group-hover:text-[#00F0FF]/[0.08] transition-colors pointer-events-none select-none">
                {diff.number}
              </span>

              <div>
                {/* Header & Icon */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00F0FF]/40 group-hover:bg-[#00F0FF]/10 transition-colors">
                    {renderIcon(diff.iconName)}
                  </div>
                  <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase">
                    Stage {diff.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-white transition-colors mb-2">
                  {diff.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-[#00F0FF]/90 mb-4">
                  {diff.headline}
                </p>
                <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                  {diff.description}
                </p>
              </div>

              {/* Metric Callout */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                    {diff.metricLabel}
                  </span>
                  <span className="font-display font-bold text-lg text-white group-hover:text-[#00F0FF] transition-colors">
                    {diff.metrics}
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#00F0FF]/50 group-hover:bg-[#00F0FF] group-hover:shadow-[0_0_10px_#00F0FF] transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Auto-Scrolling Tech Stack Logo Marquee */}
        <div id="tech-stack" className="pt-10 border-t border-white/10">
          <div className="text-center mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              Verified Production Pipeline & Tooling
            </span>
          </div>

          {/* Marquee Container with subtle edge masks */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex gap-6 w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
              {/* Double the list for infinite seamless marquee */}
              {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
                <div
                  key={`${tech.name}-${idx}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00F0FF]/50 transition-all group shrink-0"
                >
                  <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-[#00F0FF]/10 transition-colors">
                    {renderTechIcon(tech.iconName)}
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-white block group-hover:text-[#00F0FF] transition-colors">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                      {tech.category}
                    </span>
                  </div>
                  {tech.version && (
                    <span className="ml-2 text-[9px] font-mono text-neutral-400 bg-black/40 px-1.5 py-0.5 rounded border border-white/5">
                      {tech.version}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
