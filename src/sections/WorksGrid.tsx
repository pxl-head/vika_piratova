import { useState } from "react";
import { Link } from "react-router";
import { CASES, type Category } from "@/data/cases";
import { getCaseText } from "@/data/caseTranslations";
import { type Language, useLanguage } from "@/language";

export type Filter = Category | "all";

interface WorksGridProps {
  title?: string;
  note?: string;
  initialFilter?: Filter;
}

const FILTERS: Record<Language, { id: Filter; label: string }[]> = {
  ru: [
    { id: "all", label: "Все" },
    { id: "art", label: "Визуальное искусство" },
    { id: "photo", label: "Фото и видео" },
  ],
  en: [
    { id: "all", label: "All" },
    { id: "art", label: "Visual Art" },
    { id: "photo", label: "Photo & Video" },
  ],
};

export default function WorksGrid({ title = "Работы", note = "Все проекты", initialFilter = "all" }: WorksGridProps) {
  const [filter, setFilter] = useState<Filter>(initialFilter);
  const { language } = useLanguage();
  const cases = CASES
    .filter((c) => filter === "all" || c.category === filter)
    .sort((a, b) => Number(a.index) - Number(b.index));

  return (
    <section id="works" className="border-t border-neutral-950 bg-white">
      <div className="flex flex-col gap-6 px-4 pb-16 pt-28 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <div className="mb-8 flex items-center gap-6">
            <span className="micro">{language === "ru" ? "Портфолио" : "Portfolio"}</span>
            <span className="micro text-neutral-500">( {note} )</span>
          </div>
          <h2 className="display-xl text-5xl md:text-7xl">{title}</h2>
        </div>

        <div className="flex flex-wrap items-center gap-2" role="group" aria-label={language === "ru" ? "Фильтр проектов" : "Project filter"}>
          {FILTERS[language].map((f) => {
            const count =
              f.id === "all" ? CASES.length : CASES.filter((c) => c.category === f.id).length;
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                aria-pressed={active}
                className={`micro border px-4 py-2.5 transition-colors duration-300 ${
                  active
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-neutral-300 text-neutral-950 hover:border-neutral-950"
                }`}
              >
                {f.label} <span className={active ? "text-white/50" : "text-neutral-500"}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px bg-neutral-950 lg:grid-cols-3">
        {cases.map((c) => {
          const localized = getCaseText(c, language);
          return (
            <article key={c.id} className="aspect-[3/4] bg-white">
              <Link
                to={`/case/${c.id}`}
                aria-label={`${c.title} — ${localized.categoryLabel}`}
                className="group relative block h-full w-full cursor-pointer overflow-hidden"
              >
                <img
                  src={c.cover}
                  alt={c.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={c.hover}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <span className="micro absolute left-4 top-4 z-10 text-white mix-blend-difference">
                  {c.index}
                </span>

                <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-16 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 md:p-5">
                  <p className="micro mb-2 text-white/70">
                    {localized.categoryLabel} — {localized.field}
                  </p>
                  <h3 className={`font-display text-xl font-semibold leading-tight text-white md:text-2xl ${c.id === "fantasy-of-poison-ll" ? "normal-case" : "uppercase"}`}>
                    {c.title}
                  </h3>
                  <p className="micro mt-2 hidden text-white/60 md:block">{localized.role}</p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
