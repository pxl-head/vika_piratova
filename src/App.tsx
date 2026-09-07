import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import "./App.css";
import Header from "@/sections/Header";
import HomePage from "@/pages/HomePage";
import WorksPage from "@/pages/WorksPage";
import CasePage from "@/pages/CasePage";
import VisualPage from "@/pages/VisualPage";
import AboutPage from "@/pages/AboutPage";
import ContactsPage from "@/pages/ContactsPage";
import { LanguageSwitcher } from "@/i18n";
import { type Language, useLanguage } from "@/language";

const ROUTE_TITLES: Record<Language, Record<string, string>> = {
  ru: {
    "/": "Вика Пиратова — Визуальный художник и фотограф",
    "/works": "Работы — Вика Пиратова",
    "/visual-art": "Визуальное искусство — Вика Пиратова",
    "/photo-video": "Фото и видео — Вика Пиратова",
    "/visual": "Визуал — Вика Пиратова",
    "/about": "Обо мне — Вика Пиратова",
    "/contacts": "Контакты — Вика Пиратова",
  },
  en: {
    "/": "Vika Piratova — Visual Artist & Photographer",
    "/works": "Works — Vika Piratova",
    "/visual-art": "Visual Art — Vika Piratova",
    "/photo-video": "Photo & Video — Vika Piratova",
    "/visual": "Visual — Vika Piratova",
    "/about": "About — Vika Piratova",
    "/contacts": "Contacts — Vika Piratova",
  },
};

function RouteEffects() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      ROUTE_TITLES[language][pathname] ??
      (pathname.startsWith("/case/")
        ? language === "ru"
          ? "Проект — Вика Пиратова"
          : "Project — Vika Piratova"
        : ROUTE_TITLES[language]["/"]);
  }, [language, pathname]);
  return null;
}

function App() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <a
        href="#main"
        className="micro sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-neutral-950 focus:px-4 focus:py-3 focus:text-white"
      >
        {language === "ru" ? "Перейти к содержимому" : "Skip to content"}
      </a>
      <RouteEffects />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/visual-art" element={<WorksPage preset="art" />} />
        <Route path="/photo-video" element={<WorksPage preset="photo" />} />
        <Route path="/case/:id" element={<CasePage />} />
        <Route path="/visual" element={<VisualPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <LanguageSwitcher />
    </div>
  );
}

export default App;
