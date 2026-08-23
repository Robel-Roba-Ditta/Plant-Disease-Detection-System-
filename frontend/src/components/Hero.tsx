
import { ArrowRight, Code } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-24 sm:py-32 flex flex-col items-center text-center px-4">
      <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm mb-8 bg-muted/50 text-muted-foreground">
        <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
        v2.0 Model Released
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl mb-6">
        Intelligent Plant Disease <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
          Detection System
        </span>
      </h1>

      <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        Upload a leaf image to instantly detect plant diseases using our hybrid CNN and Random Forest machine learning approach. Early identification helps farmers take timely actions and prevent crop yield loss.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href="#demo"
          className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Try Live Demo
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
        <a
          href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <Code className="mr-2 h-4 w-4" />
          View Code
        </a>
      </div>
    </section>
  );
}
