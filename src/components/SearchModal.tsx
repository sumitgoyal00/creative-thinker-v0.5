import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Play, Film } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/agencyData';
import { PortfolioItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: PortfolioItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = query.trim()
    ? PORTFOLIO_DATA.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.client.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : PORTFOLIO_DATA.slice(0, 4);

  return (
    <div
      id="search-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-md flex flex-col items-center justify-start pt-20 px-6 sm:px-12 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-3xl">
        {/* Header bar with search input */}
        <div className="flex items-center justify-between border-b-2 border-[#00F0FF] pb-4 mb-8">
          <div className="flex items-center gap-3 flex-grow">
            <Search className="w-6 h-6 text-[#00F0FF] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH FILM ARCHIVE, 3D, CLIENTS, DRONE..."
              className="w-full bg-transparent text-white text-base sm:text-xl font-display font-bold uppercase tracking-wider placeholder-neutral-600 focus:outline-none"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-colors cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Quick category shortcuts */}
        <div className="flex items-center gap-3 text-xs font-mono mb-8 overflow-x-auto no-scrollbar pb-2">
          <span className="text-neutral-500 uppercase">Tags:</span>
          {['3D & MOTION', 'CONSTRUCTION & DRONE', 'DRONE 8K', 'TRACKING & MARKING', 'HOUDINI'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded border border-white/10 text-neutral-400 hover:text-[#00F0FF] hover:border-[#00F0FF]/40 transition-colors uppercase whitespace-nowrap cursor-pointer"
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
          <div className="text-[11px] font-mono text-[#00F0FF] uppercase tracking-widest mb-2">
            {query.trim() ? `Search Results (${filteredProjects.length})` : 'Featured Archive Reels'}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="py-12 text-center text-neutral-500 font-mono text-sm">
              No matching cinematic records found for "{query}".
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  onSelectProject(project);
                  onClose();
                }}
                className="group flex items-center justify-between p-3.5 rounded-lg border border-white/5 hover:border-[#00F0FF]/50 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-20 rounded bg-neutral-900 overflow-hidden shrink-0 relative">
                    <img
                      src={project.posterUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-4 h-4 text-[#00F0FF] fill-current" />
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-wider mb-0.5">
                      {project.categoryLabel} • {project.resolution}
                    </div>
                    <h4 className="font-display font-bold text-base text-white group-hover:text-[#00F0FF] transition-colors uppercase">
                      {project.title}
                    </h4>
                    <p className="text-xs text-neutral-400 font-mono">
                      Client: {project.client} ({project.year})
                    </p>
                  </div>
                </div>

                <div className="text-neutral-500 group-hover:text-[#00F0FF] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
