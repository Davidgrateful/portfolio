import { useEffect, useState, useRef, ReactNode } from "react";
import { Clock, Mail, PlayCircle, ArrowUpRight, X } from "lucide-react";
import { FadeIn, RevealLine } from "../components/Animations";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView as useInViewMotion } from "motion/react";
import { topAds, latestPosts, mainPosts } from "../data/blogData";
import { usePhase } from "../hooks/usePhase";

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
      
      // Dynamic Accent: Shift to darker green for light background to ensure contrast
      const isLight = mainColor.toLowerCase() === '#e7e7e7';
      const accentColor = isLight ? '#5a8d0e' : '#d4f534';
      document.documentElement.style.setProperty('--color-accent', accentColor);
      
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
  const { isWeb3 } = usePhase();
  const phase = isWeb3 ? "web3" : "web2";

  useEffect(() => {
    document.title = "Contents | Fredy Omoke";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % topAds.length);
    }, 20000);
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

  // Ducking logic for media visibility
  useEffect(() => {
    if (!isVideoInView) {
       window.dispatchEvent(new CustomEvent('music-unduck'));
    }
  }, [isVideoInView]);

  const videoElement = (
    <iframe
      src="https://www.youtube.com/embed/DFhqxE5jV_Y?autoplay=1&mute=1&loop=1&playlist=DFhqxE5jV_Y&controls=1&modestbranding=0&rel=0&enablejsapi=1"
      title="Featured Video"
      className="w-full h-full border-0 pointer-events-auto"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );

  return (
    <div className="w-full min-h-screen">
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="pt-36 pb-4 px-6 md:px-12 lg:px-16 xl:px-24">
        {/* Top Leaderboard Ad — CoinDesk style, full width, centered */}
        <FadeIn>
          <div className="w-full flex justify-center mb-20 px-6 sm:px-10 lg:px-12 relative group">
            {/* Background Glow for Ad Impact */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)]/20 via-transparent to-[var(--color-accent)]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="w-full max-w-7xl h-[140px] md:h-[280px] bg-sec/5 border border-sec/10 rounded-[2rem] relative overflow-hidden group cursor-pointer hover:bg-sec/[0.07] transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-b-4 border-b-sec/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAd}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className="h-full"
                >
                  <a 
                    href={(topAds[currentAd] as any).url} 
                    target={(topAds[currentAd] as any).url.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="block h-full no-underline relative group"
                  >
                    {(topAds[currentAd] as any).type === 'banner' ? (
                      <img 
                        src={topAds[currentAd].image} 
                        alt={topAds[currentAd].sponsor} 
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" 
                      />
                    ) : (
                      <div className="flex items-center justify-between h-full px-8 md:px-16">
                        <div className="flex items-center gap-6 md:gap-10">
                          <div className="w-16 h-16 md:w-24 md:h-24 rounded-md bg-sec/10 shrink-0 overflow-hidden shadow-sm">
                            <img src={topAds[currentAd].image} alt="Sponsor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sec/30 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-2">{topAds[currentAd].sponsor}</span>
                            <p className="text-xl md:text-3xl font-black text-sec/70 group-hover:text-sec transition-colors uppercase tracking-tighter leading-none max-w-3xl">
                              {topAds[currentAd].text}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-3 shrink-0 ml-4">
                          <span className="text-[7px] md:text-[9px] font-bold uppercase bg-[var(--color-accent)] text-[#1e1e1e] px-2 py-0.5 rounded leading-none">Promotion</span>
                          <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 text-sec/20 group-hover:text-[var(--color-accent)] transition-colors translate-x-2" />
                        </div>
                      </div>
                    )}
                  </a>
                </motion.div>
              </AnimatePresence>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2 z-10">
                {topAds.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${idx === currentAd ? "bg-[var(--color-accent)] w-6" : "w-1.5 bg-sec/20"}`}
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
                    state={{ phase }}
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
                  <Link 
                    to={`/blog/${post.id}`} 
                    state={{ phase }}
                    className="group flex flex-col h-full"
                  >
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 shrink-0">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-2">{post.category}</span>
                    <h3 className="text-base font-bold tracking-tighter mb-2 group-hover:text-sec/70 transition-colors uppercase leading-snug">{post.title}</h3>
                    <p className="text-xs text-sec/50 leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-sec/30 mt-auto">{post.date}</span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* RIGHT: Sidebar Item (Sticky) */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
             {/* Sponsored Video Ad Slot */}
            <div ref={videoRef} className="flex flex-col gap-4">
              <FadeIn>
                <div className="relative rounded-xl overflow-hidden aspect-video bg-black shadow-lg group border border-sec/10">
                   <div className="absolute inset-0 scale-[1.05] origin-center">
                    {videoElement}
                  </div>
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/50 backdrop-blur-md text-white text-[7px] font-black uppercase tracking-[0.2em] rounded z-10">
                    AD
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-bold uppercase tracking-tight text-sec/90 leading-tight">
                    Showcase your project to thousands of Web3 builders.
                  </h3>
                  <a 
                    href="https://wa.me/2347039662696" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--color-accent)] hover:opacity-70 transition-opacity flex items-center gap-1.5"
                  >
                    Place your video ad here <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
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
                  <Link 
                    to={`/blog/${post.id}`} 
                    state={{ phase }}
                    className="group flex flex-col h-full"
                  >
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 shrink-0">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-2">{post.category}</span>
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
                <h3 className="text-lg font-bold font-cabinetGrotesk tracking-tighter uppercase mb-2">Builder's Digest</h3>
                <p className="text-xs text-sec/50 mb-5 leading-relaxed font-cabinetGrotesk">Weekly drops on Web3, fintech, and the actual reality of building products.</p>
                <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="your@email.com" className="w-full bg-main border border-sec/20 rounded-xl px-4 py-2.5 text-xs text-sec placeholder:text-sec/30 font-cabinetGrotesk" />
                  <button className="w-full bg-sec text-main font-black font-cabinetGrotesk uppercase tracking-widest text-[10px] py-3 rounded-xl hover:bg-sec/90 transition-colors">Subscribe Free</button>
                </form>
              </div>
            </FadeIn>
            
            {/* Ad Placement CTA */}
            <FadeIn>
              <div className="bg-[#d4f534] text-[#1e1e1e] p-6 rounded-2xl">
                <h3 className="text-lg font-bold font-cabinetGrotesk tracking-tighter uppercase mb-2 leading-none">Place an Ad</h3>
                <p className="text-[10px] font-bold font-cabinetGrotesk text-[#1e1e1e]/60 mb-6 leading-tight uppercase tracking-tight">
                  Reach the top Web3 and fintech builders in Nigeria and beyond.
                </p>
                <a href="https://wa.me/2347039662696" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#1e1e1e] text-[var(--color-accent)] font-black font-cabinetGrotesk uppercase tracking-widest text-[10px] py-3 rounded-xl hover:scale-105 transition-transform">
                  Contact Me
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <p className="text-[7px] text-center uppercase tracking-widest font-black text-[#1e1e1e]/30 mt-3 font-cabinetGrotesk">Dispatch Exclusive</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </ThemeSection>

      {/* Floating Pop-out Video */}
      <AnimatePresence>
        {shouldFloat && !isPopOutClosed && (
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0.1}
            whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
            initial={{ opacity: 0, scale: 0.8, y: 50, x: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50, x: 50 }}
            className="fixed bottom-24 right-8 z-[60] w-72 aspect-video bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-sec/10 cursor-grab active:cursor-grabbing touch-none"
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
