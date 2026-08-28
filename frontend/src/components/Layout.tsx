import { useState, useEffect } from 'react';
import { Sun, Moon, Leaf } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-200">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-500 font-bold text-xl">
            <Leaf className="h-6 w-6" />
            <span>AgriVision AI</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#playground" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Playground</a>
            <a href="#performance" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Performance</a>
            <a href="#docs" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Docs</a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 bg-slate-50 dark:bg-slate-900 mt-16">
        <div className="container mx-auto px-4 text-center text-slate-500 dark:text-slate-400 max-w-6xl">
          <p className="flex items-center justify-center gap-2">
            <Leaf className="h-4 w-4" /> Empowering Agriculture Through Artificial Intelligence
          </p>
          <p className="text-sm mt-2">Developed for educational and research purposes.</p>
        </div>
      </footer>
    </div>
  );
}
