import { useState, useEffect } from 'react';
import { Moon, Sun, Leaf } from 'lucide-react';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Metrics from './components/Metrics';
import Docs from './components/Docs';
import './App.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">PlantDetect</span>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#demo" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Demo</a>
            <a href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-md w-9 h-9 border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4">
        <Hero />
        <Demo />
      </main>

      {/* Full width sections */}
      <div className="w-full">
        <Metrics />
      </div>

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4">
        <Docs />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-12 bg-muted/20">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">Empowering Agriculture Through Artificial Intelligence</p>
          <p>© {new Date().getFullYear()} AASTU Software Engineering Students. Open source project.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
