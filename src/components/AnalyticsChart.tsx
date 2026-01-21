import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, TrendingDown, Calendar, Lock } from 'lucide-react';

export const AnalyticsChart = ({ logs, isApex }: { logs: any[], isApex: boolean }) => {
  const validLogs = logs.filter(l => l.weight && !isNaN(parseFloat(l.weight)));
  const currentWeight = validLogs.length > 0 ? parseFloat(validLogs[validLogs.length - 1].weight) : 0;
  const startWeight = validLogs.length > 0 ? parseFloat(validLogs[0].weight) : 0;
  const delta = currentWeight - startWeight;

  const startDate = logs.length > 0 ? new Date(logs[0].date) : new Date();
  const today = new Date();
  const protocolDay = Math.ceil(Math.abs(today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) || 1;

  const chartData = validLogs.map(log => ({
    date: new Date(log.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    weight: parseFloat(log.weight),
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 pt-4 pb-24 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#0d0f14] border border-white/5 p-6 rounded-[2rem] text-center">
          <Calendar className="text-slate-500 mb-2 mx-auto" size={16} />
          <span className="text-[10px] font-black uppercase text-slate-500">Protocol Day</span>
          <div className="text-2xl font-black text-white italic">DAY {protocolDay} / 84</div>
        </div>
        <div className="bg-[#0d0f14] border border-white/5 p-6 rounded-[2rem] text-center">
          <Activity className="text-[#22d3ee] mb-2 mx-auto" size={16} />
          <span className="text-[10px] font-black uppercase text-slate-500">Current Mass</span>
          <div className="text-2xl font-black text-[#22d3ee] italic">{currentWeight || '--'} LBS</div>
        </div>
        <div className="bg-[#0d0f14] border border-white/5 p-6 rounded-[2rem] text-center">
          <TrendingDown className={delta <= 0 ? "text-green-400 mb-2 mx-auto" : "text-fuchsia-500 mb-2 mx-auto"} size={16} />
          <span className="text-[10px] font-black uppercase text-slate-500">Total Delta</span>
          <div className={`text-2xl font-black italic ${delta <= 0 ? "text-green-400" : "text-fuchsia-500"}`}>{delta > 0 ? `+${delta.toFixed(1)}` : delta.toFixed(1)} LBS</div>
        </div>
      </div>

      <div className="relative">
        <div className={`bg-[#0d0f14] border border-white/5 rounded-[2.5rem] p-8 h-[400px] transition-all ${!isApex ? 'blur-xl pointer-events-none opacity-40' : ''}`}>
          <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-[#22d3ee]">Mass Progression Analysis</h2>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
              <XAxis dataKey="date" stroke="#475569" fontSize={10} axisLine={false} />
              <YAxis domain={['auto', 'auto']} stroke="#475569" fontSize={10} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0d0f14', border: 'none', borderRadius: '12px' }} />
              <Area type="monotone" dataKey="weight" stroke="#22d3ee" strokeWidth={4} fill="url(#colorWeight)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {!isApex && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 backdrop-blur-md border border-[#22d3ee]/30 p-10 rounded-[3rem] text-center max-w-sm">
              <Lock className="text-[#22d3ee] w-10 h-10 mx-auto mb-6" />
              <h3 className="text-xl font-black uppercase text-white mb-2 tracking-tighter italic">Apex Intelligence Locked</h3>
              <p className="text-[10px] text-slate-400 uppercase font-bold mb-8">Unlock full clinical graphing & trend synthesis.</p>
              <a href="https://molecularwellness.gumroad.com/l/PepIntel" target="_blank" className="block w-full bg-[#22d3ee] text-black font-black uppercase py-4 rounded-2xl text-[10px] tracking-widest">Upgrade to Apex Pro</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};