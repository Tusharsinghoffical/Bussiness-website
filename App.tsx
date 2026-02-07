
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import { Cpu, Terminal, ShieldCheck, Activity } from 'lucide-react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);

  const loadingStatuses = [
    "Initializing Core Protocol...",
    "Syncing Neural Pathways...",
    "Decrypting Project Registry...",
    "Verifying Deployment Nodes...",
    "Optimizing Interface...",
    "System Ready."
  ];

  useEffect(() => {
    // Non-linear progress simulation for more "realistic" feel
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 1000);
          }, 600);
          return 100;
        }
        // Random "jumps" to simulate data loading chunks
        const jump = Math.random() > 0.8 ? Math.floor(Math.random() * 5) + 1 : 1;
        const next = prev + jump;
        
        // Update status message based on progress thresholds
        const newStatusIndex = Math.min(
          Math.floor((next / 100) * loadingStatuses.length),
          loadingStatuses.length - 1
        );
        setStatusIndex(newStatusIndex);
        
        return next > 100 ? 100 : next;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[300] bg-slate-950 flex flex-col items-center justify-center transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${
        isExiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
      
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent absolute animate-[scan_4s_linear_infinite]"></div>
      </div>

      {/* Dynamic Glow Orb */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] transition-all duration-1000 opacity-20"
        style={{ 
          width: `${300 + progress}px`, 
          height: `${300 + progress}px`,
          backgroundColor: progress > 80 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(79, 70, 229, 0.1)'
        }}
      ></div>

      {/* Corner Brackets */}
      <div className="absolute inset-10 pointer-events-none opacity-20 border-slate-800 border-2 rounded-[2rem]">
        <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-indigo-500"></div>
        <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-indigo-500"></div>
        <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-indigo-500"></div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-indigo-500"></div>
      </div>

      <div className="relative flex flex-col items-center max-w-sm w-full px-6">
        
        {/* Main Branding Block */}
        <div className="text-center relative z-10 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck size={14} className="text-indigo-500/50 animate-pulse" />
            <span className="text-[8px] font-black text-slate-600 uppercase tracking-[0.4em]">Secure Handshake</span>
          </div>
          
          <h2 className={`text-white font-outfit font-black text-5xl sm:text-6xl tracking-[0.5em] uppercase transition-all duration-700 ${progress > 10 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            CMS<span className="text-indigo-500 animate-pulse">.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-1">
             <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.5em] ml-1 h-4 transition-all duration-300">
              {loadingStatuses[statusIndex]}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Activity size={10} className="text-slate-700" />
              <div className="w-1 h-1 rounded-full bg-slate-800"></div>
              <Terminal size={10} className="text-slate-700" />
              <div className="w-1 h-1 rounded-full bg-slate-800"></div>
              <Cpu size={10} className="text-slate-700" />
            </div>
          </div>
        </div>

        {/* Technical Progress Container */}
        <div className="mt-20 w-full relative">
          <div className="flex justify-between items-end mb-4">
            <div className="space-y-1">
               <p className="text-[7px] font-black text-slate-600 uppercase tracking-widest">Protocol ID</p>
               <p className="text-[9px] font-bold text-slate-400 tabular-nums">NODE-02-SYNC</p>
            </div>
            <div className="text-right">
              <span className="text-xl font-outfit font-black text-white tabular-nums tracking-tight">
                {progress}<span className="text-indigo-500 text-sm ml-0.5">%</span>
              </span>
            </div>
          </div>
          
          <div className="h-[2px] w-full bg-slate-900 rounded-full overflow-hidden relative">
            {/* Primary Loading Bar */}
            <div 
              className="h-full bg-indigo-500 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
              style={{ width: `${progress}%` }}
            ></div>
            {/* Secondary Ghost Bar for depth */}
            <div 
              className="absolute inset-0 h-full bg-indigo-400/20 transition-all duration-700 ease-out"
              style={{ width: `${Math.min(progress + 15, 100)}%` }}
            ></div>
          </div>
          
          <div className="mt-4 flex justify-between">
            <span className="text-[7px] font-black text-slate-700 uppercase tracking-widest">Est: 2025 Registry</span>
            <span className="text-[7px] font-black text-slate-700 uppercase tracking-widest">Artifact v2.4</span>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="absolute bottom-12 text-center space-y-2 opacity-30">
        <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.8em]">Technical Architect Registry</p>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>
    </div>
  );
};

const PageWrapper: React.FC<{ children: React.ReactNode, title: string, description: string }> = ({ children, title, description }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} | Code with Mr. Singh`;
    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    };
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', `${title} | Code with Mr. Singh`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location, title, description]);

  return <>{children}</>;
};

const App: React.FC = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden w-full relative">
        {isAppLoading && <LoadingScreen onComplete={() => setIsAppLoading(false)} />}

        <div className={`flex flex-col flex-grow transition-opacity duration-1000 w-full overflow-x-hidden ${isAppLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Navbar />
          <main id="main-content" className="flex-grow w-full overflow-x-hidden">
            <Routes>
              <Route path="/" element={<PageWrapper title="Elite AI & Data Solutions" description="High-performance AI solutions."><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper title="Meet Tushar Singh" description="Freelance tech architect background."><About /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper title="Technical Services" description="AI workflow automation pricing."><Services /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper title="Project Portfolio" description="Gallery of tech deployments."><Projects /></PageWrapper>} />
              <Route path="/testimonials" element={<PageWrapper title="Client Testimonials" description="Reviews and visual proof."><Testimonials /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper title="Contact Now" description="Start a conversation today."><Contact /></PageWrapper>} />
            </Routes>
          </main>
          <WhatsAppButton />
          <ScrollToTop />
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
