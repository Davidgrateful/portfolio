import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import DashboardLayout from "./DashboardLayout";
import { 
  FileEdit, 
  Trash2, 
  Eye, 
  Search, 
  Plus, 
  Settings, 
  ChevronRight,
  Monitor,
  Search as SearchIcon,
  X,
  PlusCircle,
  Clock,
  Menu,
  MoreVertical,
  Type,
  ImageIcon,
  BarChart3
} from "lucide-react";
import { blogPosts } from "../../data/portfolio";
import { RevealLine, FadeIn } from "../../components/Animations";
import MagneticButton from "../../components/MagneticButton";

export default function DashboardBlog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);

  const handleEdit = (post: any) => {
    setEditingPost(post);
    setIsEditorOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-[#1e1e1e] pb-20">
          <div>
            <RevealLine>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
                POSTS<span className="text-[#d4f534]">.CMS</span>
              </h1>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-[#e7e7e7]/40 font-black tracking-[0.4em] uppercase text-[10px] ml-1">
                SYSTEM CORE • WORDPRESS MODE • {blogPosts.length} ACTIVE PUBLISHED
              </p>
            </FadeIn>
          </div>
          
          <MagneticButton>
            <button 
              onClick={() => { setEditingPost(null); setIsEditorOpen(true); }}
              className="px-10 py-5 bg-[#d4f534] text-[#1e1e1e] rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all flex items-center gap-3 shadow-[0_10px_30px_rgba(212,245,52,0.1)]"
            >
              <PlusCircle className="w-4 h-4" strokeWidth={3} /> Write New Article
            </button>
          </MagneticButton>
        </div>

        {/* Post Grid/List */}
        <div className="grid grid-cols-1 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1e1e1e] p-8 md:p-10 rounded-[3rem] border border-white/5 group hover:border-[#d4f534]/30 transition-all duration-700 flex flex-col md:flex-row md:items-center gap-10"
            >
               <div className="w-full md:w-32 h-32 rounded-3xl overflow-hidden bg-black/40 shrink-0">
                  <img src={post.image} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]" alt="" />
               </div>

               <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                     <span className="px-5 py-2 rounded-full bg-[#d4f534]/10 text-[#d4f534] text-[8px] font-black uppercase tracking-widest">{post.category}</span>
                     <span className="flex items-center gap-2 text-white/20 text-[9px] font-black uppercase tracking-widest">
                        <Clock className="w-3 h-3" strokeWidth={3} /> {post.readTime} READ
                     </span>
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter uppercase leading-none group-hover:text-white transition-colors">
                     {post.title}
                  </h3>
                  <p className="text-white/30 text-xs font-medium max-w-xl italic line-clamp-1">"{post.excerpt}"</p>
                  <div className="text-[9px] font-black tracking-[0.4em] text-white/10 uppercase">{post.date} • ID: {post.slug.toUpperCase()}</div>
               </div>

               <div className="flex gap-4">
                  <MagneticButton>
                    <button onClick={() => handleEdit(post)} className="px-8 py-4 rounded-full bg-white/5 border border-white/5 hover:border-[#d4f534]/40 hover:text-[#d4f534] text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3">
                       <FileEdit className="w-4 h-4" /> Edit
                    </button>
                  </MagneticButton>
                  <MagneticButton>
                    <button className="p-4 rounded-full bg-white/5 border border-white/5 hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-500 transition-all">
                       <Trash2 className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                  </MagneticButton>
               </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Editor (WordPress Inspired) */}
      <AnimatePresence>
        {isEditorOpen && (
          <div className="fixed inset-0 z-[101] bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center p-0 md:p-12">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="w-full h-full bg-[#1e1e1e] border border-white/5 md:rounded-[4rem] flex flex-col overflow-hidden relative"
            >
               {/* Custom Title Bar */}
               <div className="p-10 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                     <div className="p-4 rounded-2xl bg-[#d4f534] text-[#1e1e1e]">
                        <FileEdit className="w-6 h-6" strokeWidth={3} />
                     </div>
                     <div>
                        <h2 className="text-2xl font-black tracking-tighter uppercase">POST<span className="text-[#d4f534]">EDITOR</span></h2>
                        <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">CMS ENGINE v5.0 • WORDPRESS COMPATIBLE</p>
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                     <button className="px-8 py-4 bg-white/5 text-white/40 rounded-full text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">Preview Post</button>
                     <button className="px-10 py-4 bg-[#d4f534] text-[#1e1e1e] rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Publish Live</button>
                     <button onClick={() => setIsEditorOpen(false)} className="p-4 text-white/20 hover:text-white"><X className="w-8 h-8" /></button>
                  </div>
               </div>

               <div className="flex-1 flex overflow-hidden">
                  {/* Main Editor Canvas */}
                  <div className="flex-1 p-16 overflow-y-auto space-y-12">
                     <input 
                        type="text" 
                        defaultValue={editingPost?.title}
                        placeholder="ADD AN EXPLOSIVE TITLE..."
                        className="w-full bg-transparent text-6xl md:text-8xl font-black tracking-tighter uppercase focus:outline-none placeholder:text-white/5"
                     />
                     
                     <div className="flex gap-4">
                        <button className="p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/20"><Type className="w-4 h-4" /></button>
                        <button className="p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/20"><ImageIcon className="w-4 h-4" /></button>
                        <button className="p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/20"><Menu className="w-4 h-4" /></button>
                        <div className="w-px h-10 bg-white/5 mx-2"></div>
                        <button className="px-4 py-2 bg-white/5 rounded-lg text-[9px] font-black uppercase tracking-widest border border-[#d4f534]/20 text-[#d4f534]">Rich Text Mode</button>
                     </div>

                     <textarea 
                        defaultValue={editingPost?.content}
                        placeholder="Start architecting your content..."
                        className="w-full h-96 bg-transparent text-xl md:text-2xl font-medium leading-relaxed focus:outline-none placeholder:text-white/10 resize-none"
                     />
                  </div>

                  {/* Sidebar (Settings & SEO) */}
                  <div className="w-96 border-l border-white/5 bg-black/20 p-12 overflow-y-auto space-y-16">
                     <section>
                        <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20 mb-10 flex items-center gap-3">
                           <BarChart3 className="w-3 h-3 text-[#d4f534]" /> PROJECT SEO
                        </h3>
                        <div className="space-y-8">
                           <div>
                              <label className="text-[9px] font-black uppercase text-white/20 mb-2 block">Meta Description</label>
                              <textarea rows={3} className="w-full bg-white/5 border border-white/5 rounded-xl p-4 text-[11px] font-medium focus:outline-none focus:border-[#d4f534]/40" placeholder="..." />
                           </div>
                           <div>
                              <label className="text-[9px] font-black uppercase text-white/20 mb-2 block">Primary Keywords</label>
                              <input type="text" className="w-full bg-white/5 border border-white/5 rounded-xl p-4 text-[11px] font-medium focus:outline-none" placeholder="Web3, Engineering..." />
                           </div>
                        </div>
                     </section>

                     <section>
                        <h3 className="text-[10px] font-black tracking-[0.5em] uppercase text-white/20 mb-10 flex items-center gap-3">
                           <ImageIcon className="w-3 h-3 text-[#d4f534]" /> FEATURED IMAGE
                        </h3>
                        <div className="aspect-[4/5] rounded-3xl bg-black/40 border-2 border-dashed border-white/5 flex flex-col items-center justify-center p-8 text-center group cursor-pointer hover:border-[#d4f534]/30 transition-all">
                           {editingPost?.image ? (
                              <img src={editingPost.image} className="w-full h-full object-cover rounded-2xl" alt="" />
                           ) : (
                              <>
                                 <PlusCircle className="w-12 h-12 text-white/10 mb-4" />
                                 <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 leading-loose">DROP ASSET HERE<br />OR CLICK TO UPLOAD</p>
                              </>
                           )}
                        </div>
                     </section>
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </DashboardLayout>
  );
}
