import { Link } from "react-router";
import { EMAIL, SOCIALS, TELEGRAM_URL } from "@/data/cases";
import { useLanguage } from "@/language";

export default function Contacts() {
  const { language } = useLanguage();

  return (
    <footer id="contacts" className="scroll-mt-14 bg-neutral-950 text-white">
      <div className="px-4 pb-16 pt-20 md:px-8 md:pt-28">
        <div className="mb-8">
          <span className="micro text-white/60">
            {language === "ru" ? "Контакты и соцсети" : "Contacts & socials"}
          </span>
        </div>

        <h2 className="display-xl max-w-5xl text-5xl md:text-8xl">
          {language === "ru" ? "Давайте сотворим что-то стоящее" : "Let’s create something worth remembering"}
        </h2>

        <p className="mt-8 max-w-md text-sm leading-relaxed text-white/70">
          {language === "ru"
            ? "Съёмка, роспись, иллюстрация или полный визуальный продакшен — напишите в Telegram, обсудим идею и соберём команду."
            : "A shoot, mural, illustration or complete visual production — message me on Telegram, and we’ll discuss the idea and assemble the right team."}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn bg-white text-neutral-950 hover:bg-white/80"
          >
            {language === "ru" ? "Написать в Telegram" : "Message on Telegram"} ↗
          </a>
          <Link to="/works" className="btn border border-white/30 text-white hover:bg-white hover:text-neutral-950">
            {language === "ru" ? "Смотреть работы" : "View works"} →
          </Link>
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="micro mt-8 inline-block text-white/60 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
        >
          {EMAIL}
        </a>
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
        <span className="micro text-white/50">© 2026 Vika Piratova</span>
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
