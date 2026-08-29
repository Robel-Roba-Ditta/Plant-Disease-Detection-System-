import { useState, useEffect } from 'react';
import { Sun, Moon, Leaf } from 'lucide-react';
import { Hero } from './components/Hero';
import { Demo } from './components/Demo';
import { Metrics } from './components/Metrics';
import { Docs } from './components/Docs';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="text-green-600 h-8 w-8" />
              <span className="font-bold text-xl tracking-tight">AgriSense</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                <a href="#demo" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Demo</a>
                <a href="#metrics" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Metrics</a>
                <a href="#docs" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Docs</a>
              </div>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Demo />
        <div id="metrics"><Metrics /></div>
        <div id="docs"><Docs /></div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="text-green-600 h-6 w-6 opacity-50" />
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Developed for educational and research purposes. <br/>
          Addis Ababa Science and Technology University.
        </p>
      </footer>
    </div>
  );
}

export default App;