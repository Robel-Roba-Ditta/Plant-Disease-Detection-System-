import { useState, useEffect } from 'react';
import { Sun, Moon, Code, Leaf } from 'lucide-react';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Performance from './components/Performance';
import Documentation from './components/Documentation';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 font-sans selection:bg-green-500 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="font-bold text-xl tracking-tight hidden sm:block">AgriVision AI</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#demo" className="text-sm font-medium hover:text-green-500 transition-colors hidden md:block">Demo</a>
              <a href="#performance" className="text-sm font-medium hover:text-green-500 transition-colors hidden md:block">Performance</a>
              <a href="#docs" className="text-sm font-medium hover:text-green-500 transition-colors hidden md:block">Docs</a>

              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle Dark Mode"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <a
                  href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Code className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
          <section id="demo" className="scroll-mt-24">
            <Demo />
          </section>

          <section id="performance" className="scroll-mt-24">
            <Performance />
          </section>

          <section id="docs" className="scroll-mt-24">
            <Documentation />
          </section>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Leaf className="h-5 w-5 text-green-500" />
            <span className="font-semibold text-gray-900 dark:text-white">AgriVision AI</span>
          </div>
          <p className="text-sm">
            Empowering Agriculture Through Artificial Intelligence.
          </p>
          <p className="text-sm mt-2">
            Built by AASTU Software Engineering Students.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
