import React from 'react';
import { AWARDS_DATA } from '../data/agencyData';
import { Trophy, Award } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="relative py-28 px-6 sm:px-10 lg:px-16 bg-[#0B0B0B] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#90D5FF] block mb-2">
              Industry Honors
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              Awards & Recognition
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light">
            International festivals, broadcast competitions, and commercial honors awarded for technical innovation and cinematic direction.
          </p>
        </div>

        {/* List-Style Layout (Red Chillies Awards style with minimal cyan dividers) */}
        <div className="border-t border-white/10">
          {AWARDS_DATA.map((award, idx) => (
            <div
              key={award.id}
              className="group py-6 sm:py-8 border-b border-white/[0.08] hover:border-[#90D5FF]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Year & Organization */}
              <div className="flex items-baseline gap-6 sm:gap-10 md:w-1/3">
                <span className="font-mono text-xs sm:text-sm text-[#90D5FF] font-semibold shrink-0">
                  {award.year}
                </span>
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#90D5FF] transition-colors">
                    {award.organization}
                  </h4>
                  <span className="text-xs text-neutral-400 font-light block">
                    {award.category}
                  </span>
                </div>
              </div>

              {/* Project Name */}
              <div className="md:w-1/3 text-neutral-300 text-xs sm:text-sm font-mono">
                <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">Project:</span>
                <span className="text-white font-medium">{award.project}</span>
              </div>

              {/* Award Title */}
              <div className="md:w-1/3 md:text-right flex items-center md:justify-end gap-2 text-xs sm:text-sm font-display font-bold text-neutral-200 group-hover:text-[#90D5FF] transition-colors">
                <Award className="w-4 h-4 text-[#90D5FF] shrink-0" />
                <span>{award.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
