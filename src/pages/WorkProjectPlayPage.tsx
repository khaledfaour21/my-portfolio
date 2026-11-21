import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Maximize2 } from "lucide-react";
import { LanguageCode, Translatables } from "../types";
import { workProjects, WorkProjectId, resolveDemoUrl } from "../workProjects";

interface Props {
  language: LanguageCode;
  isDark: boolean;
  t: Translatables;
}

export default function WorkProjectPlayPage({ language, isDark, t }: Props) {
  const { projectId } = useParams<{ projectId: string }>();
  const id = projectId as WorkProjectId;
  const project = workProjects[id];
  const dir = language === "ar" ? "rtl" : "ltr";

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

  const demoUrl = resolveDemoUrl(project);
  const title = project.title[language];

  return (
    <div
      dir={dir}
      className={`min-h-screen flex flex-col ${
        isDark ? "bg-black text-slate-100" : "bg-slate-900 text-white"
      }`}
    >
      <header
        className={`shrink-0 border-b px-3 py-2 flex items-center justify-between gap-3 ${
          isDark ? "border-white/10 bg-black/80" : "border-white/10 bg-slate-900/95"
        } backdrop-blur-md z-20`}
      >
        <Link
          to={`/works/${id}`}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 hover:text-emerald-300"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.workBackCaseStudy}
        </Link>
        <div className="flex items-center gap-2 text-xs opacity-80 truncate">
          <Maximize2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">{title}</span>
        </div>
        <Link
          to="/#projects"
          className="text-[10px] font-mono uppercase tracking-wider text-slate-400 hover:text-white shrink-0"
        >
          {t.workPortfolioNav}
        </Link>
      </header>

      {demoUrl ? (
        <iframe
          title={title}
          src={demoUrl}
          className="flex-1 w-full min-h-0 border-0 bg-white"
          allow="fullscreen"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
        />
      ) : (
        <div className="flex-1 flex items-center justify-center p-8 text-center opacity-70">
          {t.workDemoUnavailable}
        </div>
      )}
    </div>
  );
}