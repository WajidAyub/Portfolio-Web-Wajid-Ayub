import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GitHub = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = {
    languages: [
      { name: "Python", percentage: 65, color: "bg-accent-cyan" },
      { name: "Jupyter", percentage: 20, color: "bg-accent-yellow" },
      { name: "C++", percentage: 15, color: "bg-accent-orange" }
    ]
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-black border-t border-white/10">
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-16">
            <h2 className="heading-lg mb-4">Open Source</h2>
            <p className="text-white/60 max-w-2xl font-sans text-lg">
              Tracking my contributions to the developer ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Language Distribution */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-10 relative"
            >
              <div className="absolute top-10 left-10 w-3 h-3 bg-white rounded-full" />
              <h3 className="text-3xl font-display font-medium text-white mb-10 pl-8">Languages</h3>
              <div className="space-y-8 pl-8">
                {stats.languages.map((lang, index) => (
                  <div key={lang.name} className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/80 font-sans text-base">{lang.name}</span>
                      <span className="text-white/40 font-mono text-sm">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                        className={`h-full ${lang.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Stat Cards */}
            <div className="grid grid-cols-2 gap-8">
              <div className="card p-8 flex flex-col justify-center relative col-span-2 sm:col-span-1">
                <div className="absolute top-8 left-8 w-3 h-3 bg-accent-cyan rounded-sm transform rotate-45" />
                <h3 className="text-6xl font-display font-bold text-white mb-2 mt-4 pl-6">1.2K</h3>
                <p className="text-white/50 font-sans text-sm tracking-wide pl-6">Total Commits</p>
              </div>
              
              <div className="card p-8 flex flex-col justify-center relative col-span-2 sm:col-span-1">
                <div className="absolute top-8 left-8 w-3 h-3 bg-accent-yellow rounded-full" />
                <h3 className="text-6xl font-display font-bold text-white mb-2 mt-4 pl-6">45</h3>
                <p className="text-white/50 font-sans text-sm tracking-wide pl-6">Repositories</p>
              </div>

              <div className="card p-8 flex flex-col justify-center relative col-span-2">
                <div className="absolute top-8 left-8 w-3 h-3 bg-accent-orange" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                <h3 className="text-6xl font-display font-bold text-white mb-2 mt-4 pl-6">30d</h3>
                <p className="text-white/50 font-sans text-sm tracking-wide pl-6">Current Streak</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
