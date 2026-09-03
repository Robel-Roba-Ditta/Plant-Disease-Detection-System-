import { useState, useEffect } from 'react';
import { Sun, Moon, Leaf } from 'lucide-react';
import { Hero } from './components/Hero';
import { Demo } from './components/Demo';
import { Metrics } from './components/Metrics';
import { Docs } from './components/Docs';

function App() {
  // Initialize theme from system preference
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    return false;
  });

  // Update HTML class when theme changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg text-emerald-600 dark:text-emerald-400">
                <Leaf size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">AgriDetect</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#demo" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors">Demo</a>
              <a href="#metrics" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors">Metrics</a>
              <a href="#docs" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors">Docs</a>
            </div>

            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Demo />
        <Metrics />
        <Docs />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Leaf size={20} className="text-emerald-600" />
            <span className="font-semibold text-gray-900 dark:text-white">AgriDetect AI</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            Developed by AASTU Software Engineering Students for educational and research purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
