import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import { usePhase } from "../hooks/usePhase";
import MotionButton from "./ui/motion-button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { isWeb3 } = usePhase();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const links = isWeb3 ? [
    { name: "About", href: "/web3-about", state: undefined },
    { name: "Works", href: "/web3-works", state: undefined },
    { name: "Events", href: "/events", state: undefined },
    { name: "Services", href: "/services", state: { phase: "web3" } },
    { name: "Contents", href: "/blog", state: { phase: "web3" } },
    { name: "Contact", href: "https://wa.me/2347039662696", state: undefined },
  ] : [
    { name: "About", href: "/about", state: undefined },
    { name: "Works", href: "/works", state: undefined },
    { name: "Services", href: "/services", state: undefined },
    { name: "Contents", href: "/blog", state: { phase: "web2" } },
    { name: "Contact", href: "https://wa.me/2347039662696", state: undefined },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 text-sec transition-transform duration-500 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <MagneticButton>
          <Link to={isWeb3 ? "/web3" : "/"} className="text-3xl font-bold tracking-tighter inline-flex items-center">
            F<span className="w-1 h-6 bg-sec ml-1"></span>
          </Link>
        </MagneticButton>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 mr-4">
            {links.filter(link => link.name !== "Contact").map((link) => (
              <div key={link.name}>
                <MagneticButton>
                  <Link
                    to={link.href}
                    state={link.state}
                    className="text-sm font-medium hover:opacity-70 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </MagneticButton>
              </div>
            ))}
          </div>
          
          <MotionButton 
            label="Get in Touch" 
            href="https://wa.me/2347039662696"
            classes="scale-90"
          />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Floating Sticky Menu Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed top-6 right-8 z-50"
          >
            <MagneticButton>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-sec text-main flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-sec text-main z-[100] flex flex-col justify-between p-8 md:p-12 lg:p-16"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-start w-full">
              <div className="w-12 h-12 rounded-full border border-main/20"></div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:rotate-90 transition-transform duration-300">
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto flex-grow my-12 gap-12">
              {/* Links */}
              <div className="flex flex-col gap-6 w-full md:w-1/2">
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    {link.href.startsWith('http') || link.href.startsWith('mailto:') ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? "_blank" : undefined}
                        rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        onClick={() => setIsOpen(false)}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter hover:text-main/70 transition-colors flex justify-between items-center group"
                      >
                        {link.name}
                        <span className="text-2xl md:text-4xl font-light opacity-50 group-hover:opacity-100 transition-opacity">+</span>
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        state={link.state}
                        onClick={() => setIsOpen(false)}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter hover:text-main/70 transition-colors flex justify-between items-center group"
                      >
                        {link.name}
                        <span className="text-2xl md:text-4xl font-light opacity-50 group-hover:opacity-100 transition-opacity">+</span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Right Side Info & Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full md:w-1/2 flex flex-col items-end text-right hidden md:flex"
              >
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2 flex items-center justify-end gap-2">
                    <span>👋</span> Nice to see you!
                  </h3>
                  <p className="text-sm text-main/60 max-w-xs ml-auto">
                    I'm Fredy Omoke, Software Engineer<br/>based in the World
                  </p>
                </div>
                <div className="w-full max-w-md aspect-[4/3] bg-[#EAEAEA] rounded-3xl overflow-hidden relative shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                    alt="Abstract blob" 
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="flex justify-between items-end w-full text-xs text-main/40 uppercase tracking-widest font-medium">
              <div>
                Made with <span className="text-red-500">❤️</span> by Mr. Fredy
              </div>
              <div>
                © 2026
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
