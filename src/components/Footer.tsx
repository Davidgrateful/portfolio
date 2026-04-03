import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  const [time, setTime] = useState("");
  const [scrollHue, setScrollHue] = useState(75);
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project');
  
  const web3ProjectSlugs = ["harapay", "arcle", "ai-sales-inbox"];
  const isWeb3 = location.pathname.startsWith("/web3") || 
                 (location.pathname.startsWith("/project/") && web3ProjectSlugs.some(slug => location.pathname.includes(slug)));

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

  useEffect(() => {
    if (!isProjectPage) return;
    const handleScroll = () => {
      // Base hue is 75 (lime green). We add scrollY * 0.1 to slowly cycle through colors
      setScrollHue((75 + window.scrollY * 0.1) % 360);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProjectPage]);

  const bgClass = isProjectPage ? "text-sec" : "bg-[#1e1e1e] text-[#e7e7e7]";
  const footerStyle = isProjectPage ? { backgroundColor: `hsl(${scrollHue}, 85%, 60%)` } : {};
  const textMutedClass = isProjectPage ? "text-sec/40" : "text-[#e7e7e7]/40";
  const textNormalClass = isProjectPage ? "text-sec/90" : "text-[#e7e7e7]/90";
  const hoverClass = isProjectPage ? "hover:text-sec" : "hover:text-[#d4f534]";
  const dotClass = isProjectPage ? "bg-sec shadow-[0_0_15px_rgba(30,30,30,0.5)]" : "bg-[#d4f534] shadow-[0_0_15px_rgba(212,245,52,0.5)]";
  const pillClass = isProjectPage ? "border-sec/20 text-sec/90 hover:bg-sec hover:text-main" : "border-[#e7e7e7]/20 text-[#e7e7e7]/90 hover:bg-[#e7e7e7] hover:text-[#1e1e1e]";
  const massiveTextClass = isProjectPage ? "text-sec" : "text-[#e7e7e7]";

  return (
    <footer 
      className={`relative ${bgClass} pt-24 pb-8 overflow-hidden min-h-[80vh] flex flex-col justify-between transition-colors duration-300`}
      style={footerStyle}
    >
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex-grow flex flex-col justify-between">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-16 lg:gap-12">
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row gap-x-8 gap-y-12 md:gap-8 lg:gap-12 xl:gap-24 w-full lg:w-auto">
            {/* Links */}
            <div className="min-w-[100px]">
              <h4 className={`text-[10px] uppercase tracking-[0.2em] ${textMutedClass} font-bold mb-6`}>Links</h4>
              <ul className="space-y-3 font-medium text-sm">
                <li><MagneticButton><Link to={isWeb3 ? "/web3" : "/"} className={`${textNormalClass} ${hoverClass} transition-colors inline-block`}>Home</Link></MagneticButton></li>
                <li><MagneticButton><Link to={isWeb3 ? "/web3-works" : "/works"} className={`${textNormalClass} ${hoverClass} transition-colors inline-block`}>Work</Link></MagneticButton></li>
                <li><MagneticButton><Link to={isWeb3 ? "/web3-about" : "/about"} className={`${textNormalClass} ${hoverClass} transition-colors inline-block`}>About</Link></MagneticButton></li>
                <li><MagneticButton><a href="https://wa.me/2347039662696" target="_blank" rel="noopener noreferrer" className={`${textNormalClass} ${hoverClass} transition-colors inline-block`}>Contact</a></MagneticButton></li>
              </ul>
            </div>

            {/* Green Dot */}
            <div className="hidden lg:flex items-center justify-center pt-8">
              <div className={`w-3 h-3 rounded-full ${dotClass}`}></div>
            </div>

            {/* Socials */}
            <div className="min-w-[100px]">
              <h4 className={`text-[10px] uppercase tracking-[0.2em] ${textMutedClass} font-bold mb-6`}>Socials</h4>
              <ul className="space-y-3 font-medium text-sm">
                <li><MagneticButton><a href="mailto:fredyomoke@gmail.com" className={`${textNormalClass} ${hoverClass} transition-colors inline-block`}>Email</a></MagneticButton></li>
                <li><MagneticButton><a href="https://www.linkedin.com/in/fredyomoke/" target="_blank" rel="noopener noreferrer" className={`${textNormalClass} ${hoverClass} transition-colors inline-block`}>LinkedIn</a></MagneticButton></li>
                <li><MagneticButton><a href="https://wa.me/2347039662696" target="_blank" rel="noopener noreferrer" className={`${textNormalClass} ${hoverClass} transition-colors inline-block`}>Whatsapp</a></MagneticButton></li>
                <li><MagneticButton><a href="https://github.com/omokeify" target="_blank" rel="noopener noreferrer" className={`${textNormalClass} ${hoverClass} transition-colors inline-block`}>Github</a></MagneticButton></li>
              </ul>
            </div>
                    {/* Local Time */}
            <div className="min-w-[120px]">
              <h4 className={`text-[10px] uppercase tracking-[0.2em] ${textMutedClass} font-bold mb-6`}>Local Time</h4>
              <p className={`${textNormalClass} font-medium text-sm uppercase`}>{time}</p>
            </div>

            {/* Version */}
            <div className="min-w-[120px]">
              <h4 className={`text-[10px] uppercase tracking-[0.2em] ${textMutedClass} font-bold mb-6`}>Version</h4>
              <p className={`${textNormalClass} font-medium text-sm uppercase`}>2026 © Edition</p>
            </div>
          </div>

          {/* Contact Pills */}
          <div className="flex flex-col sm:flex-row gap-4 items-start lg:items-center">
            <MagneticButton>
              <a href="tel:+2347039662696" className={`px-6 py-2.5 rounded-full border ${pillClass} transition-all text-xs font-medium tracking-wide whitespace-nowrap`}>
                +2347039662696
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="mailto:fredyomoke@gmail.com" className={`px-6 py-2.5 rounded-full border ${pillClass} transition-all text-xs font-medium tracking-wide whitespace-nowrap`}>
                fredyomoke@gmail.com
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom Massive Text */}
        <div className="mt-24 md:mt-32 w-full flex justify-center items-end pointer-events-none">
          <h1 className={`text-[25vw] md:text-[22vw] leading-[0.75] font-bold tracking-tighter ${massiveTextClass} text-center w-full`}>
            FREDY
          </h1>
        </div>
      </div>
    </footer>
  );
}
