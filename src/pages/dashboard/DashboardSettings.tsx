import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { useConfig } from "../../context/ConfigContext";
import { 
  Settings as SettingsIcon, 
  Save, 
  RotateCcw, 
  Type, 
  MousePointer2, 
  Layout, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Info
} from "lucide-react";
import { RevealLine, FadeIn } from "../../components/Animations";
import MagneticButton from "../../components/MagneticButton";
import { motion } from "motion/react";

export default function DashboardSettings() {
  const { config, updateConfig, resetToDefault } = useConfig();
  const [localConfig, setLocalConfig] = useState(config);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    updateConfig(localConfig);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all site settings to default?")) {
      resetToDefault();
      setLocalConfig(config); // This might need a useEffect to stay in sync if config changes from reset
    }
  };

  const updateField = (path: string, value: string) => {
    const keys = path.split('.');
    setLocalConfig((prev: any) => {
      const newConfig = { ...prev };
      let current = newConfig;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return { ...newConfig };
    });
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-[#1e1e1e] pb-16">
          <div>
            <RevealLine>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
                SITE<span className="text-[#d4f534]">.CONFIG</span>
              </h1>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-[#e7e7e7]/40 font-black tracking-[0.4em] uppercase text-[10px] ml-1">
                PLATFORM CORE • GLOBAL VARIABLES • SYSTEM v1.2
              </p>
            </FadeIn>
          </div>
          
          <div className="flex gap-4">
            <MagneticButton>
              <button 
                onClick={handleReset}
                className="px-8 py-4 bg-white/5 text-white/40 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Reset
              </button>
            </MagneticButton>
            <MagneticButton>
              <button 
                onClick={handleSave}
                className={`px-10 py-5 ${isSaved ? 'bg-green-500' : 'bg-[#d4f534]'} text-[#1e1e1e] rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3 shadow-[0_10px_30px_rgba(212,245,52,0.1)]`}
              >
                <Save className="w-4 h-4" strokeWidth={3} /> {isSaved ? 'CONFIG SAVED' : 'SAVE CHANGES'}
              </button>
            </MagneticButton>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* MARQUEE SETTINGS */}
          <FadeIn delay={0.3}>
            <div className="bg-[#1e1e1e] p-8 md:p-10 rounded-[3rem] border border-white/5 space-y-8">
              <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                <div className="w-10 h-10 bg-[#d4f534]/10 rounded-xl flex items-center justify-center text-[#d4f534]">
                   <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter italic">Marquee Controls</h3>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">Home Page Marquee</label>
                  <textarea 
                    value={localConfig.marquees.home}
                    onChange={(e) => updateField('marquees.home', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm text-white/80 focus:border-[#d4f534]/50 outline-none transition-all min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">About Page Marquee</label>
                  <input 
                    type="text"
                    value={localConfig.marquees.about}
                    onChange={(e) => updateField('marquees.about', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm text-white/80 focus:border-[#d4f534]/50 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">Blog Content Marquee</label>
                  <input 
                    type="text"
                    value={localConfig.marquees.blog}
                    onChange={(e) => updateField('marquees.blog', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm text-white/80 focus:border-[#d4f534]/50 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* HERO & CONTENT SETTINGS */}
          <FadeIn delay={0.4}>
            <div className="bg-[#1e1e1e] p-8 md:p-10 rounded-[3rem] border border-white/5 space-y-8 h-full">
              <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                <div className="w-10 h-10 bg-[#d4f534]/10 rounded-xl flex items-center justify-center text-[#d4f534]">
                   <Type className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter italic">Hero Messaging</h3>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">Global CTA Label</label>
                  <input 
                    type="text"
                    value={localConfig.cta.label}
                    onChange={(e) => updateField('cta.label', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm text-white/80 focus:border-[#d4f534]/50 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">Home Hero Title</label>
                  <input 
                    type="text"
                    value={localConfig.hero.home.title}
                    onChange={(e) => updateField('hero.home.title', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm text-white/80 focus:border-[#d4f534]/50 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">Home Hero Subtitle</label>
                  <textarea 
                    value={localConfig.hero.home.subtitle}
                    onChange={(e) => updateField('hero.home.subtitle', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm text-white/80 focus:border-[#d4f534]/50 outline-none transition-all min-h-[80px]"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ADVERTISEMENT & LINKS */}
          <FadeIn delay={0.5}>
            <div className="bg-[#1e1e1e] p-8 md:p-10 rounded-[3rem] border border-white/5 space-y-8">
               <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                <div className="w-10 h-10 bg-[#d4f534]/10 rounded-xl flex items-center justify-center text-[#d4f534]">
                   <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter italic">Global Links & Ads</h3>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">Primary WhatsApp Link</label>
                  <input 
                    type="text"
                    value={localConfig.cta.link}
                    onChange={(e) => updateField('cta.link', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm text-[#d4f534] focus:border-[#d4f534]/50 outline-none transition-all font-mono"
                  />
                </div>
                
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                   <div className="flex items-center gap-3 mb-4">
                      <Info className="w-4 h-4 text-[#d4f534]" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Developer Note</span>
                   </div>
                   <p className="text-[11px] text-white/30 leading-relaxed italic uppercase tracking-tighter">
                     "Ads and Blog posts are currently managed via the high-fidelity database system. Use the dedicated CMS tabs to edit individual entries."
                   </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* QUICK PREVIEW */}
          <FadeIn delay={0.6}>
             <div className="bg-[#d4f534] p-8 md:p-10 rounded-[3rem] text-[#1e1e1e] h-full flex flex-col justify-between">
                <div>
                   <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-4">Live Preview</h3>
                   <p className="text-xs font-bold leading-relaxed mb-10 opacity-70">See how your configuration affects the "Dispatch" signature style across the frontend.</p>
                   
                   <div className="space-y-6">
                      <div className="p-6 bg-[#1e1e1e] text-[#e7e7e7] rounded-2xl shadow-xl">
                         <span className="text-[9px] font-black opacity-30 uppercase tracking-[0.3em] block mb-3">Home Hero Preview</span>
                         <h4 className="text-2xl font-black tracking-tighter leading-none mb-2 uppercase">{localConfig.hero.home.title}</h4>
                         <p className="text-xs opacity-50 line-clamp-2">{localConfig.hero.home.subtitle}</p>
                      </div>
                      
                      <div className="p-6 bg-[#1e1e1e] text-[#e7e7e7] rounded-full shadow-xl flex items-center justify-between">
                         <span className="text-[9px] font-black opacity-30 uppercase tracking-widest pl-4">Button Preview</span>
                         <div className="bg-[#d4f534] text-[#1e1e1e] px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-widest">
                            {localConfig.cta.label}
                         </div>
                      </div>
                   </div>
                </div>
                
                <div className="mt-10 pt-10 border-t border-[#1e1e1e]/10 flex items-center justify-between">
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 italic">Site ID: PLATFORM-X</span>
                   <ExternalLink className="w-5 h-5 opacity-40" />
                </div>
             </div>
          </FadeIn>

        </div>
      </div>
    </DashboardLayout>
  );
}
