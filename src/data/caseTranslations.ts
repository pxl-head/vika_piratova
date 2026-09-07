import type { CaseItem } from "@/data/cases";
import type { Language } from "@/language";

export interface LocalizedCaseText {
  categoryLabel: string;
  field: string;
  role: string;
  team: string[];
  tagline: string;
  description: string[];
  result: string;
  resultFacts: string[];
}

const ENGLISH_CASES: Record<string, Omit<LocalizedCaseText, "categoryLabel">> = {
  caricature: {
    field: "Oil pastel",
    role: "Artist, illustrator",
    team: ["@avotarip"],
    tagline: "A viral series of oil pastel caricatures",
    description: ["A series of individual caricatures."],
    result: "The works spread online as profile pictures.",
    resultFacts: ["Oil pastel portrait series"],
  },
  academicism: {
    field: "Pencil and gouache",
    role: "Artist",
    team: ["@avotarip"],
    tagline: "Academic drawing and oil painting",
    description: ["Academic drawing, anatomy, composition and painting."],
    result: "Academic training creates the freedom to work across different styles.",
    resultFacts: ["Drawing, oil, pastel and graphic art"],
  },
  mixed: {
    field: "Mixed media",
    role: "Artist, illustrator",
    team: ["@avotarip"],
    tagline: "Mixed‑media portraits",
    description: ["Portraits combining acrylic, markers, text and collage."],
    result: "A signature style that is instantly recognisable in the feed.",
    resultFacts: ["Mixed media and illustration"],
  },
  "custom-space": {
    field: "Graffiti · Spatial design",
    role: "Artist, set designer",
    team: ["@avotarip"],
    tagline: "Graffiti and murals",
    description: ["Custom‑designed spaces."],
    result: "The mural turns a space into a point of attraction.",
    resultFacts: ["Concept, mural and spatial design"],
  },
  "fantasy-of-poison": {
    field: "Photography",
    role: "Art director",
    team: [
      "instagram:",
      "Photo — @weirddy.y",
      "Models — @avotarip, @montan.me",
      "Horse — @ranoobis",
      "Sword — @outside.inc",
    ],
    tagline: "Fantasy Of Poison",
    description: ["A series of images from the Fantasy Of Poison project."],
    result: "The photo project is shaped into a standalone visual story.",
    resultFacts: ["The complete series is available in the gallery"],
  },
  mermaids: {
    field: "Photography",
    role: "Art director",
    team: [
      "instagram:",
      "Photo — @avotarip",
      "Model — @likaaapos",
    ],
    tagline: "MERMAIDS",
    description: ["A series of images from the MERMAIDS project."],
    result: "The photo project is shaped into a standalone visual story.",
    resultFacts: ["The complete series is available in the gallery"],
  },
  "fantasy-of-poison-ll": {
    field: "Photography",
    role: "Art director",
    team: [
      "instagram:",
      "Photo — @weirddy.y, @pxl_head",
      "Models — @endy_marfa, @montan.me, @avotarip",
      "Sword — @outside.inc",
    ],
    tagline: "FANTASY OF POISON II",
    description: ["A series of images from the Fantasy Of Poison project."],
    result: "The photo project is shaped into a standalone visual story.",
    resultFacts: ["The complete series is available in the gallery"],
  },
  psycho: {
    field: "Photography",
    role: "Photographer",
    team: [
      "instagram:",
      "Photo — @avotarip",
      "Model — @elvnknight",
    ],
    tagline: "PSYCHO",
    description: ["A series of images from the PSYCHO project."],
    result: "The photo project is shaped into a standalone visual story.",
    resultFacts: ["The complete series is available in the gallery"],
  },
  "painted-dolls": {
    field: "Photography",
    role: "Photographer",
    team: [
      "instagram:",
      "Photo — @avotarip",
      "Model — @elvnknight",
    ],
    tagline: "PAINTED DOLLS",
    description: ["A series of images from the PAINTED DOLLS project."],
    result: "The photo project is shaped into a standalone visual story.",
    resultFacts: ["The complete series is available in the gallery"],
  },
  texture: {
    field: "Photography",
    role: "Photographer",
    team: [
      "instagram:",
      "Photo — @avotarip",
      "Design — @montan.me, @pavlovamarieme, @__burgarrrrdt__",
      "Models — @honekss, @babysupaskkiny, @fffadeintoyou, @go.roshina",
      "Studio — @lumierenoirrre",
    ],
    tagline: "TEXTURE",
    description: ["A series of images from the TEXTURE project."],
    result: "The photo project is shaped into a standalone visual story.",
    resultFacts: ["The complete series is available in the gallery"],
  },
  "cake-or-fake": {
    field: "Photography",
    role: "Look and styling",
    team: [
      "instagram:",
      "Photo — @pxl_head",
      "Models — @montan.me, @avotarip",
    ],
    tagline: "CAKE OR FAKE",
    description: ["A series of images from the CAKE OR FAKE project."],
    result: "The photo project is shaped into a standalone visual story.",
    resultFacts: ["The complete series is available in the gallery"],
  },
  "tokyo-style": {
    field: "Photography",
    role: "Photographer",
    team: [
      "instagram:",
      "Photo — @avotarip",
      "Model — @rexdeusangelus",
    ],
    tagline: "TOKYO STYLE",
    description: ["A series of images from the TOKYO STYLE project."],
    result: "The photo project is shaped into a standalone visual story.",
    resultFacts: ["The complete series is available in the gallery"],
  },
  feathers: {
    field: "Photography",
    role: "Photographer",
    team: [
      "Instagram:",
      "Photo — @avotarip",
      "Design — @pavlovamarieme",
      "Model — @honekss",
      "Video — @pxl_head",
    ],
    tagline: "FEATHERS",
    description: ["A series of images from the FEATHERS project."],
    result: "The photo project is shaped into a standalone visual story.",
    resultFacts: ["The complete series is available in the gallery"],
  },
  antagonism: {
    field: "Photography",
    role: "Photographer",
    team: [
      "Instagram:",
      "Photo / video — @avotarip",
      "Styling — @rexdeusangelus",
      "Models: @AVRILGROSSMAN, @elvnknight",
    ],
    tagline: "ANTAGONISM",
    description: ["A series of images from the ANTAGONISM project."],
    result: "The photo project is shaped into a standalone visual story.",
    resultFacts: ["The complete series is available in the gallery"],
  },
  "girlish-dream": {
    field: "Photography",
    role: "Photographer",
    team: [
      "instagram:",
      "Photo — @avotarip",
      "Secret models",
    ],
    tagline: "GIRLISH DREAM",
    description: ["A series of images from the GIRLISH DREAM project."],
    result: "The photo project is shaped into a standalone visual story.",
    resultFacts: ["The complete series is available in the gallery"],
  },
  twins: {
    field: "Photography",
    role: "Photographer",
    team: [
      "instagram",
      "@avotarip",
      "@honekss",
    ],
    tagline: "TWINS",
    description: ["A series of images from the TWINS project."],
    result: "The photo project is shaped into a standalone visual story.",
    resultFacts: ["The complete series is available in the gallery"],
  },
};

export function getCaseText(item: CaseItem, language: Language): LocalizedCaseText {
  if (language === "en") {
    const english = ENGLISH_CASES[item.id];
    if (!english) {
      throw new Error(`Missing English copy for case: ${item.id}`);
    }

    return {
      ...english,
      categoryLabel: item.category === "art" ? "Visual Art" : "Photo Project",
    };
  }

  return {
    categoryLabel: item.category === "art" ? "Визуальное искусство" : "Фотопроект",
    field: item.field,
    role: item.role,
    team: item.team,
    tagline: item.tagline,
    description: item.description,
    result: item.result,
    resultFacts: item.resultFacts,
  };
}
