import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { CASES } from "../src/data/cases.ts";
import { getCaseText } from "../src/data/caseTranslations.ts";
import { VISUAL_IMAGES } from "../src/data/visual.ts";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));

function publicFile(src) {
  return path.join(projectRoot, "public", decodeURIComponent(src.replace(/^\//, "")));
}

test("case ids and indices are complete and unique", () => {
  assert.equal(CASES.length, 16);
  assert.equal(new Set(CASES.map(({ id }) => id)).size, CASES.length);
  assert.equal(new Set(CASES.map(({ index }) => index)).size, CASES.length);
  assert.deepEqual(
    CASES.map(({ index }) => Number(index)).sort((a, b) => a - b),
    Array.from({ length: CASES.length }, (_, index) => index + 1),
  );
});

test("all case and Visual media paths exist", async () => {
  const caseMedia = CASES.flatMap((item) => [
    item.cover,
    item.hover,
    ...(item.video ? [item.video] : []),
    ...item.gallery.map(({ src }) => src),
    ...item.process.map(({ img }) => img),
  ]);
  const media = [...new Set([...caseMedia, ...VISUAL_IMAGES])];
  await Promise.all(media.map((src) => access(publicFile(src))));
  assert.equal(VISUAL_IMAGES.length, 85);
});

test("every case has individual Russian and English copy", () => {
  const boilerplate = /Фотопроект собран|Полная серия кадров|standalone visual story|complete series is available/i;
  for (const item of CASES) {
    for (const language of ["ru", "en"]) {
      const copy = getCaseText(item, language);
      assert.ok(copy.description.join(" ").length >= 15, `${item.id} ${language} description`);
      assert.ok(copy.result.length >= 20, `${item.id} ${language} result`);
      assert.doesNotMatch(`${copy.description.join(" ")} ${copy.result} ${copy.resultFacts.join(" ")}`, boilerplate);
    }
  }
});
