import { ArrowRight, Code } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 text-center px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
          Intelligent Plant Disease <br className="hidden sm:block" />
          <span className="text-green-600 dark:text-green-400">Detection System</span>
        </h1>

        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Leveraging Deep Learning and Computer Vision to automatically identify crop diseases from leaf images. Fast, accurate, and reliable diagnosis for farmers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#demo"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            Live Demo <ArrowRight size={20} />
          </a>
          <a
            href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Code size={20} /> View Code
          </a>
        </div>
      </div>
    </section>
  );
}