import { useState, useRef } from 'react';
import { Upload, ImageIcon, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const MOCK_PREDICTIONS = [
  { name: 'Apple___Apple_scab', confidence: 98.5 },
  { name: 'Tomato___Late_blight', confidence: 96.2 },
  { name: 'Corn_(maize)___Common_rust_', confidence: 99.1 },
  { name: 'Potato___Early_blight', confidence: 94.8 },
  { name: 'Grape___Black_rot', confidence: 97.4 },
];

export default function Demo() {
  const [image, setImage] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [result, setResult] = useState<{ name: string; confidence: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
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
    setIsPredicting(true);

    // Simulate API call
    setTimeout(() => {
      const randomPrediction = MOCK_PREDICTIONS[Math.floor(Math.random() * MOCK_PREDICTIONS.length)];
      setResult(randomPrediction);
      setIsPredicting(false);
    }, 1500);
  };

  return (
    <section id="demo" className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Interactive Playground</h2>
          <p className="text-muted-foreground">Upload a leaf image to test our model (Mock Implementation)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="flex flex-col gap-4">
            <div
              className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[300px]"
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                accept="image/jpeg,image/png,image/webp,image/jpg"
                onChange={handleFileChange}
              />

              {image ? (
                <div className="relative w-full h-full min-h-[250px] flex items-center justify-center">
                  <img src={image} alt="Uploaded leaf" className="max-w-full max-h-[250px] object-contain rounded-lg shadow-sm" />
                </div>
              ) : (
                <div className="flex flex-col items-center text-muted-foreground">
                  <Upload className="h-12 w-12 mb-4 mb-4 text-muted-foreground" />
                  <p className="font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-sm">SVG, PNG, JPG or WEBP (max. 5MB)</p>
                </div>
              )}
            </div>

            <button
              onClick={handlePredict}
              disabled={!image || isPredicting}
              className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              {isPredicting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing Image...
                </>
              ) : (
                <>
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Run Prediction
                </>
              )}
            </button>
          </div>

          {/* Result Section */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-6">Analysis Results</h3>

            <div className="flex-1 flex flex-col justify-center">
              {!image ? (
                <div className="text-center text-muted-foreground">
                  <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-20" />
                  <p>Upload an image to see predictions.</p>
                </div>
              ) : isPredicting ? (
                <div className="text-center text-muted-foreground space-y-4">
                  <Loader2 className="h-12 w-12 mx-auto animate-spin text-primary" />
                  <p>Extracting CNN features...</p>
                  <div className="w-full bg-secondary rounded-full h-2 mt-4">
                    <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                  </div>
                </div>
              ) : result ? (
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-6 w-6 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Disease Detected</h4>
                      <p className="text-sm opacity-90 font-medium">Model predicts this is:</p>
                      <p className="text-xl font-bold mt-1">{result.name.replace(/___/g, ' - ').replace(/_/g, ' ')}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>Confidence Score</span>
                      <span>{result.confidence}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${result.confidence}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      * This is a mock demonstration. In the actual app, this communicates with the TensorFlow model locally or via API.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-20" />
                  <p>Image ready. Click "Run Prediction" to start.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
