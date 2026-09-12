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
    team: ["instagram:", "@avotarip"],
    tagline: "A viral series of oil pastel caricatures",
    description: ["A series of individual caricatures."],
    result: "The works spread online as profile pictures.",
    resultFacts: ["Oil pastel portrait series"],
  },
  academicism: {
    field: "Pencil and gouache",
    role: "Artist",
    team: ["instagram:", "@avotarip"],
    tagline: "Academic drawing and oil painting",
    description: ["Academic drawing, anatomy, composition and painting."],
    result: "Academic training creates the freedom to work across different styles.",
    resultFacts: ["Drawing, oil, pastel and graphic art"],
  },
  mixed: {
    field: "Mixed media",
    role: "Artist, illustrator",
    team: ["instagram:", "@avotarip"],
    tagline: "Mixed‑media portraits",
    description: ["Portraits combining acrylic, markers, text and collage."],
    result: "A signature style that is instantly recognisable in the feed.",
    resultFacts: ["Mixed media and illustration"],
  },
  "custom-space": {
    field: "Graffiti · Spatial design",
    role: "Artist, set designer",
    team: ["instagram:", "@avotarip"],
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
      "Photo",
      "@weirddy.y",
      "Models",
      "@avotarip",
      "@montan.me",
      "Horse",
      "@ranoobis",
      "Sword",
      "@outside.inc",
    ],
    tagline: "Fantasy Of Poison",
    description: ["A dark fantasy story brings a rider, horse and sword into one cinematic world. Vika shaped the series through art direction, character and visual pacing."],
    result: "The rider, horse and custom prop became the protagonists of a cohesive visual story.",
    resultFacts: ["Art direction for a shoot with a horse and custom prop"],
  },
  mermaids: {
    field: "Photography",
    role: "Art director",
    team: [
      "instagram:",
      "Photo",
      "@avotarip",
      "Model",
      "@likaaapos",
    ],
    tagline: "MERMAIDS",
    description: ["Cold light, wet textures and shell details turn the portrait into a contemporary mermaid. Close framing and a weightless blue palette hold the series together."],
    result: "The portrait shoot creates a recognisable underwater world without a literal set.",
    resultFacts: ["Art direction, photography and a look built around marine details"],
  },
  "fantasy-of-poison-ll": {
    field: "Photography",
    role: "Art director",
    team: [
      "instagram:",
      "Photo",
      "@weirddy.y",
      "@pxl_head",
      "Models",
      "@endy_marfa",
      "@montan.me",
      "@avotarip",
      "Sword",
      "@outside.inc",
    ],
    tagline: "FANTASY OF POISON II",
    description: ["The continuation of Fantasy Of Poison expands the story into an ensemble of characters. Pink and black looks, collage-like composition and backstage video connect it to the first chapter."],
    result: "The second chapter turns the original idea into a collective fashion story.",
    resultFacts: ["Art direction for an ensemble shoot and backstage video"],
  },
  psycho: {
    field: "Photography",
    role: "Photographer",
    team: [
      "instagram:",
      "Photo",
      "@avotarip",
      "Model",
      "@elvnknight",
    ],
    tagline: "PSYCHO",
    description: ["Blurred movement, a cold bathroom and fragmented views of the body create anxiety and loss of control. The camera becomes part of the character’s psychological state."],
    result: "The series holds the tension between a documentary image and a scene from a thriller.",
    resultFacts: ["Original photography using deliberate blur and cold light"],
  },
  "painted-dolls": {
    field: "Photography",
    role: "Photographer",
    team: [
      "instagram:",
      "Photo",
      "@avotarip",
      "Model",
      "@elvnknight",
    ],
    tagline: "PAINTED DOLLS",
    description: ["Paint, threads and translucent layers turn the model’s face into the surface of a hand-painted doll. Tight portraits emphasise both fragility and artificiality."],
    result: "The portrait series balances between a living person and a crafted object.",
    resultFacts: ["Photography of make-up and layered styling"],
  },
  texture: {
    field: "Photography",
    role: "Photographer",
    team: [
      "instagram:",
      "Photo",
      "@avotarip",
      "Design",
      "@montan.me",
      "@pavlovamarieme",
      "@__burgarrrrdt__",
      "Models",
      "@honekss",
      "@babysupaskkiny",
      "@fffadeintoyou",
      "@go.roshina",
      "Studio",
      "@lumierenoirrre",
    ],
    tagline: "TEXTURE",
    description: ["The project explores how fabric, skin, make-up and directional light alter the perception of the body. Wide views alternate with details so material becomes the main character."],
    result: "Different designer looks are connected through one visual language of texture and light.",
    resultFacts: ["20 images · 4 models · collaboration with designers"],
  },
  "cake-or-fake": {
    field: "Photography",
    role: "Look and styling",
    team: [
      "instagram:",
      "Photo",
      "@pxl_head",
      "Models",
      "@montan.me",
      "@avotarip",
    ],
    tagline: "CAKE OR FAKE",
    description: ["Decorative make-up constructs the face like a confection and splits the portrait between two realities. Vika developed the look and styling for the shoot."],
    result: "The game between edible and real becomes a graphic fashion portrait.",
    resultFacts: ["Look, styling and work with sculptural make-up"],
  },
  "tokyo-style": {
    field: "Photography",
    role: "Photographer",
    team: [
      "instagram:",
      "Photo",
      "@avotarip",
      "Model",
      "@rexdeusangelus",
    ],
    tagline: "TOKYO STYLE",
    description: ["A graphic silhouette, profile and red circle reference Tokyo poster aesthetics. Three images form a concise editorial sequence."],
    result: "The minimal series works as a complete visual poster.",
    resultFacts: ["3 images · original photography and composition"],
  },
  feathers: {
    field: "Photography",
    role: "Photographer",
    team: [
      "instagram:",
      "Photo",
      "@avotarip",
      "Design",
      "@pavlovamarieme",
      "Model",
      "@honekss",
      "Video",
      "@pxl_head",
    ],
    tagline: "FEATHERS",
    description: ["Theatrical costume, feathers and saturated colour create a character between fashion photography and stage portraiture. Photography, design and video shape the project together."],
    result: "The photographs and backstage footage reveal the look as a complete stage story.",
    resultFacts: ["Photography, design and video in one project"],
  },
  antagonism: {
    field: "Photography",
    role: "Photographer",
    team: [
      "instagram:",
      "Photo / video",
      "@avotarip",
      "Styling",
      "@rexdeusangelus",
      "Models",
      "@AVRILGROSSMAN",
      "@elvnknight",
    ],
    tagline: "ANTAGONISM",
    description: ["Black and white figures collide in a confined space, turning posture and movement into a conflict between two forces. Costume contrast sets the rhythm of the series."],
    result: "The paired shoot conveys opposition through colour, movement and image sequencing.",
    resultFacts: ["Photo and video · two models · original photography"],
  },
  "girlish-dream": {
    field: "Photography",
    role: "Photographer",
    team: [
      "instagram:",
      "Photo",
      "@avotarip",
      "Secret models",
    ],
    tagline: "GIRLISH DREAM",
    description: ["Glitter, soft light and an intimate camera build a personal, diary-like image. The series approaches a girlish dream without glossy distance."],
    result: "Close portraits form a tender and slightly uncanny visual sequence.",
    resultFacts: ["10 images · original portrait photography"],
  },
  twins: {
    field: "Photography",
    role: "Photographer",
    team: [
      "instagram:",
      "@avotarip",
      "@honekss",
    ],
    tagline: "TWINS",
    description: ["Two subjects and contrasting make-up explore resemblance, difference and shifting identity. Tight portraits create a dialogue between faces as if they were reflections."],
    result: "Five portraits form a compact story about duality.",
    resultFacts: ["Paired portrait · 5 images · original photography"],
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
