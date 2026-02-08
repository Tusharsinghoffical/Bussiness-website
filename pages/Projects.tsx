
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { 
  Terminal,
  Cpu,
  Zap,
  Tag as TagIcon,
  X,
  LayoutGrid,
  Calendar
} from 'lucide-react';



const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories = useMemo(() => {
    const cats = new Set<string>();
    PROJECTS.forEach(p => cats.add(p.category));
    return ['All', ...Array.from(cats).sort()];
  }, []);

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    PROJECTS.forEach(p => p.tags.forEach(t => tagsSet.add(t)));
    return ['All', ...Array.from(tagsSet).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesTag = selectedTag === 'All' || p.tags.includes(selectedTag);
      return matchesCategory && matchesTag;
    });
  }, [activeCategory, selectedTag]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <div className="pt-28 sm:pt-32 pb-24 px-4 sm:px-10 lg:px-16 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-12 text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-[10px] font-black uppercase tracking-[0.3em] mb-6 sm:mb-8 shadow-md">
                <Cpu size={12} className="text-indigo-400" /> Technical Registry
              </div>
              <h1 className="text-4xl sm:text-6xl font-outfit font-extrabold text-slate-950 dark:text-white tracking-tight leading-none mb-6 sm:mb-8">
                System <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent italic">Artifacts.</span>
              </h1>
              <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
                A dynamic archive of high-performance deployments across enterprise data landscapes and autonomous software architectures.
              </p>
            </div>

            {/* --- FILTER CONTROL PANEL --- */}
            <div className="w-full lg:w-auto">
              <div className="flex flex-col items-center lg:items-end gap-6 sm:gap-8 bg-slate-50 dark:bg-slate-900/40 p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm">
                
                {/* Category Filters */}
                <div className="w-full">
                  <div className="flex items-center justify-center lg:justify-end gap-2 text-[9px] sm:text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em] mb-3 sm:mb-4">
                    <LayoutGrid size={12} className="text-indigo-500" /> Dimensional Category
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { setActiveCategory(cat); setSelectedTag('All'); }}
                        className={`
                          px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap active:scale-95 border
                          ${activeCategory === cat 
                            ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 border-slate-950 dark:border-white shadow-lg' 
                            : 'bg-white dark:bg-slate-950 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-white/10 hover:text-slate-950 dark:hover:text-white hover:border-indigo-400'
                          }
                        `}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tag Filters */}
                <div className="w-full max-w-md lg:max-w-xl">
                  <div className="flex items-center justify-center lg:justify-end gap-2 text-[9px] sm:text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em] mb-3 sm:mb-4">
                    <TagIcon size={12} className="text-indigo-500" /> Tag Refinement
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-center lg:justify-end max-h-24 overflow-y-auto pr-2 custom-scrollbar">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`
                          px-3 py-1.5 rounded-lg sm:rounded-xl text-[8px] sm:text-[9px] font-bold uppercase tracking-wider transition-all border
                          ${selectedTag === tag 
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' 
                            : 'bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }
                        `}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pb-16 sm:pb-20">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className={`group flex flex-col bg-white dark:bg-slate-900 rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700 animate-fade-in-up delay-${(idx % 5 + 1) * 100} cursor-pointer`}
            >
              
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 dark:bg-slate-950">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1.5 bg-slate-950/95 dark:bg-white/90 backdrop-blur-xl text-white dark:text-slate-950 text-[8px] font-black uppercase tracking-[0.2em] rounded-lg flex items-center gap-2 border border-white/10 shadow-xl">
                    <Terminal size={10} className="text-indigo-400" /> {project.id.toUpperCase()}
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                  <div className="px-3 py-1.5 bg-emerald-500 text-white text-[8px] font-black uppercase tracking-widest rounded-lg flex items-center gap-2 shadow-lg">
                    <Zap size={10} className="fill-white" /> Quick View
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[8px] font-black uppercase tracking-widest rounded-md">
                    {project.category}
                  </div>
                  <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800"></span>
                  <span className="text-[8px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">{project.date}</span>
                </div>

                <h3 className="text-lg sm:text-2xl font-outfit font-extrabold text-slate-950 dark:text-white mb-4 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8 italic line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 text-[7px] sm:text-[8px] font-black uppercase tracking-[0.15em] rounded-lg border bg-slate-50 dark:bg-slate-950 text-slate-400 dark:text-slate-600 border-slate-100 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- MODAL OVERLAY --- */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-500"></div>
            
            <div 
              className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-[2rem] sm:rounded-[3rem] overflow-y-auto shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-white/5 animate-in zoom-in-95 fade-in duration-500 flex flex-col lg:flex-row custom-scrollbar"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-40 p-2 sm:p-3 bg-slate-950/50 hover:bg-slate-950 text-white rounded-full transition-all active:scale-90"
              >
                <X size={18} />
              </button>



              {/* Project Brief */}
              <div className="w-full p-6 sm:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                   <p className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.3em]">{selectedProject.category}</p>
                   <div className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                   <p className="text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest flex items-center gap-1.5">
                    <Calendar size={10} /> {selectedProject.date}
                   </p>
                </div>
                
                <h2 className="text-2xl sm:text-5xl font-outfit font-extrabold text-slate-950 dark:text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                  {selectedProject.title}
                </h2>
                
                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 sm:mb-8 italic">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-md text-[8px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-4 sm:py-5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-xl sm:rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 dark:hover:bg-indigo-50 transition-all shadow-xl active:scale-95"
                  >
                    Return to Registry
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- EMPTY STATE --- */}
        {filteredProjects.length === 0 && (
          <div className="py-20 sm:py-32 text-center bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] sm:rounded-[4rem] border border-dashed border-slate-200 dark:border-white/5 px-6 animate-reveal-scale">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-sm">
              <Terminal size={28} className="text-slate-200 dark:text-slate-700" />
            </div>
            <h3 className="text-xl sm:text-2xl font-outfit font-black text-slate-950 dark:text-white mb-2 sm:mb-3">Null Set Returned.</h3>
            <p className="text-[9px] sm:text-[11px] text-slate-400 dark:text-slate-600 font-black uppercase tracking-widest mb-10 sm:mb-12">No projects matching your current filter parameters.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSelectedTag('All'); }}
              className="w-full sm:w-auto px-10 py-4 sm:px-12 py-5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-[10px] sm:text-[11px] font-black uppercase tracking-widest rounded-xl sm:rounded-2xl hover:bg-indigo-600 dark:hover:bg-indigo-50 transition-all shadow-xl active:scale-95"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
        }
      `}</style>
    </div>
  );
};

export default Projects;
