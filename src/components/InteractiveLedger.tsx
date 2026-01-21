import React, { useState } from 'react';
import { 
  ClipboardList, Database, MessageSquare, 
  Calendar, Clock, Weight, MapPin 
} from 'lucide-react';
import { AIResearchPartner } from './AIResearchPartner';

export const InteractiveLedger = ({ addLog, logs, isApex }: { addLog: (log: any) => void; logs: any[]; isApex: boolean }) => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
    compound: 'Tirzepatide', dose: '2.5mg', weight: '', site: 'Left Abdomen', observations: ''
  });

  const compounds = [
    'Tirzepatide', 'Semaglutide', 'Retatrutide', 'Cagrilintide', 
    'BPC-157', 'TB-500', 'GHK-Cu', 'NAD+', 'MOTS-c', 'AOD-9604',
    'CJC-1295 No DAC', 'Ipamorelin', 'Tesamorelin', 'Epitalon', 
    'PT-141', 'Selank', 'Semax', 'KPV'
  ];

  const dosages = ['100mcg', '250mcg', '500mcg', '1mg', '2mg', '2.5mg', '5mg', '7.5mg', '10mg', '12.5mg', '15mg'];
  const sites = ['Left Abdomen', 'Right Abdomen', 'Left Thigh', 'Right Thigh', 'Left Ventroglute', 'Right Ventroglute', 'Deltoid'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLog({ ...formData });
    setFormData({ ...formData, weight: '', observations: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pt-4 space-y-6">
      <form onSubmit={handleSubmit} className="bg-[#0d0f14] border border-white/5 p-8 rounded-[2.5rem] space-y-8 shadow-2xl">
        <div className="flex items-center gap-3 border-b border-white/5 pb-6">
          <ClipboardList className="text-[#22d3ee]" size={20}/>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] italic text-[#22d3ee]">Sovereign Research Log</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Calendar size={12}/> Date</label>
            <input type="date" value={formData.date} onChange={e=>setFormData({...formData, date:e.target.value})} className="w-full bg-black border border-white/10 p-4 rounded-xl text-xs font-bold text-white outline-none focus:border-[#22d3ee]" style={{ colorScheme: 'dark' }} />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Clock size={12}/> Time</label>
            <input type="time" value={formData.time} onChange={e=>setFormData({...formData, time:e.target.value})} className="w-full bg-black border border-white/10 p-4 rounded-xl text-xs font-bold text-white outline-none focus:border-[#22d3ee]" style={{ colorScheme: 'dark' }} />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Weight size={12}/> Weight (lbs)</label>
            <input type="number" placeholder="000.0" value={formData.weight} onChange={e=>setFormData({...formData, weight:e.target.value})} className="w-full bg-black border border-white/10 p-4 rounded-xl text-lg font-black text-[#22d3ee] outline-none" />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><MapPin size={12}/> Site</label>
            <select value={formData.site} onChange={e=>setFormData({...formData, site:e.target.value})} className="w-full bg-black border border-white/10 p-4 rounded-xl text-[10px] font-bold text-white outline-none h-[60px]">
              {sites.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-white uppercase tracking-widest">Research Compound</label>
            <select value={formData.compound} onChange={e=>setFormData({...formData, compound:e.target.value})} className="w-full bg-black border border-white/20 p-5 rounded-2xl text-sm font-black text-white outline-none focus:border-[#22d3ee]">
              {compounds.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-[#22d3ee] uppercase tracking-widest">Protocol Dosage</label>
            <select value={formData.dose} onChange={e=>setFormData({...formData, dose:e.target.value})} className="w-full bg-black border border-[#22d3ee]/30 p-5 rounded-2xl text-sm font-black text-[#22d3ee] outline-none focus:border-[#22d3ee]">
              {dosages.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><MessageSquare size={12}/> Observations</label>
          <textarea placeholder="Record fatigue, site response, or satiety levels..." value={formData.observations} onChange={e=>setFormData({...formData, observations:e.target.value})} className="w-full bg-black border border-white/10 p-5 rounded-2xl text-xs font-medium outline-none min-h-[100px] text-white focus:border-[#22d3ee]/20 transition-all"/>
        </div>

        <button type="submit" className="w-full bg-[#22d3ee] text-black p-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:brightness-110 shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all">
          Commit to Research Archive
        </button>
      </form>

      <AIResearchPartner logs={logs} isApex={isApex} />

      <div className="bg-[#0d0f14] border border-white/5 rounded-[2.5rem] overflow-hidden">
        <div className="p-6 border-b border-white/5 bg-white/5 flex items-center gap-2">
          <Database size={16} className="text-[#22d3ee]"/>
          <h3 className="text-[10px] font-black uppercase tracking-widest text-white italic">Session History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[8px] text-slate-600 uppercase tracking-widest border-b border-white/5 bg-black/20">
                <th className="p-6">Timestamp</th>
                <th className="p-6">Compound</th>
                <th className="p-6 text-right">Dose</th>
              </tr>
            </thead>
            <tbody className="text-[11px]">
              {[...logs].reverse().map((log, i) => (
                <tr key={log.id || i} className="border-b border-white/5 hover:bg-white/[0.02] transition-all">
                  <td className="p-6 text-white font-black">{log.date} <span className="opacity-30">|</span> {log.time}</td>
                  <td className="p-6 font-black uppercase italic text-white">{log.compound}</td>
                  <td className="p-6 text-right font-black italic text-[#22d3ee]">{log.dose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};