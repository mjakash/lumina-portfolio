import React from 'react';
import { Hexagon, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <Hexagon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            <span className="font-bold text-lg text-slate-900 dark:text-white">Lumina</span>
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Lumina Portfolio. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-violet-600 dark:hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-violet-600 dark:hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-violet-600 dark:hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
