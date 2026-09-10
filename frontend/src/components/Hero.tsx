import { Code, ExternalLink, Leaf } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto text-center">
      <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
        <Leaf className="w-8 h-8 text-green-600 dark:text-green-400" />
      </div>
      <h1 className="text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-400">
        Intelligent Plant Disease Detection
      </h1>
      <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
        Detect plant diseases from leaf images using a hybrid CNN + Random Forest machine learning approach with instant prediction and confidence scores.
      </p>
      <div className="flex justify-center gap-4">
        <a href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
          <Code className="w-5 h-5" />
          View Code
        </a>
        <a href="https://saurabhsinghdhami-plant-disease-detection-main-app-p8d5ks.streamlit.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
          <ExternalLink className="w-5 h-5" />
          Live Demo
        </a>
      </div>
    </section>
  );
}