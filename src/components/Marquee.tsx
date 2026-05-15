import { motion } from "motion/react";

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden py-4 border-y border-sec/10 bg-sec text-main">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1035] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
        }}
      >
        <span className="text-4xl md:text-6xl font-bold uppercase tracking-tighter px-8">
          David Grateful • David Grateful • David Grateful • David Grateful • David Grateful • David Grateful • David Grateful • David Grateful •
        </span>
        <span className="text-4xl md:text-6xl font-bold uppercase tracking-tighter px-8">
          David Grateful • David Grateful • David Grateful • David Grateful • David Grateful • David Grateful • David Grateful • David Grateful •
        </span>
      </motion.div>
    </div>
  );
}
