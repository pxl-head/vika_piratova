export default function Manifesto() {
  return (
    <section className="border-b border-neutral-950 bg-white px-4 py-20 md:px-8 md:py-28">
      <div className="mb-8">
        <span className="micro">Манифест</span>
      </div>

      <h2 className="display-xl max-w-5xl text-4xl md:text-6xl">
        Превращаю идеи в визуальные истории — от эскиза на салфетке до готового кадра
        и росписи во всю стену
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <p className="max-w-xl text-sm leading-relaxed text-neutral-600">
          Моя суперсила — комьюнити. Снимаю и рисую с блогерами, дизайнерами и музыкантами:
          каждая тусовка может стать проектом, а каждый проект — контентом, который разлетается
          по сети. Кайф и работа у меня не разделены.
        </p>
        <div className="grid grid-cols-2 gap-px bg-neutral-950 text-white">
          {[
            ["Арт", "Живопись · иллюстрация"],
            ["Фото", "Fashion · editorial"],
            ["Видео", "Backstage · процесс"],
            ["Пространство", "Роспись · set design"],
          ].map(([t, s]) => (
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
