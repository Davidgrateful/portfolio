// Chapter 2 — the things David builds, beyond marketing.
//
// To add a project, copy this into the `builds` list below and fill it in:
//
//   {
//     name: "Project name",
//     discipline: "Web Dev",            // "Web Dev" | "Apps" | "Games" | "Content & Video"
//     summary: "One or two lines on what it is.",
//     role: "What you did — e.g. Design & frontend",
//     tools: ["React", "Tailwind"],     // optional
//     link: "https://…",                 // optional — live site, GitHub, video, X post
//     image: "/work/my-project.png",     // optional — put the file in /public/work/
//     year: "2026",                      // optional
//   },
//
// Every discipline tile, filter and count on the site updates from this list.

export type Discipline = "Web Dev" | "Apps" | "Games" | "Content & Video";

export interface Build {
  name: string;
  discipline: Discipline;
  summary: string;
  role: string;
  tools?: string[];
  link?: string;
  image?: string;
  year?: string;
}

export const disciplines: { name: Discipline; line: string; formats: string[] }[] = [
  {
    name: "Web Dev",
    line: "Websites and landing pages — designed, coded, and shipped.",
    formats: ["Websites", "Landing pages", "Portfolios"],
  },
  {
    name: "Apps",
    line: "Small products and tools built to solve one real problem well.",
    formats: ["Web apps", "Tools", "Prototypes"],
  },
  {
    name: "Games",
    line: "Games and playable ideas — and the communities that form around them.",
    formats: ["Game ideas", "Web3 gaming", "Community"],
  },
  {
    name: "Content & Video",
    line: "Stories people actually stop scrolling for.",
    formats: ["Talking-head", "Faceless", "Educational", "Campaign recaps"],
  },
];

export const builds: Build[] = [
  {
    name: "Raid Shooter",
    discipline: "Games",
    summary:
      "A free twin-stick arcade shooter that runs in the browser. Draft upgrades, chain combos, survive hazard sectors, beat the Asteroid King and climb the leaderboard. Cosmetics settle on Base.",
    role: "Design & development",
    tools: ["Next.js", "HTML Canvas", "Base"],
    link: "https://raidshooter.xyz",
    image: "/work/raid-shooter.jpg",
  },
];
