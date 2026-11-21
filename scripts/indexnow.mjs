/**
 * Submits portfolio URLs to IndexNow (Bing, Yandex, and partners).
 * Key file must exist at https://khaled-faour.com/<INDEXNOW_KEY>.txt
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const origin = "https://khaled-faour.com";

const keyFile = path.join(root, ".indexnow-key");
const publicDir = path.join(root, "public");

let key = existsSync(keyFile) ? readFileSync(keyFile, "utf8").trim() : "";
if (!key) {
  key = crypto.randomBytes(16).toString("hex");
  writeFileSync(keyFile, `${key}\n`, "utf8");
  writeFileSync(path.join(publicDir, `${key}.txt`), key, "utf8");
  console.log(`Created IndexNow key file: public/${key}.txt`);
} else {
  const pubPath = path.join(publicDir, `${key}.txt`);
  if (!existsSync(pubPath)) writeFileSync(pubPath, key, "utf8");
}

const urls = [
  `${origin}/`,
  `${origin}/sitemap.xml`,
  `${origin}/llms.txt`,
  `${origin}/works/school-erp`,
  `${origin}/works/block5-aleppo`,
  `${origin}/works/e-menu`,
  `${origin}/works/mbco-pack`,
];

const payload = {
  host: "khaled-faour.com",
  key,
  keyLocation: `${origin}/${key}.txt`,
  urlList: urls,
};

const endpoints = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
];

for (const endpoint of endpoints) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  console.log(`${endpoint} → ${res.status} ${res.statusText}`);
}