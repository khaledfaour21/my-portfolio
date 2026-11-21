import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const origin = "https://khaled-faour.com";
const lastmod = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/#about", changefreq: "monthly", priority: "0.9" },
  { loc: "/#experience", changefreq: "monthly", priority: "0.85" },
  { loc: "/#projects", changefreq: "weekly", priority: "0.95" },
  { loc: "/#contact", changefreq: "monthly", priority: "0.8" },
  { loc: "/works/school-erp", changefreq: "monthly", priority: "0.9" },
  { loc: "/works/block5-aleppo", changefreq: "monthly", priority: "0.88" },
  { loc: "/works/e-menu", changefreq: "monthly", priority: "0.85" },
  { loc: "/works/mbco-pack", changefreq: "monthly", priority: "0.85" },
];

const body = urls
  .map(
    (u) => `  <url>
    <loc>${origin}${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;

const outPublic = path.join(__dirname, "..", "public", "sitemap.xml");
const outDist = path.join(__dirname, "..", "dist", "sitemap.xml");
writeFileSync(outPublic, xml, "utf8");
try {
  writeFileSync(outDist, xml, "utf8");
} catch {
  /* dist may not exist before first build */
}

console.log(`Wrote sitemap.xml (${urls.length} URLs) → public/ and dist/`);