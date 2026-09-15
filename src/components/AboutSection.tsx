import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-6 sm:px-10 lg:px-16 bg-[#0D0D0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Studio Visual */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden glass-panel border border-white/10 aspect-[4/3] sm:aspect-[16/11]">
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=85"
              alt="Creative Thinker Studio Production Stage"
              className="w-full h-full object-cover filter contrast-[1.15] brightness-[0.75] hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white/90">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#90D5FF] animate-pulse" />
                Stage 01 • Master Color Suite & Virtual Production
              </span>
              <span className="text-neutral-400">creativethinker.site</span>
            </div>
          </div>

          {/* Right Column: Short Brand Story Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#90D5FF] block mb-3">
              About Creative Thinker
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight mb-6 leading-tight">
              We Bridge The Chasm Between Imagination And Optical Physics.
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-8">
              <p>
                Founded on the principle that modern visual storytelling demands both mathematical precision and raw emotional instinct, Creative Thinker operates as a hybrid creative agency and high-end post-production facility.
              </p>
              <p>
                We do not outsource critical path assets. Our directors, 3D simulation artists, FAA-certified drone pilots, and ACES-certified colorists collaborate under a unified digital workflow—delivering international campaigns with uncompromising speed and optical fidelity.
              </p>
            </div>

            {/* Studio Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs font-mono">
              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-white block mb-0.5">
                  140+
                </span>
                <span className="text-neutral-500 uppercase text-[10px] tracking-wider">
                  Films Delivered
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-[#90D5FF] block mb-0.5">
                  8K RAW
                </span>
                <span className="text-neutral-500 uppercase text-[10px] tracking-wider">
                  Standard Pipeline
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-white block mb-0.5">
                  100%
                </span>
                <span className="text-neutral-500 uppercase text-[10px] tracking-wider">
                  In-House Finishing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
