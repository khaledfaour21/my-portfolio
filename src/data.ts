/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProjectType } from "./types";

export const projectsData: ProjectType[] = [
  {
    id: "prime-transporter",
    title: "Prime Transporter",
    description: {
      en: "A premium German-based transportation & enterprise-grade logistics platform designed for precision booking, flight dispatching, and high-performance dispatch tracking.",
      ar: "منصة لوجستية ألمانية متطورة مخصصة لجدولة الشحنات، تتبع أسطول النقل البري والبحري، وإدارة رحلات الشحن بدقة وكفاءة متناهية.",
      de: "Eine erstklassige deutsche Transport- und Logistikplattform für präzise Buchungen, Routenoptimierung und hochperformantes Echtzeit-Tracking.",
      nl: "Een premium Duits transport- en logistiek platform ontworpen voor nauwkeurige boekingen, route-optimalisatie en realtime tracking van zendingen."
    },
    longDescription: {
      en: "Engineered specifically to satisfy strict European logistics requirements and German market standards. Implemented a seamless multi-step instant booking booking system, real-time dynamic estimates, interactive map tracking, and fully compliant PDF invoices generation. The booking layout boasts sub-50ms interaction latency.",
      ar: "تم تطويرها خصيصاً لتلبية المعايير الألمانية والأوروبية الصارمة للتوريد واللوجستيات. تتضمن نظام الحجز الفوري المتقدم، التسعير الديناميكي الذكي، خرائط التتبع الفوري للشحنات، وفواتير PDF معتمدة تلقائياً. صُمم الهيكل التفاعلي ليوفر سرعة استجابة فائقة تحت الأجزاء من الثانية.",
      de: "Speziell entwickelt, um die strengen Logistikanforderungen auf dem deutschen Markt zu erfüllen. Ausgestattet mit einem nahtlosen, mehrstufigen Echtzeit-Buchungssystem, dynamischer Preisberechnung, interaktiver Routenverfolgung und automatisierter PDF-Rechnungserstellung.",
      nl: "Speciaal gebouwd om te voldoen aan de stringente logistieke eisen van de Duitse en Europese markt. Uitgerust met een naadloos realtime boekingssysteem, dynamische prijsberekening, interactieve tracking en geautomatiseerde PDF-facturering."
    },
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Motion", "REST APIs", "PDF Generation"],
    isLive: true,
    liveUrl: "https://primetransporter.de",
    githubUrl: "https://github.com/khaledfaour21/prime-transporter",
    highlights: {
      en: [
        "Sleek Multilingual Stepper booking module",
        "Sub-100ms Server Side Rendering speed",
        "Fully fully fluid custom glassmorphic dashboards"
      ],
      ar: [
        "نظام حجز ذكي ومحكم متعدد الخطوات واللغات",
        "سرعة استجابة وتحميل للصفحات تقل عن 100 مللي ثانية",
        "لوحات تحكم متكاملة زجاجية ونظيفة بالكامل"
      ],
      de: [
        "Intuitives, mehrsprachiges Buchungsmodul",
        "Server-Side Rendering unter 100ms",
        "Flüssige und moderne Glassmorphism-Dashboards"
      ],
      nl: [
        "Intuïtieve meertalige boekingsmodule",
        "Server-side rendering onder 100ms",
        "Vloeiende en moderne glassmorphism dashboards"
      ]
    }
  },
  {
    id: "datascience-10x",
    title: "DataScience-10x",
    description: {
      en: "A global enterprise educational platform designed to provide structured high-fidelity training cohorts in Data Science and machine learning.",
      ar: "منصة تعليمية عالمية مخصصة لتدريب وتعليم علوم البيانات والذكاء الاصطناعي من خلال مناهج منظمة وتفاعلية عالية الموثوقية.",
      de: "Eine globale EdTech-Plattform für strukturierte High-Fidelity-Schulungen in den Bereichen Data Science und Maschinelles Lernen.",
      nl: "Een wereldwijd edtech-platform voor gestructureerde, hoogwaardige trainingen in Data Science en Machine Learning."
    },
    longDescription: {
      en: "Developed during an active 6-month internship at Ai Solutions (Russia). Configured high-performance responsive interfaces, custom interactive quiz engines, timeline trackers for students, and structured grade books. Monitored task delivery with maximum efficiency within short active Agile-sprint intervals.",
      ar: "تم تطويرها بالكامل خلال فترة تدريب امتدت لـ 6 أشهر في شركة Ai Solutions الروسية. تضمن العمل برمجة لوحات تحكم مرنة للطلاب والمشرفين، محركات اختبار تفاعلية، ومخططات لمراقبة تقدم الطلاب الدراسي ضمن منهجيات التطوير الرشيقة Agile.",
      de: "Entwickelt während eines 6-monatigen Praktikums bei Ai Solutions (Russland). Implementierung hochperformanter Interfaces, interaktiver Quiz-Systeme und strukturierter Lernpfade für Studierende unter agilen Sprints.",
      nl: "Ontwikkeld tijdens een stage van 6 maanden bij Ai Solutions (Rusland). Implementatie van hoogwaardige interfaces, interactieve quizsystemen en gestructureerde leertrajecten voor studenten binnen agile sprints."
    },
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Agile Sprints", "Asana Pipelines"],
    isLive: true,
    liveUrl: "https://datascience10x.com", // Reference portfolio link placeholder
    githubUrl: "https://github.com/khaledfaour21/datascience-10x",
    highlights: {
      en: [
        "Responsive Cohort Admin panel with students metrics",
        "Strict localization dictionary integration",
        "Seamless integration with task scheduling tools"
      ],
      ar: [
        "لوحة إدارة تفاعلية لمتابعة المقاييس الأكاديمية للطلاب",
        "دمج كامل ومنظم لقواميس الترجمة واللغات المحلية",
        "تكامل مثالي مع أدوات جدولة المهام والمشاريع"
      ],
      de: [
        "Responsives Admin-Dashboard zur Leistungsanalyse",
        "Strikte Integration lokalisierter Sprachdateien",
        "Nahtlose Anbindung an Projektmanagement-Systeme"
      ],
      nl: [
        "Responsief admin-dashboard voor prestatieanalyse",
        "Strikte integratie van gelokaliseerde taalbestanden",
        "Nahtlose integratie met projectbeheersystemen"
      ]
    }
  },
  {
    id: "school-management",
    title: "School Management System",
    description: {
      en: "A robust 4-tier role-based educational ERP designed as a Software Engineering Graduation Project, scoring an exceptional 86/100 grade.",
      ar: "نظام برمجيات متكامل رباعي الصلاحيات (مشروع تخرج حاز على درجة متميزة 86/100) لإدارة وتسيير العمليات التعليمية والإدارية.",
      de: "Ein robustes, rollenbasiertes ERP-System für Schulen mit 4 Ebenen, entwickelt als Abschlussarbeit im Software-Engineering (Note: 86/100).",
      nl: "Een robuust, op rollen gebaseerd ERP-systeem voor scholen met 4 niveaus, ontwikkeld als afstudeerproject software-engineering (cijfer: 86/100)."
    },
    longDescription: {
      en: "Specifically designed to digitize and automate manual operations within learning environments. Implemented role-based security clearance for Admin (full oversight), Teacher (scheduling, grade entering), Student (grades, schedule, coursework), and Parent (performance tracking, billing checks). Designed on a secure, local SQL architectural schema.",
      ar: "مُصمم خصيصاً لأتمتة وتسيير المعاملات التعليمية يدوياً. يوفر جدار حماية وصلاحيات مخصصة لكل من: المدير (إشراف كامل)، المعلم (رصد الدرجات والجداول)، الطالب (عرض الواجبات والمعدلات)، والوليّ (متابعة السلوك والفواتير). بُني على قواعد بيانات SQL وهيكلية برمجية آمنة.",
      de: "Speziell entwickelt zur Digitalisierung manueller Prozesse im Schulwesen. Rollenbasierte Zugriffsebenen für Administratoren, Lehrer (Noteneingabe, Stundenpläne), Schüler (Hausaufgaben, Zeugnisse) und Eltern (Finanzübersicht & Leistungsüberwachung).",
      nl: "Speciaal ontworpen om handmatige processen in schoolomgevingen te digitaliseren. Op rollen gebaseerde toegangsniveaus voor beheerders, leraren (cijferinvoer, roosters), studenten (huiswerk, rapporten) en ouders (financieel overzicht & prestatiemonitoring)."
    },
    tech: ["React.js", "C# .NET Core", "SQL Server", "Role-Based Security", "Prisma ORM", "Tailwind CSS"],
    isLive: false,
    images: ["admin_dash", "teacher_grading", "student_portal", "parent_billing"],
    highlights: {
      en: [
        "Comprehensive 4-tier isolated security access",
        "Automated class assignment and timetabling modules",
        "Graduation Project evaluated with Distinction (86/100)"
      ],
      ar: [
        "نظام أمان وصلاحيات شامل معزول رباعي الطبقات",
        "وحدات جدولة مخصصة لتوزيع الحصص والصفوف آلياً",
        "مشروع تخرج معتمد بدرجة امتياز عالية (86/100)"
      ],
      de: [
        "Umfassende rollenbasierte Sicherheitsarchitektur",
        "Automatisierte Stundenplanerstellung & Zuweisungen",
        "Abschlussarbeit mit Auszeichnung (Note: 86/100) bewertet"
      ],
      nl: [
        "Uitgebreide op rollen gebaseerde beveiligingsarchitectuur",
        "Geautomatiseerde roosterplanning en klastoewijzing",
        "Afstudeerproject met onderscheiding (cijfer: 86/100) beoordeeld"
      ]
    }
  },
  {
    id: "complaints-platform",
    title: "Aleppo civic platform",
    description: {
      en: "A scalable, civic-driven community initiative and public complaint registration system engineered to support citizens in Aleppo, Syria.",
      ar: "منصة مجتمعية متكاملة وموسعة لتقديم المبادرات المدنية وتسجيل شكاوى الخدمات العامة لمواطني مدينة حلب بسوريا.",
      de: "Eine skalierbare Bürgerplattform für kommunale Initiativen und Mängelberichte in Aleppo, Syrien.",
      nl: "Een schaalbaar burgerplatform voor gemeenschapsinitiatieven en meldingen van openbare diensten in Aleppo, Syrië."
    },
    longDescription: {
      en: "Co-founded and developed to establish a direct pipeline between public citizens and initiative committees. Supports geographic pinpointing of infrastructural damages, category sorting, public support voting on proposed improvements, and interactive real-time status dashboards directly managed by civic groups.",
      ar: "شارك في تأسيسها وتطويرها لبناء خط اتصال مباشر بين المواطنين واللجان الأهلية. توفر المنصة تحديداً جغرافياً للمشاكل الخدمية، نظام تصنيف متطور، التصويت العام لدعم المبادرات، ولوحة تحكم لإدارة حالة المشاكل الواردة فورا.",
      de: "Als Mitbegründer entwickelt, um den Kommunikationskanal zwischen Bürgern und lokalen Komitees zu optimieren. Mit geographischer Verortung von Mängeln, Abstimmungsmodulen für Bürgerinitiativen und interaktiven Status-Dashboards.",
      nl: "Mede-opgericht en ontwikkeld om de communicatie tussen burgers en lokale comités te digitaliseren. Uitgerust met geografische locatiebepaling, stemmodules voor burgerinitiatieven en interactieve statusdashboards."
    },
    tech: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Geocoding", "Interactive Maps"],
    isLive: false,
    images: ["citizen_submit", "public_feed", "admin_map", "analytics_chart"],
    highlights: {
      en: [
        "Geocoded coordinate pinpointing for infrastructure issues",
        "Interactive upvoting mechanisms for community proposals",
        "State tracking dashboard (Pending, In Investigation, Resolved)"
      ],
      ar: [
        "تحديد الإحداثيات الجغرافية بدقة لمواقع المشاكل الخدمية",
        "نظام تفاعلي متطور للتصويت ودعم المقترحات المجتمعية",
        "لوحة مراقبة الحالات (قيد المراجعة، قيد التنفيذ، تم الحل)"
      ],
      de: [
        "Geolokalisierte Positionsbestimmung von Infrastrukturmängeln",
        "Interaktive Upvote-Funktion für kommunale Vorschläge",
        "Statusüberwachtes Ticket-System (In Prüfung, In Arbeit, Erledigt)"
      ],
      nl: [
        "Geolocatie voor het exact pinpointen van infrastructuurproblemen",
        "Interactief stemsysteem voor gemeenschapsvoorstellen",
        "Statusvolgsysteem (In behandeling, In onderzoek, Opgelost)"
      ]
    }
  }
];

export const skillCategories = [
  {
    title: {
      en: "Frontend Craftsmanship",
      ar: "هندسة الواجهات الأمامية",
      de: "Frontend-Architektur",
      nl: "Frontend Architectuur"
    },
    skills: [
      { name: "Next.js", level: "Expert" },
      { name: "React.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Expert" },
      { name: "JavaScript ES6+", level: "Expert" }
    ]
  },
  {
    title: {
      en: "Backend & Systems",
      ar: "الأنظمة الخلفية وقواعد البيانات",
      de: "Backend & Systeme",
      nl: "Backend & Systemen"
    },
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Python (Django)", level: "Intermediate" },
      { name: "C# .NET Core", level: "Intermediate" },
      { name: "C++ / C", level: "Intermediate" },
      { name: "SQL Databases", level: "Advanced" },
      { name: "Prisma ORM", level: "Advanced" }
    ]
  },
  {
    title: {
      en: "Workflow & AI Integration",
      ar: "بيئات العمل والذكاء الاصطناعي",
      de: "Workflow & KI-Integration",
      nl: "Workflow & AI Integratie"
    },
    skills: [
      { name: "Git & Version Control", level: "Expert" },
      { name: "Agile / Scrum Sprints", level: "Expert" },
      { name: "Asana Pipelines", level: "Advanced" },
      { name: "AI Coding Accelerators", level: "Expert" },
      { name: "REST API Design", level: "Expert" }
    ]
  }
];
