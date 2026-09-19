import { RevealLine, FadeIn } from "./Animations";
import AttentionMachine from "./chapter-one/AttentionMachine";
import CareProjects from "./chapter-one/CareProjects";

export default function ChapterOne() {
  return (
    <section id="care" className="relative bg-main text-sec py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="grain-overlay" />

      <div className="relative max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-red text-[11px] font-black uppercase tracking-[0.35em] mb-5">Chapter 1</p>
        </FadeIn>
        <RevealLine>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] max-w-4xl">
            I make people care.
          </h2>
        </RevealLine>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-2xl text-muted max-w-2xl mt-6 leading-relaxed">
            Ideas are easy. Getting someone to stop scrolling and actually care &mdash; that&rsquo;s the interesting part.
          </p>
        </FadeIn>

        <AttentionMachine />

        <FadeIn>
          <p className="text-center text-sm md:text-base text-muted italic mb-4">
            Getting people to care. Surprisingly difficult.
          </p>
        </FadeIn>

        <CareProjects />
      </div>
    </section>
  );
}
