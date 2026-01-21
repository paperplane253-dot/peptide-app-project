import React from 'react';
import { Beaker, ShieldCheck, LineChart, Brain, Lock, Zap, ChevronDown } from 'lucide-react';

export const LandingPage = ({ onEnter }: { onEnter: () => void }) => {
  return (
    <div className="bg-black text-white selection:bg-[#22d3ee] selection:text-black">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Animated Background Blur */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#22d3ee]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-500/5 rounded-full blur-[120px]" />

        <div className="max-w-4xl w-full text-center z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-4">
            <Zap size={14} className="text-[#22d3ee]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">v1.1.0 Stable Build</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9]">
            Sovereign <br />
            <span className="text-[#22d3ee]">Research</span> OS
          </h1>
          
          <p className="max-w-xl mx-auto text-slate-400 text-sm md:text-base font-medium leading-relaxed">
            The elite terminal for independent researchers. Precise reconstitution math, 
            automated inventory tracking, and AI-driven clinical observation—all stored 
            locally for total data sovereignty.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
            <button 
              onClick={onEnter}
              className="px-10 py-5 bg-[#22d3ee] text-black font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              Access Terminal
            </button>
            <a 
              href="#features" 
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-white/10 transition-all"
            >
              System Specs
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce opacity-20">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* FEATURE GRID (SEO HEAVY) */}
      <section id="features" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Beaker className="text-[#22d3ee]" size={32} />
            <h3 className="text-xl font-black uppercase italic italic">The Matrix</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-wider">
              Advanced reconstitution calculator for complex peptide concentrations. 
              Supports Tirzepatide, Semaglutide, and multi-compound protocols with 
              micro-unit precision.
            </p>
          </div>

          <div className="space-y-4">
            <Brain className="text-[#22d3ee]" size={32} />
            <h3 className="text-xl font-black uppercase italic italic">AI Synthesis</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-wider">
              Real-time clinical observation scanning. Detects stacking risks, 
              vitality flags, and protocol deviations using local LLM-structured logic.
            </p>
          </div>

          <div className="space-y-4">
            <Lock className="text-[#22d3ee]" size={32} />
            <h3 className="text-xl font-black uppercase italic italic">Zero-Knowledge</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-wider">
              Your research is your business. No cloud sync, no database tracking. 
              Everything remains on your hardware, encrypted in local storage.
            </p>
          </div>
        </div>
      </section>

      {/* LONG FORM CONTENT (FOR GOOGLE) */}
      <section className="py-24 bg-[#0d0f14] border-y border-white/5 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#22d3ee] mb-4">Protocol Architecture</h2>
            <p className="text-2xl font-black italic uppercase leading-tight">
              Designed for the specific needs of modern laboratory administration.
            </p>
          </div>
          
          <div className="prose prose-invert text-slate-400 text-sm leading-loose font-medium">
            <p>
              Whether managing <strong>Tirzepatide weight loss research</strong> or 
              <strong>Bioregulator protocols</strong>, the APEX INTEL system provides 
              the infrastructure needed for professional data logging.
            </p>
            <p>
              Monitor mass progression with our <strong>longitudinal analytics engine</strong>, 
              track <strong>cold-chain inventory</strong>, and export full clinical logs 
              as INTEL-SYSTEM CSV files for permanent off-device archiving.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center opacity-20 hover:opacity-100 transition-opacity">
        <p className="text-[10px] font-black uppercase tracking-widest">
          Apex Intel © 2026 // Laboratory Use Only // Not For Human Consumption
        </p>
      </footer>
    </div>
  );
};