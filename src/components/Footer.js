import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaKaggle, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-slate-800 relative z-10">
      <div className="container-custom pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-3xl font-black mb-4 text-white">
                Wajid <span className="text-gradient">Ayub</span>
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-sm mb-6">
                "Committed to advancing artificial intelligence through rigorous research,
                innovative development, and collaborative problem-solving."
              </p>
              <div className="inline-block px-4 py-2 bg-slate-800 rounded-lg text-slate-300 text-sm border border-slate-700">
                Open to opportunities in AI/ML
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About', id: 'about' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-slate-400 hover:text-accent-400 transition-colors duration-300 text-left font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Connect */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Connect</h4>
              <div className="flex space-x-4">
                {[
                  { icon: FaGithub, href: 'https://github.com/WajidAyub', label: 'GitHub' },
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/wajid-ayub', label: 'LinkedIn' },
                  { icon: FaKaggle, href: 'https://kaggle.com/wajidayub', label: 'Kaggle' },
                  { icon: FaEnvelope, href: 'mailto:wajidayubwajid@gmail.com', label: 'Email' }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-accent-600 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} Wajid Ayub. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <p className="text-slate-600 text-sm flex items-center gap-1">
              Made with <FaHeart className="text-red-500" size={12} /> using React & Tailwind
            </p>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-slate-800 text-accent-400 hover:bg-accent-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg"
              aria-label="Back to top"
            >
              <FaArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
