import { ReactNode } from "react";

// Pastel tones + patterns give every card its own "image" without needing
// real screenshots. The same seed always produces the same cover.
const tones = [
  { bg: "bg-sky", ink: "#3d7bf0" },
  { bg: "bg-butter", ink: "#16161a" },
  { bg: "bg-blush", ink: "#e5432a" },
  { bg: "bg-sage", ink: "#16161a" },
  { bg: "bg-lilac", ink: "#3d7bf0" },
];

const heights = ["aspect-[4/5]", "aspect-square", "aspect-[5/4]", "aspect-[3/4]", "aspect-[4/3]"];

function patternFor(kind: number, ink: string) {
  const c = `${ink}33`;
  switch (kind) {
    case 0:
      return { backgroundImage: `radial-gradient(${c} 1.6px, transparent 1.6px)`, backgroundSize: "16px 16px" };
    case 1:
      return { backgroundImage: `repeating-linear-gradient(135deg, ${c} 0 2px, transparent 2px 14px)` };
    case 2:
      return {
        backgroundImage: `linear-gradient(${c} 1px, transparent 1px), linear-gradient(90deg, ${c} 1px, transparent 1px)`,
        backgroundSize: "22px 22px",
      };
    case 3:
      return { backgroundImage: `repeating-radial-gradient(circle at 85% 15%, ${c} 0 2px, transparent 2px 18px)` };
    default:
      return { backgroundImage: `repeating-linear-gradient(0deg, ${c} 0 2px, transparent 2px 12px)` };
  }
}

export function seedOf(text: string) {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) >>> 0;
  return h;
}

interface PinCoverProps {
  seed: number;
  title: string;
  badge?: string;
  /** Fixed height instead of the varied masonry heights */
  compact?: boolean;
  children?: ReactNode;
}

export default function PinCover({ seed, title, badge, compact = false, children }: PinCoverProps) {
  const tone = tones[seed % tones.length];
  const pattern = patternFor(Math.floor(seed / 7) % 5, tone.ink);
  // Heavy display type is ~0.62em per glyph; scale so the longest word always fits
  const longest = Math.max(...title.split(/\s+/).map((w) => w.length));
  const fontSize = `min(${compact ? 2.5 : 3.75}rem, ${Math.floor(140 / Math.max(longest, 4))}cqw)`;
  const height = compact ? "h-44" : heights[Math.floor(seed / 3) % heights.length];

  return (
    <div className={`relative overflow-hidden rounded-[1.4rem] @container ${tone.bg} ${height}`}>
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
        style={pattern}
      />
      <div className="grain-overlay" />
      {badge && (
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 max-w-[calc(100%-1.5rem)] truncate rounded-full bg-main/85 backdrop-blur px-3 py-1 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.18em] text-sec">
          {badge}
        </span>
      )}
      <div className="absolute inset-0 flex items-end p-3.5 sm:p-5">
        {children ?? (
          <span
            className="font-display font-black tracking-tighter leading-[0.88]"
            style={{ color: tone.ink, fontSize }}
          >
            {title}
          </span>
        )}
      </div>
    </div>
  );
}
