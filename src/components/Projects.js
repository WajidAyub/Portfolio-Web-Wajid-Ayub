import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaPython, FaCuttlefish, FaDatabase, FaBrain, FaChartLine, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiTensorflow, SiPandas, SiScikitlearn, SiOpencv, SiPlotly } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      title: "Personality Analysis System",
      description: "AI-powered profiling system analyzing behavioral patterns and personality traits.",
      longDescription: "A sophisticated multi-modal AI system that leverages the Big Five personality traits model. It analyzes text, audio, and visual cues to construct detailed psychological profiles, utilizing ensemble learning techniques for high-accuracy behavioral prediction.",
      image: "/images/personality.png",
      tech: [
        { name: "Python", icon: FaPython },
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "NLP", icon: SiPandas },
        { name: "Ensemble ML", icon: SiScikitlearn }
      ],
      github: "https://github.com/WajidAyub/personality-analysis",
      demo: "#",
      featured: true
    },
    {
      title: "Portfolio Tracker",
      description: "Real-time investment tracking with Google Sheets integration.",
      longDescription: "An automated investment dashboard that syncs with Google Sheets to track real-time stock prices, calculate gains/losses, and monitor dividend income. Features automatic sector allocation analysis and buy/sell transaction logging.",
      image: "/images/portfolio.png",
      tech: [
        { name: "Python", icon: FaPython },
        { name: "Google API", icon: FaDatabase },
        { name: "Plotly", icon: SiPlotly },
        { name: "Pandas", icon: SiPandas }
      ],
      github: "https://github.com/WajidAyub/portfolio-tracker",
      demo: "#",
      featured: true
    },
    {
      title: "Banking Management System",
      description: "Secure financial management system with advanced data structures.",
      longDescription: "A robust, secure banking infrastructure built with C++. Features include encrypted user authentication, file-based transaction logging, complex account management, and optimized data structures for high-speed record retrieval.",
      image: "/images/banking.png",
      tech: [
        { name: "C++", icon: FaCuttlefish },
        { name: "Encryption", icon: FaDatabase },
        { name: "File I/O", icon: FaBrain },
        { name: "DSA", icon: FaChartLine }
      ],
      github: "https://github.com/WajidAyub/banking-system",
      demo: "#",
      featured: true
    },
    {
      title: "Intelligent Game Engine",
      description: "AI-powered gaming framework with adaptive gameplay.",
      longDescription: "A custom-built game engine featuring an Entity Component System (ECS), integrated physics engine, and AI-driven NPC behaviors. Designed for creating adaptive gameplay experiences that evolve based on player actions.",
      image: "/images/game_engine.png",
      tech: [
        { name: "Python", icon: FaPython },
        { name: "ECS Arch", icon: FaBrain },
        { name: "OpenCV", icon: SiOpencv },
        { name: "Physics", icon: FaChartLine }
      ],
      github: "https://github.com/WajidAyub/game-engine",
      demo: "#",
      featured: false
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-brand-light dark:bg-brand-dark bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="w-full relative z-10"
      >
        <div className="container-custom">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="heading-lg mb-6 text-brand-textDark dark:text-brand-textLight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent mb-8 rounded-full mx-auto" />
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-light mx-auto">
              Showcasing innovative solutions and cutting-edge AI applications.
            </p>
          </div>
        </div>

        <div className="relative h-[650px] w-full container-custom">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button
              className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-accent-500 hover:border-accent-500 transition-all duration-300 hover:scale-110 shadow-lg"
              onClick={() => paginate(-1)}
            >
              <FaChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button
              className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-accent-500 hover:border-accent-500 transition-all duration-300 hover:scale-110 shadow-lg"
              onClick={() => paginate(1)}
            >
              <FaChevronRight size={24} />
            </button>
          </div>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) {
                  paginate(1);
                } else if (swipe > 10000) {
                  paginate(-1);
                }
              }}
              className="absolute w-full md:w-[90%] h-full left-0 right-0 mx-auto"
            >
              <div className="card h-full relative overflow-hidden group shadow-2xl shadow-black/50">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-brand-dark/60 z-10" />
                  <motion.img
                    key={projects[currentIndex].image}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-overlay"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>

                {/* Project Content - Centered Overlay */}
                <div className="relative z-10 h-full w-full p-8 md:p-16 flex flex-col justify-center items-center text-center">

                  {/* Featured Badge */}
                  {projects[currentIndex].featured && (
                    <div className="mb-6 bg-accent-500/20 text-accent-300 border border-accent-500/50 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-glow">
                      Featured Project
                    </div>
                  )}

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-neon"
                  >
                    {projects[currentIndex].title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-slate-200 mb-10 leading-relaxed text-xl max-w-3xl mx-auto font-light drop-shadow-sm"
                  >
                    {projects[currentIndex].longDescription}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-3 mb-12 justify-center"
                  >
                    {projects[currentIndex].tech.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium flex items-center gap-2 hover:bg-accent-500/20 hover:border-accent-500 transition-all duration-300 shadow-sm cursor-default"
                      >
                        <tech.icon className="text-accent-400" />
                        {tech.name}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-6 w-full max-w-md justify-center"
                  >
                    <a
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex-1 text-center flex items-center justify-center gap-2 group min-w-[140px]"
                    >
                      <FaGithub size={22} />
                      <span>Code</span>
                    </a>

                    <a
                      href={projects[currentIndex].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 text-center flex items-center justify-center gap-2 min-w-[140px]"
                    >
                      <FaExternalLinkAlt size={20} />
                      <span>Live Demo</span>
                    </a>
                  </motion.div>

                  {/* Decorative Number */}
                  <div className="absolute bottom-4 right-8 text-[120px] font-black text-white/5 select-none pointer-events-none">
                    {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex
                ? 'bg-accent-500 w-8 shadow-[0_0_10px_rgba(14,165,233,0.5)]'
                : 'bg-slate-700 w-2 hover:bg-slate-500'
                }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
