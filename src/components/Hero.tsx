import React, { useRef } from 'react';
import { Play } from 'lucide-react';

interface HeroProps {
  onOpenShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="hero-showreel-section"
      className="relative w-full aspect-[21/9] min-h-[300px] sm:min-h-[340px] max-h-[560px] mt-16 sm:mt-20 overflow-hidden bg-[#0D0D0D] select-none group cursor-pointer"
      onClick={onOpenShowreel}
    >
      {/* Full-width Cinematic Footage: Natural / outdoor setting with dramatic lighting */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
          className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.1] transition-transform duration-1000 ease-out group-hover:scale-105"
        >
          {/* Natural outdoor landscape with dramatic cinematic lighting & motion */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-skyscrapers-at-sunset-41457-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Optical overlays: subtle film grain & bottom gradient for crisp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 film-grain opacity-25 pointer-events-none" />
      </div>

      {/* Center Subtle Play Button: Thin circular outline with cyan stroke, transparent glass center & small centered play icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-[#90D5FF]/80 bg-black/25 backdrop-blur-[2px] group-hover:border-[#90D5FF] group-hover:bg-[#90D5FF]/15 group-hover:shadow-[0_0_22px_rgba(144,213,255,0.5)] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          <Play className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#90D5FF] fill-[#90D5FF] ml-0.5 transition-colors" />
        </div>
      </div>

      {/* Bottom-left Overlay Text Block */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-6 sm:left-10 lg:left-14 z-20 flex items-stretch gap-3 sm:gap-3.5 max-w-2xl pointer-events-none">
        {/* Small vertical cyan accent bar on the left, scaled down to match headline */}
        <span
          className="w-[2.5px] sm:w-[3px] bg-[#90D5FF] self-stretch shadow-[0_0_8px_#90D5FF] shrink-0 rounded-full my-0.5"
          aria-hidden="true"
        />

        <div className="flex flex-col justify-center">
          <h1
            id="hero-main-tagline"
            className="font-display font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[34px] text-white leading-tight tracking-tight drop-shadow-lg"
          >
            We create beautiful,
            <br />
            practical works
          </h1>

          {/* Row of category tags separated by thin vertical dividers: "3D & MOTION | CONSTRUCTION & DRONE | TRACKING & MARKING" */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-2.5 text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-neutral-300 mt-2 sm:mt-2.5">
            <span>3D & MOTION</span>
            <span className="text-white/30 text-[9px] sm:text-[10px]" aria-hidden="true">|</span>
            <span>CONSTRUCTION & DRONE</span>
            <span className="text-white/30 text-[9px] sm:text-[10px]" aria-hidden="true">|</span>
            <span>TRACKING & MARKING</span>
          </div>
        </div>
      </div>

      {/* Bottom-right Corner: small studio watermark/logo text overlay in semi-transparent white (reduced) */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 right-6 sm:right-10 lg:right-14 z-20 pointer-events-none">
        <span
          id="hero-watermark"
          className="text-white/40 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase select-none drop-shadow"
        >
          creativethinker.site
        </span>
      </div>
    </section>
  );
};
