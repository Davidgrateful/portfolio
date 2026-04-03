import { useState, useRef, useEffect } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { Link } from "react-router-dom";

interface FlowingMenuItem {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items: FlowingMenuItem[];
}

export default function FlowingMenu({ items }: FlowingMenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position state
  const mouseX = useSpring(0, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Floating Image */}
      <motion.div
        className="pointer-events-none absolute left-0 top-0 z-50 overflow-hidden rounded-xl bg-sec/10 shadow-2xl"
        style={{
          x: useTransform(mouseX, (v) => v - 150), // Center the image (width/2)
          y: useTransform(mouseY, (v) => v - 100), // Center the image (height/2)
          width: 300,
          height: 200,
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {hoveredIndex !== null && (
          <img
            src={items[hoveredIndex].image}
            alt={items[hoveredIndex].text}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        )}
      </motion.div>

      {/* Menu List */}
      <div className="flex flex-col border-t border-sec/20">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="group relative flex items-center justify-between border-b border-sec/20 py-8 px-4 transition-colors hover:bg-sec/5 overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Normal Text */}
            <span className={`relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase text-sec transition-all duration-500 ${hoveredIndex === index ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
              {item.text}
            </span>

            {/* Full-Width Marquee Text on hover */}
            <div className={`absolute inset-0 flex items-center opacity-0 transition-opacity duration-500 overflow-hidden ${hoveredIndex === index ? 'opacity-100' : ''}`}>
              <motion.div
                className="flex whitespace-nowrap"
                animate={hoveredIndex === index ? { x: ["0%", "-50%"] } : { x: "0%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
              >
                {Array(10).fill(item.text).map((text, i) => (
                  <span key={i} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase text-sec pr-8">
                    {text} <span className="text-sec/30 mx-4">•</span>
                  </span>
                ))}
              </motion.div>
            </div>

            <span className="text-sec/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap relative z-10 bg-main px-4 py-2 rounded-full ml-4 shrink-0">
              View Project
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
