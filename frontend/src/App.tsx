import { useState, useEffect } from 'react';
import { Moon, Sun, Sprout } from 'lucide-react';
import { Hero } from './components/Hero';
import { Demo } from './components/Demo';
import { Metrics } from './components/Metrics';
import { Docs } from './components/Docs';

function App() {
  const [isDark, setIsDark] = useState(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen font-sans">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="w-6 h-6 text-green-500" />
            <span className="font-bold text-lg hidden sm:block">AgriTech Vision</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#demo" className="hover:text-green-500 transition-colors">Demo</a>
            <a href="#metrics" className="hover:text-green-500 transition-colors">Metrics</a>
            <a href="#docs" className="hover:text-green-500 transition-colors">Docs</a>
          </nav>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>
        </div>
      </header>

      <main className="pb-20">
        <Hero />
        <div className="space-y-24 mt-10">
          <Demo />
          <Metrics />
          <Docs />
        </div>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>Empowering Agriculture Through Artificial Intelligence.</p>
      </footer>
    </div>
  );
}

export default App;