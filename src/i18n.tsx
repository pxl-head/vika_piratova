import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router";
import { LanguageContext, type Language, useLanguage } from "@/language";
const STORAGE_KEY = "vika-piratova-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() =>
    window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "ru",
  );

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function LanguageSwitcher({ inMenu = false }: { inMenu?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const dark = isHome || inMenu;
  const label = language === "ru" ? "Выбор языка" : "Language selector";

  return (
    <div
      role="group"
      aria-label={label}
      className={`fixed bottom-4 left-4 z-[70] flex overflow-hidden border backdrop-blur-xl md:left-8 ${
        dark
          ? "border-white/30 bg-black/45 text-white"
          : "border-neutral-950/25 bg-white/85 text-neutral-950"
      }`}
    >
      {(["ru", "en"] as const).map((value) => {
        const active = language === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setLanguage(value)}
            aria-pressed={active}
            className={`micro min-w-11 px-3 py-2 transition-colors ${
              active
                ? dark
                  ? "bg-white text-neutral-950"
                  : "bg-neutral-950 text-white"
                : dark
                  ? "text-white/70 hover:text-white"
                  : "text-neutral-500 hover:text-neutral-950"
            }`}
          >
            {value.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
