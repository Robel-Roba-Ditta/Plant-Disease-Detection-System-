import { Code, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 text-center px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-gray-900 dark:text-white">
          Intelligent Plant Disease Detection
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Leveraging Deep Learning and Computer Vision to automatically identify diseases from plant leaf images. Upload a leaf, get instant results.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-sm transition-colors"
          >
            <Play className="mr-2 h-5 w-5" />
            Live Demo
          </a>
          <a
            href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg shadow-sm transition-colors"
          >
            <Code className="mr-2 h-5 w-5" />
            View Code
          </a>
        </div>
      </div>
    </section>
  );
}
