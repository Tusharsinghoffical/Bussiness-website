
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICES, ICON_MAP } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const navigate = useNavigate();
  
  const handleServiceClick = (service: any) => {
    // Store service info in sessionStorage
    sessionStorage.setItem('selectedService', JSON.stringify({
      service: service.title,
      category: service.category,
      description: service.description
    }));
    
    // Navigate to contact page
    navigate('/contact');
  };
  return (
    <div className="pt-32 pb-24 px-6 sm:px-10 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* --- COMPACT HEADER --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-400/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <Sparkles size={14} /> Solution Registry
          </div>
          <h1 className="text-3xl sm:text-5xl font-outfit font-extrabold text-slate-950 dark:text-white mb-4 tracking-tight">Technical Packages.</h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed px-4">
            Optimized service modules for high-performance business infrastructure and intelligent automation.
          </p>
        </div>

        {/* --- REFINED 3-COLUMN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className={`group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-8 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col animate-fade-in-up delay-${(idx % 5 + 1) * 100}`}
            >
              
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 dark:group-hover:bg-indigo-400 transition-colors shadow-lg group-hover:rotate-3 duration-500 shrink-0">
                  {React.cloneElement(ICON_MAP[service.icon as keyof typeof ICON_MAP] as React.ReactElement<any>, { className: 'w-6 h-6 sm:w-7 sm:h-7' })}
                </div>
                <div className="text-right">
                   <p className="text-[8px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-0.5">Tier 1</p>
                   <p className="text-xs font-outfit font-bold text-indigo-600 dark:text-indigo-400">{service.priceRange}</p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-outfit font-extrabold text-slate-950 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-[13px] sm:text-sm text-slate-500 dark:text-slate-400 font-medium mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Tightened Features List */}
              <div className="grid grid-cols-1 gap-2.5 mb-8">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-white/5 group-hover:border-indigo-100 dark:group-hover:border-indigo-900/40 transition-colors">
                    <span className="text-base">{feature.icon}</span>
                    <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Stack Tags */}
              <div className="pt-6 border-t border-slate-50 dark:border-white/5 mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {service.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 text-[8px] font-black uppercase tracking-widest rounded-lg border border-indigo-100/50 dark:border-indigo-400/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => handleServiceClick(service)}
                  className="w-full py-4 px-6 rounded-2xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-indigo-600 dark:hover:bg-indigo-100 transition-all flex items-center justify-center gap-2 group/btn shadow-lg active:scale-95 cursor-pointer"
                >
                  Contact for Price
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- COMPACT FOOTER CTA --- */}
        <div className="mt-16 p-10 sm:p-16 rounded-[3rem] bg-slate-950 dark:bg-slate-900 text-center relative overflow-hidden animate-reveal-scale shadow-2xl border dark:border-white/5">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none text-white">
            <Sparkles size={180} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-outfit font-extrabold text-white mb-6 tracking-tight">Need custom architecture?</h2>
          <p className="text-sm sm:text-base text-slate-400 font-medium mb-8 max-w-xl mx-auto leading-relaxed">
            Discuss bespoke solutions tailored to your specific operational scale.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-slate-950 text-[10px] font-black uppercase tracking-[0.25em] rounded-xl hover:bg-indigo-50 transition-all shadow-xl active:scale-95 group cursor-pointer"
          >
            Consultation Portal
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
