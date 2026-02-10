import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaPython, FaCuttlefish, FaDatabase, FaHtml5, FaCss3Alt,
  FaBrain, FaCode, FaTools
} from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiPandas, SiScikitlearn, SiOpencv, SiLinux, SiGit, SiMysql, SiMongodb, SiApachehadoop } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: FaCode,
      color: "bg-blue-500/10 text-blue-400",
      skills: [
        { name: "Python", icon: FaPython, level: 95 },
        { name: "C++", icon: FaCuttlefish, level: 85 },
        { name: "SQL", icon: FaDatabase, level: 90 },
        { name: "HTML", icon: FaHtml5, level: 80 },
        { name: "CSS", icon: FaCss3Alt, level: 85 }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: FaBrain,
      color: "bg-accent-500/10 text-accent-400",
      skills: [
        { name: "TensorFlow", icon: SiTensorflow, level: 90 },
        { name: "PyTorch", icon: SiPytorch, level: 85 },
        { name: "Pandas", icon: SiPandas, level: 95 },
        { name: "Scikit-learn", icon: SiScikitlearn, level: 90 },
        { name: "OpenCV", icon: SiOpencv, level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: FaTools,
      color: "bg-emerald-500/10 text-emerald-400",
      skills: [
        { name: "Linux", icon: SiLinux, level: 85 },
        { name: "Git", icon: SiGit, level: 90 },
        { name: "MySQL", icon: SiMysql, level: 85 },
        { name: "MongoDB", icon: SiMongodb, level: 80 },
        { name: "Hadoop", icon: SiApachehadoop, level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-brand-light dark:bg-brand-dark bg-grid-pattern">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary-900/5 -skew-y-6 transform -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="heading-lg mb-6 text-brand-textDark dark:text-brand-textLight">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent systems and data-driven solutions.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="card p-8 hover:border-accent-500/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-xl ${category.color}`}>
                    <category.icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <skill.icon className="text-slate-500 dark:text-slate-400 group-hover:text-accent-500 transition-colors" />
                          <span className="text-slate-700 dark:text-slate-200 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-slate-400 text-sm font-semibold">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                          className="h-full bg-accent-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-brand-textDark dark:text-white">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP',
                'Data Analysis', 'Statistical Modeling', 'Algorithm Design', 'System Architecture',
                'API Development', 'Cloud Computing', 'Docker', 'Jupyter Notebooks'
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-sm font-medium hover:border-accent-500/50 hover:text-accent-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
