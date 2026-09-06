const DISCIPLINES = [
  ["01", "Живопись и иллюстрация", "Масло · пастель · графика"],
  ["02", "Фото и видео", "Fashion · editorial · backstage"],
  ["03", "Сет-дизайн", "Роспись · оформление пространств"],
  ["04", "Арт-дирекшн", "Концепт · мудборды · продакшен"],
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-14 border-t border-neutral-950 bg-white">
      <div className="grid gap-10 px-4 pb-12 pt-20 md:grid-cols-2 md:gap-16 md:px-8 md:pb-16 md:pt-20">
        <div className="relative self-start overflow-hidden">
          <img src="/images/about.jpg" alt="Вика Пиратова" loading="lazy" className="block h-auto w-full" />
          <span className="micro absolute bottom-4 left-4">Вика Пиратова / Vika Piratova</span>
        </div>

        <div className="flex min-w-0 flex-col justify-between gap-10">
          <div>
            <h2 className="display-xl break-words text-4xl md:text-6xl">
              ФОТОГРАФ & МУЛЬТИДИСЦИПЛИНАРНЫЙ ХУДОЖНИК
            </h2>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-neutral-600">
              Привет, я Вика Пиратова мне 18 лет. Я люблю творчество и вся моя жизнь связана с ним.
              В средней школе я закончила ДШИ, а выпустилась я в 11 классе из гимназии при РГУ им. Н.А.
              Косыгина. Сейчас я продолжаю активно учиться в этой сфере.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600">
              В течение своей жизни я собрала вокруг себя невероятно интересных и талантливых людей,
              которые творят со мной. Мы делаем крутые проекты, коллаборации и развиваемся в разных
              творческих сферах, дополняя друг друга. Моя жизнь очень насыщенная благодаря творчеству,
              и я хочу, чтоб мои работы вдохновляли людей.
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
          Серия карикатур масляной пастелью разошлась по сети на аватарки – и до сих пор
          приносит заказы на портреты
        </p>
      </div>
    </section>
  );
}
