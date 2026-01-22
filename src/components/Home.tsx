import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Zap, Activity, ChevronRight, Lock, Beaker, Globe } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();

  const pricingPlans = [
    {
      name: "Discovery",
      tier: "Basic",
      price: "49",
      url: "https://molecularwellness.gumroad.com/l/PepIntel?option=gGZZ9Sxu194hjn707f540A%3D%3D&wanted=true",
      features: [
        "Standard Terminal Access",
        "Intelligence Briefings 001-005",
        "Essential Peptide Database",
        "Mobile-Ready Interface"
      ],
      cta: "Select Discovery",
      highlight: false
    },
    {
      name: "Analyst",
      tier: "Pro",
      price: "99",
      url: "https://molecularwellness.gumroad.com/l/PepIntel?option=r6ErvHSG_ApV9LbDaQfAHQ%3D%3D&wanted=true",
      features: [
        "Advanced Calculator Suite",
        "Protocol Blueprints",
        "Expanded Research Library",
        "Priority Email Support",
        "Weekly Market Updates"
      ],
      cta: "Select Analyst",
      highlight: true
    },
    {
      name: "Apex",
      tier: "Elite",
      price: "199",
      url: "https://molecularwellness.gumroad.com/l/PepIntel?option=oYwetJ2hmHnIxuiuuWg1MA%3D%3D&wanted=true",
      features: [
        "Full Terminal Unlocked",
        "Custom Research Tools",
        "Lifetime Access & Updates",
        "Private Intelligence Feed",
        "Concierge Setup Help"
      ],
      cta: "Select Apex",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-[#22d3ee]/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22d3ee] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22d3ee]"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">System Online: v4.0.2</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-[0.85]">
            Molecular <span className="text-[#22d3ee]">Wellness</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-medium italic mb-12 leading-relaxed">
            The definitive intelligence terminal for peptide research, protocol optimization, and molecular data.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => navigate('/peptides')}
              className="group relative px-10 py-5 bg-[#22d3ee] text-black font-black uppercase tracking-widest text-xs rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">Launch Terminal <ChevronRight size={16} /></span>
            </button>
            <button 
              onClick={() => navigate('/blog')}
              className="px-10 py-5 bg-white/5 text-white font-black uppercase tracking-widest text-xs rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
            >
              Read Briefings
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 relative bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black uppercase italic tracking-tight mb-4 text-white">Select Your <span className="text-[#22d3ee]">Access Level</span></h2>
            <p className="text-slate-500 font-medium italic">Secure your research credentials below.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.name} 
                className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 ${
                  plan.highlight 
                    ? 'bg-[#0d0f14] border-[#22d3ee]/50 shadow-[0_0_40px_-10px_rgba(34,211,238,0.2)]' 
                    : 'bg-[#080808] border-white/5 hover:border-white/20'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#22d3ee] text-black text-[10px] font-black uppercase px-4 py-1 rounded-full tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="text-[#22d3ee] text-[10px] font-black uppercase tracking-[0.2em] mb-4">{plan.tier}</div>
                <h3 className="text-3xl font-black uppercase italic mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black">${plan.price}</span>
                  <span className="text-slate-500 text-xs font-black uppercase tracking-tighter">/ One-Time</span>
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-400 font-medium">
                      <div className="w-1.5 h-1.5 bg-[#22d3ee] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => window.location.href = plan.url}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${
                    plan.highlight 
                      ? 'bg-[#22d3ee] text-black hover:bg-white' 
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center px-6">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
          &copy; 2026 Molecular Wellness Intelligence Systems. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};