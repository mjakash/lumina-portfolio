import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-500/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob dark:bg-violet-800/20"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-500/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000 dark:bg-fuchsia-800/20"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000 dark:bg-cyan-800/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 dark:bg-white/5 border border-violet-200/20 dark:border-violet-500/20 backdrop-blur-sm text-violet-600 dark:text-violet-300 text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              <span>Available for new projects</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Designing the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 animate-gradient-x">
                Future of Web
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I build pixel-perfect, accessible, and high-performance web experiences.
              Bridging the gap between design and engineering with React and modern CSS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 transition-all"
              >
                View Work
                <ArrowRight size={20} />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm text-slate-900 dark:text-white font-bold text-lg hover:bg-white/80 dark:hover:bg-slate-700 transition-all"
              >
                Download CV
                <Download size={20} />
              </motion.button>
            </div>
          </motion.div>

          {/* Visual Element / Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-fuchsia-500/20 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border border-cyan-500/20 animate-[spin_20s_linear_infinite]" />

              {/* Central Card / Image Placeholder */}
              <div className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-3xl glass-card overflow-hidden flex items-center justify-center group">
                <img
                  src="https://picsum.photos/600/600"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white font-bold text-xl">David Chen</p>
                    <p className="text-violet-200">Senior Frontend Engineer</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 glass-card p-4 rounded-2xl flex items-center gap-3 shadow-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-xl">⚛️</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Expert in</p>
                  <p className="font-bold text-slate-900 dark:text-white">React 18</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 glass-card p-4 rounded-2xl flex items-center gap-3 bg-white/90 dark:bg-slate-800/90 shadow-lg"
              >
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="text-xl">🎨</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Focus on</p>
                  <p className="font-bold text-slate-900 dark:text-white">UI Design</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
