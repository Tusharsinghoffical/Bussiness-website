
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code2, 
  BrainCircuit, 
  BarChart3, 
  Zap,
  Cpu,
  Clock,
  MapPin,
  Sparkles,
  Database,
  Globe,
  Terminal,
  Activity
} from 'lucide-react';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: true 
  }));
  const featuredPreview = PROJECTS.filter(p => p.isFeatured).slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
  }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const techStack = [
    "Python", "Django", "React.js", "n8n Automation", "Power BI", "SQL", "Machine Learning", 
    "AI Agents", "REST APIs", "Data Engineering", "Tailwind CSS"
  ];

  return (
    <div className="bg-white dark:bg-slate-950 w-full relative">
      <header className="relative min-h-[95vh] flex items-center pt-28 sm:pt-32 pb-16 px-4 sm:px-10 lg:px-16">
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
          <div className="absolute top-[-5%] right-[-2%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-indigo-50 dark:bg-indigo-950/20 rounded-full blur-[80px] sm:blur-[120px] animate-drift"></div>
          <div className="absolute bottom-[-2%] left-[-2%] w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-violet-50 dark:bg-violet-900/10 rounded-full blur-[70px] sm:blur-[100px] animate-drift" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-[9px] font-black uppercase tracking-[0.25em] mb-6 sm:mb-8 shadow-lg animate-fade-in-up mx-auto lg:mx-0">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                System Active — 2025
              </div>
              
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-outfit font-extrabold text-slate-950 dark:text-white mb-6 tracking-tight leading-[1.1] lg:leading-[0.95] animate-fade-in-up delay-100">
                Digital <br />
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">Intelligent</span> <br />
                Artifacts.
              </h1>

              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-lg mb-10 sm:mb-12 leading-relaxed font-medium animate-fade-in-up delay-200 mx-auto lg:mx-0 px-2 sm:px-0">
                Merging Data Science with Elite Software Engineering to build autonomous systems that redefine enterprise efficiency.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 sm:mb-14 animate-fade-in-up delay-300">
                <Link to="/projects" className="w-full sm:w-auto bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-8 py-4 rounded-xl font-bold text-sm hover:bg-indigo-600 dark:hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 group shadow-xl active:scale-95">
                  View Registry
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="w-full sm:w-auto bg-white dark:bg-slate-900 text-slate-950 dark:text-white border border-slate-200 dark:border-white/10 px-8 py-4 rounded-xl font-bold text-sm hover:border-indigo-200 hover:bg-indigo-50/30 transition-all text-center active:scale-95">
                  Start Conversation
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0 animate-fade-in-up delay-400">
                <div className="flex items-center gap-3 p-3 sm:p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <MapPin size={16} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <div className="text-left">
                    <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest">Base</p>
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-900 dark:text-white whitespace-nowrap">Delhi, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 sm:p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <Clock size={16} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <div className="text-left">
                    <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest">Clock</p>
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-900 dark:text-white tabular-nums">{time}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Illustration Column */}
            <div className="lg:col-span-5 hidden lg:block relative animate-reveal-scale delay-500">
              <div className="relative w-full aspect-square max-w-sm ml-auto animate-float">
                <div className="absolute inset-0 bg-indigo-600/5 dark:bg-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative z-10 w-full h-full bg-slate-950 dark:bg-slate-900 rounded-[2.5rem] p-8 overflow-hidden shadow-2xl border border-white/5 group transition-all duration-700 hover:border-white/20">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-white/5 backdrop-blur rounded-xl flex items-center justify-center text-indigo-400 border border-white/10 group-hover:scale-110 transition-transform">
                      <Terminal size={20} />
                    </div>
                    <div className="text-right">
                      <p className="text-[7px] font-black text-slate-500 uppercase tracking-[0.4em] mb-1">Status</p>
                      <span className="text-[9px] font-black text-white uppercase tracking-widest">ONLINE</span>
                    </div>
                  </div>
                  <div className="mt-10 space-y-5">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 group-hover:bg-white/[0.08] transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity size={12} className="text-indigo-400" />
                        <span className="text-[7px] font-black text-indigo-400 uppercase tracking-widest">Pulse</span>
                      </div>
                      <h3 className="text-lg font-outfit font-bold text-white mb-1">Autonomous</h3>
                      <p className="text-[9px] text-slate-500 font-medium">Monitoring throughput...</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 text-center group-hover:border-blue-500/30 transition-colors">
                        <Database size={14} className="text-blue-400 mx-auto mb-1.5" />
                        <span className="text-[6px] font-black text-slate-500 uppercase tracking-widest">Data</span>
                      </div>
                      <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 text-center group-hover:border-amber-500/30 transition-colors">
                        <Zap size={14} className="text-amber-400 mx-auto mb-1.5" />
                        <span className="text-[6px] font-black text-slate-500 uppercase tracking-widest">AI</span>
                      </div>
                      <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 text-center group-hover:border-emerald-500/30 transition-colors">
                        <Globe size={14} className="text-emerald-400 mx-auto mb-1.5" />
                        <span className="text-[6px] font-black text-slate-500 uppercase tracking-widest">Web</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="py-6 sm:py-8 bg-slate-950 overflow-hidden border-y border-white/5 relative">
        <div className="flex animate-marquee whitespace-nowrap gap-10 sm:gap-16">
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <span className="text-white/40 font-outfit font-black text-xl sm:text-4xl uppercase tracking-tighter group-hover:text-indigo-500 transition-colors">
                {tech}
              </span>
              <Sparkles className="text-white/10 w-4 h-4 sm:w-6 sm:h-6" />
            </div>
          ))}
        </div>
      </div>

      <section className="py-12 sm:py-20 bg-white dark:bg-slate-950 relative overflow-visible">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <StatItem number="50+" label="Deployments" delay="delay-100" />
            <StatItem number="20h" label="Saved/Week" delay="delay-200" />
            <StatItem number="100k" label="Records" delay="delay-300" />
            <StatItem number="24/7" label="Uptime" delay="delay-400" />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-[1.5px] bg-indigo-600 dark:bg-indigo-400"></div>
                <span className="text-[9px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.3em]">Curated Preview</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-outfit font-extrabold text-slate-950 dark:text-white tracking-tight mb-3">Technical Registry.</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-xs sm:text-sm">Recent deployments across the technical ecosystem.</p>
            </div>
            <Link to="/projects" className="w-full sm:w-auto bg-white dark:bg-slate-900 px-7 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-[9px] font-black text-slate-950 dark:text-white uppercase tracking-widest hover:bg-slate-950 dark:hover:bg-white hover:text-white dark:hover:text-slate-950 transition-all shadow-sm text-center active:scale-95">
              Explore All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 sm:pb-12">
            {featuredPreview.map((project, idx) => (
              <Link key={project.id} to="/projects" className={`group block animate-fade-in-up delay-${(idx + 1) * 100} relative hover:z-20`}>
                <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-700 relative">
                  <img src={project.imageUrl} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={project.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity p-6 sm:p-8 flex flex-col justify-end">
                    <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-1.5">{project.category}</p>
                    <h4 className="text-lg font-outfit font-bold text-white mb-0">{project.title}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white dark:bg-slate-950 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 animate-reveal-scale relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-400/20 text-indigo-600 dark:text-indigo-400 text-[9px] font-black uppercase tracking-[0.2em] mb-6 sm:mb-8">
            <Sparkles size={14} /> Next Generation
          </div>
          <h2 className="text-3xl sm:text-6xl font-outfit font-extrabold text-slate-950 dark:text-white mb-8 sm:mb-10 tracking-tight leading-tight">
            Ready to <span className="text-indigo-600 dark:text-indigo-400">Innovate?</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 mb-10 sm:mb-12 font-medium max-w-xl mx-auto leading-relaxed px-2 sm:px-4">
            Let's collaborate on building the next high-performance engine for your business infrastructure.
          </p>
          <Link to="/contact" className="w-full sm:w-auto inline-flex px-12 py-5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-indigo-600 dark:hover:bg-indigo-50 transition-all shadow-xl hover:scale-105 active:scale-95">
            Initiate Protocol
          </Link>
        </div>
      </section>
    </div>
  );
};

const StatItem = ({ number, label, delay = "" }: any) => (
  <div className={`text-center group p-4 sm:p-6 rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-500 border border-transparent hover:border-slate-100 dark:hover:border-white/10 animate-fade-in-up hover:z-10 hover:-translate-y-1 ${delay}`}>
    <div className="text-2xl sm:text-5xl font-outfit font-black text-slate-950 dark:text-white tracking-tight mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
      {number}
    </div>
    <div className="text-[8px] sm:text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">{label}</div>
  </div>
);

export default Home;
