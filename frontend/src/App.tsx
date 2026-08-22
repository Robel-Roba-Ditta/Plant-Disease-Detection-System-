import { useState, useEffect } from 'react';
import { Sun, Moon, Leaf } from 'lucide-react';
import Hero from './components/Hero';
import Playground from './components/Playground';
import Metrics from './components/Metrics';
import Documentation from './components/Documentation';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
             window.matchMedia('(prefers-color-scheme: dark)').matches;
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

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <Leaf className="w-6 h-6 text-brand-500" />
            <span>Plant<span className="text-brand-500">Disease</span> AI</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#playground" className="text-sm font-medium hover:text-brand-500 hidden sm:block transition-colors">Demo</a>
            <a href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-brand-500 hidden sm:block transition-colors">GitHub</a>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <Playground />
        <Metrics />
        <Documentation />
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-auto bg-neutral-50 dark:bg-neutral-950 text-center text-neutral-500 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-4 h-4 text-brand-500" />
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">Empowering Agriculture Through AI</span>
          </div>
          <p>© {new Date().getFullYear()} Plant Disease Recognition System.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
