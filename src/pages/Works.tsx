import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { RevealLine, FadeIn } from "../components/Animations";
import { ArrowUpRight, Grid } from "lucide-react";
import { allProjects } from "../data/portfolio";
import FlowingMenu from "../components/FlowingMenu";

export default function Works() {
  const [view, setView] = useState<"grid" | "flowing">("flowing");

  // Filter projects for Web2 (non-Web3)
  const web2Projects = allProjects.filter(p => !p.isWeb3);

  const flowingItems = web2Projects.map(p => ({
    link: `/project/${p.slug}`,
    text: p.title,
    image: p.heroImage
  }));

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-16 xl:px-24 bg-main text-sec min-h-screen">
      <div className="w-full">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <RevealLine>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">
                My Work
              </h1>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-sec/70 max-w-3xl font-medium">
                Discover my latest projects where design, technology, and creativity come together to craft engaging digital experiences. Below is a collection of my favourites.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="flex items-center gap-2 bg-sec/5 p-1 rounded-full border border-sec/10 self-start md:self-auto shrink-0">
            <button 
              onClick={() => setView('grid')}
              className={`p-3 rounded-full transition-all duration-300 ${view === 'grid' ? 'bg-sec text-main shadow-md' : 'text-sec/50 hover:text-sec'}`}
              aria-label="Grid View"
            >
              <Grid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setView('flowing')}
              className={`px-4 py-3 rounded-full transition-all duration-300 font-medium text-sm hidden sm:block ${view === 'flowing' ? 'bg-sec text-main shadow-md' : 'text-sec/50 hover:text-sec'}`}
              aria-label="Interactive View"
            >
              Interactive
            </button>
          </FadeIn>
        </div>

        {view === "flowing" ? (
          <FadeIn delay={0.4}>
            <FlowingMenu items={flowingItems} />
          </FadeIn>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {web2Projects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.1}>
                <Link to={`/project/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-sec/10">
                    <img 
                      src={project.heroImage} 
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-sec/70 transition-colors uppercase">
                        {project.title}
                      </h3>
                      <p className="text-sec/50 text-sm uppercase tracking-wider font-bold">
                        {project.category}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-sec/20 flex items-center justify-center group-hover:bg-sec group-hover:text-main transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
