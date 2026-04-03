import { useEffect, useRef, ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { FadeIn, RevealLine } from "../components/Animations";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowUpRight, Code2, Users, Share2, PenLine, GraduationCap } from "lucide-react";
import MotionButton from "../components/ui/motion-button";

interface ThemeSectionProps {
  mainColor: string;
  secColor: string;
  children: ReactNode;
  className?: string;
}

function ThemeSection({ mainColor, secColor, children, className = "" }: ThemeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      document.documentElement.style.setProperty('--color-main', mainColor);
      document.documentElement.style.setProperty('--color-sec', secColor);
      document.body.style.backgroundColor = mainColor;
      document.body.style.color = secColor;
    }
  }, [isInView, mainColor, secColor]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

const productServices = [
  {
    number: "01",
    title: "Frontend Engineering",
    tags: ["React", "TypeScript", "Next.js", "Vite"],
    description: "Pixel-perfect, performant interfaces built to last. From landing pages to complex dashboards — I ship clean, maintainable frontends that feel premium and scale without drama.",
  },
  {
    number: "02",
    title: "Fintech App Development",
    tags: ["Payments", "KYC", "Wallets", "Banking APIs"],
    description: "I've built FlippAy — a P2P crypto-to-naira conversion platform — end to end. Secure wallet flows, real-time FX rates, bank transfer rails, and a UX that regular users can actually navigate. I know what it takes to build fintech that people trust with their money.",
  },
  {
    number: "03",
    title: "Trading Bots & Algo Systems",
    tags: ["Bitget", "Binance", "WebSockets", "Strategy Engines"],
    description: "Custom trading bots that execute on your logic, not hope. I've built signal-based bots for futures and spot trading — real-time market data ingestion, risk management layers, position sizing, and live execution via exchange APIs. Backtested, monitored, reliable.",
  },
  {
    number: "04",
    title: "AI Automation & Workflows",
    tags: ["GPT-4", "n8n", "LangChain", "BullMQ"],
    description: "Turn repetitive work into automated pipelines. I integrate AI into your existing stack — email agents, lead scoring, RAG systems, and custom GPT tooling that runs in the background while your team focuses on what matters.",
  },
  {
    number: "05",
    title: "Full-Stack Development",
    tags: ["Node.js", "Go", "PostgreSQL", "REST & WebSocket APIs"],
    description: "End-to-end product engineering from system design to deployment. I operate like a technical co-founder — fast, opinionated, and accountable to outcomes. APIs, background jobs, databases, auth — all of it.",
  },
  {
    number: "06",
    title: "Mobile App Development",
    tags: ["React Native", "Expo", "iOS", "Android"],
    description: "Cross-platform mobile apps that feel native. From consumer finance tools to crypto wallets, I build mobile experiences that work offline, load fast, and don't frustrate users with unnecessary friction.",
  },
];

const web3Services = [
  {
    number: "07",
    title: "Smart Contracts & DeFi Tooling",
    tags: ["Solidity", "Hedera", "EVM", "USSD"],
    description: "Production-grade smart contract development, DeFi integrations, and custom on-chain tooling. I've shipped on Ethereum, Solana, and Hedera.",
  },
  {
    number: "08",
    title: "Web3 Mini-App Development",
    tags: ["Crypto Rails", "Payment Links", "Fiat On-Ramp"],
    description: "Building the micro-products that power Web3 adoption — payment gateways, wallet UIs, and crypto-to-fiat rails for startups and protocols.",
  },
  {
    number: "09",
    title: "Community Growth & Strategy",
    tags: ["Ambassador Programs", "Events", "Content"],
    description: "Scaling blockchain communities from zero. I've run hackathons, hacker houses, and ambassador programs for Ethereum and Solana ecosystems across Africa.",
  },
  {
    number: "10",
    title: "Blockchain Education & Events",
    tags: ["Workshops", "Mentorship", "IRL", "Virtual"],
    description: "Technical education for developers entering Web3. Workshops on smart contract security, DApp architecture, and ecosystem tooling — IRL and virtual.",
  },
];

const skillsData = [
  {
    icon: <Code2 className="w-6 h-6" />,
    number: "01",
    title: "Software\nDevelopment",
    desc: "React, TypeScript, Node.js, Go — clean code shipped fast and maintained properly.",
    process: [
      { step: "01", title: "Align & Plan", detail: "Before a single line of code, we get on a call. I ask the questions most devs skip — what does success actually look like in 3 months? What's already been tried? What's non-negotiable? I document everything, define the scope in writing, and we both sign off before work begins. No scope creep, no surprises." },
      { step: "02", title: "Wire & Prototype", detail: "I map the full user journey before touching the codebase. Wireframes, component hierarchy, API contracts, and interaction states — all defined before development starts. You see exactly what's being built and approve it. This phase alone eliminates 80% of the revision requests I see on other projects." },
      { step: "03", title: "Code & Refine", detail: "Development happens in weekly sprints with a live preview link after every cycle. You're never waiting 3 weeks to see progress. I use feature branches, meaningful commit messages, and readable code — because someone has to maintain this after launch, and it might be you." },
      { step: "04", title: "Deploy & Scale", detail: "I don't just push to production and disappear. I run final QA across devices and browsers, set up monitoring, configure CI/CD pipelines, and write a deployment runbook your team can actually follow. Two weeks post-launch, I'm still available. If it breaks, I fix it." },
    ],
  },
  {
    icon: <Users className="w-6 h-6" />,
    number: "02",
    title: "Community\nManagement",
    desc: "Growing blockchain ecosystems from zero through ambassador programs and IRL events.",
    process: [
      { step: "01", title: "Deep Audit", detail: "Before I post a single tweet or message, I spend 3–5 days inside your community. Who's active? Who left? What do people complain about in DMs? What content gets traction? Real answers, not assumptions." },
      { step: "02", title: "Growth Blueprint", detail: "I map a 90-day plan with specific channels, content pillars, engagement loops, and milestone KPIs. Every action ties to a number. You'll know exactly what success looks like at week 4, week 8, and week 12." },
      { step: "03", title: "Activation", detail: "I recruit and train local ambassadors, launch structured Discord or Telegram spaces, and run the first IRL or virtual activation within the first month. Energy creates energy — the first event sets the culture." },
      { step: "04", title: "Retention Systems", detail: "Getting members is easy. Keeping them is the job. I build reward loops, contributor tracks, and consistent programming that gives people a reason to come back every week — not just when there's a token drop." },
      { step: "05", title: "Report & Iterate", detail: "Monthly reports with real numbers: active members, retention rate, event attendance, content reach, and sentiment tracking. Strategies that don't move the needle get cut. What works gets doubled down on." },
    ],
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    number: "03",
    title: "Social Media\nMarketing",
    desc: "Building authority and community engagement across Web3-native platforms.",
    process: [
      { step: "01", title: "Positioning First", detail: "Most brands post before they know who they're talking to. I don't. Before any content goes out, I define your brand voice, identify the 3 conversations you should own, and map who your ideal follower actually is." },
      { step: "02", title: "Content System", detail: "I build a content calendar that isn't just 'post 3x a week.' Every piece has a purpose — reputation, reach, or retention. Threads that educate, posts that entertain, and CTAs that convert. On Twitter/X, Farcaster, and LinkedIn." },
      { step: "03", title: "Create & Schedule", detail: "High-signal content written in your voice. I write the copy, brief the visuals, and manage the scheduler. Everything goes out at optimal times based on your audience's activity patterns." },
      { step: "04", title: "Active Engagement", detail: "Social media is a two-way street. I reply to comments, engage in threads, insert your brand into trending conversations, and build relationships with aligned accounts — not just broadcast." },
      { step: "05", title: "Weekly Analytics", detail: "Follower growth, impressions, link clicks, engagement rate, and profile visits reviewed every week. I cut what's not working and amplify what is. You get a dashboard, not just a report." },
    ],
  },
  {
    icon: <PenLine className="w-6 h-6" />,
    number: "04",
    title: "Content\nStrategy",
    desc: "Turning technical ideas into narratives that builders, founders, and protocols care about.",
    process: [
      { step: "01", title: "Strategic Brief", detail: "I don't start writing until I understand why this content exists. Who reads it? What do they believe before and after? What action do we want them to take? A great brief saves three rounds of edits." },
      { step: "02", title: "Research & Sourcing", detail: "I go deep. On-chain data, GitHub activity, founder interviews, community sentiment — real sources, not recycled takes. The goal is to write something that can't be generated by any AI prompt." },
      { step: "03", title: "Structure & Draft", detail: "Every great piece of content has architecture. I write outlines before drafts, get alignment on structure, then fill in the words. The hook earns the read. The body earns the trust. The CTA earns the click." },
      { step: "04", title: "Edit for Signal", detail: "I cut everything that doesn't earn its place. Jargon removed. Filler sentences deleted. Facts verified. The best version is usually half the length of the first draft — and twice as sharp." },
      { step: "05", title: "Distribute & Measure", detail: "Publishing is the start, not the finish. I repurpose long-form into threads, clips, and newsletters. Track reads, shares, and conversion. Content that performs gets amplified. Content that doesn't gets autopsied." },
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    number: "05",
    title: "Training &\nEducation",
    desc: "Workshops, mentorships, and hacker houses for developers entering Web3.",
    process: [
      { step: "01", title: "Know Your Room", detail: "I've taught total beginners and senior engineers. The curriculum looks different for each. I survey attendees, assess current skill levels, and design a learning path with the right entry point and exit outcome." },
      { step: "02", title: "Build the Materials", detail: "Slides are the last thing I build, not the first. I start with the code exercises, live demos, and real-world scenarios — then build the narrative around them. Attendees learn by building, not listening." },
      { step: "03", title: "Deliver Live", detail: "Whether IRL in Lagos or virtual across three time zones, I run sessions that are interactive, not passive. Live coding, real Q&A, group challenges. People remember what they did, not what they watched." },
      { step: "04", title: "Real Mentorship", detail: "During and after every session, I'm available. Not a vague 'DM me.' I schedule office hours, review submitted projects, give direct feedback, and connect promising builders with opportunities in the ecosystem." },
      { step: "05", title: "Keep the Momentum", detail: "Two weeks after the session, I send a follow-up: a resource pack, project ideas, and next steps. I track which attendees ship something from what they learned. That's the real metric — not attendance, but outcomes." },
    ],
  },
];

function WhatIBring() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(1);

  const handleSkillClick = (number: string) => {
    if (activeSkill === number) {
      setActiveSkill(null);
    } else {
      setActiveSkill(number);
      setActiveStep(1);
    }
  };

  const activeData = skillsData.find(s => s.number === activeSkill);

  return (
    <div className="border-t border-sec/10 pt-20 mt-8">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-sec/30 mb-16">What I bring</p>
      
      {/* Skill Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-sec/10">
        {skillsData.map((item) => (
          <button
            key={item.number}
            onClick={() => handleSkillClick(item.number)}
            className={`px-8 py-10 first:pl-0 last:pr-0 text-left cursor-pointer transition-all duration-300 group ${activeSkill === item.number ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
          >
            <div className="flex justify-between items-start mb-10">
              <span className={`transition-colors duration-300 ${activeSkill === item.number ? 'text-[#d4f534]' : 'text-sec/60 group-hover:text-sec'}`}>
                {item.icon}
              </span>
              <span className="text-xs font-bold text-sec/20 tracking-widest">{item.number}</span>
            </div>
            <h3 className={`text-xl font-bold tracking-tighter uppercase mb-4 whitespace-pre-line leading-tight transition-colors duration-300 ${activeSkill === item.number ? 'text-[#d4f534]' : 'text-sec'}`}>
              {item.title}
            </h3>
            <p className="text-sm text-sec/40 leading-relaxed">{item.desc}</p>
            <p className={`text-[10px] uppercase tracking-widest font-bold mt-6 transition-colors duration-300 ${activeSkill === item.number ? 'text-[#d4f534]' : 'text-sec/20'}`}>
              {activeSkill === item.number ? '↑ Close' : '↓ My Process'}
            </p>
          </button>
        ))}
      </div>

      {/* Stepper Process Panel */}
      <AnimatePresence>
        {activeData && (
          <motion.div
            key={activeData.number}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#d4f534]/20 mt-0 pt-16 pb-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4f534]/60 mb-12">
                How I approach {activeData.title.replace('\n', ' ')}
              </p>

              <div className="max-w-3xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* Left: Stepper Nav */}
                <div className="lg:w-[180px] shrink-0">
                  <div className="flex flex-col gap-0">
                    {activeData.process.map((step, idx) => {
                      const stepNum = idx + 1;
                      const isActive = activeStep === stepNum;
                      const isCompleted = stepNum < activeStep;
                      return (
                        <button
                          key={step.step}
                          onClick={() => setActiveStep(stepNum)}
                          className="flex items-start gap-4 py-3 text-left group/step cursor-pointer"
                        >
                          {/* Indicator + Line */}
                          <div className="flex flex-col items-center shrink-0">
                            <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-black transition-all duration-300 ${isActive ? 'border-[#d4f534] bg-[#d4f534] text-[#1e1e1e]' : isCompleted ? 'border-[#d4f534]/40 bg-[#d4f534]/10 text-[#d4f534]/60' : 'border-sec/20 bg-transparent text-sec/30'}`}>
                              {isCompleted ? '✓' : stepNum}
                            </div>
                            {idx < activeData.process.length - 1 && (
                              <div className={`w-px flex-1 min-h-[1.5rem] mt-1 transition-colors duration-300 ${isCompleted ? 'bg-[#d4f534]/40' : 'bg-sec/10'}`} />
                            )}
                          </div>
                          {/* Label */}
                          <div className="pt-1">
                            <p className={`text-xs font-bold uppercase tracking-tight transition-colors duration-300 ${isActive ? 'text-[#d4f534]' : isCompleted ? 'text-sec/50' : 'text-sec/30 group-hover/step:text-sec/60'}`}>
                              {step.title}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Step Content */}
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    {activeData.process.map((step, idx) => {
                      const stepNum = idx + 1;
                      if (stepNum !== activeStep) return null;
                      return (
                        <motion.div
                          key={step.step}
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -16 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                          <div className="p-6 bg-sec/5 rounded-2xl border border-sec/10">
                            <span className="text-[9px] font-bold text-[#d4f534]/60 tracking-[0.3em] uppercase block mb-3">Step {step.step}</span>
                            <h4 className="text-xl font-bold text-sec uppercase tracking-tighter mb-3">{step.title}</h4>
                            <p className="text-sm text-sec/60 leading-relaxed">{step.detail}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  useEffect(() => {
    document.title = "Services | Fredy Omoke";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen transition-colors duration-700 w-full">

      {/* Block 1: White Header */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="w-full pb-32">
        <div className="pt-40 px-6 md:px-12 lg:px-16 xl:px-24 w-full">

          {/* Hero */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
            <div className="lg:w-2/3">
              <RevealLine>
                <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-none text-sec uppercase">
                  SERVICES
                </h1>
              </RevealLine>
            </div>
            <div className="lg:w-1/3 lg:text-right">
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-sec/70 leading-relaxed max-w-md ml-auto">
                  I build and ship across Web2 and Web3. 5+ years building products that work — on-chain and off.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Scrolling Marquee */}
        <div className="w-full overflow-hidden mb-32 bg-sec text-main py-5 -rotate-1 relative z-20">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {Array(8).fill("✦ FRONTEND ✦ AI AUTOMATION ✦ WEB3 ✦ SMART CONTRACTS ✦ COMMUNITY ✦ EDUCATION ").map((text, i) => (
              <span key={i} className="text-2xl md:text-4xl font-black tracking-tighter uppercase pr-8">
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="px-6 md:px-12 lg:px-16 xl:px-24 w-full">
          {/* Track 1: Product Engineering */}
          <div className="mb-24">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sec/40 mb-4">Track 01</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase text-sec mb-16">
                Product Engineering
              </h2>
            </FadeIn>

            <div className="flex flex-col divide-y divide-sec/10">
              {productServices.map((service, idx) => (
                <FadeIn key={service.number} delay={0.05 * idx}>
                  <div className="group py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-16 hover:pl-4 transition-all duration-500">
                    <span className="text-xs font-bold text-sec/30 tracking-widest uppercase shrink-0 mt-1">{service.number}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-sec uppercase mb-4 group-hover:text-[#1e1e1e] transition-colors">
                        {service.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-sec/10 text-sec/60 text-[10px] font-bold uppercase tracking-widest rounded-full border border-sec/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-base text-sec/60 leading-relaxed max-w-2xl">
                        {service.description}
                      </p>
                    </div>
                    <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-center">
                      <ArrowUpRight className="w-6 h-6 text-sec/40" />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* Industry Feedback Marquee */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full py-16 bg-[#1e1e1e]">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-[#d4f534]/50 mb-10">Industry Feedback</p>

        {/* Row 1 — Quotes scrolling left */}
        <div className="overflow-hidden mb-6">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {Array(2).fill(null).map((_, i) => (
              <div key={i} className="flex shrink-0">
                {[
                  "\"He delivered the frontend faster than our previous team did in 3 months.\"",
                  "\"Fredy doesn't just build — he thinks about the product the way a founder would.\"",
                  "\"Our Discord grew from 200 to 4,000 members in 6 weeks. He owns that.\"",
                  "\"The codebase is clean, documented, and actually maintainable. Rare.\"",
                  "\"He ran the workshop like he'd been doing it for a decade. Builders were shipping by hour 3.\"",
                ].map((quote, j) => (
                  <span key={j} className="text-lg md:text-xl font-medium text-[#e7e7e7]/60 px-10 shrink-0 italic">
                    {quote} <span className="text-[#d4f534]/40 not-italic font-bold mx-4">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 — Attributions scrolling right */}
        <div className="overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
          >
            {Array(2).fill(null).map((_, i) => (
              <div key={i} className="flex shrink-0">
                {[
                  "— Startup Founder, Fintech · Lagos",
                  "— Product Lead, DeFi Protocol · Remote",
                  "— Ecosystem Manager, Layer 1 Chain",
                  "— Lead Engineer, Web3 Startup · Dubai",
                  "— Head of Developer Relations, Blockchain Foundation",
                ].map((attr, j) => (
                  <span key={j} className="text-sm font-bold uppercase tracking-widest text-[#d4f534]/40 px-10 shrink-0">
                    {attr} <span className="text-[#e7e7e7]/10 mx-4">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </ThemeSection>

      {/* Block 2: Dark — Web3 Track */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full pt-32 pb-32 px-6 md:px-12 lg:px-16 xl:px-24">
        {/* Track 2: Web3 & Community */}
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-sec/30 mb-4 text-right">Track 02</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase text-sec mb-16 text-right">
            Web3 & Community
          </h2>
        </FadeIn>

        <div className="flex flex-col divide-y divide-sec/10 mb-32">
          {web3Services.map((service, idx) => (
            <FadeIn key={service.number} delay={0.05 * idx}>
              <div className="group py-10 flex flex-col md:flex-row-reverse md:items-start gap-6 md:gap-16 hover:pr-4 transition-all duration-500">
                <span className="text-xs font-bold text-sec/20 tracking-widest uppercase shrink-0 mt-1">{service.number}</span>
                <div className="flex-1 text-right">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-sec uppercase mb-4 group-hover:text-[#d4f534] transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex flex-wrap justify-end gap-2 mb-4">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-sec/5 text-sec/40 text-[10px] font-bold uppercase tracking-widest rounded-full border border-sec/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-base text-sec/50 leading-relaxed max-w-2xl ml-auto">
                    {service.description}
                  </p>
                </div>
                <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-center">
                  <ArrowUpRight className="w-6 h-6 text-[#d4f534] rotate-180" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* What I Bring */}
        <WhatIBring />      </ThemeSection>

      {/* Block 3: Volt CTA */}
      <ThemeSection mainColor="#d4f534" secColor="#1e1e1e" className="w-full pt-32 pb-32 px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="text-center">
          <RevealLine>
            <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter uppercase text-sec mb-10 leading-[0.85]">
              LET'S WORK<br className="hidden md:block" /> TOGETHER
            </h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-sec/70 max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
              Whether you need a frontend shipped, an AI workflow automated, or a Web3 community grown from zero — I get it done.
            </p>
            <div className="flex justify-center">
              <MotionButton 
                label="Get in Touch" 
                href="https://wa.me/2347039662696"
                classes="scale-125"
              />
            </div>
          </FadeIn>
        </div>
      </ThemeSection>

    </main>
  );
}
