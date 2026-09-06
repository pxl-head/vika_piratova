import { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router";
import { CASES } from "@/data/cases";
import PageFooter from "@/sections/PageFooter";

export default function CasePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = CASES.find((c) => c.id === id);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && navigate("/works");
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  useEffect(() => {
    if (item) document.title = `${item.title} — Vika Piratova`;
  }, [item]);

  if (!item) return <Navigate to="/works" replace />;

  const orderedCases = [...CASES].sort((a, b) => Number(a.index) - Number(b.index));
  const next = orderedCases[(orderedCases.findIndex((c) => c.id === item.id) + 1) % orderedCases.length];

  return (
    <main id="main" className="bg-white pt-14">
      {/* top bar */}
      <div className="sticky top-14 z-20 flex h-14 items-center justify-between border-b border-neutral-950 bg-white px-4 md:px-8">
        <Link to="/works" className="micro hover:text-neutral-500">
          ← Все работы
        </Link>
        <span className="micro text-neutral-500">
          {item.categoryLabel} / {item.field}
        </span>
      </div>

      {/* hero */}
      <div className="relative h-[68vh] overflow-hidden md:h-[78vh]">
        <img src={item.cover} alt={item.title} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-8">
          <p className={`micro mb-3 text-white/75 ${item.id === "fantasy-of-poison-ll" ? "normal-case" : ""}`}>
            {item.index} — {item.tagline}
          </p>
          <h1 className={`display-xl text-5xl text-white md:text-8xl ${item.id === "fantasy-of-poison-ll" ? "normal-case" : ""}`}>{item.title}</h1>
        </div>
      </div>

      {/* meta */}
      <div className="grid grid-cols-2 gap-px border-b border-neutral-950 bg-neutral-950 md:grid-cols-4">
        {[
          ["Роль", item.role],
          ["Команда", item.team.join(" · ")],
          ["Год", item.year],
          ["Формат", item.field],
        ].map(([label, value]) => (
          <div key={label} className="bg-white p-4 md:p-6">
            <p className="micro mb-2 text-neutral-500">{label}</p>
            <p className="text-sm font-medium leading-snug">{value}</p>
          </div>
        ))}
      </div>

      {/* description */}
      <div className="grid gap-8 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <h2 className="display-xl text-3xl md:text-5xl">О проекте</h2>
        <div className="space-y-5">
          {item.description.map((p, i) => (
            <p key={i} className="max-w-xl text-sm leading-relaxed text-neutral-600">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* gallery */}
      <div className="grid grid-cols-2 gap-px bg-neutral-950 md:grid-cols-3">
        {item.gallery.map((g, i) => (
          <div
            key={i}
            className={`overflow-hidden ${g.wide ? "col-span-2 aspect-[2/1]" : "aspect-[3/4]"}`}
          >
            <img src={g.src} alt={`${item.title} — кадр ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      {/* video loop */}
      {item.video && (
        <div className="relative h-[80vh] overflow-hidden bg-neutral-950">
          <video
            src={item.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-8">
            <span className="micro text-white/85">Бэкстейдж</span>
          </div>
        </div>
      )}

      {/* next case */}
      <Link
        to={`/case/${next.id}`}
        className="group block w-full bg-neutral-950 px-4 py-14 text-left text-white md:px-8"
      >
        <span className="micro text-white/50">Следующий проект</span>
        <span className={`display-xl mt-3 block text-4xl transition-colors group-hover:text-white/60 md:text-6xl ${next.id === "fantasy-of-poison-ll" ? "normal-case" : ""}`}>
          {next.title} →
        </span>
      </Link>

      <PageFooter />
    </main>
  );
}
