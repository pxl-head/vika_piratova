import { SOCIALS } from "@/data/cases";
import { useLanguage } from "@/language";

export default function Contacts() {
  const { language } = useLanguage();

  return (
    <footer id="contacts" className="flex min-h-[calc(100svh-3.5rem)] scroll-mt-14 flex-col bg-neutral-950 text-white">
      <div className="flex flex-1 flex-col justify-end px-4 pb-12 pt-20 md:px-8 md:pb-16">
        <p className="micro mb-8 text-white/50">{language === "ru" ? "Новый проект" : "New project"}</p>
        <h1 className="display-xl max-w-5xl text-5xl md:text-8xl">
          {language === "ru" ? "Давайте работать вместе" : "Let’s work together"}
        </h1>
      </div>
      <div className="grid gap-px border-t border-white/20 bg-white/20 sm:grid-cols-2 lg:grid-cols-5">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between bg-neutral-950 px-4 py-6 transition-colors hover:bg-white md:px-6"
          >
            <span className="micro text-white group-hover:text-neutral-950">
              {language === "ru" && s.label === "Email" ? "Почта" : s.label}
            </span>
            <span className="micro text-white/50 group-hover:text-neutral-500">↗</span>
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-2 border-t border-white/20 px-4 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <span className="micro text-white/50">
          © 2026 {language === "ru" ? "Вика Пиратова" : "Vika Piratova"}
        </span>
        <span className="micro text-white/50">
          {language === "ru"
            ? "Визуальный художник · Фотограф · Создатель контента"
            : "Visual artist · Photographer · Content creator"}
        </span>
        <span className="micro text-white/50">
          {language === "ru" ? "Сделано с кайфом" : "Made with joy"}
        </span>
      </div>
    </footer>
  );
}
