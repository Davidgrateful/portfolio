import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { RevealLine, FadeIn } from "../components/Animations";
import PinCover, { seedOf } from "../components/board/PinCover";
import BuildCard from "../components/board/BuildCard";
import { brandFilters, contact, supportedBrands } from "../data/davidPortfolio";
import { builds, disciplines } from "../data/builds";

const MARKETING = "Marketing & Community";
const sections = ["Everything", MARKETING, ...disciplines.map((d) => d.name)];

export default function Works() {
  const [params, setParams] = useSearchParams();
  const section = sections.includes(params.get("d") ?? "") ? params.get("d")! : "Everything";
  const setSection = (next: string) => {
    setFilter("All");
    setParams(next === "Everything" ? {} : { d: next }, { replace: true });
  };
  const [filter, setFilter] = useState("All");

  const showBrands = section === "Everything" || section === MARKETING;
  const brands = !showBrands ? [] : filter === "All" ? supportedBrands : supportedBrands.filter((b) => b.tags.includes(filter));
  const shownBuilds = section === "Everything" ? builds : builds.filter((b) => b.discipline === section);
  const countFor = (s: string) =>
    s === "Everything" ? supportedBrands.length + builds.length : s === MARKETING ? supportedBrands.length : builds.filter((b) => b.discipline === s).length;
  const isEmpty = brands.length === 0 && shownBuilds.length === 0;

  return (
    <main className="pt-36 pb-24 px-6 md:px-12 lg:px-24 bg-main text-sec min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <RevealLine>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">
              The Work
            </h1>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-sec/65 max-w-3xl font-medium">
              Marketing, web dev, apps, games, content and video — sometimes all at once. Pick a lane or browse the whole board.
            </p>
          </FadeIn>
        </div>

        {/* Sections: what kind of work */}
        <FadeIn delay={0.25}>
          <div className="flex gap-2 overflow-x-auto pb-2 mb-4 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap">
            {sections.map((s) => {
              const active = s === section;
              return (
                <button
                  key={s}
                  onClick={() => setSection(s)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                    active ? "bg-sec text-main" : "bg-white text-sec/70 hover:bg-sec/5 hover:text-sec"
                  }`}
                >
                  {s}
                  {countFor(s) > 0 && (
                    <span className={`ml-2 text-xs ${active ? "text-main/50" : "text-sec/35"}`}>{countFor(s)}</span>
                  )}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Brand categories, only when looking at the marketing work */}
        {section === MARKETING ? (
          <div className="flex gap-2 overflow-x-auto pb-2 mb-10 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap">
            {brandFilters.map((f) => {
              const active = f === filter;
              const count = f === "All" ? supportedBrands.length : supportedBrands.filter((b) => b.tags.includes(f)).length;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-bold transition-all ${
                    active ? "border-sec text-sec" : "border-sec/10 text-sec/55 hover:border-sec/30 hover:text-sec"
                  }`}
                >
                  {f}
                  <span className="ml-1.5 text-sec/35">{count}</span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mb-10" />
        )}

        {isEmpty && (
          <div className="rounded-[1.75rem] border-2 border-dashed border-sec/15 p-8 md:p-12 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-2xl md:text-3xl font-black tracking-tighter mb-2">{section} projects are on their way to this board.</p>
              <p className="text-sec/60">Want to see something now? Ask me on a call.</p>
            </div>
            <a
              href={contact.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start md:self-auto rounded-full bg-sec text-main px-6 py-3.5 text-xs font-black uppercase tracking-[0.16em] whitespace-nowrap"
            >
              Book a call <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}

        <div className="pin-board columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-5">
          <AnimatePresence initial={false}>
            {section === "Everything" && (
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

            {shownBuilds.map((build) => (
              <motion.div
                key={build.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <BuildCard build={build} />
              </motion.div>
            ))}

            {brands.map((brand) => (
              <motion.article
                key={brand.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-[1.4rem] sm:rounded-[1.75rem] bg-white p-1.5 sm:p-2.5 pb-4 sm:pb-6 shadow-[0_1px_2px_rgba(22,22,26,0.04)] hover:shadow-[0_18px_40px_-18px_rgba(22,22,26,0.3)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
              >
                <PinCover seed={seedOf(brand.name)} title={brand.name} badge={brand.category} />
                <div className="px-2 sm:px-3.5 pt-3 sm:pt-5">
                  <h2 className="text-base sm:text-xl font-black tracking-tight leading-tight mb-1">
                    {brand.link ? (
                      // Stretched link: the whole card is clickable
                      <a href={brand.link} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between gap-2 after:absolute after:inset-0">
                        {brand.name}
                        <ArrowUpRight className="w-4 h-4 shrink-0 mt-1 text-sec/40 group-hover:text-red transition-colors" />
                      </a>
                    ) : (
                      brand.name
                    )}
                  </h2>
                  <p className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.14em] text-thr sm:mb-3">{brand.role}</p>
                  <p className="hidden sm:block text-sm text-sec/65 leading-relaxed">{brand.description}</p>
                </div>
              </motion.article>
            ))}

            {showBrands && filter === "All" && (
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
