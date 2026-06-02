import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, ChevronRight, Milestone, Star, Award, Sparkles, Layers, Activity, Server, Hammer } from "lucide-react";
import { LanguageCode } from "../types";
import { translations } from "../translations";

interface Props {
  language: LanguageCode;
  isDark: boolean;
}

export default function Experience({ language, isDark }: Props) {
  const t = translations[language];
  const [activeJob, setActiveJob] = useState<number>(0);

  const jobs = [
    {
      id: 0,
      title: t.experienceJob1Title,
      company: t.experienceJob1Company,
      date: t.experienceJob1Date,
      points: t.experienceJob1Points,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Agile", "Asana"],
      icon: <Milestone className="h-5 w-5 text-[#00FFCC]" />,
      stats: { output: "+40% Delivery", security: "W3C Compliant", tickets: "84 Sprints" }
    },
    {
      id: 1,
      title: t.experienceJob2Title,
      company: t.experienceJob2Company,
      date: t.experienceJob2Date,
      points: t.experienceJob2Points,
      skills: ["AI Assistants", "Node.js", "Express", "LLM Pipelines", "API Design", "JSON Schema"],
      icon: <Star className="h-5 w-5 text-purple-400" />,
      stats: { output: "Custom LLMs", security: "TLS Encryption", tickets: "22 pipelines" }
    }
  ];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const dir = language === "ar" ? "rtl" : "ltr";
  const alignClass = language === "ar" ? "text-right" : "text-left";
  const layoutClass = language === "ar" ? "flex-row-reverse" : "flex-row";

  // Staggered Container Variants for Entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 90, damping: 18 } 
    },
  };

  return (
    <section 
      id="experience"
      dir={dir}
      className={`py-32 px-4 md:px-8 border-t border-b overflow-hidden transition-colors duration-500 relative ${
        isDark ? "bg-[#050508] border-white/[0.04]" : "bg-slate-50/50 border-slate-200"
      }`}
    >
      {/* Visual background lines and grids */}
      <div className="absolute top-0 left-1/3 w-[1.5px] h-full bg-linear-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Dynamic Header Block (Narrative Storytelling Entry) */}
        <div className={`max-w-3xl mb-24 ${alignClass}`}>
          <div className="flex items-center gap-2 mb-3">
            <Activity className="h-4 w-4 text-[#00FFCC]" />
            <span className="font-mono text-xs font-black uppercase tracking-[0.25em] text-[#00FFCC]">
              {t.experienceHeadingCategory}
            </span>
          </div>
          
          <h2 className={`font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {language !== "ar" ? (
              <>
                Selected <span className="italic font-black text-emerald-600 dark:text-[#00FFCC] dark:neon-glow-text font-display">Timeline</span>
              </>
            ) : (
              t.experienceTitle
            )}
          </h2>
          <p className={`text-lg md:text-xl font-light leading-relaxed tracking-wide ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}>
            {t.experienceSubtitle}
          </p>
        </div>

        {/* Narrative Workspace split columns */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          
          {/* Left Column: Highly Tactile Tab Selection Switches */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 px-1 mb-2">
              <Sparkles className="h-4 w-4 text-[#00FFCC]" />
              <span className="font-mono text-[10px] tracking-widest text-slate-450 font-black uppercase">{t.experienceTitleInteractive}</span>
            </div>
            {jobs.map((job) => {
              const isActive = activeJob === job.id;
              return (
                <button
                  key={job.id}
                  onClick={() => setActiveJob(job.id)}
                  onMouseMove={handleMouseMove}
                  className={`w-full p-6.5 rounded-[24px] border text-left flex items-start gap-4 transition-all duration-300 relative overflow-hidden group cursor-pointer spotlight-card ${
                    isActive
                      ? isDark 
                        ? "bg-slate-900/85 border-[#00FFCC]/55 shadow-[0_15px_40px_rgba(0,255,204,0.06)]" 
                        : "bg-[#FFFFFF] border-emerald-400 shadow-xl"
                      : isDark 
                        ? "bg-[#0b0c10]/40 border-white/[0.04] hover:bg-white/[0.06]" 
                        : "bg-[#FFFFFF]/70 border-slate-200/50 hover:bg-[#FFFFFF] hover:shadow-xs"
                  }`}
                >
                  {/* Left edge dynamic lighting strip */}
                  {isActive && (
                    <motion.span 
                      layoutId="activeExperienceStrip"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00FFCC] via-teal-500 to-transparent" 
                    />
                  )}

                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    isActive 
                      ? isDark ? "bg-[#00FFCC]/10 text-[#00FFCC] scale-105" : "bg-emerald-50 text-emerald-600 scale-105"
                      : isDark ? "bg-white/[0.03] text-slate-400" : "bg-slate-100/80 text-slate-500"
                  }`}>
                    {job.icon}
                  </div>

                  <div className={`flex-grow ${alignClass}`}>
                    <h3 className={`font-black text-base leading-snug mb-1.5 transition-colors ${
                      isActive 
                        ? isDark ? "text-[#00FFCC]" : "text-emerald-800"
                        : isDark ? "text-slate-200" : "text-slate-800"
                    }`}>
                      {job.title}
                    </h3>
                    <p className={`text-xs font-bold font-mono tracking-wide mb-3 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {job.company}
                    </p>

                    <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider font-extrabold text-gray-550 uppercase">
                      <Calendar className="h-3.5 w-3.5 text-[#00FFCC]" />
                      <span>{job.date}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Right Column: Narrative Milestones Display View */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {jobs.map((job) => {
                if (job.id !== activeJob) return null;
                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, scale: 0.96, x: 25 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.96, x: -25 }}
                    transition={{ type: "spring", stiffness: 105, damping: 18 }}
                    onMouseMove={handleMouseMove}
                    className={`p-8 sm:p-10 rounded-[32px] border transition-all duration-300 spotlight-card shadow-2xl relative ${
                      isDark 
                        ? "glass-panel-dark border-white/[0.05] hover:border-[#00FFCC]/35" 
                        : "glass-panel-light border-slate-205 hover:border-emerald-400"
                    }`}
                  >
                    <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none bg-gradient-to-tr from-transparent via-[#00FFCC]/[0.012] to-[#00FFCC]/[0.035]" />

                    {/* Card Title Banner */}
                    <div className={`flex flex-col sm:flex-row items-start justify-between border-b border-white/[0.05] pb-6 mb-8 ${alignClass}`}>
                      <div className="mb-4 sm:mb-0">
                        <span className="font-mono text-[9px] tracking-[0.25em] text-[#00FFCC] uppercase font-black block mb-2">
                          {t.experienceOperationalSubtitle}
                        </span>
                        <h4 className={`font-display text-2xl sm:text-3xl font-black tracking-tight leading-none ${
                          isDark ? "text-white" : "text-slate-900 font-extrabold"
                        }`}>
                          {job.title}
                        </h4>
                        <span className="text-xs text-[#00FFCC] font-mono font-black block mt-2 tracking-widest uppercase">
                          {job.company}
                        </span>
                      </div>
                      <span className={`inline-flex items-center px-4 py-2 rounded-xl text-[10px] font-mono font-black tracking-widest border uppercase ${
                        isDark 
                          ? "bg-white/[0.02] text-slate-350 border-white/[0.06]" 
                          : "bg-white border-slate-200 text-slate-700 shadow-sm"
                      }`}>
                        {job.date}
                      </span>
                    </div>

                    {/* Integrated Metric Badges for Enterprise Feel */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className={`p-4 rounded-xl border text-center ${
                        isDark ? "bg-[#050508]/60 border-white/[0.04]" : "bg-slate-50 border-slate-150"
                      }`}>
                        <span className="block text-[8px] font-mono text-gray-500 tracking-wider mb-1 uppercase font-bold">Performance Yield</span>
                        <span className={`text-sm font-mono font-black ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                          {job.stats.output}
                        </span>
                      </div>
                      <div className={`p-4 rounded-xl border text-center ${
                        isDark ? "bg-[#050508]/60 border-white/[0.04]" : "bg-slate-50 border-slate-150"
                      }`}>
                        <span className="block text-[8px] font-mono text-gray-500 tracking-wider mb-1 uppercase font-bold">Security Standard</span>
                        <span className={`text-sm font-mono font-black ${isDark ? "text-[#00FFCC]" : "text-teal-700"}`}>
                          {job.stats.security}
                        </span>
                      </div>
                      <div className={`p-4 rounded-xl border text-center ${
                        isDark ? "bg-[#050508]/60 border-white/[0.04]" : "bg-slate-50 border-slate-150"
                      }`}>
                        <span className="block text-[8px] font-mono text-gray-500 tracking-wider mb-1 uppercase font-bold">Delivery Scope</span>
                        <span className={`text-sm font-mono font-black ${isDark ? "text-cyan-400" : "text-cyan-700"}`}>
                          {job.stats.tickets}
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points Accomplishment Details */}
                    <div className="space-y-6 mb-10">
                      {job.points.map((point, index) => (
                        <div key={index} className={`flex items-start gap-4 ${layoutClass}`}>
                          <div className="h-6 w-6 rounded-lg flex items-center justify-center bg-[#00FFCC]/15 text-[#00FFCC] flex-shrink-0 mt-0.5">
                            <ChevronRight className="h-4.5 w-4.5 stroke-[3.5]" />
                          </div>
                          <p className={`text-base font-light leading-relaxed tracking-normal ${alignClass} ${
                            isDark ? "text-slate-350" : "text-slate-600 font-normal"
                          }`}>
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Integrated skills footer */}
                    <div className="pt-6 border-t border-white/[0.05] text-left w-full">
                      <span className="block text-[9px] font-mono tracking-[0.25em] text-gray-400 font-black mb-4 uppercase">
                        {t.experienceKeySkillsLabel}
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {job.skills.map((skill, index) => (
                          <span
                            key={index}
                            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition-colors ${
                              isDark 
                                ? "bg-white/[0.02] border-white/[0.06] text-slate-300 hover:border-[#00FFCC]/20 hover:text-white" 
                                : "bg-[#FFFFFF] border-slate-200 text-slate-600 hover:border-emerald-350 hover:text-emerald-800 shadow-sm"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
