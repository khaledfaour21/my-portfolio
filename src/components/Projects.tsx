import { useState, FormEvent, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ExternalLink, Github, Globe, Smartphone, CheckCircle2, ChevronRight, 
  Send, ThumbsUp, MapPin, Sparkles, Server, Terminal, Layers, Star, Play, Compass, Activity, ShieldCheck, Database, LayoutGrid
} from "lucide-react";
import { LanguageCode } from "../types";
import { translations } from "../translations";
import { projectsData } from "../data";

interface Props {
  language: LanguageCode;
  isDark: boolean;
}

export default function Projects({ language, isDark }: Props) {
  const t = translations[language];
  const getLocalizedLocation = (loc: string) => {
    if (language === "ar") {
      if (loc === "Al-Jamilah") return "الجميلية";
      if (loc === "Bustan Al-Qasr") return "بستان القصر";
      if (loc === "Al-Shahba") return "الشهباء";
      if (loc === "Al-Mogambo") return "الموكامبو";
    }
    return loc;
  };
  const [activeTab, setActiveTab] = useState<"live" | "local">("live");
  
  // States for Local Project 1: School Management System ERP Emulator
  const [schoolRole, setSchoolRole] = useState<"admin" | "teacher" | "student" | "parent">("admin");
  const [studentGrades, setStudentGrades] = useState({ math: 88, science: 90, physics: 84 });
  
  // States for Local Project 2: Aleppo Civic Platform Map Emulator
  const [civicView, setCivicView] = useState<"feed" | "submit">("feed");
  const [complaints, setComplaints] = useState([
    { id: 1, title: "Al-Jamilah Park Rehabilitation", votes: 142, status: "In Progress", type: "Initiative", location: "Al-Jamilah" },
    { id: 2, title: "Lighting Restoration in Bustan Al-Qasr", votes: 94, status: "Pending", type: "Complaint", location: "Bustan Al-Qasr" },
    { id: 3, title: "Main Water Pipeline Repair near Al-Shahba", votes: 215, status: "Resolved", type: "Complaint", location: "Al-Shahba" }
  ]);
  const [newComplaintTitle, setNewComplaintTitle] = useState("");
  const [newComplaintLocation, setNewComplaintLocation] = useState("Al-Mogambo");
  const [newComplaintType, setNewComplaintType] = useState("Complaint");

  const handleGradeChange = (subject: "math" | "science" | "physics", val: number) => {
    setStudentGrades(prev => ({
      ...prev,
      [subject]: Math.max(0, Math.min(100, val))
    }));
  };

  const handleVote = (id: number) => {
    setComplaints(prev => prev.map(c => c.id === id ? { ...c, votes: c.votes + 1 } : c));
  };

  const handleAddComplaint = (e: FormEvent) => {
    e.preventDefault();
    if (!newComplaintTitle.trim()) return;
    setComplaints(prev => [
      {
        id: Date.now(),
        title: newComplaintTitle,
        votes: 1,
        status: "Pending",
        type: newComplaintType,
        location: newComplaintLocation
      },
      ...prev
    ]);
    setNewComplaintTitle("");
    setCivicView("feed");
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const deployedProjects = projectsData.filter(p => p.isLive);
  const localProjects = projectsData.filter(p => !p.isLive);

  const calculatedGPA = ((studentGrades.math + studentGrades.science + studentGrades.physics) / 3).toFixed(1);

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
                      <h3 className={`font-display text-2xl sm:text-3xl font-black tracking-tight leading-none ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}>
                        {p.title}
                      </h3>
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
                        {p.liveUrl && (
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
              className="space-y-24 w-full"
            >
              
              {/* Product Launch 1: School Management ERP Command Hub */}
              <div 
                onMouseMove={handleMouseMove}
                className={`p-8 sm:p-12 rounded-[40px] border transition-all duration-350 spotlight-card shadow-2xl relative ${
                  isDark 
                    ? "glass-panel-dark border-white/[0.06] hover:border-[#00FFCC]/35" 
                    : "glass-panel-light border-slate-200 hover:border-emerald-400 hover:bg-white"
                }`}
              >
                <div className="absolute inset-0 rounded-[40px] overflow-hidden pointer-events-none bg-gradient-to-tr from-transparent via-cyan-500/[0.012] to-[#00FFCC]/[0.035]" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                  
                  {/* Left Descriptive Story Column */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full relative z-10">
                    <div className="text-left">
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[10px] font-mono leading-none tracking-widest bg-emerald-500/10 text-emerald-400 font-bold uppercase border border-emerald-500/20 mb-6">
                        {t.projectsGraduationGradeLabel}
                      </div>
                      
                      <h3 className={`font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-light mb-6 leading-tight ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}>
                        {language === "ar" ? "نظام إدارة المدارس المتكامل" : "Integrated School"} <span className="italic font-black text-emerald-600 dark:text-[#00FFCC] dark:neon-glow-text font-display">{language === "ar" ? "ERP" : "Management ERP"}</span>
                      </h3>
                      <p className={`text-base leading-relaxed mb-6 font-light ${isDark ? "text-slate-300" : "text-slate-600 font-normal"}`}>
                        {localProjects[0].description[language]}
                      </p>

                      <div className={`p-5 rounded-2xl border mb-6 text-xs leading-relaxed ${
                        isDark ? "bg-black/45 border-white/[0.05] text-slate-400" : "bg-slate-50/80 border-slate-150 text-slate-600 shadow-inner"
                      }`}>
                        {localProjects[0].longDescription[language]}
                      </div>

                      <div className="text-left mb-6">
                        <span className="block text-[8.5px] font-mono tracking-[0.25em] text-[#00FFCC] font-black mb-4 uppercase">
                          {t.projectsFunctionalPillarsLabel}
                        </span>
                        {localProjects[0].highlights?.[language]?.map((hl, i) => (
                          <div key={i} className={`flex items-center gap-3 mb-3 ${flexDir}`}>
                            <div className="h-4.5 w-4.5 rounded-full flex items-center justify-center bg-[#00FFCC]/15 text-[#00FFCC] flex-shrink-0">
                              <CheckCircle2 className="h-3.5 w-3.5 stroke-[2.5]" />
                            </div>
                            <span className={`text-xs font-semibold ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                              {hl}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/[0.05] flex flex-wrap gap-2">
                      {localProjects[0].tech.map((tc, id) => (
                        <span key={id} className={`px-3 py-1.5 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider ${
                          isDark ? "bg-white/[0.03] text-slate-400 border border-white/[0.05]" : "bg-white border border-slate-200 text-slate-600 shadow-sm"
                        }`}>
                          {tc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Dynamic Interactive School Simulator Workspace */}
                  <div className="lg:col-span-7 w-full relative z-10">
                    <div className={`rounded-3xl border overflow-hidden shadow-2xl transition-all duration-300 ${
                      isDark ? "bg-[#08090d]/95 border-white/10" : "bg-white border-slate-205"
                    }`}>
                      {/* Interactive Browser Chrome Bar Header */}
                      <div className={`px-5 py-4 border-b flex items-center justify-between ${
                        isDark ? "bg-slate-900/60 border-white/[0.05]" : "bg-slate-50 border-slate-150"
                      }`}>
                        <div className="flex gap-2">
                          <span className="h-3 w-3 rounded-full bg-red-400" />
                          <span className="h-3 w-3 rounded-full bg-yellow-400" />
                          <span className="h-3 w-3 rounded-full bg-green-400" />
                        </div>
                        <span className="text-[9px] font-mono text-gray-500 font-extrabold tracking-widest">{t.projectsSimCoreSystemLabel}</span>
                        <div className="w-5 h-5 flex items-center justify-center bg-[#00FFCC]/10 rounded">
                          <Server className="h-3.5 w-3.5 text-cyan-400" />
                        </div>
                      </div>

                      {/* Selector Segment Bars inside Browser (Simulated roles) */}
                      <div className="flex border-b border-white/[0.05] bg-slate-900/10 p-3 gap-2 overflow-x-auto">
                        {(["admin", "teacher", "student", "parent"] as const).map((rl) => (
                          <button
                            key={rl}
                            onClick={() => setSchoolRole(rl)}
                            className={`px-4.5 py-2 rounded-xl text-xs font-mono font-bold tracking-widest uppercase transition-all cursor-pointer ${
                              schoolRole === rl
                                ? isDark ? "bg-[#00FFCC] text-slate-950 font-black shadow-md shadow-[#00FFCC]/15" : "bg-emerald-600 text-white font-black shadow-sm"
                                : isDark ? "text-slate-400 hover:bg-white/[0.04]" : "text-slate-650 hover:bg-slate-100"
                            }`}
                          >
                            {rl === "admin" ? (language === "ar" ? "المدير" : "Admin") : rl === "teacher" ? (language === "ar" ? "المعلم" : "Teacher") : rl === "student" ? (language === "ar" ? "الطالب" : "Student") : (language === "ar" ? "ولي الأمر" : "Parent")}
                          </button>
                        ))}
                      </div>

                      {/* Simulated Interactive Outputs */}
                      <div className="p-8 relative min-h-[350px]">
                        <AnimatePresence mode="wait">
                          {schoolRole === "admin" && (
                            <motion.div
                              key="school-admin-sim"
                              initial={{ opacity: 0, scale: 0.98, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.98, y: -10 }}
                              className={`space-y-6 ${alignClass}`}
                            >
                              <div className="flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-[#00FFCC] animate-pulse" />
                                <h4 className="font-bold text-xs text-[#00FFCC] font-mono tracking-[0.2em] uppercase">{t.projectsSimOverseerTitle}</h4>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/[0.04]" : "bg-slate-50 border-slate-150"}`}>
                                  <span className="block text-[8px] text-gray-500 font-mono tracking-wider uppercase font-black mb-1">{t.projectsSimTotalEnrolledLabel}</span>
                                  <span className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>1,240</span>
                                </div>
                                <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/[0.04]" : "bg-slate-50 border-slate-150"}`}>
                                  <span className="block text-[8px] text-gray-500 font-mono tracking-wider uppercase font-black mb-1">{t.projectsSimStaffMembersLabel}</span>
                                  <span className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>82</span>
                                </div>
                                <div className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/[0.04]" : "bg-slate-50 border-slate-150"}`}>
                                  <span className="block text-[8px] text-gray-500 font-mono tracking-wider uppercase font-black mb-1">{t.projectsSimNetworkGateLabel}</span>
                                  <span className="text-xs font-mono text-[#00FFCC] flex items-center gap-1 uppercase tracking-wider leading-none mt-1 font-black">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#00FFCC] animate-ping" />
                                    {t.projectsSimGateSecureLabel}
                                  </span>
                                </div>
                              </div>
                              
                              <div className={`p-5 rounded-2xl border ${isDark ? "bg-white/[0.02] border-white/[0.04]" : "bg-slate-50 border-slate-205"}`}>
                                <h5 className="font-bold text-xs mb-3 font-mono tracking-wider uppercase text-slate-400">{t.projectsSimAccessTrailTitle}</h5>
                                <div className="space-y-2 text-[10px] font-mono text-gray-500 font-semibold leading-relaxed">
                                  <p className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#00FFCC]" />
                                    <span>{t.projectsSimLog1}</span>
                                  </p>
                                  <p className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                    <span>{t.projectsSimLog2}</span>
                                  </p>
                                  <p className="flex items-center gap-2 text-[#00FFCC] font-black">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#00FFCC] animate-ping" />
                                    <span>{t.projectsSimLog3}</span>
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {schoolRole === "teacher" && (
                            <motion.div
                              key="school-teacher-sim"
                              initial={{ opacity: 0, scale: 0.98, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.98, y: -10 }}
                              className={`space-y-6 ${alignClass}`}
                            >
                              <div className="flex items-center gap-2">
                                <Terminal className="h-4 w-4 text-[#00FFCC]" />
                                <h4 className="font-bold text-xs text-[#00FFCC] font-mono tracking-[0.2em] uppercase">{t.projectsSimGradingTitle}</h4>
                              </div>
                              <p className="text-xs text-slate-500 font-mono tracking-wider">{t.projectsSimGradingSubtitle}</p>
                              
                              <div className="space-y-4">
                                <div className={`p-4 rounded-xl border ${
                                  isDark ? "bg-black/30 border-white/[0.04]" : "bg-slate-100/50 border-slate-200/50 shadow-inner"
                                }`}>
                                  <div className="flex justify-between text-xs mb-2">
                                    <span className="font-bold font-mono text-gray-400">{t.projectsSimMathTitle}</span>
                                    <span className={isDark ? "font-black text-[#00FFCC] font-mono" : "font-black text-emerald-700 font-mono"}>{studentGrades.math} / 100</span>
                                  </div>
                                  <input 
                                    type="range" 
                                    min="0" 
                                    max="100" 
                                    value={studentGrades.math}
                                    onChange={(e) => handleGradeChange("math", Number(e.target.value))}
                                    className={`w-full h-1 rounded-lg appearance-none cursor-pointer ${
                                      isDark ? "bg-white/10 accent-[#00FFCC]" : "bg-slate-200 accent-emerald-600"
                                    }`}
                                  />
                                </div>

                                <div className={`p-4 rounded-xl border ${
                                  isDark ? "bg-black/30 border-white/[0.04]" : "bg-slate-100/50 border-slate-200/50 shadow-inner"
                                }`}>
                                  <div className="flex justify-between text-xs mb-2">
                                    <span className="font-bold font-mono text-gray-400 uppercase">{t.projectsSimSoftwareTitle}</span>
                                    <span className={isDark ? "font-black text-[#00FFCC] font-mono" : "font-black text-emerald-700 font-mono"}>{studentGrades.science} / 100</span>
                                  </div>
                                  <input 
                                    type="range" 
                                    min="0" 
                                    max="100" 
                                    value={studentGrades.science}
                                    onChange={(e) => handleGradeChange("science", Number(e.target.value))}
                                    className={`w-full h-1 rounded-lg appearance-none cursor-pointer ${
                                      isDark ? "bg-white/10 accent-[#00FFCC]" : "bg-slate-200 accent-emerald-600"
                                    }`}
                                  />
                                </div>

                                <div className={`p-4 rounded-xl border ${
                                  isDark ? "bg-black/30 border-white/[0.04]" : "bg-slate-100/50 border-slate-200/50 shadow-inner"
                                }`}>
                                  <div className="flex justify-between text-xs mb-2">
                                    <span className="font-bold font-mono text-gray-400 uppercase">{t.projectsSimNetworkingTitle}</span>
                                    <span className={isDark ? "font-black text-[#00FFCC] font-mono" : "font-black text-emerald-700 font-mono"}>{studentGrades.physics} / 100</span>
                                  </div>
                                  <input 
                                    type="range" 
                                    min="0" 
                                    max="100" 
                                    value={studentGrades.physics}
                                    onChange={(e) => handleGradeChange("physics", Number(e.target.value))}
                                    className={`w-full h-1 rounded-lg appearance-none cursor-pointer ${
                                      isDark ? "bg-white/10 accent-[#00FFCC]" : "bg-slate-200 accent-emerald-600"
                                    }`}
                                  />
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {schoolRole === "student" && (
                            <motion.div
                              key="school-student-sim"
                              initial={{ opacity: 0, scale: 0.98, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.98, y: -10 }}
                              className={`space-y-6 ${alignClass}`}
                            >
                              <div className="flex items-center gap-2">
                                <Layers className="h-4 w-4 text-[#00FFCC]" />
                                <h4 className="font-bold text-xs text-[#00FFCC] font-mono tracking-[0.2em] uppercase">{t.projectsSimPortalTitle}</h4>
                              </div>
                              <div className={`p-6 rounded-2xl border ${isDark ? "bg-white/[0.02] border-white/[0.04]" : "bg-slate-50 border-slate-150 shadow-inner"}`}>
                                <div className="flex justify-between items-center mb-5">
                                  <div>
                                    <span className={`block font-bold text-lg ${isDark ? "text-white" : "text-slate-850"}`}>Khaled Faour</span>
                                    <span className="text-[10px] font-mono text-gray-400">{t.projectsSimStudentSub}</span>
                                  </div>
                                  <div className="text-right">
                                    <span className="block text-[8px] text-gray-400 font-mono font-black tracking-widest uppercase">{t.projectsSimGPAPercentileLabel}</span>
                                    <span className="text-lg font-black font-mono text-[#00FFCC]">{calculatedGPA}%</span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <div className="flex justify-between text-xs text-gray-400 font-semibold tracking-wide">
                                    <span>{t.projectsSimGradAssessmentLabel}</span>
                                    <span className="text-[#00FFCC] font-black font-mono">86 / 100</span>
                                  </div>
                                  <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/[0.04]">
                                    <div className="bg-gradient-to-r from-[#00FFCC] via-cyan-400 to-emerald-500 h-2 rounded-full" style={{ width: "86%" }} />
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {schoolRole === "parent" && (
                            <motion.div
                              key="school-parent-sim"
                              initial={{ opacity: 0, scale: 0.98, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.98, y: -10 }}
                              className={`space-y-6 ${alignClass}`}
                            >
                              <div className="flex items-center gap-2">
                                <Star className="h-4 w-4 text-[#00FFCC]" />
                                <h4 className="font-bold text-xs text-[#00FFCC] font-mono tracking-[0.2em] uppercase">{t.projectsSimGuardianConsoleTitle}</h4>
                              </div>
                              <div className={`p-6 rounded-2xl border ${isDark ? "bg-white/[0.02] border-white/[0.04]" : "bg-slate-50 border-slate-150"}`}>
                                <span className="block text-[8.5px] text-gray-400 font-mono mb-3 tracking-widest font-black uppercase">{t.projectsSimTuitionDispLabel}</span>
                                <div className="flex justify-between items-center mb-2">
                                  <span className={`text-xs font-bold ${isDark ? "text-slate-350" : "text-slate-700"}`}>{t.projectsSimTuitionSemesterLabel}</span>
                                  <span className="text-[10px] font-mono font-black text-[#00FFCC] tracking-wider uppercase bg-[#00FFCC]/10 px-2.5 py-1 rounded-md border border-[#00FFCC]/20">{t.projectsSimPaidLabel}</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px] pb-4 border-b border-white/[0.04] mb-4 text-gray-500 font-mono font-semibold">
                                  <span>{t.projectsSimLedgerIDLabel}</span>
                                  <span>{t.projectsSimSSlSecuredLabel}</span>
                                </div>

                                <div className="text-left font-light leading-relaxed text-sm">
                                  <p className={`${isDark ? "text-slate-400" : "text-slate-650"}`}>
                                    <strong className="text-emerald-500 font-bold font-mono text-xs block mb-1">{t.projectsSimFacultyNoteLabel}</strong>
                                    {t.projectsSimFacultyNoteVal}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

              {/* Product Launch 2: Aleppo Civic Coordination Command Console */}
              <div 
                onMouseMove={handleMouseMove}
                className={`p-8 sm:p-12 rounded-[40px] border transition-all duration-350 spotlight-card shadow-2xl relative ${
                  isDark 
                    ? "glass-panel-dark border-white/[0.06] hover:border-[#00FFCC]/35" 
                    : "glass-panel-light border-slate-200 hover:border-emerald-400 hover:bg-white"
                }`}
              >
                <div className="absolute inset-0 rounded-[40px] overflow-hidden pointer-events-none bg-gradient-to-tr from-transparent via-[#00f0ff]/[0.012] to-[#00FFCC]/[0.035]" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                  
                  {/* Interactive App emulator screen first */}
                  <div className="lg:col-span-7 w-full order-last lg:order-first relative z-10">
                    <div className={`rounded-3xl border overflow-hidden shadow-2xl transition-all duration-300 ${
                      isDark ? "bg-[#08090d]/95 border-white/10" : "bg-white border-slate-205"
                    }`}>
                      {/* Chrome Browser Headers layout */}
                      <div className={`px-5 py-4 border-b flex items-center justify-between ${
                        isDark ? "bg-slate-900/60 border-white/[0.05]" : "bg-slate-50 border-slate-150"
                      }`}>
                        <div className="flex gap-2">
                          <span className="h-3 w-3 rounded-full bg-red-400" />
                          <span className="h-3 w-3 rounded-full bg-yellow-400" />
                          <span className="h-3 w-3 rounded-full bg-green-400" />
                        </div>
                        <span className="text-[9px] font-mono text-gray-500 font-extrabold tracking-widest">{t.projectsSimCivicCoreSystemLabel}</span>
                        <div className="w-5 h-5 flex items-center justify-center bg-[#00FFCC]/10 rounded">
                          <Compass className="h-3.5 w-3.5 text-[#00FFCC] animate-[spin_8s_linear_infinite]" />
                        </div>
                      </div>

                      {/* Mode tab selectors segments */}
                      <div className="flex border-b border-white/[0.05] bg-slate-900/10 p-3 justify-between items-center">
                        <div className="flex gap-2.5">
                          <button
                            onClick={() => setCivicView("feed")}
                            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-widest uppercase transition-all cursor-pointer ${
                              civicView === "feed"
                                ? isDark ? "bg-[#00FFCC] text-slate-950 font-black" : "bg-emerald-600 text-white font-black"
                                : isDark ? "text-slate-400 hover:bg-white/[0.04]" : "text-slate-650 hover:bg-slate-100"
                            }`}
                          >
                            {t.projectsSimLiveFeedTab}
                          </button>
                          <button
                            onClick={() => setCivicView("submit")}
                            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-widest uppercase transition-all cursor-pointer ${
                              civicView === "submit"
                                ? isDark ? "bg-[#00FFCC] text-slate-950 font-black" : "bg-emerald-600 text-white font-black"
                                : isDark ? "text-slate-400 hover:bg-white/[0.04]" : "text-slate-650 hover:bg-slate-100"
                            }`}
                          >
                            {t.projectsSimSubmitTab}
                          </button>
                        </div>
                      </div>

                      {/* Display View Panels */}
                      <div className="p-8 relative min-h-[350px]">
                        <AnimatePresence mode="wait">
                          {civicView === "feed" ? (
                            <motion.div
                              key="civic-feed-sim"
                              initial={{ opacity: 0, scale: 0.98, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.98, y: -10 }}
                              className="space-y-6 text-left"
                            >
                              <div className="flex justify-between items-center select-none">
                                <h4 className="font-bold text-xs text-[#00FFCC] font-mono tracking-[0.2em] uppercase">{t.projectsSimActiveCivicTitle}</h4>
                                <span className="text-[10px] text-gray-500 font-mono font-bold">{t.projectsSimLiveTrackingLabel}</span>
                              </div>

                              <div className="space-y-4">
                                {complaints.map((c) => (
                                  <div 
                                    key={c.id} 
                                    className={`p-4.5 rounded-2xl border flex justify-between items-center transition-all duration-300 ${
                                      isDark ? "bg-black/20 border-white/[0.04] hover:border-[#00FFCC]/25" : "bg-white border-slate-150 hover:border-slate-250 hover:shadow-xs"
                                    }`}
                                  >
                                    <div className="space-y-2 pr-4">
                                      <div className={`flex items-center gap-2 ${flexDir}`}>
                                        <span className={`inline-block px-2.5 py-1 rounded-md text-[8px] font-black uppercase font-mono tracking-wider ${
                                          c.type === "Initiative"
                                            ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                                            : "bg-red-500/10 text-red-400 border border-red-550/20"
                                        }`}>
                                          {c.type === "Initiative" ? (language === "ar" ? "مبادارة أهلية" : "Initiative") : (language === "ar" ? "شكوى عامة" : "Complaint")}
                                        </span>
                                        <span className={`inline-block px-2 py-1 rounded-md text-[8px] font-black font-mono tracking-wider uppercase ${
                                          c.status === "Resolved"
                                            ? "bg-emerald-500/20 text-emerald-400"
                                            : c.status === "In Progress"
                                              ? "bg-cyan-500/20 text-cyan-400"
                                              : "bg-yellow-500/20 text-yellow-400"
                                        }`}>
                                          {c.status === "Resolved" ? (language === "ar" ? "تم الحل" : "Resolved") : c.status === "In Progress" ? (language === "ar" ? "قيد التنفيذ" : "In Progress") : (language === "ar" ? "قيد الانتظار" : "Pending")}
                                        </span>
                                      </div>
                                      
                                      <p className={`font-bold text-sm md:text-base ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                                        {c.title}
                                      </p>
                                      
                                      <div className={`flex items-center gap-1.5 text-[10px] text-gray-500 font-mono font-bold ${flexDir}`}>
                                        <MapPin className="h-3.5 w-3.5 text-[#00FFCC]" />
                                        <span>{t.projectsSimDistrictLabel} {getLocalizedLocation(c.location)}</span>
                                      </div>
                                    </div>

                                    <button
                                      onClick={() => handleVote(c.id)}
                                      onMouseMove={handleMouseMove}
                                      className={`flex flex-col items-center justify-center p-3 rounded-2xl border gap-1.5 min-w-[55px] cursor-pointer transition-all active:scale-95 ${
                                        isDark 
                                          ? "bg-white/[0.02] border-white/[0.04] hover:border-[#00FFCC]/30 text-slate-350 hover:text-[#00FFCC]" 
                                          : "bg-slate-50 border-slate-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-800 shadow-sm"
                                      }`}
                                    >
                                      <ThumbsUp className="h-4 w-4" />
                                      <span className="text-xs font-mono font-black leading-none">{c.votes}</span>
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="civic-submit-sim"
                              initial={{ opacity: 0, scale: 0.98, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.98, y: -10 }}
                              className="text-left max-w-md mx-auto"
                            >
                              <h4 className="font-bold text-xs text-[#00FFCC] font-mono tracking-[0.2em] mb-4 uppercase">{t.projectsSimTransmitTitle}</h4>
                              <form onSubmit={handleAddComplaint} className="space-y-4">
                                <div className="space-y-1.5">
                                  <label className="block text-[8px] font-mono text-gray-400 tracking-widest font-black uppercase">{t.projectsSimProposalLabel}</label>
                                  <input
                                    type="text"
                                    required
                                    placeholder={t.projectsSimProposalPlaceholder}
                                    value={newComplaintTitle}
                                    onChange={(e) => setNewComplaintTitle(e.target.value)}
                                    className={`w-full p-4 rounded-xl border text-sm focus:outline-hidden ${
                                      isDark 
                                        ? "bg-black/45 border-white/10 text-white focus:border-[#00FFCC]" 
                                        : "bg-[#FFFFFF] border-slate-200 text-slate-800 focus:border-emerald-500"
                                    }`}
                                  />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-1.5">
                                    <label className="block text-[8px] font-mono text-gray-400 tracking-widest font-black uppercase">{t.projectsSimDistrictOrRouteLabel}</label>
                                    <select
                                      value={newComplaintLocation}
                                      onChange={(e) => setNewComplaintLocation(e.target.value)}
                                      className={`w-full p-3.5 rounded-xl border text-xs focus:outline-hidden ${
                                        isDark ? "bg-slate-900 border-white/10 text-white" : "bg-[#FFFFFF] border-slate-200 text-slate-850"
                                      }`}
                                    >
                                      <option value="Al-Jamilah">{language === "ar" ? "الجميلية" : "Al-Jamilah"}</option>
                                      <option value="Bustan Al-Qasr">{language === "ar" ? "بستان القصر" : "Bustan Al-Qasr"}</option>
                                      <option value="Al-Shahba">{language === "ar" ? "الشهباء" : "Al-Shahba"}</option>
                                      <option value="Al-Mogambo">{language === "ar" ? "الموكامبو" : "Al-Mogambo"}</option>
                                    </select>
                                  </div>

                                  <div className="space-y-1.5">
                                    <label className="block text-[8px] font-mono text-gray-400 tracking-widest font-black uppercase">{t.projectsSimRecordGroupTypeLabel}</label>
                                    <select
                                      value={newComplaintType}
                                      onChange={(e) => setNewComplaintType(e.target.value)}
                                      className={`w-full p-3.5 rounded-xl border text-xs focus:outline-hidden ${
                                        isDark ? "bg-slate-900 border-white/10 text-white" : "bg-[#FFFFFF] border-slate-200 text-slate-850"
                                      }`}
                                    >
                                      <option value="Initiative">{t.projectsSimCommunityInitiativeVal}</option>
                                      <option value="Complaint">{t.projectsSimPublicComplaintVal}</option>
                                    </select>
                                  </div>
                                </div>

                                <button
                                  type="submit"
                                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00FFCC] to-emerald-500 text-slate-950 font-bold text-xs font-mono uppercase tracking-widest hover:brightness-110 flex items-center justify-center gap-2 cursor-pointer active:scale-97 shadow-[0_12px_25px_rgba(0,255,204,0.15)]"
                                >
                                  <Send className="h-4 w-4" />
                                  <span>{t.projectsSimSubmitEntryBtn}</span>
                                </button>
                              </form>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Right Descriptive story column (Civic coordinates platform) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full text-left relative z-10">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[10px] font-mono leading-none tracking-widest bg-purple-500/10 text-purple-400 font-bold uppercase border border-purple-500/20 mb-6">
                        {t.projectsSimCoFounderLabel}
                      </div>
                      
                      <h3 className={`font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-light mb-6 leading-tight ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}>
                        {language === "ar" ? "منصة حلب التفاعلية" : "Aleppo"} <span className="italic font-black text-emerald-600 dark:text-[#00FFCC] dark:neon-glow-text font-display">{language === "ar" ? "البلدية" : "Civic Platform"}</span>
                      </h3>
                      <p className={`text-base leading-relaxed mb-6 font-light ${isDark ? "text-slate-300" : "text-slate-600 font-normal"}`}>
                        {localProjects[1].description[language]}
                      </p>

                      <div className={`p-5 rounded-2xl border mb-6 text-xs leading-relaxed ${
                        isDark ? "bg-black/45 border-white/[0.05] text-slate-400" : "bg-slate-50/80 border-slate-150 text-slate-600 shadow-inner"
                      }`}>
                        {localProjects[1].longDescription[language]}
                      </div>

                      <div className="text-left mb-6">
                        <span className="block text-[8.5px] font-mono tracking-[0.25em] text-[#00FFCC] font-black mb-4 uppercase">
                          {t.projectsFunctionalPillarsLabel}
                        </span>
                        {localProjects[1].highlights?.[language]?.map((hl, i) => (
                          <div key={i} className={`flex items-center gap-3 mb-3 ${flexDir}`}>
                            <div className="h-4.5 w-4.5 rounded-full flex items-center justify-center bg-[#00FFCC]/15 text-[#00FFCC] flex-shrink-0">
                              <CheckCircle2 className="h-3.5 w-3.5 stroke-[2.5]" />
                            </div>
                            <span className={`text-xs font-semibold ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                              {hl}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/[0.05] flex flex-wrap gap-2">
                      {localProjects[1].tech.map((tc, id) => (
                        <span key={id} className={`px-3 py-1.5 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider ${
                          isDark ? "bg-white/[0.03] text-slate-450 border border-white/[0.05]" : "bg-white border border-slate-205 text-slate-650 shadow-sm"
                        }`}>
                          {tc}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
