import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RevealLine, FadeIn } from "../Animations";
import MagneticButton from "../MagneticButton";
import { careProjects } from "../../data/chapterOne";
import PinCover, { seedOf } from "../board/PinCover";

export default function CareProjects() {
  return (
    <div className="pt-20 border-t border-sec/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <RevealLine>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter">
              Things I&rsquo;ve helped people care about.
            </h3>
          </RevealLine>
        </div>
        <FadeIn delay={0.15}>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted">Drag to explore →</p>
        </FadeIn>
      </div>

      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24">
        {careProjects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.05} className="shrink-0 snap-start">
            <article className="group w-[280px] sm:w-[320px] h-full rounded-[1.75rem] bg-white p-2.5 pb-6 flex flex-col shadow-[0_1px_2px_rgba(22,22,26,0.04)] hover:shadow-[0_18px_40px_-18px_rgba(22,22,26,0.3)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300">
              <PinCover seed={seedOf(project.name)} title={project.name} badge={project.category} compact />
              <div className="px-3.5 pt-5 flex flex-col flex-1">
                <p className="text-[11px] font-black uppercase tracking-[0.14em] text-thr mb-3">{project.role}</p>
                <p className="text-sec/65 leading-relaxed text-sm">{project.description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-4">
          <MagneticButton>
            <Link
              to="/works?d=Marketing%20%26%20Community"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-sec hover:text-thr transition-colors group"
            >
              See the rest of the brand work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </MagneticButton>
        </div>
      </FadeIn>
    </div>
  );
}
