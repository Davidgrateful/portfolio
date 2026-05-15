import { ArrowUpRight } from "lucide-react";
import { RevealLine, FadeIn } from "./Animations";
import MagneticButton from "./MagneticButton";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section id="about" className="relative z-30 py-24 px-6 md:px-12 lg:px-24 bg-sec text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
        <FadeIn>
          <div className="sticky top-24">
            <p className="text-sky-300 text-[11px] font-black uppercase tracking-[0.35em] mb-5">About David</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              Strategy, content, community, and execution.
            </h2>
          </div>
        </FadeIn>
        <div>
          <RevealLine>
            <p className="text-2xl md:text-4xl font-bold tracking-tight leading-tight text-white">
              I'm David Grateful, a Project Manager and Social Media Manager with experience across Web3, gaming, NFTs, RWAs, wallets, protocols, Base, Solana, and community-led brands.
            </p>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mt-8">
              I studied Mass Communication and built my foundation around marketing, public relations, communication strategy, and audience psychology. My work sits between social media management, project coordination, brand storytelling, and Web3 growth.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex items-center gap-2 mt-10">
              <MagneticButton>
                <Link to="/about" className="inline-flex items-center justify-center bg-white text-sec px-8 py-4 rounded-full font-black uppercase tracking-[0.16em] text-xs hover:bg-sky-100 transition-colors">
                  Full Profile
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