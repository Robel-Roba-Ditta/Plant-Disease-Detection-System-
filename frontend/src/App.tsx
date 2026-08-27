import { useState, useEffect, useRef } from 'react';
import {
  Leaf,
  Activity,
  Code,
  Moon,
  Sun,
  ShieldCheck,
  Zap,
  BarChart3,
  BookOpen,
  Image as ImageIcon,
  CheckCircle2
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState<{ disease: string, confidence: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setPrediction(null);
    }
  };

  const handlePredict = () => {
    if (!file) return;
    setIsPredicting(true);
    // Mock API call delay
    setTimeout(() => {
      setIsPredicting(false);
      setPrediction({
        disease: "Apple___Apple_scab", // Mocked disease from README/codebase classes
        confidence: 97.8
      });
    }, 2000);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-emerald-500" />
              <span className="font-bold text-xl tracking-tight">PlantSense AI</span>
            </div>
            <div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">

        {/* Hero Section */}
        <section className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            <span>Hybrid CNN + Random Forest Model</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Intelligent Plant <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
              Disease Detection
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400">
            Automatically identify 38 different plant diseases from leaf images with high accuracy.
            Early detection helps farmers take timely actions and prevent agricultural damage.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a href="#demo" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors">
              <Activity className="h-5 w-5" />
              Live Demo
            </a>
            <a href="#docs" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors">
              <Code className="h-5 w-5" />
              View Code
            </a>
          </div>
        </section>

        {/* Interactive Demo */}
        <section id="demo" className="scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Upload a leaf image to test the model's inference capabilities.</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-8">
              <div
                onClick={triggerFileInput}
                className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-12 text-center hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
              >
                {previewUrl ? (
                  <div className="relative w-full max-w-sm mx-auto aspect-square rounded-lg overflow-hidden">
                    <img src={previewUrl} alt="Preview" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <p className="text-white font-medium bg-black/50 px-3 py-1 rounded-full text-sm">Click to change image</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-600 dark:text-emerald-400">
                      <ImageIcon className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">Click to upload image</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Supports JPG, JPEG, PNG, WEBP</p>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/jpeg, image/png, image/webp"
                  className="hidden"
                />
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={handlePredict}
                  disabled={!file || isPredicting}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-medium transition-colors"
                >
                  {isPredicting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Activity className="h-5 w-5" />
                      Run Prediction
                    </>
                  )}
                </button>
              </div>

              {prediction && (
                <div className="mt-8 p-6 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-xl animate-in slide-in-from-bottom-2">
                  <h3 className="text-sm font-medium text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-4">Prediction Result</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                      <span className="text-xl font-bold text-slate-900 dark:text-white">
                        {prediction.disease.replace(/___/g, ' - ').replace(/_/g, ' ')}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                        {prediction.confidence.toFixed(1)}%
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">CONFIDENCE</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Model Metrics */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Model Performance</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Evaluation metrics based on the New Plant Diseases Dataset.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center text-center">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-slate-500 dark:text-slate-400 font-medium text-sm">CNN Accuracy</h3>
              <p className="text-4xl font-bold mt-2">97.8%</p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center text-center">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg mb-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-slate-500 dark:text-slate-400 font-medium text-sm">Random Forest</h3>
              <p className="text-4xl font-bold mt-2">95.4%</p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5"></div>
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg mb-4 relative z-10">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-slate-500 dark:text-slate-400 font-medium text-sm relative z-10">Ensemble Strategy</h3>
              <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mt-2 relative z-10">98.3%</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
             <div className="px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400 font-medium">Precision</span>
                <span className="font-bold">0.970</span>
             </div>
             <div className="px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400 font-medium">Recall</span>
                <span className="font-bold">0.978</span>
             </div>
             <div className="px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400 font-medium">F1-Score</span>
                <span className="font-bold">0.977</span>
             </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section id="docs" className="scroll-mt-24 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-8 w-8 text-emerald-500" />
            <h2 className="text-3xl font-bold">Installation Guide</h2>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-slate-300 font-mono text-sm overflow-x-auto shadow-lg">
            <div className="space-y-6">
              <div>
                <p className="text-slate-500 mb-2"># 1. Clone the repository</p>
                <p className="text-emerald-400">git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git</p>
              </div>

              <div>
                <p className="text-slate-500 mb-2"># 2. Navigate to project directory</p>
                <p className="text-emerald-400">cd Plant-Disease-Detection</p>
              </div>

              <div>
                <p className="text-slate-500 mb-2"># 3. Install Python dependencies</p>
                <p className="text-emerald-400">pip install -r requirements.txt</p>
              </div>

              <div>
                <p className="text-slate-500 mb-2"># 4. Run the Streamlit backend application</p>
                <p className="text-emerald-400">streamlit run app.py</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 mt-24 py-8 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>Empowering Agriculture Through Artificial Intelligence</p>
      </footer>
    </div>
  );
}

export default App;