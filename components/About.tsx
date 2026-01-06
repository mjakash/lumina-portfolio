import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React & Next.js", 
  "Tailwind CSS", "Node.js", "GraphQL", 
  "Framer Motion", "Figma", "Git & CI/CD"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center hover:bg-white/10 transition-colors"
            >
              <div className="flex justify-center mb-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-full w-fit mx-auto">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Engineering with a <span className="text-violet-600 dark:text-violet-400">Design First</span> Approach
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-6 leading-relaxed">
              I'm not just a developer; I'm a digital craftsman. I believe that the best applications aren't just functional—they're intuitive, accessible, and delightful to use.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
              With over 5 years of experience in the industry, I've had the privilege of working with startups and Fortune 500 companies alike, helping them transform complex problems into elegant solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 dark:text-slate-200 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl opacity-20 blur-lg"></div>
             <div className="relative h-full w-full rounded-2xl overflow-hidden glass-card p-2">
                <img 
                  src="https://picsum.photos/800/600?grayscale" 
                  alt="Workspace" 
                  className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
