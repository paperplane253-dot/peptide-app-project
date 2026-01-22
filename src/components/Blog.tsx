import React, { useState } from 'react';
import { ChevronLeft, Calendar, Share2, AlertTriangle, ShieldCheck, Zap, ArrowRight, BookOpen, Microscope, Globe, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Blog = () => {
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const posts = [
    {
      id: 1,
      title: "Peptides: From Lab Bench to Lifestyle",
      subtitle: "The tiny molecules making a massive comeback in modern wellness.",
      date: "JAN 2026",
      tag: "Intelligence Briefing 001",
      content: (
        <div className="space-y-12 pb-20">
          <section className="space-y-6">
            <h3 className="text-2xl font-black uppercase italic text-white tracking-tight">I. What's the Buzz?</h3>
            <p>Peptides are short chains of <span className="text-white font-bold">amino acids</span>, described as the body's "mini-messengers" and "Lego bricks" for proteins. They are smaller and more agile than proteins, capable of transmitting specific instructions to cells.</p>
            <p>They are experiencing a surge in popularity, moving from niche scientific research to mainstream wellness, driven by the appeal of harnessing innate bodily mechanisms and the allure of natural "bio-hacks."</p>
          </section>

          <section className="bg-[#0d0f14] border border-white/5 p-8 rounded-[2rem]">
            <h2 className="text-[#22d3ee] text-xs font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <Microscope size={14} /> II. A Trip Down Memory Lane
            </h2>
            <div className="space-y-4 text-sm text-slate-400">
              <p><span className="text-white font-black italic underline decoration-[#22d3ee]">19th Century:</span> Scientists began unraveling protein compositions, leading to the discovery of "peptide bonds." Emil Fischer coined the term "peptide."</p>
              <p><span className="text-white font-black italic underline decoration-[#22d3ee]">Early 20th Century:</span> Discovery of hormones like secretin, insulin, and oxytocin—the "bonding hormone."</p>
              <p><span className="text-white font-black italic underline decoration-[#22d3ee]">Mid-20th Century:</span> Frederick Sanger sequenced insulin; Robert Merrifield developed solid-phase synthesis.</p>
            </div>
          </section>

          <section className="space-y-8">
            <h3 className="text-2xl font-black uppercase italic text-white tracking-tight text-center underline decoration-[#22d3ee]/30 decoration-4 underline-offset-8">III. Body's Hidden Powers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-[#22d3ee] font-black text-[10px] block mb-2 tracking-widest uppercase text-center">Skincare</span>
                <p className="text-xs text-slate-500 mt-2 text-center leading-relaxed">GHK-Cu & Matrixyl signaling cells to act youthfully.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                <span className="text-[#22d3ee] font-black text-[10px] block mb-2 tracking-widest uppercase">Fitness</span>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">BPC-157 & Ipamorelin for recovery and growth.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                <span className="text-[#22d3ee] font-black text-[10px] block mb-2 tracking-widest uppercase">Therapies</span>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">GLP-1 Agonists for metabolic optimization.</p>
              </div>
            </div>
          </section>
        </div>
      )
    },
    {
      id: 2,
      title: "The Peptide Predicament",
      subtitle: "Navigating the Grey Market and the legal twilight zone.",
      date: "JAN 2026",
      tag: "Intelligence Briefing 002",
      content: (
        <div className="space-y-12 pb-20">
          <section className="bg-red-500/5 border border-red-500/20 p-8 rounded-[2rem]">
            <div className="flex items-center gap-2 text-red-500 font-black text-[10px] tracking-widest uppercase mb-4">
              <AlertTriangle size={14} /> Warning: Critical Risk Assessment
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-bold italic">
              The "Grey Market" operates online, offering peptides labeled "for research purposes only" to circumvent FDA oversight.
            </p>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-black uppercase italic text-white tracking-tight underline decoration-red-500/30 underline-offset-8">I. Drivers of Hype</h3>
            <div className="space-y-4">
              <p><span className="text-[#22d3ee] font-black italic uppercase text-xs tracking-widest">Weight Loss Surge:</span> Mimics of approved drugs have seen online ads increase by 208%.</p>
              <p><span className="text-[#22d3ee] font-black italic uppercase text-xs tracking-widest">Biohacking:</span> Self-optimization using BPC-157 and TB-500 without regulatory vetting.</p>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
            <h3 className="text-[#22d3ee] text-xs font-black uppercase tracking-[0.2em] mb-4">II. Regulatory Crackdown (2025-2026)</h3>
            <p className="text-sm text-slate-400 mb-4">Effective January 2025, the FDA has moved compounds like BPC-157 to "Category 2," effectively prohibiting compounding for human use.</p>
            <p className="text-sm text-red-400/80 font-black uppercase italic">"Research Use Only" is viewed as an ineffective attempt to bypass the law.</p>
          </section>
        </div>
      )
    }
  ];

  if (selectedPost !== null) {
    const post = posts.find(p => p.id === selectedPost)!;
    return (
      <div className="min-h-screen bg-[#020202] text-white">
        <nav className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between sticky top-0 bg-[#020202]/90 backdrop-blur-md z-[100]">
          <button onClick={() => setSelectedPost(null)} className="flex items-center gap-2 text-slate-500 hover:text-[#22d3ee] transition-colors text-[10px] font-black uppercase tracking-[0.2em]">
            <ChevronLeft size={14} /> Back to Briefings
          </button>
          <Share2 size={16} className="text-slate-600 hover:text-[#22d3ee] cursor-pointer" />
        </nav>
        <header className="max-w-3xl mx-auto px-6 pt-10 pb-16">
          <div className="text-[#22d3ee] text-[10px] font-black uppercase tracking-[0.3em] mb-6">{post.tag}</div>
          <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight mb-6">{post.title}</h1>
          <p className="text-xl text-slate-400 font-medium italic border-l-4 border-[#22d3ee] pl-6 py-2">{post.subtitle}</p>
        </header>
        <article className="max-w-3xl mx-auto px-6 text-slate-300 text-lg leading-relaxed">{post.content}</article>
        
        <div className="max-w-3xl mx-auto px-6 mt-10 pb-20">
          <div className="bg-[#22d3ee] p-1 rounded-[2.5rem]">
            <div className="bg-[#020202] p-10 rounded-[2.3rem] text-center border border-black shadow-2xl">
              <h3 className="text-3xl font-black uppercase italic mb-8">Launch <span className="text-[#22d3ee]">Terminal</span></h3>
              <button onClick={() => navigate('/peptides')} className="w-full bg-[#22d3ee] text-black font-black uppercase py-5 rounded-2xl text-[10px] tracking-[0.2em]">Launch Intelligence Terminal</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020202] text-white px-6 py-20 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-500 hover:text-[#22d3ee] transition-colors text-[10px] font-black uppercase tracking-[0.2em] mb-12">
          <ChevronLeft size={14} /> Exit to Hub
        </button>
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-16 leading-none">Intelligence <span className="text-[#22d3ee]">Briefings</span></h1>
        
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <button 
              key={post.id} 
              onClick={() => setSelectedPost(post.id)}
              className="w-full text-left bg-[#0d0f14] border border-white/5 p-8 rounded-[2.5rem] hover:border-[#22d3ee]/30 transition-all group relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[#22d3ee] text-[10px] font-black uppercase tracking-widest">{post.tag}</span>
                <span className="text-slate-600 text-[10px] font-black uppercase">{post.date}</span>
              </div>
              <h2 className="text-3xl font-black uppercase italic mb-4 group-hover:text-[#22d3ee] transition-colors tracking-tighter">{post.title}</h2>
              <p className="text-slate-500 text-sm mb-8 font-medium italic">{post.subtitle}</p>
              <div className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest">
                Read Briefing <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};