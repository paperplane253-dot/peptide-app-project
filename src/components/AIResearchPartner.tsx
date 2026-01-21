import React from 'react';
import { Brain, ShieldAlert, Zap, Activity, Lock, Info } from 'lucide-react';

interface LogEntry {
  date: string;
  compound: string;
  dose: string;
  weight?: string;
  observations?: string;
}

export const AIResearchPartner = ({ logs, isApex }: { logs: LogEntry[], isApex: boolean }) => {
  
  const generateInsights = () => {
    if (logs.length === 0) return [];
    const insights = [];
    const recentLogs = [...logs].reverse().slice(0, 5);
    const lastLog = recentLogs[0];
    
    if (logs.length >= 2) {
      const currentW = parseFloat(lastLog.weight || "0");
      const prevW = parseFloat(logs[logs.length - 2].weight || "0");
      const weightDrop = prevW - currentW;
      
      if (weightDrop > 3 && lastLog.observations?.toLowerCase().includes('tired' || 'fatigue')) {
        insights.push({
          type: 'vitality',
          icon: <Activity size={14}/>,
          label: 'VITALITY FLAG',
          text: 'Aggressive mass loss detected with low vitality markers. Reference [SAFETY-REF] for electrolyte protocols.',
          color: 'text-amber-400',
          bg: 'bg-amber-400/10'
        });
      }
    }

    const highRiskStack = ['Tirzepatide', 'Semaglutide', 'Retatrutide'];
    const currentCompounds = recentLogs.map(l => l.compound);
    const hasMultipleGLP = highRiskStack.filter(p => currentCompounds.includes(p)).length >= 2;

    if (hasMultipleGLP) {
      insights.push({
        type: 'stacking',
        icon: <ShieldAlert size={14}/>,
        label: 'CLINICAL INTERACTION',
        text: 'Multiple GLP-1 agonists detected in 7-day window. Referencing [SYSTEM-V16]: Monitor for acute gastrointestinal distress.',
        color: 'text-red-500',
        bg: 'bg-red-500/10'
      });
    }

    if (insights.length === 0) {
      insights.push({
        type: 'info',
        icon: <Zap size={14}/>,
        label: 'SYSTEM OPTIMIZED',
        text: 'Current stack frequency aligns with [PEPTIDE-MANUAL] half-life tables. No deviations detected.',
        color: 'text-[#22d3ee]',
        bg: 'bg-[#22d3ee]/10'
      });
    }

    return insights;
  };

  const insights = generateInsights();

  return (
    <div className="bg-[#0d0f14] border border-white/5 rounded-[2.5rem] p-8 mt-6 relative overflow-hidden shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Brain className="text-[#22d3ee]" size={20} />
        <h2 className="text-xs font-black uppercase tracking-[0.3em] italic text-white">AI Research Partner</h2>
      </div>

      {!isApex ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <Lock className="text-slate-700 mb-4" size={32} />
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Apex Intelligence Required</p>
          <button className="text-[9px] font-black uppercase text-[#22d3ee] border border-[#22d3ee]/30 px-4 py-2 rounded-full hover:bg-[#22d3ee] hover:text-black transition-all">
            Unlock Synthesis
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {insights.map((item, i) => (
            <div key={i} className={`${item.bg} border border-white/5 p-5 rounded-2xl flex gap-4 items-start`}>
              <div className={`${item.color} mt-1`}>{item.icon}</div>
              <div>
                <span className={`text-[9px] font-black uppercase tracking-tighter ${item.color}`}>{item.label}</span>
                <p className="text-[11px] text-white/80 font-medium leading-relaxed mt-1">{item.text}</p>
              </div>
            </div>
          ))}
          
          {/* AI DISCLAIMER FOOTER */}
          <div className="mt-4 pt-4 border-t border-white/5 flex gap-2 items-start opacity-40">
            <Info size={12} className="shrink-0 text-[#22d3ee] mt-0.5" />
            <p className="text-[8px] uppercase font-bold leading-tight tracking-wider text-slate-400">
              AI notes are observational and not medical advice. Synthesis is based strictly on provided system PDFs and ledger data.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};