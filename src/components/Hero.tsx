import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { RevealLine, FadeIn } from "./Animations";
import MagneticButton from "./MagneticButton";
import DavidCharacter from "./DavidCharacter";
import FloatingCube from "./FloatingCube";
import { useConfig } from "../context/ConfigContext";
import { contact } from "../data/davidPortfolio";

export default function Hero() {
  const { config } = useConfig();
  const prefersReducedMotion = useReducedMotion();

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const onMove = (e: MouseEvent) => {
      mvX.set((e.clientX / window.innerWidth) * 2 - 1);
      mvY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mvX, mvY, prefersReducedMotion]);

  const headlineX = useSpring(useTransform(mvX, [-1, 1], [6, -6]), { stiffness: 60, damping: 20 });
  const cubeX = useSpring(useTransform(mvX, [-1, 1], [-20, 20]), { stiffness: 40, damping: 18 });
  const cubeY = useSpring(useTransform(mvY, [-1, 1], [-16, 16]), { stiffness: 40, damping: 18 });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-main text-sec px-6 md:px-12 lg:px-24 pt-32 pb-16"
    >
      <div className="grain-overlay" />

      <FloatingCube
        className="hidden md:block absolute top-28 right-[8%] lg:right-[14%] z-0"
        parallaxX={cubeX}
        parallaxY={cubeY}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <FadeIn>
          <div className="inline-flex items-center gap-2 mb-8 text-[11px] font-mono uppercase tracking-[0.25em] text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-red" />
            You just entered David&rsquo;s digital world
          </div>
        </FadeIn>

        <div className="relative">
          <div className="overflow-hidden pb-2 -mb-2">
            <motion.h1
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
              style={{ x: headlineX }}
              className="font-cabinetGrotesk font-black uppercase tracking-tight leading-[0.86] text-[15vw] sm:text-[13vw] md:text-[9.5vw] lg:text-[7.5rem] xl:text-[8.5rem]"
            >
              David
              <br />
              Grateful<span className="text-red">.</span>
            </motion.h1>
          </div>

          <DavidCharacter
            className="w-[110px] sm:w-[130px] lg:w-[150px] mt-6 mb-2 mx-auto lg:mx-0 lg:absolute lg:left-[72%] lg:bottom-0 lg:mt-0"
          />
        </div>

        <div className="mt-8 lg:mt-4 max-w-3xl">
          <RevealLine delay={0.15}>
            <h2 className="font-cabinetGrotesk font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-[1.1] text-sec">
              {config.hero.home.title}
            </h2>
          </RevealLine>
          <FadeIn delay={0.3}>
            <p className="font-sans text-base md:text-lg text-muted max-w-xl leading-relaxed mt-5">
              {config.hero.home.subtitle}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.45}>
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <MagneticButton>
              <a
                href={contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-sec text-main px-7 py-4 rounded-full font-bold text-sm hover:bg-red transition-colors duration-300"
              >
                Let&rsquo;s talk
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sec px-7 py-4 rounded-full font-bold text-sm border border-sec/15 hover:border-sec/40 transition-colors duration-300"
              >
                See the work
                <ChevronDown className="w-4 h-4" />
              </a>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full mt-16 hidden sm:flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-muted">
        <motion.span
          animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.span>
        Scroll
      </div>
    </section>
  );
}
