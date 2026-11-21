/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageCode } from "../types";
import { PERSON, SITE_ORIGIN } from "./siteConfig";
import { workProjects, WorkProjectId } from "../workProjects";

const homeTitle: Record<LanguageCode, string> = {
  en: "Khaled Faour | Informatics Engineer & Full-Stack Developer | Portfolio",
  ar: "خالد فاعور | مهندس معلوماتية ومطور Full-Stack | معرض الأعمال",
  de: "Khaled Faour | Informatikingenieur & Full-Stack | Portfolio",
  nl: "Khaled Faour | Informatica-ingenieur & full-stack | Portfolio",
};

const homeDescription: Record<LanguageCode, string> = {
  en: "Official portfolio of Khaled Faour (خالد فاعور) — Informatics engineer from Aleppo, Syria. School ERP graduation project, Block 5 complaints platform, MBCO Pack, e-menu, and live production apps. Hire for React, Next.js, TypeScript, and RTL Arabic UX.",
  ar: "الموقع الرسمي للمهندس خالد فاعور — مهندس معلوماتية من حلب. مشروع تخرج ERP مدرسي، منصة شكاوى Block 5، MBCO Pack، قائمة إلكترونية، ومشاريع إنتاج. React وNext.js وTypeScript وتجربة عربية RTL.",
  de: "Offizielles Portfolio von Khaled Faour — Informatikingenieur aus Aleppo. School-ERP, Block-5-Beschwerden, MBCO Pack, React, Next.js, TypeScript.",
  nl: "Officieel portfolio van Khaled Faour — informatica-ingenieur uit Aleppo. School-ERP, Block 5-klachtenplatform, MBCO Pack, React, Next.js.",
};

const keywordsBase =
  "Khaled Faour, خالد فاعور, المهندس خالد فاعور, Khaled Faour engineer, Khaled Faour portfolio, software engineer Syria, Aleppo developer, full stack developer, React developer, Next.js developer, TypeScript, RTL Arabic, School ERP, Block 5 complaints, MBCO Pack, e-menu, prime transporter, vapeworld";

export function getHomeSeo(language: LanguageCode) {
  return {
    title: homeTitle[language],
    description: homeDescription[language],
    keywords: keywordsBase,
    canonicalPath: "/",
    ogType: "website" as const,
  };
}

export function getWorkSeo(language: LanguageCode, projectId: WorkProjectId) {
  const project = workProjects[projectId];
  const title = project
    ? `${project.title[language]} | Khaled Faour — ${PERSON.jobTitle[language]}`
    : `Work | Khaled Faour`;
  const description = project
    ? `${project.subtitle[language]} — Built by Khaled Faour (خالد فاعور). ${project.tech.join(", ")}.`
    : homeDescription[language];
  return {
    title,
    description,
    keywords: `${keywordsBase}, ${project?.title.en ?? ""}, ${projectId}`,
    canonicalPath: `/works/${projectId}`,
    ogType: "article" as const,
    ogImage: project ? `${SITE_ORIGIN}${project.logo}` : undefined,
  };
}

export function getPlaySeo(language: LanguageCode, projectId: WorkProjectId) {
  const base = getWorkSeo(language, projectId);
  return {
    ...base,
    title: `${base.title} — Live demo`,
    canonicalPath: `/works/${projectId}/play`,
    robots: "noindex, follow" as const,
  };
}