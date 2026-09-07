import { useState, useEffect } from 'react';
import { Leaf, Moon, Sun, Code } from 'lucide-react';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Metrics from './components/Metrics';
import Docs from './components/Docs';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check initial user preference or default to false (light)
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

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background transition-colors duration-300">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg hidden sm:inline-block">AgriAI Detect</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
            <a href="#metrics" className="hover:text-foreground transition-colors">Performance</a>
            <a href="#docs" className="hover:text-foreground transition-colors">Docs</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-muted text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground h-9 px-4 py-2 text-sm font-medium hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hidden sm:flex"
            >
              <Code className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        <Demo />
        <Metrics />
        <Docs />
      </main>

      <footer className="border-t border-border py-8 md:py-12 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Empowering Agriculture Through Artificial Intelligence
            </p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <p>Made by AASTU Software Engineering Students</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
