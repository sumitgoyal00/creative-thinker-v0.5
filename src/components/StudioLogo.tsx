import React from 'react';

interface StudioLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const StudioLogo: React.FC<StudioLogoProps> = ({
  className = '',
  size = 38,
  showText = false,
}) => {
  return (
    <div
      className={`inline-flex items-center gap-3 relative select-none group cursor-pointer ${className}`}
      title="Creative Thinker Studio"
    >
      {/* 3D Embossed Gold CT Camera Emblem SVG matching user logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105 shrink-0 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
      >
        <defs>
          {/* Main Rich 3D Gold Gradient */}
          <linearGradient id="goldMetallic" x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#FFF4D0" />
            <stop offset="18%" stopColor="#F5D061" />
            <stop offset="42%" stopColor="#D4A02A" />
            <stop offset="68%" stopColor="#9C6B13" />
            <stop offset="85%" stopColor="#F2CE6E" />
            <stop offset="100%" stopColor="#6E4508" />
          </linearGradient>

          {/* Top Bevel Highlight Gradient */}
          <linearGradient id="goldBevelLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#FFEAA7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#A8741A" stopOpacity="0.2" />
          </linearGradient>

          {/* Camera Lens Metallic Radial Gradient */}
          <radialGradient id="goldLensGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF6DA" />
            <stop offset="30%" stopColor="#E2B240" />
            <stop offset="65%" stopColor="#7E520D" />
            <stop offset="90%" stopColor="#301E03" />
            <stop offset="100%" stopColor="#120B01" />
          </radialGradient>

          {/* Ambient Warm Golden Glow */}
          <filter id="goldGleamGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#D4A02A" floodOpacity="0.35" />
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.7" />
          </filter>
        </defs>

        <g filter="url(#goldGleamGlow)">
          {/* ================= LETTER "C" (Classical Serif Crescent) ================= */}
          {/* Base 3D Drop/Extrusion Shade */}
          <path
            d="M62 19 C55 17 41 21 32 31 C21 44 21 68 32 81 C42 93 54 96 61 95 C62 93 62 89 57 87 C49 84 39 77 36 67 C32 55 33 42 41 33 C47 26 55 24 60 25 C62 25 63 21 62 19 Z"
            fill="#523204"
            transform="translate(1, 1.5)"
          />
          {/* Main Gold Letter C Body */}
          <path
            d="M62 19 C55 17 41 21 32 31 C21 44 21 68 32 81 C42 93 54 96 61 95 C62 93 62 89 57 87 C49 84 39 77 36 67 C32 55 33 42 41 33 C47 26 55 24 60 25 C62 25 63 21 62 19 Z"
            fill="url(#goldMetallic)"
          />
          {/* Top serif flourish on C */}
          <path
            d="M60 17 L66 18 C64 22 61 25 57 26 L58 22 C59 20 60 18 60 17 Z"
            fill="url(#goldMetallic)"
          />
          {/* Highlight ridge along outer spine of C */}
          <path
            d="M60 19 C53 18 41 22 33 32 C23 45 23 67 33 80"
            stroke="url(#goldBevelLight)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* ================= CAMERA ICON (Centered inside the 'C') ================= */}
          {/* Camera Body Drop Shadow */}
          <rect
            x="44"
            y="48"
            width="20"
            height="15"
            rx="3"
            fill="#3B2202"
            transform="translate(0.8, 1.2)"
          />
          {/* Camera Body Frame */}
          <rect
            x="44"
            y="48"
            width="20"
            height="15"
            rx="3"
            fill="none"
            stroke="url(#goldMetallic)"
            strokeWidth="2.4"
          />
          {/* Viewfinder Prism Top Ridge */}
          <path
            d="M50 48 L52 44 L56 44 L58 48 Z"
            fill="url(#goldMetallic)"
          />
          {/* Lens Outer Bezel Ring */}
          <circle
            cx="54"
            cy="55.5"
            r="5.5"
            fill="url(#goldLensGrad)"
            stroke="url(#goldMetallic)"
            strokeWidth="1.2"
          />
          {/* Lens Inner Aperture Circle */}
          <circle
            cx="54"
            cy="55.5"
            r="3.2"
            fill="#180F02"
            stroke="url(#goldMetallic)"
            strokeWidth="0.8"
          />
          {/* Lens Specular Reflection Point */}
          <circle
            cx="52.8"
            cy="54.2"
            r="0.8"
            fill="#FFFFFF"
            opacity="0.85"
          />

          {/* ================= LETTER "T" (Serif Top Bar and Stem) ================= */}
          {/* T Base Shadow Extrusion */}
          <g transform="translate(1, 1.5)">
            {/* Top Bar */}
            <path
              d="M57 24 L86 24 C86 27 84 29 83 31 L60 31 C59 29 57 27 57 24 Z"
              fill="#4A2D04"
            />
            {/* Vertical Stem */}
            <path
              d="M67 31 L75 31 L75 87 C78 88 81 90 83 93 L61 93 C63 90 65 88 67 87 Z"
              fill="#4A2D04"
            />
          </g>

          {/* Main Gold Letter T Top Bar with Flared Serifs */}
          <path
            d="M57 24 C57 24 58 27 60 29 L82 29 C84 27 85 24 85 24 L86 24 C86 29 83 32 80 32 L63 32 C60 32 57 29 57 24 Z"
            fill="url(#goldMetallic)"
          />
          {/* Main Gold Letter T Stem with Classical Flared Foot */}
          <path
            d="M68 31 L74 31 L74 86 C77 87 80 89 82 92 L60 92 C62 89 65 87 68 86 Z"
            fill="url(#goldMetallic)"
          />
          {/* Bevel highlight line on T stem */}
          <line
            x1="69"
            y1="32"
            x2="69"
            y2="85"
            stroke="url(#goldBevelLight)"
            strokeWidth="0.8"
          />

          {/* ================= DYNAMIC SLASH / LIGHTNING CUT ================= */}
          {/* Angled blade slicing through T from lower curve of C */}
          {/* Blade Shadow */}
          <path
            d="M54 75 L80 43 L79 46 L53 79 Z"
            fill="#3B2202"
            transform="translate(1, 1)"
          />
          {/* Razor-sharp Gold Slash Blade */}
          <path
            d="M54 74 L81 42 L80 46 L53 79 Z"
            fill="url(#goldMetallic)"
          />
          {/* Slash Top Knife Edge Highlight */}
          <line
            x1="54"
            y1="74"
            x2="81"
            y2="42"
            stroke="#FFF4CC"
            strokeWidth="1.2"
          />

          {/* ================= SPECULAR STARBURST (Top of C) ================= */}
          {/* Subtle star glint / highlight flash */}
          <g transform="translate(60, 18)">
            <ellipse cx="0" cy="0" rx="3.5" ry="0.6" fill="#FFFFFF" opacity="0.9" />
            <ellipse cx="0" cy="0" rx="0.6" ry="3.5" fill="#FFFFFF" opacity="0.9" />
            <circle cx="0" cy="0" r="1" fill="#FFFFFF" />
          </g>
        </g>
      </svg>

      {/* Brand Wordmark (when showText is true) */}
      {showText && (
        <div className="flex flex-col justify-center select-none">
          <span
            className="font-serif font-extrabold text-[13px] sm:text-[14px] tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-[#FFF4D0] via-[#F5D061] to-[#C8942A] uppercase leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}
          >
            CREATIVE
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-3 h-[1px] bg-gradient-to-r from-transparent to-[#F5D061]" />
            <span
              className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] font-bold text-[#E5B84F] uppercase leading-none"
            >
              THINKER
            </span>
            <span className="w-3 h-[1px] bg-gradient-to-l from-transparent to-[#F5D061]" />
          </div>
        </div>
      )}
    </div>
  );
};
