import { useState, useRef } from 'react';
import { UploadCloud, Image as ImageIcon, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';

export function Demo() {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ disease: string, confidence: number, isHealthy: boolean } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      setResult(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setImage(url);
      setResult(null);
    }
  };

  const simulateAnalysis = () => {
    if (!image) return;
    setIsAnalyzing(true);

    // Simulate network/model inference delay
    setTimeout(() => {
      setIsAnalyzing(false);
      // Mock result (randomized for demo purposes)
      const mockDiseases = [
        { name: 'Apple Scab', healthy: false },
        { name: 'Tomato Early Blight', healthy: false },
        { name: 'Corn Healthy', healthy: true },
        { name: 'Grape Black Rot', healthy: false },
        { name: 'Potato Healthy', healthy: true }
      ];
      const randomResult = mockDiseases[Math.floor(Math.random() * mockDiseases.length)];

      setResult({
        disease: randomResult.name,
        confidence: 0.85 + (Math.random() * 0.14), // 85% - 99%
        isHealthy: randomResult.healthy
      });
    }, 2000);
  };

  return (
    <section id="demo" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Interactive Demo Playground</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Upload a leaf image to test the hybrid CNN + Random Forest classification model.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Upload Section */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800 flex flex-col justify-center">
              {!image ? (
                <div
                  className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-sm font-medium text-gray-900 dark:text-gray-200">Upload a leaf image</h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">PNG, JPG, JPEG up to 10MB</p>
                  <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">or drag and drop</p>
                </div>
              ) : (
                <div className="relative group rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-square flex items-center justify-center">
                  <img src={image} alt="Uploaded leaf" className="max-w-full max-h-full object-contain" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => { setImage(null); setResult(null); }}
                      className="px-4 py-2 bg-white text-gray-900 rounded-md font-medium text-sm hover:bg-gray-100"
                    >
                      Remove Image
                    </button>
                  </div>
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>

            {/* Results Section */}
            <div className="p-8 flex flex-col justify-center bg-gray-50/50 dark:bg-gray-900/50">
              {isAnalyzing ? (
                <div className="text-center">
                  <Loader2 className="mx-auto h-10 w-10 text-emerald-600 animate-spin" />
                  <p className="mt-4 text-sm font-medium text-gray-900 dark:text-gray-200">Running inference...</p>
                  <p className="mt-1 text-xs text-gray-500">Extracting CNN features and evaluating Random Forest ensemble.</p>
                </div>
              ) : result ? (
                <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className={`mx-auto flex items-center justify-center h-16 w-16 rounded-full ${result.isHealthy ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'} mb-6`}>
                    {result.isHealthy ? <CheckCircle2 size={32} /> : <AlertTriangle size={32} />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{result.disease}</h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                    Confidence: {(result.confidence * 100).toFixed(1)}%
                  </div>
                  <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                    *This is a frontend UI demonstration. The actual model is deployed via the Python Streamlit application.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <ImageIcon className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600 mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 mb-6">Upload an image to see prediction results.</p>
                  <button
                    onClick={simulateAnalysis}
                    disabled={!image}
                    className={`w-full py-3 px-4 rounded-md font-medium text-white transition-colors ${
                      image ? 'bg-emerald-600 hover:bg-emerald-700 shadow-md' : 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                    }`}
                  >
                    Analyze Image
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
