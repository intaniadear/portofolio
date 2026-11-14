import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { OperationalPortfolio } from './components/OperationalPortfolio';
import { EducationAndAchievements } from './components/EducationAndAchievements';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-background text-typography-body transition-colors duration-200">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <OperationalPortfolio />
        <EducationAndAchievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
