import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

interface DavidCharacterProps {
  className?: string;
  float?: boolean;
  /** True while the visitor is hovering the interactive period — the character glances at it instead of the cursor. */
  lookAt?: boolean;
  /** Bump this number to fire a one-shot "surprised" reaction (hop + eyebrows + open mouth). */
  reactionTrigger?: number;
}

const BLUE = "var(--color-thr)";
const RED = "var(--color-red)";
const INK = "var(--color-sec)";

const IDLE_ANIMATE = {
  y: [0, -9, 0],
  scaleY: [1, 1.015, 1],
  transition: { duration: 4.4, repeat: Infinity, ease: "easeInOut" as const },
};

const HOP_ANIMATE = {
  y: [0, -22, -6, 0],
  transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] as const },
};

/**
 * The blue mascot. Eyes track the cursor (or glance at whatever `lookAt`
 * points to), it blinks and breathes on its own timer, leans slightly
 * toward the cursor, notices when you get close, and can fire a one-shot
 * surprised reaction via `reactionTrigger`.
 */
export default function DavidCharacter({ className = "", float = true, lookAt = false, reactionTrigger }: DavidCharacterProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const eyeX = useMotionValue(0);
  const eyeY = useMotionValue(0);
  const springX = useSpring(eyeX, { stiffness: 220, damping: 22, mass: 0.4 });
  const springY = useSpring(eyeY, { stiffness: 220, damping: 22, mass: 0.4 });
  const tilt = useTransform(springX, [-4.5, 4.5], [-4, 4]);

  const eyelidY = useMotionValue(51);
  const lookAtRef = useRef(lookAt);
  const [isNear, setIsNear] = useState(false);
  const [surprised, setSurprised] = useState(false);
  const prevTrigger = useRef(reactionTrigger);

  useEffect(() => {
    lookAtRef.current = lookAt;
    if (lookAt) {
      eyeX.set(3.6);
      eyeY.set(3.8);
    }
  }, [lookAt, eyeX, eyeY]);

  useEffect(() => {
    if (reactionTrigger === undefined) return;
    if (prevTrigger.current === reactionTrigger) return;
    prevTrigger.current = reactionTrigger;
    setSurprised(true);
    const t = setTimeout(() => setSurprised(false), 620);
    return () => clearTimeout(t);
  }, [reactionTrigger]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let raf = 0;
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height * 0.4;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy) || 1;

        setIsNear((prev) => {
          const near = dist < 220;
          return prev === near ? prev : near;
        });

        if (lookAtRef.current) return;
        const reach = Math.min(dist, 320) / 320;
        const maxOffset = 4.5;
        eyeX.set((dx / dist) * reach * maxOffset);
        eyeY.set((dy / dist) * reach * maxOffset);
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, [eyeX, eyeY, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let cancelled = false;
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
    (async () => {
      while (!cancelled) {
        await wait(2800 + Math.random() * 3400);
        if (cancelled) return;
        eyelidY.set(91);
        await wait(90);
        if (cancelled) return;
        eyelidY.set(51);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [eyelidY, prefersReducedMotion]);

  const shouldFloat = float && !prefersReducedMotion;
  const eyebrowRaise = surprised ? -6 : isNear || lookAt ? -3 : 0;

  return (
    <motion.div
      ref={containerRef}
      className={`select-none ${className}`}
      style={{ rotate: prefersReducedMotion ? 0 : tilt }}
      animate={surprised ? HOP_ANIMATE : shouldFloat ? IDLE_ANIMATE : undefined}
    >
      <svg viewBox="0 0 200 240" className="w-full h-full overflow-visible" aria-hidden="true">
        {/* back arm */}
        <rect x="150" y="66" width="18" height="66" rx="9" fill={BLUE} transform="rotate(-146 159 66)" />
        <circle cx="151" cy="42" r="12" fill={BLUE} />

        {/* legs */}
        <rect x="70" y="192" width="19" height="46" rx="9.5" fill={BLUE} transform="rotate(20 79.5 192)" />
        <rect x="113" y="192" width="19" height="46" rx="9.5" fill={BLUE} transform="rotate(-10 122.5 192)" />

        {/* body */}
        <rect x="35" y="38" width="130" height="168" rx="60" fill={BLUE} />
        <ellipse cx="70" cy="68" rx="24" ry="15" fill="#ffffff" opacity="0.16" />
        <ellipse cx="126" cy="182" rx="32" ry="18" fill={INK} opacity="0.1" />

        {/* front arm */}
        <rect x="10" y="112" width="18" height="64" rx="9" fill={BLUE} transform="rotate(16 19 112)" />

        {/* eyebrows */}
        <motion.path
          d="M 53 79 Q 68 72 84 78"
          fill="none"
          stroke={INK}
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ y: eyebrowRaise }}
          transition={{ type: "spring", stiffness: 320, damping: 20 }}
        />
        <motion.path
          d="M 116 78 Q 132 72 147 79"
          fill="none"
          stroke={INK}
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ y: eyebrowRaise }}
          transition={{ type: "spring", stiffness: 320, damping: 20 }}
        />

        {/* glasses */}
        <line x1="52" y1="98" x2="37" y2="91" stroke={RED} strokeWidth="6" strokeLinecap="round" />
        <line x1="148" y1="98" x2="163" y2="91" stroke={RED} strokeWidth="6" strokeLinecap="round" />
        <line x1="89" y1="101" x2="111" y2="101" stroke={RED} strokeWidth="6" />

        <clipPath id="lens-l">
          <rect x="55" y="91" width="32" height="24" rx="8" />
        </clipPath>
        <clipPath id="lens-r">
          <rect x="113" y="91" width="32" height="24" rx="8" />
        </clipPath>

        <g clipPath="url(#lens-l)">
          <circle cx="71" cy="103" r="11" fill="#ffffff" />
          <motion.circle cx="71" cy="103" r="5" fill={INK} style={{ x: springX, y: springY }} />
          <motion.rect x="55" y="51" width="32" height="40" rx="8" fill={BLUE} style={{ y: eyelidY }} />
        </g>
        <g clipPath="url(#lens-r)">
          <circle cx="129" cy="103" r="11" fill="#ffffff" />
          <motion.circle cx="129" cy="103" r="5" fill={INK} style={{ x: springX, y: springY }} />
          <motion.rect x="113" y="51" width="32" height="40" rx="8" fill={BLUE} style={{ y: eyelidY }} />
        </g>

        <rect x="52" y="88" width="38" height="30" rx="10" fill="none" stroke={RED} strokeWidth="6" />
        <rect x="110" y="88" width="38" height="30" rx="10" fill="none" stroke={RED} strokeWidth="6" />

        {/* mouth */}
        <motion.path
          d="M 88 139 Q 100 147 112 139"
          fill="none"
          stroke={INK}
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ opacity: surprised ? 0 : 1 }}
          transition={{ duration: 0.15 }}
        />
        <motion.circle
          cx="100"
          cy="141"
          r="6"
          fill={INK}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: surprised ? 1 : 0, scale: surprised ? 1 : 0.4 }}
          transition={{ duration: 0.15 }}
        />
      </svg>
    </motion.div>
  );
}
