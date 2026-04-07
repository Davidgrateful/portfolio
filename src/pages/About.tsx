import { useEffect, useRef, ReactNode } from "react";
import { useInView, motion } from "motion/react";
import { RevealLine, FadeIn } from "../components/Animations";
import MagneticButton from "../components/MagneticButton";
import { ArrowUpRight } from "lucide-react";
import { useConfig } from "../context/ConfigContext";
import MotionButton from "../components/ui/motion-button";

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

export default function About() {
  const { config } = useConfig();
  // Reset theme on unmount
  useEffect(() => {
    return () => {
      document.documentElement.style.setProperty('--color-main', '#e7e7e7');
      document.documentElement.style.setProperty('--color-sec', '#1e1e1e');
      document.body.style.backgroundColor = '#e7e7e7';
      document.body.style.color = '#1e1e1e';
    };
  }, []);

  return (
    <main className="min-h-screen transition-colors duration-700 overflow-hidden">
      
      {/* Intro Section */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="w-full pt-40 pb-20 px-6 md:px-12 lg:px-24">
        <div className="w-full flex flex-col md:flex-row gap-8 justify-between relative">
          <div className="pt-12 pb-7">
            <RevealLine>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight text-sec mb-8">
                About Me
              </h1>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-full lg:max-w-4xl xl:max-w-5xl text-sec/80 font-medium">
                I'm a full-stack developer who enjoys building things that genuinely make life easier for users and businesses. Most of my work sits at the intersection of AI, SaaS, and interactive 3D experiences. I like taking ideas from the first concept all the way to a polished product—whether that means designing a clean React interface or structuring reliable backend microservices. I focus heavily on real results. In past projects, I've helped cut AI response times by about 40% and built automations that removed nearly 80% of the manual work for teams. My goal is always the same: create fast, scalable, and meaningful tools that people actually enjoy using.
              </p>
            </FadeIn>
          </div>
        </div>
      </ThemeSection>

      {/* Marquee Break */}
      <div className="w-full overflow-hidden bg-main text-sec py-8 md:py-16 relative z-20 border-y border-transparent">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {Array(8).fill(config.marquees.about).map((text, i) => (
            <span key={i} className="text-3xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase pr-10 md:pr-24">
              <span className="text-[#d4f534]">✦</span> {text.replace(/✦/g, '').trim()} <span className="text-[#d4f534]">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Detailed Text & Image Section */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full py-32 px-6 md:px-12 lg:px-24">
        <div className="w-full flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-8 text-lg md:text-xl text-sec/80 leading-relaxed justify-center">
            <FadeIn delay={0.3}>
              <p>
                I'm a Full-Stack Developer who bridges the gap between cutting-edge technology and exceptional user experience. With proven experience building AI-powered SaaS platforms, 3D virtual tour systems, and enterprise-grade applications, I specialize in solving complex technical challenges while delivering intuitive, visually stunning interfaces.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p>
                My approach combines strategic architecture with hands-on development—whether it's implementing Retrieval-Augmented Generation (RAG) systems, optimizing WebGL rendering for 3D experiences, or architecting type-safe monorepo setups with tRPC. I've worked across diverse industries from PropTech to FinTech, consistently delivering production-ready solutions that scale.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p>
                What sets me apart is my ability to work across the entire stack: designing systems in Node.js, building dynamic React frontends, integrating AI capabilities, and deploying Dockerized microservices with CI/CD pipelines. I don't just write code—I architect solutions that drive measurable business outcomes.
              </p>
            </FadeIn>
          </div>
          <div className="relative overflow-hidden h-[60vh] md:h-[80vh] w-full md:w-1/2 rounded-2xl">
            <FadeIn delay={0.6} className="w-full h-full">
              <img 
                src="/assets/fredy_omoke.jpg" 
                alt="About Me" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105"
                referrerPolicy="no-referrer"
              />
            </FadeIn>
          </div>
        </div>
      </ThemeSection>

      {/* Skills Section */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {[
            {
              skill: "Full-Stack Architecture",
              p: "I architect end-to-end solutions using modern tech stacks—from Node.js backends with PostgreSQL/MongoDB to React and Next.js frontends. Whether building multi-tenant SaaS platforms, real-time dashboards with WebSockets, or RESTful APIs with tRPC, I ensure type-safe, scalable architecture that supports rapid growth and seamless deployment."
            },
            {
              skill: "AI & Advanced Integration",
              p: "I specialize in integrating AI capabilities that deliver real value—implementing RAG systems with vector embeddings, building LangChain workflows, and connecting OpenAI APIs for intelligent automation. Beyond AI, I excel at complex integrations: Stripe/PayPal payment processing, Auth0 authentication, real-time Firebase notifications, and third-party API orchestration that powers sophisticated business logic."
            },
            {
              skill: "3D & Interactive Experiences",
              p: "I create immersive web experiences using Three.js, React Three Fiber, and advanced techniques like Gaussian Splatting. From interactive 3D virtual tours to shader-based animations with GSAP, I transform standard websites into engaging, memorable digital experiences. I optimize WebGL performance for cross-device compatibility while maintaining stunning visual fidelity that makes brands stand out."
            }
          ].map((item, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1} className="flex flex-col">
              <div className="flex flex-col gap-4 mb-6">
                <span className="text-sec/50 text-sm">0{index + 1}</span>
                <div className="w-full h-[1px] bg-sec/20"></div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-sec mb-4">
                {item.skill}
              </h3>
              <p className="text-base text-sec/60 leading-relaxed">
                {item.p}
              </p>
            </FadeIn>
          ))}
        </div>
      </ThemeSection>

      {/* Stats Section */}
      <ThemeSection mainColor="#d4f534" secColor="#1e1e1e" className="w-full pt-16 pb-32 px-6 md:px-12 lg:px-24">
        <div className="w-full">
          <div className="text-center mb-16">
            <RevealLine>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-sec mb-4">
                Proven Impact
              </h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-sec/60 max-w-3xl mx-auto">
                Throughout my career, I've delivered measurable results that matter
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "40%",
                label: "Performance Improvement",
                description: "Reduced AI response latency through optimized RAG retrieval and concurrency patterns"
              },
              {
                number: "80%",
                label: "Workflow Automation",
                description: "Decreased manual lead processing time with background job automation"
              },
              {
                number: "10+",
                label: "Production Applications",
                description: "Successfully deployed and maintained across various industries"
              },
              {
                number: "100%",
                label: "Type-Safe Architecture",
                description: "End-to-end type safety with TypeScript, tRPC, and modern tooling"
              }
            ].map((stat, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1} className="h-full">
                <div className="bg-sec text-main p-8 md:p-10 rounded-2xl h-full flex flex-col">
                  <div className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
                    {stat.number}
                  </div>
                  <div className="text-lg md:text-xl font-bold mb-4">
                    {stat.label}
                  </div>
                  <div className="text-sm text-main/60 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </ThemeSection>

      {/* Tech Arsenal Section */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full py-32 px-6 md:px-12 lg:px-24">
        <div className="w-full">
          <div className="text-center mb-16">
            <RevealLine>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-sec mb-4">
                Technology Arsenal
              </h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-sec/70 max-w-3xl mx-auto">
                A comprehensive toolkit for building modern, scalable applications
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                category: "Languages & Frameworks",
                techs: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express.js", "Fastify"]
              },
              {
                category: "AI & Machine Learning",
                techs: ["OpenAI API", "LangChain", "RAG", "Google Generative AI", "Vector Embeddings"]
              },
              {
                category: "3D & Graphics",
                techs: ["Three.js", "React Three Fiber", "WebGL", "Gaussian Splatting", "GSAP", "Framer Motion"]
              },
              {
                category: "Databases & State",
                techs: ["PostgreSQL", "MongoDB", "Prisma", "Drizzle ORM", "Redis", "React Query", "Zustand"]
              },
              {
                category: "DevOps & Cloud",
                techs: ["Docker", "CI/CD", "Google Cloud Platform", "Vercel", "VPS", "Nginx", "Caddy", "PM2"]
              },
              {
                category: "UI & Styling",
                techs: ["Tailwind CSS", "ShadCN UI", "Radix UI", "MUI", "Framer Motion"]
              },
              {
                category: "Web3 & Blockchain",
                techs: ["Solidity", "Smart Contracts", "Ethers.js", "Web3.js", "Hardhat", "IPFS"]
              }
            ].map((category, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1} className="flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight mb-6 text-sec">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.techs.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-sec/10 text-sec rounded-full text-sm font-medium hover:bg-sec hover:text-main transition-colors duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </ThemeSection>

      {/* CTA Section & Marquees */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="w-full pt-32 pb-0 overflow-hidden">
        <div className="w-full px-6 md:px-12 lg:px-24 mb-10">
          <FadeIn>
            <div className="bg-sec text-main py-16 px-8 md:py-20 md:px-16 rounded-3xl text-center max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
                Ready to Build Something Exceptional?
              </h2>
              <p className="text-base md:text-lg text-main/70 max-w-3xl mx-auto leading-relaxed mb-10">
                Whether you need an AI-powered SaaS platform, an immersive 3D experience, or a high-performance web application, I bring the technical expertise and creative vision to make it happen. Let's discuss how we can turn your ambitious ideas into production-ready solutions that drive real business results.
              </p>
              <div className="flex justify-center">
                <MotionButton 
                  label={config.cta.label} 
                  href={config.cta.link}
                />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Criss-Cross Marquees */}
        <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center mt-10">
          {/* Marquee 1 (Bottom/Behind) */}
          <div className="absolute w-[110%] bg-[#1e1e1e] text-[#e7e7e7] py-4 md:py-6 transform -rotate-3 z-0 flex overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap items-center"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {Array(4).fill("Driven by Passion, Built with Code ✺ Custom Web Experiences ✺ Innovative Self-Made Creations ✺ Tailored Web Development Solutions ✺ ").map((text, i) => (
                <span key={i} className="text-2xl md:text-4xl font-bold tracking-wide pr-4">
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Marquee 2 (Top/Front) */}
          <div className="absolute w-[110%] bg-[#1e1e1e] text-[#e7e7e7] py-4 md:py-6 transform rotate-3 z-10 flex overflow-hidden shadow-2xl border-y border-white/10">
            <motion.div
              className="flex whitespace-nowrap items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {Array(4).fill("Driven by Passion, Built with Code ✺ Custom Web Experiences ✺ Innovative Self-Made Creations ✺ Tailored Web Development Solutions ✺ ").map((text, i) => (
                <span key={i} className="text-2xl md:text-4xl font-bold tracking-wide pr-4">
                  {text}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </ThemeSection>

    </main>
  );
}
