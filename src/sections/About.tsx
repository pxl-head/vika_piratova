import { useLanguage } from "@/language";

const DISCIPLINES = [
  ["01", "Живопись и иллюстрация", "Масло · пастель · графика"],
  ["02", "Фото и видео", "Мода · редакционная съёмка · закулисье"],
  ["03", "Сет‑дизайн", "Роспись · оформление пространств"],
  ["04", "Арт‑дирекшн", "Концепт · мудборды · продакшен"],
];

export default function About() {
  const { language } = useLanguage();
  const disciplines =
    language === "ru"
      ? DISCIPLINES
      : [
          ["01", "Painting and illustration", "Oil · pastel · graphic art"],
          ["02", "Photo and video", "Fashion · editorial · backstage"],
          ["03", "Set design", "Murals · spatial design"],
          ["04", "Art direction", "Concept · moodboards · production"],
        ];

  return (
    <section id="about" className="scroll-mt-14 border-t border-neutral-950 bg-white">
      <div className="grid gap-10 px-4 pb-12 pt-20 md:grid-cols-2 md:gap-16 md:px-8 md:pb-16 md:pt-20">
        <div className="self-start">
          <img src="/images/about.jpg" alt={language === "ru" ? "Вика Пиратова" : "Vika Piratova"} loading="lazy" className="block h-auto w-full" />
          <span className="micro mt-3 block">
            {language === "ru" ? "Вика Пиратова" : "Vika Piratova"}
          </span>
        </div>

        <div className="min-w-0">
          <h2 className="display-xl text-[clamp(1.5rem,7.5vw,2.25rem)] md:text-[clamp(1.5rem,3.2vw,3rem)]">
            {language === "ru" ? "ФОТОГРАФ & МУЛЬТИДИСЦИПЛИНАРНЫЙ ХУДОЖНИК" : "PHOTOGRAPHER & MULTIDISCIPLINARY ARTIST"}
          </h2>
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-neutral-600">
            {language === "ru"
              ? "Привет, я Вика Пиратова мне 18 лет. Я люблю творчество и вся моя жизнь связана с ним. В средней школе я закончила ДШИ, а выпустилась я в 11 классе из гимназии при РГУ им. Н.А. Косыгина. Сейчас я продолжаю активно учиться в этой сфере."
              : "Hi, I’m Vika Piratova, I’m 18 years old. I love creating, and my whole life is connected to it. I completed art school while studying at secondary school, and graduated from the gymnasium affiliated with Kosygin Russian State University after the 11th grade. I continue to actively develop in this field."}
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600">
            {language === "ru"
              ? "В течение своей жизни я собрала вокруг себя невероятно интересных и талантливых людей, которые творят со мной. Мы делаем крутые проекты, коллаборации и развиваемся в разных творческих сферах, дополняя друг друга. Моя жизнь очень насыщенная благодаря творчеству, и я хочу, чтоб мои работы вдохновляли людей."
              : "Over the years I have brought together an incredible circle of interesting and talented people who create alongside me. We make ambitious projects, collaborate and grow across different creative fields, complementing one another. Creativity makes my life incredibly rich, and I want my work to inspire people."}
          </p>
        </div>
      </div>

      <div className="px-4 pb-12 md:px-8 md:pb-16">
        {disciplines.map(([n, t, s]) => (
          <div key={n} className="flex items-baseline gap-4 border-t border-neutral-950 py-4 last:border-b">
            <span className="micro text-neutral-500">{n}</span>
            <span className="font-display text-lg font-semibold uppercase md:text-xl">{t}</span>
            <span className="micro ml-auto hidden text-neutral-500 sm:block">{s}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-neutral-950 bg-neutral-950 px-4 py-14 text-white md:px-8">
        <p className="micro mb-6 text-white/50">{language === "ru" ? "Факт" : "Fact"}</p>
        <p className="display-xl max-w-4xl text-2xl md:text-4xl">
          {language === "ru"
            ? "Серия карикатур масляной пастелью разошлась по сети на аватарки – и до сих пор приносит заказы на портреты"
            : "A series of oil pastel caricatures spread across the internet as profile pictures — and still brings in portrait commissions"}
        </p>
      </div>
    </section>
  );
}
