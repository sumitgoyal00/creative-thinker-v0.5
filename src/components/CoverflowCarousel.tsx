import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/agencyData';
import { PortfolioItem } from '../types';

interface CoverflowCarouselProps {
  onOpenProjectModal: (project: PortfolioItem) => void;
}

const CATEGORY_TABS = [
  { id: 'all', label: 'ALL' },
  { id: '3d-motion', label: '3D & MOTION' },
  { id: 'construction', label: 'CONSTRUCTION & DRONE' },
  { id: 'weddings-films', label: 'TRACKING & MARKING' },
];

const TRANSITION_DURATION = 500; // ms
const CLONE_BUFFER = 5; // number of cloned items on each side

export const CoverflowCarousel: React.FC<CoverflowCarouselProps> = ({ onOpenProjectModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const isLockedRef = useRef<boolean>(false);
  const touchStartX = useRef<number | null>(null);

  // Detect mobile viewport for 3D translation tuning
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PORTFOLIO_DATA;
    return PORTFOLIO_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Ensure base circular buffer has at least 6 items for smooth 3D coverflow
  const baseProjects = useMemo(() => {
    if (filteredProjects.length === 0) return [];
    let list = [...filteredProjects];
    while (list.length < 6) {
      list = [...list, ...filteredProjects];
    }
    return list;
  }, [filteredProjects]);

  const totalBase = baseProjects.length;

  // Build extended array with clones before and after
  // [Pre-clones: CLONE_BUFFER] + [Real items: totalBase] + [Post-clones: CLONE_BUFFER]
  const extendedProjects = useMemo(() => {
    if (totalBase === 0) return [];

    const preClones = baseProjects.slice(-CLONE_BUFFER).map((item, idx) => ({
      item,
      key: `pre-${idx}-${item.id}`,
    }));

    const reals = baseProjects.map((item, idx) => ({
      item,
      key: `real-${idx}-${item.id}`,
    }));

    const postClones = baseProjects.slice(0, CLONE_BUFFER).map((item, idx) => ({
      item,
      key: `post-${idx}-${item.id}`,
    }));

    return [...preClones, ...reals, ...postClones];
  }, [baseProjects, totalBase]);

  // Current display index in extended array; starts at CLONE_BUFFER (first real item)
  const [displayIndex, setDisplayIndex] = useState<number>(CLONE_BUFFER);

  // When category changes, reset position cleanly
  useEffect(() => {
    setIsTransitioning(false);
    setDisplayIndex(CLONE_BUFFER);
    isLockedRef.current = false;
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    });
    return () => cancelAnimationFrame(t);
  }, [selectedCategory, totalBase]);

  // Infinite wrap-around check after animation completes
  useEffect(() => {
    if (totalBase === 0) return;

    // Past right boundary (post-clone area)
    if (displayIndex >= CLONE_BUFFER + totalBase) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setDisplayIndex((prev) => prev - totalBase);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
            isLockedRef.current = false;
          });
        });
      }, TRANSITION_DURATION);

      return () => clearTimeout(timer);
    }

    // Past left boundary (pre-clone area)
    if (displayIndex < CLONE_BUFFER) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setDisplayIndex((prev) => prev + totalBase);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
            isLockedRef.current = false;
          });
        });
      }, TRANSITION_DURATION);

      return () => clearTimeout(timer);
    }

    // Standard move inside bounds
    const unlockTimer = setTimeout(() => {
      isLockedRef.current = false;
    }, TRANSITION_DURATION);

    return () => clearTimeout(unlockTimer);
  }, [displayIndex, totalBase]);

  const handleNext = useCallback(() => {
    if (isLockedRef.current) return;
    isLockedRef.current = true;
    setDisplayIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    if (isLockedRef.current) return;
    isLockedRef.current = true;
    setDisplayIndex((prev) => prev - 1);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Autoplay with seamless infinite loop support
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, handleNext]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Real 1-based index in the user's filtered category
  const rawOffset = displayIndex - CLONE_BUFFER;
  const realCurrentIndex =
    filteredProjects.length > 0
      ? ((rawOffset % filteredProjects.length) + filteredProjects.length) % filteredProjects.length
      : 0;

  const currentFormatted = String(realCurrentIndex + 1).padStart(2, '0');
  const totalFormatted = String(filteredProjects.length).padStart(2, '0');

  return (
    <section
      id="latest-projects-section"
      className="relative w-full bg-[#0D0D0D] py-12 sm:py-16 px-6 sm:px-10 lg:px-14 select-none overflow-hidden"
    >
      {/* SECTION HEADER: Minimal title on left, Category filter tags on right */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8 sm:mb-12">
        {/* Left: small title with thin vertical accent bar */}
        <div className="flex items-center gap-3">
          <span className="w-[3px] h-5 bg-[#90D5FF]" aria-hidden="true" />
          <h2 className="font-display font-extrabold text-sm sm:text-base tracking-[0.25em] uppercase text-white">
            LATEST PROJECTS
          </h2>
        </div>

        {/* Right: category filter tags separated by thin vertical dividers */}
        <div className="flex items-center flex-wrap gap-y-2 gap-x-1 sm:gap-x-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider">
          {CATEGORY_TABS.map((tab, idx) => {
            const isActive = selectedCategory === tab.id;
            return (
              <React.Fragment key={tab.id}>
                {idx > 0 && (
                  <span className="text-white/20 px-1 select-none" aria-hidden="true">
                    |
                  </span>
                )}
                <button
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-1.5 py-0.5 transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#90D5FF] font-bold'
                      : 'text-neutral-400 hover:text-white font-medium'
                  }`}
                >
                  {tab.label}
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* 3D COVERFLOW CAROUSEL CONTAINER */}
      <div
        className="relative w-full h-[470px] sm:h-[530px] md:h-[570px] flex items-center justify-center my-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left circular navigation arrow button: simple, thin white stroke, no glow */}
        <button
          onClick={handlePrev}
          aria-label="Previous project"
          className="absolute left-2 sm:left-6 lg:left-10 z-40 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/30 text-white hover:border-[#90D5FF] hover:text-[#90D5FF] bg-black/40 backdrop-blur-sm flex items-center justify-center transition-colors duration-200 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 -ml-0.5" />
        </button>

        {/* Right circular navigation arrow button: simple, thin white stroke, no glow */}
        <button
          onClick={handleNext}
          aria-label="Next project"
          className="absolute right-2 sm:right-6 lg:right-10 z-40 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/30 text-white hover:border-[#90D5FF] hover:text-[#90D5FF] bg-black/40 backdrop-blur-sm flex items-center justify-center transition-colors duration-200 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 -mr-0.5" />
        </button>

        {/* 3D Perspective Stage */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            perspective: '1200px',
            transformStyle: 'preserve-3d',
          }}
        >
          {extendedProjects.map((entry, idx) => {
            const project = entry.item;
            const diff = idx - displayIndex;
            const isCenter = diff === 0;
            const absDiff = Math.abs(diff);

            // Hide cards beyond 3 positions away for optimal performance & visual depth
            if (absDiff > 3) return null;

            // Geometry calculations for fanned 3D coverflow
            let transform = '';
            let zIndex = 30 - absDiff;
            let opacity = 1;

            const step1 = isMobile ? 130 : 185;
            const step2 = isMobile ? 225 : 325;
            const step3 = isMobile ? 300 : 445;

            if (isCenter) {
              transform = 'translateX(0px) translateZ(80px) rotateY(0deg) scale(1)';
              opacity = 1;
            } else if (diff > 0) {
              // Right side cards: rotated inward, scaling down, fading opacity
              const offsetPx = diff === 1 ? step1 : diff === 2 ? step2 : step3;
              const scaleVal = diff === 1 ? 0.86 : diff === 2 ? 0.74 : 0.62;
              transform = `translateX(${offsetPx}px) translateZ(-${diff * 80}px) rotateY(-32deg) scale(${scaleVal})`;
              opacity = diff === 1 ? 0.75 : diff === 2 ? 0.45 : 0.2;
            } else {
              // Left side cards: rotated inward, scaling down, fading opacity
              const offsetPx = absDiff === 1 ? -step1 : absDiff === 2 ? -step2 : -step3;
              const scaleVal = absDiff === 1 ? 0.86 : absDiff === 2 ? 0.74 : 0.62;
              transform = `translateX(${offsetPx}px) translateZ(-${absDiff * 80}px) rotateY(32deg) scale(${scaleVal})`;
              opacity = absDiff === 1 ? 0.75 : absDiff === 2 ? 0.45 : 0.2;
            }

            return (
              <div
                key={entry.key}
                onClick={() => {
                  setDisplayIndex(idx);
                  onOpenProjectModal(project);
                }}
                style={{
                  transform,
                  zIndex,
                  opacity,
                  transition: isTransitioning
                    ? `transform ${TRANSITION_DURATION}ms cubic-bezier(0.25, 1, 0.5, 1), opacity ${TRANSITION_DURATION}ms ease`
                    : 'none',
                }}
                className={`absolute w-[230px] sm:w-[270px] md:w-[300px] aspect-[2/3] cursor-pointer rounded-none overflow-visible group ${
                  isCenter ? 'z-30' : 'pointer-events-auto'
                }`}
              >
                {/* Main Card Container: Minimal matte finish, clean border, subtle drop shadow only */}
                <div
                  className={`relative w-full h-full bg-[#131313] border ${
                    isCenter
                      ? 'border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.85)]'
                      : 'border-white/10 hover:border-white/25 shadow-xl'
                  } overflow-hidden`}
                >
                  {/* Card Poster Image */}
                  <img
                    src={project.posterUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-center filter contrast-[1.06] transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent pointer-events-none" />

                  {/* Top Badge: Category & Resolution */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono pointer-events-none">
                    <span className="bg-black/85 px-2 py-0.5 text-[#90D5FF] border border-white/10 tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <span className="bg-black/75 px-1.5 py-0.5 text-white/70 border border-white/10">
                      {project.duration}
                    </span>
                  </div>

                  {/* Center Play Icon on center card hover: Clean minimal circular play button, no heavy neon glow */}
                  {isCenter && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-black/80 border border-white/40 text-white flex items-center justify-center backdrop-blur-sm group-hover:border-[#90D5FF] group-hover:text-[#90D5FF] group-hover:scale-105 transition-all duration-300 shadow-2xl">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Bottom: Project Title & Specs */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black via-black/90 to-transparent">
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-white uppercase tracking-wider truncate mb-1 group-hover:text-[#90D5FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest truncate">
                      {project.client} • {project.year}
                    </p>
                  </div>
                </div>

                {/* Subtle Reflection Effect Beneath Center Card */}
                {isCenter && (
                  <div
                    aria-hidden="true"
                    className="absolute top-full left-0 right-0 h-24 overflow-hidden pointer-events-none opacity-30"
                    style={{
                      transform: 'scaleY(-1) translateY(-2px)',
                      filter: 'blur(1.5px)',
                      maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 80%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 80%)',
                    }}
                  >
                    <img
                      src={project.posterUrl}
                      alt=""
                      className="w-full h-full object-cover object-center filter contrast-[1.06]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D0D0D]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Under-carousel counter indicator */}
      <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8 text-xs font-mono tracking-widest uppercase">
        <span className="text-[#90D5FF] font-bold">{currentFormatted}</span>
        <span className="text-neutral-600">/</span>
        <span className="text-neutral-400">{totalFormatted}</span>
      </div>
    </section>
  );
};
