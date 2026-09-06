import { useNavigate } from "react-router";
import WorksGrid, { type Filter } from "@/sections/WorksGrid";
import Manifesto from "@/sections/Manifesto";
import PageFooter from "@/sections/PageFooter";
import type { Category } from "@/data/cases";

const TITLES: Record<string, { title: string; note: string }> = {
  all: { title: "Работы", note: "Все проекты" },
  art: { title: "Visual Art", note: "Живопись · Иллюстрация · Роспись стен" },
  photo: { title: "Фотопроекты", note: "Fantasy Of Poison · MERMAIDS · Fantasy Of Poison ll · PSYCHO · PAINTED DOLLS · TEXTURE · CAKE OR FAKE · TOKYO STYLE" },
};

interface WorksPageProps {
  preset?: Category;
}

export default function WorksPage({ preset }: WorksPageProps) {
  const navigate = useNavigate();
  const meta = TITLES[preset ?? "all"];
  const initialFilter: Filter = preset ?? "all";

  return (
    <main id="main">
      <WorksGrid
        key={initialFilter}
        title={meta.title}
        note={meta.note}
        initialFilter={initialFilter}
        onSelectCase={(c) => navigate(`/case/${c.id}`)}
      />
      <Manifesto />
      <PageFooter />
    </main>
  );
}
