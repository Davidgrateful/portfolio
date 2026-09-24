import { ArrowUpRight, CalendarDays, Code2, Megaphone, PenLine, Target, Users, Workflow } from "lucide-react";
import { FadeIn, RevealLine } from "../components/Animations";
import { contact, services } from "../data/davidPortfolio";

const icons = [Code2, Megaphone, Workflow, PenLine, Users, Target, CalendarDays];
const tones = ["bg-sky", "bg-butter", "bg-white", "bg-sage", "bg-blush", "bg-lilac", "bg-white"];
// Alternating tile heights keep the board from reading as a flat grid
const padding = ["pb-24", "pb-10", "pb-16", "pb-10", "pb-20", "pb-12", "pb-14"];

const steps = [
  { title: "Listen", text: "What the project is, who it's for, and why anyone should care." },
  { title: "Shape", text: "Positioning and a plan: a content calendar, a site map, whatever the job needs." },
  { title: "Ship", text: "Pages and features, or posts, spaces and campaigns. Something real, every week." },
  { title: "Learn", text: "What landed, what didn't, and what we try next." },
];

export default function Services() {
  return (
    <main className="pt-36 pb-24 px-6 md:px-12 lg:px-24 bg-main text-sec min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <RevealLine>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">
              Services
            </h1>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-sec/65 max-w-3xl font-medium">
              Websites, social media, project coordination, content, community, positioning and campaigns, for brands that want to be understood.
            </p>
          </FadeIn>
        </div>

        <div className="pin-board columns-1 sm:columns-2 lg:columns-3 gap-5 mb-24">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={service.title} delay={index * 0.06}>
                <article className={`group rounded-[1.75rem] ${tones[index]} p-7 ${padding[index]} hover:-translate-y-1 transition-transform duration-300`}>
                  <div className="flex items-start justify-between mb-14">
                    <div className="w-12 h-12 rounded-full bg-main/80 text-sec flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-black tracking-tighter leading-none mb-4">{service.title}</h2>
                  <p className="text-sec/70 leading-relaxed">{service.description}</p>
                </article>
              </FadeIn>
            );
          })}

          <FadeIn delay={0.3}>
            <a
              href={contact.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[1.75rem] bg-sec text-main p-7"
            >
              <p className="text-sky text-[10px] font-black uppercase tracking-[0.3em] mb-10">Ready to start?</p>
              <h2 className="text-3xl font-black tracking-tighter leading-[1.05] mb-8">
                Need a website, or people to care about the one you have? Let's talk.
              </h2>
              <span className="inline-flex items-center gap-2 rounded-full bg-main text-sec px-5 py-3 text-xs font-black uppercase tracking-[0.16em]">
                Book a call
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </FadeIn>
        </div>

        <section>
          <RevealLine>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10">How we'd work together</h2>
          </RevealLine>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.08}>
                <div className="h-full rounded-[1.75rem] border border-sec/10 p-7">
                  <span className="inline-flex w-9 h-9 rounded-full bg-red text-white items-center justify-center text-sm font-black mb-8">
                    {i + 1}
                  </span>
                  <h3 className="text-2xl font-black tracking-tight mb-2">{step.title}</h3>
                  <p className="text-sec/65 leading-relaxed">{step.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
