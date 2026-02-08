
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  ExternalLink,
  ChevronRight,
  Globe,
  ShieldCheck
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 lg:pt-24 pb-8 lg:pb-12 overflow-hidden relative border-t border-slate-900">
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow Orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-indigo-500/10 rounded-full blur-[80px] lg:blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] bg-violet-500/10 rounded-full blur-[70px] lg:blur-[100px]"></div>
        
        {/* Technical Watermark - Responsive Size */}
        <div className="absolute bottom-4 left-4 text-[12vw] lg:text-[18vw] font-black text-white/[0.02] select-none tracking-tighter leading-none pointer-events-none">
          SINGH
        </div>
        
        {/* Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* --- TOP BRANDING SECTION --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-10 mb-10 lg:mb-20">
          <div className="space-y-2 lg:space-y-4">
            <Link to="/" onClick={scrollToTop} className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <h2 className="text-3xl lg:text-4xl font-outfit font-black text-white tracking-tighter leading-none">
                    C.MS
                  </h2>
                  <div className="absolute -right-1 -top-1 w-1 h-1 bg-indigo-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </Link>
            <p className="text-[8px] lg:text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] ml-0.5">Technical Architect Registry</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 lg:gap-8">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/5 rounded-lg flex items-center justify-center text-indigo-400 border border-white/5">
                <ShieldCheck size={16} />
              </div>
              <div>
                <p className="text-white text-[10px] lg:text-[11px] font-bold">Encrypted</p>
                <p className="text-[7px] lg:text-[9px] font-black text-slate-600 uppercase tracking-widest">Secure Protocols</p>
              </div>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/5 rounded-lg flex items-center justify-center text-emerald-400 border border-white/5">
                <Globe size={16} />
              </div>
              <div>
                <p className="text-white text-[10px] lg:text-[11px] font-bold">Global</p>
                <p className="text-[7px] lg:text-[9px] font-black text-slate-600 uppercase tracking-widest">Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-24">
          
          {/* Col 1: Philosophy */}
          <div className="lg:col-span-4 space-y-4 lg:space-y-8">
            <div className="space-y-2 lg:space-y-4">
              <h3 className="text-white font-black text-[8px] lg:text-[10px] uppercase tracking-[0.3em] opacity-40">Core Philosophy</h3>
              <p className="text-slate-400 text-[12px] lg:text-[14px] leading-relaxed max-w-sm font-medium italic">
                "Solving complex industrial challenges through the lens of automated data intelligence."
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/5 rounded-lg border border-indigo-500/10 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[7px] lg:text-[9px] font-black text-indigo-400 uppercase tracking-[0.2em]">Node 01 — Status: Optimal</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-4 lg:space-y-8">
            <h3 className="text-white font-black text-[8px] lg:text-[10px] uppercase tracking-[0.3em] opacity-40">Registry</h3>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 lg:gap-y-4">
              <FooterLink to="/" label="Home Base" />
              <FooterLink to="/services" label="Solutions" />
              <FooterLink to="/projects" label="Artifacts" />
              <FooterLink to="/about" label="Identity" />
              <FooterLink to="/contact" label="Interface" />
            </ul>
          </div>

          {/* Col 3: Social Nodes */}
          <div className="lg:col-span-3 space-y-4 lg:space-y-8">
            <h3 className="text-white font-black text-[8px] lg:text-[10px] uppercase tracking-[0.3em] opacity-40">Network Nodes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-3">
              <SocialNode 
                href="https://linkedin.com/in/tusharsingh2011" 
                icon={<Linkedin size={14} />} 
                label="LinkedIn"
                color="hover:text-blue-400"
              />
              <SocialNode 
                href="https://github.com/Tusharsinghoffical" 
                icon={<Github size={14} />} 
                label="GitHub"
                color="hover:text-white"
              />
              <SocialNode 
                href="mailto:tusharsinghkumar04@gmail.com" 
                icon={<Mail size={14} />} 
                label="Mail"
                color="hover:text-indigo-400"
              />
            </div>
          </div>

          {/* Col 4: Base / Contact */}
          <div className="lg:col-span-3 space-y-4 lg:space-y-8">
            <h3 className="text-white font-black text-[8px] lg:text-[10px] uppercase tracking-[0.3em] opacity-40">Interface</h3>
            <div className="space-y-4 lg:space-y-6">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="text-indigo-500"><MapPin size={16} /></div>
                  <div>
                    <p className="text-white text-[12px] font-bold">Delhi, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-emerald-500"><Phone size={16} /></div>
                  <div>
                    <p className="text-white text-[12px] font-bold">+91 88516 19647</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="group flex items-center justify-between w-full bg-white text-slate-950 px-4 py-3 lg:px-6 lg:py-4 rounded-xl lg:rounded-2xl font-black text-[8px] lg:text-[10px] uppercase tracking-[0.2em] hover:bg-indigo-600 hover:text-white transition-all duration-500 shadow-2xl active:scale-95"
              >
                Sync Project
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-6 lg:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-2 lg:gap-4 text-center md:text-left">
            <p className="text-[7px] lg:text-[9px] font-black uppercase tracking-[0.25em] text-slate-700">
              &copy; {currentYear} C.MS
            </p>
            <span className="hidden sm:block w-0.5 h-0.5 rounded-full bg-slate-800"></span>
            <div className="flex items-center gap-1.5 text-[7px] lg:text-[9px] font-black uppercase tracking-[0.25em] text-slate-700">
              Forged with <Heart size={8} className="text-rose-500/40 fill-rose-500/10 animate-pulse" /> in Delhi
            </div>
          </div>
          
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="flex gap-4 text-[7px] lg:text-[9px] font-black uppercase tracking-[0.2em] text-slate-700">
              <Link to="/contact" className="hover:text-indigo-400 transition-colors">Privacy</Link>
              <Link to="/contact" className="hover:text-indigo-400 transition-colors">Terms</Link>
            </div>
            <button 
              onClick={scrollToTop}
              className="text-[7px] lg:text-[9px] font-black uppercase tracking-[0.3em] text-indigo-500 hover:text-white transition-colors flex items-center gap-1 group"
            >
              Top <ArrowUpRight size={10} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link 
      to={to} 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="text-slate-500 text-[11px] lg:text-[13px] font-bold hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 lg:gap-3 group"
    >
      <ChevronRight size={10} className="text-indigo-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      {label}
    </Link>
  </li>
);

const SocialNode = ({ href, icon, label, color }: { href: string; icon: React.ReactNode; label: string; color: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`flex items-center justify-between px-3 py-2 lg:px-5 lg:py-3.5 rounded-lg lg:rounded-2xl bg-white/[0.02] border border-white/5 group transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10 ${color}`}
  >
    <div className="flex items-center gap-3 lg:gap-4">
      <div className="transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <span className="text-[9px] lg:text-[11px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">{label}</span>
    </div>
    <ExternalLink size={10} className="opacity-0 group-hover:opacity-40 transition-opacity" />
  </a>
);

export default Footer;
