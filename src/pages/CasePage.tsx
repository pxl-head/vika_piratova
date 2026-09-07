import { Fragment, useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router";
import { CASES, INSTAGRAM_LINKS } from "@/data/cases";
import { getCaseText } from "@/data/caseTranslations";
import PageFooter from "@/sections/PageFooter";
import { useLanguage } from "@/language";

const INSTAGRAM_HANDLE_PATTERN = /(@[A-Za-z0-9_]+(?:\.[A-Za-z0-9_]+)*)/g;

function galleryRank(caseId: string, src: string) {
  const value = `${caseId}:${src}`;
  let hash = 2166136261;

  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function renderTeamLine(line: string, lineIndex: number) {
  return line.split(INSTAGRAM_HANDLE_PATTERN).map((part, partIndex) => {
    const href = INSTAGRAM_LINKS[part];
    if (!href) return <Fragment key={`${lineIndex}-${partIndex}`}>{part}</Fragment>;

    return (
      <a
        key={`${lineIndex}-${partIndex}`}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-950"
      >
        {part}
      </a>
    );
  });
}

function renderTeam(team: string) {
  return team.split("\n").map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 && <br />}
      {renderTeamLine(line, lineIndex)}
    </Fragment>
  ));
}

function BackstageVideo({ src, language }: { src: string; language: "ru" | "en" }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  const toggleSound = () => {
    setSoundOn((current) => {
      const next = !current;
      if (videoRef.current) videoRef.current.muted = !next;
      return next;
    });
  };

  return (
    <div className="relative overflow-hidden bg-neutral-950">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted={!soundOn}
        loop
        playsInline
        className="relative block h-auto w-full object-contain"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/20" />
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-4 md:p-8">
        <span className="micro text-white/85">Backstage</span>
        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={soundOn}
          aria-label={soundOn ? (language === "ru" ? "Выключить звук" : "Turn sound off") : language === "ru" ? "Включить звук" : "Turn sound on"}
          className="micro border border-white/60 px-3 py-2 text-white transition-colors hover:bg-white hover:text-neutral-950"
        >
          {soundOn ? (language === "ru" ? "Звук: вкл" : "Sound: on") : language === "ru" ? "Звук: выкл" : "Sound: off"}
        </button>
      </div>
    </div>
  );
}

export default function CasePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const item = CASES.find((c) => c.id === id);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && navigate("/works");
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  useEffect(() => {
    if (item) {
      document.title = `${item.title} — ${language === "ru" ? "Вика Пиратова" : "Vika Piratova"}`;
    }
  }, [item, language]);

  if (!item) return <Navigate to="/works" replace />;

  const orderedCases = [...CASES].sort((a, b) => Number(a.index) - Number(b.index));
  const next = orderedCases[(orderedCases.findIndex((c) => c.id === item.id) + 1) % orderedCases.length];
  const twinsGallery = item.id === "twins";
  const gallery = twinsGallery
    ? item.gallery
    : [...item.gallery].sort((a, b) => galleryRank(item.id, a.src) - galleryRank(item.id, b.src));
  const compactGallery = gallery.length <= 3;
  const desktopGalleryItemWidth =
    gallery.length === 1 ? "md:w-full" : gallery.length === 2 ? "md:w-1/2" : "md:w-1/3";
  const localized = getCaseText(item, language);
  const metaItems = [
    { label: language === "ru" ? "Роль" : "Role", value: localized.role, isTeam: false },
    { label: language === "ru" ? "Команда" : "Team", value: localized.team.join("\n"), isTeam: true },
    { label: language === "ru" ? "Год" : "Year", value: item.year, isTeam: false },
    { label: language === "ru" ? "Формат" : "Format", value: localized.field, isTeam: false },
  ];

  return (
    <main id="main" className="bg-white pt-14">
      {/* top bar */}
      <div className="sticky top-14 z-20 flex h-14 items-center justify-between border-b border-neutral-950 bg-white px-4 md:px-8">
        <Link to="/works" className="micro hover:text-neutral-500">
          ← {language === "ru" ? "Все работы" : "All works"}
        </Link>
        <span className="micro text-neutral-500">
          {localized.categoryLabel} / {localized.field}
        </span>
      </div>

      {/* hero */}
      <div className="relative h-[68vh] overflow-hidden md:h-[78vh]">
        <img src={item.cover} alt={item.title} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-8">
          <p className={`micro mb-3 text-white/75 ${item.id === "fantasy-of-poison-ll" ? "normal-case" : ""}`}>
            {item.index} — {localized.tagline}
          </p>
        <h1 className={`display-xl text-5xl text-white md:text-8xl ${item.id === "fantasy-of-poison-ll" ? "normal-case" : ""}`}>
          {item.projectUrl ? (
            <a
              href={item.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-white/60 underline-offset-8 transition-colors hover:decoration-white"
            >
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h1>
        </div>
      </div>

      {/* meta */}
      <div className="grid grid-cols-2 gap-px border-b border-neutral-950 bg-neutral-950 md:grid-cols-4">
        {metaItems.map(({ label, value, isTeam }) => (
          <div key={label} className="bg-white p-4 md:p-6">
            <p className="micro mb-2 text-neutral-500">{label}</p>
            <p className="whitespace-pre-line text-sm font-medium leading-snug">
              {isTeam ? renderTeam(value) : value}
            </p>
          </div>
        ))}
      </div>

      {/* description */}
      <div className="grid gap-8 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <h2 className="display-xl text-3xl md:text-5xl">
          {language === "ru" ? "О проекте" : "About the project"}
        </h2>
        <div className="space-y-5">
          {localized.description.map((p, i) => (
            <p key={i} className="max-w-xl text-sm leading-relaxed text-neutral-600">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Natural-ratio masonry: two columns on phones, three on larger screens. */}
      <div
        className={
          twinsGallery
            ? "grid grid-cols-2 gap-0"
            : compactGallery
              ? "columns-2 gap-0 md:flex md:items-start"
              : "columns-2 gap-0 md:columns-3"
        }
      >
        {gallery.map((g, i) => (
          <img
            key={g.src}
            src={g.src}
            alt={`${item.title} — ${language === "ru" ? "кадр" : "image"} ${i + 1}`}
            loading="lazy"
            className={`block h-auto w-full break-inside-avoid ${twinsGallery && g.wide ? "col-span-2" : ""} ${compactGallery ? desktopGalleryItemWidth : ""}`}
          />
        ))}
      </div>

      {/* video loop */}
      {item.video && (
        <BackstageVideo src={item.video} language={language} />
      )}

      {/* next case */}
      <Link
        to={`/case/${next.id}`}
        className="group block w-full bg-neutral-950 px-4 py-14 text-left text-white md:px-8"
      >
        <span className="micro text-white/50">{language === "ru" ? "Следующий проект" : "Next project"}</span>
        <span className={`display-xl mt-3 block text-4xl transition-colors group-hover:text-white/60 md:text-6xl ${next.id === "fantasy-of-poison-ll" ? "normal-case" : ""}`}>
          {next.title} →
        </span>
      </Link>

      <PageFooter />
    </main>
  );
}
