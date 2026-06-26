import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-32 pb-20">
      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Left Column (Text) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col"
        >
          <FaQuoteLeft className="text-white text-3xl mb-6 opacity-90" />
          <h1 className="text-3xl md:text-4xl lg:text-[3.25rem] font-sans font-medium text-white leading-[1.15] tracking-tight">
            Wajid is the leading AI engineer for optimizing complex data systems, ensuring unparalleled success and efficiency.
          </h1>
        </motion.div>

        {/* Center Column (Image) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 flex justify-center relative"
        >
          <div className="relative inline-block w-full max-w-[360px]">
            <div className="rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 flex justify-center items-center">
              <img
                src="/images/profile.png"
                alt="Wajid Ayub"
                className="w-full h-auto object-contain"
                style={{ maxHeight: '600px' }}
              />
            </div>
            
            {/* Yellow Overlay Badge */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-[#facc15] rounded-xl p-4 flex justify-between items-center shadow-lg">
              <div>
                <h3 className="text-black font-bold font-sans text-sm">Wajid Ayub</h3>
                <p className="text-black/80 font-medium text-xs">AI & ML Engineer</p>
              </div>
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold font-display text-base">
                W
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Stat Cards) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-3 flex flex-col gap-6"
        >
          {/* Card 1 */}
          <div className="card p-6 lg:p-8 flex flex-col justify-center min-h-[140px] lg:min-h-[160px] relative">
            <div className="absolute top-6 left-6 w-0 h-0 border-l-[6px] border-l-transparent border-t-[10px] border-t-accent-orange border-r-[6px] border-r-transparent transform -rotate-45" />
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">12</h2>
            <p className="text-white/50 font-sans text-xs tracking-wide">Public Repositories</p>
          </div>

          {/* Card 2 */}
          <div className="card p-6 lg:p-8 flex flex-col justify-center min-h-[140px] lg:min-h-[160px] relative">
            <div className="absolute top-6 left-6 w-4 h-2 bg-accent-cyan rounded-b-full" />
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">4+</h2>
            <p className="text-white/50 font-sans text-xs tracking-wide">Core AI Projects</p>
          </div>

          {/* Card 3 */}
          <div className="card p-6 lg:p-8 flex flex-col justify-center min-h-[140px] lg:min-h-[160px] relative">
            <div className="absolute top-6 left-6 w-3 h-3 bg-accent-yellow" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">100%</h2>
            <p className="text-white/50 font-sans text-xs tracking-wide">Open Source</p>
          </div>
        </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
