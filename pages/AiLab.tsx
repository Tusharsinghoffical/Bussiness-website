
import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Image as ImageIcon, 
  Brain, 
  Maximize2, 
  Download, 
  RotateCcw, 
  Loader2, 
  AlertCircle,
  ShieldCheck,
  ChevronRight,
  Cpu,
  Layers,
  Search,
  Key
} from 'lucide-react';
// Fix: Importing newly exported functions from gemini library
import { generateImage, thinkDeeply } from '../lib/gemini';

const AiLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'visual' | 'cognitive'>('visual');
  
  // Image Generation State
  const [imgPrompt, setImgPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [generatedImg, setGeneratedImg] = useState<string | null>(null);
  const [imgLoading, setImgLoading] = useState(false);
  const [hasKey, setHasKey] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cognitive Engine State
  const [thinkingPrompt, setThinkingPrompt] = useState('');
  const [thoughtResult, setThoughtResult] = useState('');
  const [thinkingLoading, setThinkingLoading] = useState(false);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio?.hasSelectedApiKey) {
        try {
          const selected = await window.aistudio.hasSelectedApiKey();
          setHasKey(selected);
        } catch (e) {
          console.error("Key check failed", e);
        }
      }
    };
    checkKey();
  }, []);

  const handleOpenKeySelector = async () => {
    setError(null);
    if (window.aistudio?.openSelectKey) {
      try {
        await window.aistudio.openSelectKey();
        // Assume success after trigger as per race condition notes
        setHasKey(true);
      } catch (e) {
        setError("Failed to open key selector.");
      }
    }
  };

  const handleGenerateImage = async () => {
    if (!imgPrompt.trim()) return;
    setImgLoading(true);
    setError(null);
    try {
      const img = await generateImage(imgPrompt, aspectRatio);
      setGeneratedImg(img);
    } catch (err: any) {
      console.error(err);
      const errMsg = err.message || "";
      if (errMsg.includes('403') || errMsg.includes('permission') || errMsg.includes('not found')) {
        setError("Permission Denied: Gemini 3 Pro features require an API key from a PAID Google Cloud Project with billing enabled.");
        setHasKey(false); // Reset key state to allow user to re-select
      } else {
        setError("Synthesis failed. Check your network or try a more detailed prompt.");
      }
    } finally {
      setImgLoading(false);
    }
  };

  const handleThinking = async () => {
    if (!thinkingPrompt.trim()) return;
    setThinkingLoading(true);
    setError(null);
    try {
      const result = await thinkDeeply(thinkingPrompt);
      setThoughtResult(result || '');
    } catch (err: any) {
      console.error(err);
      const errMsg = err.message || "";
      if (errMsg.includes('403') || errMsg.includes('permission')) {
        setError("Permission Denied: Advanced reasoning requires a paid project API key.");
        setHasKey(false);
      } else {
        setError("Processing failed. Please try again.");
      }
    } finally {
      setThinkingLoading(false);
    }
  };

  // Fix: Updating aspect ratios to only include those supported by the Gemini SDK
  const aspectRatios = ['1:1', '3:4', '4:3', '9:16', '16:9'];

  return (
    <div className="pt-32 pb-32 px-4 sm:px-6 bg-[#fafafa] min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 sm:mb-20 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-xl">
            <Cpu size={14} className="text-indigo-400" /> Neural Processing Unit Active
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-outfit font-extrabold text-slate-950 tracking-tighter mb-6">
            The Neural <span className="text-indigo-600 italic">Lab.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed px-4">
            Experiment with high-performance generative models and deep technical reasoning artifacts in a sandboxed environment.
          </p>
        </div>

        {/* Global Error Alert */}
        {error && (
          <div className="max-w-4xl mx-auto mb-10 p-6 bg-rose-50 border border-rose-100 rounded-[2rem] flex items-start gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
            <AlertCircle className="text-rose-500 shrink-0 mt-1" size={24} />
            <div className="flex-1">
              <h4 className="text-sm font-black text-rose-900 uppercase tracking-widest mb-1">Processing Interrupt</h4>
              <p className="text-xs text-rose-700 font-medium leading-relaxed">{error}</p>
              {error.includes("Permission") && (
                <button 
                  onClick={handleOpenKeySelector}
                  className="mt-4 flex items-center gap-2 text-[10px] font-black text-rose-900 uppercase tracking-widest bg-white px-4 py-2 rounded-xl border border-rose-200 hover:bg-rose-100 transition-colors"
                >
                  <Key size={12} /> Re-select Paid API Key
                </button>
              )}
            </div>
          </div>
        )}

        {/* Tab Selection */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <button 
            onClick={() => setActiveTab('visual')}
            className={`w-full sm:w-auto px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${activeTab === 'visual' ? 'bg-slate-950 text-white shadow-2xl' : 'bg-white border border-slate-200 text-slate-400 hover:text-slate-950'}`}
          >
            <ImageIcon size={16} /> Visual Architect
          </button>
          <button 
            onClick={() => setActiveTab('cognitive')}
            className={`w-full sm:w-auto px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${activeTab === 'cognitive' ? 'bg-slate-950 text-white shadow-2xl' : 'bg-white border border-slate-200 text-slate-400 hover:text-slate-950'}`}
          >
            <Brain size={16} /> Cognitive Engine
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden min-h-[500px] flex flex-col lg:flex-row">
          
          {/* Controls Sidebar */}
          <div className="lg:w-1/3 p-8 sm:p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/30">
            {activeTab === 'visual' ? (
              <div className="space-y-8 sm:space-y-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">Diffusion Core</h3>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Model: gemini-3-pro-image-preview</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Composition Prompt</label>
                  <textarea 
                    value={imgPrompt}
                    onChange={(e) => setImgPrompt(e.target.value)}
                    placeholder="E.g., A cybernetic architecture schematic of a futuristic data center..."
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 bg-white border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all resize-none h-32 sm:h-40"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Aspect Ratio Registry</label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-2">
                    {aspectRatios.map(ar => (
                      <button 
                        key={ar}
                        onClick={() => setAspectRatio(ar)}
                        className={`py-2 text-[9px] font-black border rounded-lg transition-all ${aspectRatio === ar ? 'bg-slate-950 text-white border-slate-950 shadow-lg' : 'bg-white border-slate-200 text-slate-400 hover:border-indigo-200'}`}
                      >
                        {ar}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  {!hasKey ? (
                    <button 
                      onClick={handleOpenKeySelector}
                      className="w-full py-5 bg-white border-2 border-dashed border-indigo-200 text-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-indigo-50 transition-all shadow-sm"
                    >
                      <ShieldCheck size={16} /> Unlock High-Quality Synthesis
                    </button>
                  ) : (
                    <button 
                      onClick={handleGenerateImage}
                      disabled={imgLoading || !imgPrompt}
                      className="w-full py-5 sm:py-6 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-indigo-600 transition-all shadow-2xl shadow-indigo-100 disabled:opacity-50"
                    >
                      {imgLoading ? <Loader2 size={18} className="animate-spin" /> : <><RotateCcw size={18} /> Initiate Render</>}
                    </button>
                  )}
                  <p className="mt-6 text-[9px] font-bold text-slate-400 uppercase text-center leading-relaxed">
                    Powered by Google Imagen 3 Pro. <br /> Requires selected API key from a project with <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="text-indigo-600 underline">billing enabled</a>.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8 sm:space-y-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                    <Brain size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">Reasoning Matrix</h3>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Thinking Budget: 32,768 Tokens</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Technical Brief</label>
                  <textarea 
                    value={thinkingPrompt}
                    onChange={(e) => setThinkingPrompt(e.target.value)}
                    placeholder="Input a complex logic puzzle or architectural query..."
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 bg-white border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all resize-none h-48 sm:h-60"
                  />
                </div>

                <button 
                  onClick={handleThinking}
                  disabled={thinkingLoading || !thinkingPrompt}
                  className="w-full py-5 sm:py-6 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-100 disabled:opacity-50"
                >
                  {thinkingLoading ? <Loader2 size={18} className="animate-spin" /> : <><Cpu size={18} /> Deep Process</>}
                </button>
              </div>
            )}
          </div>

          {/* Result Area */}
          <div className="lg:w-2/3 p-6 sm:p-10 lg:p-14 flex items-center justify-center bg-white relative min-h-[400px]">
            <div className="absolute top-4 sm:top-8 left-4 sm:left-8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Output Registry v1.0</span>
            </div>

            {activeTab === 'visual' ? (
              <div className="w-full h-full flex flex-col items-center justify-center min-h-[300px]">
                {imgLoading ? (
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-indigo-100 rounded-full animate-ping opacity-20"></div>
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 border border-slate-100 rounded-[2rem] flex items-center justify-center mx-auto shadow-inner">
                        <Loader2 size={32} className="text-indigo-600 animate-spin" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-outfit font-black text-slate-950 mb-2">Architecting Pixels</h4>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Model is mapping latent space coordinates...</p>
                    </div>
                  </div>
                ) : generatedImg ? (
                  <div className="relative group w-full h-full flex flex-col items-center">
                    <div className="max-w-full max-h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-3xl border border-slate-100 transition-transform duration-700 hover:scale-[1.01]">
                       <img src={generatedImg} alt="AI Generated Artifact" className="max-w-full max-h-[50vh] sm:max-h-[70vh] object-contain" />
                    </div>
                    <div className="mt-8 sm:mt-10 flex gap-3 sm:gap-4 flex-wrap justify-center">
                      <button className="px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-indigo-600 transition-all shadow-xl">
                        <Download size={16} /> Export Artifact
                      </button>
                      <button onClick={() => setGeneratedImg(null)} className="p-3.5 sm:p-4 bg-slate-50 text-slate-400 rounded-2xl border border-slate-100 hover:text-slate-950 hover:bg-white transition-all">
                        <RotateCcw size={16} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center opacity-30 group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 rounded-[2rem] sm:rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 border-2 border-dashed border-slate-200 group-hover:scale-110 transition-transform duration-700">
                      <ImageIcon size={32} className="text-slate-300" />
                    </div>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Awaiting Visual Input</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full h-full">
                {thinkingLoading ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-8">
                     <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
                       <div className="w-1/2 h-full bg-emerald-500 animate-progress"></div>
                     </div>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] animate-pulse">Computing Deep Architecture</p>
                  </div>
                ) : thoughtResult ? (
                  <div className="w-full h-full overflow-y-auto max-h-[50vh] sm:max-h-[70vh] pr-2 sm:pr-4 custom-scrollbar">
                    <div className="flex items-center gap-3 mb-8 sm:mb-10 pb-6 border-b border-slate-100">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                        <Layers size={20} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-outfit font-black text-slate-950 tracking-tight">Synthesized Intelligence</h3>
                    </div>
                    <div className="prose prose-slate max-w-none">
                      <p className="text-slate-600 font-medium leading-[1.8] whitespace-pre-wrap text-sm sm:text-base">
                        {thoughtResult}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 rounded-[2rem] sm:rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 border-2 border-dashed border-slate-200">
                      <Search size={32} className="text-slate-300" />
                    </div>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Awaiting Technical Brief</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Lab Footer */}
        <div className="mt-12 sm:mt-20 flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10 px-4">
           <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              <div className="p-3 sm:p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                 <p className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Compute Core</p>
                 <p className="text-[10px] sm:text-xs font-bold text-slate-950">Gemini 3 Pro Cluster</p>
              </div>
              <div className="p-3 sm:p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                 <p className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Latency Tier</p>
                 <p className="text-[10px] sm:text-xs font-bold text-emerald-600">Premium Real-Time</p>
              </div>
           </div>
           <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] max-w-xs text-center md:text-right leading-relaxed">
             Experimental artifacts generated here are part of the Singh Technical Registry. Use for high-performance architectural vetting.
           </p>
        </div>
      </div>
      
      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-progress {
          animation: progress 1.5s ease-in-out infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default AiLab;
