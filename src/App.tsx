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
import { CASES } from "@/data/cases";
import { getCaseText } from "@/data/caseTranslations";
import { type Language, useLanguage } from "@/language";

interface RouteMetadata {
  title: string;
  description: string;
}

const ROUTE_METADATA: Record<Language, Record<string, RouteMetadata>> = {
  ru: {
    "/": {
      title: "Вика Пиратова — Визуальный художник и фотограф",
      description: "Вика Пиратова — визуальный художник, фотограф и контент-креатор. Вирусный арт, масштабная роспись, концептуальные фото и видео.",
    },
    "/works": {
      title: "Работы — Вика Пиратова",
      description: "Портфолио Вики Пиратовой: визуальное искусство, фотопроекты и видео.",
    },
    "/visual-art": {
      title: "Визуальное искусство — Вика Пиратова",
      description: "Живопись, иллюстрация и оформление пространств Вики Пиратовой.",
    },
    "/photo-video": {
      title: "Фото и видео — Вика Пиратова",
      description: "Концептуальные фотопроекты и видео Вики Пиратовой.",
    },
    "/visual": {
      title: "Визуал — Вика Пиратова",
      description: "Непрерывная визуальная лента работ Вики Пиратовой.",
    },
    "/about": {
      title: "Обо мне — Вика Пиратова",
      description: "О Вике Пиратовой — фотографе и мультидисциплинарном художнике.",
    },
    "/contacts": {
      title: "Контакты — Вика Пиратова",
      description: "Контакты Вики Пиратовой для съёмок, проектов и творческих коллабораций.",
    },
  },
  en: {
    "/": {
      title: "Vika Piratova — Visual Artist & Photographer",
      description: "Vika Piratova is a visual artist, photographer and content creator working across art, conceptual photography and video.",
    },
    "/works": {
      title: "Works — Vika Piratova",
      description: "Vika Piratova's portfolio of visual art, photo projects and video.",
    },
    "/visual-art": {
      title: "Visual Art — Vika Piratova",
      description: "Painting, illustration and spatial art by Vika Piratova.",
    },
    "/photo-video": {
      title: "Photo & Video — Vika Piratova",
      description: "Conceptual photo projects and video by Vika Piratova.",
    },
    "/visual": {
      title: "Visual — Vika Piratova",
      description: "A continuous visual feed of work by Vika Piratova.",
    },
    "/about": {
      title: "About — Vika Piratova",
      description: "About Vika Piratova, photographer and multidisciplinary artist.",
    },
    "/contacts": {
      title: "Contacts — Vika Piratova",
      description: "Contact Vika Piratova for shoots, projects and creative collaborations.",
    },
  },
};

function normalizePathname(pathname: string) {
  return pathname === "/" ? pathname : pathname.replace(/\/+$/, "");
}

function getRouteMetadata(pathname: string, language: Language): RouteMetadata {
  const normalizedPathname = normalizePathname(pathname);
  const caseId = normalizedPathname.match(/^\/case\/([^/]+)$/)?.[1];
  const item = caseId ? CASES.find((candidate) => candidate.id === caseId) : undefined;

  if (item) {
    const localized = getCaseText(item, language);
    return {
      title: `${item.title} — ${language === "ru" ? "Вика Пиратова" : "Vika Piratova"}`,
      description: localized.description.join(" "),
    };
  }

  return ROUTE_METADATA[language][normalizedPathname] ?? ROUTE_METADATA[language]["/"];
}

function RouteEffects() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const metadata = getRouteMetadata(pathname, language);
    window.scrollTo(0, 0);
    document.title = metadata.title;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", metadata.description);
  }, [language, pathname]);
  return null;
}

function App() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <Header />
      <div id="site-content">
        <a
          href="#main"
          className="micro sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-neutral-950 focus:px-4 focus:py-3 focus:text-white"
        >
          {language === "ru" ? "Перейти к содержимому" : "Skip to content"}
        </a>
        <RouteEffects />
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
      </div>
    </div>
  );
}

export default App;
