import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaChartLine, FaEye, FaDatabase, FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const researchAreas = [
    {
      title: "AI in Behavioral Analysis",
      description: "Exploring machine learning applications in psychological profiling and human behavior prediction",
      icon: FaBrain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "ML Optimization",
      description: "Developing efficient algorithms and optimization techniques for machine learning models",
      icon: FaChartLine,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Computer Vision for Automation",
      description: "Building intelligent visual systems for industrial automation and quality control",
      icon: FaEye,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Data-Driven Decision Making",
      description: "Creating frameworks for extracting actionable insights from complex datasets",
      icon: FaDatabase,
      color: "from-orange-500 to-red-500"
    }
  ];

  const goals = [
    {
      title: "Open Source Contributions",
      description: "Contribute to open-source AI/ML projects and build a strong developer community",
      icon: FaCode,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Scalable AI Systems",
      description: "Design and implement enterprise-grade AI solutions that can handle real-world scale",
      icon: FaRocket,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Industry Collaboration",
      description: "Bridge the gap between academic research and industry applications",
      icon: FaUsers,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Innovation & Discovery",
      description: "Push the boundaries of AI research and discover new applications",
      icon: FaLightbulb,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="research" className="section-padding bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Research & Goals</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advancing the frontiers of artificial intelligence through innovative research and collaborative development
            </p>
          </div>

          {/* Research Interests */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Research Interests</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 card-hover"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="text-2xl text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white text-center mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {area.title}
                  </h4>
                  <p className="text-gray-300 text-center text-sm leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Professional Goals</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {goals.map((goal, index) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${goal.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <goal.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                        {goal.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-8 rounded-xl border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Research Philosophy</h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                "I believe in the power of interdisciplinary research and collaborative innovation. 
                By combining theoretical knowledge with practical applications, we can create AI solutions 
                that not only advance the field but also make a meaningful impact on society. My research 
                focuses on developing ethical, efficient, and accessible AI technologies that can benefit 
                everyone."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
