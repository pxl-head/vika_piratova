import { copyFile, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const dist = new URL("../dist/", import.meta.url);
const assets = new URL("assets/", dist);
const base = "/vika_piratova/";
const siteUrl = "https://pxl-head.github.io/vika_piratova/";

// Public images are referenced from source with an absolute /images/ path.
// On a project Pages URL, prefix them after Vite has emitted its JavaScript.
for (const file of await readdir(assets)) {
  if (!file.endsWith(".js")) continue;
  const path = new URL(file, assets);
  const source = await readFile(fileURLToPath(path), "utf8");
  await writeFile(fileURLToPath(path), source.replaceAll('"/images/', `"${base}images/`));
}

const index = new URL("index.html", dist);
const indexHtml = await readFile(index, "utf8");
const caseSource = await readFile(new URL("../src/data/cases.ts", import.meta.url), "utf8");
const caseEntries = [...caseSource.matchAll(/\n\s+id: "([^"]+)"[\s\S]*?\n\s+title: "([^"]+)"/g)].map(
  ([, id, title]) => ({
    route: `case/${id}`,
    title: `${title} — Вика Пиратова`,
    description: `Проект «${title}» Вики Пиратовой.`,
  }),
);
const routes = [
  {
    route: "works",
    title: "Работы — Вика Пиратова",
    description: "Портфолио Вики Пиратовой: визуальное искусство, фотопроекты и видео.",
  },
  {
    route: "visual-art",
    title: "Визуальное искусство — Вика Пиратова",
    description: "Живопись, иллюстрация и оформление пространств Вики Пиратовой.",
  },
  {
    route: "photo-video",
    title: "Фото и видео — Вика Пиратова",
    description: "Концептуальные фотопроекты и видео Вики Пиратовой.",
  },
  {
    route: "visual",
    title: "Визуал — Вика Пиратова",
    description: "Непрерывная визуальная лента работ Вики Пиратовой.",
  },
  {
    route: "about",
    title: "Обо мне — Вика Пиратова",
    description: "О Вике Пиратовой — фотографе и мультидисциплинарном художнике.",
  },
  {
    route: "contacts",
    title: "Контакты — Вика Пиратова",
    description: "Контакты Вики Пиратовой для съёмок, проектов и творческих коллабораций.",
  },
  ...caseEntries,
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function pageUrl(route) {
  return new URL(route ? `${route}/` : "", siteUrl).href;
}

function replaceMeta(html, attribute, value, content) {
  const pattern = new RegExp(`<meta ${attribute}="${value}" content="[^"]*" \\/>`);
  return html.replace(pattern, `<meta ${attribute}="${value}" content="${escapeHtml(content)}" />`);
}

function withMetadata(html, { route, title, description }) {
  const canonical = pageUrl(route);
  let result = html
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<link rel="alternate" hreflang="ru" href="[^"]*" \/>/, `<link rel="alternate" hreflang="ru" href="${canonical}" />`)
    .replace(/<link rel="alternate" hreflang="en" href="[^"]*" \/>/, `<link rel="alternate" hreflang="en" href="${canonical}?lang=en" />`)
    .replace(/<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/, `<link rel="alternate" hreflang="x-default" href="${canonical}" />`);
  result = replaceMeta(result, "name", "description", description);
  result = replaceMeta(result, "property", "og:title", title);
  result = replaceMeta(result, "property", "og:description", description);
  result = replaceMeta(result, "property", "og:url", canonical);
  result = replaceMeta(result, "name", "twitter:title", title);
  result = replaceMeta(result, "name", "twitter:description", description);
  return result;
}

// Add real directory entry points for known routes so GitHub Pages returns 200
// for direct links while 404.html remains the fallback for unknown routes.
for (const metadata of routes) {
  const directory = new URL(`${metadata.route}/`, dist);
  await mkdir(directory, { recursive: true });
  await writeFile(
    new URL("index.html", directory),
    withMetadata(indexHtml, metadata),
  );
}

const sitemapRoutes = [{ route: "" }, ...routes];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapRoutes
  .map(({ route }) => {
    const url = pageUrl(route);
    return `  <url>
    <loc>${url}</loc>
    <xhtml:link rel="alternate" hreflang="ru" href="${url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${url}?lang=en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${url}" />
  </url>`;
  })
  .join("\n")}
</urlset>
`;
await writeFile(new URL("sitemap.xml", dist), sitemap);
await writeFile(
  new URL("robots.txt", dist),
  `User-agent: *\nAllow: /\nSitemap: ${siteUrl}sitemap.xml\n`,
);

// GitHub Pages serves this file when a visitor opens an unknown SPA route directly.
await copyFile(index, new URL("404.html", dist));
