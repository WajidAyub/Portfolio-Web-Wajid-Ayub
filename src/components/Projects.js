import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "MCP Agent Prototype",
      description: "A frontend prototype demonstrating the Model Context Protocol (MCP). Visualizes an autonomous ReAct reasoning loop and enterprise architecture.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1565&auto=format&fit=crop",
      color: "bg-accent-cyan",
      github: "https://github.com/WajidAyub/MCP-Agent-Prototype"
    },
    {
      title: "LLM Fine-Tuning Pipeline",
      description: "State-of-the-art NLP project demonstrating Parameter-Efficient Fine-Tuning (PEFT) of large language models using PyTorch and Hugging Face.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop",
      color: "bg-accent-orange",
      github: "https://github.com/WajidAyub/Deep-Learning-Portfolio/tree/main/04_LLM_Fine_Tuning"
    },
    {
      title: "The Logic Engine",
      description: "A deterministic, rule-based AI control layer utilizing O(1) Hash Maps to act as a 100% hallucination-free firewall for probabilistic LLMs.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
      color: "bg-white",
      github: "https://github.com/WajidAyub/The-Logic-Engine"
    },
    {
      title: "MLOps Deployment Pipeline",
      description: "Complete end-to-end Machine Learning pipeline encompassing advanced data imputation (SMOTE), model evaluation, and joblib serialization for production.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      color: "bg-accent-yellow",
      github: "https://github.com/WajidAyub/Applied-Machine-Learning/tree/main/08_Breast_Cancer_Deployment_Pipeline"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black">
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="heading-lg mb-6">Featured Projects</h2>
              <p className="text-white/60 font-sans text-lg">
                Showcasing innovative solutions and cutting-edge AI applications, designed with efficiency and scale in mind.
              </p>
            </div>
            <div>
              <a href="https://github.com/WajidAyub?tab=repositories" target="_blank" rel="noreferrer" className="btn-outline inline-block">View All Work</a>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group flex flex-col h-full bg-black hover:bg-white/[0.02]"
              >
                {/* Content Section */}
                <div className="p-10 flex flex-col flex-grow relative">
                  <div className={`absolute top-10 left-10 w-3 h-3 rounded-full ${project.color}`} />
                  <div className="pl-8">
                    <h3 className="text-3xl font-display font-medium text-white mb-4 leading-tight">{project.title}</h3>
                    <p className="text-white/50 text-base leading-relaxed mb-8">{project.description}</p>
                    
                    <div className="flex gap-4 mt-auto">
                      <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image Section - Bottom half of card */}
                <div className="h-64 w-full relative overflow-hidden border-t border-white/10 mt-auto p-4 pb-0">
                  <div className="w-full h-full rounded-t-2xl overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%]"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1470&auto=format&fit=crop";
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
