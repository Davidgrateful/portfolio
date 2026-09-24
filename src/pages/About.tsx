import { FadeIn, RevealLine } from "../components/Animations";
import { GraduationCap, Network, Target } from "lucide-react";
import DavidCharacter from "../components/DavidCharacter";
import { focusAreas, skills, supportedBrands } from "../data/davidPortfolio";

const chipTones = ["bg-sky", "bg-butter", "bg-blush", "bg-sage", "bg-lilac", "bg-white"];

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

        {/* Moodboard */}
        <section className="pin-board columns-1 sm:columns-2 lg:columns-3 gap-5 mb-24">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[1.75rem] bg-sky aspect-[4/5] flex items-center justify-center">
              <div
                className="absolute inset-0"
                style={{ backgroundImage: "radial-gradient(#3d7bf033 1.6px, transparent 1.6px)", backgroundSize: "16px 16px" }}
              />
              <div className="relative w-2/3 aspect-square">
                <DavidCharacter className="w-full h-full" />
              </div>
              <span className="absolute bottom-5 left-5 rounded-full bg-main/85 px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em]">
                Yes, that's me. Roughly.
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="rounded-[1.75rem] bg-sec text-main p-8">
              <p className="text-red text-5xl font-black leading-none mb-2">&ldquo;</p>
              <p className="text-2xl font-black tracking-tight leading-snug">
                Ideas are easy. Getting someone to stop scrolling and actually care &mdash; that&rsquo;s the interesting part.
              </p>
            </div>
          </FadeIn>

          {[
            { icon: GraduationCap, tone: "bg-butter", title: "B.Sc. Mass Communication", text: "Focus areas: marketing, public relations, media communication, storytelling, and audience engagement." },
            { icon: Target, tone: "bg-white", title: "Strategic Positioning", text: "I help projects explain what they do in language communities, users, and partners can understand." },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={0.12 + index * 0.06}>
                <div className={`rounded-[1.75rem] ${item.tone} p-7`}>
                  <div className="w-12 h-12 rounded-full bg-main/80 flex items-center justify-center mb-10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-black tracking-tight mb-3">{item.title}</h2>
                  <p className="text-sec/70 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            );
          })}

          <FadeIn delay={0.24}>
            <div className="rounded-[1.75rem] bg-blush p-7">
              <p className="font-display text-7xl font-black tracking-tighter leading-none mb-3">{supportedBrands.length}</p>
              <p className="text-sec/70 leading-relaxed">brands and communities supported so far &mdash; from wallets to meme coins.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="rounded-[1.75rem] bg-sage p-7">
              <div className="w-12 h-12 rounded-full bg-main/80 flex items-center justify-center mb-10">
                <Network className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-black tracking-tight mb-3">Community-Led Growth</h2>
              <p className="text-sec/70 leading-relaxed mb-6">
                I connect social presence, content rhythm, campaigns, and community communication into one operating system.
              </p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.slice(0, 7).map((area) => (
                  <span key={area} className="rounded-full bg-main/70 px-3 py-1 text-xs font-bold">{area}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        <section>
          <RevealLine>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">Skills</h2>
          </RevealLine>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span key={skill} className={`rounded-full ${chipTones[i % chipTones.length]} px-5 py-3 text-sm font-bold text-sec/80`}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}