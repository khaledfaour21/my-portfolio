/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageCode } from "./types";
import { portfolioDemoUrls } from "./lib/demoUrls";

export type WorkProjectId =
  | "school-erp"
  | "block5-aleppo"
  | "e-menu"
  | "mbco-pack";

export interface WorkProjectMeta {
  id: WorkProjectId;
  title: Record<LanguageCode, string>;
  subtitle: Record<LanguageCode, string>;
  overview?: Record<LanguageCode, string>;
  architectCredit: Record<LanguageCode, string>;
  tech: string[];
  highlights: Record<LanguageCode, string[]>;
  logo: string;
  gallery: string[];
  demoKind: "iframe" | "embedded";
  demoSrc?: string;
  demoPath?: string;
  demoHints?: Record<LanguageCode, string[]>;
  attribution: string;
}

export function resolveDemoUrl(project: WorkProjectMeta): string | undefined {
  if (project.demoKind === "embedded") return project.demoPath;
  if (project.id === "school-erp") return portfolioDemoUrls.school;
  if (project.id === "e-menu") return portfolioDemoUrls.emenu;
  return project.demoSrc;
}

const credit: Record<LanguageCode, string> = {
  en: "Engineer Khaled Faour",
  ar: "المهندس خالد فاعور",
  de: "Ingenieur Khaled Faour",
  nl: "Ingenieur Khaled Faour",
};

export const workProjects: Record<WorkProjectId, WorkProjectMeta> = {
  "school-erp": {
    id: "school-erp",
    title: {
      en: "School ERP — Dashboard UI",
      ar: "نظام إدارة مدرسي — Dashboard UI",
      de: "Schul-ERP — Dashboard UI",
      nl: "School-ERP — Dashboard UI",
    },
    subtitle: {
      en: "Graduation project (86/100). Four-tier RBAC ERP — UI refined for portfolio showcase.",
      ar: "مشروع تخرج (86/100). نظام ERP رباعي الصلاحيات — واجهات محسّنة للمعرض.",
      de: "Abschlussprojekt (86/100). Vierstufiges RBAC-ERP.",
      nl: "Afstudeerproject (86/100). Vierlaags RBAC-ERP.",
    },
    architectCredit: credit,
    tech: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Prisma",
      "Clerk Auth",
      "Tailwind CSS",
      "Recharts",
    ],
    highlights: {
      en: [
        "Admin, teacher, student, and parent dashboards",
        "Grades, attendance, exams, and announcements",
        "RTL Arabic-first polished glass UI",
      ],
      ar: [
        "لوحات المدير والمعلم والطالب وولي الأمر",
        "درجات وحضور وامتحانات وإعلانات",
        "واجهة عربية RTL بتصميم زجاجي محسّن",
      ],
      de: [
        "Dashboards für alle Rollen",
        "Noten, Anwesenheit, Prüfungen",
        "Arabisch-RTL-Oberfläche",
      ],
      nl: [
        "Dashboards voor alle rollen",
        "Cijfers, aanwezigheid, examens",
        "Arabisch-RTL-interface",
      ],
    },
    overview: {
      en: "Graduation ERP for Epala School: admin, teachers, students, and parents in one cohesive Arabic RTL experience.",
      ar: "نظام تخرج مدرسة إيبلا: مدير، معلم، طالب، وولي أمر في تجربة عربية موحّدة.",
      de: "Abschluss-ERP für die Schule Epala.",
      nl: "Afstudeer-ERP voor school Epala.",
    },
    logo: "/work-assets/school-logo.png",
    gallery: [
      "/work-assets/school-logo.png",
      "/work-assets/school-dashboard.png",
      "/work-assets/school-ui.png",
    ],
    demoKind: "iframe",
    demoSrc: portfolioDemoUrls.school,
    demoHints: {
      en: [
        "School ERP on port 3001 — in-browser demo data (no MySQL required).",
        "One-click demo login: Admin / Teacher / Student / Parent.",
        "Edits in demo mode stay in memory until server restart.",
      ],
      ar: [
        "المدرسة على المنفذ 3001 — بيانات ديمو داخل الذاكرة (بدون MySQL).",
        "دخول تجريبي بضغطة واحدة: مدير، معلم، طالب، ولي أمر.",
        "التعديلات تبقى في الذاكرة حتى إعادة تشغيل السيرفر.",
      ],
      de: ["Port 3001", "Demo-Login-Buttons"],
      nl: ["Poort 3001", "Demo-loginknoppen"],
    },
    attribution: "المهندس خالد فاعور",
  },
  "block5-aleppo": {
    id: "block5-aleppo",
    title: {
      en: "Fifth Block — Civic Complaints Platform",
      ar: "الكتلة الخامسة — منصة الشكاوى المجتمعية",
      de: "Fünfte Block — Bürgerbeschwerden",
      nl: "Vijfde Block — Burgerklachten",
    },
    subtitle: {
      en: "Full-stack civic CMS (React + Express + PostgreSQL). Embedded demo with mock Aleppo data.",
      ar: "منصة مجتمعية متكاملة (React + Express + PostgreSQL). ديمو مدمج ببيانات تجريبية.",
      de: "Full-Stack-Bürgerplattform mit Demo-Daten.",
      nl: "Full-stack burgerplatform met demo-data.",
    },
    architectCredit: credit,
    tech: [
      "React 19",
      "Vite",
      "Express 5",
      "PostgreSQL",
      "Prisma",
      "Zustand",
      "Recharts",
    ],
    highlights: {
      en: [
        "Citizen submit + track complaints & initiatives",
        "Muktar / admin / manager dashboards",
        "Maps, voting, announcements, achievements",
      ],
      ar: [
        "تقديم ومتابعة الشكاوى والمبادرات",
        "لوحات المختار والإدارة والمدير",
        "خرائط وتصويت وإعلانات وإنجازات",
      ],
      de: ["Bürgermeldungen", "Rollenbasierte Dashboards", "Karten & Abstimmung"],
      nl: ["Meldingen", "Dashboards per rol", "Kaarten & stemmen"],
    },
    overview: {
      en: "Aleppo civic tech: complaints, initiatives, maps, and role-based dashboards — portfolio build runs fully in the browser.",
      ar: "منصة مجتمعية لحلب: شكاوى ومبادرات وخرائط ولوحات حسب الدور — نسخة المعرض تعمل بالكامل في المتصفح.",
      de: "Bürgerplattform Aleppo — eingebettete Demo.",
      nl: "Burgerplatform Aleppo — ingebedde demo.",
    },
    logo: "/work-assets/block5-logo.svg",
    gallery: [
      "/work-assets/block5-logo.svg",
      "/demos/block5/images/khaled.jpg",
      "/demos/block5/images/ayaz.jpg",
    ],
    demoKind: "embedded",
    demoPath: "/demos/block5/index.html",
    demoHints: {
      en: [
        'One-click demo login on the sign-in screen (password: demo123).',
        "Try Manager, Admin, Muktar, or Citizen roles.",
        "Sample Aleppo complaints load automatically offline.",
      ],
      ar: [
        "أزرار دخول تجريبي في شاشة تسجيل الدخول (كلمة المرور: demo123).",
        "جرّب أدوار المدير أو المسؤول أو المختار أو المواطن.",
        "بيانات شكاوى تجريبية تُحمّل تلقائياً بدون باكند.",
      ],
      de: ["Demo-Login demo123"],
      nl: ["Demo-login demo123"],
    },
    attribution: "المهندس خالد فاعور",
  },
  "e-menu": {
    id: "e-menu",
    title: {
      en: "K.Faour E-Menu — Restaurant Platform",
      ar: "منيو إلكتروني — مطعم",
      de: "E-Menü — Restaurantplattform",
      nl: "E-menu — Restaurantplatform",
    },
    subtitle: {
      en: "Production-ready digital menu + admin CMS. Portfolio demo runs in local/mock data mode (no client backend exposed).",
      ar: "منيو إلكتروني جاهز للإنتاج + لوحة تحكم. الديمو يعمل بوضع محلي دون كشف باكند العميل.",
      de: "Produktionsreifes E-Menü mit Admin-CMS — lokaler Demo-Modus.",
      nl: "Productieklaar e-menu met admin — lokale demo.",
    },
    architectCredit: credit,
    tech: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Supabase / Local",
      "Tailwind",
      "PWA",
    ],
    highlights: {
      en: [
        "Guest menu, cart, favorites, and print flows",
        "Full admin: meals, branches, hero media, offers",
        "Image pipeline + bilingual UX",
      ],
      ar: [
        "منيو الضيوف، السلة، المفضلة، والطباعة",
        "لوحة تحكم: وجبات، فروع، وسائط، عروض",
        "معالجة صور وتجربة ثنائية اللغة",
      ],
      de: ["Gastmenü & Admin", "Filialen & Medien", "Zweisprachig"],
      nl: ["Gastenmenu & admin", "Filialen & media", "Tweetalig"],
    },
    overview: {
      en: "Guest-facing menu plus admin CMS: branches, offers, cart, and WhatsApp handoff.",
      ar: "منيو للزبائن مع لوحة تحكم: فروع، عروض، سلة، وربط واتساب.",
      de: "Gastmenü + Admin-CMS.",
      nl: "Gastmenu + admin-CMS.",
    },
    logo: "/work-assets/emenu-logo.png",
    gallery: [
      "/work-assets/emenu-logo.png",
      "/work-assets/emenu-preview.webp",
    ],
    demoKind: "iframe",
    demoSrc: portfolioDemoUrls.emenu,
    demoHints: {
      en: [
        "Start E-Menu on port 3002 with NEXT_PUBLIC_PORTFOLIO_DEMO=true.",
        'Guest menu at / — admin at /admin/login with one-click "Portfolio demo admin".',
        "Demo admin: demo@kfaour.menu / demo123456",
      ],
      ar: [
        "شغّل المنيو على المنفذ 3002 مع وضع المعرض.",
        "المنيو للزبائن على / — لوحة الأدمن مع زر دخول تجريبي.",
        "أدمن تجريبي: demo@kfaour.menu / demo123456",
      ],
      de: ["Port 3002", "Demo-Admin-Button"],
      nl: ["Poort 3002", "Demo-admin-knop"],
    },
    attribution: "المهندس خالد فاعور",
  },
  "mbco-pack": {
    id: "mbco-pack",
    title: {
      en: "MBCO PACK — Attendance & Leave PWA",
      ar: "MBCO PACK — دوام وإجازات (PWA)",
      de: "MBCO PACK — Anwesenheit PWA",
      nl: "MBCO PACK — aanwezigheid PWA",
    },
    subtitle: {
      en: "Internal HR PWA: leaves, overtime, schedules, PDF/Excel exports — portfolio build with in-browser demo store.",
      ar: "تطبيق داخلي للدوام والإجازات والجداول والتصدير — نسخة ديمو داخل المتصفح.",
      de: "Interne HR-PWA mit Demo-Datenspeicher.",
      nl: "Interne HR-PWA met demo-data.",
    },
    architectCredit: credit,
    tech: ["React", "Vite", "TypeScript", "Supabase", "PWA", "ExcelJS", "PDF"],
    highlights: {
      en: [
        "Sales manager approvals and employee self-service",
        "Weekly schedules and attendance corrections",
        "Offline-ready PWA with Damascus timezone logic",
      ],
      ar: [
        "موافقات المدير وخدمات الموظف",
        "جداول أسبوعية وتصحيح دوام",
        "PWA مع توقيت دمشق",
      ],
      de: ["Genehmigungen", "Wochenpläne", "PWA"],
      nl: ["Goedkeuringen", "Weekroosters", "PWA"],
    },
    overview: {
      en: "HR attendance PWA for field teams: leaves, overtime, weekly grids, PDF/Excel exports.",
      ar: "تطبيق دوام وإجازات للفرق الميدانية: إضافي، جداول أسبوعية، وتصدير.",
      de: "HR-Anwesenheits-PWA.",
      nl: "HR-aanwezigheids-PWA.",
    },
    logo: "/work-assets/mbco-logo.png",
    gallery: [
      "/work-assets/mbco-logo.png",
      "/demos/mbco-pack/assets/mbco-pack-logo.png",
    ],
    demoKind: "embedded",
    demoPath: "/demos/mbco-pack/index.html",
    demoHints: {
      en: [
        'Demo login: username "aymansattout" / password "123123123" (manager).',
        'Or use the one-click "demo mode" button on the login screen.',
      ],
      ar: [
        'تسجيل ديمو: المستخدم "aymansattout" وكلمة المرور "123123123" (مدير).',
        'أو زر «الوضع التجريبي» في شاشة الدخول.',
      ],
      de: ['Demo: aymansattout / 123123123', "Demo-Button"],
      nl: ['Demo: aymansattout / 123123123', "Demo-knop"],
    },
    attribution: "المهندس خالد فاعور",
  },
};