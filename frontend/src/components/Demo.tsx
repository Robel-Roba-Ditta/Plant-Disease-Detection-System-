import { useState, useRef } from 'react';
import { Upload, ImageIcon, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

export function Demo() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    disease: string;
    confidence: number;
    cnnConfidence: number;
    rfConfidence: number;
    type: 'healthy' | 'diseased';
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const processFile = (selectedFile: File) => {
    if (!selectedFile.type.startsWith('image/')) return;

    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
    setResult(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const analyzeImage = () => {
    if (!file) return;

    setIsAnalyzing(true);
    setResult(null);

    // Mocking API call for demo purposes based on README performance metrics
    setTimeout(() => {
      setIsAnalyzing(false);
      // Randomly decide if healthy or diseased for demo purposes
      const isHealthy = Math.random() > 0.7;

      if (isHealthy) {
        setResult({
          disease: "Healthy Leaf",
          confidence: 0.983, // ensemble accuracy
          cnnConfidence: 0.978, // cnn accuracy
          rfConfidence: 0.954, // rf accuracy
          type: 'healthy'
        });
      } else {
        const diseases = ['Apple Scab', 'Corn Blight', 'Grape Black Rot', 'Potato Early Blight', 'Tomato Bacterial Spot'];
        setResult({
          disease: diseases[Math.floor(Math.random() * diseases.length)],
          confidence: 0.983 - (Math.random() * 0.05),
          cnnConfidence: 0.978 - (Math.random() * 0.08),
          rfConfidence: 0.954 - (Math.random() * 0.1),
          type: 'diseased'
        });
      }
    }, 2000);
  };

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900 transition-colors">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Interactive Playground
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Upload a leaf image to see our hybrid ML model in action
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Upload Area */}
          <div className="card p-6 h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Upload Image</h3>

            <div
              className={`flex-1 border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-8 transition-colors text-center ${
                isDragging
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/10'
                  : 'border-gray-300 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-600'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileSelect}
              />

              {previewUrl ? (
                <div className="relative w-full h-full min-h-[250px] flex items-center justify-center">
                  <img src={previewUrl} alt="Preview" className="max-h-[250px] max-w-full rounded-lg object-contain shadow-sm" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg cursor-pointer">
                    <p className="text-white font-medium flex items-center gap-2">
                      <Upload className="h-5 w-5" /> Change Image
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="p-4 bg-primary-100 dark:bg-primary-900/20 rounded-full mb-4 text-primary-600 dark:text-primary-400">
                    <ImageIcon className="h-10 w-10" />
                  </div>
                  <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                    Click or drag image to upload
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Supports JPG, PNG (Max 5MB)
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                className="btn-primary w-full"
                onClick={analyzeImage}
                disabled={!file || isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Analyze with Hybrid Model'
                )}
              </button>
            </div>
          </div>

          {/* Results Area */}
          <div className="card p-6 h-full flex flex-col bg-gray-50 dark:bg-dark-800 border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Analysis Results</h3>

            {!result && !isAnalyzing ? (
              <div className="flex-1 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 text-center py-12 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl">
                <AlertCircle className="h-12 w-12 mb-3 text-gray-400 dark:text-gray-500" />
                <p>Upload an image and click analyze to see predictions.</p>
              </div>
            ) : isAnalyzing ? (
              <div className="flex-1 flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 relative">
                  <div className="absolute inset-0 border-4 border-primary-200 dark:border-primary-900/30 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="mt-6 font-medium text-gray-900 dark:text-white animate-pulse">
                  Extracting features via CNN...
                </p>
              </div>
            ) : result ? (
              <div className="flex-1 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className={`p-5 rounded-xl border ${
                  result.type === 'healthy'
                    ? 'bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-800'
                    : 'bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-800'
                }`}>
                  <div className="flex items-start gap-4">
                    {result.type === 'healthy' ? (
                      <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-500 mt-1 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-500 mt-1 flex-shrink-0" />
                    )}
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                        Diagnosis
                      </h4>
                      <p className={`text-2xl font-bold ${
                        result.type === 'healthy' ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'
                      }`}>
                        {result.disease}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Model Confidence</h4>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Ensemble Strategy (Final)</span>
                        <span className="font-medium text-gray-900 dark:text-white">{(result.confidence * 100).toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: `${result.confidence * 100}%` }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">CNN Model</span>
                        <span className="font-medium text-gray-900 dark:text-gray-300">{(result.cnnConfidence * 100).toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full opacity-80" style={{ width: `${result.cnnConfidence * 100}%` }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Random Forest Classifier</span>
                        <span className="font-medium text-gray-900 dark:text-gray-300">{(result.rfConfidence * 100).toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full opacity-80" style={{ width: `${result.rfConfidence * 100}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
