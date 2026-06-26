import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black border-t border-white/10">
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-16">
            <h2 className="heading-lg mb-4">Let's Connect</h2>
            <p className="text-white/60 max-w-2xl font-sans text-lg">
              Ready to collaborate on AI/ML projects or discuss opportunities?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="card p-12 relative flex flex-col justify-center">
              <div className="absolute top-12 left-12 w-4 h-4 bg-accent-yellow rounded-full" />
              <h3 className="text-4xl font-display font-bold text-white mb-6 pl-10">Start a Conversation</h3>
              <p className="text-white/60 leading-relaxed mb-10 text-lg pl-10 max-w-md">
                I'm always excited to discuss new opportunities, collaborate on interesting projects,
                or simply chat about Artificial Intelligence and software engineering.
              </p>
              
              <div className="pl-10 space-y-4">
                <a href="mailto:wajidayubwajid@gmail.com" className="block text-xl text-white hover:text-white/70 transition-colors font-medium">wajidayubwajid@gmail.com</a>
                <div className="flex gap-6 pt-4">
                  <a href="https://www.linkedin.com/in/wajid-ayub-8a9175258" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider font-mono">LinkedIn</a>
                  <a href="https://github.com/WajidAyub" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider font-mono">GitHub</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-12 relative">
              <div className="absolute top-12 left-12 w-4 h-4 bg-accent-cyan rounded-sm transform rotate-45" />
              <form onSubmit={handleSubmit} className="space-y-8 pl-10 pt-2">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors text-lg"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors text-lg"
                    placeholder="Email Address"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors text-lg resize-none"
                    placeholder="How can I help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-lg mt-4"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-accent-cyan text-center text-sm font-medium pt-2"
                  >
                    Message sent successfully!
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
