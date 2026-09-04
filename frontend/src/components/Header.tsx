import { Leaf, Code, PlayCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="relative overflow-hidden bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/10 dark:to-dark-900 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-6">
            <Leaf className="h-10 w-10 text-primary-600 dark:text-primary-500" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Intelligent Plant <span className="text-primary-600 dark:text-primary-500">Disease Detection</span>
          </h1>

          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            Detect plant diseases from leaf images using a hybrid CNN + Random Forest approach.
            Protect your crops with fast, accurate, and automated diagnosis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#demo" className="btn-primary w-full sm:w-auto text-lg px-8 py-6 h-auto">
              <PlayCircle className="mr-2 h-5 w-5" />
              Live Demo
            </a>
            <a href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection" target="_blank" rel="noopener noreferrer" className="btn-outline w-full sm:w-auto text-lg px-8 py-6 h-auto bg-white">
              <Code className="mr-2 h-5 w-5" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
