import About from './components/About';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import SectionSeparator from './components/SectionSeparator';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ScrollProgress />
        <Header />
        <Hero />
        <SectionSeparator />
        <About />
        <SectionSeparator />
        <Skills />
        <SectionSeparator />
        <Projects />
        <SectionSeparator />
        <GitHub />
        <SectionSeparator />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
