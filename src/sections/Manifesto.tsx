import { useLanguage } from "@/language";

export default function Manifesto() {
  const { language } = useLanguage();

  const cards =
    language === "ru"
      ? [
          ["Арт", "Живопись · иллюстрация"],
          ["Фото", "Мода · редакционная съёмка"],
          ["Видео", "Бэкстейдж · процесс"],
          ["Пространство", "Роспись · сет-дизайн"],
        ]
      : [
          ["Art", "Painting · illustration"],
          ["Photo", "Fashion · editorial"],
          ["Video", "Behind the scenes · process"],
          ["Space", "Murals · set design"],
        ];

  return (
    <section className="border-b border-neutral-950 bg-white px-4 py-20 md:px-8 md:py-28">
      <div className="mb-8">
        <span className="micro">{language === "ru" ? "Манифест" : "Manifesto"}</span>
      </div>

      <h2 className="display-xl max-w-5xl text-4xl md:text-6xl">
        {language === "ru"
          ? "Превращаю идеи в визуальные истории — от эскиза на салфетке до готового кадра и росписи во всю стену"
          : "I turn ideas into visual stories — from a sketch on a napkin to a finished image or a mural spanning an entire wall"}
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <p className="max-w-xl text-sm leading-relaxed text-neutral-600">
          {language === "ru"
            ? "Моя суперсила — комьюнити. Снимаю и рисую с блогерами, дизайнерами и музыкантами: каждая тусовка может стать проектом, а каждый проект — контентом, который разлетается по сети. Кайф и работа у меня не разделены."
            : "My superpower is community. I shoot and create with bloggers, designers and musicians: every gathering can become a project, and every project can become content that travels across the internet. For me, pleasure and work are inseparable."}
        </p>
        <div className="grid grid-cols-2 gap-px bg-neutral-950 text-white">
          {cards.map(([t, s]) => (
            <div key={t} className="bg-white p-5 text-neutral-950">
              <p className="font-display text-xl font-semibold uppercase">{t}</p>
              <p className="micro mt-2 text-neutral-500">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
