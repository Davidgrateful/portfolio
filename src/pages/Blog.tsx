import { ArrowUpRight } from "lucide-react";
import { FadeIn, RevealLine } from "../components/Animations";
import PinCover, { seedOf } from "../components/board/PinCover";
import { contact, strategyNotes } from "../data/davidPortfolio";

export default function Blog() {
  return (
    <main className="pt-36 pb-24 px-6 md:px-12 lg:px-24 bg-main text-sec min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <RevealLine>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">
              Strategy Notes
            </h1>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-sec/65 max-w-3xl font-medium">
              Thoughts on Web3 content, community growth, wallets, gaming, campaigns, NFTs, RWAs, Base, and Solana.
            </p>
          </FadeIn>
        </div>

        <div className="pin-board columns-1 sm:columns-2 lg:columns-3 gap-5">
          {strategyNotes.map((note, index) => (
            <FadeIn key={note.title} delay={index * 0.06}>
              <article className="group rounded-[1.75rem] bg-white p-2.5 pb-7 shadow-[0_1px_2px_rgba(22,22,26,0.04)] hover:shadow-[0_18px_40px_-18px_rgba(22,22,26,0.3)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300">
                <PinCover seed={seedOf(note.category)} title={note.category} badge="Strategy note" />
                <div className="px-4 pt-6">
                  <h2 className="text-2xl font-black tracking-tight leading-tight mb-3">{note.title}</h2>
                  <p className="text-sec/65 leading-relaxed">{note.excerpt}</p>
                </div>
              </article>
            </FadeIn>
          ))}

          <FadeIn delay={0.3}>
            <a
              href={contact.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[1.75rem] bg-butter p-7"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-sec/50 mb-10">Need a campaign plan?</p>
              <p className="text-3xl font-black tracking-tighter leading-[1.05] mb-8">
                Let's map content, community, and execution around your goals.
              </p>
              <span className="inline-flex items-center gap-2 rounded-full bg-sec text-main px-5 py-3 text-xs font-black uppercase tracking-[0.16em]">
                Book a call
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
