/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageCode } from "./types";

export type WorkProjectId =
  | "school-erp"
  | "block5-aleppo"
  | "e-menu"
  | "mbco-pack";

export interface WorkProjectMeta {
  id: WorkProjectId;
  title: Record<LanguageCode, string>;
  subtitle: Record<LanguageCode, string>;
  architectCredit: Record<LanguageCode, string>;
  tech: string[];
  highlights: Record<LanguageCode, string[]>;
  demoKind: "iframe" | "embedded";
  demoSrc?: string;
  demoPath?: string;
  demoHints?: Record<LanguageCode, string[]>;
  attribution: string;
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
    demoKind: "iframe",
    demoSrc: "http://localhost:3001",
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
    demoKind: "embedded",
    demoPath: "/demos/block5/index.html",
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
    demoKind: "iframe",
    demoSrc: "http://localhost:3002",
    demoHints: {
      en: [
        "Start the demo server on port 3002 (local data backend).",
        "Admin: use credentials from your local .env (not published).",
      ],
      ar: [
        "شغّل سيرفر الديمو على المنفذ 3002 (بيانات محلية).",
        "الأدمن: من بيانات .env المحلية فقط (غير منشورة).",
      ],
      de: ["Demo-Server Port 3002", "Admin nur lokal"],
      nl: ["Demo op poort 3002", "Admin alleen lokaal"],
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