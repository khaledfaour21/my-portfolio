/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExperienceType } from "./types";

type ExperienceEntry = ExperienceType & {
  stats: { output: string; security: string; tickets: string };
  icon: "briefcase" | "star" | "milestone" | "server" | "layers";
};

export const experienceData: ExperienceEntry[] = [
  {
    id: "horizon-top",
    company: "Horizon Top",
    role: {
      en: "Content Writer & Software Developer",
      ar: "كاتب محتوى ومطور برمجيات",
      de: "Content Writer & Softwareentwickler",
      nl: "Content Writer & Softwareontwikkelaar",
    },
    location: {
      en: "UAE — Remote",
      ar: "الإمارات — عن بُعد",
      de: "VAE — Remote",
      nl: "VAE — Remote",
    },
    period: {
      en: "Oct 2026 — Present",
      ar: "أكتوبر 2026 — حتى الآن",
      de: "Okt. 2026 — heute",
      nl: "Okt 2026 — heden",
    },
    points: {
      en: [
        "Ship marketing sites and product landing flows for Gulf-market clients.",
        "Write bilingual (AR/EN) content aligned with SEO and brand voice.",
        "Build and maintain React/Next.js features with performance-first UI.",
      ],
      ar: [
        "تطوير مواقع تسويقية وصفحات منتجات لعملاء سوق الخليج.",
        "كتابة محتوى ثنائي اللغة (عربي/إنجليزي) متوافق مع SEO وهوية العلامة.",
        "بناء وصيانة مزايا React/Next.js بواجهات عالية الأداء.",
      ],
      de: [
        "Marketing-Websites und Landing Pages für GCC-Kunden.",
        "Zweisprachige Inhalte (AR/EN) mit SEO-Fokus.",
        "React/Next.js-Features mit Performance-UI.",
      ],
      nl: [
        "Marketing sites en landing pages voor GCC-klanten.",
        "Tweetalige content (AR/EN) met SEO-focus.",
        "React/Next.js-features met performante UI.",
      ],
    },
    skills: ["Next.js", "React", "Content Strategy", "SEO", "TypeScript", "Tailwind"],
    stats: { output: "GCC Clients", security: "Brand-safe", tickets: "Live sprints" },
    icon: "briefcase",
  },
  {
    id: "zero-media",
    company: "Zero Media",
    role: {
      en: "Content Writer & Software Developer",
      ar: "كاتب محتوى ومطور برمجيات",
      de: "Content Writer & Softwareentwickler",
      nl: "Content Writer & Softwareontwikkelaar",
    },
    location: {
      en: "Aleppo, Syria — Hybrid",
      ar: "حلب، سوريا — مختلط",
      de: "Aleppo, Syrien — Hybrid",
      nl: "Aleppo, Syrië — Hybride",
    },
    period: {
      en: "Aug 2026 — Present",
      ar: "أغسطس 2026 — حتى الآن",
      de: "Aug. 2026 — heute",
      nl: "Aug 2026 — heden",
    },
    points: {
      en: [
        "Produce campaign copy and technical content for digital products.",
        "Develop client dashboards, menus, and internal tools (E-Menu, ads pipelines).",
        "Coordinate design-to-code handoff with agency stakeholders.",
      ],
      ar: [
        "إعداد نصوص الحملات والمحتوى التقني للمنتجات الرقمية.",
        "تطوير لوحات عملاء، منيو إلكتروني، وأدوات داخلية لصالح الوكالة.",
        "تنسيق التسليم من التصميم إلى الكود مع فريق Zero Media.",
      ],
      de: [
        "Kampagnentexte und technische Inhalte.",
        "Kunden-Dashboards, E-Menü und interne Tools.",
        "Design-to-Code mit Agentur-Team.",
      ],
      nl: [
        "Campagneteksten en technische content.",
        "Klantdashboards, e-menu en interne tools.",
        "Design-to-code met het agency-team.",
      ],
    },
    skills: ["Next.js", "Copywriting", "UI/UX", "TypeScript", "Supabase", "i18n"],
    stats: { output: "Agency delivery", security: "Client NDA", tickets: "Multi-brand" },
    icon: "layers",
  },
  {
    id: "mbco-pack",
    company: "MBCO Pack",
    role: {
      en: "IT Specialist & In-House App Developer",
      ar: "موظف IT ومطور التطبيق الداخلي للشركة",
      de: "IT-Spezialist & Inhouse-App-Entwickler",
      nl: "IT-specialist & interne app-ontwikkelaar",
    },
    location: {
      en: "Damascus Region, Syria",
      ar: "دمشق وريفها، سوريا",
      de: "Region Damaskus, Syrien",
      nl: "Regio Damascus, Syrië",
    },
    period: {
      en: "Jun 2026 — Present",
      ar: "يونيو 2026 — حتى الآن",
      de: "Juni 2026 — heute",
      nl: "Juni 2026 — heden",
    },
    points: {
      en: [
        "Own MBCO PACK PWA: attendance, leave, overtime, and manager approvals.",
        "Maintain Supabase-backed data flows, exports (PDF/Excel), and PWA releases.",
        "Support IT operations, device policies, and internal user onboarding.",
      ],
      ar: [
        "تطوير وصيانة تطبيق MBCO PACK: دوام، إجازات، إضافي، وموافقات الإدارة.",
        "إدارة تدفقات Supabase والتصدير PDF/Excel ونشر نسخ PWA.",
        "دعم تقني IT وسياسات الأجهزة وتأهيل المستخدمين الداخليين.",
      ],
      de: [
        "MBCO PACK PWA: Anwesenheit, Urlaub, Überstunden.",
        "Supabase, PDF/Excel-Export, PWA-Releases.",
        "IT-Support und internes Onboarding.",
      ],
      nl: [
        "MBCO PACK PWA: aanwezigheid, verlof, overuren.",
        "Supabase, PDF/Excel-export, PWA-releases.",
        "IT-support en intern onboarding.",
      ],
    },
    skills: ["React", "Vite", "PWA", "Supabase", "TypeScript", "HR Systems"],
    stats: { output: "MBCO PACK", security: "Internal IT", tickets: "Field teams" },
    icon: "server",
  },
  {
    id: "freelance",
    company: "Independent / Freelance",
    role: {
      en: "Freelance Software Developer",
      ar: "مطور برمجيات مستقل (فريلانسر)",
      de: "Freiberuflicher Softwareentwickler",
      nl: "Freelance softwareontwikkelaar",
    },
    location: {
      en: "Syria & Remote (EU/GCC)",
      ar: "سوريا وعن بُعد (أوروبا والخليج)",
      de: "Syrien & Remote (EU/GCC)",
      nl: "Syrië & remote (EU/GCC)",
    },
    period: {
      en: "2024 — Present",
      ar: "2024 — حتى الآن",
      de: "2024 — heute",
      nl: "2024 — heden",
    },
    points: {
      en: [
        "Deliver full-stack web apps for restaurants, logistics, education, and civic tech.",
        "Prime Transporter (DE), graduation ERP, Aleppo civic platform, and e-menu products.",
        "Portfolio-grade demos without exposing client source — live + embedded showcases.",
      ],
      ar: [
        "تسليم تطبيقات ويب متكاملة: مطاعم، لوجستيات، تعليم، ومنصات مجتمعية.",
        "مشاريع: Prime Transporter، ERP تخرج، الكتلة الخامسة، والمنيو الإلكتروني.",
        "ديمو احترافي للمعرض دون كشف سورس العملاء — روابط حية ودمج تفاعلي.",
      ],
      de: [
        "Full-Stack für Gastronomie, Logistik, Bildung, Civic Tech.",
        "Prime Transporter, ERP, Block 5, E-Menü.",
        "Portfolio-Demos ohne Source-Leak.",
      ],
      nl: [
        "Full-stack voor horeca, logistiek, onderwijs, civic tech.",
        "Prime Transporter, ERP, Block 5, e-menu.",
        "Portfolio-demos zonder source-lek.",
      ],
    },
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Client Delivery",
    ],
    stats: { output: "Multi-sector", security: "NDA-ready", tickets: "End-to-end" },
    icon: "star",
  },
  {
    id: "portfolio-cv",
    company: "Khaled Faour — Portfolio",
    role: {
      en: "Portfolio & Work Showcase Engineer",
      ar: "مطور معرض أعمال وبورتفوليو CV",
      de: "Portfolio- & Showcase-Engineer",
      nl: "Portfolio- & showcase-engineer",
    },
    location: {
      en: "Aleppo, Syria",
      ar: "حلب، سوريا",
      de: "Aleppo, Syrien",
      nl: "Aleppo, Syrië",
    },
    period: {
      en: "2025 — Present",
      ar: "2025 — حتى الآن",
      de: "2025 — heute",
      nl: "2025 — heden",
    },
    points: {
      en: [
        "Built this multilingual portfolio (EN/AR/DE/NL) with dark/light UX and motion.",
        "Embedded secure demos: Block 5, MBCO PACK, school ERP, and e-menu case studies.",
        "Split case-study pages from full-screen playable demos for recruiter-friendly CV flow.",
      ],
      ar: [
        "بناء هذا البورتفوليو متعدد اللغات مع وضع ليلي/نهاري وتجربة حركية.",
        "دمج ديمو آمن: الكتلة الخامسة، MBCO PACK، المدرسة، والمنيو مع صفحات شرح.",
        "فصل صفحة Case Study عن تشغيل التطبيق بملء الشاشة لتجربة CV واضحة للمديرين.",
      ],
      de: [
        "Mehrsprachiges Portfolio mit Dark/Light-UX.",
        "Eingebettete Demos: Block 5, MBCO, Schule, E-Menü.",
        "Case Study vs. Vollbild-Demo für Recruiter.",
      ],
      nl: [
        "Meertalig portfolio met dark/light UX.",
        "Ingebedde demo's: Block 5, MBCO, school, e-menu.",
        "Case study vs. fullscreen demo voor recruiters.",
      ],
    },
    skills: ["Vite", "React", "React Router", "Tailwind", "i18n", "Demo UX"],
    stats: { output: "4+ Demos", security: "No source leak", tickets: "CV-ready" },
    icon: "milestone",
  },
  {
    id: "ai-solutions",
    company: "Ai Solutions",
    role: {
      en: "Frontend Developer Intern",
      ar: "متدرب مطور واجهات أمامية",
      de: "Frontend-Entwickler Praktikant",
      nl: "Frontend stagiair",
    },
    location: {
      en: "Russia — Remote",
      ar: "روسيا — عن بُعد",
      de: "Russland — Remote",
      nl: "Rusland — Remote",
    },
    period: {
      en: "6 Months — DataScience-10x",
      ar: "6 أشهر — DataScience-10x",
      de: "6 Monate — DataScience-10x",
      nl: "6 maanden — DataScience-10x",
    },
    points: {
      en: [
        "Architected responsive multi-language interfaces on the DataScience-10x education platform.",
        "Engineered micro-animations and modular layouts improving rendering performance.",
        "Participated in active sprint cycles using Agile framework and Asana tracking tools.",
      ],
      ar: [
        "تصميم وهندسة واجهات متعددة اللغات سريعة الاستجابة لمنصة DataScience-10x.",
        "بناء حركات تفاعلية دقيقة وهياكل برمجية معيارية زادت من سرعة النمذجة والاستجابة.",
        "المشاركة الفعالة في دورات تطوير رشيقة (Agile) باستخدام Asana.",
      ],
      de: [
        "Responsive Mehrsprach-UI für DataScience-10x.",
        "Micro-Animations und modulare Layouts.",
        "Agile Sprints mit Asana.",
      ],
      nl: [
        "Responsive meertalige UI voor DataScience-10x.",
        "Micro-animaties en modulaire layouts.",
        "Agile sprints met Asana.",
      ],
    },
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Agile", "Asana"],
    stats: { output: "+40% Delivery", security: "W3C Compliant", tickets: "84 Sprints" },
    icon: "milestone",
  },
  {
    id: "vibereach",
    company: "VibeReach",
    role: {
      en: "Software Engineering Trainee",
      ar: "متدرب في هندسة البرمجيات",
      de: "Software Engineering Trainee",
      nl: "Software-engineering trainee",
    },
    location: {
      en: "Aleppo, Syria",
      ar: "حلب، سوريا",
      de: "Aleppo, Syrien",
      nl: "Aleppo, Syrië",
    },
    period: {
      en: "3 Months",
      ar: "3 أشهر",
      de: "3 Monate",
      nl: "3 maanden",
    },
    points: {
      en: [
        "Engineered advanced AI-powered components for high-throughput Email Management systems.",
        "Achieved a 30% reduction in response generation times via custom LLM context workflows.",
        "Collaborated on backend database migrations and API structural audits.",
      ],
      ar: [
        "برمجة مكونات ذكية قائمة على الذكاء الاصطناعي لأنظمة إدارة البريد الإلكتروني.",
        "رفع كفاءة توليد الردود التلقائية بنسبة 30٪ عبر سياق LLM محسّن.",
        "التعاون في ترحيل قواعد البيانات وتدقيق APIs.",
      ],
      de: [
        "KI-Komponenten für E-Mail-Management.",
        "30% schnellere LLM-Antworten.",
        "DB-Migrationen und API-Audits.",
      ],
      nl: [
        "AI-componenten voor e-mailbeheer.",
        "30% snellere LLM-antwoorden.",
        "DB-migraties en API-audits.",
      ],
    },
    skills: ["AI Assistants", "Node.js", "Express", "LLM Pipelines", "API Design"],
    stats: { output: "Custom LLMs", security: "TLS Encryption", tickets: "22 pipelines" },
    icon: "star",
  },
];