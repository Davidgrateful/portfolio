import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import DashboardLayout from "./DashboardLayout";
import { 
  Search, 
  Plus, 
  Filter, 
  MoreVertical, 
  Edit3, 
  Trash2, 
  ExternalLink, 
  Layers,
  Globe,
  Zap,
  CheckCircle2,
  X
} from "lucide-react";
import { allProjects, Project } from "../../data/portfolio";
import { RevealLine, FadeIn } from "../../components/Animations";
import MagneticButton from "../../components/MagneticButton";

export default function DashboardProjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const filteredProjects = allProjects.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "All" || p.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-[#1e1e1e] pb-20">
          <div>
            <RevealLine>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
                PROJECTS<span className="text-[#d4f534]">.HUB</span>
              </h1>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-[#e7e7e7]/40 font-black tracking-[0.4em] uppercase text-[10px] ml-1">
                ENGINEERING • GROWTH • EVENTS • {filteredProjects.length} RECORDS
              </p>
            </FadeIn>
          </div>
          
          <MagneticButton>
            <button 
              onClick={() => { setEditingProject(null); setIsModalOpen(true); }}
              className="px-10 py-5 bg-[#d4f534] text-[#1e1e1e] rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-[0_10px_30px_rgba(212,245,52,0.1)]"
            >
              <Plus className="w-4 h-4" strokeWidth={3} /> Add New Entry
            </button>
          </MagneticButton>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#d4f534] transition-colors" />
            <input 
              type="text" 
              placeholder="SEARCH CATALOGUE..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#1e1e1e] border border-white/5 rounded-full py-4 pl-14 pr-8 text-[10px] font-black tracking-widest focus:outline-none focus:border-[#d4f534]/30 focus:bg-white/5 transition-all uppercase placeholder:text-white/10"
            />
          </div>

          <div className="flex gap-4">
            {["All", "Engineering", "Growth", "Events"].map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all border ${
                  filterType === t 
                    ? "bg-[#d4f534] text-[#1e1e1e] border-[#d4f534]" 
                    : "border-white/5 text-white/30 hover:text-white hover:border-white/20"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div 
                key={project.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-[#1e1e1e] p-8 rounded-[2rem] border border-white/5 hover:border-[#d4f534]/20 transition-all duration-500 flex flex-col md:flex-row md:items-center gap-10"
              >
                {/* Thumbnail */}
                <div className="w-full md:w-48 aspect-video md:aspect-square rounded-2xl overflow-hidden bg-black/20 shrink-0">
                  <img src={project.heroImage} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                </div>

                {/* Info */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest border border-white/10 ${project.isWeb3 ? 'text-[#d4f534] border-[#d4f534]/20' : 'text-blue-400 border-blue-400/20'}`}>
                      {project.isWeb3 ? 'WEBNODE 3.0' : 'ARCHITECTURE'}
                    </span>
                    <span className="text-white/20 text-[9px] font-bold tracking-[0.2em] uppercase">.{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tighter uppercase text-[#e7e7e7] group-hover:text-[#d4f534] transition-colors">{project.title}</h3>
                  <p className="text-[#e7e7e7]/40 text-xs font-medium line-clamp-1 max-w-2xl">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[8px] font-black uppercase tracking-widest text-white/20 border border-white/5 px-3 py-1 rounded-md">{tech}</span>
                    ))}
                    {project.techStack.length > 3 && <span className="text-[8px] font-black uppercase tracking-widest text-white/10">+{project.techStack.length - 3} MORE</span>}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex md:flex-col gap-2 shrink-0">
                  <MagneticButton>
                    <button 
                      onClick={() => handleEdit(project)}
                      className="p-4 rounded-2xl bg-white/5 hover:bg-[#d4f534] hover:text-[#1e1e1e] transition-all duration-500"
                    >
                      <Edit3 className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                  </MagneticButton>
                  <MagneticButton>
                    <button className="p-4 rounded-2xl bg-white/5 hover:bg-red-500/20 hover:text-red-500 transition-all duration-500">
                      <Trash2 className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                  </MagneticButton>
                  <MagneticButton>
                    <a href={`/project/${project.slug}`} target="_blank" className="p-4 rounded-2xl bg-white/5 hover:bg-blue-500/20 hover:text-blue-500 transition-all duration-500 block">
                      <ExternalLink className="w-5 h-5" strokeWidth={2.5} />
                    </a>
                  </MagneticButton>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Editor Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-end p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="w-full max-w-3xl h-full bg-[#1e1e1e] border-l border-white/5 p-12 relative z-10 overflow-y-auto rounded-[3rem] md:rounded-r-none"
            >
              <div className="flex justify-between items-center mb-16">
                <div>
                   <h2 className="text-4xl font-black tracking-tighter uppercase text-[#e7e7e7]">
                     {editingProject ? 'EDIT' : 'CREATE'}<span className="text-[#d4f534]">.RECORD</span>
                   </h2>
                   <p className="text-white/20 text-[10px] uppercase font-black tracking-[0.4em] mt-2">Dossier v1.02 • Architecture Terminal</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form className="space-y-10 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">PROJECT TITLE</label>
                    <input 
                      type="text" 
                      defaultValue={editingProject?.title}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-6 text-sm font-bold tracking-tight focus:outline-none focus:border-[#d4f534]/30"
                      placeholder="e.g. HARAPAY - OFFLINE PAYMENTS"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">SLUG / URI</label>
                    <input 
                      type="text" 
                      defaultValue={editingProject?.slug}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-6 text-sm font-bold tracking-tight focus:outline-none focus:border-[#d4f534]/30"
                      placeholder="e.g. harapay"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">SHORT DESCRIPTION / MISSION</label>
                  <textarea 
                    defaultValue={editingProject?.description}
                    rows={4}
                    className="w-full bg-white/5 border border-white/5 rounded-3xl p-6 text-sm font-bold tracking-tight focus:outline-none focus:border-[#d4f534]/30 resize-none"
                    placeholder="Briefly explain the project's purpose..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">CATEGORY</label>
                      <input type="text" defaultValue={editingProject?.category} className="w-full bg-white/5 border border-white/5 rounded-xl p-4 text-xs font-bold focus:outline-none focus:border-[#d4f534]/30" />
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">CLIENT</label>
                      <input type="text" defaultValue={editingProject?.client} className="w-full bg-white/5 border border-white/5 rounded-xl p-4 text-xs font-bold focus:outline-none focus:border-[#d4f534]/30" />
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">YEAR</label>
                      <input type="text" defaultValue={editingProject?.year} className="w-full bg-white/5 border border-white/5 rounded-xl p-4 text-xs font-bold focus:outline-none focus:border-[#d4f534]/30" />
                   </div>
                </div>

                <div className="space-y-4">
                   <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">HERO IMAGE / ASSET URL</label>
                   <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-black/20 shrink-0 border border-white/5">
                         {editingProject && <img src={editingProject.heroImage} className="w-full h-full object-cover" alt="" />}
                      </div>
                      <input 
                        type="text" 
                        defaultValue={editingProject?.heroImage}
                        className="flex-1 bg-white/5 border border-white/5 rounded-2xl p-6 text-xs font-mono focus:outline-none focus:border-[#d4f534]/30" 
                        placeholder="https://images.unsplash.com/..."
                      />
                   </div>
                </div>

                <div className="flex gap-6 pt-10">
                   <MagneticButton>
                     <button 
                      type="button"
                      className="px-10 py-6 bg-[#d4f534] text-[#1e1e1e] rounded-3xl font-black uppercase tracking-[0.3em] text-[10px] hover:scale-[1.02] active:scale-95 transition-all shadow-2xl"
                     >
                       SAVE DATABASE RECORD
                     </button>
                   </MagneticButton>
                   <MagneticButton>
                     <button 
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-10 py-6 border border-white/5 text-white/40 rounded-3xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white/5 transition-all"
                     >
                       CANCEL
                     </button>
                   </MagneticButton>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </DashboardLayout>
  );
}
