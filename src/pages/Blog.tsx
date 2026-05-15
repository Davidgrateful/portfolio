import { ArrowUpRight, Mail } from "lucide-react";
import { FadeIn, RevealLine } from "../components/Animations";
import { contact, strategyNotes } from "../data/davidPortfolio";

export default function Blog() {
  return (
    <main className="pt-36 pb-24 px-6 md:px-12 lg:px-24 bg-main text-sec min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-end mb-14">
          <div>
            <RevealLine>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">
                Strategy Notes
              </h1>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-sec/65 font-medium">
                Thoughts on Web3 content, community growth, wallet communication, gaming visibility, campaigns, NFTs, RWAs, Base, and Solana.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <div className="rounded-3xl bg-blue-50 border border-blue-100 p-7">
              <div className="w-12 h-12 rounded-2xl bg-thr/10 text-thr flex items-center justify-center mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black tracking-tight mb-3">Need a campaign plan?</h2>
              <p className="text-sec/65 leading-relaxed mb-6">Book a call and let's map content, community, and execution around your project goals.</p>
              <a href={contact.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-thr font-black uppercase tracking-[0.16em] text-xs">
                Book a Call <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {strategyNotes.map((note, index) => (
            <FadeIn key={note.title} delay={index * 0.06}>
              <article className="h-full rounded-3xl border border-blue-100 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-blue-950/10 transition-all">
                <span className="inline-flex rounded-full bg-thr/10 text-thr px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] mb-6">
                  {note.category}
                </span>
                <h2 className="text-2xl font-black tracking-tight mb-4">{note.title}</h2>
                <p className="text-sec/65 leading-relaxed">{note.excerpt}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}