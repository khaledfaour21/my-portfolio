import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Globe, Check, Download, Menu, X, ChevronDown, Award } from "lucide-react";
import { LanguageCode } from "../types";
import { translations } from "../translations";

interface Props {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

const languages: { code: LanguageCode; name: string; flag: string; label: string }[] = [
  { code: "en", name: "English", flag: "🇬🇧", label: "EN" },
  { code: "ar", name: "العربية", flag: "🇸🇾", label: "AR" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", label: "DE" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱", label: "NL" }
];

export default function ThemeLanguageControls({ language, setLanguage, isDark, setIsDark }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: t.navAbout },
    { id: "experience", label: t.navExperience },
    { id: "skills", label: t.navSkills },
    { id: "projects", label: t.navProjects },
    { id: "contact", label: t.navContact }
  ];

  const triggerDownload = () => {
    const resumeText = `
KHALED FAOUR - Informatics/Communications Engineer & MBA Candidate
Email: khaledfaour718@gmail.com | Phone: +963 938 796 079
Aleppo, Syria | GitHub: https://github.com/khaledfaour21 | LinkedIn: https://www.linkedin.com/in/khaled-faour-eng

EDUCATION:
- Master of Business Administration (SVU) | 2025 - 2027
- Bachelor in Informatics & Communications Engineering (EPU) | 2020 - 2025

EXPERIENCE:
- Frontend Developer Intern (AI Solutions, Russia - Remote) | 6 Months
- Software Engineering Trainee (VibeReach, Aleppo) | 3 Months

CORE SKILLS:
React, Next.js, TypeScript, Tailwind CSS, Python (Django), Node.js, C#, SQL, Prisma, Git.
    `.trim();

    const blob = new Blob([resumeText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Khaled_Faour_Resume.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  const dir = language === "ar" ? "rtl" : "ltr";
  const selectLeftClass = language === "ar" ? "left-0" : "right-0";

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 border-b ${
      isDark 
        ? "bg-[#050505]/40 border-white/[0.04] backdrop-blur-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.4)]" 
        : "bg-white/30 border-white/[0.4] backdrop-blur-[40px] shadow-[0_10px_30px_rgba(31,38,135,0.03)]"
    }`}>
      {/* Visual edge flare glow */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r via-cyan-500/10 to-transparent ${
        isDark ? "from-cyber-neon/15" : "from-emerald-400/25"
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between" dir={dir}>
        
        {/* Logo and Brand */}
        <motion.div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-col items-start justify-center cursor-pointer group"
        >
          <span className={`font-display italic text-2xl font-black tracking-tight leading-none ${
            isDark 
              ? "text-white group-hover:text-cyber-neon transition-colors duration-300" 
              : "text-slate-900 group-hover:text-emerald-700 transition-colors duration-300"
          }`}>
            K.Faour
          </span>
          <span className={`text-[8px] font-mono uppercase tracking-[0.3em] leading-none mt-2 transition-all duration-300 ${
            isDark ? "text-white/40 group-hover:text-white/60" : "text-slate-500 group-hover:text-slate-800"
          }`}>
            Creative Technology & Management
          </span>
        </motion.div>

        {/* Desktop Navigation - Ultra Clean & Elegant */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-mono text-xs uppercase tracking-widest transition-all relative py-2 cursor-pointer group pb-1 font-semibold ${
                isDark ? "text-slate-400 hover:text-cyber-neon" : "text-slate-600 hover:text-emerald-700"
              }`}
            >
              <span>{item.label}</span>
              <span className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-350 ease-out group-hover:w-full ${
                isDark ? "bg-cyber-neon" : "bg-emerald-600"
              }`} />
            </button>
          ))}
        </nav>

        {/* System Controls */}
        <div className="hidden md:flex items-center gap-6">
          
          {/* Tactile Segment Control - Apple Designer Level */}
          <div className={`flex rounded-full p-1 border relative transition-all duration-500 ${
            isDark 
              ? "bg-[#0b0c10]/80 border-white/[0.05] shadow-inner" 
              : "bg-slate-100/80 border-slate-200/60 shadow-inner"
          }`}>
            <button
              onClick={() => setIsDark(false)}
              className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer z-10 ${
                !isDark 
                  ? "text-emerald-900 font-extrabold" 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {!isDark && (
                <motion.div 
                  layoutId="activeThemeBg" 
                  className="absolute inset-0 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <Sun className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setIsDark(true)}
              className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer z-10 ${
                isDark 
                  ? "text-cyber-neon font-extrabold" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {isDark && (
                <motion.div 
                  layoutId="activeThemeBg" 
                  className="absolute inset-0 bg-white/5 border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <Moon className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Premium Language Switcher */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border font-mono text-xs font-bold transition-all cursor-pointer ${
                isDark 
                  ? "border-white/[0.05] bg-white/[0.03] text-slate-200 hover:bg-white/[0.07] hover:border-white/[0.12]" 
                  : "border-slate-200 bg-[#FFFFFF]/80 text-slate-800 hover:bg-slate-50 shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
              }`}
            >
              <Globe className="h-3.5 w-3.5 text-emerald-500 animate-[spin_8s_linear_infinite]" />
              <span className="font-sans">{currentLang.flag}</span>
              <span>{currentLang.name}</span>
              <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
            </motion.button>

            <AnimatePresence>
              {dropdownOpen && (
                <>
                  <div className="fixed inset-0 z-15" onClick={() => setDropdownOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 26 }}
                    className={`absolute ${selectLeftClass} mt-3 w-52 rounded-2xl border p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 backdrop-blur-3xl ${
                      isDark 
                        ? "bg-slate-900/90 border-white/[0.08] text-white" 
                        : "bg-white/95 border-slate-200/80 text-slate-800"
                    }`}
                  >
                    <div className="px-3 py-1.5 mb-1.5 border-b border-white/[0.05] text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                      Select Region
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-all cursor-pointer font-medium ${
                          language === lang.code
                            ? isDark 
                              ? "bg-cyber-dark text-cyber-neon font-bold" 
                              : "bg-emerald-50/80 text-emerald-800 font-bold"
                            : isDark ? "hover:bg-white/[0.06] text-slate-300" : "hover:bg-slate-100/80 text-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span>{lang.flag}</span>
                          <span className="font-mono">{lang.name}</span>
                        </div>
                        {language === lang.code && <Check className="h-3.5 w-3.5 text-cyber-neon" />}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Luxury Resume Link with Interactive Glowing State */}
          <motion.button
            onClick={triggerDownload}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center gap-2 px-5 py-3.5 rounded-2xl text-xs font-bold font-mono transition-all duration-300 bg-gradient-to-r from-cyber-neon to-emerald-500 text-slate-900 shadow-[0_10px_25px_-5px_rgba(0,255,204,0.3)] hover:shadow-[0_12px_30px_rgba(0,255,204,0.45)] cursor-pointer`}
          >
            <Download className="h-3.5 w-3.5 stroke-[2.5]" />
            <span>DOWNLOAD CV</span>
          </motion.button>
        </div>

        {/* Mobile controls & toggle button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2.5 rounded-2xl border transition-all ${
              isDark ? "border-white/[0.08] text-cyber-neon bg-white/[0.04]" : "border-slate-200 text-emerald-600 bg-white shadow-2xs"
            }`}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`p-2.5 rounded-2xl border flex gap-1.5 items-center ${
              isDark ? "border-white/[0.08] text-slate-300 bg-white/[0.04]" : "border-slate-200 text-slate-700 bg-white shadow-2xs"
            }`}
          >
            <Globe className="h-4 w-4 text-emerald-500" />
            <span className="text-xs font-mono font-bold">{currentLang.label}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2.5 rounded-2xl border ${
              isDark ? "border-white/[0.08] bg-white/[0.04] text-white" : "border-slate-200 bg-white text-slate-800 shadow-2xs"
            }`}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Floating Language drop container (Mobile) */}
      <AnimatePresence>
        {dropdownOpen && (
          <div className="md:hidden">
            <div className="fixed inset-0 z-30" onClick={() => setDropdownOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`absolute right-4 mt-1.5 w-48 rounded-2xl shadow-2xl z-40 border p-1.5 ${
                isDark ? "bg-slate-900/95 border-white/[0.08] backdrop-blur-2xl" : "bg-white/95 border-slate-200/80 backend-blur-2xl"
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-colors cursor-pointer ${
                    language === lang.code
                      ? isDark ? "bg-cyber-dark text-cyber-neon" : "bg-emerald-50 text-emerald-700"
                      : isDark ? "hover:bg-white/[0.05] text-slate-300" : "hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span className="font-mono">{lang.name}</span>
                  </div>
                  {language === lang.code && <Check className="h-3.5 w-3.5 text-cyber-neon" />}
                </button>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Navigation Menu - Premium Full Depth Card */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden border-b ${
              isDark ? "bg-[#050505]/95 border-white/[0.06] text-white" : "bg-white/95 border-slate-200 text-slate-800"
            }`}
          >
            <div className="px-4 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-base font-semibold py-3 px-4 rounded-xl transition-all ${
                    isDark ? "hover:bg-white/[0.06] text-slate-300 hover:text-cyber-neon" : "hover:bg-slate-100 text-slate-700 hover:text-emerald-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-[1px] bg-white/[0.05] my-2" />
              <button
                onClick={() => {
                  triggerDownload();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-4 rounded-xl bg-gradient-to-r from-cyber-neon to-emerald-500 text-slate-900 font-bold"
              >
                <Download className="h-4 w-4" />
                <span>{t.resumeDownload}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
