import { ArrowRight, Code } from "lucide-react"

export function Hero() {
  return (
    <section className="container max-w-screen-2xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto">
          Intelligent <span className="text-primary">Plant Disease</span> Detection
        </h1>
        <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl sm:leading-8">
          Protect your crops and ensure a healthier harvest. Upload an image of a plant leaf and let our hybrid CNN and Random Forest model identify potential diseases instantly.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#demo"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
        >
          Try Live Demo
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
        <a
          href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8"
        >
          <Code className="mr-2 h-4 w-4" />
          View Source
        </a>
      </div>
    </section>
  )
}