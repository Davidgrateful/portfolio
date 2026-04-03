import { useEffect, useRef, ReactNode } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle2, Trophy, Rocket, Building } from "lucide-react";
import { FadeIn, RevealLine } from "../components/Animations";
import { eventsData } from "./Events";
import { useInView } from "motion/react";

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

export default function EventDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the event by slug
  const event = eventsData.find(e => e.slug === slug);

  useEffect(() => {
    if (event) {
      document.title = `${event.title} | Fredy Omoke`;
    }
    window.scrollTo(0, 0);

    return () => {
      // Revert to baseline light theme globally when leaving
      document.documentElement.style.setProperty('--color-main', '#e7e7e7');
      document.documentElement.style.setProperty('--color-sec', '#1e1e1e');
      document.body.style.backgroundColor = '#e7e7e7';
      document.body.style.color = '#1e1e1e';
    };
  }, [event]);

  // If event not found, redirect to events page
  useEffect(() => {
    if (!event) {
      navigate('/events');
    }
  }, [event, navigate]);

  if (!event) return null;

  // Mock gallery images
  const gallery = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
  ];

  // Mock impacts
  const impactMetrics = [
    { label: "Total Attendees", value: "250+ Devs", icon: <Users className="w-6 h-6" /> },
    { label: "Bounties Awarded", value: "$50k+ in Prizes", icon: <Trophy className="w-6 h-6" /> },
    { label: "Projects Shipped", value: "42 MVPs Built", icon: <Rocket className="w-6 h-6" /> },
    { label: "Sponsors", value: "12 Ecosystem Partners", icon: <Building className="w-6 h-6" /> },
  ];

  // Mock highlights
  const highlights = [
    "Mentored 15+ teams building decentralized applications",
    "Hosted 3 technical workshops on smart contract security",
    "Judged final pitches alongside industry leaders",
    "Facilitated networking sessions for over 150 builders"
  ];

  return (
    <main className="min-h-screen pb-24 transition-colors duration-700">
      
      {/* Block 1: White Header Theme */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="w-full">
        {/* Hero Section */}
        <div className="relative h-[70vh] min-h-[600px] w-full flex items-end pb-24 px-6 md:px-12 lg:px-24 mb-24">
          <div className="absolute inset-0 z-0">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* White gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#e7e7e7] via-[#e7e7e7]/80 to-transparent" />
          </div>

          <div className="relative z-10 w-full px-6 md:px-12 lg:px-24">
            <Link 
              to="/events" 
              className="inline-flex items-center gap-2 text-[#1e1e1e]/70 hover:text-[#1e1e1e] transition-colors mb-8 font-bold uppercase tracking-widest text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Events
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {event.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-[#1e1e1e]/10 backdrop-blur-md text-[#1e1e1e] text-xs font-bold uppercase tracking-widest rounded-full border border-[#1e1e1e]/20">
                  {tag}
                </span>
              ))}
            </div>

            <RevealLine>
              <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter uppercase mb-8 text-[#1e1e1e] leading-none">
                {event.title}
              </h1>
            </RevealLine>

            <FadeIn delay={0.2}>
              <div className="flex flex-wrap items-center gap-6 md:gap-12 text-sm md:text-base font-bold uppercase tracking-widest text-[#1e1e1e]/80">
                <span className="flex items-center gap-2 filter grayscale brightness-0 opacity-50"><Calendar className="w-5 h-5" /> {event.date}</span>
                <span className="flex items-center gap-2 filter grayscale brightness-0 opacity-50"><MapPin className="w-5 h-5" /> {event.location}</span>
                <span className="flex items-center gap-2 filter grayscale brightness-0 opacity-50"><Users className="w-5 h-5" /> {event.turnout}</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </ThemeSection>

      {/* Block 2: Dark Content Theme */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full pt-32 pb-32 px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16">
              <FadeIn>
                <h2 className="text-3xl font-bold tracking-tighter uppercase mb-6 text-sec">Event Overview</h2>
                <p className="text-xl text-sec/70 leading-relaxed">
                  {event.description}
                  <br /><br />
                  This event brought together some of the brightest minds in the ecosystem to collaborate, build, and share knowledge. The energy was incredible, and the projects that came out of it were nothing short of groundbreaking.
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="text-3xl font-bold tracking-tighter uppercase mb-8 text-sec">Impact Metrics</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                  {impactMetrics.map((metric, idx) => (
                    <div key={idx} className="p-6 bg-sec/5 rounded-2xl border border-sec/10 flex flex-col items-center text-center">
                      <div className="text-[#d4f534] mb-4">
                        {metric.icon}
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-sec mb-1 tracking-tighter">{metric.value}</p>
                      <p className="text-[10px] uppercase tracking-widest text-sec/40 font-bold">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold tracking-tighter uppercase mb-8 text-sec">Key Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-sec/5 rounded-2xl border border-sec/10">
                      <CheckCircle2 className="w-6 h-6 text-[#d4f534] shrink-0" />
                      <p className="text-sec/90 leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <FadeIn delay={0.2}>
                <div className="p-8 bg-sec/5 rounded-3xl border border-sec/10 sticky top-32">
                  <h3 className="text-xl font-bold tracking-tighter uppercase mb-6 border-b border-sec/10 pb-4 text-sec">Event Details</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-sec/40 mb-1">My Role</p>
                      <p className="text-lg font-medium text-sec">{event.role}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-sec/40 mb-1">Date</p>
                      <p className="text-lg font-medium text-sec">{event.date}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-sec/40 mb-1">Location</p>
                      <p className="text-lg font-medium text-sec">{event.location}</p>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-sec/10">
                      <p className="text-sm italic text-sec/70 mb-4">
                        "An incredible experience building with the community. The talent and dedication here was unmatched."
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Picture Gallery moved inside this Block 2 to keep it dark */}
          <div className="mt-48">
            <RevealLine>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-20 text-sec">
                Visual Evidence
              </h2>
            </RevealLine>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((img, idx) => (
                <FadeIn key={idx} delay={0.1 * idx}>
                  <div className={`relative overflow-hidden rounded-2xl group ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-2 aspect-[21/9]' : 'aspect-square'} border border-sec/5`}>
                    <div className="absolute inset-0 bg-[#d4f534]/5 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={img} 
                      alt={`Gallery image ${idx + 1}`} 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
      </ThemeSection>

      {/* Block 3: Volt Energy Theme for CTA */}
      <ThemeSection mainColor="#d4f534" secColor="#1e1e1e" className="w-full pt-48 pb-48 px-6 md:px-12 lg:px-24">
        {/* CTA */}
        <FadeIn delay={0.1}>
          <div className="text-center">
            <RevealLine>
              <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter uppercase text-sec mb-12 leading-[0.8]">
                WANT ME AT <br className="hidden md:block"/> YOUR NEXT EVENT?
              </h2>
            </RevealLine>
            <p className="text-xl md:text-2xl text-sec/70 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
              Whether it's a hackathon, panel, or keynote, I'm always open to collaborating with communities pushing the boundaries of tech.
            </p>
            <Link to="https://wa.me/2347039662696" target="_blank" className="inline-block group">
              <div className="px-12 py-6 bg-sec text-main rounded-full font-black uppercase tracking-widest text-base shadow-2xl group-hover:scale-105 transition-all duration-300">
                Get in Touch
              </div>
            </Link>
          </div>
        </FadeIn>
      </ThemeSection>

    </main>
  );
}
