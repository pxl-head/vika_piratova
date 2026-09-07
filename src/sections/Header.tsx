import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { SOCIALS, TELEGRAM_URL } from "@/data/cases";
import { type Language, useLanguage } from "@/language";

const MENU_ITEMS: Record<Language, { label: string; to: string; note: string }[]> = {
  ru: [
    { label: "Главная", to: "/", note: "Разделённый экран" },
    { label: "Работы", to: "/works", note: "Все проекты" },
    { label: "Визуал", to: "/visual", note: "Непрерывная лента работ" },
    { label: "Визуальное искусство", to: "/visual-art", note: "Живопись · Иллюстрация · Роспись" },
    { label: "Фотопроекты", to: "/photo-video", note: "Fantasy Of Poison · MERMAIDS · FANTASY OF POISON II · PSYCHO · PAINTED DOLLS · TEXTURE · CAKE OR FAKE · TOKYO STYLE" },
    { label: "Обо мне", to: "/about", note: "Комьюнити и позиционирование" },
    { label: "Контакты", to: "/contacts", note: "Telegram и соцсети" },
  ],
  en: [
    { label: "Home", to: "/", note: "Split screen" },
    { label: "Works", to: "/works", note: "All projects" },
    { label: "Visual", to: "/visual", note: "Continuous feed of works" },
    { label: "Visual Art", to: "/visual-art", note: "Painting · Illustration · Murals" },
    { label: "Photo Projects", to: "/photo-video", note: "Fantasy Of Poison · MERMAIDS · FANTASY OF POISON II · PSYCHO · PAINTED DOLLS · TEXTURE · CAKE OR FAKE · TOKYO STYLE" },
    { label: "About", to: "/about", note: "Community & positioning" },
    { label: "Contacts", to: "/contacts", note: "Telegram & socials" },
  ],
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);
  const { language } = useLanguage();
  const menuItems = MENU_ITEMS[language];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      closeButtonRef.current?.focus();
    } else if (wasOpenRef.current) {
      menuButtonRef.current?.focus();
    }
    wasOpenRef.current = open;
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 ${
          isHome
            ? "border-b border-white/[0.15] bg-white/[0.10] text-white backdrop-blur-xl"
            : "border-b border-neutral-950/10 bg-white/75 text-neutral-950 backdrop-blur-xl"
        }`}
      >
        <div className="relative flex h-14 items-center justify-between px-4 md:px-8">
          <button
            ref={menuButtonRef}
            onClick={() => setOpen(true)}
            className="micro flex items-center gap-3"
            aria-label={language === "ru" ? "Открыть меню" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <span className="flex flex-col gap-[5px]">
              <span className={`block h-px w-6 ${isHome ? "bg-white" : "bg-neutral-950"}`} />
              <span className={`block h-px w-6 ${isHome ? "bg-white" : "bg-neutral-950"}`} />
            </span>
            {language === "ru" ? "Меню" : "Menu"}
          </button>

          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-display text-base font-semibold uppercase tracking-[0.25em]"
          >
            Vika Piratova
          </Link>

          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="micro hidden sm:block">
            {language === "ru" ? "Контакт" : "Contact"}
          </a>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="micro sm:hidden" aria-label="Telegram">
            TG
          </a>
        </div>
      </header>

      {/* Fullscreen menu */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label={language === "ru" ? "Меню сайта" : "Site menu"}
        className={`fixed inset-0 z-50 bg-neutral-950 text-white transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-4 md:px-8">
          <span className="micro text-white/50">{language === "ru" ? "Навигация" : "Navigation"}</span>
          <button ref={closeButtonRef} onClick={() => setOpen(false)} className="micro" aria-label={language === "ru" ? "Закрыть меню" : "Close menu"}>
            {language === "ru" ? "Закрыть" : "Close"} ✕
          </button>
        </div>

        <nav className="flex h-[calc(100%-3.5rem-7rem)] flex-col justify-center px-4 md:px-8">
          {menuItems.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`group flex items-baseline gap-4 border-b border-white/10 py-4 text-left transition-all duration-500 md:gap-8 md:py-5 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              aria-current={pathname === item.to ? "page" : undefined}
            >
              <span className="micro w-8 text-white/50">0{i + 1}</span>
              <span className="display-xl text-4xl transition-colors group-hover:text-white/60 md:text-6xl">
                {item.label}
              </span>
              <span className="micro ml-auto hidden text-white/50 md:block">{item.note}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute inset-x-0 bottom-0 flex h-28 flex-col justify-center gap-3 px-4 md:px-8">
          <span className="micro text-white/50">{language === "ru" ? "Соцсети" : "Socials"}</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="micro text-white/80 transition-colors hover:text-white"
              >
                {language === "ru" && s.label === "Email" ? "Почта" : s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
