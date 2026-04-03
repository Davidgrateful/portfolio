import { useEffect, useState, useRef, ReactNode } from "react";
import { Clock, Mail, PlayCircle, ArrowUpRight, X } from "lucide-react";
import { FadeIn, RevealLine } from "../components/Animations";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView as useInViewMotion } from "motion/react";
import { topAds, latestPosts, mainPosts } from "../data/blogData";

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

export default function Blog() {
  const [currentAd, setCurrentAd] = useState(0);
  const videoRef = useRef<HTMLDivElement>(null);
  const [isPopOutClosed, setIsPopOutClosed] = useState(false);
  const isVideoInView = useInViewMotion(videoRef, { amount: 0.1 });
  const [shouldFloat, setShouldFloat] = useState(false);

  useEffect(() => {
    document.title = "Contents | Fredy Omoke";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % topAds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Determine when the video has scrolled past the top of the viewport
    const handleScroll = () => {
      if (videoRef.current) {
        const top = videoRef.current.getBoundingClientRect().top;
        setShouldFloat(top < -100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const videoElement = (
    <video
      src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-keyboard-and-hands-typing-232-large.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  );

  return (
    <div className="w-full min-h-screen">
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="pt-28 pb-4 px-6 md:px-12 lg:px-16 xl:px-24">
        {/* Top Leaderboard Ad — CoinDesk style, full width, centered */}
        <FadeIn>
          <div className="w-full flex justify-center mb-10">
            <div className="w-full max-w-2xl h-[80px] bg-sec/5 border border-sec/10 flex items-center justify-between px-6 rounded-2xl relative overflow-hidden group cursor-pointer">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAd}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center gap-6 px-10"
                >
                  <div className="w-12 h-12 rounded-lg bg-sec/10 shrink-0 overflow-hidden">
                    <img src={topAds[currentAd].image} alt="Ad Logo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sec/30 text-[9px] font-bold uppercase tracking-[0.3em] mb-1">{topAds[currentAd].sponsor}</span>
                    <p className="text-base font-bold text-sec/70 group-hover:text-sec transition-colors uppercase tracking-tight line-clamp-1">
                      {topAds[currentAd].text}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 ml-auto text-sec/20 group-hover:text-[#d4f534] transition-colors" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex gap-1.5 z-10">
                {topAds.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${idx === currentAd ? "bg-[#d4f534] w-4" : "w-1 bg-sec/20"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* LEFT: Latest Posts */}
          <div className="lg:col-span-2 flex flex-col lg:border-r lg:border-sec/10 lg:pr-6 lg:sticky lg:top-24 lg:self-start lg:overflow-y-auto">
            <RevealLine>
              <div className="flex items-center justify-between border-b-2 border-sec pb-4 mb-6">
                <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-sec/70">Latest</h2>
                <span className="w-2 h-2 rounded-full bg-[#d4f534] animate-pulse" />
              </div>
            </RevealLine>
            <div className="flex flex-col">
              {latestPosts.map((post, i) => (
                <FadeIn key={post.id} delay={0.05 * i}>
                  <Link
                    to={`/blog/${post.id}`}
                    className="group block py-5 border-b border-sec/10 hover:pl-2 transition-all duration-300"
                  >
                    <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-sec/40 mb-2">
                      <Clock className="w-3 h-3" /> {post.time}
                    </div>
                    <p className="text-sm font-bold leading-snug text-sec/80 group-hover:text-sec transition-colors tracking-tight">
                      {post.title}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* MIDDLE: Main Feed */}
          <div className="lg:col-span-8 flex flex-col lg:border-r lg:border-sec/10 lg:pr-10">
            <RevealLine>
              <div className="border-b-2 border-sec pb-4 mb-8">
                <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-sec/70">Contents</h2>
              </div>
            </RevealLine>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPosts.slice(0, 6).map((post, i) => (
                <FadeIn key={post.id} delay={0.08 * i}>
                  <Link to={`/blog/${post.id}`} className="group flex flex-col h-full">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 shrink-0">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d4f534] mb-2">{post.category}</span>
                    <h3 className="text-base font-bold tracking-tighter mb-2 group-hover:text-sec/70 transition-colors uppercase leading-snug">{post.title}</h3>
                    <p className="text-xs text-sec/50 leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-sec/30 mt-auto">{post.date}</span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* RIGHT: Sidebar Item (Sticky) */}
          <div className="lg:col-span-2 flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
             {/* Sponsored Video */}
            <div ref={videoRef}>
              <FadeIn>
                <div className="border-b-2 border-sec pb-4 mb-4">
                  <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-sec/70 flex items-center gap-2">
                    <PlayCircle className="w-3.5 h-3.5" /> Now Building
                  </h2>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-video bg-sec/5">
                  {videoElement}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-main/80 backdrop-blur-md text-sec text-[9px] font-bold uppercase tracking-widest rounded-full border border-sec/10">
                    Live
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </ThemeSection>

      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="py-12 px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-2 hidden lg:block border-r border-sec/10 pr-6">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-sec/40 mb-10 italic">More Thoughts</h2>
          </div>
          <div className="lg:col-span-8 flex flex-col lg:border-r lg:border-sec/10 lg:pr-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPosts.slice(6).map((post, i) => (
                <FadeIn key={post.id} delay={0.08 * i}>
                  <Link to={`/blog/${post.id}`} className="group flex flex-col h-full">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 shrink-0">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d4f534] mb-2">{post.category}</span>
                    <h3 className="text-base font-bold tracking-tighter mb-2 group-hover:text-sec/70 transition-colors uppercase leading-snug">{post.title}</h3>
                    <p className="text-xs text-sec/50 leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-sec/30 mt-auto">{post.date}</span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Newsletter */}
            <FadeIn>
              <div className="bg-sec/5 border border-sec/10 p-6 rounded-2xl">
                <div className="w-10 h-10 bg-sec text-main rounded-full flex items-center justify-center mb-5"><Mail className="w-4 h-4" /></div>
                <h3 className="text-lg font-bold tracking-tighter uppercase mb-2">Builder's Digest</h3>
                <p className="text-xs text-sec/50 mb-5 leading-relaxed">Weekly drops on Web3, fintech, and the actual reality of building products.</p>
                <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="your@email.com" className="w-full bg-main border border-sec/20 rounded-xl px-4 py-2.5 text-xs text-sec placeholder:text-sec/30" />
                  <button className="w-full bg-sec text-main font-black uppercase tracking-widest text-[10px] py-3 rounded-xl hover:bg-sec/90 transition-colors">Subscribe Free</button>
                </form>
              </div>
            </FadeIn>
            
            {/* Work CTA */}
            <FadeIn>
              <div className="bg-[#d4f534] text-[#1e1e1e] p-6 rounded-2xl">
                <h3 className="text-lg font-bold tracking-tighter uppercase mb-2">Work With Me</h3>
                <p className="text-xs text-[#1e1e1e]/70 mb-6 leading-relaxed">Frontend, fintech, Web3, or trading bots. Limited project slots open.</p>
                <a href="https://wa.me/2347039662696" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#1e1e1e] text-[#e7e7e7] font-black uppercase tracking-widest text-[10px] py-3 rounded-xl">
                  Start a Conversation <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </ThemeSection>

      {/* Floating Pop-out Video */}
      <AnimatePresence>
        {shouldFloat && !isPopOutClosed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, x: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50, x: 50 }}
            className="fixed bottom-24 right-8 z-[60] w-72 aspect-video bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-sec/10"
          >
            <button 
              onClick={() => setIsPopOutClosed(true)}
              className="absolute top-2 right-2 p-1.5 bg-black/50 backdrop-blur-md rounded-full text-white z-10 hover:bg-black/80 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="absolute top-2 left-2 px-2 py-0.5 bg-red-500 text-white text-[8px] font-black uppercase tracking-[0.2em] rounded z-10 animate-pulse">
              LIVE
            </div>
            {videoElement}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
