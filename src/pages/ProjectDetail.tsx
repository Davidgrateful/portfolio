import { useEffect, useRef, ReactNode, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "motion/react";
import { RevealLine, FadeIn } from "../components/Animations";
import { ArrowUpRight, ArrowDown, X } from "lucide-react";
import MagneticButton from "../components/MagneticButton";
import { allProjects } from "../data/portfolio";

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

export default function ProjectDetail() {
  const { slug } = useParams();
  const exploreRef = useRef<HTMLDivElement>(null);

  // Reset theme on unmount
  useEffect(() => {
    return () => {
      document.documentElement.style.setProperty('--color-main', '#e7e7e7');
      document.documentElement.style.setProperty('--color-sec', '#1e1e1e');
      document.body.style.backgroundColor = '#e7e7e7';
      document.body.style.color = '#1e1e1e';
    };
  }, []);



  const [isDismissed, setIsDismissed] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const isVideoInView = useInView(videoSectionRef, { 
    amount: 0.1,
    once: false 
  });

  // Reset dismissal when main video enters view again
  useEffect(() => {
    if (isVideoInView) setIsDismissed(false);
  }, [isVideoInView]);

  const currentIndex = allProjects.findIndex(p => p.slug === slug);
  const project = currentIndex !== -1 ? allProjects[currentIndex] : allProjects[0];
  
  // Contextual Next Project (Web2 stays Web2, Web3 stays Web3)
  const contextualProjects = allProjects.filter(p => p.isWeb3 === project.isWeb3);
  const currentContextualIndex = contextualProjects.findIndex(p => p.slug === slug);
  const nextProject = contextualProjects[(currentContextualIndex + 1) % contextualProjects.length];

  return (
    <main className="min-h-screen transition-colors duration-700">
      
      {/* Header Title */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="pt-40 pb-12 px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
            <div className="lg:w-2/3">
              <FadeIn>
                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-sec leading-none py-4">
                  {project.title}
                </h1>
              </FadeIn>
            </div>
            <div className="lg:w-1/3 text-left lg:text-right">
              <FadeIn delay={0.2}>
                <p className="text-xl md:text-2xl text-sec/80 mb-2">
                  {project.subtitle}
                </p>
                <p className="text-xl md:text-2xl text-sec/80 italic">
                  Through outstanding project
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* Section 1: Hero Image (Full Width) */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full relative">
        <div ref={exploreRef} className="w-full h-[60vh] md:h-[80vh] relative">
          <img 
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </ThemeSection>

      {/* Intro Description & Gallery (Aziz Screenshot Layout) */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full pt-16 pb-32 px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          {/* Top Intro Row */}
          <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24 mt-8">
            {/* Left: Description & Button */}
            <div className="lg:w-1/2 flex flex-col items-start gap-12">
              <FadeIn delay={0.2}>
                <p className="text-sec/80 text-lg md:text-xl leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <MagneticButton>
                    <a 
                      href={project.liveLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#d4f534] text-[#1e1e1e] px-8 py-4 rounded-full text-sm font-bold transition-transform duration-300 shadow-xl"
                    >
                      Live Website
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <a 
                      href={project.liveLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#d4f534] text-[#1e1e1e] w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 shadow-xl"
                    >
                      <ArrowUpRight className="w-4 h-4" strokeWidth={2.5}/>
                    </a>
                  </MagneticButton>
                </div>
              </FadeIn>
            </div>

            {/* Right: Client & Tech Stack */}
            <div className="lg:w-5/12 flex flex-col gap-10">
              <FadeIn delay={0.3}>
                <div>
                  <h4 className="text-sm font-bold text-sec mb-3">Client</h4>
                  <p className="text-sec/80 text-base">{project.client}</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-sec text-main px-5 py-2.5 rounded-full text-xs font-bold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>

          {/* 2-Column Gallery (Refined Size) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
            <FadeIn delay={0.5}>
              <div 
                className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-white/5 relative group border border-white/5 cursor-pointer"
                onClick={() => setSelectedImage(project.heroImage)}
              >
                <img 
                  src={project.heroImage} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  alt="Project Shot 1" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                    <ArrowUpRight className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div 
                className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-white/5 relative group border border-white/5 cursor-pointer"
                onClick={() => setSelectedImage(project.gallery?.[0] || project.heroImage)}
              >
                <img 
                  src={project.gallery?.[0] || project.heroImage} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000" 
                  alt="Project Shot 2" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                    <ArrowUpRight className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </ThemeSection>

      {/* Section 1.5: Video Demo */}
      {project.videoUrl && (
        <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="w-full">
            <RevealLine>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12 text-sec">
                Project Demo
              </h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <div 
                ref={videoSectionRef}
                className="w-full aspect-video rounded-2xl overflow-hidden bg-black/20 relative group border border-sec/10"
              >
                <video 
                  src={project.videoUrl} 
                  controls 
                  autoPlay
                  muted
                  loop
                  onPlay={() => window.dispatchEvent(new CustomEvent('music-duck'))}
                  onPause={() => window.dispatchEvent(new CustomEvent('music-unduck'))}
                  onEnded={() => window.dispatchEvent(new CustomEvent('music-unduck'))}
                  className="w-full h-full object-cover"
                  poster={project.heroImage}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </FadeIn>
          </div>
        </ThemeSection>
      )}

      {/* The Narrative Integration (Aziz Khaldi Layout) */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4f534]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="w-full">
          {/* Top Row: Context & Details Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 relative z-10">
            {/* Left: Context / Challenge */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start">
              <RevealLine>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-sec">
                  {project.context ? "The Context" : "The Challenge"}
                </h2>
              </RevealLine>
              <FadeIn delay={0.2}>
                <p className="text-sec/80 text-base md:text-lg leading-relaxed mb-12">
                  {project.context || project.challenge || project.description}
                </p>
              </FadeIn>
              
              {project.ideation && (
                <FadeIn delay={0.3}>
                  <h3 className="text-2xl font-bold mb-4 text-sec tracking-tighter mt-8">
                    Ideation & Strategy
                  </h3>
                  <p className="text-sec/80 text-base md:text-lg leading-relaxed mb-10">
                    {project.ideation}
                  </p>
                </FadeIn>
              )}
              

            </div>

            {/* Right: Details Card */}
            <div className="lg:col-span-6 lg:col-start-7 xl:col-start-8">
              <FadeIn delay={0.4}>
                <div className="bg-black/5 rounded-[2rem] p-8 md:p-12 mb-10 border border-sec/5">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-sec/40 font-bold mb-8">DETAILS</h4>
                  
                  <div className="space-y-6">

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-sec/40 font-bold mb-1">ROLE</p>
                      <p className="font-medium text-sec text-base">{project.role}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-sec/40 font-bold mb-1">TIMELINE</p>
                      <p className="font-medium text-sec text-base">{project.timeline || project.year}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-10 lg:ml-6">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-sec/40 font-bold mb-4">DELIVERABLES</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables ? project.deliverables.map((d, index) => (
                      <span 
                        key={index} 
                        className="bg-sec text-main px-4 py-2 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase"
                      >
                        {d}
                      </span>
                    )) : (
                      <span className="bg-sec text-main px-4 py-2 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase">{project.category}</span>
                    )}
                  </div>
                </div>


              </FadeIn>
            </div>
          </div>

          {/* Bottom Row: Solution & Scope */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 pt-20 border-t border-sec/10">
            {/* Left: Solution */}
            <div className="lg:col-span-5">
              <RevealLine>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-sec leading-[1.1]">
                  {project.solution ? "Execution &\nSolution" : "System\nDesign"}
                </h2>
              </RevealLine>
              <FadeIn delay={0.2}>
                <p className="text-sec/80 text-base md:text-lg leading-relaxed">
                  {project.solution || project.systemDesign || "How I engineered the solution from concept to production."}
                </p>
              </FadeIn>
            </div>

            {/* Right: Scope & Outcome */}
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-16">
              {/* Engineering Scope */}
              <div>
                <RevealLine>
                  <h3 className="text-2xl font-bold mb-8 text-sec">
                    Key Responsibilities
                  </h3>
                </RevealLine>
                <ul className="space-y-5">
                  {project.responsibilities.map((resp, index) => (
                    <FadeIn key={index} delay={0.3 + index * 0.05}>
                      <li className="flex items-start gap-4 text-sec/80 text-base">
                        <div className="mt-2 shrink-0 text-sec">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#d4f534] ring-4 ring-sec/10"></div>
                        </div>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </div>

              {/* Business Outcome */}
              <div>
                <RevealLine>
                  <h3 className="text-2xl font-bold mb-8 text-sec">
                    Project Impact
                  </h3>
                </RevealLine>
                <ul className="space-y-4">
                  {project.impact.map((imp, index) => (
                    <FadeIn key={index} delay={0.4 + index * 0.05}>
                      <li className="flex items-start gap-4 text-sec/90 font-medium text-base">
                        <div className="mt-1 shrinkage-0 text-sec">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="leading-relaxed">{imp}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ThemeSection>


      {/* Section 4: Next Project (Accent Theme) */}
      <ThemeSection mainColor="#d4f534" secColor="#1e1e1e" className="py-32 overflow-hidden text-center">
        
        {/* Marquee Transition */}
        <div className="w-full overflow-hidden mb-24 -rotate-2 bg-sec text-main py-4">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {Array(6).fill("✦ CREATIVE WORK ✦ OTHER PROJECTS ").map((text, i) => (
              <span key={i} className="text-4xl md:text-6xl font-bold tracking-tighter uppercase pr-8">
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <FadeIn>
            <p className="text-sm md:text-base font-bold uppercase tracking-widest text-sec/50 mb-6">
              Next Project
            </p>
            <Link to={`/project/${nextProject.slug}`} className="group inline-block">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mb-8 text-sec group-hover:opacity-70 transition-opacity">
                {nextProject.title}
              </h2>
              <MagneticButton>
                <div className="w-20 h-20 mx-auto rounded-full bg-sec text-main flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </MagneticButton>
            </Link>
          </FadeIn>
        </div>
      </ThemeSection>
      {/* Floating Video Overlay */}
      <AnimatePresence>
        {project.videoUrl && !isVideoInView && !isDismissed && (
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0.1}
            whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-8 right-8 w-72 md:w-96 aspect-video bg-black rounded-xl overflow-hidden shadow-2xl z-[100] border border-sec/20 cursor-grab active:cursor-grabbing touch-none"
          >
            <button 
              onClick={() => {
                setIsDismissed(true);
                window.dispatchEvent(new CustomEvent('music-unduck'));
              }}
              className="absolute top-2 right-2 z-10 p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 backdrop-blur-md transition-all pointer-events-auto"
              aria-label="Close Preview"
            >
              <X className="w-4 h-4" />
            </button>
            <video 
              src={project.videoUrl} 
              autoPlay 
              loop 
              controls
              onPlay={() => window.dispatchEvent(new CustomEvent('music-duck'))}
              onPause={() => window.dispatchEvent(new CustomEvent('music-unduck'))}
              onEnded={() => window.dispatchEvent(new CustomEvent('music-unduck'))}
              className="w-full h-full object-cover pointer-events-auto"
            />
            
            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
               <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Live Interaction</p>
               <p className="text-xs font-bold text-white uppercase">{project.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-pointer backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 z-[2001] bg-white/10 hover:bg-white/20 p-4 rounded-full text-white backdrop-blur-md transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative max-w-4xl w-full h-[90vh] flex items-center justify-center p-4 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                alt="Selected visual"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
