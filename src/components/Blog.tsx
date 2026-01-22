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
        <div className="space-y-8 pb-20">
          <section className="space-y-4">
            <h3 className="text-xl font-black uppercase italic text-white tracking-tight">I. Introduction: What's the Buzz?</h3>
            <p>Peptides are short chains of amino acids, described as the body's "mini-messengers" and "Lego bricks" for proteins, but smaller, more agile, and capable of transmitting specific instructions. They are experiencing a surge in popularity, moving from scientific research to mainstream wellness, driven by the appeal of harnessing innate bodily mechanisms and the allure of natural "bio-hacks." Peptides are associated with claims of anti-aging, muscle building, and revolutionary medicines, but also carry potential risks.</p>
          </section>

          <section className="bg-[#0d0f14] border border-white/5 p-8 rounded-[2rem] space-y-4">
            <h3 className="text-[#22d3ee] text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2"><Microscope size={14} /> II. A Trip Down Memory Lane</h3>
            <p className="text-sm text-slate-400"><span className="text-white font-bold italic">19th Century:</span> Scientists began unraveling the composition of proteins, leading to the discovery of "peptide bonds" that link amino acids. Emil Fischer coined the term "peptide" and synthesized the first one.</p>
            <p className="text-sm text-slate-400"><span className="text-white font-bold italic">Early 20th Century:</span> Discovery of peptide hormones like secretin (a chemical messenger), insulin (for diabetes), and oxytocin (the "bonding hormone").</p>
            <p className="text-sm text-slate-400"><span className="text-white font-bold italic">Mid-20th Century:</span> Frederick Sanger sequenced insulin, revealing its precise architecture. Robert Merrifield developed a method for synthesizing peptides in the lab, opening new research avenues.</p>
            <p className="text-sm text-slate-400"><span className="text-white font-bold italic">Late 20th Century to Present:</span> The "peptide therapeutics boom" saw peptides transform into drugs for various medical conditions, followed by their ascent into mainstream wellness.</p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-black uppercase italic text-white tracking-tight">III. The "Wonderful Things They Do"</h3>
            <p>Peptides are naturally occurring components in the body, functioning as hormones, growth factors, and brain signals that influence mood, metabolism, immune response, and cellular repair. Harnessing these natural processes offers various benefits:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-[#22d3ee] font-black text-xs block mb-2 tracking-widest uppercase italic">Skincare</span>
                <p className="text-xs text-slate-400">Peptides like GHK-Cu and Matrixyl boost collagen, smooth wrinkles, and improve skin health by signaling skin cells to act more youthfully. Internal peptides are also being explored for cellular longevity.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-[#22d3ee] font-black text-xs block mb-2 tracking-widest uppercase italic">Fitness</span>
                <p className="text-xs text-slate-400">Peptides such as Ipamorelin and BPC-157 are promoted for aiding muscle growth, fat loss, and enhancing post-workout recovery.</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 italic font-bold text-[#22d3ee] pt-4">Targeted Therapies: "Smart peptides" for diabetes, weight loss (GLP-1 agonists), and cancer therapy, with research for immune boosting, gut repair, and more.</p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-black uppercase italic text-white tracking-tight">IV. Hype vs. Hard Science</h3>
            <p>Largely positive, fueled by social media influencers, celebrity endorsements, and promises of "quick fixes." However, Medical Opinion is more nuanced. Doctors confidently prescribe FDA-approved drugs but urge "extreme caution" regarding unregulated injectable peptides sold online as "research chemicals."</p>
          </section>

          <section className="bg-red-500/5 border border-red-500/20 p-8 rounded-[2rem] space-y-2">
            <h3 className="text-red-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><AlertTriangle size={14} /> Risks of Unregulated Peptides</h3>
            <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4">
              <li>Potential Side Effects: Hormonal imbalances and GI issues.</li>
              <li>Theoretical Cancer Risks: Lack of long-term safety data for compounds like Melanotan II.</li>
              <li>Quality Control: Mislabeled products and dangerous impurities.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-black uppercase italic text-white tracking-tight">V. The Future is Peptide-Powered!</h3>
            <p className="text-sm text-slate-400 italic">⚡ Smarter Science: AI and machine learning designing targeted peptides.</p>
            <p className="text-sm text-slate-400 italic">🧬 Precision Delivery: Nanoparticles minimizing side effects.</p>
            <p className="text-sm text-slate-400 italic">✨ Personalized Treatments: customized therapies tailored to genetics.</p>
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
        <div className="space-y-8 pb-20">
          <section className="bg-red-500/5 border border-red-500/20 p-8 rounded-[2rem]">
            <p className="text-sm text-slate-300 leading-relaxed font-bold italic">This document details the phenomenon of the "grey market" for peptides, a legal twilight zone where unregulated substances are sold, often under the guise of "research chemicals," leading to significant health risks for consumers.</p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-black uppercase italic text-white tracking-tight">1. The Allure of the Grey Market</h3>
            <p>Grey Market Characteristics: This market operates online, offering peptides labeled "for research purposes only" to circumvent regulatory oversight. It is characterized by a "caveat emptor" (buyer beware) principle.</p>
            <div className="space-y-2 text-sm text-slate-400">
              <p><span className="text-white font-bold italic">Weight Loss:</span> Mimics of approved drugs like semaglutide and tirzepatide (e.g., "Ozempic-alikes") are popular.</p>
              <p><span className="text-white font-bold italic">Anti-Aging & Recovery:</span> Peptides such as BPC-157 and TB-500 are sought for injury recovery.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-black uppercase italic text-white tracking-tight text-red-500">2. Medical Professionals' Concerns</h3>
            <p className="text-sm text-slate-400 italic">Independent analyses reveal incorrect active ingredients, synthesis byproducts, solvents, bacteria, heavy metals, or complete absence of the claimed substance. Incorrect concentrations lead to ineffective or dangerously high doses.</p>
            <p className="text-sm text-slate-400">Providers face disciplinary action, while consumers face product seizure, fines, and health repercussions.</p>
          </section>

          <section className="bg-white/5 border border-white/10 p-8 rounded-[2rem] space-y-4">
            <h3 className="text-[#22d3ee] text-xs font-black uppercase tracking-[0.2em]">3. The Future of Peptides: Regulation vs. Wild West</h3>
            <p className="text-sm text-slate-400">Intensifying Crackdown: Revisions to bulk drug substance policies (effective Jan 2025) will restrict compounding. Peptides like BPC-157 are designated "Category 2," prohibiting their compounding for human use.</p>
            <p className="text-sm text-slate-400">Global Efforts: Regulatory bodies in the EU (EMA guidelines from June 2026), UK, and Australia are increasing efforts against mislabeled peptides.</p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-black uppercase italic text-white tracking-tight text-center border-t border-white/10 pt-8">Conclusion: Choosing Wisely</h3>
            <p className="text-center text-slate-400 italic">The grey market offers easy access but carries unknown ingredients and lack of oversight. Experts unanimously advise consulting a licensed medical professional.</p>
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
              <h3 className="text-2xl font-black uppercase italic mb-8">Master Your Research Protocol</h3>
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
            <button key={post.id} onClick={() => setSelectedPost(post.id)} className="w-full text-left bg-[#0d0f14] border border-white/5 p-8 rounded-[2.5rem] hover:border-[#22d3ee]/30 transition-all group relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[#22d3ee] text-[10px] font-black uppercase tracking-widest">{post.tag}</span>
                <span className="text-slate-600 text-[10px] font-black uppercase">{post.date}</span>
              </div>
              <h2 className="text-3xl font-black uppercase italic mb-4 group-hover:text-[#22d3ee] transition-colors tracking-tighter">{post.title}</h2>
              <p className="text-slate-500 text-sm mb-8 font-medium italic">{post.subtitle}</p>
              <div className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest">Read Briefing <ArrowRight size={14} /></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};