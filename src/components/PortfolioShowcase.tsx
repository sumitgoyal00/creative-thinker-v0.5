import React, { useState, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/agencyData';
import { PortfolioItem, ServiceCategory } from '../types';
import { Play, ArrowUpRight, Target, PackageCheck, TrendingUp, Sparkles, Filter } from 'lucide-react';

interface PortfolioShowcaseProps {
  onOpenProjectModal: (item: PortfolioItem) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onOpenProjectModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<ServiceCategory>('all');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filterTabs: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: '3d-motion', label: '3D & Motion' },
    { id: 'construction', label: 'Construction & Drone' },
    { id: 'weddings-films', label: 'Tracking & Marking' },
  ];

  const filteredItems =
    selectedFilter === 'all'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.category === selectedFilter);

  return (
    <section id="portfolio" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#90D5FF]" />
              Cinematic Archives
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Selected <span className="text-[#90D5FF]">Works</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-light">
            Every frame engineered for psychological impact, technical fidelity, and client commercial return.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                id={`filter-pill-${tab.id}`}
                onClick={() => setSelectedFilter(tab.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#90D5FF] text-black shadow-[0_0_20px_rgba(144,213,255,0.4)]'
                    : 'bg-white/5 text-neutral-400 border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => {
            const isHovered = hoveredProjectId === item.id;
            // Feature the first item with a double-column span on large screens
            const isWide = item.featured && idx === 0;

            return (
              <div
                key={item.id}
                id={`portfolio-item-${item.id}`}
                onMouseEnter={() => setHoveredProjectId(item.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className={`group flex flex-col rounded-2xl glass-panel glass-panel-hover overflow-hidden transition-all duration-300 ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Thumbnail & Video Preview Container */}
                <div
                  onClick={() => onOpenProjectModal(item)}
                  className="relative w-full aspect-video sm:aspect-[16/10] overflow-hidden cursor-pointer bg-neutral-950"
                >
                  {/* Poster Image */}
                  <img
                    src={item.posterUrl}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                      isHovered ? 'opacity-0' : 'opacity-100'
                    }`}
                  />

                  {/* Hover-to-video-preview */}
                  {isHovered && (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover scale-105"
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                    </video>
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Badges: Category & Resolution */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-md text-[10px] font-mono font-medium uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#90D5FF] border border-[#90D5FF]/30">
                      {item.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-white/80 border border-white/10">
                      {item.resolution}
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#90D5FF] text-black flex items-center justify-center shadow-[0_0_25px_rgba(144,213,255,0.6)] transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Duration & Timecode */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 pointer-events-none">
                    <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#90D5FF] animate-pulse" />
                      {item.duration}
                    </span>
                    <span className="text-[11px] text-white/60">{item.year}</span>
                  </div>
                </div>

                {/* Card Content & Case Study Info */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3
                        onClick={() => onOpenProjectModal(item)}
                        className="font-display font-bold text-xl text-white group-hover:text-[#90D5FF] transition-colors cursor-pointer"
                      >
                        {item.title}
                      </h3>
                      <button
                        onClick={() => onOpenProjectModal(item)}
                        aria-label="View Project"
                        className="text-neutral-500 hover:text-[#90D5FF] transition-colors"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-xs font-mono text-[#90D5FF]/80 uppercase tracking-wider mb-3">
                      Client: {item.client}
                    </p>

                    <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Featured Case Study Format: Goal -> Deliverables -> Impact */}
                    <div className="rounded-xl bg-black/40 border border-white/5 p-4 mb-4 space-y-3">
                      {/* Goal */}
                      <div className="flex items-start gap-2.5">
                        <Target className="w-4 h-4 text-[#90D5FF] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block font-medium">
                            The Objective
                          </span>
                          <span className="text-xs text-neutral-300 leading-snug">
                            {item.caseStudy.goal}
                          </span>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="flex items-start gap-2.5">
                        <PackageCheck className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block font-medium">
                            Deliverables
                          </span>
                          <span className="text-xs text-neutral-300 leading-snug">
                            {item.caseStudy.deliverables.join(' • ')}
                          </span>
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="flex items-start gap-2.5 pt-1 border-t border-white/5">
                        <TrendingUp className="w-4 h-4 text-[#90D5FF] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#90D5FF] block font-semibold">
                            Measurable Impact
                          </span>
                          <span className="text-xs text-white font-medium leading-snug">
                            {item.caseStudy.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
