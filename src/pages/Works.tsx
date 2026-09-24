import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { RevealLine, FadeIn } from "../components/Animations";
import PinCover, { seedOf } from "../components/board/PinCover";
import { brandFilters, contact, supportedBrands } from "../data/davidPortfolio";

export default function Works() {
  const [filter, setFilter] = useState("All");
  const brands = filter === "All" ? supportedBrands : supportedBrands.filter((b) => b.tags.includes(filter));

  return (
    <main className="pt-36 pb-24 px-6 md:px-12 lg:px-24 bg-main text-sec min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <RevealLine>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">
              Brands & Projects
            </h1>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-sec/65 max-w-3xl font-medium">
              A board of the Web3 brands, games, wallets, protocols and communities I've helped people care about.
            </p>
          </FadeIn>
        </div>

        {/* Category chips */}
        <FadeIn delay={0.25}>
          <div className="flex gap-2 overflow-x-auto pb-2 mb-10 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap">
            {brandFilters.map((f) => {
              const active = f === filter;
              const count = f === "All" ? supportedBrands.length : supportedBrands.filter((b) => b.tags.includes(f)).length;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                    active ? "bg-sec text-main" : "bg-white text-sec/70 hover:bg-sec/5 hover:text-sec"
                  }`}
                >
                  {f}
                  <span className={`ml-2 text-xs ${active ? "text-main/50" : "text-sec/35"}`}>{count}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div className="pin-board columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-5">
          <AnimatePresence initial={false}>
            {filter === "All" && (
              <motion.div
                key="intro-tile"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="rounded-[1.4rem] sm:rounded-[1.75rem] bg-sec text-main p-5 sm:p-7"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red mb-6">The board</p>
                <p className="font-display text-6xl sm:text-7xl font-black tracking-tighter leading-none mb-3">
                  {supportedBrands.length}
                </p>
                <p className="text-sm sm:text-base text-main/70 leading-relaxed">
                  brands and communities supported across Web3 gaming, wallets, NFTs, RWAs, protocols, Base and Solana.
                </p>
              </motion.div>
            )}

            {brands.map((brand) => (
              <motion.article
                key={brand.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group rounded-[1.4rem] sm:rounded-[1.75rem] bg-white p-1.5 sm:p-2.5 pb-4 sm:pb-6 shadow-[0_1px_2px_rgba(22,22,26,0.04)] hover:shadow-[0_18px_40px_-18px_rgba(22,22,26,0.3)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
              >
                <PinCover seed={seedOf(brand.name)} title={brand.name} badge={brand.category} />
                <div className="px-2 sm:px-3.5 pt-3 sm:pt-5">
                  <h2 className="text-base sm:text-xl font-black tracking-tight leading-tight mb-1">{brand.name}</h2>
                  <p className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.14em] text-thr sm:mb-3">{brand.role}</p>
                  <p className="hidden sm:block text-sm text-sec/65 leading-relaxed">{brand.description}</p>
                </div>
              </motion.article>
            ))}

            {filter === "All" && (
              <motion.a
                key="cta-tile"
                href={contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="group block rounded-[1.4rem] sm:rounded-[1.75rem] bg-red text-white p-5 sm:p-7"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 mb-10">Your brand here?</p>
                <p className="text-xl sm:text-3xl font-black tracking-tighter leading-[1.05] mb-6 sm:mb-8">
                  Let's make people care about yours next.
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-white text-sec px-4 sm:px-5 py-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.16em]">
                  Book a call
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </motion.a>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
