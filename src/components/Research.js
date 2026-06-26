import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const researchAreas = [
    {
      title: "Generative AI",
      description: "Exploring novel transformer-based models and diffusion processes for highly contextual generation.",
      color: "bg-accent-yellow"
    },
    {
      title: "Neuromorphic Computing",
      description: "Bridging biological neural mechanisms with artificial networks for highly efficient edge intelligence.",
      color: "bg-accent-orange"
    },
    {
      title: "Decision Systems",
      description: "Developing robust reinforcement learning agents capable of complex decision-making in stochastic environments.",
      color: "bg-accent-cyan"
    }
  ];

  return (
    <section id="research" className="py-24 relative overflow-hidden bg-black border-t border-white/10">
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-16">
            <h2 className="heading-lg mb-4">Research Interests</h2>
            <p className="text-white/60 max-w-2xl font-sans text-lg">
              Pushing the boundaries of what machine intelligence can achieve.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-10 flex flex-col justify-center min-h-[280px] relative"
              >
                <div className={`absolute top-10 left-10 w-3 h-3 rounded-full ${area.color}`} />
                <h3 className="text-3xl font-display font-medium text-white mb-4 pl-8">{area.title}</h3>
                <p className="text-white/50 text-base leading-relaxed pl-8">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
