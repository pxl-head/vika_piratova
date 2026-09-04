export type Category = "art" | "photo";

export interface ProcessShot {
  img: string;
  caption: string;
}

export interface GalleryItem {
  src: string;
  wide?: boolean;
}

export interface CaseItem {
  id: string;
  index: string;
  title: string;
  category: Category;
  categoryLabel: string;
  field: string;
  year: string;
  role: string;
  team: string[];
  cover: string;
  hover: string;
  tagline: string;
  description: string[];
  process: ProcessShot[];
  gallery: GalleryItem[];
  result: string;
  resultFacts: string[];
  video?: string;
}

export const TELEGRAM_URL = "https://t.me/pir4tova";
export const EMAIL = "vpiratova@inbox.ru";

export const SOCIALS = [
  { label: "Telegram", url: TELEGRAM_URL },
  { label: "Instagram", url: "https://www.instagram.com/avotarip" },
  { label: "TikTok", url: "https://www.tiktok.com/@avotarip" },
  { label: "Pinterest", url: "https://www.pinterest.com/avotarip/" },
  { label: "Email", url: `mailto:${EMAIL}` },
];

const fantasy = "/images/projects/Fantasy Of Poison";
const mermaids = "/images/projects/MERMAIDS";
const fantasyII = "/images/projects/Fantasy Of Poison ll";
const psycho = "/images/projects/PSYCHO";

export const CASES: CaseItem[] = [
  {
    id: "caricature",
    index: "01",
    title: "Caricature",
    category: "art",
    categoryLabel: "Visual Art",
    field: "Живопись и иллюстрация",
    year: "2024—2026",
    role: "Художник, иллюстратор",
    team: ["Автор и исполнение — Вика Пиратова"],
    cover: "/images/art/caricature/cover.jpg",
    hover: "/images/art/caricature/hover.jpg",
    tagline: "Серия вирусных карикатур масляной пастелью",
    description: ["Серия шаржированных портретов друзей и комьюнити."],
    process: [],
    gallery: [
      { src: "/images/art/caricature/cover.jpg" },
      { src: "/images/art/caricature/hover.jpg" },
      { src: "/images/art/caricature/01.jpg" }, { src: "/images/art/caricature/02.jpg" },
      { src: "/images/art/caricature/03.jpg" }, { src: "/images/art/caricature/04.jpg" },
      { src: "/images/art/caricature/05.jpg" }, { src: "/images/art/caricature/06.jpg" },
      { src: "/images/art/caricature/07.jpg" }, { src: "/images/art/caricature/08.jpg" },
      { src: "/images/art/caricature/09.jpg" }, { src: "/images/art/caricature/10.jpg" },
      { src: "/images/art/caricature/11.jpg" }, { src: "/images/art/caricature/12.jpg" },
    ],
    result: "Работы разошлись по сети на аватарки.",
    resultFacts: ["Серия портретов в масляной пастели"],
  },
  {
    id: "academicism",
    index: "02",
    title: "Academicism",
    category: "art",
    categoryLabel: "Visual Art",
    field: "Рисунок и масло",
    year: "2021—2026",
    role: "Художник",
    team: ["Гимназия РГУ им. А.Н. Косыгина — художественное отделение"],
    cover: "/images/art/academicism/cover.jpg",
    hover: "/images/art/academicism/hover.jpg",
    tagline: "Академический рисунок и живопись маслом",
    description: ["Академический рисунок, анатомия, композиция и живопись маслом."],
    process: [],
    gallery: [
      { src: "/images/art/academicism/cover.jpg" },
      { src: "/images/art/academicism/hover.jpg" },
      { src: "/images/art/academicism/01.jpg" }, { src: "/images/art/academicism/02.jpg" },
      { src: "/images/art/academicism/03.jpg" }, { src: "/images/art/academicism/04.jpg" },
      { src: "/images/art/academicism/05.jpg" }, { src: "/images/art/academicism/06.jpg" },
      { src: "/images/art/academicism/07.jpg" }, { src: "/images/art/academicism/08.jpg" },
      { src: "/images/art/academicism/09.jpg" }, { src: "/images/art/academicism/10.jpg" },
    ],
    result: "Академическая школа даёт свободу работать в разных стилях.",
    resultFacts: ["Рисунок, масло, пастель и графика"],
  },
  {
    id: "mixed",
    index: "03",
    title: "Mixed",
    category: "art",
    categoryLabel: "Visual Art",
    field: "Смешанная техника",
    year: "2023—2026",
    role: "Художник, иллюстратор",
    team: ["Автор и исполнение — Вика Пиратова"],
    cover: "/images/art/mixed/cover.jpg",
    hover: "/images/art/mixed/hover.jpg",
    tagline: "Портреты в смешанной технике",
    description: ["Портреты, собранные из акрила, маркеров, текста и коллажа."],
    process: [],
    gallery: [
      { src: "/images/art/mixed/cover.jpg" }, { src: "/images/art/mixed/hover.jpg" },
      { src: "/images/art/mixed/01.jpg" }, { src: "/images/art/mixed/02.jpg" },
      { src: "/images/art/mixed/03.jpg" }, { src: "/images/art/mixed/04.jpg" },
      { src: "/images/art/mixed/05.jpg" }, { src: "/images/art/mixed/06.jpg" },
      { src: "/images/art/mixed/07.jpg" }, { src: "/images/art/mixed/08.jpg" },
    ],
    result: "Авторский стиль, который узнают в ленте с первого кадра.",
    resultFacts: ["Смешанная техника и иллюстрация"],
  },
  {
    id: "custom-space",
    index: "04",
    title: "Custom Space",
    category: "art",
    categoryLabel: "Visual Art",
    field: "Граффити · Оформление пространств",
    year: "2023—2026",
    role: "Художник, сет-дизайнер",
    team: ["Автор и исполнение — Вика Пиратова"],
    cover: "/images/art/custom-space/cover.jpg",
    hover: "/images/art/custom-space/hover.jpg",
    tagline: "Граффити и роспись стен",
    description: ["Кастомизация пространств: от эскиза до финальной росписи."],
    process: [],
    gallery: [
      { src: "/images/art/custom-space/cover.jpg" },
      { src: "/images/art/custom-space/hover.jpg" },
      { src: "/images/art/custom-space/01.jpg", wide: true },
    ],
    result: "Роспись превращает пространство в точку притяжения.",
    resultFacts: ["Концепт, роспись и оформление пространства"],
    video: "/images/art/custom-space/loop.mp4",
  },
  {
    id: "fantasy-of-poison",
    index: "05",
    title: "Fantasy Of Poison",
    category: "photo",
    categoryLabel: "Photo Project",
    field: "Photography",
    year: "—",
    role: "Фотография",
    team: ["—"],
    cover: `${fantasy}/Обложка 1.webp`,
    hover: `${fantasy}/Обложка 2.webp`,
    tagline: "Fantasy Of Poison",
    description: ["Серия кадров из проекта Fantasy Of Poison."],
    process: [],
    gallery: [
      { src: `${fantasy}/Обложка 1.webp` },
      { src: `${fantasy}/Обложка 2.webp` },
      { src: `${fantasy}/IMG_2848.webp`, wide: true },
      { src: `${fantasy}/IMG_2849.webp`, wide: true },
      { src: `${fantasy}/IMG_2850.webp`, wide: true },
      { src: `${fantasy}/IMG_3148.webp`, wide: true },
      { src: `${fantasy}/IMG_3169.webp`, wide: true },
      { src: `${fantasy}/IMG_3170.webp`, wide: true },
      { src: `${fantasy}/IMG_3171.webp` },
      { src: `${fantasy}/IMG_3172.webp`, wide: true },
    ],
    result: "Фотопроект собран в отдельную визуальную историю.",
    resultFacts: ["Полная серия кадров доступна в галерее"],
  },
  {
    id: "mermaids",
    index: "07",
    title: "MERMAIDS",
    category: "photo",
    categoryLabel: "Photo Project",
    field: "Photography",
    year: "—",
    role: "Фотография",
    team: ["—"],
    cover: `${mermaids}/Обложка 1.webp`,
    hover: `${mermaids}/Обложка 2.webp`,
    tagline: "MERMAIDS",
    description: ["Серия кадров из проекта MERMAIDS."],
    process: [],
    gallery: [
      { src: `${mermaids}/Обложка 1.webp` },
      { src: `${mermaids}/Обложка 2.webp` },
      { src: `${mermaids}/D09CEAED-4225-4713-89EC-DC6134912A18.webp`, wide: true },
      { src: `${mermaids}/IMG_1662.webp`, wide: true },
      { src: `${mermaids}/IMG_3890.webp` },
      { src: `${mermaids}/IMG_3891.webp`, wide: true },
      { src: `${mermaids}/IMG_3892.webp` },
      { src: `${mermaids}/IMG_3893.webp` },
    ],
    result: "Фотопроект собран в отдельную визуальную историю.",
    resultFacts: ["Полная серия кадров доступна в галерее"],
  },
  {
    id: "fantasy-of-poison-ll",
    index: "06",
    title: "Fantasy Of Poison ll",
    category: "photo",
    categoryLabel: "Photo Project",
    field: "Photography",
    year: "—",
    role: "Фотография",
    team: ["—"],
    cover: `${fantasyII}/Обложка 1.webp`,
    hover: `${fantasyII}/Обложка 2.webp`,
    tagline: "Fantasy Of Poison ll",
    description: ["Серия кадров из проекта Fantasy Of Poison ll."],
    process: [],
    gallery: [
      { src: `${fantasyII}/Обложка 1.webp` },
      { src: `${fantasyII}/Обложка 2.webp` },
      { src: `${fantasyII}/IMG_2984.webp` },
      { src: `${fantasyII}/IMG_3303.webp`, wide: true },
      { src: `${fantasyII}/IMG_3306.webp` },
      { src: `${fantasyII}/IMG_3308.webp` },
      { src: `${fantasyII}/IMG_3309.webp` },
      { src: `${fantasyII}/IMG_3310.webp` },
      { src: `${fantasyII}/_MG_8994.webp` },
    ],
    result: "Фотопроект собран в отдельную визуальную историю.",
    resultFacts: ["Полная серия кадров доступна в галерее"],
  },
  {
    id: "psycho",
    index: "08",
    title: "PSYCHO",
    category: "photo",
    categoryLabel: "Photo Project",
    field: "Photography",
    year: "—",
    role: "Фотография",
    team: ["—"],
    cover: `${psycho}/_MG_0097.webp`,
    hover: `${psycho}/_MG_0193.webp`,
    tagline: "PSYCHO",
    description: ["Серия кадров из проекта PSYCHO."],
    process: [],
    gallery: [
      { src: `${psycho}/_MG_0097.webp` },
      { src: `${psycho}/_MG_0193.webp` },
      { src: `${psycho}/_MG_0083.webp`, wide: true },
      { src: `${psycho}/_MG_0095.webp` },
      { src: `${psycho}/_MG_0136.webp`, wide: true },
      { src: `${psycho}/_MG_0180.webp`, wide: true },
      { src: `${psycho}/_MG_0187.webp` },
      { src: `${psycho}/_MG_0208.webp`, wide: true },
      { src: `${psycho}/_MG_0247.webp`, wide: true },
    ],
    result: "Фотопроект собран в отдельную визуальную историю.",
    resultFacts: ["Полная серия кадров доступна в галерее"],
  },
];
