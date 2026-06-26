import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black border-t border-white/10">
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="heading-lg max-w-3xl">
              Bridging the gap between complex algorithms and practical applications.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio Column */}
            <motion.div variants={itemVariants} className="space-y-6 text-white/60 text-lg leading-relaxed font-sans">
              <p>
                I am a passionate <span className="text-white font-medium">AI & Machine Learning Engineer</span> dedicated to building intelligent systems that solve real-world problems.
              </p>
              <p>
                With a strong foundation in Artificial Intelligence and learning about Deep Learning, Data Analysis, and Mathematics, I bridge the gap between complex algorithms and practical applications. My background has equipped me with a deep understanding of how to architect models that scale.
              </p>
              <p>
                My journey involves continuous learning and experimenting with cutting-edge technologies to create impactful solutions. Whether it's training a neural network or optimizing an inference pipeline, I am driven by the intersection of data and software engineering.
              </p>
            </motion.div>

            {/* High Contrast Stats */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
              <div className="card p-8 flex flex-col justify-center min-h-[200px] relative">
                <div className="absolute top-6 left-6 w-3 h-3 bg-accent-yellow rounded-full" />
                <h3 className="text-5xl font-display font-bold text-white mb-2">3+</h3>
                <p className="text-white/50 font-sans text-sm tracking-wide">Years Experience</p>
              </div>
              
              <div className="card p-8 flex flex-col justify-center min-h-[200px] relative">
                <div className="absolute top-6 left-6 w-3 h-3 bg-accent-cyan rounded-full" />
                <h3 className="text-5xl font-display font-bold text-white mb-2">12+</h3>
                <p className="text-white/50 font-sans text-sm tracking-wide">Projects Completed</p>
              </div>

              <div className="card p-8 flex flex-col justify-center min-h-[200px] relative sm:col-span-2">
                <div className="absolute top-6 left-6 w-3 h-3 bg-accent-orange rounded-full" />
                <h3 className="text-5xl font-display font-bold text-white mb-2">BS AI</h3>
                <p className="text-white/50 font-sans text-sm tracking-wide">Education & Focus</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
