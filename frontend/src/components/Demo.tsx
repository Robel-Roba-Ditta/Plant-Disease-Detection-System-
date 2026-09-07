import { useState } from 'react';
import { Upload, ImageIcon, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Demo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState<{ disease: string; confidence: number } | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedImage(url);
      setPrediction(null);
    }
  };

  const handlePredict = () => {
    if (!selectedImage) return;

    setIsPredicting(true);
    // Mock prediction process
    setTimeout(() => {
      setIsPredicting(false);
      // Mock result (in a real app, this would come from the Streamlit backend API)
      setPrediction({
        disease: 'Apple___Apple_scab',
        confidence: 97.8
      });
    }, 2000);
  };

  return (
    <section id="demo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Interactive Demo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload a leaf image to test the model. In production, this connects to our TensorFlow/Keras backend for real-time inference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Upload Section */}
          <div className="bg-card border border-border rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">1. Select Image</h3>

            <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center bg-muted/20 hover:bg-muted/50 transition-colors relative h-[300px]">
              {selectedImage ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img src={selectedImage} alt="Uploaded leaf" className="max-h-full max-w-full object-contain rounded-md" />
                  <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity cursor-pointer rounded-md">
                    <span className="text-white font-medium flex items-center bg-black/50 px-4 py-2 rounded-full">
                      <Upload className="w-4 h-4 mr-2" /> Change Image
                    </span>
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                  </label>
                </div>
              ) : (
                <label className="cursor-pointer flex flex-col items-center w-full h-full justify-center">
                  <div className="p-4 bg-primary/10 text-primary rounded-full mb-4">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground">SVG, PNG, JPG or WEBP (max. 5MB)</p>
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
              )}
            </div>

            <button
              onClick={handlePredict}
              disabled={!selectedImage || isPredicting}
              className="w-full mt-6 flex items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPredicting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing image...
                </>
              ) : (
                'Run Prediction'
              )}
            </button>
          </div>

          {/* Results Section */}
          <div className="bg-card border border-border rounded-xl shadow-sm p-6 h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-4">2. Analysis Results</h3>

            <div className="flex-1 flex flex-col items-center justify-center bg-muted/20 rounded-lg p-6 min-h-[300px]">
              {!selectedImage ? (
                <div className="text-center text-muted-foreground">
                  <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Upload an image to see results</p>
                </div>
              ) : isPredicting ? (
                <div className="text-center space-y-4 w-full max-w-xs">
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary animate-pulse w-full"></div>
                  </div>
                  <p className="text-sm text-muted-foreground animate-pulse">Running CNN + Random Forest models...</p>
                </div>
              ) : prediction ? (
                <div className="w-full space-y-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="text-center border-b border-border pb-6">
                    <p className="text-sm text-muted-foreground mb-1">Detected Condition</p>
                    <h4 className="text-2xl font-bold text-foreground">{prediction.disease.replace(/___/g, ' - ').replace(/_/g, ' ')}</h4>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Confidence Score</span>
                      <span className="font-medium">{prediction.confidence}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${prediction.confidence}%` }}></div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 p-4 rounded-md text-sm mt-4">
                    <strong>Note:</strong> This is a mock response. The real application uses the trained TensorFlow model in the backend to provide accurate classifications across 38 different plant disease classes.
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Ready for analysis</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
