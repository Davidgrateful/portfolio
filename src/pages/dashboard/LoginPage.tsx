import React, { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Lock, User, ArrowRight, ShieldCheck } from "lucide-react";
import MagneticButton from "../../components/MagneticButton";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Temporary bypass for local development/preview
    if (email === "fredy@omokeify.com" && password === "admin123") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials for local preview (Try: fredy@omokeify.com / admin123)");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e7e7e7] flex items-center justify-center p-6 selection:bg-[#d4f534] selection:text-[#1e1e1e] font-sans relative overflow-hidden">
      
      {/* BRANDING: Atmospheric Depth (Background Glow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4f534]/10 rounded-full blur-[200px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl relative z-10"
      >
        <div className="bg-[#1e1e1e] p-16 rounded-[3.5rem] border border-white/5 shadow-2xl backdrop-blur-3xl">
          
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-24 h-24 bg-[#d4f534] text-[#1e1e1e] rounded-[2rem] flex items-center justify-center mb-10 rotate-6 shadow-[0_0_50px_rgba(212,245,52,0.2)]">
              <ShieldCheck className="w-12 h-12" strokeWidth={2.5} />
            </div>
            <h1 className="text-5xl font-black tracking-tighter uppercase mb-4">
              SECURE<span className="text-[#d4f534]">.GATE</span>
            </h1>
            <p className="text-[#e7e7e7]/30 text-[10px] font-black uppercase tracking-[0.4em]">Portfolio Narrative Hub</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-5">
              <div className="relative group">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/10 group-focus-within:text-[#d4f534] transition-colors" />
                <input 
                  type="email" 
                  placeholder="AUTHORISED EMAIL" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-3xl py-6 pl-16 pr-8 text-xs font-black tracking-widest focus:outline-none focus:border-[#d4f534]/30 focus:bg-white/10 transition-all uppercase placeholder:text-white/10"
                  required
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/10 group-focus-within:text-[#d4f534] transition-colors" />
                <input 
                  type="password" 
                  placeholder="ACCESS ENCRYPTION" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-3xl py-6 pl-16 pr-8 text-xs font-black tracking-widest focus:outline-none focus:border-[#d4f534]/30 focus:bg-white/10 transition-all uppercase placeholder:text-white/10"
                  required
                />
              </div>
            </div>

            <MagneticButton>
              <button 
                type="submit"
                className="w-full py-6 bg-[#d4f534] text-[#1e1e1e] rounded-3xl font-black uppercase tracking-[0.3em] text-[10px] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.3)] group"
              >
                INITIALIZE UPLINK <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </button>
            </MagneticButton>
          </form>

          <div className="mt-12 pt-12 border-t border-white/5 text-center">
            <p className="text-[#e7e7e7]/20 text-[9px] uppercase font-black tracking-[0.2em] leading-relaxed">
              ENCRYPTED CHANNEL V2.06<br/>
              ACCESS LOGGED VIA SYSTEM NODE
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
