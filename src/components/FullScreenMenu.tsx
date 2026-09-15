import React, { useEffect } from 'react';
import { X, ArrowUpRight, Instagram, Youtube, Linkedin, Video, Mail, Phone } from 'lucide-react';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenShowreel: () => void;
}

export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenShowreel,
}) => {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
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

  const menuItems = [
    { num: '01', label: 'Home', target: 'home' },
    { num: '02', label: 'About Us', target: 'about' },
    { num: '03', label: 'Showcase', target: 'showcase' },
    { num: '04', label: 'Showreel 2026', action: 'showreel' },
    { num: '05', label: 'Services', target: 'services' },
    { num: '06', label: 'Latest Works', target: 'latest-projects' },
    { num: '07', label: 'Awards', target: 'awards' },
    { num: '08', label: 'News & Journal', target: 'journal' },
    { num: '09', label: 'Contact', target: 'contact' },
  ];

  const handleItemClick = (item: typeof menuItems[0]) => {
    onClose();
    if (item.action === 'showreel') {
      onOpenShowreel();
    } else if (item.target) {
      setTimeout(() => {
        onNavigate(item.target);
      }, 150);
    }
  };

  return (
    <div
      id="fullscreen-menu-overlay"
      className="fixed inset-0 z-50 bg-[#0D0D0D] flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-y-auto animate-in fade-in duration-300"
    >
      {/* Top Header inside overlay */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#90D5FF] animate-pulse" />
          <span className="font-display font-black text-sm tracking-widest uppercase text-white">
            Creative Thinker
          </span>
          <span className="hidden sm:inline text-neutral-500 font-mono text-xs">
            / creativethinker.site
          </span>
        </div>

        <button
          onClick={onClose}
          id="menu-close-button"
          className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer py-2 px-3 rounded-lg hover:bg-white/5"
          aria-label="Close navigation menu"
        >
          <span className="hidden sm:inline group-hover:text-[#90D5FF] transition-colors">Close</span>
          <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#90D5FF] flex items-center justify-center transition-colors">
            <X className="w-4 h-4 text-white group-hover:text-[#90D5FF]" />
          </div>
        </button>
      </div>

      {/* Main Stacked Links List (Red Chillies VFX Style) */}
      <div className="my-auto py-10 max-w-5xl mx-auto w-full">
        <nav className="flex flex-col space-y-2 sm:space-y-3">
          {menuItems.map((item, idx) => (
            <div
              key={item.label}
              onClick={() => handleItemClick(item)}
              style={{ animationDelay: `${idx * 40}ms` }}
              className="group flex items-baseline justify-between py-2 border-b border-white/[0.04] hover:border-[#90D5FF]/30 transition-all cursor-pointer animate-in fade-in slide-in-from-bottom-3 duration-300 fill-mode-both"
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="font-mono text-xs sm:text-sm text-neutral-600 group-hover:text-[#90D5FF] transition-colors">
                  {item.num}
                </span>
                <span className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white group-hover:text-[#90D5FF] transition-all transform group-hover:translate-x-3 duration-300">
                  {item.label}
                </span>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#90D5FF]">
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Footer Details */}
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-400">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <a
            href="mailto:Creativethinker027@gmail.com"
            className="hover:text-[#90D5FF] transition-colors flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5 text-[#90D5FF]" />
            <span>Creativethinker027@gmail.com</span>
          </a>
          <span className="hidden sm:inline text-neutral-700">|</span>
          <span className="text-neutral-500">
            Global Production Hubs: LA • London • Dubai
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {[
            { icon: Instagram, href: 'https://instagram.com', name: 'Instagram' },
            { icon: Youtube, href: 'https://youtube.com', name: 'YouTube' },
            { icon: Video, href: 'https://vimeo.com', name: 'Vimeo' },
            { icon: Linkedin, href: 'https://linkedin.com', name: 'LinkedIn' },
          ].map((soc) => {
            const IconComponent = soc.icon;
            return (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.name}
                className="w-8 h-8 rounded-full border border-white/10 hover:border-[#90D5FF] hover:text-[#90D5FF] flex items-center justify-center text-neutral-400 transition-colors"
              >
                <IconComponent className="w-3.5 h-3.5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
