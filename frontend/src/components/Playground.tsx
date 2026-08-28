import { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface Prediction {
  disease: string;
  confidence: number;
  type: 'ensemble' | 'cnn' | 'rf';
}

const mockPredictions = [
  {
    imageType: 'healthy',
    results: [
      { disease: 'Apple_healthy', confidence: 99.2, type: 'ensemble' },
      { disease: 'Apple_healthy', confidence: 98.7, type: 'cnn' },
      { disease: 'Apple_healthy', confidence: 96.5, type: 'rf' },
    ]
  },
  {
    imageType: 'diseased',
    results: [
      { disease: 'Tomato_Early_blight', confidence: 97.8, type: 'ensemble' },
      { disease: 'Tomato_Early_blight', confidence: 96.4, type: 'cnn' },
      { disease: 'Tomato_Early_blight', confidence: 94.2, type: 'rf' },
    ]
  }
];

export function Playground() {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<Prediction[] | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
        setResults(null);
        simulateAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate network delay
    setTimeout(() => {
      // Randomly pick a mock result set to simulate variation
      const randomSet = mockPredictions[Math.floor(Math.random() * mockPredictions.length)];
      setResults(randomSet.results as Prediction[]);
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <section id="playground" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Interactive Playground</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Upload a leaf image to see our hybrid model in action. The system will extract features via CNN
            and process them through a Random Forest classifier for high-confidence predictions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Upload Area */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-800">
            <div
              className={cn(
                "relative flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-12 transition-all cursor-pointer",
                image
                  ? "border-emerald-500/50 bg-emerald-50/50 dark:bg-emerald-900/10"
                  : "border-slate-300 dark:border-slate-700 hover:border-emerald-500 hover:bg-slate-50 dark:hover:bg-slate-800"
              )}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />

              {image ? (
                <div className="relative w-full aspect-square rounded-lg overflow-hidden flex items-center justify-center">
                  <img src={image} alt="Uploaded leaf" className="object-cover w-full h-full" />
                  {isAnalyzing && (
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm flex flex-col items-center justify-center text-white">
                      <Loader2 className="h-10 w-10 animate-spin mb-4" />
                      <span className="font-medium">Analyzing CNN Features...</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full inline-block mb-4">
                    <Upload className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Upload a leaf image</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">PNG, JPG or JPEG up to 5MB</p>
                  <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                    Select File
                  </button>
                </div>
              )}
            </div>
            {image && !isAnalyzing && (
               <button
                onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                className="mt-4 w-full py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
               >
                 Upload another image
               </button>
            )}
          </div>

          {/* Results Area */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-800 min-h-[400px] flex flex-col">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg">
                <ImageIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Analysis Results</h3>
            </div>

            {!image ? (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 text-center p-6">
                <AlertCircle className="h-12 w-12 mb-4 opacity-20" />
                <p>Upload an image to see prediction results</p>
              </div>
            ) : isAnalyzing ? (
              <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                <div className="w-full space-y-4 max-w-xs">
                  <div className="flex items-center gap-3">
                    <Loader2 className="h-5 w-5 animate-spin text-emerald-500" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Resizing to 128x128...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Loader2 className="h-5 w-5 animate-spin text-indigo-500 delay-75" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Extracting CNN feature vectors...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Loader2 className="h-5 w-5 animate-spin text-purple-500 delay-150" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Running Random Forest ensemble...</span>
                  </div>
                </div>
              </div>
            ) : results ? (
              <div className="space-y-6 flex-1 flex flex-col justify-center">
                {results.map((result, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "p-4 rounded-xl border",
                      result.type === 'ensemble'
                        ? "bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800"
                        : "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                    )}
                  >
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1 block">
                          {result.type === 'ensemble' ? 'Final Hybrid Prediction' : `${result.type.toUpperCase()} Prediction`}
                        </span>
                        <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          {result.disease.replace('_', ' ')}
                          {result.type === 'ensemble' && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                        </h4>
                      </div>
                      <span className={cn(
                        "font-bold text-lg",
                        result.type === 'ensemble' ? "text-emerald-600 dark:text-emerald-400" : "text-slate-700 dark:text-slate-300"
                      )}>
                        {result.confidence}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-3 overflow-hidden">
                      <div
                        className={cn(
                          "h-2 rounded-full transition-all duration-1000 ease-out",
                          result.type === 'ensemble' ? "bg-emerald-500" : "bg-slate-500 dark:bg-slate-400"
                        )}
                        style={{ width: `${result.confidence}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
