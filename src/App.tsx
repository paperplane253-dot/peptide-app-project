import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/Home';
import { LandingPage } from './components/LandingPage';
import { Calculator } from './components/Calculator';
import { InteractiveLedger } from './components/InteractiveLedger'; 
import { AnalyticsChart } from './components/AnalyticsChart';
import { Guide } from './components/Guide';
import { Activity, Beaker, LineChart, BookOpen, ShieldCheck, Lock, Trash2, Package, Plus, Download, ChevronLeft } from 'lucide-react';

// Wrap the existing App logic in a "PeptideApp" component
const PeptideApp = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isApex, setIsApex] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
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
      setShowLanding(false);
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
    } else { alert('ACCESS DENIED'); }
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
      const updatedInv = { ...inventory, [newLog.compound]: Math.max(0, inventory[newLog.compound] - doseMg) };
      setInventory(updatedInv);
      localStorage.setItem('peptide_inventory', JSON.stringify(updatedInv));
    }
  };

  const updateStock = (compound: string, amount: number) => {
    const updated = { ...inventory, [compound]: (inventory[compound] || 0) + amount };
    setInventory(updated);
    localStorage.setItem('peptide_inventory', JSON.stringify(updated));
  };

  const exportData = () => { /* ... existing export logic ... */ };

  if (!isAuthorized && showLanding) return <LandingPage onEnter={() => setShowLanding(false)} />;
  if (!isAuthorized && !showLanding) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
        <button onClick={() => window.location.href='/'} className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-[#22d3ee] transition-colors text-[10px] font-black uppercase tracking-widest">
          <ChevronLeft size={14} /> Exit to Hub
        </button>
        <div className="bg-[#0d0f14] border border-white/10 p-10 rounded-[3rem] w-full max-w-sm text-center">
          <Lock className="text-[#22d3ee] w-12 h-12 mx-auto mb-6 opacity-50" />
          <h2 className="text-3xl font-black uppercase italic mb-8 tracking-tighter">Terminal</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="text" value={accessCode} onChange={(e) => setAccessCode(e.target.value)} placeholder="ENTER KEY" className="w-full bg-black border border-white/10 p-5 rounded-2xl text-center text-white font-black" />
            <button type="submit" className="w-full bg-[#22d3ee] text-black font-black uppercase py-5 rounded-2xl">Connect</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020202] text-white pb-32">
       {/* ... Your existing App JSX (Nav, Main, Navigation Bar) ... */}
       {/* Use the same code you had in your return statement before */}
       <nav className="px-6 py-6 flex justify-between items-center max-w-4xl mx-auto sticky top-0 z-[110] bg-black/50 backdrop-blur-md">
        <button onClick={() => window.location.href='/'} className="flex items-center gap-2">
          <Activity className="text-[#22d3ee] w-5 h-5" />
          <span className="font-black uppercase italic text-xl tracking-tighter">Peptide OS</span>
        </button>
        <button onClick={() => setShowVault(true)} className="bg-[#22d3ee]/10 px-4 py-2 rounded-full border border-[#22d3ee]/20 text-[#22d3ee] text-[10px] font-black uppercase tracking-widest">
          <Package size={12}/> {isApex ? 'Vault' : 'Basic'}
        </button>
      </nav>

      {showVault && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm">
          <div className="bg-[#0d0f14] border border-[#22d3ee]/30 p-8 rounded-[2.5rem] max-w-md w-full">
             <div className="flex justify-between items-center mb-6">
               <h3 className="text-xl font-black uppercase italic text-[#22d3ee]">Vault</h3>
               <button onClick={() => setShowVault(false)} className="text-slate-500 font-bold text-xs uppercase tracking-widest">Close</button>
             </div>
             {Object.entries(inventory).map(([comp, amt]) => (
                <div key={comp} className="flex justify-between items-center bg-black/40 p-4 rounded-2xl border border-white/5 mb-2">
                  <div className="text-[10px] font-black text-white uppercase opacity-60">{comp}</div>
                  <div className="text-lg font-black text-[#22d3ee]">{amt.toFixed(1)} MG</div>
                  <button onClick={() => updateStock(comp, 5)} className="p-2 bg-[#22d3ee]/10 rounded-lg text-[#22d3ee]">+</button>
                </div>
             ))}
          </div>
        </div>
      )}

      <main>
        {activeTab === 'calc' && <Calculator onLog={addLog} />}
        {activeTab === 'journal' && <InteractiveLedger addLog={addLog} logs={logs} isApex={isApex} />}
        {activeTab === 'stats' && <AnalyticsChart logs={logs} isApex={isApex} />}
        {activeTab === 'protocols' && <Guide />}
      </main>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[95%] max-w-md z-[100]">
        <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 flex justify-between items-center">
          {[{ id: 'calc', icon: <Beaker size={20}/>, label: 'Matrix' }, { id: 'journal', icon: <BookOpen size={20}/>, label: 'Journal' }, { id: 'stats', icon: <LineChart size={20}/>, label: 'Stats' }, { id: 'protocols', icon: <ShieldCheck size={20}/>, label: 'Guide' }].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`flex-1 py-4 rounded-2xl flex flex-col items-center ${activeTab === tab.id ? 'bg-[#22d3ee] text-black' : 'text-slate-500'}`}>
              {tab.icon}
              <span className="text-[8px] font-black uppercase mt-1 tracking-widest">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// The NEW App component that handles the routes
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peptides" element={<PeptideApp />} />
        {/* Redirect any other address to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}