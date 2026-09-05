import { Code, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-20 text-center flex flex-col items-center justify-center">
      <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground mb-8">
        <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
        v1.0.0 Now Available
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
        Intelligent Plant Disease Detection Using{' '}
        <span className="text-primary">Deep Learning</span>
      </h1>

      <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
        Automatically identify diseases from plant leaf images using our hybrid CNN + Random Forest machine learning approach with 98.3% accuracy.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#demo"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
        >
          <Play className="mr-2 h-4 w-4" />
          Live Demo
        </a>
        <a
          href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2"
        >
          <Code className="mr-2 h-4 w-4" />
          View Code
        </a>
      </div>
    </section>
  );
}
