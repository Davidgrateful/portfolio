import { motion } from "motion/react";
import { ReactNode, Key } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  key?: Key;
}

export function RevealLine({ children, delay = 0, className = "" }: RevealProps) {
  // The wrapper is what gets observed: the inner line starts pushed out of its
  // clipped box, so observing it directly never fires for tall headings.
  return (
    <motion.div
      className="overflow-hidden pb-2 -mb-2"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        variants={{ hidden: { y: "115%" }, shown: { y: 0 } }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay }}
        className={className}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
