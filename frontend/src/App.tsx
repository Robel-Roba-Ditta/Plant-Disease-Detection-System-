import { useState, useEffect } from 'react';
import { Leaf, Sun, Moon, Code } from 'lucide-react';
import { Hero } from './components/Hero';
import { InteractiveDemo } from './components/InteractiveDemo';
import { ModelPerformance } from './components/ModelPerformance';
import { Documentation } from './components/Documentation';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Navigation */}
      <nav className="border-b border-[var(--border)] sticky top-0 bg-[var(--background)]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg hidden sm:block">AgriAI</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-[var(--foreground)]/80">
              <a href="#demo" className="hover:text-primary transition-colors">Demo</a>
              <a href="#docs" className="hover:text-primary transition-colors">Docs</a>
            </div>

            <div className="flex items-center gap-3 border-l border-[var(--border)] pl-6">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-[var(--foreground)]/5 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a
                href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-[var(--foreground)]/5 transition-colors"
                aria-label="GitHub Repository"
              >
                <Code className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <InteractiveDemo />
        <ModelPerformance />
        <Documentation />
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-[var(--foreground)]/60 text-sm">
          <p>© {new Date().getFullYear()} Plant Disease Detection System. Developed by AASTU Software Engineering Students.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
