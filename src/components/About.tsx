import { MouseEvent } from "react";
import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, MapPin, ClipboardList, Shield, Zap, Compass, Sparkles, BookOpen } from "lucide-react";
import { LanguageCode } from "../types";
import { translations } from "../translations";

interface Props {
  language: LanguageCode;
  isDark: boolean;
}

export default function About({ language, isDark }: Props) {
  const t = translations[language];

  const cardsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 95, 
        damping: 18 
      } 
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const dir = language === "ar" ? "rtl" : "ltr";
  const alignClass = language === "ar" ? "text-right" : "text-left";
  const badgeAlign = language === "ar" ? "flex-row-reverse" : "flex-row";

  return (
    <section 
      id="about" 
      dir={dir}
      className={`py-32 px-4 md:px-8 relative border-t overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#050508] border-white/[0.04]" : "bg-white/90 border-slate-200"
      }`}
    >
      {/* Delicate horizontal alignment mesh borders */}
      <div className="absolute top-0 left-20 w-[1.5px] h-full bg-linear-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[15%] right-10 w-[1.5px] h-full bg-linear-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Dynamic Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Extensive Narrative Profile */}
          <div className="lg:col-span-6 flex flex-col justify-start items-start">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-[#00FFCC]" />
              <span className="font-mono text-xs font-black uppercase tracking-[0.25em] text-[#00FFCC]">
                {t.aboutHeadingCategory}
              </span>
            </div>
            
            <h2 className={`font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-8 leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              {language !== "ar" ? (
                <>
                  Creative <span className="italic font-black text-emerald-600 dark:text-[#00FFCC] dark:neon-glow-text font-display">Director</span> & Engineer
                </>
              ) : (
                t.aboutTitle
              )}
            </h2>

            <p className={`text-xl md:text-[1.4rem] font-light mb-8 leading-relaxed tracking-wide ${
              isDark ? "text-slate-200" : "text-slate-800"
            }`}>
              {t.aboutRole}
            </p>

            <p className={`text-base md:text-[1.1rem] leading-relaxed mb-10 font-light tracking-wide ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              {t.aboutBio}
            </p>

            {/* Curated Interactive System Badges */}
            <div className={`flex flex-wrap gap-4 mt-4 w-full ${language === "ar" ? "justify-end" : "justify-start"}`}>
              <div className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl text-xs font-mono font-bold transition-colors border ${
                isDark 
                  ? "bg-white/[0.02] border-white/[0.06] text-slate-300 hover:border-[#00FFCC]/20" 
                  : "bg-slate-50 border-slate-200 text-slate-800 shadow-sm"
              }`}>
                <Zap className="h-4 w-4 text-[#00FFCC]" />
                <span>{t.aboutBadgeAgile}</span>
              </div>
              <div className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl text-xs font-mono font-bold transition-colors border ${
                isDark 
                  ? "bg-white/[0.02] border-white/[0.06] text-slate-300 hover:border-[#00FFCC]/20" 
                  : "bg-slate-50 border-slate-200 text-slate-800 shadow-sm"
              }`}>
                <Compass className="h-4 w-4 text-[#00FFCC] animate-[spin_12s_linear_infinite]" />
                <span>{t.aboutBadgeBilingual}</span>
              </div>
              <div className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl text-xs font-mono font-bold transition-colors border ${
                isDark 
                  ? "bg-white/[0.02] border-white/[0.06] text-slate-300 hover:border-[#00FFCC]/20" 
                  : "bg-slate-50 border-slate-200 text-slate-800 shadow-sm"
              }`}>
                <Shield className="h-4 w-4 text-[#00FFCC]" />
                <span>{t.aboutBadgeExecutive}</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Integrity Academic Timeline (Bento Layout) */}
          <div className="lg:col-span-6 flex flex-col justify-start items-start w-full">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-[#00FFCC]" />
              <span className="font-mono text-xs font-black uppercase tracking-[0.25em] text-[#00FFCC]">
                {t.aboutEduCategory}
              </span>
            </div>
            
            <h3 className={`font-display text-3xl sm:text-4xl font-light tracking-tight mb-8 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              {t.aboutEducationTitle}
            </h3>

            <motion.div 
              variants={cardsContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8 w-full"
            >
              {/* MBA Program Block */}
              <motion.div 
                variants={cardItem}
                onMouseMove={handleMouseMove}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`p-8 rounded-[32px] relative overflow-hidden transition-all duration-350 border spotlight-card ${
                  isDark 
                    ? "glass-panel-dark border-white/[0.05] hover:border-[#00FFCC]/30 hover:shadow-[0_20px_45px_rgba(0,255,204,0.05)] group" 
                    : "glass-panel-light hover:border-emerald-400 hover:shadow-2xl hover:bg-white group"
                }`}
              >
                {/* Gloss lighting layer */}
                <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none bg-gradient-to-tr from-transparent via-[#00FFCC]/[0.01] to-[#00FFCC]/[0.04]" />
                <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00FFCC] via-teal-500 to-transparent" />
                
                <div className={`flex items-start gap-6 ${badgeAlign}`}>
                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    isDark ? "bg-white/[0.04]" : "bg-slate-100 border border-slate-200"
                  }`}>
                    <Award className="h-5.5 w-5.5 text-[#00FFCC]" />
                  </div>
                  <div className={`flex-grow ${alignClass}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <h4 className={`font-bold text-lg md:text-[1.2rem] leading-snug tracking-tight ${
                        isDark ? "text-white group-hover:text-[#00FFCC] transition-colors" : "text-slate-900 group-hover:text-emerald-800 transition-colors"
                      }`}>
                        {t.aboutEduMba}
                      </h4>
                      <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] font-mono leading-none tracking-widest uppercase border font-black ${
                        isDark 
                          ? "bg-black/40 border-[#00FFCC]/20 text-[#00FFCC]" 
                          : "bg-emerald-50 border-emerald-250 text-emerald-800"
                      }`}>
                        <span className="h-2 w-2 rounded-full bg-[#00FFCC] animate-ping" />
                        {t.aboutEduInProgress}
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs text-gray-500 font-semibold tracking-wide">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4.5 w-4.5 flex-shrink-0 text-emerald-500" />
                        <span>{t.aboutEduMbaLocation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4.5 w-4.5 flex-shrink-0 text-emerald-500" />
                        <span>{t.aboutEduMbaDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bachelor's Degree Block */}
              <motion.div 
                variants={cardItem}
                onMouseMove={handleMouseMove}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`p-8 rounded-[32px] relative overflow-hidden transition-all duration-350 border spotlight-card ${
                  isDark 
                    ? "glass-panel-dark border-white/[0.05] hover:border-[#00FFCC]/30 hover:shadow-[0_20px_45px_rgba(0,255,204,0.05)] group" 
                    : "glass-panel-light hover:border-emerald-400 hover:shadow-2xl hover:bg-white group"
                }`}
              >
                <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none bg-gradient-to-tr from-transparent via-[#00f0ff]/[0.015] to-[#00f0ff]/[0.05]" />
                <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-teal-500 via-[#00f0ff] to-transparent" />

                <div className={`flex items-start gap-6 ${badgeAlign}`}>
                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    isDark ? "bg-white/[0.04]" : "bg-slate-100 border border-slate-200"
                  }`}>
                    <GraduationCap className="h-5.5 w-5.5 text-teal-400" />
                  </div>
                  <div className={`flex-grow ${alignClass}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <h4 className={`font-bold text-lg md:text-[1.2rem] leading-snug tracking-tight ${
                        isDark ? "text-white group-hover:text-[#00FFCC] transition-colors" : "text-slate-900 group-hover:text-emerald-800 transition-colors"
                      }`}>
                        {t.aboutEduBsc}
                      </h4>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-mono leading-none tracking-widest uppercase border font-black ${
                        isDark 
                          ? "bg-white/5 border-white/10 text-slate-450" 
                          : "bg-slate-100 border-slate-200 text-slate-650"
                      }`}>
                        {t.aboutEduCompleted}
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs text-gray-500 font-semibold tracking-wide mb-5">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4.5 w-4.5 flex-shrink-0 text-teal-500" />
                        <span>{t.aboutEduBscLocation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4.5 w-4.5 flex-shrink-0 text-teal-500" />
                        <span>{t.aboutEduBscDate}</span>
                      </div>
                    </div>

                    <div className={`p-4.5 rounded-2xl border text-xs leading-relaxed space-y-2.5 ${
                      isDark ? "bg-black/40 border-white/[0.05]" : "bg-[#f8fafc] border-slate-205 shadow-inner"
                    }`}>
                      <div className="flex items-start gap-3">
                        <ClipboardList className="h-4.5 w-4.5 text-[#00FFCC] flex-shrink-0 mt-0.5" />
                        <div className={language === "ar" ? "text-right" : "text-left"}>
                          <strong className={isDark ? "text-slate-350" : "text-slate-700 font-bold"}>{t.aboutEduSpecializationLabel}</strong>
                          <span className={isDark ? "text-slate-400" : "text-slate-600"}>{t.aboutEduBscSpecialization}</span>
                        </div>
                      </div>
                      <p className="pl-7.5 font-mono text-xs font-black text-[#00FFCC] tracking-widest">
                        ★ {t.aboutEduBscGrade}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
