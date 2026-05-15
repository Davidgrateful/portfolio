import { ArrowUpRight } from "lucide-react";
import { RevealLine, FadeIn } from "./Animations";
import MagneticButton from "./MagneticButton";
import { Link } from "react-router-dom";
import { supportedBrands } from "../data/davidPortfolio";

export default function ProjectsPreview() {
  return (
    <section id="works" className="py-24 px-6 md:px-12 lg:px-24 bg-main text-sec">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <RevealLine>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">
                Selected Brand Work
              </h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-sec/65 max-w-xl text-lg">
                A snapshot of Web3, gaming, wallet, NFT, RWA, protocol, and community projects I've supported through content, campaigns, and coordination.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <MagneticButton>
              <Link to="/works" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-thr hover:text-sec transition-colors group">
                View All
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {supportedBrands.slice(0, 6).map((brand, index) => (
            <FadeIn key={brand.name} delay={index * 0.06}>
              <div className="h-full rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                <span className="inline-flex rounded-full bg-blue-50 text-thr px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] mb-5">
                  {brand.category}
                </span>
                <h3 className="text-2xl font-black tracking-tight mb-3">{brand.name}</h3>
                <p className="text-sm font-black uppercase tracking-[0.15em] text-sec/40 mb-4">{brand.role}</p>
                <p className="text-sec/60 leading-relaxed">{brand.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}