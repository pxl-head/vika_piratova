import { VISUAL_IMAGES } from "@/data/visual";
import PageFooter from "@/sections/PageFooter";
import { useLanguage } from "@/language";
import { responsiveImageProps } from "@/lib/responsiveImage";

export default function VisualPage() {
  const { language } = useLanguage();

  return (
    <main id="main" className="bg-white">
      <div className="flex items-end justify-between px-4 pb-12 pt-28 md:px-8">
        <div>
          <div className="mb-8 flex items-center gap-6">
            <span className="micro">{language === "ru" ? "Лента" : "Feed"}</span>
            <span className="micro text-neutral-500">
              ( {VISUAL_IMAGES.length} {language === "ru" ? "работ" : "works"} )
            </span>
          </div>
          <h1 className="display-xl text-5xl md:text-7xl">{language === "ru" ? "Визуал" : "Visual"}</h1>
        </div>
        <span className="micro hidden text-neutral-500 md:block">
          {language === "ru" ? "Непрерывная лента — без рамок" : "Continuous feed — no frames"}
        </span>
      </div>

      {/* masonry: natural aspect ratios, edge-to-edge, no gaps */}
      <div className="columns-2 gap-0 md:columns-3 lg:columns-4">
        {VISUAL_IMAGES.map((src, i) => (
          <img
            key={src}
            {...responsiveImageProps(src, "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw")}
            alt={
              language === "ru"
                ? `Работа ${i + 1} из ленты «Визуал»`
                : `Work ${i + 1} from the Visual feed`
            }
            loading="lazy"
            decoding="async"
            className="block w-full break-inside-avoid"
          />
        ))}
      </div>

      <PageFooter />
    </main>
  );
}
