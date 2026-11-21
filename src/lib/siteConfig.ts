/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/** Canonical production origin (no trailing slash). */
export const SITE_ORIGIN = "https://khaled-faour.com";

export const PERSON = {
  name: "Khaled Faour",
  givenName: "Khaled",
  familyName: "Faour",
  alternateName: [
    "خالد فاعور",
    "المهندس خالد فاعور",
    "Khaled Faour Engineer",
    "Khaled Faour Portfolio",
    "مهندس خالد فاعور",
  ],
  email: "khaledfaour718@gmail.com",
  telephone: "+963938796079",
  jobTitle: {
    en: "Informatics Engineer & Full-Stack Developer",
    ar: "مهندس معلوماتية ومطور Full-Stack",
    de: "Informatikingenieur & Full-Stack-Entwickler",
    nl: "Informatica-ingenieur & full-stack ontwikkelaar",
  },
  address: {
    locality: "Aleppo",
    country: "SY",
  },
  sameAs: [
    "https://github.com/khaledfaour21",
    "https://www.linkedin.com/in/khaled-faour-eng",
  ],
} as const;

export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/work-assets/og-image.png`;

export const SITEMAP_PATHS = [
  "/",
  "/#about",
  "/#experience",
  "/#projects",
  "/#contact",
  "/works/school-erp",
  "/works/block5-aleppo",
  "/works/e-menu",
  "/works/mbco-pack",
] as const;