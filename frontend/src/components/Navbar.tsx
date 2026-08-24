import { Moon, Sun, Leaf } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-600 dark:text-green-500" />
          <span className="text-xl font-bold tracking-tight">PlantSense</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="#playground" className="text-sm font-medium hover:text-green-600 dark:hover:text-green-500 hidden sm:block">Demo</a>
          <a href="#metrics" className="text-sm font-medium hover:text-green-600 dark:hover:text-green-500 hidden sm:block">Metrics</a>
          <a href="#docs" className="text-sm font-medium hover:text-green-600 dark:hover:text-green-500 hidden sm:block">Docs</a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
