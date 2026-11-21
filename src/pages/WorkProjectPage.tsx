import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Shield } from "lucide-react";
import { LanguageCode } from "../types";
import { workProjects, WorkProjectId } from "../workProjects";

interface Props {
  language: LanguageCode;
  isDark: boolean;
}

export default function WorkProjectPage({ language, isDark }: Props) {
  const { projectId } = useParams<{ projectId: string }>();
  const id = projectId as WorkProjectId;
  const project = workProjects[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <p className="text-lg">Project not found.</p>
        <Link to="/" className="ml-4 text-emerald-500 underline">
          Home
        </Link>
      </div>
    );
  }

  const dir = language === "ar" ? "rtl" : "ltr";
  const demoUrl =
    project.demoKind === "embedded"
      ? project.demoPath
      : project.demoSrc;

  const backLabel =
    language === "ar" ? "العودة للبورتفوليو" : "Back to portfolio";

  return (
    <div
      dir={dir}
      className={`min-h-screen flex flex-col ${
        isDark ? "bg-[#050505] text-slate-100" : "bg-[#F4F8FA] text-slate-900"
      }`}
    >
      <header
        className={`border-b px-4 md:px-8 py-5 flex flex-wrap items-center justify-between gap-4 ${
          isDark ? "border-white/10 bg-black/40" : "border-slate-200 bg-white/80"
        } backdrop-blur-xl sticky top-0 z-30`}
      >
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-emerald-500 hover:text-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
        <ArchitectBadge isDark={isDark} text={project.architectCredit[language]} />
      </header>

      <main className="max-w-6xl mx-auto w-full px-4 md:px-8 py-10 space-y-10">
        <section>
          <h1 className="text-3xl md:text-5xl font-display font-light tracking-tight mb-4">
            {project.title[language]}
          </h1>
          <p className="text-lg opacity-80 max-w-3xl leading-relaxed">
            {project.subtitle[language]}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`text-xs px-3 py-1 rounded-full font-mono ${
                  isDark
                    ? "bg-white/5 border border-white/10"
                    : "bg-white border border-slate-200"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <section
          className={`rounded-2xl border p-6 md:p-8 ${
            isDark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-white"
          }`}
        >
          <h2 className="text-sm font-mono uppercase tracking-widest text-emerald-500 mb-4">
            {language === "ar" ? "أبرز المزايا" : "Highlights"}
          </h2>
          <ul className="space-y-2 list-disc ms-5 opacity-90">
            {project.highlights[language].map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>

        {project.demoHints?.[language]?.length ? (
          <section
            className={`rounded-2xl border p-6 md:p-8 ${
              isDark ? "border-amber-500/20 bg-amber-500/5" : "border-amber-200 bg-amber-50"
            }`}
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-amber-600 mb-4">
              {language === "ar" ? "تعليمات الديمو" : "Demo instructions"}
            </h2>
            <ul className="space-y-2 list-disc ms-5 opacity-90 text-sm">
              {project.demoHints[language].map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-4 w-4 text-amber-500" />
            <span className="text-xs font-mono uppercase tracking-wider opacity-70">
              {language === "ar"
                ? "ديمو آمن — بدون وصول للسورس"
                : "Secure demo — no source code exposure"}
            </span>
          </div>
          {demoUrl ? (
            <div
              className={`rounded-2xl overflow-hidden border shadow-2xl ${
                isDark ? "border-white/10" : "border-slate-200"
              }`}
            >
              <iframe
                title={project.title[language]}
                src={demoUrl}
                className="w-full min-h-[70vh] bg-white"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          ) : (
            <p className="opacity-70">
              {language === "ar"
                ? "الديمو قيد التجهيز."
                : "Demo is being prepared."}
            </p>
          )}
          {project.demoKind === "iframe" && project.demoSrc && (
            <a
              href={project.demoSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-emerald-600 hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              {language === "ar" ? "فتح في نافذة جديدة" : "Open in new tab"}
            </a>
          )}
        </section>

        <footer className="text-center text-xs opacity-50 pb-8">
          {project.attribution} · ©{" "}
          {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}

function ArchitectBadge({ isDark, text }: { isDark: boolean; text: string }) {
  return (
    <span
      className={`text-xs font-bold px-4 py-2 rounded-full ${
        isDark
          ? "bg-emerald-500/10 text-[#00FFCC] border border-emerald-500/20"
          : "bg-emerald-50 text-emerald-800 border border-emerald-200"
      }`}
    >
      {text}
    </span>
  );
}