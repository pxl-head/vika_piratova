import WorksGrid, { type Filter } from "@/sections/WorksGrid";
import PageFooter from "@/sections/PageFooter";
import type { Category } from "@/data/cases";
import { type Language, useLanguage } from "@/language";

const TITLES: Record<Language, Record<string, { title: string; note: string }>> = {
  ru: {
    all: { title: "Работы", note: "Все проекты" },
    art: { title: "Визуальное искусство", note: "Живопись · Иллюстрация · Роспись стен" },
    photo: { title: "Фотопроекты", note: "Fantasy Of Poison · MERMAIDS · FANTASY OF POISON II · PSYCHO · PAINTED DOLLS · TEXTURE · CAKE OR FAKE · TOKYO STYLE · FEATHERS · ANTAGONISM · GIRLISH DREAM · TWINS" },
  },
  en: {
    all: { title: "Works", note: "All projects" },
    art: { title: "Visual Art", note: "Painting · Illustration · Murals" },
    photo: { title: "Photo Projects", note: "Fantasy Of Poison · MERMAIDS · FANTASY OF POISON II · PSYCHO · PAINTED DOLLS · TEXTURE · CAKE OR FAKE · TOKYO STYLE · FEATHERS · ANTAGONISM · GIRLISH DREAM · TWINS" },
  },
};

interface WorksPageProps {
  preset?: Category;
}

export default function WorksPage({ preset }: WorksPageProps) {
  const { language } = useLanguage();
  const meta = TITLES[language][preset ?? "all"];
  const initialFilter: Filter = preset ?? "all";

  return (
    <main id="main">
      <WorksGrid
        key={initialFilter}
        title={meta.title}
        note={meta.note}
        initialFilter={initialFilter}
      />
      <PageFooter />
    </main>
  );
}
