import React, { useState } from 'react';
import { Search, AlertTriangle, CheckCircle, Loader2, Info, ShieldAlert } from 'lucide-react';
import { analyzeTransaction } from '../services/geminiService';
import { FraudAnalysisResult } from '../types';

const FraudChecker: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    location: '',
    time: '',
    cardType: 'Visa Platinum',
    merchant: '',
  });
  const [result, setResult] = useState<FraudAnalysisResult | null>(null);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const res = await analyzeTransaction(
      Number(formData.amount),
      formData.location,
      formData.time,
      formData.cardType,
      formData.merchant
    );

    setResult(res);
    setLoading(false);
  };

  const setPreset = (type: 'safe' | 'suspicious') => {
    if (type === 'safe') {
      setFormData({
        amount: '45.50',
        location: 'Local Grocery Store (Home City)',
        time: '12:30 PM',
        cardType: 'Visa Platinum',
        merchant: 'Whole Foods',
      });
    } else {
      setFormData({
        amount: '4500.00',
        location: 'Lagos, Nigeria (Unexpected Region)',
        time: '03:15 AM',
        cardType: 'Visa Platinum',
        merchant: 'HighEnd Tech Store',
      });
    }
  };

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Transaction <span className="text-sky-400">Simulator</span></h2>
        <p className="text-slate-400">Test our AI logic by entering transaction details or using a preset scenario.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Input Parameters</h3>
            <div className="flex gap-2">
              <button onClick={() => setPreset('safe')} className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors">Safe Preset</button>
              <button onClick={() => setPreset('suspicious')} className="text-xs bg-rose-500/10 text-rose-400 px-2 py-1 rounded border border-rose-500/20 hover:bg-rose-500/20 transition-colors">Risk Preset</button>
            </div>
          </div>

          <form onSubmit={handleCheck} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Transaction Amount ($)</label>
              <input
                type="number"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Location</label>
              <input
                type="text"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="City, Country"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Time</label>
                <input
                  type="text"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  placeholder="HH:MM AM/PM"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Card Type</label>
                <select
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                  value={formData.cardType}
                  onChange={(e) => setFormData({ ...formData, cardType: e.target.value })}
                >
                  <option>Visa Platinum</option>
                  <option>Mastercard Gold</option>
                  <option>Amex Centurion</option>
                  <option>Discovery Student</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Merchant</label>
              <input
                type="text"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                value={formData.merchant}
                onChange={(e) => setFormData({ ...formData, merchant: e.target.value })}
                placeholder="Store or Service Name"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-slate-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all mt-6"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" /> Analyzing...
                </>
              ) : (
                <>
                  <Search size={20} /> Check Transaction
                </>
              )}
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <div className="glass-card p-8 rounded-2xl flex-grow flex flex-col items-center justify-center text-center">
            {!result && !loading && (
              <div className="text-slate-500">
                <Info size={48} className="mx-auto mb-4 opacity-20" />
                <p>Run a simulation to see the AI analysis results here.</p>
              </div>
            )}

            {loading && (
              <div className="space-y-4 w-full">
                <div className="h-4 bg-slate-800 rounded animate-pulse w-3/4 mx-auto"></div>
                <div className="h-4 bg-slate-800 rounded animate-pulse w-1/2 mx-auto"></div>
                <div className="h-24 bg-slate-800 rounded animate-pulse w-full mt-6"></div>
              </div>
            )}

            {result && (
              <div className={`w-full animate-in fade-in duration-500`}>
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${result.isFraud ? 'bg-rose-500/20 text-rose-500' : 'bg-emerald-500/20 text-emerald-500'}`}>
                  {result.isFraud ? <AlertTriangle size={40} /> : <CheckCircle size={40} />}
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${result.isFraud ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {result.isFraud ? 'Fraudulent Detected' : 'Transaction Legitimate'}
                </h3>
                <div className="mb-6 flex justify-center items-center gap-2">
                  <span className="text-slate-400">Confidence:</span>
                  <div className="w-32 bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${result.isFraud ? 'bg-rose-500' : 'bg-emerald-500'}`} 
                      style={{ width: `${result.confidence * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-sm">{(result.confidence * 100).toFixed(1)}%</span>
                </div>
                <div className="text-left bg-slate-900/50 p-4 rounded-xl border border-slate-800 mb-4">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Reasoning</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{result.reason}</p>
                </div>
                <div className="text-left bg-sky-500/5 p-4 rounded-xl border border-sky-500/10">
                  <p className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-2">Recommendation</p>
                  <p className="text-sky-300 text-sm italic">"{result.recommendation}"</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <ShieldAlert size={18} className="text-amber-400" />
              Security Note
            </h4>
            <p className="text-slate-400 text-xs">
              This simulation does not use real banking infrastructure. All data processed here is temporary and used strictly for demonstration of AI behavioral analysis logic. No credit card numbers are stored or transmitted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudChecker;