import { CalendarDays, Megaphone, PenLine, Target, Users, Workflow } from "lucide-react";
import { RevealLine, FadeIn } from "./Animations";
import { services } from "../data/davidPortfolio";

const icons = [Megaphone, Workflow, PenLine, Users, Target, CalendarDays];

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 md:px-12 lg:px-24 bg-main text-sec">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <FadeIn>
              <p className="text-thr text-[11px] font-black uppercase tracking-[0.35em] mb-4">Services</p>
            </FadeIn>
            <RevealLine>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter max-w-3xl">
                What I help Web3 brands organize, say, and ship.
              </h2>
            </RevealLine>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-sec/60 text-lg max-w-md">
              Built for gaming, NFT, RWA, wallet, protocol, meme, and ecosystem teams that need social clarity and execution.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={service.title} delay={index * 0.06}>
                <div className="h-full rounded-3xl border border-blue-100 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-blue-950/10 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-thr/10 text-thr flex items-center justify-center mb-8">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-4">{service.title}</h3>
                  <p className="text-sec/60 leading-relaxed">{service.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}