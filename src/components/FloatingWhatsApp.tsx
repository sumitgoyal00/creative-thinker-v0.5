import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/917042693329?text=Hello%20Creative%20Thinker%20Studio!%20I%20am%20interested%20in%20a%20video%20production%20project.';

  const handleOpenWhatsApp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside aria-label="WhatsApp live chat support" className="fixed bottom-6 right-6 z-40">
      {/* Floating Action Button with Continuous Pulsing Ring Animation */}
      <div className="relative group">
        {/* Continuous slow pulsing WhatsApp green glow ring */}
        <span
          aria-hidden="true"
          className="absolute -inset-2 rounded-full border border-[#25D366] bg-[#25D366]/20 animate-pulse-ring animate-pulse-ring-fast pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="absolute -inset-0.5 rounded-full bg-[#25D366]/30 blur-[6px] pointer-events-none transition-opacity duration-300 group-hover:opacity-100"
        />

        <button
          id="floating-whatsapp-btn"
          type="button"
          onClick={handleOpenWhatsApp}
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black flex items-center justify-center transition-all duration-300 shadow-[0_0_25px_rgba(37,211,102,0.5)] cursor-pointer group-hover:scale-110"
          aria-label="Direct WhatsApp Chat with +91 7042693329"
        >
          <MessageCircle className="w-7 h-7 fill-black transition-transform duration-300 group-hover:scale-105" />
        </button>

        {/* Hover Tooltip sliding out to the left on desktop: "Chat on WhatsApp (+91 70426 93329)" */}
        <div className="hidden sm:block absolute right-[68px] top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ease-out opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0">
          <div className="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#25D366]/40 text-xs font-sans font-medium text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] shadow-[0_0_6px_#25D366]" />
            <span>Chat on WhatsApp (+91 70426 93329)</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
