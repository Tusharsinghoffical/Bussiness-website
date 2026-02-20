
import React from 'react';
import { 
  Briefcase, 
  Award, 
  GraduationCap, 
  Code2, 
  Database, 
  Zap, 
  MapPin, 
  Download, 
  Sparkles,
  Trophy,
  Globe2,
  Cpu,
  Terminal,
  Layers,
  CheckCircle2,
  BarChart
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* --- COMPACT INTRO --- */}
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-20">
          <div className="w-44 h-56 sm:w-56 sm:h-72 rounded-2xl overflow-hidden shadow-lg relative group shrink-0">
            <picture>
              <source srcSet="/me.webp" type="image/webp" />
              <source srcSet="/me-optimized.jpg" type="image/jpeg" />
              <img 
                src="/me-optimized.jpg" 
                alt="Tushar Singh" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          
          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-[9px] font-black uppercase tracking-[0.3em] mb-6 shadow-lg">
              <Sparkles size={10} className="text-amber-400" /> Active Registry — 2025
            </div>
            <h1 className="text-4xl sm:text-6xl font-outfit font-extrabold text-slate-950 dark:text-white mb-6 leading-[0.9] tracking-tight">
              Tushar <span className="text-indigo-600 dark:text-indigo-400">Singh.</span>
            </h1>
            <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8 max-w-2xl">
              Data Analyst and Full-Stack Developer with hands-on experience in Python, SQL, and AI-driven automation. Proven ability to analyze 120,000+ record datasets and build scalable web architectures that translate complex requirements into high-performance solutions.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
               <div className="flex items-center gap-2 text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-100 dark:border-white/5">
                  <MapPin size={14} className="text-indigo-500 dark:text-indigo-400" /> Delhi, India
               </div>
               <a 
                 href="/Tushar_Singh_Resume.pdf" 
                 download="Tushar_Singh_Resume.pdf"
                 className="flex items-center gap-2 text-[9px] font-black text-white dark:text-slate-950 bg-slate-950 dark:bg-white hover:bg-indigo-600 dark:hover:bg-indigo-50 px-6 py-2 rounded-xl transition-all shadow-xl uppercase tracking-widest group"
               >
                  <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" /> Download Resume
               </a>
            </div>
          </div>
        </div>

        {/* --- CORE REGISTRY GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-16">
            
            {/* Experience */}
            <section>
              <SectionTitle icon={<Briefcase size={16} />} title="Professional Registry" />
              <div className="space-y-10">
                <ExperienceItem 
                  role="Freelance Application Developer"
                  company="Self-Employed"
                  period="Jan 2025 - Present"
                  location="Remote"
                  desc="Developing responsive full-stack applications using Java, Python, and Bootstrap. Delivering client-based E-commerce platforms and data analysis dashboards powered by REST APIs for real-time insights."
                />
                <ExperienceItem 
                  role="Data Analyst Intern"
                  company="AB Infotech Solutions"
                  period="Jun 2025 - Sep 2025"
                  location="Onsite — Pune"
                  desc="Analyzed 120,000+ sales and HR records using Python (Pandas/NumPy) and SQL. Built interactive Power BI/Tableau dashboards and automated reporting workflows, reducing manual processing time by 25%."
                />
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionTitle icon={<GraduationCap size={16} />} title="Academic Foundation" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <EducationCard 
                  degree="Master of Computer Applications"
                  school="MIT ADT University, Pune"
                  period="Oct 2024 - June 2026"
                  grade="CGPA 8.4"
                />
                <EducationCard 
                  degree="Bachelor of Computer Applications"
                  school="Institute of Tech. and Science, Ghaziabad"
                  period="Oct 2021 - Mar 2024"
                  grade="72%"
                />
              </div>
            </section>

            {/* Awards */}
            <section>
              <SectionTitle icon={<Trophy size={16} />} title="Tactical Awards" />
              <div className="p-6 bg-amber-50/50 dark:bg-amber-950/10 border border-amber-100 dark:border-amber-900/20 rounded-[2rem] flex items-center gap-6 group hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">3rd Place — Inter-College Hackathon</h3>
                  <p className="text-[9px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest">Competition Year: 2022</p>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-5 space-y-12">
            {/* Detailed Skills Matrix */}
            <section>
              <SectionTitle icon={<Cpu size={16} />} title="Technical Matrix" />
              <div className="space-y-6">
                <SkillCategory 
                  label="Web & Frameworks" 
                  skills={['React.js', 'Django', 'Flask', 'Node.js', 'JS (ES6+)', 'HTML5/CSS3']} 
                  icon={<Globe2 size={12} />}
                />
                <SkillCategory 
                  label="Data Intelligence" 
                  skills={['Python (Pandas/NumPy)', 'Scikit-learn', 'Predictive Analytics', 'Power BI', 'Tableau']} 
                  icon={<BarChart size={12} className="w-3 h-3" />}
                />
                <SkillCategory 
                  label="Database Systems" 
                  skills={['MySQL', 'SQLite', 'MongoDB', 'Data Modelling', 'Optimization']} 
                  icon={<Database size={12} />}
                />
                <SkillCategory 
                  label="Automation & Tools" 
                  skills={['n8n', 'Make.com', 'APIs/Webhooks', 'Git/GitHub', 'Agile']} 
                  icon={<Zap size={12} />}
                />
              </div>
            </section>

            {/* Verification */}
            <section>
              <SectionTitle icon={<CheckCircle2 size={16} />} title="Verified Certifications" />
              <ul className="space-y-3">
                <CertItem label="Microsoft Data Science Professional" />
                <CertItem label="Google Python C Machine Learning" />
                <CertItem label="Google AI Essentials Specialization" />
                <CertItem label="Tata Group GenAI Powered Analytics" />
                <CertItem label="Deloitte Australia Tech Simulation" />
              </ul>
            </section>

            {/* Metadata Section */}
            <section className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 space-y-6">
              <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em] mb-2">Registry Metadata</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                   <p className="text-[8px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-1">Languages</p>
                   <p className="text-[11px] font-bold text-slate-950 dark:text-white">English, Hindi</p>
                </div>
                <div>
                   <p className="text-[8px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-1">Availability</p>
                   <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Immediate</p>
                </div>
                <div className="col-span-2">
                   <p className="text-[8px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-1">Willing to Relocate</p>
                   <p className="text-[11px] font-bold text-slate-950 dark:text-white">Confirmed (Yes)</p>
                </div>
              </div>
            </section>

            {/* Mission Box */}
            <div className="p-8 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-[2rem] shadow-xl relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                  <Sparkles size={120} />
               </div>
              <h3 className="text-sm font-black uppercase tracking-widest mb-3 relative z-10 text-indigo-400 dark:text-indigo-600">Core Mission</h3>
              <p className="text-slate-400 dark:text-slate-600 text-[13px] relative z-10 leading-relaxed font-medium italic">
                "Specializing in the nexus between data cleaning and software development. I build systems that automate the mundane to focus on the monumental."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionTitle = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
      {icon}
    </div>
    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600">{title}</h2>
  </div>
);

const ExperienceItem = ({ role, company, period, desc, location }: any) => (
  <div className="relative pl-8 border-l border-slate-100 dark:border-white/5 group">
    <div className="absolute w-2.5 h-2.5 bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-400 rounded-full -left-[5.5px] top-1.5 group-hover:scale-125 transition-transform shadow-sm"></div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
      <span className="text-[9px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">{period}</span>
      <span className="text-[8px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">{location}</span>
    </div>
    <h3 className="text-base font-bold text-slate-950 dark:text-white mb-0.5">{role}</h3>
    <p className="text-slate-900 dark:text-slate-100 text-[10px] font-black mb-3 uppercase tracking-widest">{company}</p>
    <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{desc}</p>
  </div>
);

const EducationCard = ({ degree, school, period, grade }: any) => (
  <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 rounded-2xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-500 group">
    <h3 className="text-[13px] font-bold text-slate-950 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">{degree}</h3>
    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mb-4">{school}</p>
    <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-white/5">
      <span className="text-[8px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">{period}</span>
      <span className="text-[8px] font-black text-slate-400 dark:text-slate-500 px-2.5 py-1 bg-white dark:bg-slate-950 border border-slate-100 dark:border-white/5 rounded-lg shadow-sm">{grade}</span>
    </div>
  </div>
);

const SkillCategory = ({ label, skills, icon }: { label: string, skills: string[], icon: React.ReactNode }) => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <div className="text-indigo-600 dark:text-indigo-400 opacity-50">{icon}</div>
      <h4 className="text-[9px] font-black text-slate-950 dark:text-white uppercase tracking-widest">{label}</h4>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {skills.map(skill => (
        <span key={skill} className="px-2.5 py-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 text-slate-500 dark:text-slate-400 rounded-lg text-[8px] font-black uppercase tracking-widest hover:border-indigo-200 dark:hover:border-indigo-400/50 transition-colors cursor-default shadow-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const CertItem = ({ label }: { label: string }) => (
  <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-[11px] font-bold group cursor-default">
    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 group-hover:scale-125 transition-transform"></div>
    <span className="group-hover:text-slate-950 dark:group-hover:text-white transition-colors uppercase tracking-tight">{label}</span>
  </li>
);

export default About;
