import { AppWindow, ArrowUpRight, Clapperboard, Code2, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { RevealLine, FadeIn } from "./Animations";
import BuildCard from "./board/BuildCard";
import { builds, disciplines } from "../data/builds";

const icons = [Code2, AppWindow, Gamepad2, Clapperboard];
const tones = ["bg-sky", "bg-butter", "bg-blush", "bg-sage"];
// Offset heights so the four tiles read as a pinboard, not a row of equal boxes
const heights = ["md:min-h-[26rem]", "md:min-h-[22rem] md:mt-16", "md:min-h-[24rem] md:mt-6", "md:min-h-[21rem] md:mt-24"];

export default function ChapterTwo() {
  return (
    <section id="build" className="relative bg-sec text-main py-24 px-6 md:px-12 lg:px-24 overflow-hidden rounded-[2.5rem] md:rounded-[4rem] mx-0">
      <div className="relative max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-red text-[11px] font-black uppercase tracking-[0.35em] mb-5">Chapter 2</p>
        </FadeIn>
        <RevealLine>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] max-w-4xl">
            Then I started building the things too.
          </h2>
        </RevealLine>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-2xl text-main/55 max-w-2xl mt-6 leading-relaxed">
            Getting people to care is half of it. The other half is making something worth caring about.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-16 items-start">
          {disciplines.map((d, i) => {
            const Icon = icons[i];
            const count = builds.filter((b) => b.discipline === d.name).length;
            return (
              <FadeIn key={d.name} delay={i * 0.08}>
                <Link
                  to={`/works?d=${encodeURIComponent(d.name)}`}
                  className={`group relative flex flex-col justify-between rounded-[1.75rem] ${tones[i]} text-sec p-7 min-h-[18rem] ${heights[i]} hover:-translate-y-1.5 transition-transform duration-300`}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-full bg-main/80 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-sec/40 group-hover:text-sec group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <div>
                    <h3 className="font-display text-4xl md:text-5xl font-black tracking-tighter leading-[0.9] mb-4">{d.name}</h3>
                    <p className="text-sec/70 leading-relaxed mb-5">{d.line}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {d.formats.map((f) => (
                        <span key={f} className="rounded-full bg-main/70 px-3 py-1 text-xs font-bold">{f}</span>
                      ))}
                    </div>
                    {count > 0 && (
                      <p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-sec/50">
                        {count} {count === 1 ? "project" : "projects"}
                      </p>
                    )}
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        {builds.length > 0 && (
          <div className="mt-20">
            <RevealLine>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Recent builds.</h3>
            </RevealLine>
            <div className="pin-board columns-2 lg:columns-3 gap-3 sm:gap-5">
              {builds.slice(0, 6).map((build, i) => (
                <FadeIn key={build.name} delay={i * 0.05}>
                  <BuildCard build={build} />
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
