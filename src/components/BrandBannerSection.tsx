import React from 'react';
import brandBannerImg from '../assets/images/background_section.png';

export const BrandBannerSection: React.FC = () => {
  return (
    <section
      id="brand-showcase-banner"
      aria-label="Creative Thinker Brand Showcase"
      className="relative w-full bg-[#0D0D0D] overflow-hidden border-t border-b border-white/10"
    >
      {/* Top subtle cyan light accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#90D5FF]/60 to-transparent z-20 pointer-events-none"
      />

      {/* Main Full-Width Brand Banner Image displaying logo, name, and tagline */}
      <div className="relative w-full overflow-hidden flex items-center justify-center">
        <img
          src={brandBannerImg}
          alt="Creative Thinker - Capture Ideas, Create Impact"
          className="w-full h-auto min-h-[160px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[340px] max-h-[420px] object-cover object-center block select-none transition-transform duration-700 hover:scale-[1.01]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Subtle edge vignette for smooth integration with adjacent dark sections */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]"
        />
      </div>

      {/* Bottom subtle cyan light accent line leading into footer */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#90D5FF]/40 to-transparent z-20 pointer-events-none"
      />
    </section>
  );
};
