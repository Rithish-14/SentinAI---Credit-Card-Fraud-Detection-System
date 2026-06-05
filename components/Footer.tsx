
import React from 'react';
import { Shield, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-sky-400" />
              <span className="text-2xl font-bold gradient-text">SentinAI</span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-6">
              Empowering financial institutions with ethical, high-performance AI for a fraud-free digital economy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-sky-400 transition-colors">System Overview</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Compliance Status</a></li>
            </ul>
          </div>

          <div className="col-span-1 glass-card p-6 rounded-2xl">
            <h4 className="text-white font-bold mb-4">Developer Info</h4>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center text-sky-400 font-bold">
                RS
              </div>
              <div>
                <p className="font-bold">Rithish S</p>
                <p className="text-xs text-slate-500">AI/ML Engineer & Frontend Specialist</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Passionate about building secure, AI-driven applications that solve real-world financial challenges.
            </p>
            <a href="mailto:hello@sentinai.io" className="flex items-center gap-2 text-sky-400 text-sm hover:underline">
              <Mail size={14} /> Contact Developer
            </a>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-sm">
          <p>© 2024 SentinAI Fraud Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
