import { FadeIn, RevealLine } from "../components/Animations";
import { GraduationCap, Megaphone, Network, Target } from "lucide-react";
import { skills } from "../data/davidPortfolio";

export default function About() {
  return (
    <main className="min-h-screen bg-main text-sec pt-36 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <section className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 mb-24">
          <div>
            <FadeIn>
              <p className="text-thr text-[11px] font-black uppercase tracking-[0.35em] mb-5">About David Grateful</p>
            </FadeIn>
            <RevealLine>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                Web3 project manager, social media manager, and community growth operator.
              </h1>
            </RevealLine>
          </div>
          <div className="space-y-6 text-lg md:text-xl text-sec/70 leading-relaxed">
            <FadeIn delay={0.1}>
              <p>
                I'm David Grateful, a Project Manager and Social Media Manager with experience across Web3, gaming, NFTs, RWAs, wallets, protocols, Base, Solana, and community-led brands.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                I studied Mass Communication and built my foundation around marketing, public relations, communication strategy, and audience psychology. Over time, I've worked with different projects as an intern, project manager, content strategist, social media manager, and community growth support, helping brands communicate better, grow their communities, and stay active in fast-moving markets.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p>
                My work sits between social media management, project coordination, brand storytelling, and Web3 growth. I understand how to turn ideas into campaigns, campaigns into traction, and communities into active ecosystems.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-24">
          {[
            { icon: GraduationCap, title: "B.Sc. Mass Communication", text: "Focus areas: marketing, public relations, media communication, storytelling, and audience engagement." },
            { icon: Target, title: "Strategic Positioning", text: "I help projects explain what they do in language communities, users, and partners can understand." },
            { icon: Network, title: "Community-Led Growth", text: "I connect social presence, content rhythm, campaigns, and community communication into one operating system." }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-thr/10 text-thr flex items-center justify-center mb-7">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black tracking-tight mb-4">{item.title}</h2>
                  <p className="text-sec/65 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Megaphone className="w-6 h-6 text-thr" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full bg-blue-50 border border-blue-100 px-5 py-3 text-sm font-bold text-sec/75">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}