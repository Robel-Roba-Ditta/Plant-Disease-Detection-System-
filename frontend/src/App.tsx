import { useState, useEffect } from 'react';
import { Moon, Sun, Upload, Code, Play, Leaf, Info, Terminal, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import trainingData from './training_hist.json';

const chartData = trainingData.accuracy.map((acc, index) => ({
  epoch: index + 1,
  accuracy: (acc * 100).toFixed(2),
  val_accuracy: (trainingData.val_accuracy[index] * 100).toFixed(2),
  loss: trainingData.loss[index].toFixed(4),
  val_loss: trainingData.val_loss[index].toFixed(4),
}));

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState<{ disease: string; confidence: number } | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setPrediction(null);
    }
  };

  const handlePredict = () => {
    if (!file) return;
    setIsPredicting(true);
    setPrediction(null);

    // Mock prediction delay
    setTimeout(() => {
      setIsPredicting(false);
      setPrediction({ disease: 'Apple___Apple_scab', confidence: 97.8 });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-primary/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg tracking-tight">PlantCare AI</span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 space-y-24">

        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-3xl mx-auto pt-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
            Intelligent Plant Disease Detection
          </h1>
          <p className="text-xl text-muted-foreground">
            Leverage Deep Learning and Computer Vision to automatically identify plant diseases from leaf images with high accuracy.
          </p>
          <div className="flex items-center justify-center space-x-4 pt-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 rounded-md h-12 px-8"
            >
              <Play className="mr-2 h-4 w-4" /> Live Demo
            </a>
            <a
              href="#docs"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md h-12 px-8"
            >
              <Code className="mr-2 h-4 w-4" /> View Code
            </a>
          </div>
        </section>

        {/* Demo / Playground */}
        <section id="demo" className="scroll-mt-24 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="border-b border-border p-6 bg-muted/30">
              <h2 className="text-2xl font-bold flex items-center">
                <Activity className="mr-2 h-6 w-6 text-primary" /> Interactive Playground
              </h2>
              <p className="text-muted-foreground mt-1">Upload a plant leaf image to detect potential diseases.</p>
            </div>

            <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8 items-start">
              {/* Upload Area */}
              <div className="space-y-4">
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-xl cursor-pointer bg-muted/10 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 text-muted-foreground mb-3" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">JPG, PNG or WEBP (Max. 5MB)</p>
                  </div>
                  <input
                    id="image-upload"
                    type="file"
                    className="hidden"
                    accept="image/jpeg, image/png, image/webp"
                    onChange={handleFileChange}
                  />
                </label>

                <button
                  onClick={handlePredict}
                  disabled={!file || isPredicting}
                  className="w-full h-12 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isPredicting ? 'Analyzing Image...' : 'Analyze Leaf'}
                </button>
              </div>

              {/* Results Area */}
              <div className="bg-muted/20 rounded-xl p-6 h-full min-h-[300px] flex flex-col items-center justify-center border border-border">
                {!preview && !isPredicting && !prediction && (
                  <div className="text-center text-muted-foreground flex flex-col items-center">
                    <Info className="h-10 w-10 mb-3 opacity-50" />
                    <p>Upload an image to see the prediction</p>
                  </div>
                )}

                {preview && !prediction && !isPredicting && (
                  <div className="flex flex-col items-center w-full">
                    <img src={preview} alt="Preview" className="max-h-48 rounded-lg object-cover mb-4 border border-border shadow-sm" />
                    <p className="text-sm text-muted-foreground">Ready to analyze</p>
                  </div>
                )}

                {isPredicting && (
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-sm font-medium animate-pulse">Processing image with CNN...</p>
                  </div>
                )}

                {prediction && (
                  <div className="flex flex-col items-center w-full space-y-4 animate-in fade-in zoom-in duration-300">
                    <img src={preview!} alt="Analyzed" className="max-h-40 rounded-lg object-cover border border-border shadow-sm" />
                    <div className="w-full bg-background p-4 rounded-lg border border-border shadow-sm">
                      <p className="text-sm text-muted-foreground mb-1">Prediction Result</p>
                      <h3 className="text-lg font-bold text-foreground break-all">{prediction.disease.replace(/___/g, ' - ').replace(/_/g, ' ')}</h3>

                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Confidence</span>
                          <span className="font-semibold text-primary">{prediction.confidence}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${prediction.confidence}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Model Performance</h2>
            <p className="text-muted-foreground">Training history and evaluation metrics of our CNN + Random Forest hybrid model.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Accuracy Chart */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <h3 className="text-lg font-semibold mb-6">Model Accuracy</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.5} />
                    <XAxis dataKey="epoch" stroke="currentColor" className="text-xs text-muted-foreground" />
                    <YAxis stroke="currentColor" className="text-xs text-muted-foreground" domain={['auto', 'auto']} />
                    <Tooltip
                      contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                      itemStyle={{ color: 'var(--foreground)' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="accuracy" name="Training Acc (%)" stroke="#16a34a" strokeWidth={2} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="val_accuracy" name="Validation Acc (%)" stroke="#2563eb" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Loss Chart */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <h3 className="text-lg font-semibold mb-6">Model Loss</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.5} />
                    <XAxis dataKey="epoch" stroke="currentColor" className="text-xs text-muted-foreground" />
                    <YAxis stroke="currentColor" className="text-xs text-muted-foreground" domain={['auto', 'auto']} />
                    <Tooltip
                      contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                      itemStyle={{ color: 'var(--foreground)' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="loss" name="Training Loss" stroke="#dc2626" strokeWidth={2} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="val_loss" name="Validation Loss" stroke="#ea580c" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'CNN Accuracy', value: '97.8%' },
              { label: 'Ensemble Strategy', value: '98.3%' },
              { label: 'Classes Supported', value: '38' },
              { label: 'Images Trained', value: '87k+' },
            ].map((stat, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documentation */}
        <section id="docs" className="max-w-3xl mx-auto scroll-mt-24 bg-card border border-border rounded-xl p-8 shadow-sm">
          <div className="flex items-center mb-6">
            <Terminal className="h-6 w-6 text-primary mr-3" />
            <h2 className="text-2xl font-bold">Local Installation Guide</h2>
          </div>

          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">1. Clone Repository</h3>
              <div className="bg-muted p-3 rounded-md border border-border flex items-center justify-between">
                <code className="text-sm text-foreground">git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git</code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">2. Install Dependencies</h3>
              <p className="mb-2 text-sm">Ensure you have Python 3.10+ installed. Run the following command:</p>
              <div className="bg-muted p-3 rounded-md border border-border">
                <code className="text-sm text-foreground">pip install -r requirement.txt</code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">3. Run the Backend Streamlit App</h3>
              <p className="mb-2 text-sm">Start the local inference server and dashboard:</p>
              <div className="bg-muted p-3 rounded-md border border-border">
                <code className="text-sm text-foreground">streamlit run main.py</code>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-24 py-8 text-center text-muted-foreground">
        <p className="flex items-center justify-center text-sm">
          Empowering Agriculture Through Artificial Intelligence <Leaf className="h-4 w-4 ml-2 text-primary" />
        </p>
      </footer>
    </div>
  );
}

export default App;
