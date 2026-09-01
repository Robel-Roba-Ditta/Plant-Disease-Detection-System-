import { useState, useRef } from 'react';
import { Upload, ImageIcon, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Demo() {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ disease: string; confidence: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePredict = () => {
    if (!image) return;

    setIsAnalyzing(true);
    setResult(null);

    // Simulate API call and model inference
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        disease: 'Tomato___Late_blight',
        confidence: 98.45
      });
    }, 2000);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Interactive Demo Playground</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Upload an image of a plant leaf to see our machine learning model in action. The system will predict the disease and provide a confidence score.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Upload Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Upload className="h-5 w-5 text-green-500" />
              1. Upload Leaf Image
            </h3>

            <div
              onClick={triggerFileInput}
              className={`relative h-72 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all ${
                image
                  ? 'border-green-500 bg-green-50/50 dark:bg-green-900/10 p-2'
                  : 'border-gray-300 dark:border-gray-700 hover:border-green-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
            >
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageUpload}
              />

              {image ? (
                <div className="relative w-full h-full rounded-xl overflow-hidden group">
                  <img src={image} alt="Uploaded leaf" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">Click to change</span>
                  </div>
                </div>
              ) : (
                <div className="text-center p-6">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">JPG, PNG, WEBP (Max 5MB)</p>
                </div>
              )}
            </div>

            <button
              onClick={handlePredict}
              disabled={!image || isAnalyzing}
              className={`w-full py-3.5 rounded-xl font-medium text-lg flex items-center justify-center gap-2 transition-all ${
                !image
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-green-500/30'
              }`}
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Analyzing Model...
                </>
              ) : (
                'Run Inference'
              )}
            </button>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              2. Prediction Results
            </h3>

            <div className={`h-72 rounded-2xl border ${result ? 'border-green-200 dark:border-green-900/50 bg-green-50/30 dark:bg-green-900/5' : 'border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20'} flex flex-col p-6`}>
              {!image && !result && !isAnalyzing && (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 text-center">
                  <AlertCircle className="h-10 w-10 mb-3 opacity-50" />
                  <p>Upload an image and click "Run Inference"<br/>to see predictions.</p>
                </div>
              )}

              {isAnalyzing && (
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
                    <div className="h-20 w-20 rounded-full border-4 border-green-500 border-t-transparent animate-spin absolute inset-0"></div>
                  </div>
                  <p className="mt-4 font-medium text-gray-600 dark:text-gray-400 animate-pulse">Extracting features...</p>
                </div>
              )}

              {result && (
                <div className="flex-1 flex flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Top Prediction</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {result.disease.replace(/_/g, ' ')}
                  </h4>

                  <div className="space-y-3">
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-sm font-medium">Confidence Score</span>
                      <span className="text-lg font-bold text-green-600 dark:text-green-400">{result.confidence}%</span>
                    </div>
                    <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${result.confidence}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Note:</strong> This is a mock response for demonstration. The actual model uses an ensemble of CNN and Random Forest classifiers.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}