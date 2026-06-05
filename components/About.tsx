
import React from 'react';
import { BarChart3, Users, Fingerprint } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-slate-400 mb-6 text-lg">
            Our fraud detection system leverages state-of-the-art Machine Learning models to analyze credit card transactions as they occur. 
            By building a baseline of "normal" behavior, the system can instantly flag transactions that deviate from the expected pattern.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center">
                <BarChart3 className="text-sky-400" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Data ingestion</h4>
                <p className="text-slate-400">Aggregating historical and real-time transaction data including location, amount, and frequency.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center">
                <Fingerprint className="text-indigo-400" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Behavioral Fingerprinting</h4>
                <p className="text-slate-400">Each user has a unique spending profile. AI detects even slight shifts in this fingerprint.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                <Users className="text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Global Knowledge</h4>
                <p className="text-slate-400">The model learns from millions of global fraudulent attempts to stay ahead of scammers.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="glass-card rounded-3xl p-8 relative z-10">
            <img 
              src="https://picsum.photos/seed/fraud/800/600" 
              alt="AI Fraud Analysis" 
              className="rounded-xl w-full h-auto shadow-2xl"
            />
            <div className="mt-8 grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-slate-800/50 rounded-xl">
                <div className="text-sky-400 text-3xl font-bold">20ms</div>
                <div className="text-slate-500 text-sm">Response Time</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl">
                <div className="text-emerald-400 text-3xl font-bold">98%</div>
                <div className="text-slate-500 text-sm">Precision</div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sky-500/20 blur-[120px] rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
