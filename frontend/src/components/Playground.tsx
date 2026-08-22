import { useState } from 'react';
import { Upload, Image as ImageIcon, AlertCircle, CheckCircle2, Loader2, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_PREDICTIONS = [
  { disease: 'Apple___Apple_scab', confidence: 98.5 },
  { disease: 'Tomato___Late_blight', confidence: 96.2 },
  { disease: 'Corn_(maize)___Northern_Leaf_Blight', confidence: 94.8 },
  { disease: 'Grape___Black_rot', confidence: 97.1 },
  { disease: 'Potato___Early_blight', confidence: 95.9 }
];

export default function Playground() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ disease: string, confidence: number } | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setResult(null);
    }
  };

  const handleAnalyze = () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);

    // Simulate network request / model inference delay
    setTimeout(() => {
      const randomPrediction = MOCK_PREDICTIONS[Math.floor(Math.random() * MOCK_PREDICTIONS.length)];
      setResult(randomPrediction);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <section id="playground" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Interactive Disease Analysis</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Upload a leaf image to test our hybrid CNN + Random Forest classification model.
          <br className="hidden md:block" />
          <span className="text-sm italic mt-2 inline-block text-amber-600 dark:text-amber-400">
            Note: This static demo uses simulated responses. Run the backend locally for actual model inference.
          </span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-sm border">
        {/* Upload Column */}
        <div className="flex flex-col gap-4">
          <div
            className={`border-2 border-dashed rounded-xl h-80 flex flex-col items-center justify-center p-6 text-center transition-colors ${
              selectedImage
                ? 'border-brand-500 bg-brand-50/50 dark:bg-brand-900/10'
                : 'border-neutral-300 dark:border-neutral-700 hover:border-brand-400'
            }`}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected leaf"
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            ) : (
              <>
                <div className="w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mb-4 text-brand-600 dark:text-brand-400">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <h3 className="font-medium text-lg mb-2">Upload Leaf Image</h3>
                <p className="text-sm text-neutral-500 mb-6">
                  Supports JPG, PNG, WEBP (Max 5MB)
                </p>
                <label className="btn btn-primary h-10 px-6 cursor-pointer">
                  <Upload className="w-4 h-4 mr-2" />
                  Select File
                  <input
                    type="file"
                    className="hidden"
                    accept="image/jpeg, image/png, image/webp"
                    onChange={handleImageUpload}
                  />
                </label>
              </>
            )}
          </div>

          {selectedImage && (
            <div className="flex gap-3">
              <label className="btn btn-outline flex-1 h-11 cursor-pointer">
                Change Image
                <input
                  type="file"
                  className="hidden"
                  accept="image/jpeg, image/png, image/webp"
                  onChange={handleImageUpload}
                />
              </label>
              <button
                className="btn btn-primary flex-1 h-11"
                onClick={handleAnalyze}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Run Analysis'
                )}
              </button>
            </div>
          )}
        </div>

        {/* Results Column */}
        <div className="bg-neutral-50 dark:bg-neutral-950 rounded-xl p-6 border flex flex-col justify-center min-h-[350px]">
          <AnimatePresence mode="wait">
            {!selectedImage && !result && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-neutral-500 flex flex-col items-center"
              >
                <AlertCircle className="w-12 h-12 mb-4 opacity-50" />
                <p>Upload an image and run analysis to see results here.</p>
              </motion.div>
            )}

            {isAnalyzing && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-brand-200 border-t-brand-500 rounded-full animate-spin"></div>
                  <Leaf className="w-6 h-6 text-brand-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <p className="mt-6 font-medium animate-pulse">Extracting features...</p>
                <p className="text-sm text-neutral-500 mt-2">Running through CNN & Random Forest ensemble</p>
              </motion.div>
            )}

            {result && !isAnalyzing && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 text-green-600 dark:text-green-400 mt-1">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-1">Primary Prediction</h4>
                    <p className="text-xl font-bold break-words">
                      {result.disease.replace(/___/g, ' - ').replace(/_/g, ' ')}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Confidence Score</span>
                    <span className="text-brand-600 dark:text-brand-400">{result.confidence}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${result.confidence}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-brand-500 h-2.5 rounded-full"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 p-4 rounded-lg text-sm flex gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p>
                    This is a simulated response for demonstration purposes. To get real predictions, run the full Streamlit app locally with the trained model files.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
