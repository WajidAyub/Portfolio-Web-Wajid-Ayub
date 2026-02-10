import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-brand-dark bg-grid-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow delay-1000" />

        {/* Floating Particles - consistent with Hero */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-accent-400/30 rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, 0],
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

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              About <span className="text-gradient drop-shadow-neon">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent mx-auto" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Bio */}
            <motion.div variants={itemVariants} className="space-y-6 text-slate-300 leading-relaxed text-lg p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-accent-500/30 transition-colors shadow-lg group">
              <p>
                I am a passionate <span className="text-accent-400 font-semibold group-hover:text-accent-300 transition-colors">AI & Machine Learning Engineer</span> dedicated to building intelligent systems that solve real-world problems.
              </p>
              <p>
                With a strong foundation in Artificial Intelligence and learning about Deep Learning, Data Analysis, and Mathematics, I bridge the gap between complex algorithms and practical applications.
              </p>
              <p>
                My journey involves continuous learning and experimenting with cutting-edge technologies to create impactful solutions.
              </p>
            </motion.div>

            {/* Right: Stats/Highlights */}
            <motion.div variants={itemVariants} className="grid gap-6">
              {[
                { icon: FaGraduationCap, title: "Education", desc: "BS Artificial Intelligence (In Progress)" },
                { icon: FaBriefcase, title: "Experience", desc: "Freelance AI Developer & Researcher" },
                { icon: FaCode, title: "Development", desc: "Python, TensorFlow, PyTorch, React" },
                { icon: FaLightbulb, title: "Soft Skills", desc: "Problem Solving, Leadership, Communication" }
              ].map((item, index) => (
                <motion.div
                  whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  key={index}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all flex items-start gap-4 shadow-sm group"
                >
                  <div className="p-3 rounded-lg bg-accent-500/10 text-accent-400 group-hover:text-accent-300 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg group-hover:text-accent-200 transition-colors">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
