import { RevealLine, FadeIn } from "./Animations";
import MagneticButton from "./MagneticButton";
import { CalendarCheck, BriefcaseBusiness, MessageCircle, Users } from "lucide-react";
import { useConfig } from "../context/ConfigContext";
import { contact, focusAreas } from "../data/davidPortfolio";

export default function Hero() {
  const { config } = useConfig();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-main text-sec px-6 md:px-12 lg:px-24 pt-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.16),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(14,165,233,0.13),transparent_28%)]" />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-thr/20 bg-thr/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-thr mb-8">
              <span className="w-2 h-2 rounded-full bg-thr"></span>
              Strategy / Content / Community
            </div>
          </FadeIn>
          <RevealLine delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.9] text-sec mb-8 max-w-6xl">
              {config.hero.home.title}
            </h1>
          </RevealLine>
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-2xl text-sec/70 max-w-3xl font-medium leading-relaxed">
              {config.hero.home.subtitle}
            </p>
          </FadeIn>
          <FadeIn delay={0.55}>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <MagneticButton>
                <a href={contact.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-thr text-white px-8 py-4 rounded-full font-black uppercase tracking-[0.16em] text-xs shadow-lg shadow-blue-500/20">
                  <CalendarCheck className="w-4 h-4" />
                  Book a Call
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#experience" className="inline-flex items-center justify-center gap-3 border border-sec/20 text-sec px-8 py-4 rounded-full font-black uppercase tracking-[0.16em] text-xs hover:bg-sec hover:text-white transition-colors">
                  <BriefcaseBusiness className="w-4 h-4" />
                  View Experience
                </a>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.35}>
          <div className="rounded-[2rem] border border-sec/10 bg-white shadow-2xl shadow-blue-950/10 p-6 md:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-sec/10 pb-6 mb-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-sec/40 mb-2">Open for projects</p>
                <h2 className="text-3xl font-black tracking-tighter">Available for growing teams</h2>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-thr text-white flex items-center justify-center">
                <MessageCircle className="w-7 h-7" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {focusAreas.slice(0, 8).map((area) => (
                <div key={area} className="rounded-2xl bg-blue-50 border border-blue-100 px-4 py-3 text-sm font-bold text-sec/80">
                  {area}
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-sec text-white p-5 flex items-start gap-4">
              <Users className="w-6 h-6 text-sky-300 shrink-0 mt-1" />
              <p className="text-sm leading-relaxed text-white/75">
                Social-first strategy, content planning, community communication, project coordination, and campaign execution for Web3 brands.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
