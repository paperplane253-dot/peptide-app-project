import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogEntry } from '../types';
import { MapPin, Scale } from 'lucide-react';

// External high-end components
import { ClinicalDashboard } from './ClinicalDashboard';
import { AIResearchPartner } from './AIResearchPartner';
import { InteractiveLedger } from './InteractiveLedger';

const MotionDiv = motion.div as any;

export const PeptideIntelLedger: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    const savedLogs = localStorage.getItem('peptide_companion_logs');
    if (savedLogs) {
      try {
        setLogs(JSON.parse(savedLogs));
      } catch (e) {
        console.error("Parse Error", e);
      }
    }
  }, []);

  const addLog = (newLog: any) => {
    const logToAdd: LogEntry = { id: crypto.randomUUID(), ...newLog };
    const updatedLogs = [logToAdd, ...logs].sort((a, b) => 
      new Date(`${b.date}T${b.time}`).getTime() - new Date(`${a.date}T${a.time}`).getTime()
    );
    setLogs(updatedLogs);
    localStorage.setItem('peptide_companion_logs', JSON.stringify(updatedLogs));
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 pb-32 px-4">
      {/* Dashboard Section */}
      <ClinicalDashboard logs={logs} />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Protocol Entry Section */}
        <div className="lg:col-span-2">
          <InteractiveLedger addLog={addLog} />
        </div>

        {/* AI Synthesis Section */}
        <div className="lg:col-span-3">
          <AIResearchPartner />
        </div>
      </div>

      {/* Registry Section - The Audit Trail */}
      {logs.length > 0 && (
        <div className="space-y-8 max-w-5xl mx-auto pt-10 border-t border-white/5">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.6em]">Registry Persistence</h3>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          </div>

          <AnimatePresence>
            {logs.map((log) => (
              <MotionDiv 
                key={log.id} 
                layout 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="glass group relative overflow-hidden p-1 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all"
              >
                <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                        <span className="text-[9px] font-black text-primary uppercase tracking-widest">{log.date}</span>
                      </div>
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{log.time}</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter group-hover:text-primary transition-colors">
                        {log.compound}
                      </h4>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-[10px] text-slate-500 font-bold uppercase flex items-center gap-1">
                          <MapPin size={10} /> {log.site}
                        </span>
                        <span className="text-[10px] text-slate-500 font-bold uppercase flex items-center gap-1">
                          <Scale size={10} /> {typeof log.weight === 'object' ? log.weight.value : log.weight || '--'} lbs
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                    <div className="text-center">
                      <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Vitality</div>
                      <div className="text-sm font-black text-primary font-mono">{log.subjectiveVitality || '7/10'}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Dosage Commit</div>
                      <div className="text-4xl font-black text-white font-mono tracking-tighter leading-none">
                        {log.dose}
                      </div>
                    </div>
                  </div>
                </div>

                {log.notes && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 mx-2">
                    <p className="text-[10px] text-slate-400 font-medium leading-relaxed italic">
                      " {log.notes} "
                    </p>
                  </div>
                )}
              </MotionDiv>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};