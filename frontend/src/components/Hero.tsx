import { Code, Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-[120px] pb-16 md:pt-[150px] md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Plant Disease Detection v1.0
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Intelligent Plant Disease Detection Using <span className="text-primary">Deep Learning</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Detect plant diseases from leaf images instantly using a hybrid CNN and Random Forest machine learning approach.
            Protect your crops and ensure a healthier harvest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center">
            <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <Play className="mr-2 h-4 w-4" />
              Live Demo
            </a>
            <a href="#docs" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <Code className="mr-2 h-4 w-4" />
              View Documentation
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center space-x-8 opacity-70 grayscale">
             <div className="flex flex-col items-center gap-2">
                 <img src="https://img.shields.io/badge/TensorFlow-DeepLearning-orange?style=flat&logo=tensorflow" alt="Tensorflow" />
             </div>
             <div className="flex flex-col items-center gap-2">
                 <img src="https://img.shields.io/badge/Python-3.10+-blue?style=flat&logo=python" alt="Python" />
             </div>
             <div className="flex flex-col items-center gap-2">
                 <img src="https://img.shields.io/badge/Scikit--Learn-RandomForest-yellow?style=flat&logo=scikitlearn" alt="Scikit-Learn" />
             </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-background">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(142,216,160,0.5)] opacity-50 blur-[80px] dark:bg-[rgba(34,197,94,0.15)]"></div>
          <div className="absolute bottom-auto left-0 right-auto top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(142,216,160,0.5)] opacity-50 blur-[80px] dark:bg-[rgba(34,197,94,0.15)]"></div>
      </div>
    </div>
  );
}
