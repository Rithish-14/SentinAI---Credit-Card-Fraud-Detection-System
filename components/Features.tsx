
import React from 'react';
import { Eye, CloudLightning, ShieldAlert, TrendingDown, Cpu, Globe } from 'lucide-react';

const features = [
  {
    icon: <CloudLightning className="text-sky-400" />,
    title: "Real-time Detection",
    desc: "Transactions are scanned and scored against our fraud model in under 50 milliseconds."
  },
  {
    icon: <Cpu className="text-indigo-400" />,
    title: "Neural Networks",
    desc: "Utilizing Deep Neural Networks to understand complex non-linear fraudulent relationships."
  },
  {
    icon: <ShieldAlert className="text-rose-400" />,
    title: "Smart Notifications",
    desc: "Automated triggers for two-factor authentication when a high-risk transaction is detected."
  },
  {
    icon: <TrendingDown className="text-emerald-400" />,
    title: "Loss Mitigation",
    desc: "Dramatically reduces financial liability for banks and retail customers."
  },
  {
    icon: <Eye className="text-amber-400" />,
    title: "Anomaly Visualization",
    desc: "Deep insights into why a transaction was flagged with human-readable reasoning."
  },
  {
    icon: <Globe className="text-purple-400" />,
    title: "Global Mesh",
    desc: "A distributed system that shares threat intelligence across multiple card networks."
  }
];

const Features: React.FC = () => {
  return (
    <div className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Robust Features for <span className="text-sky-400">Complete Security</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Explore the powerful tools we use to combat financial crime and keep digital payments safe for everyone.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl hover:border-sky-500/30 transition-all group">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
