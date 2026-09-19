import { motion, MotionValue, useReducedMotion } from "motion/react";

interface FloatingCubeProps {
  size?: number;
  className?: string;
  parallaxX?: MotionValue<number>;
  parallaxY?: MotionValue<number>;
}

/**
 * A CSS-only isometric cube — the "one 3D object" in the hero. No WebGL,
 * just three faces on 3D transforms, so it stays GPU-cheap.
 */
export default function FloatingCube({ size = 76, className = "", parallaxX, parallaxY }: FloatingCubeProps) {
  const half = size / 2;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      style={{ perspective: 900, x: prefersReducedMotion ? 0 : parallaxX, y: prefersReducedMotion ? 0 : parallaxY }}
    >
      <motion.div
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          rotateX: -28,
        }}
        animate={prefersReducedMotion ? undefined : { rotateY: [-22, 22, -22], y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute"
          style={{
            width: size,
            height: size,
            background: "var(--color-red)",
            transform: `translateZ(${half}px)`,
            borderRadius: 6,
          }}
        />
        <div
          className="absolute"
          style={{
            width: size,
            height: size,
            background: "color-mix(in srgb, var(--color-red) 78%, black)",
            transform: `rotateY(90deg) translateZ(${half}px)`,
            borderRadius: 6,
          }}
        />
        <div
          className="absolute"
          style={{
            width: size,
            height: size,
            background: "color-mix(in srgb, var(--color-red) 60%, white)",
            transform: `rotateX(90deg) translateZ(${half}px)`,
            borderRadius: 6,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
