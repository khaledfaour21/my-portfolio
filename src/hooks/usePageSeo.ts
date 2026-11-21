/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { LanguageCode } from "../types";
import { DEFAULT_OG_IMAGE, PERSON, SITE_ORIGIN } from "../lib/siteConfig";
import {
  getHomeSeo,
  getPlaySeo,
  getWorkSeo,
} from "../lib/seoCopy";
import { WorkProjectId, workProjects } from "../workProjects";

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
) {
  if (!content) return;
  let el = document.querySelector(
    `meta[${attr}="${key}"]`,
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = extra?.hreflang
    ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
    : `link[rel="${rel}"]${rel === "canonical" ? "" : `[href="${href}"]`}`;
  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el && rel === "canonical") {
    el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  }
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
  if (extra) {
    for (const [k, v] of Object.entries(extra)) {
      el.setAttribute(k, v);
    }
  }
}

function setJsonLd(id: string, data: object) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

interface PageSeoInput {
  language: LanguageCode;
  pathname: string;
  projectId?: string;
}

export function usePageSeo({ language, pathname, projectId }: PageSeoInput) {
  useEffect(() => {
    const isPlay = pathname.endsWith("/play");
    const workId = projectId as WorkProjectId | undefined;
    const hasWork = workId && workProjects[workId];

    const seo =
      hasWork && isPlay
        ? getPlaySeo(language, workId)
        : hasWork
          ? getWorkSeo(language, workId)
          : getHomeSeo(language);

    const canonical = `${SITE_ORIGIN}${seo.canonicalPath}`;
    const ogImage = ("ogImage" in seo && seo.ogImage) || DEFAULT_OG_IMAGE;

    document.documentElement.lang = language === "ar" ? "ar" : language;

    document.title = seo.title;

    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "keywords", seo.keywords);
    upsertMeta("name", "author", PERSON.name);
    const robotsDirective =
      "robots" in seo && typeof seo.robots === "string"
        ? seo.robots
        : "index, follow, max-image-preview:large";
    upsertMeta("name", "robots", robotsDirective);
    upsertMeta("name", "googlebot", "index, follow");
    upsertMeta("name", "bingbot", "index, follow");

    upsertMeta("property", "og:site_name", "Khaled Faour Portfolio");
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:type", seo.ogType);
    upsertMeta("property", "og:image", ogImage);
    const ogLocale =
      language === "ar"
        ? "ar_SY"
        : language === "de"
          ? "de_DE"
          : language === "nl"
            ? "nl_NL"
            : "en_US";
    upsertMeta("property", "og:locale", ogLocale);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", ogImage);

    upsertLink("canonical", canonical);

    const graph: Record<string, unknown>[] = [
      {
        "@type": "Person",
        "@id": `${SITE_ORIGIN}/#person`,
        name: PERSON.name,
        alternateName: PERSON.alternateName,
        email: PERSON.email,
        telephone: PERSON.telephone,
        jobTitle: PERSON.jobTitle.en,
        url: SITE_ORIGIN,
        image: DEFAULT_OG_IMAGE,
        sameAs: PERSON.sameAs,
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "Full-stack development",
          "RTL Arabic UI",
          "School ERP",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: PERSON.address.locality,
          addressCountry: PERSON.address.country,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: SITE_ORIGIN,
        name: "Khaled Faour Portfolio",
        alternateName: ["خالد فاعور", "Khaled Faour"],
        description: getHomeSeo("en").description,
        inLanguage: ["en", "ar", "de", "nl"],
        publisher: { "@id": `${SITE_ORIGIN}/#person` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_ORIGIN}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_ORIGIN}/#profile`,
        url: SITE_ORIGIN,
        mainEntity: { "@id": `${SITE_ORIGIN}/#person` },
        inLanguage: language,
      },
    ];

    if (hasWork && workId) {
      const p = workProjects[workId];
      graph.push({
        "@type": "CreativeWork",
        name: p.title.en,
        headline: p.title[language],
        description: p.subtitle[language],
        url: `${SITE_ORIGIN}/works/${workId}`,
        author: { "@id": `${SITE_ORIGIN}/#person` },
        image: `${SITE_ORIGIN}${p.logo}`,
        keywords: p.tech.join(", "),
      });
    }

    setJsonLd("portfolio-jsonld", {
      "@context": "https://schema.org",
      "@graph": graph,
    });
  }, [language, pathname, projectId]);
}