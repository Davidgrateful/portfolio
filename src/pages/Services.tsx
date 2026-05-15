import { CalendarDays, Megaphone, PenLine, Target, Users, Workflow } from "lucide-react";
import { FadeIn, RevealLine } from "../components/Animations";
import { contact, services, skills } from "../data/davidPortfolio";

const icons = [Megaphone, Workflow, PenLine, Users, Target, CalendarDays];

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
            <p className="text-xl md:text-2xl text-sec/65 max-w-4xl font-medium">
              Social media management, project coordination, content strategy, community growth, brand positioning, and campaign execution for Web3 brands.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={service.title} delay={index * 0.06}>
                <article className="h-full rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-thr/10 text-thr flex items-center justify-center mb-8">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black tracking-tight mb-4">{service.title}</h2>
                  <p className="text-sec/65 leading-relaxed">{service.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <div className="rounded-[2rem] bg-sec text-white p-8 md:p-12 flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center">
          <div>
            <p className="text-sky-300 text-[11px] font-black uppercase tracking-[0.35em] mb-4">Ready to organize growth?</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter max-w-3xl">Bring structure, content, and community momentum to your Web3 project.</h2>
          </div>
          <a href={contact.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex bg-white text-sec rounded-full px-8 py-4 text-xs font-black uppercase tracking-[0.18em] whitespace-nowrap">
            Book a Call
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full bg-blue-50 border border-blue-100 px-5 py-3 text-sm font-bold text-sec/75">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}