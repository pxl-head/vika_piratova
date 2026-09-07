import { Link } from "react-router";
import { useLanguage } from "@/language";

export default function PageFooter() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-neutral-950 bg-white">
      <div className="flex flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <Link to="/" className="font-display text-sm font-semibold uppercase tracking-[0.25em]">
          Vika Piratova
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/works" className="micro text-neutral-500 transition-colors hover:text-neutral-950">
            {language === "ru" ? "Работы" : "Works"}
          </Link>
          <Link to="/visual" className="micro text-neutral-500 transition-colors hover:text-neutral-950">
            {language === "ru" ? "Визуал" : "Visual"}
          </Link>
          <Link to="/about" className="micro text-neutral-500 transition-colors hover:text-neutral-950">
            {language === "ru" ? "Обо мне" : "About"}
          </Link>
          <Link to="/contacts" className="micro text-neutral-500 transition-colors hover:text-neutral-950">
            {language === "ru" ? "Контакты" : "Contacts"}
          </Link>
        </nav>
        <span className="micro text-neutral-500">© 2026</span>
      </div>
    </footer>
  );
}
