import React, { useState } from 'react';
import { SHOWCASE_CATEGORIES, PORTFOLIO_DATA } from '../data/agencyData';
import { PortfolioItem, ShowcaseCategoryTab } from '../types';
import { Play, ArrowUpRight, Sparkles, Clock, Target, CheckCircle2 } from 'lucide-react';

interface ShowcaseSectionProps {
  onOpenProjectModal: (item: PortfolioItem) => void;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ onOpenProjectModal }) => {
  const [activeCategory, setActiveCategory] = useState<'3d-motion' | 'construction' | 'weddings-films'>('3d-motion');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentCategoryData = SHOWCASE_CATEGORIES.find((c) => c.id === activeCategory)!;
  const currentCategoryProjects = PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (catId: typeof activeCategory) => {
    if (catId === activeCategory) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(catId);
      setIsTransitioning(false);
    }, 220);
  };

  return (
    <section id="showcase" className="relative py-28 px-6 sm:px-10 lg:px-16 bg-[#0D0D0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Minimal studio style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#90D5FF] block mb-2">
              Studio Showcase // Archive
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              Featured Work
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light">
            Select a discipline to explore high-impact commercial releases, photoreal 3D sequences, and architectural films.
          </p>
        </div>

        {/* Category Selector Bar (Red Chillies style: prominent horizontal tabs with active cyan marker) */}
        <div className="border-b border-white/10 mb-12">
          <div className="flex items-center gap-6 sm:gap-12 overflow-x-auto no-scrollbar pb-1">
            {SHOWCASE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`showcase-tab-${cat.id}`}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`group relative pb-4 text-left whitespace-nowrap cursor-pointer transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[10px] font-mono tracking-wider ${
                        isActive ? 'text-[#90D5FF]' : 'text-neutral-600'
                      }`}
                    >
                      0{SHOWCASE_CATEGORIES.indexOf(cat) + 1}
                    </span>
                    <span className="font-display font-bold text-base sm:text-xl uppercase tracking-wider">
                      {cat.label}
                    </span>
                  </div>

                  <span className="hidden sm:block text-[11px] font-mono text-neutral-500 font-normal">
                    {cat.subtitle}
                  </span>

                  {/* Active Indicator Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#90D5FF] transition-all duration-300 ${
                      isActive ? 'w-full shadow-[0_0_12px_#90D5FF]' : 'w-0 group-hover:w-1/3 group-hover:bg-white/40'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Banner & Cinematic Grid Container with Cross-Fade Transition */}
        <div
          className={`transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
          }`}
        >
          {/* Category Editorial Intro Banner */}
          <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/10 p-8 sm:p-10 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#90D5FF] block mb-1">
                Discipline Overview
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                {currentCategoryData.headline}
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                {currentCategoryData.description}
              </p>
            </div>

            <div className="md:text-right shrink-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                Hardware & Pipeline
              </span>
              <span className="text-xs sm:text-sm font-mono text-neutral-200 block">
                {currentCategoryData.stats}
              </span>
            </div>
          </div>

          {/* Full-Bleed Showcase Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {currentCategoryProjects.map((project) => {
              const isHovered = hoveredProjectId === project.id;

              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  onClick={() => onOpenProjectModal(project)}
                  className="group relative rounded-2xl glass-panel border border-white/10 hover:border-[#90D5FF]/50 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_0_30px_rgba(144,213,255,0.15)] flex flex-col"
                >
                  {/* Large Cinematic Video/Image Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-950">
                    <img
                      src={project.posterUrl}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                        isHovered ? 'opacity-0' : 'opacity-100'
                      }`}
                    />

                    {/* Hover-to-preview video */}
                    {isHovered && (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover scale-105"
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                      </video>
                    )}

                    {/* Film Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Resolution Tag & Duration */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono pointer-events-none">
                      <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[#90D5FF] border border-[#90D5FF]/30 text-[10px] uppercase">
                        {project.resolution}
                      </span>
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white/80 border border-white/10 text-[10px]">
                        <Clock className="w-3 h-3 text-[#90D5FF]" />
                        {project.duration}
                      </span>
                    </div>

                    {/* Center Circular Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-14 h-14 rounded-full bg-black/50 border border-white/30 text-white flex items-center justify-center backdrop-blur-[2px] transition-all duration-200 ease-out group-hover:scale-110 group-hover:bg-black/70 group-hover:border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
                        <Play className="w-[22px] h-[22px] fill-white text-white ml-[3px] transition-transform duration-200" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details Bottom Section */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#90D5FF] transition-colors">
                          {project.title}
                        </h4>
                        <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-[#90D5FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                      </div>

                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                        Client: {project.client} • {project.year}
                      </span>

                      <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Goal -> Deliverables -> Impact Highlight */}
                      <div className="rounded-xl bg-black/40 border border-white/5 p-3.5 space-y-2 text-xs font-mono">
                        <div className="flex items-start gap-2">
                          <span className="text-[#90D5FF] shrink-0">Impact:</span>
                          <span className="text-white font-medium">{project.caseStudy.impact}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded"
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
      </div>
    </section>
  );
};
