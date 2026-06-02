import { useState, FormEvent, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, 
  Linkedin, Github, MessageSquare, ArrowUpRight, Sparkles, Compass
} from "lucide-react";
import { LanguageCode } from "../types";
import { translations } from "../translations";

interface Props {
  language: LanguageCode;
  isDark: boolean;
}

export default function Contact({ language, isDark }: Props) {
  const t = translations[language];

  // Form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // States
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submissions, setSubmissions] = useState<any[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("sending");

    // Simulate reliable API delivery pipeline
    setTimeout(() => {
      const newSubmission = {
        id: Date.now(),
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      };
      setSubmissions(prev => [newSubmission, ...prev]);
      setStatus("success");
      
      // Clear fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      setTimeout(() => setStatus("idle"), 6000);
    }, 1500);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/khaled-faour-eng",
      icon: <Linkedin className="h-5 w-5 text-blue-400" />,
      tag: "@khaled-faour-eng"
    },
    {
      name: "GitHub",
      url: "https://github.com/khaledfaour21",
      icon: <Github className="h-5 w-5 text-slate-400" />,
      tag: "khaledfaour21"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/963938796079",
      icon: <MessageSquare className="h-5 w-5 text-green-400" />,
      tag: "+963 938 796 079"
    }
  ];

  const dir = language === "ar" ? "rtl" : "ltr";
  const alignClass = language === "ar" ? "text-right" : "text-left";
  const layoutClass = language === "ar" ? "flex-row-reverse" : "flex-row";
  const labelLeftClass = language === "ar" ? "right-5" : "left-5";

  return (
    <section 
      id="contact" 
      dir={dir}
      className={`py-28 px-4 md:px-8 relative border-t overflow-hidden transition-all duration-500 ${
        isDark ? "bg-[#050505]/60 border-white/[0.04]" : "bg-slate-50/40 border-slate-200/60"
      }`}
    >
      {/* Absolute floating luxury ambient light beam */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-linear-to-b from-white/[0.02] via-white/[0.05] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block in Pure Editorial Design Hierarchy */}
        <div className={`max-w-3xl mb-20 ${alignClass}`}>
          <span className="font-mono text-xs font-black uppercase tracking-[0.25em] text-[#00FFCC] mb-3 block">
            {t.contactHeadingCategory}
          </span>
          <h2 className={`font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {language !== "ar" ? (
              <>
                Let's <span className="italic font-black text-emerald-600 dark:text-[#00FFCC] dark:neon-glow-text">Connect</span>
              </>
            ) : (
              t.contactTitle
            )}
          </h2>
          <p className={`text-lg md:text-xl font-light leading-relaxed tracking-wide ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}>
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Info & Real Time Contact Coordinates Channels */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Direct Channels Card */}
            <div 
              onMouseMove={handleMouseMove}
              className={`p-8 rounded-[32px] border transition-all duration-300 spotlight-card shadow-2xl relative ${
                isDark 
                  ? "glass-panel-dark border-white/[0.04] hover:border-[#00FFCC]/25" 
                  : "glass-panel-light border-slate-250/30 hover:border-emerald-300 hover:bg-white"
              }`}
            >
              <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none bg-gradient-to-tr from-white/0 via-[#00ccff]/[0.015] to-[#00FFCC]/[0.03]" />
              
              <h3 className="font-mono text-xs font-black uppercase tracking-[0.25em] text-[#00FFCC] mb-3 block">
                {t.contactSecureCoordinatesTitle}
              </h3>

              <div className="space-y-4">
                <a 
                  href="mailto:khaledfaour718@gmail.com"
                  className={`flex items-center gap-4.5 p-4 rounded-2xl border transition-all duration-300 ${
                    isDark 
                      ? "bg-black/25 border-white/[0.04] hover:bg-white/[0.05] hover:border-cyber-neon/20" 
                      : "bg-[#FFFFFF] border-slate-200/50 hover:bg-white hover:border-emerald-350 hover:shadow-sm"
                  }`}
                >
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-cyber-neon/15 text-cyber-neon flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest font-black mb-0.5">{t.contactPrimaryEmailLabel}</span>
                    <span className={`text-[13px] md:text-sm font-semibold tracking-wide ${isDark ? "text-slate-200" : "text-slate-800"}`}>khaledfaour718@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="tel:+963938796079"
                  className={`flex items-center gap-4.5 p-4 rounded-2xl border transition-all duration-300 ${
                    isDark 
                      ? "bg-black/25 border-white/[0.04] hover:bg-white/[0.05] hover:border-cyber-neon/20" 
                      : "bg-[#FFFFFF] border-slate-200/50 hover:bg-white hover:border-emerald-350 hover:shadow-sm"
                  }`}
                >
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-cyan-500/15 text-cyan-400 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest font-black mb-0.5">{t.contactMobileLineLabel}</span>
                    <span className={`text-[13px] md:text-sm font-semibold tracking-wide ${isDark ? "text-slate-200" : "text-slate-800"}`}>+963 938 796 079</span>
                  </div>
                </a>

                <div className={`flex items-center gap-4.5 p-4 rounded-2xl border ${
                  isDark ? "bg-[#0b0c10]/40 border-white/[0.04]" : "bg-[#f8fafc]/80 border-slate-150"
                }`}>
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-500 flex-shrink-0 animate-pulse">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] font-mono text-gray-400 uppercase tracking-widest font-black mb-0.5">{t.contactPhysicalPresenceLabel}</span>
                    <span className={`text-[13px] md:text-sm font-semibold tracking-wide ${isDark ? "text-slate-200" : "text-slate-800"}`}>{language === "ar" ? "حلب، الجمهورية العربية السورية" : "Aleppo, Syrian Arab Republic"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles list card in high aesthetics */}
            <div 
              onMouseMove={handleMouseMove}
              className={`p-8 rounded-[32px] border transition-all duration-300 spotlight-card shadow-2xl relative ${
                isDark 
                  ? "glass-panel-dark border-white/[0.04] hover:border-[#00FFCC]/25" 
                  : "glass-panel-light border-slate-250/30 hover:border-emerald-300 hover:bg-white"
              }`}
            >
              <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none bg-gradient-to-tr from-white/0 via-[#00ccff]/[0.015] to-[#00FFCC]/[0.03]" />

              <h3 className="block text-[11px] font-mono tracking-widest font-black text-gray-400 uppercase mb-5">
                {t.contactSocialPortsTitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4.5">
                {socials.map((soc, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href={soc.url}
                    target="_blank"
                    rel="referrer noopener"
                    className={`p-4.5 rounded-2xl border flex flex-col justify-between items-start transition-all duration-300 ${
                      isDark 
                        ? "bg-black/25 border-white/[0.04] hover:border-cyber-neon/20 hover:bg-white/[0.05]" 
                        : "bg-[#FFFFFF] border-slate-250/50 hover:border-emerald-350 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    <div className="flex justify-between items-center w-full mb-4">
                      <div className="p-2 rounded-xl bg-white/[0.04] flex-shrink-0">{soc.icon}</div>
                      <ArrowUpRight className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="text-left w-full">
                      <span className={`block font-black text-xs uppercase leading-none mb-1 text-slate-450 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}>{soc.name}</span>
                      <span className="text-[9px] text-gray-500 font-mono tracking-widest truncate block w-full max-w-[110px] uppercase font-black">{soc.tag}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Digital Form Card in Absolute Perfection */}
          <div className="lg:col-span-7 relative">
            <div 
              onMouseMove={handleMouseMove}
              className={`p-8 sm:p-10 rounded-[32px] border transition-all duration-300 spotlight-card shadow-2xl relative ${
                isDark 
                  ? "glass-panel-dark border-white/[0.04] hover:border-[#00FFCC]/35" 
                  : "glass-panel-light border-slate-250/30 hover:border-emerald-350 hover:shadow-2xl hover:bg-white"
              }`}
            >
              <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none bg-gradient-to-tr from-white/0 via-cyber-neon/[0.01] to-[#00FFCC]/[0.02]" />

              <div className="flex items-center gap-2 mb-8">
                <Compass className="h-4 w-4 text-cyber-neon animate-spin" />
                <h3 className={`font-display font-black text-2xl tracking-tight leading-none ${alignClass} ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {t.contactSecureFormTitle}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                  
                  {/* Name field relative wrapper */}
                  <div className="relative w-full">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder=" "
                      className={`peer w-full p-5 pt-8 pb-3.5 rounded-2xl border text-sm transition-all focus:outline-hidden ${
                        isDark 
                          ? "bg-black/45 border-white/[0.08] text-white focus:border-cyber-neon focus:ring-1 focus:ring-cyber-neon/40" 
                          : "bg-[#FFFFFF] border-slate-200 text-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/45"
                      }`}
                    />
                    <label className={`absolute pointer-events-none text-xs font-mono text-gray-400 uppercase font-bold transition-all duration-200 ${
                      name 
                        ? `top-3.5 ${labelLeftClass} text-[9px] text-[#00FFCC] font-black tracking-widest` 
                        : `top-5.5 ${labelLeftClass} text-xs peer-focus:top-3.5 peer-focus:text-[9px] peer-focus:text-[#00FFCC] peer-focus:font-black peer-focus:tracking-widest`
                    }`}>
                      {t.contactNameLabel}
                    </label>
                  </div>

                  {/* Email field relative wrapper */}
                  <div className="relative w-full">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder=" "
                      className={`peer w-full p-5 pt-8 pb-3.5 rounded-2xl border text-sm transition-all focus:outline-hidden ${
                        isDark 
                          ? "bg-black/45 border-white/[0.08] text-white focus:border-cyber-neon focus:ring-1 focus:ring-cyber-neon/40" 
                          : "bg-[#FFFFFF] border-slate-200 text-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/45"
                      }`}
                    />
                    <label className={`absolute pointer-events-none text-xs font-mono text-gray-400 uppercase font-bold transition-all duration-200 ${
                      email 
                        ? `top-3.5 ${labelLeftClass} text-[9px] text-[#00FFCC] font-black tracking-widest` 
                        : `top-5.5 ${labelLeftClass} text-xs peer-focus:top-3.5 peer-focus:text-[9px] peer-focus:text-[#00FFCC] peer-focus:font-black peer-focus:tracking-widest`
                    }`}>
                      {t.contactEmailLabel}
                    </label>
                  </div>

                </div>

                {/* Subject field relative wrapper */}
                <div className="relative w-full text-left">
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder=" "
                    className={`peer w-full p-5 pt-8 pb-3.5 rounded-2xl border text-sm transition-all focus:outline-hidden ${
                      isDark 
                        ? "bg-black/45 border-white/[0.08] text-white focus:border-cyber-neon focus:ring-1 focus:ring-cyber-neon/40" 
                        : "bg-[#FFFFFF] border-slate-200 text-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/45"
                    }`}
                  />
                  <label className={`absolute pointer-events-none text-xs font-mono text-gray-400 uppercase font-bold transition-all duration-200 ${
                    subject 
                      ? `top-3.5 ${labelLeftClass} text-[9px] text-[#00FFCC] font-black tracking-widest` 
                      : `top-5.5 ${labelLeftClass} text-xs peer-focus:top-3.5 peer-focus:text-[9px] peer-focus:text-[#00FFCC] peer-focus:font-black peer-focus:tracking-widest`
                  }`}>
                    {t.contactSubjectLabel}
                  </label>
                </div>

                {/* Message field relative wrapper */}
                <div className="relative w-full text-left">
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder=" "
                    className={`peer w-full p-5 pt-8 pb-4 rounded-2xl border text-sm transition-all focus:outline-hidden min-h-[120px] ${
                      isDark 
                        ? "bg-black/45 border-white/[0.08] text-white focus:border-cyber-neon focus:ring-1 focus:ring-cyber-neon/40" 
                        : "bg-[#FFFFFF] border-slate-200 text-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/45"
                    }`}
                  />
                  <label className={`absolute pointer-events-none text-xs font-mono text-gray-400 uppercase font-bold transition-all duration-200 ${
                    message 
                      ? `top-3.5 ${labelLeftClass} text-[9px] text-[#00FFCC] font-black tracking-widest` 
                      : `top-5.5 ${labelLeftClass} text-xs peer-focus:top-3.5 peer-focus:text-[9px] peer-focus:text-[#00FFCC] peer-focus:font-black peer-focus:tracking-widest`
                  }`}>
                    {t.contactMessageLabel}
                  </label>
                </div>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs flex gap-3.5 font-mono font-bold tracking-wider uppercase leading-snug"
                    >
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                      <span>{t.contactSuccess}</span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4.5 rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400 text-xs flex gap-3.5 font-mono font-bold tracking-wider uppercase leading-snug"
                    >
                      <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-400" />
                      <span>{t.contactError}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.015, brightness: 1.1 }}
                  whileTap={{ scale: 0.985 }}
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4.5 rounded-2xl bg-gradient-to-r from-cyber-neon to-emerald-500 text-slate-950 font-black text-xs font-mono uppercase tracking-[0.25em] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-slate-900 border-t-transparent animate-spin inline-block" />
                      <span>{t.contactSending}</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4.5 w-4.5" />
                      <span>{t.contactSendBtn}</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Submissions Inbox Queue feed representation */}
              {submissions.length > 0 && (
                <div className="mt-10 pt-8 border-t border-white/[0.05] text-left">
                  <span className="block text-[9px] font-mono tracking-[0.25em] text-[#00FFCC] uppercase font-black mb-4">
                    {t.contactLocalFeedTitle}
                  </span>
                  <div className="space-y-3 max-h-[150px] overflow-y-auto">
                    {submissions.map((sub) => (
                      <div key={sub.id} className="p-4 rounded-2xl border bg-cyber-dark border-cyber-neon/15 text-xs font-mono text-gray-400 flex flex-col gap-1.5 animate-pulse">
                        <div className={`flex justify-between items-center text-cyber-neon font-black ${layoutClass}`}>
                          <span>👤 {sub.name}</span>
                          <span>{new Date(sub.timestamp).toLocaleTimeString()}</span>
                        </div>
                        <p className="truncate text-[11px]"><strong>{language === "ar" ? "الموضوع:" : "Subject:"}</strong> {sub.subject || "N/A"}</p>
                        <p className="truncate text-gray-500 text-[11px]"><strong>{language === "ar" ? "الرسالة:" : "Message:"}</strong> {sub.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
