import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const query = userMsg.trim() || 'Hello! I am interested in a video production project with Creative Thinker.';
    const encoded = encodeURIComponent(query);
    window.open(`https://wa.me/18005550199?text=${encoded}`, '_blank');
    setUserMsg('');
    setIsOpen(false);
  };

  return (
    <aside aria-label="WhatsApp live chat support" className="fixed bottom-6 right-6 z-40">
      {/* Quick Chat Popup Modal */}
      {isOpen && (
        <div
          id="whatsapp-chat-box"
          className="mb-4 w-80 sm:w-96 rounded-2xl glass-panel border border-[#90D5FF]/30 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-black">
                <MessageCircle className="w-4 h-4 fill-black" />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-white border border-black" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
                  Creative Thinker
                </h4>
                <p className="text-[10px] font-mono text-[#90D5FF]">
                  Executive Producer • Online
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body message preview */}
          <div className="rounded-xl bg-black/40 border border-white/5 p-3.5 mb-4 text-xs text-neutral-300 leading-relaxed">
            <p className="mb-1 text-white font-medium">Ready to engineer your next campaign?</p>
            <p className="text-neutral-400 text-[11px]">
              Drop your question or project date below for immediate direct WhatsApp coordination with our studio production team.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={sendWhatsApp} className="flex gap-2">
            <input
              type="text"
              placeholder="Hi, what is your lead time for 3D motion?"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              className="flex-grow rounded-xl bg-neutral-900 border border-white/10 px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#90D5FF] transition-colors"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black transition-all shadow-[0_0_12px_rgba(37,211,102,0.4)] cursor-pointer"
              title="Open in WhatsApp"
            >
              <Send className="w-4 h-4 fill-black" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button with Continuous Pulsing Ring Animation */}
      <div className="relative group">
        {/* Continuous slow pulsing cyan glow ring (breathing effect 2-3s loop, opacity 0.4 -> 0.8) */}
        <span
          aria-hidden="true"
          className="absolute -inset-2 rounded-full border border-[#90D5FF] bg-[#90D5FF]/15 animate-pulse-ring animate-pulse-ring-fast pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="absolute -inset-0.5 rounded-full bg-[#90D5FF]/25 blur-[4px] pointer-events-none transition-opacity duration-300 group-hover:opacity-100"
        />

        <button
          id="floating-whatsapp-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-neutral-950/90 backdrop-blur-md border border-[#90D5FF] text-[#90D5FF] hover:text-black hover:bg-[#90D5FF] flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(144,213,255,0.4)] cursor-pointer group-hover:scale-110"
          aria-label="Direct WhatsApp Chat"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6 fill-current transition-transform duration-300 group-hover:scale-105" />
          )}
        </button>

        {/* Hover Tooltip sliding out to the left on desktop: "Chat with us" */}
        {!isOpen && (
          <div className="hidden sm:block absolute right-[68px] top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ease-out opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0">
            <div className="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#90D5FF]/40 text-xs font-sans font-medium text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#90D5FF] shadow-[0_0_6px_#90D5FF]" />
              <span>Chat with us</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
