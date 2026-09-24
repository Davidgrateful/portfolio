// Content & Video: David's videos on X (@VCG_RUN), newest first.
// Posters live in /public/work/videos/<id>.jpg. To add a video, add an entry
// and drop its thumbnail in that folder.

export type VideoTopic = "Building in public" | "AI" | "Web3" | "Creator life";

export interface Video {
  id: string;
  title: string;
  caption: string;
  date: string;
  seconds: number;
  orientation: "portrait" | "landscape" | "square";
  topic: VideoTopic;
}

export const videoUrl = (v: Video) => `https://x.com/VCG_RUN/status/${v.id}`;
export const videoPoster = (v: Video) => `/work/videos/${v.id}.jpg`;

export const videos: Video[] = [
  {
    id: "2101989833207841192",
    title: "Ever felt like you’re not doing enough?",
    caption: "Like what you’re carrying just isn’t good enough? Yeah… I was talking about the @CoinbaseWallet. 😂 Wait till the end. 👀",
    date: "2026-09-21",
    seconds: 46,
    orientation: "portrait",
    topic: "Web3",
  },
  {
    id: "2095042260639355212",
    title: "I might’ve already messed up my hackathon game. 😂",
    caption: "started building my Verse8 submission with agent 8… Then I went back and read the rules. 👀 Simple ~ Direct ~ Fast-paced. Now I have to make sure I’m not cooking the wrong game. 😭 @Verse_Eight we’re locked in. Prt2",
    date: "2026-09-02",
    seconds: 50,
    orientation: "landscape",
    topic: "Building in public",
  },
  {
    id: "2093268243066617920",
    title: "I’m entering a hackathon… and I’m building the entire game with AI. 😂",
    caption: "@Verse_Eight is running the challenge, there’s a prize pool on the line, and apparently anyone can cook. 👀 I’m documenting the whole build. Let’s see if I can actually cook.",
    date: "2026-08-28",
    seconds: 38,
    orientation: "landscape",
    topic: "Building in public",
  },
  {
    id: "2087478411241431524",
    title: "Too many ideas, Not enough time.",
    caption: "",
    date: "2026-08-12",
    seconds: 32,
    orientation: "landscape",
    topic: "Creator life",
  },
  {
    id: "2080611910542671970",
    title: "Day 2: Pitching on-mark to an investor.",
    caption: "",
    date: "2026-07-24",
    seconds: 35,
    orientation: "portrait",
    topic: "Building in public",
  },
  {
    id: "2079540475283804483",
    title: "I did something with my game that I honestly didn’t expect… 👀",
    caption: "",
    date: "2026-07-21",
    seconds: 30,
    orientation: "portrait",
    topic: "Building in public",
  },
  {
    id: "2078493950730445184",
    title: "I’d rather thank my supporters than complain about the algorithm.",
    caption: "I left a gift in this video.",
    date: "2026-07-18",
    seconds: 53,
    orientation: "portrait",
    topic: "Creator life",
  },
  {
    id: "2075900360279965921",
    title: "Unfiltered words..",
    caption: "Thanks to everyone supporting me and sharing. Dropping more interesting content and products.",
    date: "2026-07-11",
    seconds: 73,
    orientation: "portrait",
    topic: "Creator life",
  },
  {
    id: "2075163861024399503",
    title: "Ending point of a content should be carefully chosen.",
    caption: "What do you think ?",
    date: "2026-07-09",
    seconds: 38,
    orientation: "portrait",
    topic: "Creator life",
  },
  {
    id: "2071914327943090613",
    title: "Today’s the last day of June!",
    caption: "and I’m grateful for building Raid shooter. Built a lot of things but never a game, took a while but it happened. Launching soon. Fun, Competitive and rewarding. Before.                           After.",
    date: "2026-06-30",
    seconds: 13,
    orientation: "landscape",
    topic: "Building in public",
  },
  {
    id: "2067570220739203203",
    title: "Thanks for supporting this push!",
    caption: "Building Raid shooter for a while now. Looking to drop it in DMs today, so watch this video and drop a comment to get it! Coming on @base!",
    date: "2026-06-18",
    seconds: 39,
    orientation: "portrait",
    topic: "Building in public",
  },
  {
    id: "2067224164163871114",
    title: "Raid shooter v1 is going LIVE!",
    caption: "Finally finished the v1 of my arcade space game. Defend Earth from aliens coming to invade  and stand a chance to be called a \"Hero\". Watch video for teaser 💙",
    date: "2026-06-17",
    seconds: 55,
    orientation: "landscape",
    topic: "Building in public",
  },
  {
    id: "2063605315053011385",
    title: "How to create AI content",
    caption: "If you’re still lost or maybe need clarity. Watch this.",
    date: "2026-06-07",
    seconds: 45,
    orientation: "landscape",
    topic: "AI",
  },
  {
    id: "2062597977173037098",
    title: "If you’re into NFTs, then check out this video.",
    caption: "Just spilled something you shouldn’t miss cause it’s early.",
    date: "2026-06-04",
    seconds: 54,
    orientation: "portrait",
    topic: "Web3",
  },
  {
    id: "2061738057452159328",
    title: "Love this update.. it’s giving me goosebumps..",
    caption: "Thanks @nikitabier!",
    date: "2026-06-02",
    seconds: 40,
    orientation: "portrait",
    topic: "Creator life",
  },
  {
    id: "2061359617741869319",
    title: "I FOUND THE BIGGEST AI PROMPTING CHEAT CODE… 👀",
    caption: "And NO, it’s not “be more specific”. Most people are using AI wrong. I tested one simple change and the results were INSANE. dropped the framework + example in this video. Watch this before your next prompt",
    date: "2026-06-01",
    seconds: 81,
    orientation: "portrait",
    topic: "AI",
  },
];
