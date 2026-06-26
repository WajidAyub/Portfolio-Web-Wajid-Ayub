import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 85 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 80 }
      ],
      color: "bg-accent-yellow"
    },
    {
      title: "AI & Data Science",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Pandas", level: 95 },
        { name: "Scikit-learn", level: 90 }
      ],
      color: "bg-accent-cyan"
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Linux", level: 85 },
        { name: "Git", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "Hadoop", level: 75 }
      ],
      color: "bg-accent-orange"
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black border-t border-white/10">
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="heading-lg mb-4">Core Competencies</h2>
            <p className="text-white/60 max-w-2xl font-sans text-lg">
              A comprehensive toolkit for building intelligent systems and scalable architectures.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="card p-10 relative"
              >
                <div className={`absolute top-10 left-10 w-3 h-3 rounded-sm ${category.color} transform rotate-45`} />
                <h3 className="text-2xl font-display font-medium text-white mb-8 pl-8">{category.title}</h3>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/80 text-sm font-sans">{skill.name}</span>
                        <span className="text-white/40 font-mono text-sm">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + (skillIndex * 0.1) }}
                          className="h-full bg-white rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
