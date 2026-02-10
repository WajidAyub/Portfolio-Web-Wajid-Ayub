import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaKaggle, FaEnvelope, FaBrain, FaDatabase, FaCode } from 'react-icons/fa';
import { SiPython, SiTensorflow, SiPytorch, SiPandas, SiReact } from 'react-icons/si';
import DecryptedText from './DecryptedText';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-brand-dark bg-grid-pattern">
      {/* Dynamic Background Elements - Animated */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glowing Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-[100px] mix-blend-screen"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen"
        />

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 backdrop-blur-sm text-accent-300 font-bold text-sm mb-6 shadow-glow">
              👋 Hello, I'm
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="heading-lg mb-6">
            Wajid <span className="text-gradient drop-shadow-neon">Ayub</span>
          </motion.h1>



          <div className="h-16 mb-8 text-2xl md:text-3xl text-white font-light flex items-center drop-shadow-md overflow-hidden">
            <span className="mr-4 text-accent-400 animate-pulse font-bold text-4xl">►</span>
            <DecryptedText
              texts={[
                'AI & Machine Learning Engineer',
                'Python',
                'Machine Learning',
                'Deep Learning',
                'ANN',
                'Data Analysis',
                'Problem Solving',
                'Analytical Thinking'
              ]}
              speed={4000}
              className="font-semibold text-slate-100 min-w-[300px]"
            />
          </div>

          <motion.p variants={itemVariants} className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed font-medium drop-shadow-sm">
            I build intelligence into systems. Specializing in designing advanced AI algorithms and creating data-driven solutions that tackle complex real-world challenges.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary group"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-outline"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6">
            {[
              { icon: FaGithub, href: 'https://github.com/WajidAyub', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/wajid-ayub', label: 'LinkedIn' },
              { icon: FaKaggle, href: 'https://kaggle.com/wajidayub', label: 'Kaggle' },
              { icon: FaEnvelope, href: 'mailto:wajidayubwajid@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10, color: "#2dd4bf" }}
                className="text-slate-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/5 hover:shadow-neon"
                aria-label={label}
                custom={index}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Picture - Sleek Tech Portal */}
        <motion.div
          variants={scaleVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex justify-center items-center relative"
        >
          {/* Glowing Backend Ring - INTENSE */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/40 via-transparent to-purple-500/40 rounded-full blur-[80px] animate-pulse-slow" />

          {/* Tech Portal Container - Circular Planet Edition */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[380px] h-[380px] rounded-full p-2 bg-gradient-to-b from-cyan-500/20 to-purple-500/10 backdrop-blur-md border border-white/10 shadow-neon-strong group"
          >
            {/* Inner Glow Border */}
            <div className="absolute inset-0 rounded-full border border-white/20 shadow-[inset_0_0_20px_rgba(45,212,191,0.2)] pointer-events-none z-10" />

            {/* Image Wrapper */}
            <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-900/80 z-10">
              {/* Tech Grid Overlay */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-10" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(18,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-10" />

              <img
                src="/images/profile.png"
                alt="Wajid Ayub"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter contrast-125"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/380x380?text=Profile+Pic";
                }}
              />

              {/* Advanced Scanning Effect */}
              <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none rounded-full overflow-hidden">
                <div className="w-full h-[2px] bg-accent-400 shadow-[0_0_15px_rgba(45,212,191,1)] animate-scan relative">
                  <div className="absolute right-0 -top-1 w-16 h-4 bg-accent-500/20 skew-x-12 blur-sm" />
                </div>
              </div>

              {/* Digital Status Badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-accent-500/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-accent-300 tracking-widest">ONLINE</span>
              </div>
            </div>

            {/* Solar System Orbiting Skills */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0 hidden xl:block">
              {/* Inner Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-white/5"
              >
                {[
                  { icon: SiPython, color: "#3776AB", label: "Python" },
                  { icon: SiTensorflow, color: "#FF6F00", label: "TensorFlow" },
                  { icon: FaBrain, color: "#FFD700", label: "AI" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotate(${i * 120}deg) translateY(-220px) rotate(-${i * 120}deg)`
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="bg-brand-dark/80 backdrop-blur-md border border-white/10 p-3 rounded-full shadow-glow"
                    >
                      <item.icon size={24} color={item.color} />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50px] rounded-full border border-white/5 border-dashed"
              >
                {[
                  { icon: FaDatabase, color: "#4DB33D", label: "Data" },
                  { icon: SiPytorch, color: "#EE4C2C", label: "PyTorch" },
                  { icon: SiPandas, color: "#150458", label: "Pandas" },
                  { icon: SiReact, color: "#61DAFB", label: "React" },
                  { icon: FaCode, color: "#ffffff", label: "Code" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `rotate(${i * 72}deg) translateX(320px) rotate(-${i * 72}deg)`
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="bg-brand-dark/80 backdrop-blur-md border border-white/10 p-3 rounded-full shadow-glow"
                    >
                      <item.icon size={24} color={item.color} />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-slate-500 tracking-[0.2em] uppercase font-semibold">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-accent-500 to-transparent opacity-70" />
      </motion.div>
    </section >
  );
};

export default Hero;
