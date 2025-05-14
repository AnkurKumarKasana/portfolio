import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Trainings from './sections/Trainings'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import './App.css'

function App() {
  // Initialize dark mode state from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return false;
    
    // Check local storage first
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      const isDark = JSON.parse(saved);
      // Apply theme class immediately on component mount
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return isDark;
    }
    
    // If no saved preference, check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
      document.documentElement.classList.add('dark');
    }
    return systemPrefersDark;
  });

  // Effect to update document class and localStorage when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark:bg-gray-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark:bg-gray-900');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    // Add event listener (with compatibility check)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Trainings />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App
