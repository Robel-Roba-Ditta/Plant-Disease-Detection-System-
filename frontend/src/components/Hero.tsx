import { Leaf, ArrowRight, Code } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-20 text-center px-4">
      <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
        <Leaf className="w-8 h-8 text-primary" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        Plant Disease <span className="text-primary">Detection</span> System
      </h1>
      <p className="text-lg md:text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto mb-8">
        Detect plant diseases from leaf images instantly using our hybrid CNN + Random Forest machine learning approach.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#demo"
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto"
        >
          Try Live Demo
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-card text-card-foreground border border-[var(--border)] px-6 py-3 rounded-lg font-medium hover:bg-card/80 transition-colors w-full sm:w-auto"
        >
          <Code className="w-4 h-4" />
          View Source
        </a>
      </div>
    </section>
  );
}
