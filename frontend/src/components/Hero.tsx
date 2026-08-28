import { Code, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 mb-8 border border-emerald-200 dark:border-emerald-800/50">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
          Hybrid CNN + Random Forest
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white">
          Intelligent Plant Disease <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
            Detection System
          </span>
        </h1>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Detect 38 different classes of plant diseases from leaf images using a
          high-accuracy hybrid deep learning and computer vision approach. Early
          identification to prevent large-scale agricultural damage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#playground"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all hover:scale-105"
          >
            <Play className="h-4 w-4" />
            Try Live Demo
          </a>
          <a
            href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white dark:bg-slate-900 px-8 py-3.5 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
          >
            <Code className="h-4 w-4" />
            View Repository
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 items-center justify-center border-y border-slate-200 dark:border-slate-800 py-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-2">
            <span className="font-bold text-2xl text-slate-800 dark:text-slate-200">87k+</span>
            <span className="text-sm font-medium text-slate-500">Images</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="font-bold text-2xl text-slate-800 dark:text-slate-200">38</span>
            <span className="text-sm font-medium text-slate-500">Classes</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="font-bold text-2xl text-slate-800 dark:text-slate-200">14</span>
            <span className="text-sm font-medium text-slate-500">Crops</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="font-bold text-2xl text-slate-800 dark:text-slate-200">98.3%</span>
            <span className="text-sm font-medium text-slate-500">Accuracy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
