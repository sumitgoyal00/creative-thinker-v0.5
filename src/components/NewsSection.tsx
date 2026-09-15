import React from 'react';
import { NEWS_DATA } from '../data/agencyData';
import { ArrowUpRight } from 'lucide-react';

export const NewsSection: React.FC = () => {
  return (
    <section id="journal" className="relative py-28 px-6 sm:px-10 lg:px-16 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#00F0FF] block mb-2">
              Studio Journal // Behind The Frames
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
              News & Field Logs
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light">
            Technical dissections, camera sensor evaluations, and director logs directly from our production sets.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_DATA.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between rounded-2xl glass-panel border border-white/10 hover:border-[#00F0FF]/40 overflow-hidden transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 text-[10px] font-mono text-[#00F0FF] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-[#00F0FF]/20 uppercase">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-3">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#00F0FF] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 text-xs font-mono text-neutral-400">
                <span>By {article.author}</span>
                <span className="text-[#00F0FF] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-sans font-semibold">
                  Read Log <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
