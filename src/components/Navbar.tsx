import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import MotionButton from "./ui/motion-button";
import { contact } from "../data/davidPortfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);
  });

  const links = [
    { name: "About", href: "/about" },
    { name: "Brands", href: "/works" },
    { name: "Services", href: "/services" },
    { name: "Notes", href: "/blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 text-sec transition-transform duration-500 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <MagneticButton>
          <Link to="/" className="text-3xl font-black tracking-tighter inline-flex items-center">
            DG<span className="w-1 h-6 bg-thr ml-1"></span>
          </Link>
        </MagneticButton>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 mr-4">
            {links.filter(link => link.name !== "Contact").map((link) => (
              <MagneticButton key={link.name}>
                <Link to={link.href} className="text-sm font-bold hover:text-thr transition-colors">
                  {link.name}
                </Link>
              </MagneticButton>
            ))}
          </div>
          <MotionButton label="Book a Call" href={contact.calendly} classes="scale-90" />
        </div>

        <div className="flex items-center gap-4 md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed top-6 right-8 z-50"
          >
            <MagneticButton>
              <button onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 rounded-full bg-sec text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-sec text-white z-[100] flex flex-col justify-between p-8 md:p-12 lg:p-16"
          >
            <div className="flex justify-between items-start w-full">
              <div className="text-3xl font-black tracking-tighter">DG</div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:rotate-90 transition-transform duration-300">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto flex-grow my-12 gap-12">
              <div className="flex flex-col gap-6 w-full md:w-1/2">
                {links.map((link, i) => (
                  <motion.div key={link.name} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
                    {link.href.startsWith("#") ? (
                      <a href={link.href} onClick={() => setIsOpen(false)} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter hover:text-sky-300 transition-colors flex justify-between items-center group">
                        {link.name}<span className="text-2xl md:text-4xl font-light opacity-50">+</span>
                      </a>
                    ) : (
                      <Link to={link.href} onClick={() => setIsOpen(false)} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter hover:text-sky-300 transition-colors flex justify-between items-center group">
                        {link.name}<span className="text-2xl md:text-4xl font-light opacity-50">+</span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="w-full md:w-1/2 flex-col items-end text-right hidden md:flex">
                <div className="rounded-3xl bg-white/10 border border-white/10 p-8 max-w-md">
                  <h3 className="text-2xl font-black mb-3">David Grateful</h3>
                  <p className="text-white/65 leading-relaxed">
                    Project Manager & Social Media Manager for Web3, gaming, NFTs, RWAs, wallets, Base, Solana, and community-led brands.
                  </p>
                  <a href={contact.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 text-sky-300 text-xs font-black uppercase tracking-[0.18em]">
                    Book a Call
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-between items-end w-full text-xs text-white/40 uppercase tracking-widest font-medium">
              <div>Built for Web3 growth</div>
              <div>2026</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}