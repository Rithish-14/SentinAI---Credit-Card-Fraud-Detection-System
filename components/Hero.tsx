
import React from 'react';
import { ShieldCheck, Activity, Zap, Lock } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="relative overflow-hidden py-16 lg:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Next-Gen <span className="gradient-text">Fraud Intelligence</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            Protect your assets with our advanced AI system that detects fraudulent transactions in milliseconds using deep learning and behavioral analysis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-sky-500/20"
            >
              Start Live Simulation
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg border border-slate-700 transition-all">
              View Model Documentation
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HeroCard 
            icon={<ShieldCheck className="text-sky-400" />}
            title="Real-time Analysis"
            desc="Instant processing of transaction metadata to stop fraud before it happens."
          />
          <HeroCard 
            icon={<Activity className="text-emerald-400" />}
            title="Pattern Recognition"
            desc="AI that understands user habits and identifies subtle anomalies."
          />
          <HeroCard 
            icon={<Zap className="text-amber-400" />}
            title="99.9% Accuracy"
            desc="High-precision models trained on millions of historical data points."
          />
          <HeroCard 
            icon={<Lock className="text-indigo-400" />}
            title="Zero Data Leaks"
            desc="Privacy-first approach with anonymized data processing."
          />
        </div>
      </div>
    </div>
  );
};

const HeroCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="glass-card p-6 rounded-2xl transform transition-transform hover:-translate-y-1">
    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Hero;
