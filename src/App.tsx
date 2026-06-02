/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { LanguageCode } from "./types";
import { translations } from "./translations";
import ThemeLanguageControls from "./components/ThemeLanguageControls";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [isDark, setIsDark] = useState<boolean>(true);

  // Sync Dark Theme class with Document DOM
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  // Global Mouse Coordinate Listener for Spotlight Hover Effect
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const root = window.document.documentElement;
      root.style.setProperty("--mouse-x", `${e.clientX}px`);
      root.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []);

  const t = translations[language];

  // Dynamic RTL alignment trigger on body container
  const containerDir = language === "ar" ? "rtl" : "ltr";

  return (
    <div 
      dir={containerDir}
      className={`min-h-screen flex flex-col font-sans transition-colors duration-500 overflow-x-hidden ${
        isDark ? "bg-[#050505] bg-mesh-dark text-slate-100" : "bg-[#F4F8FA] bg-mesh-light text-slate-800"
      }`}
    >
      {/* Background Ambience Layout (True Glass Engine) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Orb 1: Vibrant Aqua Emerald */}
        <div 
          className={`absolute rounded-full filter blur-[120px] opacity-20 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] -top-40 -left-20 orb-float-cyan transition-colors duration-1000 ${
            isDark ? "bg-[#00FFCC]" : "bg-teal-200"
          }`} 
        />
        {/* Orb 2: Deep Midnight Teal or Soft Ocean Blue */}
        <div 
          className={`absolute rounded-full filter blur-[140px] opacity-15 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] -bottom-40 -right-20 orb-float-teal transition-colors duration-1000 ${
            isDark ? "bg-teal-900" : "bg-[#A7F3D0]"
          }`} 
        />
        {/* Subtle geometric digital grid line detail */}
        <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-[0.18]" />
      </div>

      {/* Floating System Headers */}
      <ThemeLanguageControls 
        language={language} 
        setLanguage={setLanguage} 
        isDark={isDark} 
        setIsDark={setIsDark} 
      />

      {/* Main Structural Body */}
      <main className="flex-grow z-10 relative">
        <Hero language={language} isDark={isDark} />
        
        <About language={language} isDark={isDark} />
        
        <TechStack language={language} isDark={isDark} />
        
        <Experience language={language} isDark={isDark} />
        
        <Projects language={language} isDark={isDark} />
        
        <Contact language={language} isDark={isDark} />
      </main>

      {/* Footer Block */}
      <footer className={`py-12 border-t z-10 relative text-center text-xs font-mono transition-colors duration-300 ${
        isDark ? "bg-black/50 border-white/5 text-gray-500" : "bg-slate-50 border-slate-200 text-gray-600"
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyber-neon" />
            <span>&copy; {new Date().getFullYear()} Khaled Faour. {t.footerRights}</span>
          </div>
          <div className="text-gray-400 font-semibold">
            {language === "ar" ? "حلب، سوريا" : "Aleppo, Syria"} | +963 938 796 079
          </div>
        </div>
      </footer>
    </div>
  );
}
