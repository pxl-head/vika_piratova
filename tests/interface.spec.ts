import { expect, test } from "@playwright/test";

const routes = ["/works", "/visual-art", "/photo-video", "/visual", "/about", "/contacts"];

test("public sections have one h1 and fit a 390px viewport", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toBeVisible();
    const geometry = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
    }));
    expect(geometry.content, `${route} must not overflow horizontally`).toBeLessThanOrEqual(geometry.viewport);
  }
});

test("menu targets and keyboard focus are accessible on mobile", async ({ page }) => {
  await page.goto("/works");
  const opener = page.getByRole("button", { name: "Открыть меню" });
  const telegram = page.getByRole("link", { name: "Telegram" });
  for (const target of [opener, telegram]) {
    const box = await target.boundingBox();
    expect(box).not.toBeNull();
    expect(box?.width).toBeGreaterThanOrEqual(44);
    expect(box?.height).toBeGreaterThanOrEqual(44);
  }

  await opener.click();
  const dialog = page.getByRole("dialog", { name: "Меню сайта" });
  await expect(dialog).toBeVisible();
  await expect(page.getByRole("button", { name: "Закрыть меню" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(opener).toBeFocused();
});

test("route metadata and language alternatives update together", async ({ page }) => {
  await page.goto("/works");
  await expect(page).toHaveTitle("Работы — Вика Пиратова");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://pxl-head.github.io/vika_piratova/works/",
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", "Работы — Вика Пиратова");
  await expect(page.locator('link[rel="alternate"][hreflang="ru"]')).toHaveAttribute(
    "href",
    "https://pxl-head.github.io/vika_piratova/works/",
  );

  await page.goto("/works?lang=en");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page).toHaveTitle("Works — Vika Piratova");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://pxl-head.github.io/vika_piratova/works/?lang=en",
  );
});
