import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { CASES } from "../src/data/cases.ts";

const dist = new URL("../dist/", import.meta.url);
const siteUrl = "https://pxl-head.github.io/vika_piratova/";
const routes = [
  "works",
  "visual-art",
  "photo-video",
  "visual",
  "about",
  "contacts",
  ...CASES.map(({ id }) => `case/${id}`),
];

await Promise.all([
  access(fileURLToPath(new URL("favicon.svg", dist))),
  access(fileURLToPath(new URL("robots.txt", dist))),
  access(fileURLToPath(new URL("sitemap.xml", dist))),
]);

for (const route of routes) {
  const html = await readFile(new URL(`${route}/index.html`, dist), "utf8");
  const canonical = new URL(`${route}/`, siteUrl).href;
  assert.match(html, /<title>[^<]+<\/title>/, `${route} title`);
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}" />`), `${route} canonical`);
  assert.ok(html.includes(`<meta property="og:url" content="${canonical}" />`), `${route} Open Graph URL`);
  assert.ok(html.includes(`<link rel="alternate" hreflang="ru" href="${canonical}" />`), `${route} Russian alternate`);
  assert.ok(html.includes(`<link rel="alternate" hreflang="en" href="${canonical}?lang=en" />`), `${route} English alternate`);
}

const sitemap = await readFile(new URL("sitemap.xml", dist), "utf8");
for (const route of routes) {
  assert.ok(sitemap.includes(new URL(`${route}/`, siteUrl).href), `${route} sitemap entry`);
}

const robots = await readFile(new URL("robots.txt", dist), "utf8");
assert.ok(robots.includes(`${siteUrl}sitemap.xml`));
console.log(`Verified ${routes.length} static routes, metadata, sitemap and robots.txt.`);
