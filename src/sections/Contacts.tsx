import { Link } from "react-router";
import { EMAIL, SOCIALS, TELEGRAM_URL } from "@/data/cases";

export default function Contacts() {
  return (
    <footer id="contacts" className="scroll-mt-14 bg-neutral-950 text-white">
      <div className="px-4 pb-16 pt-20 md:px-8 md:pt-28">
        <div className="mb-8">
          <span className="micro text-white/60">Контакты & соцсети</span>
        </div>

        <h2 className="display-xl max-w-5xl text-5xl md:text-8xl">
          Давайте сотворим что-то стоящее
        </h2>

        <p className="mt-8 max-w-md text-sm leading-relaxed text-white/70">
          Съёмка, роспись, иллюстрация или полный визуальный продакшен — напишите в Telegram,
          обсудим идею и соберём команду.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn bg-white text-neutral-950 hover:bg-white/80"
          >
            Написать в Telegram ↗
          </a>
          <Link to="/works" className="btn border border-white/30 text-white hover:bg-white hover:text-neutral-950">
            Смотреть работы →
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
            <span className="micro text-white group-hover:text-neutral-950">{s.label}</span>
            <span className="micro text-white/50 group-hover:text-neutral-500">↗</span>
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-2 border-t border-white/20 px-4 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <span className="micro text-white/50">© 2026 Vika Piratova</span>
        <span className="micro text-white/50">Visual artist · Photographer · Content creator</span>
        <span className="micro text-white/50">Сделано с кайфом</span>
      </div>
    </footer>
  );
}
