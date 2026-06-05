
import React from 'react';

const techGroups = [
  {
    title: "Frontend Architecture",
    items: ["React 18", "TypeScript", "Tailwind CSS", "Recharts", "Lucide Icons"]
  },
  {
    title: "Intelligence Layer",
    items: ["Gemini 3 Flash", "Neural Networks", "Scikit-Learn", "Feature Engineering"]
  },
  {
    title: "Infrastructure",
    items: ["Node.js ESM", "MongoDB / Atlas", "Docker Containers", "Vercel / Edge"]
  }
];

const TechStack: React.FC = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">The <span className="text-sky-400">SentinAI</span> Stack</h2>
        <p className="text-slate-400">High-performance technologies working together for seamless security.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techGroups.map((group, idx) => (
          <div key={idx} className="glass-card p-8 rounded-3xl border-t-4 border-t-sky-500/50">
            <h3 className="text-xl font-bold mb-6 text-sky-300">{group.title}</h3>
            <ul className="space-y-4">
              {group.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 glass-card rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h3 className="text-2xl font-bold mb-4">Open Source Foundations</h3>
          <p className="text-slate-400">
            SentinAI is built on open standards and modern AI libraries. We believe in transparent machine learning that can be audited for fairness and accuracy.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center p-3">
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
          </div>
           <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center p-3">
             <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit" />
          </div>
           <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center p-3">
             <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
