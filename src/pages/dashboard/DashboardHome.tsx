import React from "react";
import { motion } from "motion/react";
import DashboardLayout from "./DashboardLayout";
import { ArrowUpRight, Plus, Rocket, Users, FileText, Layout } from "lucide-react";
import { RevealLine, FadeIn } from "../../components/Animations";
import MagneticButton from "../../components/MagneticButton";

export default function DashboardHome() {
  const stats = [
    { label: "Total Projects", value: "12", icon: Layout, color: "text-blue-400" },
    { label: "Blog Posts", value: "4", icon: FileText, color: "text-[#d4f534]" },
    { label: "Network Growth", value: "+24%", icon: Rocket, color: "text-purple-400" },
    { label: "Live Communities", value: "8", icon: Users, color: "text-cyan-400" },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-[#1e1e1e] pb-20">
          <div>
            <RevealLine>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
                DASH<span className="text-[#d4f534]">BOARD.</span>
              </h1>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-[#e7e7e7]/40 font-black tracking-[0.4em] uppercase text-[10px] ml-1">
                FREDY OMOKE • VERSION 2.06 • ECOSYSTEM ACTIVE
              </p>
            </FadeIn>
          </div>
          
          <div className="flex gap-4">
            <MagneticButton>
              <button className="px-10 py-5 bg-[#d4f534] text-[#1e1e1e] rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-[0_10px_30px_rgba(212,245,52,0.1)]">
                <Plus className="w-4 h-4" strokeWidth={3} /> Add New Project
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#1e1e1e] p-10 rounded-[3rem] border border-white/5 hover:border-[#d4f534]/30 transition-all duration-500 shadow-xl group overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                    <stat.icon className="w-7 h-7" strokeWidth={2.5} />
                  </div>
                  <span className="text-[#e7e7e7]/10 text-5xl font-bold tracking-tighter group-hover:text-[#d4f534]/10 transition-colors">0{i+1}</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[#e7e7e7]/30 text-[10px] font-bold uppercase tracking-[0.4em] leading-none mb-4">{stat.label}</h4>
                  <p className="text-5xl md:text-6xl font-bold tracking-tighter text-[#e7e7e7] leading-none group-hover:text-[#d4f534] transition-colors">{stat.value}</p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                   <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#e7e7e7]/20 group-hover:text-[#d4f534]/40 transition-colors">System Data Hub</span>
                   <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#e7e7e7]/20 group-hover:bg-[#d4f534] group-hover:text-[#1e1e1e] group-hover:border-[#d4f534] transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions / Recent Activity Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           <div className="bg-[#1e1e1e] p-12 rounded-[3.5rem] border border-white/5 h-[450px] flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#d4f534]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-[#d4f534] mb-8 font-black text-7xl tracking-tighter opacity-10 uppercase select-none">ARCHITECTURE</div>
              <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-4 text-[#e7e7e7]">Recent Projects</h3>
              <p className="text-[#e7e7e7]/30 text-[10px] uppercase tracking-[0.2em] font-bold max-w-xs leading-relaxed">
                Syncing with decentralized database... Accessing content rails.
              </p>
           </div>
           <div className="bg-[#1e1e1e] p-12 rounded-[3.5rem] border border-white/5 h-[450px] flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-purple-500 mb-8 font-black text-7xl tracking-tighter opacity-10 uppercase select-none">EDITORIAL</div>
              <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-4 text-[#e7e7e7]">Latest Blog Posts</h3>
              <p className="text-[#e7e7e7]/30 text-[10px] uppercase tracking-[0.2em] font-bold max-w-xs leading-relaxed">
                WordPress-style SEO pipeline initialising... Preparing content nodes.
              </p>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
