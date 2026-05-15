import { BriefcaseBusiness, Sparkles } from "lucide-react";
import { RevealLine, FadeIn } from "./Animations";
import { supportedBrands } from "../data/davidPortfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-blue-50 text-sec relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <FadeIn>
              <p className="text-thr text-[11px] font-black uppercase tracking-[0.35em] mb-4">Brands & Projects I've Supported</p>
            </FadeIn>
            <RevealLine>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter max-w-4xl">
                Experience across Web3, wallets, gaming, NFTs, protocols, and communities.
              </h2>
            </RevealLine>
          </div>
          <FadeIn delay={0.2}>
            <div className="rounded-3xl bg-white border border-blue-100 p-6 max-w-sm shadow-sm">
              <div className="flex items-center gap-3 text-thr font-black uppercase tracking-[0.2em] text-[10px] mb-3">
                <Sparkles className="w-4 h-4" />
                Social-first proof
              </div>
              <p className="text-sec/65 leading-relaxed">
                These are campaign, content, coordination, and community support roles, not developer work history.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {supportedBrands.map((brand, index) => (
            <FadeIn key={brand.name} delay={index * 0.035}>
              <article className="h-full rounded-3xl bg-white border border-blue-100 p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10 transition-all">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-flex rounded-full bg-thr/10 text-thr px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] mb-4">
                      {brand.category}
                    </span>
                    <h3 className="text-2xl font-black tracking-tight">{brand.name}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-thr flex items-center justify-center shrink-0">
                    <BriefcaseBusiness className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-sec/45 mb-4">{brand.role}</p>
                <p className="text-sec/65 leading-relaxed">{brand.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}