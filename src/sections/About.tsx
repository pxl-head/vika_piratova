const DISCIPLINES = [
  ["01", "Живопись и иллюстрация", "Масло · пастель · графика"],
  ["02", "Фото и видео", "Fashion · editorial · backstage"],
  ["03", "Сет-дизайн", "Роспись · оформление пространств"],
  ["04", "Арт-дирекшн", "Концепт · мудборды · продакшен"],
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-14 border-t border-neutral-950 bg-white">
      <div className="flex items-center justify-between px-4 pt-20 md:px-8">
        <span className="micro">Обо мне & комьюнити</span>
      </div>

      <div className="grid gap-10 px-4 py-12 md:grid-cols-2 md:gap-16 md:px-8 md:py-16">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img src="/images/about.jpg" alt="Вика Пиратова" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <span className="micro absolute bottom-4 left-4 bg-white px-3 py-2">Вика Пиратова / Vika Piratova</span>
        </div>

        <div className="flex flex-col justify-between gap-10">
          <div>
            <h2 className="display-xl text-4xl md:text-6xl">
              Мультидисциплинарный художник & visual creator
            </h2>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-neutral-600">
              Создаю визуальный контент от идеи до воплощения: арт, фото, видео и оформление
              пространств. Выпускница Гимназии РГУ им. А.Н. Косыгина — с академической базой
              и вирусным чутьём на форматы.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600">
              Вокруг меня — творческое комьюнити: блогеры, дизайнеры, модели, музыканты.
              Вместе мы превращаем любую идею в проект, а любой проект — в контент,
              который хочется репостить.
            </p>
          </div>

          <div>
            {DISCIPLINES.map(([n, t, s]) => (
              <div key={n} className="flex items-baseline gap-4 border-t border-neutral-950 py-4 last:border-b">
                <span className="micro text-neutral-500">{n}</span>
                <span className="font-display text-lg font-semibold uppercase md:text-xl">{t}</span>
                <span className="micro ml-auto hidden text-neutral-500 sm:block">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-950 bg-neutral-950 px-4 py-14 text-white md:px-8">
        <p className="micro mb-6 text-white/50">Факт</p>
        <p className="display-xl max-w-4xl text-2xl md:text-4xl">
          Серия карикатур масляной пастелью разошлась по сети на аватарки — и до сих пор
          приносит заказы на портреты
        </p>
      </div>
    </section>
  );
}
