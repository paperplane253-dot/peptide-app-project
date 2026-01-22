import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Beaker, Brain, ChevronRight, Zap } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();

  const systems = [
    {
      title: "Peptide Intelligence",
      id: "peptides",
      desc: "Precision titration and ledgering for research-grade peptides.",
      icon: <Beaker className="text-[#22d3ee]" size={24} />,
      status: "LIVE",
      color: "border-[#22d3ee]/20"
    },
    {
      title: "SARM Protocol",
      id: "sarms",
      desc: "Selective androgen receptor modulation modeling.",
      icon: <Activity className="text-red-500" size={24} />,
      status: "COMING SOON",
      color: "border-red-500/10"
    },
    {
      title: "Nootropic Stack",
      id: "nootropics",
      desc: "Cognitive enhancement and neuro-optimization tracking.",
      icon: <Brain className="text-purple-500" size={24} />,
      status: "DEVELOPMENT",
      color: "border-purple-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white flex flex-col items-center px-6 py-20">
      {/* Header */}
      <div className="max-w-4xl w-full text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
          <Zap size={14} className="text-[#22d3ee]" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">The Apex Ecosystem</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6 leading-none">
          Molecular <span className="text-[#22d3ee]">Wellness</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Advanced intelligence systems for biological research and self-optimization protocols. 
          Precision tools for the modern sovereign researcher.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {systems.map((s) => (
          <button
            key={s.id}
            onClick={() => s.id === 'peptides' && navigate('/peptides')}
            className={`group text-left p-8 rounded-[2.5rem] bg-[#0d0f14] border ${s.color} hover:border-[#22d3ee]/50 transition-all duration-500 flex flex-col justify-between min-h-[300px] relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
              {s.icon}
            </div>
            
            <div>
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-2xl font-black uppercase italic tracking-tight mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-black px-3 py-1 rounded-full border ${s.id === 'peptides' ? 'bg-[#22d3ee] text-black border-[#22d3ee]' : 'bg-white/5 text-slate-500 border-white/10'}`}>
                {s.status}
              </span>
              {s.id === 'peptides' && <ChevronRight size={20} className="text-[#22d3ee]" />}
            </div>
          </button>
        ))}
      </div>

      {/* Footer / Blog Link */}
      <div className="mt-20 text-center">
        <p className="text-slate-600 text-xs uppercase font-black tracking-widest mb-4">Intel-Apex Intelligence Briefings</p>
        <button 
          onClick={() => navigate('/blog')}
          className="text-white hover:text-[#22d3ee] transition-colors font-bold uppercase italic text-sm border-b border-[#22d3ee]/30 pb-1"
        >
          Access the Knowledge Base
        </button>
      </div>
    </div>
  );
};