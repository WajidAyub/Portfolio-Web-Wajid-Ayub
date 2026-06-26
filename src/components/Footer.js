import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-12 mb-8">
          <div>
            <h3 className="text-4xl font-display font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-3 h-3 bg-accent-yellow rounded-full" />
              Wajid
            </h3>
            <p className="text-white/50 max-w-sm font-sans text-lg">
              Optimizing complex data systems, ensuring unparalleled success and efficiency.
            </p>
          </div>
          
          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/wajid-ayub-8a9175258" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors font-sans text-sm">LinkedIn</a>
              <a href="https://github.com/WajidAyub" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors font-sans text-sm">GitHub</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="https://kaggle.com/wajidayub" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors font-sans text-sm">Kaggle</a>
              <a href="mailto:wajidayubwajid@gmail.com" className="text-white/50 hover:text-white transition-colors font-sans text-sm">Email</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm font-sans">
            © {currentYear} Wajid Ayub. All rights reserved.
          </p>
          <p className="text-white/30 text-sm font-sans">
            Designed for impact.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
