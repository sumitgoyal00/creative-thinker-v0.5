import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { PortfolioItem } from '../types';

interface ProjectVideoModalProps {
  project: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectVideoModal: React.FC<ProjectVideoModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen && project) {
      document.body.style.overflow = 'hidden';
      setIsRendered(true);
      // Trigger smooth scale & fade-in animation
      const raf = requestAnimationFrame(() => {
        setIsAnimating(true);
      });
      return () => cancelAnimationFrame(raf);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
        document.body.style.overflow = 'unset';
      }, 300);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lazy-load guarantee: Do not inject iframe or container until modal is active
  if (!isRendered || !project) return null;

  // Read unique video ID directly from the clicked project card (no hardcoded fallback)
  const videoId = project.videoId || project.youtubeId;
  if (!videoId) return null;

  // Privacy-enhanced domain with YouTube branding & navigation elements stripped
  const embedUrl = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
    videoId
  )}?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&fs=1&autoplay=1&controls=1&disablekb=0&playsinline=1`;

  return (
    <div
      id="project-video-modal-backdrop"
      className={`fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10 transition-opacity duration-300 ease-out select-none ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-video-modal-container"
        className={`relative w-full max-w-5xl bg-[#0D0D0D] border border-white/15 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.95)] flex flex-col transition-all duration-300 ease-out transform ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Top Header Bar: Clean native dark cinematic styling */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-black/80 border-b border-white/10 z-20">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-5 bg-[#90D5FF]" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-sm sm:text-base uppercase tracking-wider truncate max-w-xs sm:max-w-md">
                {project.title}
              </span>
              <span className="text-[11px] font-mono text-[#90D5FF]/90 uppercase tracking-wider">
                {project.categoryLabel} • {project.duration}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Clean X Close Button */}
            <button
              id="btn-close-video-modal"
              onClick={onClose}
              className="p-1.5 sm:p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Canvas Container: 16:9 native aspect ratio */}
        <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
          <iframe
            src={embedUrl}
            title={project.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
