import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { FadeIn, RevealLine } from "../components/Animations";
import { contact, strategyNotes } from "../data/davidPortfolio";

export default function BlogDetail() {
  const { id } = useParams();
  const note = strategyNotes.find((item) =>
    item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === id
  ) || strategyNotes[0];

  return (
    <main className="pt-36 pb-24 px-6 md:px-12 lg:px-24 bg-main text-sec min-h-screen">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-thr mb-12">
            <ArrowLeft className="w-4 h-4" />
            Strategy Notes
          </Link>
        </FadeIn>
        <RevealLine>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-8">
            {note.title}
          </h1>
        </RevealLine>
        <FadeIn delay={0.15}>
          <span className="inline-flex rounded-full bg-thr/10 text-thr px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] mb-8">
            {note.category}
          </span>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="text-xl md:text-2xl text-sec/70 leading-relaxed mb-10">
            {note.excerpt}
          </p>
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-8">
            <h2 className="text-2xl font-black tracking-tight mb-4">Want this kind of thinking for your project?</h2>
            <p className="text-sec/65 leading-relaxed mb-6">
              David helps Web3 brands turn ideas into content plans, campaign structure, community communication, and social execution.
            </p>
            <a href={contact.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-thr font-black uppercase tracking-[0.16em] text-xs">
              Book a Call <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}