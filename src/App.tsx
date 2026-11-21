/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LanguageCode } from "./types";
import { translations } from "./translations";
import ThemeLanguageControls from "./components/ThemeLanguageControls";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WorkProjectPage from "./pages/WorkProjectPage";
import WorkProjectPlayPage from "./pages/WorkProjectPlayPage";
import SeoManager from "./components/SeoManager";

export default function App() {
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

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
  const containerDir = language === "ar" ? "rtl" : "ltr";

  const portfolioShell = (
    <div
      dir={containerDir}
      className={`min-h-screen flex flex-col font-sans transition-colors duration-500 overflow-x-hidden ${
        isDark ? "bg-[#050505] bg-mesh-dark text-slate-100" : "bg-[#F4F8FA] bg-mesh-light text-slate-800"
      }`}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className={`absolute rounded-full filter blur-[120px] opacity-20 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] -top-40 -left-20 orb-float-cyan transition-colors duration-1000 ${
            isDark ? "bg-[#00FFCC]" : "bg-teal-200"
          }`}
        />
        <div
          className={`absolute rounded-full filter blur-[140px] opacity-15 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] -bottom-40 -right-20 orb-float-teal transition-colors duration-1000 ${
            isDark ? "bg-teal-900" : "bg-[#A7F3D0]"
          }`}
        />
        <div className="absolute inset-0 grid-pattern opacity-30 dark:opacity-[0.18]" />
      </div>

      <ThemeLanguageControls
        language={language}
        setLanguage={setLanguage}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <main className="flex-grow z-10 relative">
        <Hero language={language} isDark={isDark} />
        <About language={language} isDark={isDark} />
        <TechStack language={language} isDark={isDark} />
        <Experience language={language} isDark={isDark} />
        <Projects language={language} isDark={isDark} />
        <Contact language={language} isDark={isDark} />
      </main>

      <footer
        className={`py-12 border-t z-10 relative text-center text-xs font-mono transition-colors duration-300 ${
          isDark ? "bg-black/50 border-white/5 text-gray-500" : "bg-slate-50 border-slate-200 text-gray-600"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyber-neon" />
            <span>
              &copy; {new Date().getFullYear()}{" "}
              {language === "ar" ? "المهندس خالد فاعور" : "Khaled Faour"}.{" "}
              {t.footerRights}
            </span>
          </div>
          <div className="text-gray-400 font-semibold">
            {language === "ar" ? "حلب، سوريا" : "Aleppo, Syria"} | +963 938 796
            079
          </div>
        </div>
      </footer>
    </div>
  );

  return (
    <>
      <SeoManager language={language} />
      <Routes>
      <Route path="/" element={portfolioShell} />
      <Route
        path="/works/:projectId"
        element={
          <>
            <ThemeLanguageControls
              language={language}
              setLanguage={setLanguage}
              isDark={isDark}
              setIsDark={setIsDark}
            />
            <WorkProjectPage language={language} isDark={isDark} t={t} />
          </>
        }
      />
      <Route
        path="/works/:projectId/play"
        element={<WorkProjectPlayPage language={language} isDark={isDark} t={t} />}
      />
    </Routes>
    </>
  );
}