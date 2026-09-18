import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import ctLogo from '../assets/images/logo.png';
import { StudioLogo } from './StudioLogo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT US', id: 'about' },
    { label: 'SHOWCASE', id: 'showcase' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      id="top-navbar"
      className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0D0D0D] border-b border-white/[0.08] select-none h-16 sm:h-20"
    >
      <div className="w-full h-full px-6 sm:px-10 lg:px-14 flex items-center justify-between">
        {/* Left: Studio Gold CT Camera Monogram & Brand Logo Photo */}
        <div
          id="nav-brand-logo"
          onClick={() => handleNavClick('home')}
          className="flex items-center cursor-pointer group py-1"
          aria-label="Creative Thinker Home"
        >
          <img
            src={ctLogo}
            alt="Creative Thinker"
            className="h-11 sm:h-12 md:h-14 w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[260px] object-contain object-left transition-transform duration-300 group-hover:scale-105 rounded-sm"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right: Desktop Navigation + Search */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          <ul className="flex items-center gap-5 xl:gap-7 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`font-display text-[10.5px] sm:text-[11px] tracking-widest uppercase transition-colors duration-200 py-1 cursor-pointer ${
                      isActive ? 'text-[#00F0FF] font-bold' : 'text-white hover:text-white/90 font-semibold'
                    }`}
                  >
                    {item.label}
                    {/* Cyan Underline on hover or active */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#00F0FF] transition-all duration-200 ${
                        isActive ? 'w-full shadow-[0_0_8px_#00F0FF]' : 'w-0 hover:w-full'
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Thin vertical divider line */}
          <span className="h-4 w-[1px] bg-white/20" aria-hidden="true" />

          {/* Far right: small search/magnifying-glass icon */}
          <button
            id="nav-search-button"
            onClick={onOpenSearch}
            className="text-white hover:text-[#00F0FF] transition-colors p-1.5 cursor-pointer"
            aria-label="Open Search"
            title="Search archive"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={onOpenSearch}
            className="text-white hover:text-[#00F0FF] transition-colors p-1.5 cursor-pointer"
            aria-label="Open Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-[#00F0FF] p-1.5 cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0D0D0D] border-b border-white/10 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left font-display text-sm tracking-widest uppercase text-white hover:text-[#00F0FF] py-2 border-b border-white/5 cursor-pointer flex items-center justify-between"
              >
                <span>{item.label}</span>
                {activeSection === item.id && <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
