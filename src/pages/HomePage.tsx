import { Link } from "react-router";
import { type Language, useLanguage } from "@/language";

const TILES: Record<Language, { to: string; index: string; label: string; sub: string; img: string; alt: string }[]> = {
  ru: [
    {
      to: "/works",
      index: "01",
      label: "Смотреть работы",
      sub: "Арт · Фотопроекты — 12 проектов",
      img: "/images/home/works.jpg",
      alt: "Портфолио Вики Пиратовой",
    },
    {
      to: "/contacts",
      index: "02",
      label: "Связаться",
      sub: "Telegram · Соцсети · Сотрудничество",
      img: "/images/home/contact.jpg",
      alt: "Связаться с Викой Пиратовой",
    },
  ],
  en: [
    {
      to: "/works",
      index: "01",
      label: "View Works",
      sub: "Art · Photo Projects — 12 projects",
      img: "/images/home/works.jpg",
      alt: "Vika Piratova portfolio",
    },
    {
      to: "/contacts",
      index: "02",
      label: "Get in Touch",
      sub: "Telegram · Socials · Collaborations",
      img: "/images/home/contact.jpg",
      alt: "Contact Vika Piratova",
    },
  ],
};

export default function HomePage() {
  const { language } = useLanguage();
  const tiles = TILES[language];

  return (
    <main id="main" className="relative h-[100svh] w-full overflow-hidden bg-neutral-950">
      <h1 className="sr-only">
        {language === "ru"
          ? "Vika Piratova — визуальный художник, фотограф и создатель контента"
          : "Vika Piratova — visual artist, photographer & content creator"}
      </h1>
      <div className="grid h-full grid-rows-2 md:grid-cols-2 md:grid-rows-1">
        {tiles.map((tile) => (
          <Link
            key={tile.to}
            to={tile.to}
            className="group relative block overflow-hidden"
            aria-label={tile.label}
          >
            <img
              src={tile.img}
              alt={tile.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" />

            <span className="micro absolute left-4 top-16 text-white/80 md:left-8 md:top-20">
              {tile.index}
            </span>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h2 className="display-xl text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {tile.label}
              </h2>
              <p className="micro mt-4 text-white/75">{tile.sub}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* bottom strip */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent pb-4 pl-32 pr-4 pt-10 md:pl-40 md:pr-8">
        <span className="micro text-white/70">
          {language === "ru"
            ? "Визуальный художник · Фотограф · Создатель контента"
            : "Visual Artist · Photographer · Content Creator"}
        </span>
        <span className="micro hidden text-white/70 sm:block">© 2026</span>
      </div>
    </main>
  );
}
