import { supportedBrands } from "./davidPortfolio";

export interface AttentionStage {
  key: string;
  label: string;
  caption: string;
  note?: string;
}

export const attentionStages: AttentionStage[] = [
  {
    key: "idea",
    label: "Idea",
    caption: "Every brand starts with “people should care about this.”",
  },
  {
    key: "story",
    label: "Story",
    caption: "Why should anyone care? Find that before touching a caption box.",
  },
  {
    key: "content",
    label: "Content",
    caption: "Turn the story into something worth stopping for.",
  },
  {
    key: "video",
    label: "Video",
    caption: "Yes, I made another video.",
    note: "Talking-head, faceless, educational, campaign recaps — whatever the story needs.",
  },
  {
    key: "community",
    label: "Community",
    caption: "Somehow, people showed up.",
  },
  {
    key: "care",
    label: "People care",
    caption: "The algorithm did not approve this one. It did fine anyway.",
  },
];

export interface CareProject {
  slug: string;
  name: string;
  category: string;
  role: string;
  description: string;
}

// Real engagements, pulled from the same source of truth as the rest of the
// site — no invented outcomes or metrics attached to any of these.
const featuredNames = ["BIFY", "Gaming on Base", "Trade Clash", "Kresus Wallet", "Ithaca Protocol", "PartyIcons"];

export const careProjects: CareProject[] = featuredNames
  .map((name) => supportedBrands.find((b) => b.name === name))
  .filter((b): b is (typeof supportedBrands)[number] => Boolean(b))
  .map((b) => ({
    slug: b.name.toLowerCase().replace(/\s+/g, "-"),
    name: b.name,
    category: b.category,
    role: b.role,
    description: b.description,
  }));
