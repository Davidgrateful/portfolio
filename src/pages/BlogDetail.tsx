import { useEffect, useState, useRef, ReactNode } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Twitter, Linkedin, Link as LinkIcon, Mail, PlayCircle, ArrowUpRight } from "lucide-react";
import { FadeIn, RevealLine } from "../components/Animations";
import { mainPosts, topAds } from "../data/blogData";
import { useInView as useInViewMotion } from "motion/react";

interface ThemeSectionProps {
  mainColor: string;
  secColor: string;
  children: ReactNode;
  className?: string;
}

function ThemeSection({ mainColor, secColor, children, className = "" }: ThemeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewMotion(ref, { margin: "-50% 0px -50% 0px" });

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

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentAd, setCurrentAd] = useState(0);
  
  // Find the post
  const post = mainPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      document.title = `${post.title} | Fredy Omoke`;
    }
  }, [id, post]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % topAds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!post) {
    return (
      <div className="pt-32 pb-24 px-6 text-center min-h-screen flex flex-col items-center justify-center bg-main text-sec">
        <h1 className="text-4xl font-black uppercase mb-6 tracking-tighter">Dispatch Not Found</h1>
        <Link to="/blog" className="px-8 py-3 bg-sec text-main font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
          Return to News Desk
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      {/* SECTION 1: Header & Visual (Light) */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="pt-8 pb-2 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-7xl mx-auto">
          {/* Newspaper Style Header Ad */}
          <FadeIn>
            <div className="w-full flex justify-center mb-4">
              <div className="w-full max-w-2xl h-[40px] bg-sec/5 border border-sec/10 flex items-center justify-between px-6 rounded-lg relative overflow-hidden group cursor-pointer transition-all hover:bg-sec/[0.07]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-sec/10 shrink-0 overflow-hidden">
                    <img src={topAds[currentAd].image} alt="Ad" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sec/30 text-[7px] font-bold uppercase tracking-[0.1em]">{topAds[currentAd].sponsor}</span>
                    <p className="text-[10px] font-bold text-sec/60 group-hover:text-sec transition-colors uppercase tracking-tight leading-none">
                      {topAds[currentAd].text}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-sec/20 group-hover:text-[#d4f534] transition-colors" />
              </div>
            </div>
          </FadeIn>

          {/* Back Button */}
          <FadeIn>
            <div className="mb-2">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-sec/40 hover:text-sec transition-colors"
              >
                <ArrowLeft className="w-2.5 h-2.5" /> Back to Dispatch
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
            {/* LEFT COLUMN: Social Share (Sticky) */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center pr-4">
              <div className="sticky top-20 flex flex-col gap-3 items-center">
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-sec/20 rotate-180" style={{ writingMode: 'vertical-rl' }}>
                  Share
                </span>
                <div className="w-[1px] h-6 bg-sec/10 relative">
                  <div className="absolute -top-0.5 -left-[1.5px] w-1 h-1 bg-sec/20 rounded-full" />
                  <div className="absolute -bottom-0.5 -left-[1.5px] w-1 h-1 bg-sec/20 rounded-full" />
                </div>
                <button className="w-7 h-7 rounded-full border border-sec/20 flex items-center justify-center text-sec/30 hover:text-main hover:bg-sec hover:border-sec transition-all">
                  <Twitter className="w-3 h-3" />
                </button>
                <button className="w-7 h-7 rounded-full border border-sec/20 flex items-center justify-center text-sec/30 hover:text-main hover:bg-sec hover:border-sec transition-all">
                  <Linkedin className="w-3 h-3" />
                </button>
                <button className="w-7 h-7 rounded-full border border-sec/20 flex items-center justify-center text-sec/30 hover:text-main hover:bg-sec hover:border-sec transition-all">
                  <LinkIcon className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* MIDDLE COLUMN: Article Content */}
            <div className="lg:col-span-8 lg:col-start-3 flex flex-col">
              <header className="mb-2">
                <FadeIn>
                  <span className="inline-block px-1.5 py-0.5 bg-[#d4f534] text-[#1e1e1e] text-[7px] font-bold uppercase tracking-[0.1em] rounded mb-2">
                    {post.category}
                  </span>
                  <h1 className="text-3xl md:text-5xl xl:text-6xl font-normal tracking-tighter mb-1 leading-[0.95] text-sec uppercase">
                    {post.title}
                  </h1>
                  <p className="text-base md:text-lg text-sec/40 leading-tight tracking-tight mb-3 italic font-medium">
                    "{post.excerpt}"
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 py-2 border-y border-sec/10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden bg-sec/10 border border-sec/10 p-0.5">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228ef2?q=80&w=200&auto=format&fit=crop" alt="Fredy Omoke" className="w-full h-full object-cover grayscale rounded-full" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-tight leading-none mb-0.5">Fredy Omoke</p>
                        <p className="text-[6px] font-bold uppercase tracking-[0.1em] text-sec/30">Senior Editor</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-sec/10"></div>
                    <div className="flex items-center gap-3 text-[7px] font-bold uppercase tracking-[0.1em] text-sec/30">
                      <span className="flex items-center gap-1"><Clock className="w-2.5 h-2.5 text-[#d4f534]" /> {post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </FadeIn>
              </header>

              <FadeIn delay={0.1}>
                <div className="w-full aspect-[21/9] rounded-xl overflow-hidden mb-4 bg-sec/5 relative border border-sec/10 shadow-lg">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* SECTION 2: Deep Dive (Dark) */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="py-2 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
            <div className="lg:col-span-8 lg:col-start-3 flex flex-col">
              <FadeIn>
                <div className="max-w-none">
                  <div className="text-base md:text-lg leading-relaxed text-sec/70 space-y-4 font-medium tracking-tight">
                    <p className="first-letter:text-6xl first-letter:font-normal first-letter:mr-2 first-letter:float-left first-letter:text-sec uppercase first-letter:leading-none">
                      The transition from Web2 to Web3 is often described as a paradigm shift, but what does that actually mean for developers and users on the ground? In this deep dive, we explore the architectural differences, the new mental models required, and why the current tech stack might need a update.
                    </p>
                    
                    <h2 className="text-2xl md:text-3xl font-normal tracking-tighter pt-1 text-sec uppercase leading-none">The Reality of State and Sovereignty</h2>
                    <p>
                      In traditional web applications, the database is the single source of truth. You own it, you control it, and you can mutate it at will. In Web3, the blockchain is the state machine. It's public, immutable, and every state change costs money (gas).
                    </p>

                    <div className="my-4 p-5 border-l-2 border-[#d4f534] bg-sec/[0.03] rounded-r-lg transition-all duration-700">
                      <blockquote className="text-lg md:text-xl font-normal tracking-tighter text-sec/80 leading-tight italic">
                        "You don't just write to a database anymore. You are interacting with a global, decentralized state machine."
                      </blockquote>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* SECTION 3: Bulletins & Closing (Light) */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="py-2 px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
            <div className="lg:col-span-8 lg:col-start-3 flex flex-col">
              <FadeIn>
                <div className="max-w-none">
                  <div className="text-base md:text-lg leading-relaxed text-sec/70 space-y-4 font-medium tracking-tight">
                    <h2 className="text-2xl md:text-3xl font-normal tracking-tighter pt-1 text-sec uppercase leading-none">The Authentication Barrier</h2>
                    <p>
                      Forget email and password. In Web3, the user's wallet is their identity. This brings a massive UX challenge but also a profound shift in power dynamics.
                    </p>

                    <div className="my-4 p-5 bg-sec/5 border border-sec/10 rounded-lg">
                      <h3 className="text-[8px] font-bold uppercase tracking-[0.4em] mb-3 text-sec/40">Core Bulletins</h3>
                      <ul className="space-y-2">
                        {[
                          "Account Abstraction is critical for mainstream UX.",
                          "Gas fees must be abstracted away.",
                          "Intent-based architectures will replace transaction signing."
                        ].map((item, i) => (
                          <li key={i} className="flex gap-2 items-start text-sm">
                            <div className="w-0.5 h-0.5 rounded-full bg-[#d4f534] mt-2 shrink-0" />
                            <p className="text-sec/80 font-bold uppercase tracking-tight leading-snug text-xs">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-normal tracking-tighter pt-1 text-sec uppercase leading-none">Closing Dispatch</h2>
                    <p>
                      As we move towards a more mature ecosystem, the underlying blockchain should be as invisible to the user as AWS is today.
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 pt-2 border-t border-sec/10 flex flex-wrap gap-1.5">
                  {["Web3", "UX", "System", "Dispatch"].map(tag => (
                    <span key={tag} className="px-1.5 py-0.5 bg-sec/5 text-sec/40 text-[6px] font-bold uppercase tracking-[0.1em] rounded-full border border-sec/10">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Ad / CTA */}
                <div className="mt-6 p-6 bg-sec text-main rounded-lg text-center shadow-lg">
                  <h3 className="text-lg md:text-xl font-normal tracking-tighter uppercase mb-1 leading-none">Want more insights?</h3>
                  <p className="text-main/60 mb-4 max-w-sm mx-auto text-[9px]">Subscribe for weekly dispatches.</p>
                  <form className="flex flex-col sm:flex-row gap-2 max-w-xs mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="email address" className="flex-1 bg-main/10 border border-main/20 rounded-md px-3 py-1.5 text-[9px] focus:outline-none focus:border-main transition-colors text-main" />
                    <button className="bg-main text-sec px-4 py-1.5 rounded-md font-bold uppercase tracking-[0.1em] text-[7px] hover:scale-105 transition-transform">Subscribe</button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </ThemeSection>
    </div>
  );
}
