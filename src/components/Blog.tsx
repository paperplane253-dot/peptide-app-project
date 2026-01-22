import React from 'react';
import { ChevronLeft, Calendar, Clock, Share2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#020202] text-white pb-20">
      {/* Navigation */}
      <nav className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between sticky top-0 bg-[#020202]/80 backdrop-blur-md z-50">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-500 hover:text-[#22d3ee] transition-colors text-[10px] font-black uppercase tracking-[0.2em]">
          <ChevronLeft size={14} /> Back to Hub
        </button>
        <div className="flex gap-4">
          <Share2 size={16} className="text-slate-600 hover:text-[#22d3ee] cursor-pointer transition-colors" />
        </div>
      </nav>

      {/* Article Header */}
      <header className="max-w-3xl mx-auto px-6 pt-10 pb-16">
        <div className="flex items-center gap-4 text-[#22d3ee] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
          <span className="px-3 py-1 bg-[#22d3ee]/10 border border-[#22d3ee]/20 rounded-full flex items-center gap-2">
            <Zap size={10} /> Intelligence Briefing 001
          </span>
          <div className="flex items-center gap-1 text-slate-500"><Calendar size={12}/> JAN 2026</div>
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight mb-8">
          Peptides: From Lab Bench <span className="text-[#22d3ee]">to Lifestyle</span>
        </h1>
        <p className="text-xl text-slate-400 font-medium italic border-l-4 border-[#22d3ee] pl-6 py-2">
          Exploring the science, history, and future of Nature's mini-messengers.
        </p>
      </header>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 text-slate-300 text-lg leading-relaxed space-y-12 font-medium">
        
        {/* Intro Section */}
        <section className="space-y-6">
          <p>
            Peptides are short chains of <span className="text-white font-bold">amino acids</span>, described as the body's "mini-messengers" and "Lego bricks" for proteins, but smaller, more agile, and capable of transmitting specific instructions. 
          </p>
          <p>
            They are experiencing a surge in popularity, moving from scientific research to mainstream wellness, driven by the appeal of harnessing innate bodily mechanisms and the allure of natural "bio-hacks."
          </p>
        </section>

        {/* Timeline Section */}
        <section className="bg-[#0d0f14] border border-white/5 p-8 rounded-[2rem]">
          <h2 className="text-[#22d3ee] text-xs font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
            <Clock size={14} /> Historical Context
          </h2>
          <div className="space-y-6 border-l border-white/10 ml-2 pl-6">
            <div>
              <span className="text-white font-black italic block text-sm mb-1">19TH CENTURY</span>
              <p className="text-sm text-slate-400">Emil Fischer coined the term "peptide" and synthesized the first one, unraveling the composition of proteins.</p>
            </div>
            <div>
              <span className="text-white font-black italic block text-sm mb-1">EARLY 20TH CENTURY</span>
              <p className="text-sm text-slate-400">Discovery of hormones like secretin, insulin, and oxytocin—the "bonding hormone."</p>
            </div>
            <div>
              <span className="text-white font-black italic block text-sm mb-1">LATE 20TH CENTURY</span>
              <p className="text-sm text-slate-400">The "Therapeutic Boom." Synthesis methods advanced, turning peptides into powerful medicine for metabolic and hormonal conditions.</p>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-black uppercase italic text-white tracking-tight">The "Wonderful Things They Do"</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-[#22d3ee] font-black text-xs block mb-2 tracking-widest uppercase">Skincare</span>
              <p className="text-sm text-slate-400">GHK-Cu and Matrixyl boost collagen and signal cells to act youthfully.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-[#22d3ee] font-black text-xs block mb-2 tracking-widest uppercase">Fitness</span>
              <p className="text-sm text-slate-400">Ipamorelin and BPC-157 aid muscle growth, fat loss, and recovery.</p>
            </div>
          </div>
        </section>

        {/* Debate Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black uppercase italic text-white tracking-tight">Hype vs. Hard Science</h2>
          <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-[2rem]">
            <div className="flex items-center gap-2 text-red-500 font-black text-[10px] tracking-widest uppercase mb-4">
              <AlertTriangle size={14} /> Risk Mitigation Warning
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Unregulated products carry risks of mislabeling, incorrect dosing, and dangerous impurities. Experts urge <span className="text-red-400">extreme caution</span> regarding "research chemicals" sold online without oversight.
            </p>
          </div>
        </section>

        {/* Future Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-black uppercase italic text-white tracking-tight text-center">The Future is Peptide-Powered</h2>
          <div className="space-y-4">
            {[
              { label: "Smarter Science", desc: "AI designing targeted sequences." },
              { label: "Precision Delivery", desc: "Nanoparticles targeting specific action sites." },
              { label: "Personalized Treatments", desc: "Therapies tailored to genetic makeup." }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <ShieldCheck className="text-[#22d3ee]" size={20} />
                <div>
                  <span className="text-sm font-black uppercase italic">{item.label}</span>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Box */}
        <div className="mt-20">
          <div className="bg-[#22d3ee] p-1 rounded-[2.5rem]">
            <div className="bg-[#020202] border border-black p-10 rounded-[2.3rem] text-center">
              <h3 className="text-3xl font-black uppercase italic mb-4">Master Your <span className="text-[#22d3ee]">Protocol</span></h3>
              <p className="text-slate-500 text-sm mb-8 max-w-sm mx-auto font-medium leading-relaxed">
                Take your research from guesswork to precision. Use the Peptide Intelligence System to automate your titration math.
              </p>
              <button onClick={() => navigate('/peptides')} className="bg-[#22d3ee] text-black font-black uppercase px-10 py-5 rounded-2xl text-[10px] tracking-[0.2em] hover:scale-105 transition-transform">
                Launch Intelligence Terminal
              </button>
            </div>
          </div>
        </div>

      </article>

      <footer className="max-w-3xl mx-auto px-6 mt-32 pt-12 border-t border-white/5 text-center text-[10px] font-black text-slate-700 uppercase tracking-[0.4em]">
        Molecular Wellness © 2026 // Intel-Apex Systems
      </footer>
    </div>
  );
};