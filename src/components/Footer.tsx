import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import { contact } from "../data/davidPortfolio";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Brands", href: "/works" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Notes", href: "/blog" },
  ];

  return (
    <footer id="contact" className="relative bg-sec text-white pt-24 pb-8 overflow-hidden min-h-[70vh] flex flex-col justify-between">
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex-grow flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-16">
          <div>
            <p className="text-sky-300 text-[11px] font-black uppercase tracking-[0.35em] mb-5">Contact</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none max-w-3xl">
              Let's build visibility, structure, and community growth.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-6">Links</h4>
              <ul className="space-y-3 font-medium text-sm">
                {links.map((link) => (
                  <li key={link.name}>
                    <MagneticButton>
                      <Link to={link.href} className="text-white/85 hover:text-sky-300 transition-colors inline-block">
                        {link.name}
                      </Link>
                    </MagneticButton>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-6">Socials</h4>
              <ul className="space-y-3 font-medium text-sm">
                <li><MagneticButton><a href={`mailto:${contact.email}`} className="text-white/85 hover:text-sky-300 transition-colors inline-block">Email</a></MagneticButton></li>
                <li><MagneticButton><a href={contact.x} target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-sky-300 transition-colors inline-block">X / Twitter</a></MagneticButton></li>
                <li><MagneticButton><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-sky-300 transition-colors inline-block">WhatsApp</a></MagneticButton></li>
                <li><MagneticButton><a href={contact.calendly} target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-sky-300 transition-colors inline-block">Calendly</a></MagneticButton></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-6">Local Time</h4>
              <p className="text-white/85 font-medium text-sm uppercase">{time}</p>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-6">Direct</h4>
              <p className="text-white/85 font-medium text-sm">{contact.email}</p>
              <p className="text-white/60 font-medium text-sm mt-2">{contact.phone}</p>
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32 w-full flex justify-center items-end pointer-events-none">
          <h1 className="text-[22vw] leading-[0.75] font-black tracking-tighter text-white/95 text-center w-full">
            DAVID
          </h1>
        </div>
      </div>
    </footer>
  );
}