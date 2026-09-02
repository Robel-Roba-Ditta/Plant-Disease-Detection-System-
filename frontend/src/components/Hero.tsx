import { Leaf, Code as Github } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32 lg:pb-24">
        <div className="mx-auto flex justify-center mb-6">
          <div className="h-20 w-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
            <Leaf className="h-10 w-10 text-green-600 dark:text-green-500" />
          </div>
        </div>

        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 dark:text-white sm:text-7xl">
          Intelligent Plant Disease
          <span className="relative whitespace-nowrap text-green-600 dark:text-green-500 ml-2">
            Detection
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 dark:text-slate-300">
          Detect plant diseases from leaf images instantly using our hybrid CNN and Random Forest machine learning model. Empowering agriculture through artificial intelligence.
        </p>

        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="#playground"
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-600 text-white hover:bg-green-700 hover:text-slate-100 active:bg-green-800 active:text-green-100 focus-visible:outline-green-600"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 dark:ring-slate-700 dark:text-slate-300 dark:hover:text-white dark:hover:ring-slate-500 dark:active:bg-slate-800"
          >
            <Github className="h-4 w-4 mr-2" />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
