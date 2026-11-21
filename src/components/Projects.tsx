import { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { PortfolioImage } from "./PortfolioImage";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  CheckCircle2,
  Play,
  LayoutGrid,
} from "lucide-react";
import { LanguageCode } from "../types";
import { translations } from "../translations";
import { projectsData } from "../data";
import {
  LIVE_PROJECT_ORDER,
  LOCAL_PROJECT_ORDER,
  sortByIdOrder,
} from "../lib/projectShowcaseOrder";

interface Props {
  language: LanguageCode;
  isDark: boolean;
}

export default function Projects({ language, isDark }: Props) {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState<"live" | "local">("local");

  const handleMouseMove = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const deployedProjects = sortByIdOrder(
    projectsData.filter(
      (p) => (p.isLive || p.comingSoon) && p.id !== "datascience-10x",
    ),
    LIVE_PROJECT_ORDER,
  );
  const localProjects = sortByIdOrder(
    projectsData.filter((p) => !p.isLive && p.workRoute),
    LOCAL_PROJECT_ORDER,
  );

  const dir = language === "ar" ? "rtl" : "ltr";
  const alignClass = language === "ar" ? "text-right" : "text-left";
  const flexDir = language === "ar" ? "flex-row-reverse" : "flex-row";

  return (
    <section 
      id="projects" 
      dir={dir}
      className={`py-32 px-4 md:px-8 relative transition-colors duration-500 overflow-hidden border-b ${
        isDark ? "bg-[#050508] border-white/[0.04]" : "bg-white/90 border-slate-205"
      }`}
    >
      {/* Background graphic elements */}
      <div className="absolute top-[30%] left-0 w-[1.5px] h-full bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Stellar Editorial Header */}
        <div className={`max-w-3xl mb-24 ${alignClass}`}>
          <div className="flex items-center gap-2 mb-3">
            <LayoutGrid className="h-4 w-4 text-[#00FFCC]" />
            <span className="font-mono text-xs font-black uppercase tracking-[0.25em] text-[#00FFCC]">
              {t.projectsHeadingCategory}
            </span>
          </div>
          
          <h2 className={`font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {language !== "ar" ? (
              <>
                Delivered <span className="italic font-black text-emerald-600 dark:text-[#00FFCC] dark:neon-glow-text font-display">Masterpieces</span>
              </>
            ) : (
              t.projectsTitle
            )}
          </h2>
          <p className={`text-lg md:text-xl font-light leading-relaxed tracking-wide ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}>
            {t.projectsSubtitle}
          </p>
        </div>

        {/* Dynamic Launch Switch Controls (Apple/Stripe Level Designer segment selector) */}
        <div className="flex justify-center mb-20">
          <div className={`inline-flex rounded-full p-1 border transition-all duration-300 ${
            isDark ? "bg-black/40 border-white/[0.05]" : "bg-slate-100 border-slate-200/80 shadow-inner"
          }`}>
            <button
              onClick={() => setActiveTab("live")}
              className={`flex items-center gap-2 px-6 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-wider cursor-pointer ${
                activeTab === "live"
                  ? isDark 
                    ? "bg-white/5 border border-white/[0.08] text-[#00FFCC] font-black" 
                    : "bg-[#FFFFFF] border border-slate-250 text-emerald-800 shadow-md font-black"
                  : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Globe className="h-4 w-4 text-emerald-500 animate-pulse" />
              <span>{t.projectTabLive}</span>
            </button>
            <button
              onClick={() => setActiveTab("local")}
              className={`flex items-center gap-2 px-6 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-wider cursor-pointer ${
                activeTab === "local"
                  ? isDark 
                    ? "bg-white/5 border border-white/[0.08] text-[#00FFCC] font-black" 
                    : "bg-[#FFFFFF] border border-slate-250 text-emerald-800 shadow-md font-black"
                  : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Smartphone className="h-4 w-4 text-cyan-400" />
              <span>{t.projectTabLocal}</span>
            </button>
          </div>
        </div>

        {/* Displays Panel */}
        <AnimatePresence mode="wait">
          {activeTab === "live" ? (
            <motion.div 
              key="live-projects-view"
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -20 }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full"
            >
              {deployedProjects.map((p) => (
                <div
                  key={p.id}
                  onMouseMove={handleMouseMove}
                  className={`p-8 sm:p-10 rounded-[36px] border relative overflow-hidden flex flex-col justify-between group transition-all duration-300 spotlight-card shadow-2xl ${
                    isDark 
                      ? "glass-panel-dark border-white/[0.05] hover:border-[#00FFCC]/40 hover:shadow-[0_20px_50px_rgba(0,255,204,0.05)]" 
                      : "glass-panel-light border-slate-200/90 hover:border-emerald-400 hover:shadow-2xl hover:bg-white"
                  }`}
                >
                  {/* Sheen backing */}
                  <div className="absolute inset-0 rounded-[36px] overflow-hidden pointer-events-none bg-gradient-to-tr from-transparent via-[#00FFCC]/[0.012] to-[#00FFCC]/[0.04]" />

                  <div>
                    {/* Launch Banner Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8 border-b border-white/[0.05] pb-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className={`font-display text-2xl sm:text-3xl font-black tracking-tight leading-none ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          {p.title}
                        </h3>
                        {p.comingSoon && (
                          <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-mono font-black uppercase tracking-widest border ${
                            isDark
                              ? "border-amber-400/40 bg-amber-400/10 text-amber-300"
                              : "border-amber-300 bg-amber-50 text-amber-800"
                          }`}>
                            {t.projectComingSoon}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {p.githubUrl && (
                          <motion.a
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                            href={p.githubUrl}
                            target="_blank"
                            rel="referrer noopener"
                            className={`inline-flex items-center gap-1.5 px-4.5 py-3 rounded-xl border text-[10px] font-mono font-bold uppercase tracking-widest transition-all ${
                              isDark 
                                ? "border-white/[0.08] bg-white/[0.02] text-slate-300 hover:text-white hover:border-[#00FFCC]/20" 
                                : "border-slate-205 text-slate-650 bg-slate-50 hover:text-slate-900 hover:bg-slate-100 shadow-sm"
                            }`}
                          >
                            <Github className="h-3.5 w-3.5" />
                            <span>CODE</span>
                          </motion.a>
                        )}
                        {p.liveUrl && !p.comingSoon && (
                          <motion.a
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                            href={p.liveUrl}
                            target="_blank"
                            rel="referrer noopener"
                            className={`inline-flex items-center gap-1.5 px-4.5 py-3 rounded-xl border text-[10px] font-mono font-black uppercase tracking-widest transition-all ${
                              isDark 
                                ? "border-[#00FFCC]/35 bg-[#00FFCC]/10 text-[#00FFCC] hover:bg-[#00FFCC]/18 hover:border-[#00FFCC]/50" 
                                : "border-emerald-200 bg-[#eefdf6] text-emerald-800 hover:bg-[#d9f9e6] hover:border-emerald-300 shadow-md"
                            }`}
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>DEMO</span>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <p className={`text-base leading-relaxed mb-6 font-light tracking-wide ${isDark ? "text-slate-300" : "text-slate-600 font-normal"}`}>
                      {p.description[language] || p.description["en"]}
                    </p>

                    <div className={`p-5 rounded-2xl mb-8 border ${
                      isDark ? "bg-black/40 border-white/[0.05]" : "bg-slate-50/80 border-slate-200/40"
                    }`}>
                      <p className={`text-xs font-light leading-relaxed tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        {p.longDescription[language] || p.longDescription["en"]}
                      </p>
                    </div>

                    {/* Architectural Feature Pillars */}
                    <div className="space-y-3.5 mb-10">
                      <span className="block text-[8.5px] font-mono tracking-[0.25em] text-[#00FFCC] font-black uppercase mb-3">
                        {t.projectsLiveHighlightLabel}
                      </span>
                      {p.highlights?.[language]?.map((hl, i) => (
                        <div key={i} className={`flex items-center gap-3.5 ${flexDir}`}>
                          <div className="h-4.5 w-4.5 rounded-full flex items-center justify-center bg-[#00FFCC]/15 text-[#00FFCC] flex-shrink-0">
                            <CheckCircle2 className="h-3.5 w-3.5 stroke-[2.5]" />
                          </div>
                          <span className={`text-xs md:text-sm font-semibold tracking-wide ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Badges Floor */}
                  <div className="pt-6 border-t border-white/[0.05] flex flex-wrap gap-2">
                    {p.tech.map((techItem, idx) => (
                      <span
                        key={idx}
                        className={`px-3.5 py-2 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider ${
                          isDark ? "bg-white/[0.03] text-slate-400 border border-white/[0.06]" : "bg-white text-slate-650 border border-slate-200/50 shadow-sm"
                        }`}
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="local-projects-view"
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -20 }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full"
            >
              {localProjects.map((p) => (
                <div
                  key={p.id}
                  onMouseMove={handleMouseMove}
                  className={`p-8 sm:p-10 rounded-[36px] border relative overflow-hidden flex flex-col justify-between group transition-all duration-300 spotlight-card shadow-2xl ${
                    isDark
                      ? "glass-panel-dark border-white/[0.05] hover:border-[#00FFCC]/40"
                      : "glass-panel-light border-slate-200/90 hover:border-emerald-400"
                  }`}
                >
                  {p.images?.[0] && (
                    <PortfolioImage
                      src={p.images[0]}
                      alt=""
                      variant="logo"
                      isDark={isDark}
                      className="portfolio-card-logo-frame"
                    />
                  )}
                  <h3 className={`font-display text-2xl sm:text-3xl font-black mb-4 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {p.title}
                  </h3>
                  <p className={`text-base leading-relaxed mb-6 font-light ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {p.description[language] || p.description.en}
                  </p>
                  {p.workRoute && (
                    <Link
                      to={p.workRoute}
                      className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-mono text-xs font-black uppercase tracking-widest transition-all ${
                        isDark
                          ? "bg-[#00FFCC]/15 text-[#00FFCC] border border-[#00FFCC]/30"
                          : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      }`}
                    >
                      <Play className="h-4 w-4" />
                      {t.projectInteractiveDemo}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
