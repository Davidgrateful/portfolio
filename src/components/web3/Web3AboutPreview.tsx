import { ArrowUpRight } from "lucide-react";
import { RevealLine, FadeIn } from "../Animations";
import MagneticButton from "../MagneticButton";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import MotionButton from "../ui/motion-button";

gsap.registerPlugin(ScrollTrigger);

export default function Web3AboutPreview() {
  const curveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (curveRef.current) {
      gsap.to(curveRef.current, {
        scrollTrigger: {
          trigger: "#web3-hero",
          start: "top 90%",
          end: "bottom+=600 top",
          scrub: 1
        },
        scaleY: 6,
        ease: "power3.inOut",
        duration: 3
      });
    }
  }, []);

  return (
    <section id="web3-about" className="relative z-30 py-24 px-6 md:px-12 lg:px-24 bg-sec text-main">
      {/* Curve */}
      <div 
        ref={curveRef}
        className="overflow-hidden absolute left-1/2 -top-8 lg:-top-12 transform -translate-x-1/2 w-full h-8 lg:h-16 z-40 origin-bottom"
      >
        <div className="absolute right-[-10%] rounded-[50%] h-[150%] w-[120%] bg-sec" />
      </div>

      <div className="max-w-7xl mx-auto relative z-50 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <RevealLine>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
              My transition into Web3 wasn't just about learning new languages; it was about adopting a new paradigm of trustless systems and decentralized ownership.
            </h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-2xl text-main/70 leading-relaxed">
              I help protocols and startups design and implement robust Web3 architectures that scale, focusing on adoption through intuitive UX and secure smart contracts.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="flex items-center gap-2 mt-8">
            <MotionButton label="Get in Touch" href="mailto:fredyomoke@gmail.com" />
          </div>
        </FadeIn>

        <div className="w-full flex justify-between items-center mt-24 text-sm text-main/60">
          <FadeIn delay={0.4}>
            <div className="flex items-center gap-2">
              <span className="animate-bounce">↓</span> Scroll to Explore
            </div>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div>My Web3 Journey</div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
