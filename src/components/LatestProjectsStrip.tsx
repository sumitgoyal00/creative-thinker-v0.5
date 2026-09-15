import React, { useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/agencyData';
import { PortfolioItem } from '../types';
import { ChevronLeft, ChevronRight, Play, ArrowUpRight } from 'lucide-react';

interface LatestProjectsStripProps {
  onOpenProjectModal: (item: PortfolioItem) => void;
}

export const LatestProjectsStrip: React.FC<LatestProjectsStripProps> = ({ onOpenProjectModal }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="latest-projects" className="relative py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-8 flex items-end justify-between">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#90D5FF] block mb-2">
            Reel Stream // Continuous
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
            Latest Projects
          </h2>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-[#90D5FF] text-white hover:text-[#90D5FF] flex items-center justify-center transition-colors cursor-pointer bg-white/[0.02]"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-[#90D5FF] text-white hover:text-[#90D5FF] flex items-center justify-center transition-colors cursor-pointer bg-white/[0.02]"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Strip Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-6 sm:px-10 lg:px-16 pb-6 cursor-grab active:cursor-grabbing scroll-smooth"
      >
        {PORTFOLIO_DATA.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => onOpenProjectModal(project)}
            className="group relative flex-shrink-0 w-80 sm:w-96 rounded-2xl glass-panel border border-white/10 hover:border-[#90D5FF]/50 overflow-hidden cursor-pointer transition-all duration-300"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
              <img
                src={project.posterUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-mono text-[#90D5FF] border border-[#90D5FF]/30 uppercase">
                {project.categoryLabel}
              </div>

              <div className="absolute top-3 right-3 text-[10px] font-mono text-white/80 bg-black/60 px-2 py-0.5 rounded">
                {project.duration}
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-[#90D5FF] text-black flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            {/* Meta */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="font-display font-bold text-lg text-white group-hover:text-[#90D5FF] transition-colors truncate">
                  {project.title}
                </h4>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#90D5FF] shrink-0" />
              </div>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                Client: {project.client}
              </p>
              <p className="text-neutral-400 text-xs line-clamp-2 font-light">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
