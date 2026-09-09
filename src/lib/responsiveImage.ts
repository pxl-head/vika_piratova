import { IMAGE_META } from "@/data/imageMeta.generated";

interface ImageMeta {
  width: number;
  height: number;
  sources: readonly { src: string; width: number }[];
}

interface ResponsiveImageAttributes {
  src: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
}

export function responsiveImageProps(src: string, sizes: string): ResponsiveImageAttributes {
  const meta = (IMAGE_META as Record<string, ImageMeta>)[src];
  if (!meta) return { src, sizes };

  return {
    src,
    srcSet: meta.sources.map((source) => `${source.src} ${source.width}w`).join(", "),
    sizes,
    width: meta.width,
    height: meta.height,
  };
}
