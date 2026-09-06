import { ThemeProvider } from "./components/ThemeProvider"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Demo } from "./components/Demo"
import { Metrics } from "./components/Metrics"
import { Docs } from "./components/Docs"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/20">
        <Navbar />
        <main>
          <Hero />

          <div className="w-full bg-gradient-to-b from-background to-muted/20 border-t border-b border-border/50">
            <Demo />
          </div>

          <Metrics />

          <div className="w-full bg-background border-t border-border/50">
            <Docs />
          </div>
        </main>

        <footer className="border-t border-border/40 py-6 md:py-8 mt-8">
          <div className="container max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Built by AASTU Software Engineering Students.
            </p>
            <p className="text-sm text-muted-foreground">
              For educational and research purposes.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App