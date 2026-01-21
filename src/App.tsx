import React, { useState, useEffect } from 'react';
import { Calculator } from './components/Calculator';
import { InteractiveLedger } from './components/InteractiveLedger'; 
import { AnalyticsChart } from './components/AnalyticsChart';
import { Guide } from './components/Guide';
import { LandingPage } from './components/LandingPage';
import { 
  Activity, Beaker, LineChart, BookOpen, 
  ShieldCheck, Lock, Trash2, Package, Plus, Download, ChevronLeft
} from 'lucide-react';

export default function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isApex, setIsApex] = useState(false);
  const [showLanding, setShowLanding] = useState(true); // NEW: Landing Toggle
  const [accessCode, setAccessCode] = useState('');
  const [activeTab, setActiveTab] = useState<'calc' | 'journal' | 'stats' | 'protocols'>('calc');
  const [showVault, setShowVault] = useState(false);
  const [logs, setLogs] = useState<any[]>([]);
  
  const [inventory, setInventory] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('peptide_inventory');
    return saved ? JSON.parse(saved) : { 'Tirzepatide': 0, 'Semaglutide': 0, 'Retatrutide': 0 };
  });

  useEffect(() => {
    if (localStorage.getItem('apex_authorized') === 'true') {
      setIsAuthorized(true);
      setShowLanding(false); // Skip landing if already logged in
      if (localStorage.getItem('apex_tier') === 'pro') setIsApex(true);
    }
    const saved = localStorage.getItem('peptide_os_logs');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setLogs(parsed.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()));
      } catch (e) { setLogs([]); }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const code = accessCode.toUpperCase();
    if (code === 'APEX-2025' || code === 'ADMIN-VIP') {
      setIsAuthorized(true); setIsApex(true);
      localStorage.setItem('apex_authorized', 'true');
      localStorage.setItem('apex_tier', 'pro');
    } else if (code === 'DEMO') {
      setIsAuthorized(true); setIsApex(false);
      localStorage.setItem('apex_authorized', 'true');
      localStorage.setItem('apex_tier', 'basic');
    } else { alert('ACCESS DENIED: INVALID RESEARCH KEY'); }
  };

  const addLog = (newLog: any) => {
    const updatedLogs = [...logs, { ...newLog, id: Date.now() }].sort((a: any, b: any) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    setLogs(updatedLogs);
    localStorage.setItem('peptide_os_logs', JSON.stringify(updatedLogs));

    const doseValue = parseFloat(newLog.dose);
    const doseMg = newLog.dose.toLowerCase().includes('mcg') ? doseValue / 1000 : doseValue;
    
    if (inventory[newLog.compound] !== undefined) {
      const newStock = Math.max(0, inventory[newLog.compound] - doseMg);
      const updatedInv = { ...inventory, [newLog.compound]: newStock };
      setInventory(updatedInv);
      localStorage.setItem('peptide_inventory', JSON.stringify(updatedInv));
    }
  };

  const updateStock = (compound: string, amount: number) => {
    const updated = { ...inventory, [compound]: (inventory[compound] || 0) + amount };
    setInventory(updated);
    localStorage.setItem('peptide_inventory', JSON.stringify(updated));
  };

  const exportData = () => {
    const headers = ["Date", "Time", "Compound", "Dose", "Weight", "Site", "Observations"];
    const csvContent = [
      headers.join(","),
      ...logs.map(log => [
        log.date, log.time, log.compound, log.dose,
        log.weight || "N/A", log.site,
        `"${(log.observations || "").replace(/"/g, '""')}"`
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `INTEL-SYSTEM_EXPORT_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 1. RENDER LANDING PAGE
  if (!isAuthorized && showLanding) {
    return <LandingPage onEnter={() => setShowLanding(false)} />;
  }

  // 2. RENDER LOGIN TERMINAL
  if (!isAuthorized && !showLanding) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4 animate-in fade-in zoom-in duration-500">
        <button 
          onClick={() => setShowLanding(true)}
          className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-[#22d3ee] transition-colors text-[10px] font-black uppercase tracking-widest"
        >
          <ChevronLeft size={14} /> Back to Briefing
        </button>

        <div className="bg-[#0d0f14] border border-white/10 p-10 rounded-[3rem] w-full max-w-sm text-center shadow-[0_0_50px_rgba(34,211,238,0.1)]">
          <Lock className="text-[#22d3ee] w-12 h-12 mx-auto mb-6 opacity-50" />
          <h2 className="text-3xl font-black uppercase italic mb-8 tracking-tighter">Apex Terminal</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="text" 
              value={accessCode} 
              onChange={(e) => setAccessCode(e.target.value)} 
              placeholder="ENTER ACCESS KEY" 
              className="w-full bg-black border border-white/10 p-5 rounded-2xl text-center text-white font-black outline-none focus:border-[#22d3ee]" 
            />
            <button type="submit" className="w-full bg-[#22d3ee] text-black font-black uppercase py-5 rounded-2xl hover:brightness-110 transition-all">
              Connect
            </button>
          </form>

          <div className="mt-8 space-y-2 opacity-30">
            <p className="text-[8px] text-slate-400 uppercase font-black tracking-widest leading-relaxed text-center">
              Sovereign Node: v1.1.0 Stable
            </p>
            <p className="text-[7px] text-red-500 uppercase font-black tracking-[0.2em] leading-relaxed text-center uppercase">
              FOR LABORATORY RESEARCH USE ONLY. NOT FOR HUMAN CONSUMPTION.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 3. RENDER MAIN APPLICATION (AFTER LOGIN)
  return (
    <div className="min-h-screen bg-[#020202] text-white pb-32 selection:bg-[#22d3ee] selection:text-black">
      <nav className="px-6 py-6 flex justify-between items-center max-w-4xl mx-auto sticky top-0 z-[110] bg-black/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Activity className="text-[#22d3ee] w-5 h-5" />
          <span className="font-black uppercase italic text-xl tracking-tighter">Peptide OS</span>
        </div>
        <button onClick={() => setShowVault(true)} className="bg-[#22d3ee]/10 px-4 py-2 rounded-full border border-[#22d3ee]/20 text-[#22d3ee] text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all hover:bg-[#22d3ee]/20">
          <Package size={12}/> {isApex ? 'The Vault' : 'Basic Tier'}
        </button>
      </nav>

      {showVault && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-[#0d0f14] border border-[#22d3ee]/30 p-8 rounded-[2.5rem] max-w-md w-full space-y-6 shadow-[0_0_100px_rgba(34,211,238,0.1)]">
             <div className="flex justify-between items-center">
               <h3 className="text-xl font-black uppercase italic text-[#22d3ee]">Research Vault</h3>
               <button onClick={() => setShowVault(false)} className="text-slate-500 hover:text-white font-bold text-xs uppercase tracking-widest">Close</button>
             </div>
             
             <div className="space-y-4">
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Active Stock (mg)</span>
                {Object.entries(inventory).map(([comp, amt]) => (
                  <div key={comp} className="flex justify-between items-center bg-black/40 p-4 rounded-2xl border border-white/5">
                    <div>
                      <div className="text-[10px] font-black text-white uppercase italic opacity-60">{comp}</div>
                      <div className="text-lg font-black text-[#22d3ee]">{amt.toFixed(1)} <span className="text-[10px]">MG</span></div>
                    </div>
                    <button onClick={() => updateStock(comp, 5)} className="p-3 bg-[#22d3ee]/10 rounded-xl text-[#22d3ee] hover:bg-[#22d3ee] hover:text-black transition-all">
                      <Plus size={16}/>
                    </button>
                  </div>
                ))}
             </div>

             <div className="grid grid-cols-2 gap-3 mt-8">
               <button onClick={exportData} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-2 text-white text-[10px] font-black uppercase hover:bg-white/10 transition-all">
                  <Download size={14}/> Export CSV
               </button>
               <button onClick={() => { if(confirm('Purge all research data? This cannot be undone.')) { localStorage.clear(); window.location.reload(); } }} className="p-4 bg-red-500/5 border border-red-500/10 rounded-2xl flex items-center justify-center gap-2 text-red-500 text-[10px] font-black uppercase hover:bg-red-500 hover:text-white transition-all">
                  <Trash2 size={14}/> Wipe Node
               </button>
             </div>
          </div>
        </div>
      )}

      <main className="animate-in slide-in-from-bottom-4 duration-700">
        {activeTab === 'calc' && <Calculator onLog={addLog} />}
        {activeTab === 'journal' && <InteractiveLedger addLog={addLog} logs={logs} isApex={isApex} />}
        {activeTab === 'stats' && <AnalyticsChart logs={logs} isApex={isApex} />}
        {activeTab === 'protocols' && <Guide />}
      </main>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[95%] max-w-md z-[100]">
        <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 flex justify-between items-center shadow-2xl">
          {[
            { id: 'calc', icon: <Beaker size={20}/>, label: 'Matrix' },
            { id: 'journal', icon: <BookOpen size={20}/>, label: 'Journal' },
            { id: 'stats', icon: <LineChart size={20}/>, label: 'Stats' },
            { id: 'protocols', icon: <ShieldCheck size={20}/>, label: 'Guide' }
          ].map((tab) => (
            <button 
              key={tab.id} 
              onClick={() => setActiveTab(tab.id as any)} 
              className={`flex-1 py-4 rounded-2xl flex flex-col items-center transition-all ${activeTab === tab.id ? 'bg-[#22d3ee] text-black shadow-[0_0_20px_rgba(34,211,238,0.2)]' : 'text-slate-500 hover:text-white'}`}
            >
              {tab.icon}
              <span className="text-[8px] font-black uppercase mt-1 tracking-widest">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}