import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaCode, FaStar, FaEye, FaDownload, FaCalendarAlt, FaFire } from 'react-icons/fa';

const GitHub = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [stats, setStats] = useState({
    totalCommits: 0,
    totalRepos: 0,
    totalStars: 0,
    totalFollowers: 0,
    streak: 0,
    languages: []
  });

  // Mock data for demonstration - in a real app, you'd fetch from GitHub API
  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => {
      setStats({
        totalCommits: 1247,
        totalRepos: 23,
        totalStars: 89,
        totalFollowers: 156,
        streak: 45,
        languages: [
          { name: 'Python', percentage: 45, color: '#3776ab' },
          { name: 'C++', percentage: 25, color: '#00599c' },
          { name: 'JavaScript', percentage: 15, color: '#f7df1e' },
          { name: 'SQL', percentage: 10, color: '#336791' },
          { name: 'Other', percentage: 5, color: '#6c757d' }
        ]
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const statCards = [
    {
      title: "Total Commits",
      value: stats.totalCommits.toLocaleString(),
      icon: FaCode,
      color: "from-blue-500 to-cyan-500",
      description: "Code contributions"
    },
    {
      title: "Repositories",
      value: stats.totalRepos,
      icon: FaGithub,
      color: "from-purple-500 to-pink-500",
      description: "Active projects"
    },
    {
      title: "Stars Earned",
      value: stats.totalStars,
      icon: FaStar,
      color: "from-yellow-500 to-orange-500",
      description: "Community recognition"
    },
    {
      title: "Followers",
      value: stats.totalFollowers,
      icon: FaEye,
      color: "from-green-500 to-teal-500",
      description: "GitHub followers"
    }
  ];

  return (
    <section id="github" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-glow">
              <span className="gradient-text">GitHub Analytics</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My coding journey and contributions to the open-source community
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {statCards.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="text-2xl text-white" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-300 mb-1">{stat.title}</h3>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Streak and Languages */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Current Streak */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <FaFire className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Current Streak</h3>
                  <p className="text-gray-400">Days of consistent coding</p>
                </div>
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-6xl font-bold gradient-text text-center mb-4"
              >
                {stats.streak}
              </motion.div>
              
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <FaCalendarAlt />
                <span>days in a row</span>
              </div>
            </motion.div>

            {/* Language Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Language Distribution</h3>
              
              <div className="space-y-4">
                {stats.languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{lang.name}</span>
                      <span className="text-gray-400">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 1 + (index * 0.1) }}
                        className="h-3 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* GitHub Profile Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/WajidAyub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-gray-600 hover:border-gray-500"
            >
              <FaGithub className="text-2xl" />
              <span>View Full GitHub Profile</span>
              <FaDownload className="text-sm" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
