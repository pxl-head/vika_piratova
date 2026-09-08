import { copyFile, readdir, readFile, writeFile } from "node:fs/promises";
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

// GitHub Pages serves this file when a visitor opens an SPA route directly.
await copyFile(new URL("index.html", dist), new URL("404.html", dist));
