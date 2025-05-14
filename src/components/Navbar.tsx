import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { name: 'About', href: '' },
    { name: 'Skills', href: '#skills' },
    { name: 'Trainings', href: '#trainings' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 left-0 right-0 pt-0 ${
        scrolled 
          ? 'bg-white/10 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg'
          : 'bg-white/10 dark:bg-gray-900/60 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled
                  ? 'text-accent-600 dark:text-accent-400'
                  : 'text-accent-600 dark:text-accent-400'
              } hover:text-accent-700 dark:hover:text-accent-300`}
            >
              Ankur Kumar Kasana<span className="text-accent-600"></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 px-3 py-2 text-base font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Github Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://github.com/AnkurKumarKasana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 border border-accent-300 dark:border-accent-700 rounded-full text-accent-600 dark:text-accent-400 hover:bg-accent-50/50 dark:hover:bg-gray-800/70 transition-colors backdrop-blur-sm"
            >
              <span className="mr-2">Github</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-primary-700 dark:text-gray-300 hover:bg-accent-100/70 dark:hover:bg-accent-900/70 focus:outline-none transition-colors duration-300 backdrop-blur-sm"
              aria-label="Toggle dark mode"
              aria-pressed={darkMode}
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-accent-600" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-primary-700 dark:text-gray-300 hover:bg-accent-100/70 dark:hover:bg-accent-900/70 focus:outline-none mr-2 backdrop-blur-sm"
              aria-label="Toggle dark mode"
              aria-pressed={darkMode}
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-accent-600" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-xl w-full left-0 right-0"
        >
          <div className="px-2 pt-0 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-primary-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://github.com/AnkurKumarKasana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-primary-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400"
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-2">Github</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar; 