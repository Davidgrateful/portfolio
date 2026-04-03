import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import DashboardLayout from "./DashboardLayout";
import { 
  Users, 
  Share2, 
  Calendar, 
  MapPin, 
  Globe, 
  Zap, 
  Plus, 
  ArrowUpRight,
  Search,
  CheckCircle2,
  X,
  MessageSquare,
  MoreVertical,
  Twitter,
  Linkedin,
  Github
} from "lucide-react";
import { ecosystemCaseStudies } from "../../data/portfolio";
import { RevealLine, FadeIn } from "../../components/Animations";
import MagneticButton from "../../components/MagneticButton";

export default function DashboardEcosystem() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-[#1e1e1e] pb-20">
          <div>
            <RevealLine>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
                ECOSYST<span className="text-[#d4f534]">EM.HUB</span>
              </h1>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-[#e7e7e7]/40 font-black tracking-[0.4em] uppercase text-[10px] ml-1">
                COMMUNITIES • SOCIALS • EVENTS • {ecosystemCaseStudies.length} IMPACT RECORDS
              </p>
            </FadeIn>
          </div>
          
          <MagneticButton>
            <button 
              onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
              className="px-10 py-5 bg-[#d4f534] text-[#1e1e1e] rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all flex items-center gap-3 shadow-[0_10px_30px_rgba(212,245,52,0.1)]"
            >
              <Plus className="w-4 h-4" strokeWidth={3} /> Record Case Study
            </button>
          </MagneticButton>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="p-8 bg-[#1e1e1e] rounded-[2.5rem] border border-white/5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-500 flex items-center justify-center">
                 <Users className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-[9px] font-black tracking-widest text-white/20 uppercase mb-1">TOTAL REACH</p>
                 <h4 className="text-4xl font-black tracking-tighter uppercase">12.5K<span className="text-blue-500">+</span></h4>
              </div>
           </div>
           <div className="p-8 bg-[#1e1e1e] rounded-[2.5rem] border border-white/5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#d4f534]/20 text-[#d4f534] flex items-center justify-center">
                 <Calendar className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-[9px] font-black tracking-widest text-white/20 uppercase mb-1">EVENTS HOSTED</p>
                 <h4 className="text-4xl font-black tracking-tighter uppercase">24<span className="text-[#d4f534]">✦</span></h4>
              </div>
           </div>
           <div className="p-8 bg-[#1e1e1e] rounded-[2.5rem] border border-white/5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-500 flex items-center justify-center">
                 <Share2 className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-[9px] font-black tracking-widest text-white/20 uppercase mb-1">CHANNELS MANAGED</p>
                 <h4 className="text-4xl font-black tracking-tighter uppercase">08<span className="text-purple-500">.ID</span></h4>
              </div>
           </div>
        </div>

        {/* Impact List */}
        <div className="space-y-6">
           {ecosystemCaseStudies.map((item, i) => (
              <motion.div 
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#1e1e1e] rounded-[3rem] border border-white/5 overflow-hidden hover:border-[#d4f534]/30 transition-all duration-700"
              >
                 <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 aspect-video lg:aspect-auto overflow-hidden">
                       <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]" alt="" />
                    </div>
                    <div className="flex-1 p-10 md:p-14 space-y-8 flex flex-col justify-between">
                       <div className="space-y-6">
                          <div className="flex items-center justify-between">
                             <div className="flex items-center gap-4">
                                <span className="px-5 py-2 rounded-full border border-white/10 text-[8px] font-black uppercase tracking-widest text-white/40">{item.category}</span>
                                <span className="text-[#d4f534] text-[10px] font-black uppercase tracking-widest">{item.metric}</span>
                             </div>
                             <button className="text-white/20 hover:text-white transition-colors"><MoreVertical className="w-5 h-5" /></button>
                          </div>
                          <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">{item.title}</h3>
                          <p className="text-[#e7e7e7]/40 text-lg font-medium leading-relaxed max-w-2xl">{item.description}</p>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/5">
                          {item.results.map((res: string, idx: number) => (
                             <div key={idx} className="flex gap-4 items-center">
                                <div className="w-2 h-2 rounded-full bg-[#d4f534]" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">{res}</span>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </motion.div>
           ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
         {isModalOpen && (
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-6 bg-black/80 backdrop-blur-2xl">
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="w-full max-w-2xl bg-[#1e1e1e] border border-white/10 rounded-[4rem] p-12 relative overflow-hidden shadow-2xl"
               >
                  <div className="flex justify-between items-start mb-16">
                     <div>
                        <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">IMPACT<span className="text-[#d4f534]">.DOC</span></h2>
                        <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em] mt-2">Dossier Recording Engine</p>
                     </div>
                     <button onClick={() => setIsModalOpen(false)} className="p-4 rounded-full bg-white/5 hover:bg-white/10"><X className="w-6 h-6" /></button>
                  </div>

                  <form className="space-y-8">
                     <div className="space-y-3">
                        <label className="text-[9px] font-black uppercase tracking-widest text-white/20 ml-2">EVENT / COMMUNITY NAME</label>
                        <input type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl p-6 text-sm font-bold tracking-tight focus:outline-none focus:border-[#d4f534]/30" />
                     </div>
                     <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                           <label className="text-[9px] font-black uppercase tracking-widest text-white/20 ml-2">CATEGORY</label>
                           <input type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-xs font-bold focus:outline-none" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-[9px] font-black uppercase tracking-widest text-white/20 ml-2">CORE METRIC EX: (5.0K+)</label>
                           <input type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-xs font-bold border-[#d4f534]/10" />
                        </div>
                     </div>
                     <div className="space-y-3">
                        <label className="text-[9px] font-black uppercase tracking-widest text-white/20 ml-2">IMPACT NARRATIVE</label>
                        <textarea rows={3} className="w-full bg-white/5 border border-white/5 rounded-2xl p-6 text-sm font-bold focus:outline-none resize-none" />
                     </div>
                     <MagneticButton>
                        <button type="button" className="w-full py-6 bg-[#d4f534] text-[#1e1e1e] rounded-3xl font-black uppercase tracking-[0.3em] text-[10px] hover:scale-[1.02] active:scale-95 transition-all mt-4 shadow-2xl shadow-[#d4f534]/10">COMMIT TO ARCHIVE</button>
                     </MagneticButton>
                  </form>
               </motion.div>
            </div>
         )}
      </AnimatePresence>

    </DashboardLayout>
  );
}
