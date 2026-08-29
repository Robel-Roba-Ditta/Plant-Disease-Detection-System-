import { useState } from 'react';
import { Upload, ImageIcon, Loader2 } from 'lucide-react';

export function Demo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ disease: string; confidence: string } | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setResult(null);
    }
  };

  const runPrediction = () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    setResult(null);

    // Mock API call delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        disease: 'Apple___Apple_scab',
        confidence: '98.3%',
      });
    }, 2000);
  };

  return (
    <section id="demo" className="py-16 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Interactive Demo</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Upload a leaf image to test the model's prediction capabilities.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Image Upload Area */}
              <div className="space-y-4">
                <div
                  className={`aspect-square rounded-xl border-2 border-dashed flex flex-col items-center justify-center p-6 text-center transition-colors
                    ${selectedImage
                      ? 'border-green-500 bg-green-50 dark:bg-green-500/10'
                      : 'border-slate-300 dark:border-slate-700 hover:border-green-400'}`}
                >
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected leaf"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <>
                      <ImageIcon className="w-12 h-12 text-slate-400 mb-4" />
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        Drag and drop an image, or click to browse
                      </p>
                      <p className="text-xs text-slate-500">
                        Supports JPG, PNG, WEBP
                      </p>
                    </>
                  )}

                  <input
                    type="file"
                    accept="image/jpeg, image/png, image/webp"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleImageUpload}
                  />
                </div>

                <button
                  onClick={runPrediction}
                  disabled={!selectedImage || isAnalyzing}
                  className="w-full py-3 px-4 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Analyzing Image...
                    </>
                  ) : (
                    <>
                      <Upload size={20} />
                      Run Prediction
                    </>
                  )}
                </button>
              </div>

              {/* Results Area */}
              <div className="flex flex-col justify-center">
                {result ? (
                  <div className="bg-green-50 dark:bg-green-500/10 rounded-xl p-6 border border-green-100 dark:border-green-500/20">
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                      Analysis Complete
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Predicted Disease</p>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">
                          {result.disease.replace(/___/g, ' - ').replace(/_/g, ' ')}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Confidence Score</p>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: result.confidence }} />
                          </div>
                          <span className="font-bold text-green-600 dark:text-green-400">
                            {result.confidence}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500 dark:text-slate-400">
                    <ImageIcon className="w-16 h-16 opacity-20 mb-4" />
                    <p>Upload an image and run prediction to see results here.</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}