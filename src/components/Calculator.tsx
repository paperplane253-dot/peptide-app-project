import React, { useState } from 'react';
import { Syringe, Save, ArrowRight } from 'lucide-react';

export const Calculator = ({ onLog }: { onLog: (log: any) => void }) => {
  const [vialSize, setVialSize] = useState(5);
  const [bacWater, setBacWater] = useState(2);
  const [desiredDose, setDesiredDose] = useState(250);

  const units = (desiredDose / (vialSize * 1000)) * (bacWater * 100);

  const handlePush = () => {
    onLog({
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
      compound: 'Matrix Calculation',
      dose: `${desiredDose}mcg`,
      weight: '', 
      site: 'Auto-Logged',
      observations: `Calculated Volume: ${units.toFixed(1)} Units`,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pt-4">
      <div className="bg-[#0d0f14] border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">
        <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-10 text-white">Precision Matrix</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-white">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Vial Size (mg)</label>
            <input type="number" value={vialSize} onChange={e=>setVialSize(Number(e.target.value))} className="w-full bg-black border border-white/10 p-5 rounded-2xl text-xl font-black outline-none text-[#22d3ee] focus:border-[#22d3ee]" />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">BAC Water (ml)</label>
            <input type="number" value={bacWater} onChange={e=>setBacWater(Number(e.target.value))} className="w-full bg-black border border-white/10 p-5 rounded-2xl text-xl font-black outline-none text-[#22d3ee] focus:border-[#22d3ee]" />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Dose (mcg)</label>
            <input type="number" value={desiredDose} onChange={e=>setDesiredDose(Number(e.target.value))} className="w-full bg-black border border-white/10 p-5 rounded-2xl text-xl font-black outline-none text-[#22d3ee] focus:border-[#22d3ee]" />
          </div>
        </div>

        <div className="bg-black border border-[#22d3ee]/20 p-12 rounded-[2rem] text-center mb-10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#22d3ee]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Drawing Volume</span>
          <div className="text-8xl font-black italic text-[#22d3ee] my-4 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)] tracking-tighter">
            {units.toFixed(1)}
          </div>
          <span className="text-sm font-black text-white/40 uppercase tracking-[0.2em] italic">Insulin Units</span>
        </div>

        <button 
          onClick={handlePush} 
          className="w-full bg-transparent border-2 border-white/20 p-8 rounded-3xl flex items-center justify-between group hover:border-[#22d3ee] hover:bg-white/5 transition-all"
        >
          <div className="flex items-center gap-5">
            <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-[#22d3ee] transition-all">
              <Save size={24} className="text-white group-hover:text-black" />
            </div>
            <div className="text-left">
              <p className="text-white font-black uppercase text-lg italic leading-none tracking-tight">Push to Ledger</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">Archive session data</p>
            </div>
          </div>
          <ArrowRight className="text-slate-700 group-hover:text-[#22d3ee] transform group-hover:translate-x-2 transition-all" />
        </button>
      </div>
    </div>
  );
};