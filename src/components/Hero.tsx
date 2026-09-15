import React, { useState, useEffect } from 'react';
import slide1 from '../assets/images/slide 1 background.png';
import slide2 from '../assets/images/slide 2 background.png';
import slide3 from '../assets/images/slide 3 background.png';
import slide4 from '../assets/images/slide 4 background.png';
import slide5 from '../assets/images/slide 5 background.png';

const slides = [slide1, slide2, slide3, slide4, slide5];

interface HeroProps {
  onOpenShowreel?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Preload all slide images to prevent blank frames or flickering
  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-advance slide every 4.5 seconds with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero-showreel-section"
      className="hero relative w-full aspect-[21/9] min-h-[300px] sm:min-h-[340px] max-h-[560px] mt-16 sm:mt-20 overflow-hidden bg-[#0D0D0D] select-none group"
    >
      {/* Background Auto-sliding Crossfade Image Slideshow (z-index: 0) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {slides.map((slideSrc, index) => (
          <img
            key={index}
            src={slideSrc}
            alt={`Hero background slide ${index + 1}`}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            loading="eager"
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        ))}
      </div>

      {/* Optical Overlays (z-index: 1) */}
      <div className="hero-overlay absolute inset-0 w-full h-full pointer-events-none z-[1] bg-gradient-to-b from-[#0D0D0D]/40 to-[#0D0D0D]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/70 via-transparent to-transparent pointer-events-none z-[1]" />
      <div className="absolute inset-0 film-grain opacity-25 pointer-events-none z-[1]" />

      {/* Hero Content (z-index: 2) */}
      <div className="hero-content relative z-[2] w-full h-full pointer-events-none">
        {/* Bottom-left Overlay Text Block */}
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-6 sm:left-10 lg:left-14 flex items-stretch gap-3 sm:gap-3.5 max-w-2xl pointer-events-none">
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
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 right-6 sm:right-10 lg:right-14 pointer-events-none">
          <span
            id="hero-watermark"
            className="text-white/40 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase select-none drop-shadow"
          >
            creativethinker.site
          </span>
        </div>
      </div>
    </section>
  );
};
