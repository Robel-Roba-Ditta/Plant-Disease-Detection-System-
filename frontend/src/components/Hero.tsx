import { ArrowRight, Code } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 pt-16 pb-32">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-green-50 dark:bg-green-900/20 blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
          CNN + Random Forest Model
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block text-gray-900 dark:text-white">Intelligent Plant</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700">
            Disease Detection
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-10">
          Identify plant diseases from leaf images instantly using our hybrid Deep Learning and Computer Vision approach. Protecting crops and ensuring a healthier harvest.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#demo"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium text-lg transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
          >
            Live Demo
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-medium text-lg transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <Code className="h-5 w-5" />
            View Code
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-gray-500 dark:text-gray-400">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">98.3%</span>
            <span className="text-sm font-medium">Ensemble Accuracy</span>
          </div>
          <div className="w-px h-12 bg-gray-200 dark:bg-gray-800"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">38</span>
            <span className="text-sm font-medium">Disease Classes</span>
          </div>
          <div className="w-px h-12 bg-gray-200 dark:bg-gray-800 hidden sm:block"></div>
          <div className="flex flex-col items-center hidden sm:flex">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">14</span>
            <span className="text-sm font-medium">Crop Types</span>
          </div>
        </div>
      </div>
    </div>
  );
}