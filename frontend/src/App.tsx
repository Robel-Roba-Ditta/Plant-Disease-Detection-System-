import { useState, useEffect } from 'react';
import { Moon, Sun, Leaf } from 'lucide-react';
import { Header } from './components/Header';
import { Demo } from './components/Demo';
import { Metrics } from './components/Metrics';
import { Docs } from './components/Docs';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-200">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 dark:bg-dark-900/80 border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary-600 dark:text-primary-500" />
              <span className="font-bold text-lg text-gray-900 dark:text-white tracking-tight">PlantAI</span>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-dark-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Header />
        <Demo />
        <Metrics />
        <Docs />
      </main>

      <footer className="bg-white dark:bg-dark-950 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Leaf className="h-5 w-5 text-primary-600 dark:text-primary-500" />
            <span className="font-bold text-gray-900 dark:text-white">PlantAI</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Empowering Agriculture Through Artificial Intelligence
          </p>
          <p className="mt-4 text-sm text-gray-400 dark:text-gray-500">
            Made by AASTU Software Engineering Students
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
