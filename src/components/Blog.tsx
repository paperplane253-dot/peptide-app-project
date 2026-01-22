import React from 'react';
import { ChevronLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Blog = () => {
  const navigate = useNavigate();

  // This is where you will paste your content from Blogger
  const post = {
    title: "The Sovereign Researcher's Guide to Peptide Reconstitution",
    date: "JAN 21, 2026",
    readTime: "8 MIN READ",
    content: `
      <p>Your Blogger text goes here...</p>
      <p>You can use standard HTML tags like &lt;h2&gt; for subheaders.</p>
    `
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white pb-20">
      {/* Navigation */}
      <nav className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-500 hover:text-[#22d3ee] transition-colors text-[10px] font-black uppercase tracking-[0.2em]">
          <ChevronLeft size={14} /> Back to Hub
        </button>
        <div className="flex gap-4">
          <Share2 size={16} className="text-slate-600 hover:text-[#22d3ee] cursor-pointer" />
        </div>
      </nav>

      {/* Article Header */}
      <header className="max-w-3xl mx-auto px-6 pt-10 pb-16">
        <div className="flex items-center gap-4 text-[#22d3ee] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
          <span className="px-2 py-1 bg-[#22d3ee]/10 border border-[#22d3ee]/20 rounded">Intelligence Briefing</span>
          <div className="flex items-center gap-1 text-slate-500"><Calendar size={12}/> {post.date}</div>
          <div className="flex items-center gap-1 text-slate-500"><Clock size={12}/> {post.readTime}</div>
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight">
          {post.title}
        </h1>
      </header>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 text-slate-300 text-lg leading-relaxed space-y-8 font-medium">
        {/* You can just paste your blogger text here directly if you want, 
            or use the dangerouslySetInnerHTML if you have HTML tags */}
        <div className="prose prose-invert prose-cyan max-w-none">
          {/* PASTE YOUR BLOGGER CONTENT BELOW THIS LINE */}
          <p className="text-[#22d3ee] font-bold italic border-l-2 border-[#22d3ee] pl-4 mb-8">
            The following is a technical protocol for independent research purposes only.
          </p>
          
          <p>
            Paste the body of your Blogger post here. To keep the "clean" look, 
            break it into short paragraphs. Use bold text for emphasis on key terms.
          </p>

          <h2 className="text-white text-2xl font-black uppercase italic mt-12 mb-4">The Importance of Precision</h2>
          <p>
            When dealing with molecular wellness, the margin for error is razor-thin...
          </p>
          {/* END OF BLOGGER CONTENT */}
        </div>
      </article>

      {/* Call to Action Box */}
      <div className="max-w-3xl mx-auto px-6 mt-20">
        <div className="bg-[#0d0f14] border border-[#22d3ee]/20 p-8 rounded-[2rem] text-center">
          <h3 className="text-xl font-black uppercase italic mb-2">Ready to automate this protocol?</h3>
          <p className="text-slate-500 text-sm mb-6 font-medium">Download the Peptide Intelligence System for precise titration tracking.</p>
          <button onClick={() => navigate('/peptides')} className="bg-[#22d3ee] text-black font-black uppercase px-8 py-4 rounded-xl text-xs tracking-widest hover:scale-105 transition-transform">
            Launch Terminal
          </button>
        </div>
      </div>
    </div>
  );
};