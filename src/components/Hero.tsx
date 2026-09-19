import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { RevealLine, FadeIn } from "./Animations";
import MagneticButton from "./MagneticButton";
import DavidCharacter from "./DavidCharacter";
import { useConfig } from "../context/ConfigContext";
import { contact } from "../data/davidPortfolio";

export default function Hero() {
  const { config } = useConfig();
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const [periodHover, setPeriodHover] = useState(false);
  const [pokeCount, setPokeCount] = useState(0);
  const [hasPoked, setHasPoked] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // A single, brief nudge toward the period a couple seconds in — a hint to
  // discover it, not a looping "click here" tutorial.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const showTimer = setTimeout(() => setShowHint(true), 1600);
    return () => clearTimeout(showTimer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!showHint) return;
    const hideTimer = setTimeout(() => setShowHint(false), 1300);
    return () => clearTimeout(hideTimer);
  }, [showHint]);

  const mvX = useMotionValue(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const onMove = (e: MouseEvent) => {
      mvX.set((e.clientX / window.innerWidth) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mvX, prefersReducedMotion]);

  const headlineX = useSpring(useTransform(mvX, [-1, 1], [6, -6]), { stiffness: 60, damping: 20 });

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const exitOpacity = useTransform(scrollYProgress, [0.45, 0.85], [1, 0]);
  const exitY = useTransform(scrollYProgress, [0.45, 0.85], [0, 70]);
  const exitRotate = useTransform(scrollYProgress, [0.45, 0.85], [0, 12]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-main text-sec px-6 md:px-12 lg:px-24 pt-32 pb-16"
    >
      <div className="grain-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <FadeIn>
          <div className="inline-flex items-center gap-2 mb-8 text-[11px] font-mono uppercase tracking-[0.25em] text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-red" />
            You just entered David&rsquo;s digital world
          </div>
        </FadeIn>

        <div className="relative pb-[94px] sm:pb-[128px] lg:pb-0">
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
              Grateful
              <motion.button
                type="button"
                aria-label="Poke the period"
                onHoverStart={() => setPeriodHover(true)}
                onHoverEnd={() => setPeriodHover(false)}
                onClick={() => {
                  setPokeCount((p) => p + 1);
                  setHasPoked(true);
                }}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.2, rotate: -8 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.55, rotate: 0 }}
                animate={!hasPoked && showHint && !prefersReducedMotion ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                transition={!hasPoked && showHint ? { duration: 1.1, ease: "easeInOut" } : { type: "spring", stiffness: 400, damping: 15 }}
                className="text-red inline-block align-baseline cursor-pointer"
                style={{ transformOrigin: "70% 70%" }}
              >
                .
              </motion.button>
            </motion.h1>
          </div>

          <motion.div
            style={{
              opacity: prefersReducedMotion ? 1 : exitOpacity,
              y: prefersReducedMotion ? 0 : exitY,
              rotate: prefersReducedMotion ? 0 : exitRotate,
            }}
            className="w-[70px] sm:w-[96px] lg:w-[145px] absolute bottom-0 right-[3%] sm:right-[5%] lg:right-auto lg:left-[69.5%]"
          >
            <DavidCharacter lookAt={periodHover} reactionTrigger={pokeCount} className="w-full h-full" />
          </motion.div>
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
