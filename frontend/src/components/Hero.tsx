import { ArrowRight, Code } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 pt-16 sm:pt-24 lg:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-gray-900 dark:text-white">
          Intelligent Plant Disease <br className="hidden sm:block" />
          <span className="text-green-600 dark:text-green-500">Detection System</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Empowering agriculture through artificial intelligence. Detect plant diseases instantly from leaf images using our advanced deep learning models and computer vision.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#playground"
            className="inline-flex items-center justify-center rounded-lg bg-green-600 px-8 py-3 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
          >
            Try Live Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-3 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Code className="mr-2 h-4 w-4" />
            View Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
