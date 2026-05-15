import { RevealLine, FadeIn } from "../components/Animations";
import { supportedBrands } from "../data/davidPortfolio";

export default function Works() {
  return (
    <main className="pt-36 pb-24 px-6 md:px-12 lg:px-24 bg-main text-sec min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <RevealLine>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">
              Brands & Projects
            </h1>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-sec/65 max-w-4xl font-medium">
              Web3 brands, gaming projects, NFT/RWA teams, wallet products, protocols, Base and Solana communities, and meme ecosystems I've supported through strategy, content, communication, and execution.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {supportedBrands.map((brand, index) => (
            <FadeIn key={brand.name} delay={index * 0.035}>
              <article className="h-full rounded-3xl bg-white border border-blue-100 p-6 shadow-sm hover:shadow-xl hover:shadow-blue-950/10 transition-all">
                <span className="inline-flex rounded-full bg-thr/10 text-thr px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] mb-5">
                  {brand.category}
                </span>
                <h2 className="text-3xl font-black tracking-tight mb-3">{brand.name}</h2>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-sec/40 mb-5">{brand.role}</p>
                <p className="text-sec/65 leading-relaxed">{brand.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}