import { motion } from "motion/react";
import { RevealLine, FadeIn } from "./Animations";
import MagneticButton from "./MagneticButton";
import { Linkedin, Github } from "lucide-react";
import { useConfig } from "../context/ConfigContext";

export default function Hero() {
  const { config } = useConfig();
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-main text-sec">
      
      {/* Background Blob Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 z-0">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-purple-400 via-yellow-300 to-blue-400 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
      </div>

      {/* Main Text */}
      <div className="z-10 flex flex-col items-center text-center mt-12">
        <RevealLine delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.1] text-sec uppercase">
            {config.hero.home.title}
          </h1>
        </RevealLine>
      </div>

      {/* Left Sidebar */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20 hidden lg:flex">
        <div className="w-[1px] h-48 bg-sec/30 relative mb-4">
          <div className="absolute -top-1 -left-[1.5px] w-1 h-1 bg-sec rounded-full" />
          <div className="absolute -bottom-1 -left-[1.5px] w-1 h-1 bg-sec rounded-full" />
        </div>
        <MagneticButton>
          <a href="https://www.linkedin.com/in/fredyomoke/" target="_blank" rel="noopener noreferrer" className="text-sec hover:text-sec/70 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </MagneticButton>
        <MagneticButton>
          <a href={config.cta.link} target="_blank" rel="noopener noreferrer" className="text-sec hover:text-sec/70 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
          </a>
        </MagneticButton>
        <MagneticButton>
          <a href="https://github.com/omokeify" target="_blank" rel="noopener noreferrer" className="text-sec hover:text-sec/70 transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </MagneticButton>
      </div>

      {/* Scroll Down */}
      <FadeIn delay={1.2} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <span className="text-sm text-sec font-medium">
          scroll down
        </span>
      </FadeIn>

    </section>
  );
}
