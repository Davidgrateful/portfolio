import { useEffect, useRef, ReactNode } from "react";
import { FadeIn, RevealLine } from "../components/Animations";
import { Calendar, MapPin, Users } from "lucide-react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";

interface ThemeSectionProps {
  mainColor: string;
  secColor: string;
  children: ReactNode;
  className?: string;
}

function ThemeSection({ mainColor, secColor, children, className = "" }: ThemeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      document.documentElement.style.setProperty('--color-main', mainColor);
      document.documentElement.style.setProperty('--color-sec', secColor);
      document.body.style.backgroundColor = mainColor;
      document.body.style.color = secColor;
    }
  }, [isInView, mainColor, secColor]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Exported mock data for events
export const eventsData = [
  {
    id: 1,
    slug: "eth-global-hacker-house",
    title: "ETH Global Hacker House",
    location: "Lagos, Nigeria",
    date: "October 2024",
    attendees: "150+ Builders",
    turnout: "150+ Builders",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop",
    tags: ["Ethereum", "Mentorship", "Hackathon"],
    role: "Host & Technical Mentor",
    description: "Organized a 3-day intensive hacker house for Web3 developers building on Ethereum. Provided technical mentorship on smart contract security and scalable dApp architectures.",
  },
  {
    id: 2,
    slug: "solana-crossroads-mixer",
    title: "Solana Crossroads Mixer",
    location: "Abuja, Nigeria",
    date: "August 2024",
    attendees: "300+ Attendees",
    turnout: "300+ Attendees",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop",
    tags: ["Solana", "Networking", "Panel"],
    role: "Lead Organizer",
    description: "A premier networking event bringing together Solana developers, founders, and investors. Facilitated panel discussions on the future of high-throughput blockchains.",
  },
  {
    id: 3,
    slug: "web3-builders-breakfast",
    title: "Web3 Builders Breakfast",
    location: "London, UK",
    date: "January 2025",
    attendees: "50+ Founders",
    turnout: "50+ Founders",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop",
    tags: ["Founders", "Pitch", "Breakfast"],
    role: "Co-Host",
    description: "An intimate gathering of Web3 startup founders and angel investors to discuss market trends and pitch early-stage ideas over breakfast.",
  },
  {
    id: 4,
    slug: "defi-security-summit",
    title: "DeFi Security Summit",
    location: "Online",
    date: "March 2025",
    attendees: "5000+ Viewers",
    turnout: "5000+ Viewers",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2000&auto=format&fit=crop",
    tags: ["DeFi", "Security", "Virtual"],
    role: "Keynote Speaker",
    description: "A global virtual summit focusing on decentralized finance vulnerabilities, auditing practices, and smart contract safety standards.",
  }
];

export default function Events() {
  useEffect(() => {
    document.title = "Events | Fredy Omoke";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen transition-colors duration-700 w-full">
      
      {/* Block 1: Dark Header */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full">
        <div className="pt-40 pb-12 px-6 md:px-12 lg:px-16 xl:px-24 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
            <div className="lg:w-2/3">
              <RevealLine>
                <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-none mb-4 text-sec uppercase">
                  IRL EVENTS
                </h1>
              </RevealLine>
            </div>
            <div className="lg:w-1/3 text-left lg:text-right">
              <FadeIn delay={0.2}>
                <p className="text-xl md:text-2xl text-sec/80 mb-2 font-medium">
                  Building the ecosystem offline.
                </p>
                <p className="text-xl md:text-2xl text-sec/50 italic">
                  A visual logbook of gatherings.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Full Width Header Image */}
        <div className="w-full h-[60vh] md:h-[80vh] relative mb-24">
          <img 
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2000&auto=format&fit=crop" 
            alt="Hackathon crowd" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1e1e1e]/20 mix-blend-overlay pointer-events-none" />
        </div>
      </ThemeSection>

      {/* Block 2: Light White Grid Theme */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="w-full pb-32">
        {/* Auto Scrolling Marquee */}
        <div className="w-full overflow-hidden mb-32 bg-[#1e1e1e] text-[#d4f534] py-6 -rotate-2 border-y border-[#d4f534]/20">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          >
            {Array(8).fill("✦ BLOCKCHAIN ✦ HACKATHONS ✦ MEETUPS ").map((text, i) => (
              <span key={i} className="text-3xl md:text-5xl font-black tracking-tighter uppercase pr-8">
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Grid List */}
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {eventsData.map((event, index) => (
              <FadeIn key={event.id} delay={0.1 * index} className="w-full">
                <Link to={`/events/${event.slug}`} className="group block">
                  <div className="w-full">
                    {/* Image Card top */}
                    <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden relative mb-8">
                      {/* Inside image Tags overlay */}
                      <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                        {event.tags.map(tag => (
                          <span key={tag} className="bg-black/60 backdrop-blur-md text-white/90 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Image itself */}
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700" 
                      />
                    </div>

                    {/* Content underneath */}
                    <div className="px-2">
                      <h3 className="text-3xl lg:text-4xl font-bold uppercase mb-4 text-sec tracking-tighter group-hover:text-[#d4f534] transition-colors">
                        {event.title}
                      </h3>
                      
                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-6 text-sec/50 text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-8">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> {event.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" /> {event.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4" /> {event.attendees}
                        </span>
                      </div>

                      <div className="border-t border-sec/10 pt-6">
                        <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold text-sec/40 mb-3">
                          ROLE: {event.role}
                        </p>
                        <p className="text-base sm:text-lg text-sec/80 leading-relaxed font-medium">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </ThemeSection>

    </main>
  );
}
