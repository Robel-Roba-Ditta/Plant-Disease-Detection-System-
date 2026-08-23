import { useEffect, useState } from 'react';
import { Leaf, Moon, Sun, Code } from 'lucide-react';

export function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-500" />
          <span className="font-bold text-xl hidden sm:inline-block">PlantCare AI</span>
        </div>

        <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
          <a href="#demo" className="transition-colors hover:text-foreground/80 text-foreground/60">Demo</a>
          <a href="#metrics" className="transition-colors hover:text-foreground/80 text-foreground/60">Metrics</a>
          <a href="#guide" className="transition-colors hover:text-foreground/80 text-foreground/60">Guide</a>

          <div className="flex items-center gap-2 border-l border-border pl-4 sm:pl-6">
            <a
              href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Code className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
