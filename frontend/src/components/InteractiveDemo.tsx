import React, { useState, useRef } from 'react';
import { Upload, ImageIcon, Loader2, AlertCircle } from 'lucide-react';

export function InteractiveDemo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState<{class: string, confidence: number} | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MOCK_CLASSES = [
    'Apple___Apple_scab',
    'Tomato___Early_blight',
    'Potato___Late_blight',
    'Corn_(maize)___healthy',
    'Grape___Black_rot'
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setError(null);
    setPrediction(null);

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file (jpg, png, webp).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handlePredict = () => {
    if (!selectedImage) return;

    setIsPredicting(true);
    setError(null);

    // Simulate model inference time
    setTimeout(() => {
      try {
        const randomClass = MOCK_CLASSES[Math.floor(Math.random() * MOCK_CLASSES.length)];
        const confidence = (85 + Math.random() * 14).toFixed(1); // Random confidence between 85-99%

        setPrediction({
          class: randomClass.replace(/___/g, ' - ').replace(/_/g, ' '),
          confidence: Number(confidence)
        });
      } catch (err) {
        setError('An error occurred during prediction. Please try again.');
        console.error(err);
      } finally {
        setIsPredicting(false);
      }
    }, 2000);
  };

  return (
    <section id="demo" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Interactive Demo</h2>
        <p className="text-[var(--foreground)]/70">
          Upload a plant leaf image to test our disease recognition model.
        </p>
      </div>

      <div className="bg-card border border-[var(--border)] rounded-2xl p-6 shadow-sm">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Upload Section */}
          <div className="flex flex-col">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex-1 border-2 border-dashed border-[var(--border)] rounded-xl flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-[var(--foreground)]/5 transition-colors min-h-[300px]"
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/jpeg, image/png, image/webp"
                className="hidden"
              />

              {selectedImage ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={selectedImage}
                    alt="Selected leaf"
                    className="max-h-[250px] object-contain rounded-lg"
                  />
                </div>
              ) : (
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Click to upload image</h3>
                  <p className="text-sm text-[var(--foreground)]/60">
                    JPG, PNG or WEBP (Max 5MB)
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={handlePredict}
              disabled={!selectedImage || isPredicting}
              className="mt-4 w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
            >
              {isPredicting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <ImageIcon className="w-5 h-5" />
                  Predict Disease
                </>
              )}
            </button>
          </div>

          {/* Results Section */}
          <div className="flex flex-col justify-center bg-[var(--background)] rounded-xl border border-[var(--border)] p-8">
            {error ? (
              <div className="text-center text-red-500">
                <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <p>{error}</p>
              </div>
            ) : prediction ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-sm font-medium text-[var(--foreground)]/60 uppercase tracking-wider mb-2">
                  Prediction Result
                </h3>
                <div className="text-2xl font-bold mb-6 text-primary">
                  {prediction.class}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Confidence Score</span>
                    <span>{prediction.confidence}%</span>
                  </div>
                  <div className="h-2 w-full bg-[var(--border)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-1000 ease-out"
                      style={{ width: `${prediction.confidence}%` }}
                    />
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm">
                    <strong>Note:</strong> This is a simulated prediction for demo purposes. The actual model uses TensorFlow running on the backend.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center text-[var(--foreground)]/40 flex flex-col items-center">
                <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
                <p>Upload an image and click predict to see results</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
