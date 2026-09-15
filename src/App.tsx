import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoverflowCarousel } from './components/CoverflowCarousel';
import { BrandBannerSection } from './components/BrandBannerSection';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { StudioInfoModal, StudioModalType } from './components/StudioInfoModal';
import { ProjectVideoModal } from './components/ProjectVideoModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PortfolioItem } from './types';
import { PORTFOLIO_DATA } from './data/agencyData';

export default function App() {
  const [activeNavSection, setActiveNavSection] = useState<string>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [studioModalType, setStudioModalType] = useState<StudioModalType>(null);
  const [selectedVideoProject, setSelectedVideoProject] = useState<PortfolioItem | null>(null);

  const handleOpenShowreel = () => {
    // Open flagship video in cinema modal
    setSelectedVideoProject(PORTFOLIO_DATA[0]);
  };

  const handleOpenProject = (item: PortfolioItem) => {
    setSelectedVideoProject(item);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveNavSection(sectionId);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'showcase') {
      const el = document.getElementById('latest-projects-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (sectionId === 'showreel') {
      handleOpenShowreel();
    } else if (sectionId === 'about') {
      setStudioModalType('about');
    } else if (sectionId === 'awards') {
      setStudioModalType('awards');
    } else if (sectionId === 'news') {
      setStudioModalType('news');
    } else if (sectionId === 'contact') {
      const footerEl = document.getElementById('site-footer');
      if (footerEl) {
        footerEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        setStudioModalType('contact');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col selection:bg-[#90D5FF] selection:text-black overflow-x-hidden font-sans">
      {/* 1. TOP NAVIGATION BAR */}
      <Navbar
        activeSection={activeNavSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* MAIN HOMEPAGE CONTENT */}
      <main className="flex-grow">
        {/* 2. HERO / SHOWREEL SECTION */}
        <Hero onOpenShowreel={handleOpenShowreel} />

        {/* 3. LATEST PROJECTS SECTION (3D Coverflow Carousel) */}
        <CoverflowCarousel onOpenProjectModal={handleOpenProject} />

        {/* BRAND BANNER SECTION: Creative Thinker Logo & Name photo between Projects Section and Footer */}
        <BrandBannerSection />
      </main>

      {/* 4. FOOTER SECTION */}
      <Footer />

      {/* Cinema Video Player Modal (Privacy-Enhanced Native Unlisted Video Player) */}
      <ProjectVideoModal
        project={selectedVideoProject}
        isOpen={!!selectedVideoProject}
        onClose={() => setSelectedVideoProject(null)}
      />

      {/* Floating Direct WhatsApp Support */}
      <FloatingWhatsApp />

      {/* Search Overlay Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProject={handleOpenProject}
      />

      {/* Informational Studio Modals (About, Showcase, Awards, News, Contact) */}
      <StudioInfoModal
        modalType={studioModalType}
        onClose={() => setStudioModalType(null)}
        onOpenShowreel={handleOpenShowreel}
      />
    </div>
  );
}
