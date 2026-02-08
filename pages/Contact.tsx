
import React, { useState, useId } from 'react';
import { 
  Mail, Send, MapPin, Github, Linkedin, CheckCircle, 
  ArrowUpRight, Clock, Sparkles, MessageSquare, Zap, 
  ShieldCheck, Phone, Building2, Wallet, Calendar, 
  User, Briefcase, ChevronDown
} from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
  
  const ids = {
    name: useId(),
    email: useId(),
    phone: useId(),
    company: useId(),
    message: useId()
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      service: formData.get('interest') as string,
      budget: formData.get('budget') as string,
      timeline: formData.get('timeline') as string,
      priority: formData.get('priority') as string,
      message: formData.get('message') as string,
    };

    const whatsappMessage = `New Inquiry from: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}
Service Interested: ${data.service}
Budget Range: ${data.budget}
Timeline: ${data.timeline}
Priority: ${data.priority}
Message:
${data.message}

Sent via C.MS Contact Portal`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/918851619647?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setStatus('success');
    }, 1000);
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-10 bg-white dark:bg-slate-950 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-indigo-50 dark:bg-indigo-950/20 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* --- COMPACT HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-md">
              <Sparkles size={12} className="text-amber-400" /> Accepting Briefs
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-outfit font-extrabold text-slate-950 dark:text-white tracking-tight leading-none mb-6">
              Inquiry <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Portal.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              High-priority technical briefs receive immediate vetting via WhatsApp synchronization.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT: Information Grid */}
          <div className="lg:col-span-4 space-y-6">
            {/* Social Card */}
            <div className="bg-slate-950 dark:bg-slate-900 p-8 rounded-[2.5rem] text-white flex flex-col justify-between group overflow-hidden relative shadow-xl border dark:border-white/5 min-h-[240px]">
              <div className="absolute -right-8 -top-8 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
                <MessageSquare size={160} />
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-indigo-600 transition-colors">
                    <Mail size={20} />
                  </div>
                  <a href="mailto:tusharsinghkumar04@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all active:scale-90">
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <p className="text-[8px] font-black text-slate-500 dark:text-slate-600 uppercase tracking-widest mb-1.5">Direct Secure</p>
                <h3 className="text-sm sm:text-base font-bold break-all">tusharsinghkumar04@gmail.com</h3>
              </div>
              <div className="mt-10 flex items-center gap-4 relative z-10">
                <SocialLink href="https://github.com/Tusharsinghoffical" icon={<Github size={20} />} />
                <SocialLink href="https://linkedin.com/in/tusharsingh2011" icon={<Linkedin size={20} />} />
              </div>
            </div>

            {/* Base Tile */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm flex items-center gap-5 group hover:border-indigo-100 dark:hover:border-indigo-400/30 transition-colors">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-[8px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">Base Ops</p>
                <p className="text-[14px] font-bold text-slate-900 dark:text-white">Delhi, India</p>
              </div>
              <div className="ml-auto hidden sm:flex items-center gap-2.5 px-4 py-2 bg-slate-50 dark:bg-slate-950 rounded-xl">
                <Clock size={14} className="text-slate-400 dark:text-slate-600" />
                <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest tabular-nums">{time}</span>
              </div>
            </div>

            {/* Support Protocol */}
            <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white shadow-lg flex flex-col justify-between relative overflow-hidden group min-h-[200px]">
               <div className="absolute -bottom-4 -right-4 opacity-10">
                  <Zap size={100} />
               </div>
               <h3 className="text-base font-bold mb-3 relative z-10">Secure Sync.</h3>
               <p className="text-[13px] text-indigo-100 font-medium mb-6 relative z-10 leading-relaxed italic">
                 "Encrypted direct-to-WhatsApp protocol for immediate architectural review."
               </p>
               <div className="flex items-center gap-2.5 text-[9px] font-black uppercase tracking-widest bg-white/10 w-fit px-4 py-2 rounded-full border border-white/10 relative z-10">
                 <ShieldCheck size={12} className="text-white" /> Professional
               </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-2xl relative overflow-hidden">
              {status === 'success' ? (
                <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-100 dark:border-emerald-400/20 shadow-inner">
                    <CheckCircle size={40} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold text-slate-950 dark:text-white mb-4 tracking-tight">Sync Established.</h2>
                  <p className="text-base text-slate-500 dark:text-slate-400 mb-12 font-medium leading-relaxed max-w-sm mx-auto">Brief has been formatted. Complete the handshake in the WhatsApp tab.</p>
                  <button onClick={() => setStatus('idle')} className="w-full sm:w-auto px-10 py-5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-bold text-[11px] tracking-widest uppercase hover:bg-indigo-600 dark:hover:bg-indigo-50 transition-all shadow-md active:scale-95">
                    New Connection
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  {/* Identity */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-3 mb-2">
                       <Building2 size={16} className="text-indigo-600 dark:text-indigo-400" />
                       <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em]">Partner Registry</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <FancyInput id={ids.name} name="name" label="Identity" placeholder="Tushar Singh" required icon={<User size={18} />} />
                      <FancyInput id={ids.email} name="email" label="Endpoint (Email)" type="email" placeholder="tushar@example.com" required icon={<Mail size={18} />} />
                      <FancyInput id={ids.phone} name="phone" label="Terminal (Phone)" placeholder="+91 88516 19647" required icon={<Phone size={18} />} />
                      <FancyInput id={ids.company} name="company" label="Organization" placeholder="AB Infotech" required icon={<Briefcase size={18} />} />
                    </div>
                  </div>

                  {/* Architecture */}
                  <div className="space-y-10">
                    <div className="flex items-center gap-3 mb-2">
                       <Zap size={16} className="text-amber-500" />
                       <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em]">Deployment Scope</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <span className="text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest block ml-1">System Category</span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {['Web Dev', 'AI Agents', 'Data Sci', 'Consulting'].map(item => (
                          <label key={item} className="cursor-pointer group">
                            <input type="radio" name="interest" value={item} className="sr-only peer" required />
                            <div className="px-3 py-5 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 transition-all peer-checked:bg-slate-950 dark:peer-checked:bg-white peer-checked:text-white dark:peer-checked:text-slate-950 peer-checked:border-slate-950 dark:peer-checked:border-white peer-checked:ring-4 peer-checked:ring-indigo-500/10 text-center hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 shadow-sm">
                              {item}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="flex items-center gap-2.5 text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest ml-1">
                          <Wallet size={12} className="text-indigo-600 dark:text-indigo-400" /> Investment Range
                        </label>
                        <div className="relative group">
                          <select name="budget" className="w-full px-6 py-5 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-2xl focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-slate-950 dark:text-white text-xs sm:text-sm appearance-none cursor-pointer shadow-sm">
                            <option value="5-20k">₹5,000 — ₹20,000</option>
                            <option value="20-50k">₹20,000 — ₹50,000</option>
                            <option value="50-100k">₹50,000 — ₹1,00,000</option>
                            <option value="100k+">₹1,00,000+</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-indigo-500 transition-colors" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="flex items-center gap-2.5 text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest ml-1">
                          <Calendar size={12} className="text-indigo-600 dark:text-indigo-400" /> Execution Priority
                        </label>
                        <div className="relative group">
                          <select name="priority" className="w-full px-6 py-5 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-2xl focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-slate-950 dark:text-white text-xs sm:text-sm appearance-none cursor-pointer shadow-sm">
                            <option value="urgent">Urgent Delivery</option>
                            <option value="standard">Standard Brief</option>
                            <option value="long-term">Long-term Collaboration</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-indigo-500 transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Objective */}
                  <div className="space-y-4">
                    <label htmlFor={ids.message} className="text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest block ml-1">Technical Briefing</label>
                    <textarea 
                      id={ids.message}
                      name="message"
                      required
                      rows={5}
                      placeholder="Specify outcomes, technical constraints, and mission objectives..."
                      className="w-full px-6 py-6 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-[1.5rem] focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium resize-none text-slate-950 dark:text-white text-base placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-sm"
                    ></textarea>
                  </div>

                  <div className="pt-6">
                    <button 
                      disabled={status === 'sending'}
                      type="submit" 
                      className="w-full py-6 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black uppercase tracking-[0.25em] text-[11px] rounded-[1.25rem] hover:bg-indigo-600 dark:hover:bg-indigo-50 transition-all flex items-center justify-center gap-4 shadow-2xl group disabled:opacity-70 active:scale-95"
                    >
                      {status === 'sending' ? (
                        <div className="w-5 h-5 border-2 border-white/20 dark:border-slate-950/20 border-t-white dark:border-t-slate-950 rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Establish Connection Protocol
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-3 mt-10">
                       <ShieldCheck size={14} className="text-emerald-500" />
                       <p className="text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">
                        Verified Technical Synchronization Secure
                       </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FancyInput = ({ label, id, icon, ...props }: any) => (
  <div className="space-y-3">
    <label htmlFor={id} className="text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest ml-1 block">{label}</label>
    <div className="relative group">
      {icon && (
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors pointer-events-none">
          {icon}
        </div>
      )}
      <input 
        id={id}
        {...props}
        className={`w-full ${icon ? 'pl-14' : 'px-6'} pr-6 py-5 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-2xl focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-slate-950 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-sm`}
      />
    </div>
  </div>
);

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-11 h-11 rounded-xl border border-white/10 dark:border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all active:scale-90"
  >
    {icon}
  </a>
);

export default Contact;
