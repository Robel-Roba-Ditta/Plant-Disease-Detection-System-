import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Demo } from './components/Demo';
import { Metrics } from './components/Metrics';
import { Guide } from './components/Guide';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <Hero />
        <Demo />
        <Metrics />
        <Guide />
      </main>
      <footer className="border-t border-border py-8 md:py-12">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <p className="text-sm text-muted-foreground">
            Developed for educational and research purposes. Empowering Agriculture Through Artificial Intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
