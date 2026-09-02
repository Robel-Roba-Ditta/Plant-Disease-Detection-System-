import { useState, useEffect } from 'react';
import { Moon, Sun, Code as Github } from 'lucide-react';
import Hero from './components/Hero';
import Playground from './components/Playground';
import PerformanceMetrics from './components/PerformanceMetrics';
import Documentation from './components/Documentation';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has previously selected a theme
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-green-200 selection:text-green-900 dark:selection:bg-green-900 dark:selection:text-green-100">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur flex-none transition-colors duration-500 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 dark:bg-slate-900/95 supports-backdrop-blur:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
               <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500">
                 AgriVision
               </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 focus:outline-none transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <a
                href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 focus:outline-none transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <Playground />
        <PerformanceMetrics />
        <Documentation />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>Made by AASTU Software Engineering Students.</p>
        <p className="mt-2 text-xs">Developed for educational and research purposes.</p>
      </footer>

    </div>
  );
}

export default App;
