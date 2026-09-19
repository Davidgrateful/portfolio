import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RevealLine, FadeIn } from "../Animations";
import MagneticButton from "../MagneticButton";
import { careProjects } from "../../data/chapterOne";

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
            <article className="group w-[280px] sm:w-[340px] h-full rounded-3xl border border-sec/10 bg-white p-7 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-thr/30 transition-all duration-300">
              <span className="inline-flex self-start rounded-full bg-blue-50 text-thr px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] mb-6">
                {project.category}
              </span>
              <h4 className="text-2xl font-black tracking-tight mb-2">{project.name}</h4>
              <p className="text-[11px] font-black uppercase tracking-[0.15em] text-muted mb-4">{project.role}</p>
              <p className="text-sec/65 leading-relaxed text-sm flex-1">{project.description}</p>
              <div className="mt-6 flex items-center gap-1.5 text-thr text-xs font-black uppercase tracking-[0.16em] opacity-0 group-hover:opacity-100 transition-opacity">
                Role & focus
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-4">
          <MagneticButton>
            <Link
              to="/works"
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
