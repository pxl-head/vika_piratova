import { VISUAL_IMAGES } from "@/data/visual";
import PageFooter from "@/sections/PageFooter";

export default function VisualPage() {
  return (
    <main id="main" className="bg-white">
      <div className="flex items-end justify-between px-4 pb-12 pt-28 md:px-8">
        <div>
          <div className="mb-8 flex items-center gap-6">
            <span className="micro">Feed</span>
            <span className="micro text-neutral-500">( {VISUAL_IMAGES.length} works )</span>
          </div>
          <h1 className="display-xl text-5xl md:text-7xl">Visual</h1>
        </div>
        <span className="micro hidden text-neutral-500 md:block">Continuous feed — no frames</span>
      </div>

      {/* masonry: natural aspect ratios, edge-to-edge, no gaps */}
      <div className="columns-2 gap-0 md:columns-3 lg:columns-4">
        {VISUAL_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Работа ${i + 1} из ленты Visual`}
            loading="lazy"
            className="block w-full break-inside-avoid"
          />
        ))}
      </div>

      <PageFooter />
    </main>
  );
}
