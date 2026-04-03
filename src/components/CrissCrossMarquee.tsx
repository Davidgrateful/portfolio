import { motion } from "motion/react";
import { useConfig } from "../context/ConfigContext";

export default function CrissCrossMarquee() {
  const { config } = useConfig();
  const text = config.marquees.home;
  
  return (
    <section className="relative h-64 bg-main overflow-hidden flex flex-col items-center justify-center">
      {/* First Marquee - Scrolling Left */}
      <div className="absolute w-[110%] bg-sec text-main py-4 transform -rotate-3 z-10 flex whitespace-nowrap overflow-hidden shadow-xl">
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap text-2xl md:text-4xl font-bold uppercase tracking-wider"
        >
          {Array(4).fill(text).map((t, i) => (
            <span key={i} className="pr-4">{t}</span>
          ))}
        </motion.div>
      </div>

      {/* Second Marquee - Scrolling Right */}
      <div className="absolute w-[110%] bg-main text-sec border-y-2 border-sec py-4 transform rotate-3 flex whitespace-nowrap overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap text-2xl md:text-4xl font-bold uppercase tracking-wider"
        >
           {Array(4).fill(text).map((t, i) => (
            <span key={i} className="pr-4">{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
