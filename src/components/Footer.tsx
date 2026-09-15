import React, { useState, useEffect, useRef } from 'react';
import { Headset, Mail, MapPin, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll-in viewport observer for smooth staggered entrance
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="site-footer"
      className="relative w-full bg-[#0D0D0D] text-white select-none pt-16 pb-12 px-6 sm:px-10 lg:px-14 overflow-hidden"
    >
      {/* Subtle 1px top border gradient: fading cyan glow at center, fading to transparent at edges */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#90D5FF]/50 to-transparent pointer-events-none"
      />

      {/* Background layer: clean premium dark surface matching brand aesthetic */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0D0D0D]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#0E0E0E] to-[#0A0A0A]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-stretch gap-12 lg:gap-16">
        {/* LEFT SIDE: Three stacked contact rows with increased vertical breathing room */}
        <div className="flex flex-col space-y-8 sm:space-y-9 max-w-md w-full">
          {/* Row 1: Headset icon - REACH US + Phone */}
          <div
            className={`group flex items-start gap-4 cursor-pointer transition-all duration-700 ease-out delay-[80ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            {/* Icon circle: thin 1px cyan outline on subtle dark glass, on hover shifts to white border and layered soft white halo glow */}
            <div className="w-11 h-11 rounded-full border border-[#90D5FF]/40 bg-black/50 backdrop-blur-md flex items-center justify-center shrink-0 transition-all duration-300 ease-out group-hover:scale-[1.08] group-hover:border-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.65),0_0_24px_rgba(255,255,255,0.35)]">
              <Headset className="w-5 h-5 text-[#90D5FF] transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </div>

            <div className="flex flex-col">
              {/* Helvetica-style bold uppercase label */}
              <span className="font-sans font-bold text-xs sm:text-sm tracking-wider uppercase text-white leading-tight mb-1">
                REACH US
              </span>
              {/* Phone detail text with left-to-right underline animation on hover */}
              <a
                href="tel:+917042693329"
                className="relative inline-block font-sans text-sm sm:text-[15px] font-medium text-neutral-300 group-hover:text-[#90D5FF] transition-colors duration-200 cursor-pointer"
              >
                <span>+91 70426 93329</span>
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#90D5FF] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </div>
          </div>

          {/* Row 2: Envelope icon - MAIL US + Email */}
          <div
            className={`group flex items-start gap-4 cursor-pointer transition-all duration-700 ease-out delay-[160ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            {/* Icon circle */}
            <div className="w-11 h-11 rounded-full border border-[#90D5FF]/40 bg-black/50 backdrop-blur-md flex items-center justify-center shrink-0 transition-all duration-300 ease-out group-hover:scale-[1.08] group-hover:border-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.65),0_0_24px_rgba(255,255,255,0.35)]">
              <Mail className="w-5 h-5 text-[#90D5FF] transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </div>

            <div className="flex flex-col">
              {/* Helvetica-style bold uppercase label */}
              <span className="font-sans font-bold text-xs sm:text-sm tracking-wider uppercase text-white leading-tight mb-1">
                MAIL US
              </span>
              {/* Email detail text with left-to-right underline animation on hover */}
              <a
                href="mailto:Creativethinker027@gmail.com"
                className="relative inline-block font-sans text-sm sm:text-[15px] font-medium text-neutral-300 group-hover:text-[#90D5FF] transition-colors duration-200 cursor-pointer break-all"
              >
                <span>Creativethinker027@gmail.com</span>
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#90D5FF] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </div>
          </div>

          {/* Row 3: Location pin icon - VISIT US + 2-line studio address */}
          <div
            className={`group flex items-start gap-4 cursor-pointer transition-all duration-700 ease-out delay-[240ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            {/* Icon circle */}
            <div className="w-11 h-11 rounded-full border border-[#90D5FF]/40 bg-black/50 backdrop-blur-md flex items-center justify-center shrink-0 transition-all duration-300 ease-out group-hover:scale-[1.08] group-hover:border-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.65),0_0_24px_rgba(255,255,255,0.35)]">
              <MapPin className="w-5 h-5 text-[#90D5FF] transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </div>

            <div className="flex flex-col">
              {/* Helvetica-style bold uppercase label */}
              <span className="font-sans font-bold text-xs sm:text-sm tracking-wider uppercase text-white leading-tight mb-1">
                VISIT US
              </span>
              {/* Studio address detail text with left-to-right underline animation on hover */}
              <a
                href="https://maps.google.com/?q=World+Cup+Square+Indore+Madhya+Pradesh+India"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block font-sans text-sm sm:text-[15px] font-normal text-neutral-300 group-hover:text-[#90D5FF] transition-colors duration-200 leading-relaxed cursor-pointer"
              >
                <span>
                  World Cup Square<br />
                  Indore, Madhya Pradesh, India
                </span>
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#90D5FF] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: FOLLOW US, Certified Studio Badge, Copyright */}
        <div className="flex flex-col justify-between items-start md:items-end w-full md:w-auto space-y-8">
          {/* FOLLOW US with animated circular social icons */}
          <div
            className={`flex flex-col md:items-end transition-all duration-700 ease-out delay-[320ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <span className="font-sans font-bold text-xs sm:text-sm tracking-wider uppercase text-white mb-3.5">
              FOLLOW US
            </span>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-black/50 border border-[#90D5FF]/40 text-[#90D5FF] flex items-center justify-center backdrop-blur-md transition-all duration-250 ease-out hover:bg-white hover:border-white hover:text-black hover:scale-110 hover:-translate-y-[3px] hover:shadow-[0_0_12px_rgba(255,255,255,0.7),0_0_24px_rgba(255,255,255,0.4)] cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full bg-black/50 border border-[#90D5FF]/40 text-[#90D5FF] flex items-center justify-center backdrop-blur-md transition-all duration-250 ease-out hover:bg-white hover:border-white hover:text-black hover:scale-110 hover:-translate-y-[3px] hover:shadow-[0_0_12px_rgba(255,255,255,0.7),0_0_24px_rgba(255,255,255,0.4)] cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-black/50 border border-[#90D5FF]/40 text-[#90D5FF] flex items-center justify-center backdrop-blur-md transition-all duration-250 ease-out hover:bg-white hover:border-white hover:text-black hover:scale-110 hover:-translate-y-[3px] hover:shadow-[0_0_12px_rgba(255,255,255,0.7),0_0_24px_rgba(255,255,255,0.4)] cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-black/50 border border-[#90D5FF]/40 text-[#90D5FF] flex items-center justify-center backdrop-blur-md transition-all duration-250 ease-out hover:bg-white hover:border-white hover:text-black hover:scale-110 hover:-translate-y-[3px] hover:shadow-[0_0_12px_rgba(255,255,255,0.7),0_0_24px_rgba(255,255,255,0.4)] cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-black/50 border border-[#90D5FF]/40 text-[#90D5FF] flex items-center justify-center backdrop-blur-md transition-all duration-250 ease-out hover:bg-white hover:border-white hover:text-black hover:scale-110 hover:-translate-y-[3px] hover:shadow-[0_0_12px_rgba(255,255,255,0.7),0_0_24px_rgba(255,255,255,0.4)] cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Certified Production Studio badge pill: subtle glass-morphism pill with hover scale & white glow */}
          <div
            className={`flex items-center gap-2.5 px-4 py-2 bg-black/40 border border-[#90D5FF]/30 rounded-full backdrop-blur-md transition-all duration-300 ease-out hover:border-white/80 hover:shadow-[0_0_12px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)] hover:bg-black/60 hover:scale-[1.03] cursor-default delay-[400ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <Shield className="w-4 h-4 text-[#90D5FF] shrink-0" />
            <span className="font-sans text-[11px] sm:text-xs font-medium tracking-wider uppercase text-neutral-300">
              CERTIFIED PRODUCTION STUDIO
            </span>
          </div>

          {/* Bottom-right copyright line */}
          <div
            className={`text-left md:text-right transition-all duration-700 ease-out delay-[480ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <p className="font-sans text-[11px] sm:text-xs font-normal uppercase tracking-wider text-neutral-400">
              © 2026 CREATIVE THINKER. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
