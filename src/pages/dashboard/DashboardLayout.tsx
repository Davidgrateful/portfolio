import React, { useState } from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Briefcase, FileText, Settings, LogOut, ExternalLink, Globe, ChevronRight } from "lucide-react";
import MagneticButton from "../../components/MagneticButton";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const sidebarItems = [
  { name: "Overview", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Projects", icon: Briefcase, path: "/dashboard/projects" },
  { name: "Blog Posts", icon: FileText, path: "/dashboard/blog" },
  { name: "Ecosystem", icon: Globe, path: "/dashboard/ecosystem" },
  { name: "Settings", icon: Settings, path: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-[#e7e7e7] font-sans selection:bg-[#d4f534] selection:text-[#1e1e1e] relative overflow-hidden">
      
      {/* BRANDING: Atmospheric Depth (Background Glow) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4f534]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4f534]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none z-0"></div>

      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="h-screen bg-[#1e1e1e] border-r border-[#d4f534]/10 flex flex-col fixed left-0 top-0 z-50 overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.5)]"
      >
        <div className="p-8 flex items-center justify-between relative z-10">
          {isSidebarOpen && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="font-black text-2xl tracking-tighter uppercase text-[#e7e7e7]"
            >
              ADM<span className="text-[#d4f534]">IN.</span>
            </motion.div>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-[#d4f534]/10 rounded-full transition-all cursor-pointer group"
          >
            <ChevronRight className={`w-5 h-5 transition-transform duration-500 text-[#d4f534] ${isSidebarOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <nav className="flex-1 px-6 py-10 space-y-4 relative z-10">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <MagneticButton key={item.path}>
                <Link to={item.path} className="block w-full">
                  <motion.div
                    whileHover={{ x: 6 }}
                    className={`flex items-center gap-4 px-5 py-4 rounded-full transition-all duration-500 ${
                      isActive 
                        ? "bg-[#d4f534] text-[#1e1e1e]" 
                        : "text-[#e7e7e7]/40 hover:text-[#e7e7e7] hover:translate-x-1"
                    }`}
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    {isSidebarOpen && (
                      <span className="font-black text-[10px] uppercase tracking-[0.4em]">{item.name}</span>
                    )}
                  </motion.div>
                </Link>
              </MagneticButton>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-2 relative z-10">
          <MagneticButton>
            <Link to="/">
              <div className="flex items-center gap-4 px-4 py-3 text-white/40 hover:text-white transition-colors cursor-pointer group">
                <ExternalLink className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                {isSidebarOpen && <span className="text-[10px] uppercase font-black tracking-[0.4em]">View Site</span>}
              </div>
            </Link>
          </MagneticButton>
          <MagneticButton>
            <div className="flex items-center gap-4 px-4 py-3 text-red-400/80 hover:text-red-400 transition-colors cursor-pointer group">
              <LogOut className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
              {isSidebarOpen && <span className="text-[10px] uppercase font-black tracking-[0.4em] underline">Log Out</span>}
            </div>
          </MagneticButton>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main 
        className="flex-1 transition-all duration-300 min-h-screen pt-10"
        style={{ marginLeft: isSidebarOpen ? 280 : 80 }}
      >
        <div className="p-8 lg:p-12 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
