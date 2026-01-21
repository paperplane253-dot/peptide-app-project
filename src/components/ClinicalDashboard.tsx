import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import { LogEntry } from '../types';

const MotionDiv = motion.div as any;

interface Props {
  logs: LogEntry[];
}

export const ClinicalDashboard: React.FC<Props> = ({ logs }) => {
  const hasEnoughData = logs.filter(l => l.weight).length >= 2;

  // Extract weights for the trend line
  const weights = logs
    .filter(l => l.weight)
    .map(l => (typeof l.weight === 'object' ? l.weight.value : Number(l.weight)))
    .reverse();

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-[3.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
      
      <MotionDiv className="relative glass p-8 md:p-12 rounded-[3.5rem] border-white/5 bg-black/40 overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Activity className="text-primary w-6 h-6 animate-pulse" />
              </div>
              <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Clinical Ledger</h2>
            </div>
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] ml-1">Molecular Persistence Analysis</p>
          </div>

          <div className="flex gap-4">
            <div className="px-8 py-4 bg-white/5 rounded-2xl border border-white/10 text-center">
              <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Subject Mass Trend</div>
              <div className="text-xl font-black text-white font-mono flex items-center gap-2">
                {weights.length > 0 ? `${weights[weights.length - 1]} lbs` : '--'}
                <TrendingUp size={14} className="text-emerald-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Intelligence Layer */}
        <div className="mt-12 relative h-48 w-full bg-white/[0.02] rounded-3xl border border-white/5 overflow-hidden">
          {!hasEnoughData ? (
            <div className="absolute inset-0 z-20 backdrop-blur-xl flex items-center justify-center border border-white/10 rounded-3xl bg-black/20">
              <div className="flex flex-col items-center text-center gap-3 p-6">
                <Zap className="text-primary animate-bounce" size={24} />
                <div>
                  <span className="text-xs font-black text-white uppercase tracking-[0.3em] italic block">Awaiting Biometrics</span>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-2 block">
                    Log at least 2 entries with "Subject Mass" to generate trend.
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* Simple Weight Trend Line Visualization */
            <div className="absolute inset-0 p-8 flex items-end gap-2">
              {weights.map((w, i) => {
                const height = ((w - Math.min(...weights) + 10) / (Math.max(...weights) - Math.min(...weights) + 20)) * 100;
                return (
                  <MotionDiv
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.max(height, 20)}%` }}
                    className="flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-t-lg relative group/bar"
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white opacity-0 group-hover/bar:opacity-100 transition-opacity">
                      {w}
                    </div>
                  </MotionDiv>
                );
              })}
            </div>
          )}
          
          {/* Decorative Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none p-4">
            {[...Array(4)].map((_, i) => <div key={i} className="w-full h-px bg-white" />)}
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};