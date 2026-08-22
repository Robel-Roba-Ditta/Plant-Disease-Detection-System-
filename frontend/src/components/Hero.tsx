import { ArrowRight, Leaf, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-100 text-sm font-medium mb-8">
        <Leaf className="w-4 h-4" />
        <span>Hybrid CNN + Random Forest Approach</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
        Intelligent Plant Disease <br className="hidden md:block" />
        <span className="text-brand-500">Detection System</span>
      </h1>

      <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl">
        Detect plant diseases from leaf images instantly using our advanced deep learning and computer vision pipeline. Protect crops and ensure healthier harvests.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#playground" className="btn btn-primary h-12 px-8 text-base">
          Try Live Demo
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
        <a href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection" target="_blank" rel="noopener noreferrer" className="btn btn-outline h-12 px-8 text-base bg-white dark:bg-transparent">
          <Code className="mr-2 w-5 h-5" />
          View Source Code
        </a>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
        <div className="flex flex-col items-center gap-2">
          <span className="text-3xl font-bold">98.3%</span>
          <span className="text-sm font-medium uppercase tracking-wider">Accuracy</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-3xl font-bold">38</span>
          <span className="text-sm font-medium uppercase tracking-wider">Disease Classes</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-3xl font-bold">14</span>
          <span className="text-sm font-medium uppercase tracking-wider">Crop Types</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-3xl font-bold">87k+</span>
          <span className="text-sm font-medium uppercase tracking-wider">Images Trained</span>
        </div>
      </div>
    </section>
  );
}
