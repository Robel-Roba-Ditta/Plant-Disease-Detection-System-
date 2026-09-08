import { useState, useEffect } from 'react';
import { Moon, Sun, Upload, Leaf, Code, Activity, Terminal } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { name: 'CNN', accuracy: 97.8 },
  { name: 'Random Forest', accuracy: 95.4 },
  { name: 'Ensemble', accuracy: 98.3 },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true);
      setPrediction(null);
      setTimeout(() => {
        setIsUploading(false);
        setPrediction("Apple___healthy");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans selection:bg-green-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-green-500" />
            <span className="font-bold text-xl tracking-tight">PlantSense</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#demo" className="text-sm font-medium hover:text-green-500 transition-colors">Demo</a>
            <a href="#metrics" className="text-sm font-medium hover:text-green-500 transition-colors">Metrics</a>
            <a href="#docs" className="text-sm font-medium hover:text-green-500 transition-colors">Docs</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-32">

        {/* Hero Section */}
        <section className="text-center pt-20 pb-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
            <Activity className="w-4 h-4" /> v1.0.0 Live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Intelligent Plant Disease <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Detection System
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Protect crops and ensure healthier harvests using our hybrid CNN & Random Forest computer vision model.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#demo" className="px-8 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition-all shadow-lg shadow-green-500/25 flex items-center gap-2">
              Live Demo
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 font-medium transition-colors flex items-center gap-2">
              <Code className="w-5 h-5" /> View Code
            </a>
          </div>
        </section>

        {/* Interactive Demo */}
        <section id="demo" className="scroll-mt-24">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold">Try the Model</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Upload a leaf image to see mock inference results.</p>
            </div>
            <div className="p-8">
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-12 text-center hover:border-green-500 dark:hover:border-green-500 transition-colors relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  title="Upload an image"
                />
                <div className="flex flex-col items-center gap-4 pointer-events-none">
                  <Upload className="w-12 h-12 text-gray-400" />
                  <div>
                    <p className="text-lg font-medium">Click or drag image to upload</p>
                    <p className="text-sm text-gray-500 mt-1">Supports JPG, PNG, WEBP (Max 5MB)</p>
                  </div>
                </div>
              </div>

              {/* Results Area */}
              <div className="mt-8 min-h-[100px] flex items-center justify-center">
                {isUploading && (
                  <div className="flex items-center gap-3 text-green-600">
                    <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span className="font-medium animate-pulse">Running inference...</span>
                  </div>
                )}
                {prediction && !isUploading && (
                  <div className="w-full bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="text-sm uppercase tracking-wider text-green-700 dark:text-green-400 font-semibold mb-2">Prediction Result</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{prediction.replace('___', ' ').replace('_', ' ')}</span>
                      <span className="px-3 py-1 bg-green-200 dark:bg-green-800 rounded-full text-sm font-medium text-green-800 dark:text-green-200">
                        97.8% Confidence
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section id="metrics" className="scroll-mt-24 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Model Performance</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Benchmark metrics from the training dataset.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">CNN Model</p>
              <p className="text-4xl font-bold mt-2">97.8%</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Random Forest</p>
              <p className="text-4xl font-bold mt-2">95.4%</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 border-t-4 border-t-green-500">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Ensemble Strategy</p>
              <p className="text-4xl font-bold mt-2 text-green-600 dark:text-green-400">98.3%</p>
            </div>
          </div>

          <div className="h-80 w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mt-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} domain={[90, 100]} />
                <Tooltip
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ backgroundColor: 'rgba(17, 24, 39, 0.8)', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Bar dataKey="accuracy" fill="#10b981" radius={[4, 4, 0, 0]} barSize={60} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Documentation */}
        <section id="docs" className="scroll-mt-24 pb-20">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 shadow-xl text-gray-300">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Local Installation</h2>
            </div>
            <div className="space-y-6 font-mono text-sm">
              <div>
                <p className="text-gray-500 mb-2"># Clone the repository</p>
                <div className="bg-black/50 p-4 rounded-lg flex items-center justify-between group">
                  <code>git clone https://github.com/username/repo.git</code>
                </div>
              </div>
              <div>
                <p className="text-gray-500 mb-2"># Install dependencies</p>
                <div className="bg-black/50 p-4 rounded-lg">
                  <code>pip install -r requirement.txt</code>
                </div>
              </div>
              <div>
                <p className="text-gray-500 mb-2"># Run the Python backend / Streamlit App</p>
                <div className="bg-black/50 p-4 rounded-lg">
                  <code>streamlit run main.py</code>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;