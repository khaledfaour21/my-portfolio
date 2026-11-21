import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Play, Shield } from "lucide-react";
import { LanguageCode, Translatables } from "../types";
import { workProjects, WorkProjectId, resolveDemoUrl } from "../workProjects";
import { PortfolioImage } from "../components/PortfolioImage";

interface Props {
  language: LanguageCode;
  isDark: boolean;
  t: Translatables;
}

export default function WorkProjectPage({ language, isDark, t }: Props) {
  const { projectId } = useParams<{ projectId: string }>();
  const id = projectId as WorkProjectId;
  const project = workProjects[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <p className="text-lg">{t.workNotFound}</p>
        <Link to="/" className="ml-4 text-emerald-500 underline">
          {t.workPortfolioNav}
        </Link>
      </div>
    );
  }

  const dir = language === "ar" ? "rtl" : "ltr";
  const demoUrl = resolveDemoUrl(project);
  const playPath = `/works/${id}/play`;

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
          {t.workBackPortfolio}
        </Link>
        <ArchitectBadge isDark={isDark} text={project.architectCredit[language]} />
      </header>

      <main className="max-w-6xl mx-auto w-full px-4 md:px-8 py-10 space-y-10">
        <section className="flex flex-col md:flex-row gap-8 items-start">
          <PortfolioImage
            src={project.logo}
            alt=""
            variant="logo"
            isDark={isDark}
          />
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl md:text-5xl font-display font-light tracking-tight mb-4">
              {project.title[language]}
            </h1>
            <p className="text-lg opacity-80 max-w-3xl leading-relaxed">
              {project.subtitle[language]}
            </p>
            {project.overview?.[language] && (
              <p className="mt-4 text-base opacity-75 max-w-3xl leading-relaxed">
                {project.overview[language]}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs px-3 py-1 rounded-full font-mono ${
                    isDark
                      ? "bg-white/5 border border-white/10"
                      : "bg-white border border-slate-200"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {project.gallery.length > 0 && (
          <section
            className={`rounded-2xl border p-6 md:p-8 ${
              isDark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-white"
            }`}
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-emerald-500 mb-6">
              {t.workGallery}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {project.gallery.map((src) => (
                <PortfolioImage
                  key={src}
                  src={src}
                  alt=""
                  variant="gallery"
                  isDark={isDark}
                />
              ))}
            </div>
          </section>
        )}

        <section
          className={`rounded-2xl border p-6 md:p-8 ${
            isDark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-white"
          }`}
        >
          <h2 className="text-sm font-mono uppercase tracking-widest text-emerald-500 mb-4">
            {t.workHighlights}
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
              {t.workDemoGuide}
            </h2>
            <ul className="space-y-2 list-disc ms-5 opacity-90 text-sm">
              {project.demoHints[language].map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section
          className={`rounded-2xl border p-8 text-center ${
            isDark
              ? "border-emerald-500/30 bg-emerald-500/5"
              : "border-emerald-200 bg-emerald-50/80"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-4 w-4 text-amber-500" />
            <span className="text-xs font-mono uppercase tracking-wider opacity-70">
              {t.workSecureDemo}
            </span>
          </div>
          {demoUrl ? (
            <Link
              to={playPath}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-widest bg-emerald-500 hover:bg-emerald-400 text-black transition-colors shadow-lg shadow-emerald-500/20"
            >
              <Play className="h-5 w-5 fill-current" />
              {t.workLaunchFullscreen}
            </Link>
          ) : (
            <p className="opacity-70">{t.workDemoUnavailable}</p>
          )}
        </section>

        <footer className="text-center text-xs opacity-50 pb-8">
          {project.attribution} · © {new Date().getFullYear()}
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