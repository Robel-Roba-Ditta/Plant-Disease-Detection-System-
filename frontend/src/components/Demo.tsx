import { useState, useRef } from 'react';
import { Upload, ImageIcon, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export function Demo() {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{class: string, confidence: number} | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const mockClasses = [
    'Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
    'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___healthy',
    'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy'
  ];

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

  const handleAnalyze = () => {
    if (!image) return;
    setIsAnalyzing(true);
    setResult(null);

    // Mock API call
    setTimeout(() => {
      setIsAnalyzing(false);
      const randomClass = mockClasses[Math.floor(Math.random() * mockClasses.length)];
      const randomConfidence = (Math.random() * (99.9 - 85.0) + 85.0).toFixed(1);

      setResult({
        class: randomClass.replace(/___/g, ' - ').replace(/_/g, ' '),
        confidence: parseFloat(randomConfidence)
      });
    }, 2000);
  };

  return (
    <section id="demo" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Interactive Demo</h2>
          <p className="text-muted-foreground">Upload a leaf image to see the model in action.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm flex flex-col h-full overflow-hidden">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg mb-4">Image Input</h3>

                <div
                  className={`flex-1 min-h-[300px] border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-6 text-center transition-colors
                    ${image ? 'border-primary/50 bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-accent/50'}
                  `}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/jpeg, image/png, image/webp"
                    onChange={handleImageUpload}
                  />

                  {image ? (
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <img
                        src={image}
                        alt="Uploaded leaf"
                        className="max-h-[250px] object-contain rounded-md shadow-sm mb-4"
                      />
                      <p className="text-sm text-muted-foreground">Click to upload a different image</p>
                    </div>
                  ) : (
                    <>
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Upload className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-medium mb-1">Click to upload</h4>
                      <p className="text-sm text-muted-foreground mb-4">SVG, PNG, JPG or WEBP (max. 5MB)</p>
                    </>
                  )}
                </div>
              </div>
              <div className="p-6 pt-0 bg-muted/20 border-t border-border mt-auto">
                <button
                  onClick={handleAnalyze}
                  disabled={!image || isAnalyzing}
                  className="w-full h-12 inline-flex items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    'Analyze Image'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm h-full flex flex-col">
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  Prediction Results
                </h3>

                {!image && !result && !isAnalyzing && (
                  <div className="h-[300px] flex flex-col items-center justify-center text-muted-foreground">
                    <ImageIcon className="h-12 w-12 mb-4 opacity-20" />
                    <p>Upload an image to see results</p>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="h-[300px] flex flex-col items-center justify-center text-primary space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin h-16 w-16"></div>
                      <div className="h-16 w-16 rounded-full border-2 border-primary/20"></div>
                    </div>
                    <p className="font-medium animate-pulse">Processing image tensors...</p>
                  </div>
                )}

                {result && !isAnalyzing && (
                  <div className="space-y-6">
                    <div className={`p-4 rounded-lg border flex items-start gap-4 ${result.class.includes('healthy') ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
                      {result.class.includes('healthy') ? (
                        <CheckCircle2 className="h-6 w-6 text-green-600 mt-1" />
                      ) : (
                        <AlertCircle className="h-6 w-6 text-red-600 mt-1" />
                      )}
                      <div>
                        <h4 className="font-semibold text-lg">{result.class}</h4>
                        <p className="text-sm text-muted-foreground">Primary Detection</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2 text-sm font-medium">
                        <span>Confidence Score</span>
                        <span className="text-primary">{result.confidence}%</span>
                      </div>
                      <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-1000 ease-out"
                          style={{ width: `${result.confidence}%` }}
                        />
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-medium mb-2 text-sm">Model Information</h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li className="flex justify-between">
                          <span>Architecture</span>
                          <span className="font-mono text-foreground">CNN + RF Ensemble</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Input Shape</span>
                          <span className="font-mono text-foreground">128x128 RGB</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Processing Time</span>
                          <span className="font-mono text-foreground">~450ms</span>
                        </li>
                      </ul>
                    </div>
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
