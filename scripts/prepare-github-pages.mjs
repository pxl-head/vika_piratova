import { copyFile, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const dist = new URL("../dist/", import.meta.url);
const assets = new URL("assets/", dist);
const base = "/vika_piratova/";

// Public images are referenced from source with an absolute /images/ path.
// On a project Pages URL, prefix them after Vite has emitted its JavaScript.
for (const file of await readdir(assets)) {
  if (!file.endsWith(".js")) continue;
  const path = new URL(file, assets);
  const source = await readFile(fileURLToPath(path), "utf8");
  await writeFile(fileURLToPath(path), source.replaceAll('"/images/', `"${base}images/`));
}

const index = new URL("index.html", dist);
const caseSource = await readFile(new URL("../src/data/cases.ts", import.meta.url), "utf8");
const caseIds = [...caseSource.matchAll(/\n\s+id: "([^"]+)"/g)].map(([, id]) => id);
const routes = ["works", "visual-art", "photo-video", "visual", "about", "contacts", ...caseIds.map((id) => `case/${id}`)];

// Add real directory entry points for known routes so GitHub Pages returns 200
// for direct links while 404.html remains the fallback for unknown routes.
for (const route of routes) {
  const directory = new URL(`${route}/`, dist);
  await mkdir(directory, { recursive: true });
  await copyFile(index, new URL("index.html", directory));
}

// GitHub Pages serves this file when a visitor opens an unknown SPA route directly.
await copyFile(index, new URL("404.html", dist));
