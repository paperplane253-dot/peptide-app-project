import React from 'react';
import { Book, ShieldAlert, Thermometer, Droplets, Zap, FileText } from 'lucide-react';

export const Guide = () => {
  const protocols = [
    {
      category: "SAFETY PROTOCOLS",
      items: [
        { title: "Red Flag Index", detail: "Immediate cessation required if resting HR exceeds 100bpm for >4 hours post-administration. Reference [INTEL-05].", icon: <ShieldAlert className="text-red-500"/> },
        { title: "Cold Chain Management", detail: "Reconstituted vials must remain between 2°C - 8°C. Peptide degradation occurs rapidly at room temp. Reference [SAFETY-REF].", icon: <Thermometer className="text-[#22d3ee]"/> }
      ]
    },
    {
      category: "LABORATORY MATH",
      items: [
        { title: "Reconstitution 101", detail: "Always aim BAC water at the glass wall. 2ml of diluent is standard for 5mg/10mg vials for easier dosing math.", icon: <Droplets className="text-[#22d3ee]"/> },
        { title: "Syringe Calibration", detail: "Ensure 31G, 5/16\" needle for subcutaneous administration to minimize tissue trauma and maximize absorption.", icon: <Zap className="text-[#22d3ee]"/> }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 pt-4 pb-32 space-y-8 animate-in fade-in duration-700">
      <div className="bg-[#0d0f14] border border-white/5 p-8 rounded-[2.5rem] shadow-2xl">
        <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-6">
          <Book className="text-[#22d3ee]" size={20}/>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] italic text-[#22d3ee]">Research Intelligence Guide</h2>
        </div>

        <div className="space-y-10">
          {protocols.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-[10px] font-black text-slate-500 tracking-[0.4em] uppercase">{section.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, i) => (
                  <div key={i} className="bg-black/40 border border-white/5 p-5 rounded-2xl hover:border-[#22d3ee]/20 transition-all group">
                    <div className="flex items-center gap-3 mb-3">
                      {item.icon}
                      <h4 className="font-black uppercase italic text-sm text-white">{item.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-fuchsia-500/5 border border-fuchsia-500/20 rounded-3xl">
          <div className="flex items-center gap-2 mb-2 text-fuchsia-500">
            <FileText size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest text-fuchsia-500">Legal Disclaimer</span>
          </div>
          <p className="text-[9px] text-slate-500 uppercase font-bold leading-relaxed">
            This system is an administrative tool for logging laboratory research data. It does not provide medical advice. All protocols must be reviewed by a clinical professional.
          </p>
        </div>
      </div>
    </div>
  );
};