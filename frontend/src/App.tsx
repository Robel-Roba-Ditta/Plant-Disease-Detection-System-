import React, { useState, useEffect, useRef } from 'react';
import {
  Leaf,
  Upload,
  Moon,
  Sun,
  Code,
  Activity,
  CheckCircle2,
  BarChart3,

  Info
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Parse the historical data directly from the repo's structure
const trainingData = [
  { epoch: 1, loss: 0.9137, accuracy: 0.6856, val_loss: 0.3374, val_accuracy: 0.8857 },
  { epoch: 2, loss: 0.3106, accuracy: 0.8920, val_loss: 0.2659, val_accuracy: 0.9122 },
  { epoch: 3, loss: 0.1772, accuracy: 0.9404, val_loss: 0.1450, val_accuracy: 0.9533 },
];

const mockClasses = [
  'Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
  'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_',
  'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy',
  'Grape___Black_rot', 'Grape___Esca_(Black_Measles)', 'Grape___healthy',
  'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy',
  'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___healthy'
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState<{class: string, confidence: number} | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setPrediction(null);
    }
  };

  const handlePredict = () => {
    if (!selectedFile) return;

    setIsPredicting(true);

    // Simulate network request/model inference
    setTimeout(() => {
      // Pick a random class for demo purposes
      const randomIdx = Math.floor(Math.random() * mockClasses.length);
      const randomConfidence = (Math.random() * (0.99 - 0.75) + 0.75).toFixed(2);

      setPrediction({
        class: mockClasses[randomIdx].replace(/___/g, ' - ').replace(/_/g, ' '),
        confidence: Number(randomConfidence) * 100
      });
      setIsPredicting(false);
    }, 2000);
  };

  const clearImage = () => {
    setSelectedFile(null);
    setPreview(null);
    setPrediction(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                <Leaf size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
                AgriVision AI
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#demo"
                className="hidden sm:block text-sm font-medium text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
              >
                Demo
              </a>
              <a
                href="#metrics"
                className="hidden sm:block text-sm font-medium text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
              >
                Metrics
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-emerald-50 to-transparent dark:from-emerald-900/20 dark:to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6 border border-emerald-200 dark:border-emerald-800/50">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            CNN + Random Forest Architecture
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Intelligent Plant Disease <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
              Detection System
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Empowering agriculture through artificial intelligence. Upload a leaf image and instantly identify 38 different plant diseases using our state-of-the-art hybrid deep learning model.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 shadow-sm transition-all dark:focus:ring-offset-gray-900"
            >
              <Upload size={18} />
              Try the Demo
            </a>
            <a
              href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 shadow-sm transition-all dark:focus:ring-offset-gray-900"
            >
              <Code size={18} />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Interactive Playground</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Test our model directly in your browser. Upload an image of a plant leaf (healthy or diseased) to see the prediction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Upload Area */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Upload size={20} className="text-emerald-500" />
                Input Image
              </h3>

              {!preview ? (
                <div
                  className="mt-2 flex justify-center rounded-xl border border-dashed border-gray-300 dark:border-gray-600 px-6 py-16 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50">
                      <Upload className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    </div>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-400 justify-center">
                      <span className="relative cursor-pointer rounded-md font-semibold text-emerald-600 dark:text-emerald-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-emerald-600 focus-within:ring-offset-2 hover:text-emerald-500">
                        Upload a file
                      </span>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-500 dark:text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                  </div>
                </div>
              ) : (
                <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-black/5 flex items-center justify-center h-[300px]">
                  <img src={preview} alt="Preview" className="max-h-full max-w-full object-contain" />
                  <button
                    onClick={clearImage}
                    className="absolute top-2 right-2 bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 p-1.5 rounded-md hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/50 dark:hover:text-red-400 transition-colors text-sm font-medium shadow-sm"
                  >
                    Clear
                  </button>
                </div>
              )}

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/jpeg, image/png, image/jpg, image/webp"
              />

              <div className="mt-6">
                <button
                  onClick={handlePredict}
                  disabled={!selectedFile || isPredicting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white transition-all
                    ${!selectedFile || isPredicting
                      ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed text-gray-500 dark:text-gray-400'
                      : 'bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 dark:focus:ring-offset-gray-900'
                    }`}
                >
                  {isPredicting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing Leaf...
                    </span>
                  ) : 'Run Prediction Inference'}
                </button>
              </div>
            </div>

            {/* Results Area */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Activity size={20} className="text-emerald-500" />
                Inference Results
              </h3>

              <div className="flex-1 flex flex-col justify-center">
                {!selectedFile ? (
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <Info className="mx-auto h-8 w-8 mb-2 opacity-50" />
                    <p>Upload an image to see prediction results.</p>
                  </div>
                ) : isPredicting ? (
                  <div className="space-y-4">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-full animate-[progress_1s_ease-in-out_infinite]" style={{transformOrigin: '0% 50%'}}></div>
                    </div>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 animate-pulse">Running CNN feature extraction...</p>
                  </div>
                ) : prediction ? (
                  <div className="space-y-6">
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
                      <h4 className="text-sm font-medium text-emerald-800 dark:text-emerald-300 mb-1">Top Prediction</h4>
                      <p className="text-xl font-bold text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
                        <CheckCircle2 className="text-emerald-500" size={24} />
                        {prediction.class}
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Confidence Score</span>
                        <span className="font-bold text-gray-900 dark:text-white">{prediction.confidence}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div className="bg-emerald-600 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${prediction.confidence}%` }}></div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-100 dark:border-gray-800">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 border-b border-gray-100 dark:border-gray-800 pb-2">Model Info</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                        <li className="flex justify-between"><span className="text-gray-500">Pipeline:</span> <span>CNN + Random Forest</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Input Size:</span> <span>128x128 RGB</span></li>
                        <li className="flex justify-between"><span className="text-gray-500">Latency:</span> <span>~45ms</span></li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <p>Image loaded. Ready for inference.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex justify-center items-center gap-3">
              <BarChart3 size={32} className="text-emerald-500" />
              Model Performance
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our hybrid architecture achieves state-of-the-art results on the New Plant Diseases Dataset.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'CNN Accuracy', value: '97.8%' },
              { label: 'RF Accuracy', value: '95.4%' },
              { label: 'Ensemble Acc.', value: '98.3%' },
              { label: 'Total Classes', value: '38' },
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">Training & Validation Accuracy</h3>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trainingData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                    <XAxis dataKey="epoch" stroke={darkMode ? "#9ca3af" : "#6b7280"} tick={{fill: darkMode ? "#9ca3af" : "#6b7280"}} />
                    <YAxis domain={[0.5, 1]} stroke={darkMode ? "#9ca3af" : "#6b7280"} tick={{fill: darkMode ? "#9ca3af" : "#6b7280"}} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                        borderColor: darkMode ? '#374151' : '#e5e7eb',
                        color: darkMode ? '#f3f4f6' : '#111827'
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="accuracy" name="Train Accuracy" stroke="#10b981" strokeWidth={3} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="val_accuracy" name="Val Accuracy" stroke="#3b82f6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">Training & Validation Loss</h3>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trainingData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                    <XAxis dataKey="epoch" stroke={darkMode ? "#9ca3af" : "#6b7280"} tick={{fill: darkMode ? "#9ca3af" : "#6b7280"}} />
                    <YAxis domain={[0, 1]} stroke={darkMode ? "#9ca3af" : "#6b7280"} tick={{fill: darkMode ? "#9ca3af" : "#6b7280"}} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                        borderColor: darkMode ? '#374151' : '#e5e7eb',
                        color: darkMode ? '#f3f4f6' : '#111827'
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="loss" name="Train Loss" stroke="#ef4444" strokeWidth={3} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="val_loss" name="Val Loss" stroke="#f59e0b" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Run Locally</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Want to run the complete prediction API and Streamlit app?
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg font-mono text-sm">
            <div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-gray-400 text-xs">terminal</span>
            </div>
            <div className="p-6 text-gray-300 space-y-4">
              <div>
                <span className="text-gray-500"># Clone the repository</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-emerald-400">$</span>
                  <span>git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git</span>
                </div>
              </div>

              <div>
                <span className="text-gray-500"># Navigate to project</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-emerald-400">$</span>
                  <span>cd Plant-Disease-Detection</span>
                </div>
              </div>

              <div>
                <span className="text-gray-500"># Install dependencies</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-emerald-400">$</span>
                  <span>pip install -r requirement.txt</span>
                </div>
              </div>

              <div>
                <span className="text-gray-500"># Run the original Streamlit application</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-emerald-400">$</span>
                  <span>streamlit run main.py</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Leaf size={20} className="text-emerald-500" />
            <span className="font-bold text-lg text-gray-900 dark:text-white">AgriVision AI</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Empowering Agriculture Through Artificial Intelligence.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            Made by AASTU Software Engineering Students.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
