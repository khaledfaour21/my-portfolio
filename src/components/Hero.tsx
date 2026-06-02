import { useState, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, ArrowDownRight, Sparkles, GraduationCap, Briefcase, ChevronRight, Layers, Cpu, Award, RefreshCw, Terminal, Activity, ShieldCheck } from "lucide-react";
import { LanguageCode } from "../types";
import { translations } from "../translations";

interface Props {
  language: LanguageCode;
  isDark: boolean;
}

export default function Hero({ language, isDark }: Props) {
  const t = translations[language];
  const cardRef = useRef<HTMLDivElement>(null);
  
  // High fidelity interactive state for the live platform emulator within the hero component
  const [activeNode, setActiveNode] = useState<string>("Core-System");
  const [latency, setLatency] = useState<number>(14);
  const [integrityPercent, setIntegrityPercent] = useState<number>(100);

  // Core Mouse Coordinate States for floating card & badge layers
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Heighten rotation boundaries for maximum tactile responsiveness
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [18, -18]), { stiffness: 180, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-18, 18]), { stiffness: 180, damping: 25 });

  // Floating layers relative movement
  const layerTranslateX = useSpring(useTransform(x, [-0.5, 0.5], [25, -25]), { stiffness: 140, damping: 28 });
  const layerTranslateY = useSpring(useTransform(y, [-0.5, 0.5], [25, -25]), { stiffness: 140, damping: 28 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);

    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleRefreshCore = () => {
    setLatency(Math.floor(Math.random() * 8) + 8);
    setIntegrityPercent(99 + Math.floor(Math.random() * 2));
    const nodes = ["Core-System", "Module-Mesh", "Dynamic-Routing", "Dispatch-Vect"];
    const currentIdx = nodes.indexOf(activeNode);
    setActiveNode(nodes[(currentIdx + 1) % nodes.length]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dir = language === "ar" ? "rtl" : "ltr";
  const alignClass = language === "ar" ? "text-right items-end" : "text-left items-start";

  // Staggered Container Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 90, 
        damping: 18,
      },
    },
  };

  return (
    <section 
      dir={dir}
      className={`relative min-h-[calc(100vh-96px)] flex items-center justify-center overflow-hidden py-24 px-4 md:px-8 border-b transition-colors duration-500 ${
        isDark ? "bg-[#050508]" : "bg-[#edf4f7]/40"
      }`}
    >
      {/* Background Ambience Light System (Vision Pro style) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] left-[25%] duration-1000 transition-all w-[700px] h-[700px] rounded-full filter blur-[150px] opacity-[0.22] mix-blend-screen pointer-events-none ${
          isDark ? "bg-[#00FFCC]" : "bg-[#2dd4bf]"
        }`} />
        <div className={`absolute bottom-[-10%] right-[20%] duration-1000 transition-all w-[600px] h-[600px] rounded-full filter blur-[150px] opacity-[0.16] mix-blend-screen pointer-events-none ${
          isDark ? "bg-[#90e0ef]" : "bg-[#818cf8]"
        }`} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column (Cinematic Headline & Interactive Pitch Hub) */}
        <motion.div 
          className={`lg:col-span-7 flex flex-col justify-center ${alignClass}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top-Tier Badge Indicator */}
          <motion.div 
            variants={itemVariants}
            className={`inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border mb-8 text-[10px] font-mono font-bold tracking-widest uppercase transition-all duration-300 shadow-[2px_4px_16px_rgba(0,0,0,0.02)] ${
              isDark 
                ? "border-[#00FFCC]/20 bg-[#00FFCC]/5 text-[#00FFCC] neon-pulse-glow" 
                : "border-teal-200/60 bg-[#e6fbf7] text-teal-800"
            }`}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFCC]"></span>
            </span>
            <span className="tracking-widest">{t.heroIntro}</span>
          </motion.div>

          {/* Epic Title with Light Beam Undercoating */}
          <motion.h1
            variants={itemVariants}
            className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-light tracking-[2px] leading-[1.05] mb-8 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {t.heroTitleDesignFirst} <br />
            <span className={`italic font-[900] bg-gradient-to-r tracking-normal pb-1 ${
              isDark 
                ? "from-[#00FFCC] via-[#00f0ff] to-[#bd00ff] neon-glow-text" 
                : "from-teal-700 via-[#1e40af] to-[#701a75]"
            } bg-clip-text text-transparent`}>
              {t.heroTitleDesignSecond}
            </span>
          </motion.h1>

          {/* Explanatory Narrative paragraph in editorial book styling */}
          <motion.p
            variants={itemVariants}
            className={`text-lg sm:text-xl md:text-[1.35rem] font-light mb-10 max-w-[580px] leading-relaxed tracking-normal ${
              isDark ? "text-slate-300" : "text-slate-600 font-normal"
            }`}
          >
            {t.heroSubtitle}
          </motion.p>

          {/* Action CTAs structured perfectly */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection("projects")}
              className={`group flex items-center justify-center gap-3 px-8.5 py-4.5 rounded-2xl text-[11px] font-mono uppercase font-black tracking-widest cursor-pointer transition-all ${
                isDark 
                  ? "bg-gradient-to-r from-[#00FFCC] via-[#2dd4bf] to-cyan-500 text-slate-950 shadow-[0_12px_45px_rgba(0,255,204,0.35)] hover:shadow-[0_16px_50px_rgba(0,255,204,0.5)]" 
                  : "bg-emerald-600 text-white shadow-[0_12px_35px_-5px_rgba(16,185,129,0.3)] hover:bg-emerald-700 hover:shadow-[0_16px_40px_rgba(16,185,129,0.45)]"
              }`}
            >
              <span>{t.heroCtaWork}</span>
              <ArrowDownRight className="h-4 w-4 stroke-[3] group-hover:translate-y-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection("contact")}
              className={`flex items-center justify-center gap-3 px-8.5 py-4.5 rounded-2xl text-[11px] font-mono uppercase font-black tracking-widest cursor-pointer transition-all border ${
                isDark 
                  ? "border-white/[0.08] bg-white/[0.02] text-white hover:bg-white/[0.08] hover:border-white/[0.18]" 
                  : "border-slate-300/80 bg-white text-slate-800 hover:bg-slate-50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
              }`}
            >
              <span>{t.heroCtaContact}</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column (Advanced Live-Rendering Engineering Node & Parallax Console) */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Creative coordinates label element */}
          <div className="absolute -top-12 -right-4 hidden xl:block pointer-events-none select-none text-right">
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#00FFCC] font-bold block mb-1">{t.heroDesignSyria}</span>
            <span className="font-mono text-[8px] text-gray-500">{t.heroDesignSyrRef}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.15, delay: 0.2 }}
            className="perspective-1200 w-full max-w-[430px]"
          >
            {/* Soft Ambient Shadow backing */}
            <motion.div
              style={{ x: layerTranslateX, y: layerTranslateY }}
              className={`absolute -inset-5 rounded-[44px] opacity-30 filter blur-2xl -z-10 bg-gradient-to-tr ${
                isDark ? "from-[#00FFCC]/25 to-blue-500/20" : "from-emerald-350/20 to-teal-200/10"
              }`}
            />

            {/* Interactive Physical Console Center */}
            <motion.div
              ref={cardRef}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`w-full rounded-[36px] p-8 relative select-none transition-all duration-300 spotlight-card shadow-[0_30px_80px_-15px_rgba(0,0,0,0.55)] border ${
                isDark 
                  ? "glass-panel-dark border-white/[0.08] hover:border-[#00FFCC]/40" 
                  : "glass-panel-light border-slate-200/70 hover:border-[#10b981]/50"
              }`}
            >
              {/* Internal Glass Sheen Layer */}
              <div className="absolute inset-0 rounded-[36px] overflow-hidden pointer-events-none bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />

              {/* Status Header Area within Interface */}
              <div style={{ transform: "translateZ(80px)" }} className="flex justify-between items-start mb-10 pb-5 border-b border-white/[0.05]">
                <div className="flex items-center gap-3">
                  <div className={`h-11 w-11 rounded-2xl flex items-center justify-center ${
                    isDark ? "bg-white/[0.04]" : "bg-white border shadow-sm"
                  }`}>
                    <Cpu className="h-5 w-5 text-[#00FFCC] animate-pulse" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono tracking-widest text-[#00FFCC] uppercase font-black mb-0.5">
                      {t.heroCredentials}
                    </span>
                    <span className={`block font-mono text-[10px] uppercase font-bold leading-none ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      SYSTEM DISPATCH_
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleRefreshCore}
                  className={`p-2.5 rounded-xl border flex items-center justify-center cursor-pointer transition-colors ${
                    isDark ? "bg-[#050508]/60 border-white/[0.06] text-slate-300 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </motion.button>
              </div>

              {/* Interactive Telemetry Node Indicator */}
              <div 
                style={{ transform: "translateZ(105px)" }}
                className="flex flex-col items-center justify-center my-8 relative"
              >
                <div className="relative h-32 w-32 flex items-center justify-center">
                  {/* Glowing dynamic background rings */}
                  <div className={`absolute inset-0 rounded-full border border-dashed animate-[spin_32s_linear_infinite] ${
                    isDark ? "border-[#00FFCC]/30" : "border-emerald-600/30"
                  }`} />
                  <div className="absolute inset-2 rounded-full border border-dotted border-cyan-500/25 animate-[spin_18s_linear_infinite_reverse]" />
                  <div className={`absolute inset-8 rounded-full filter blur-md opacity-30 ${
                    isDark ? "bg-[#00FFCC]" : "bg-teal-400"
                  }`} />

                  {/* Core Platform Identity Dial */}
                  <div className={`h-22 w-22 rounded-3xl flex flex-col items-center justify-center font-black text-center shadow-2xl relative border ${
                    isDark 
                      ? "from-slate-900 via-slate-950 to-black text-white border-white/[0.08]" 
                      : "from-white to-slate-50 text-slate-800 border-slate-250"
                  } bg-gradient-to-b`}>
                    <span className="block font-display text-2xl tracking-tighter leading-none mb-1">KF</span>
                    <Activity className="h-3 w-3 text-[#00FFCC] animate-bounce" />
                  </div>
                </div>
              </div>

              {/* Real-time State Monitors Block */}
              <div style={{ transform: "translateZ(70px)" }} className="space-y-3.5 mt-8">
                <div className={`py-3.5 px-4 rounded-2xl flex items-center justify-between border transition-all duration-300 ${
                  isDark 
                    ? "bg-[#0b0c10]/40 border-white/[0.04] hover:border-[#00FFCC]/20" 
                    : "bg-[#FFFFFF]/70 border-slate-200/50 hover:border-emerald-400 hover:shadow-xs"
                }`}>
                  <div className="flex items-center gap-3">
                    <Terminal className="h-4.5 w-4.5 text-cyan-400" />
                    <span className={`font-mono text-[11px] font-bold ${isDark ? "text-slate-300" : "text-slate-700"}`}>Active-Node</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#00FFCC] font-black uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-lg">
                    {activeNode}
                  </span>
                </div>

                <div className={`py-3.5 px-4 rounded-2xl flex items-center justify-between border transition-all duration-300 ${
                  isDark 
                    ? "bg-[#0b0c10]/40 border-white/[0.04] hover:border-[#00FFCC]/20" 
                    : "bg-[#FFFFFF]/70 border-slate-200/50 hover:border-emerald-400 hover:shadow-xs"
                }`}>
                  <div className="flex items-center gap-3">
                    <Activity className="h-4.5 w-4.5 text-[#00FFCC]" />
                    <span className={`font-mono text-[11px] font-bold ${isDark ? "text-slate-300" : "text-slate-700"}`}>Host-Latency</span>
                  </div>
                  <span className="font-mono text-[11px] text-cyan-400 font-extrabold">
                    {latency}ms
                  </span>
                </div>

                <div className={`py-4 px-4.5 rounded-2xl border transition-all duration-300 ${
                  isDark 
                    ? "bg-[#08090c]/60 border-white/[0.04] hover:border-[#00FFCC]/20" 
                    : "bg-[#FFFFFF]/60 border-slate-200/40"
                }`}>
                  <span className="block text-[8px] font-mono tracking-widest text-slate-400 uppercase mb-2">SYSTEM DEPLOYMENT CLOUD</span>
                  <div className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5 font-bold">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      <span className={isDark ? "text-slate-200" : "text-slate-800"}>TS // REST Pipelines</span>
                    </div>
                    <span className="font-mono font-black text-rose-500 bg-rose-550/10 px-2 py-0.5 rounded text-[10px]">
                      {integrityPercent}% OK
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom tag metrics in elegant clean typography */}
              <div style={{ transform: "translateZ(30px)" }} className="mt-8 pt-5 border-t border-white/[0.05] flex gap-8">
                <div className={language === "ar" ? "text-right" : "text-left"}>
                  <span className="block text-[8px] font-mono tracking-widest text-[#00FFCC] uppercase font-bold">{t.heroCoreSystemCore}</span>
                  <span className={`text-[11px] font-mono font-extrabold ${isDark ? "text-slate-300" : "text-slate-700"}`}>{t.heroCoreLanguages}</span>
                </div>
                <div className={language === "ar" ? "text-right" : "text-left"}>
                  <span className="block text-[8px] font-mono tracking-widest text-[#00FFCC] uppercase font-bold">{t.heroCoreAcademicAvg}</span>
                  <span className={`text-[11px] font-mono font-extrabold ${isDark ? "text-slate-300" : "text-slate-700"}`}>{t.heroCoreAcademPercent}</span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
