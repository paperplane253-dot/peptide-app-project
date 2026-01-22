import React, { useState } from 'react';
import { ChevronLeft, Calendar, Share2, AlertTriangle, ShieldCheck, Zap, ArrowRight, FileText } from 'lucide-react';
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
        <div className="space-y-12">
          <section className="space-y-6">
            <p>Peptides are short chains of <span className="text-white font-bold">amino acids</span>, described as the body's "mini-messengers" and "Lego bricks" for proteins, but smaller and more agile.</p>
            <p>They are moving from niche scientific research to mainstream wellness, driven by the allure of natural "bio-hacks" and harnessing innate bodily mechanisms.</p>
          </section>
          <section className="bg-[#0d0f14] border border-white/5 p-8 rounded-[2rem]">
            <h2 className="text-[#22d3ee] text-xs font-black uppercase tracking-[0.2em] mb-4">Historical Context</h2>
            <p className="text-sm text-slate-400 italic">From Emil Fischer's 19th-century synthesis to the mid-20th-century sequencing of insulin, peptides have transformed from chemical curiosities into the backbone of modern therapeutics.</p>
          </section>
          <section className="space-y-4">
             <h3 className="text-xl font-black uppercase italic tracking-tighter">Current Applications</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-sm">
                  <span className="text-[#22d3ee] font-black uppercase block mb-2">Skincare</span> GHK-Cu and Matrixyl boost collagen and signal youthful cellular action.
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-sm">
                  <span className="text-[#22d3ee] font-black uppercase block mb-2">Fitness</span> Ipamorelin and BPC-157 aid muscle growth and fat loss.
                </div>
             </div>
          </section>
        </div>
      )
    },
    {
      id: 2,
      title: "The Peptide Predicament",
      subtitle: "Navigating the Grey Market and the legal twilight zone of 'Research Chemicals'.",
      date: "JAN 2026",
      tag: "Intelligence Briefing 002",
      content: (
        <div className="space-y-12">
          <section className="bg-red-500/5 border border-red-500/20 p-8 rounded-[2rem]">
            <div className="flex items-center gap-2 text-red-500 font-black text-[10px] tracking-widest uppercase mb-4">
              <AlertTriangle size={14} /> Critical Risk Assessment
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              The "Grey Market" operates online, offering peptides labeled "for research purposes only" to circumvent FDA oversight. Independent analyses reveal significant issues with <span className="text-red-400 font-bold uppercase">purity, bacteria, and heavy metal contamination.</span>
            </p>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-black uppercase italic tracking-tight">Drivers of the Hype</h3>
            <ul className="space-y-4">
              <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <Zap className="text-[#22d3ee] shrink-0" size={18} />
                <p className="text-sm text-slate-400"><span className="text-white font-bold">The Ozempic-Alike Surge:</span> High costs of GLP-1 drugs have driven a 208% increase in online ads for unregulated alternatives like Semaglutide and Tirzepatide.</p>
              </li>
              <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <ShieldCheck className="text-[#22d3ee] shrink-0" size={18} />
                <p className="text-sm text-slate-400"><span className="text-white font-bold">Biohacking Movement:</span> Pursuit of self-optimization using TB-500 and BPC-157 for injury recovery without medical oversight.</p>
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-black uppercase italic tracking-tight text-[#22d3ee]">Regulatory Crackdown (2025-2026)</h3>
            <p className="text-slate-300">New FDA policy revisions (Effective Jan 2025) have moved peptides like <span className="text-white font-bold">BPC-157 and Ipamorelin</span> to "Category 2," effectively prohibiting compounding for human use due to safety concerns.</p>
          </section>
        </div>
      )
    }
  ];

  if (selectedPost !== null) {
    const post = posts.find(p => p.id === selectedPost)!;
    return (
      <div className="min-h-screen bg-[#020202] text-white pb-20">
        <nav className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between sticky top-0 bg-[#020202]/80 backdrop-blur-md z-50">
          <button onClick={() => setSelectedPost(null)} className="flex items-center gap-2 text-slate-500 hover:text-[#22d3ee] transition-colors text-[10px] font-black uppercase tracking-[0.2em]">
            <ChevronLeft size={14} /> Back to Briefings
          </button>
        </nav>
        <header className="max-w-3xl mx-auto px-6 pt-10 pb-16">
          <div className="text-[#22d3ee] text-[10px] font-black uppercase tracking-[0.3em] mb-6">{post.tag}</div>
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight mb-6">{post.title}</h1>
          <p className="text-xl text-slate-400 font-medium italic border-l-4 border-[#22d3ee] pl-6">{post.subtitle}</p>
        </header>
        <article className="max-w-3xl mx-auto px-6 text-slate-300 text-lg leading-relaxed">{post.content}</article>
        <div className="max-w-3xl mx-auto px-6 mt-20">
          <div className="bg-[#22d3ee] p-1 rounded-[2.5rem]">
            <div className="bg-[#020202] p-10 rounded-[2.3rem] text-center">
              <h3 className="text-2xl font-black uppercase italic mb-8">Master Your Research Protocol</h3>
              <button onClick={() => navigate('/peptides')} className="bg-[#22d3ee] text-black font-black uppercase px-10 py-5 rounded-2xl text-[10px] tracking-[0.2em]">Launch Intelligence Terminal</button>
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
        <h1 className="text-5xl font-black uppercase italic tracking-tighter mb-12">Intelligence <span className="text-[#22d3ee]">Briefings</span></h1>
        
        <div className="space-y-6">
          {posts.map((post) => (
            <button 
              key={post.id} 
              onClick={() => setSelectedPost(post.id)}
              className="w-full text-left bg-[#0d0f14] border border-white/5 p-8 rounded-[2rem] hover:border-[#22d3ee]/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[#22d3ee] text-[10px] font-black uppercase tracking-widest">{post.tag}</span>
                <span className="text-slate-600 text-[10px] font-black uppercase">{post.date}</span>
              </div>
              <h2 className="text-2xl font-black uppercase italic mb-4 group-hover:text-[#22d3ee] transition-colors">{post.title}</h2>
              <p className="text-slate-500 text-sm mb-6">{post.subtitle}</p>
              <div className="flex items-center gap-2 text-[#22d3ee] text-[10px] font-black uppercase tracking-widest">
                Read Briefing <ArrowRight size={14} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};