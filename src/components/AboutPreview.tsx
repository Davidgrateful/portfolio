import { ArrowUpRight } from "lucide-react";
import { RevealLine, FadeIn } from "./Animations";
import MagneticButton from "./MagneticButton";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative z-20 -mt-10 md:-mt-16 rounded-t-[2.5rem] md:rounded-t-[4rem] py-24 px-6 md:px-12 lg:px-24 bg-sec text-white shadow-[0_-30px_60px_-30px_rgba(0,0,0,0.25)]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
        <FadeIn>
          <div className="sticky top-24">
            <p className="text-red text-[11px] font-black uppercase tracking-[0.35em] mb-5">The story so far</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              I make people care.
            </h2>
          </div>
        </FadeIn>
        <div>
          <RevealLine>
            <p className="text-2xl md:text-4xl font-bold tracking-tight leading-tight text-white">
              I started in marketing — content, community, campaigns. Turns out getting people to care about something is basically the whole game.
            </p>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-sky-300 font-bold mt-6">
              Then I started building the things too.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mt-6">
              Mass Communication degree. A few years deep in Web3 marketing — wallets, games, protocols, communities that actually show up. Somewhere along the way I picked up code, design, and a habit of shipping things nobody asked for.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex items-center gap-2 mt-10">
              <MagneticButton>
                <Link to="/about" className="inline-flex items-center justify-center bg-white text-sec px-8 py-4 rounded-full font-black uppercase tracking-[0.16em] text-xs hover:bg-sky-100 transition-colors">
                  The full story
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/about" className="inline-flex items-center justify-center bg-white text-sec w-14 h-14 rounded-full hover:bg-sky-100 transition-colors group">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}