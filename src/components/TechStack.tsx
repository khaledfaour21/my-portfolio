import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Laptop, Cpu, Terminal, GitBranch, BadgeCheck, Zap, TerminalSquare, Compass, Workflow, Server, ShieldCheck, SquareTerminal, Sparkles, Network } from "lucide-react";
import { LanguageCode } from "../types";
import { translations } from "../translations";
import { skillCategories } from "../data";

interface Props {
  language: LanguageCode;
  isDark: boolean;
}

const getCategoryIcon = (index: number) => {
  switch (index) {
    case 0:
      return <Laptop className="h-5 w-5 text-[#00FFCC]" />;
    case 1:
      return <Cpu className="h-5 w-5 text-purple-400" />;
    case 2:
      return <Workflow className="h-5 w-5 text-cyan-400 animate-[spin_12s_linear_infinite]" />;
    default:
      return <TerminalSquare className="h-5 w-5 text-[#00FFCC]" />;
  }
};

const getLevelStyle = (level: string, isDark: boolean) => {
  switch (level) {
    case "Expert":
      return isDark 
        ? "bg-[#00FFCC]/10 border-[#00FFCC]/30 text-[#00FFCC] font-mono tracking-widest text-[8px]" 
        : "bg-emerald-50 border-emerald-250 text-[#0c624b] font-mono tracking-widest text-[8px]";
    case "Advanced":
      return isDark 
        ? "bg-purple-950/45 border-purple-800/30 text-purple-400 font-mono tracking-widest text-[8px]" 
        : "bg-purple-100/60 border-purple-250 text-purple-800 font-mono tracking-widest text-[8px]";
    default:
      return isDark 
        ? "bg-cyan-950/35 border-cyan-800/20 text-cyan-400 font-mono tracking-widest text-[8px]" 
        : "bg-cyan-50 border-cyan-200 text-cyan-800 font-mono tracking-widest text-[8px]";
  }
};

export default function TechStack({ language, isDark }: Props) {
  const t = translations[language];
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [activeDiagnostic, setActiveDiagnostic] = useState<string>("SYSTEM_IDLE");

  const gridContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardAnim = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 90, 
        damping: 18 
      } 
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleSkillHover = (name: string) => {
    setActiveDiagnostic(`CONNECTED_TO_NODE: [${name.toUpperCase().replace(/\s/g, "_")}]`);
  };

  const dir = language === "ar" ? "rtl" : "ltr";
  const alignClass = language === "ar" ? "text-right" : "text-left";
  const layoutAlign = language === "ar" ? "flex-row-reverse" : "flex-row";

  return (
    <section 
      id="skills"
      dir={dir}
      className={`py-32 px-4 md:px-8 relative overflow-hidden border-b transition-colors duration-500 ${
        isDark ? "bg-[#050508] border-white/[0.04]" : "bg-white/80 border-slate-200"
      }`}
    >
      {/* Decorative vertical alignment gridline */}
      <div className="absolute top-0 right-20 w-[1.5px] h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Immersive Header Design (Inspired by Raycast) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className={`lg:col-span-7 ${alignClass}`}>
            <div className="flex items-center gap-2 mb-3">
              <Network className="h-4 w-4 text-[#00FFCC]" />
              <span className="font-mono text-xs font-black uppercase tracking-[0.25em] text-[#00FFCC]">
                {t.techStackHeadingCategory}
              </span>
            </div>
            
            <h2 className={`font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              {language !== "ar" ? (
                <>
                  Selected <span className="italic font-black text-emerald-600 dark:text-[#00FFCC] dark:neon-glow-text font-display">Ecosystem</span>
                </>
              ) : (
                t.techStackTitle
              )}
            </h2>
            <p className={`text-lg md:text-xl font-light leading-relaxed tracking-wide max-w-2xl ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              {t.techStackSubtitle}
            </p>
          </div>

          {/* Interactive Live Architectural Status Monitor */}
          <div className="lg:col-span-5 w-full">
            <div className={`p-6 rounded-2xl border font-mono text-[10px] leading-relaxed relative overflow-hidden transition-all duration-300 ${
              isDark ? "bg-[#08090d]/80 border-white/[0.08]" : "bg-slate-50 border-slate-200"
            }`}>
              <div className="flex justify-between items-center pb-3 border-b border-white/[0.05] mb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00FFCC] animate-ping" />
                  <span className="font-bold tracking-widest text-[#00FFCC] uppercase">Live Architect Diagnostics</span>
                </div>
                <span className="text-gray-500 font-extrabold">[SECURE_TLS_256]</span>
              </div>
              <div className="space-y-1.5 font-semibold text-gray-400">
                <p className="flex items-center gap-2"><span>&gt;</span> <span className="text-cyan-400">STATE_STATUS:</span> <span>STABLE_ACTIVE</span></p>
                <p className="flex items-center gap-2"><span>&gt;</span> <span className="text-[#00FFCC]">INTERACTION_BUS:</span> <span className="font-extrabold text-white">{activeDiagnostic}</span></p>
                <p className="flex items-center gap-2"><span>&gt;</span> <span className="text-purple-400">DEPLOY_LATENCY:</span> <span>0.04ms</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Tab selectors (Apple Style) */}
        <div className="flex justify-center mb-16">
          <div className={`inline-flex rounded-full p-1 border transition-all duration-300 ${
            isDark ? "bg-black/40 border-white/[0.05]" : "bg-slate-100 border-slate-200/80 shadow-inner"
          }`}>
            {skillCategories.map((category, catIndex) => (
              <button
                key={catIndex}
                onClick={() => setSelectedCategory(catIndex)}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase transition-all tracking-wider cursor-pointer ${
                  selectedCategory === catIndex
                    ? isDark 
                      ? "bg-white/5 border border-white/[0.08] text-[#00FFCC] font-black" 
                      : "bg-[#FFFFFF] border border-slate-250 text-emerald-800 shadow-md font-black"
                    : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {getCategoryIcon(catIndex)}
                <span>{category.title[language] || category.title["en"]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid Display Areas (Active selected category highlighting) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -15 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full"
          >
            {skillCategories[selectedCategory].skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => handleSkillHover(skill.name)}
                onMouseLeave={() => setActiveDiagnostic("SYSTEM_IDLE")}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl border transition-all duration-300 relative spotlight-card shadow-md flex flex-col justify-between cursor-default ${
                  isDark 
                    ? "glass-panel-dark border-white/[0.05] hover:border-[#00FFCC]/35" 
                    : "glass-panel-light border-slate-200 hover:border-emerald-400 hover:bg-white hover:shadow-lg"
                }`}
              >
                {/* Visual Glass Highlights */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none bg-gradient-to-tr from-transparent via-[#00FFCC]/[0.012] to-[#00FFCC]/[0.035]" />

                <div className={`flex items-center justify-between mb-4 ${layoutAlign}`}>
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-md flex items-center justify-center bg-emerald-500/10 text-emerald-500">
                      <BadgeCheck className="h-4.5 w-4.5" />
                    </div>
                    <span className={`font-mono text-xs font-black tracking-wide ${
                      isDark ? "text-slate-200" : "text-slate-800"
                    }`}>
                      {skill.name}
                    </span>
                  </div>

                  <span className={`inline-flex items-center px-2.5 py-1.5 rounded-full text-[8px] font-mono border font-black uppercase tracking-widest ${getLevelStyle(skill.level, isDark)}`}>
                    {skill.level === "Expert" ? t.skillLevelExpert : skill.level === "Advanced" ? t.skillLevelAdvanced : t.skillLevelIntermediate}
                  </span>
                </div>

                <div className="pt-3 border-t border-white/[0.04]">
                  <div className="flex justify-between items-center text-[9px] font-mono text-gray-500">
                    <span>SECTOR_PORT: 300{skillIndex}</span>
                    <span className="text-[#00FFCC] animate-pulse">● ACTIVE_INTEGRATION</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
