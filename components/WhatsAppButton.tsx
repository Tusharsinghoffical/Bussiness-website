import React, { useState } from 'react';
import { MessageCircle, X, Linkedin, Github, Instagram, Globe } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [showSocialMedia, setShowSocialMedia] = useState(false);
  const phoneNumber = '918851619647';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi Tushar, I'd like to discuss a project with you!`;

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
      <div className="fixed bottom-6 right-6 sm:right-8 z-[120]">
        {/* Main WhatsApp Button */}
        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center gap-0 hover:gap-3 bg-emerald-500 text-white rounded-full p-4 sm:p-4 shadow-[0_20px_50px_rgba(16,185,129,0.3)] transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          {/* Animated Background Ring */}
          <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20 scale-110 pointer-events-none"></div>
          
          {/* Expandable Label (Desktop Only) */}
          <div className="overflow-hidden max-w-0 group-hover:max-w-[200px] transition-all duration-500 ease-in-out whitespace-nowrap">
            <span className="text-[11px] font-black uppercase tracking-widest pl-2">
              Chat with Tushar
            </span>
          </div>

          {/* Icon */}
          <div className="relative flex items-center justify-center">
            <MessageCircle size={24} fill="currentColor" className="group-hover:rotate-[12deg] transition-transform duration-300" />
          </div>

          {/* Online Status Dot */}
          <div className="absolute top-3 right-3 w-3 h-3 bg-white rounded-full border-2 border-emerald-500">
            <div className="w-full h-full bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
        </a>
        
        {/* Social Media Toggle Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowSocialMedia(!showSocialMedia);
          }}
          className="absolute -top-16 right-0 bg-indigo-500 text-white rounded-full p-3 shadow-[0_10px_30px_rgba(99,102,241,0.3)] transition-all duration-300 hover:bg-indigo-600 active:scale-95"
          aria-label="Toggle Social Media"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            {showSocialMedia ? <X size={16} /> : <Globe size={16} />}
          </div>
        </button>

        {/* Social Media Links */}
        {showSocialMedia && (
          <div className="absolute -top-40 right-0 flex flex-col items-center gap-3 bg-slate-800/90 backdrop-blur-sm p-3 rounded-2xl border border-slate-700 shadow-xl z-10 animate-fadeIn">
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/tusharsingh2011" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 transition-colors shadow-md active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            {/* GitHub */}
            <a 
              href="https://github.com/Tusharsinghoffical" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-700 text-white rounded-full p-3 hover:bg-gray-800 transition-colors shadow-md active:scale-95"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@codewithmrsingh4u" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-500 text-white rounded-full p-3 hover:bg-red-600 transition-colors shadow-md active:scale-95"
              aria-label="YouTube"
            >
              <Globe size={20} />
            </a>
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/codewith_mrsingh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full p-3 hover:from-purple-600 hover:to-pink-600 transition-colors shadow-md active:scale-95"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        )}

        {/* Mobile-only small tooltip */}
        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          <div className="bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-xl whitespace-nowrap">
            Replies within 1 hour or 12 hours of business hours
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;