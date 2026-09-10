import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Loader2 } from 'lucide-react';

export function Demo() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [result, setResult] = useState<{disease: string, confidence: number} | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (selectedFile: File) => {
    setFile(selectedFile);
    setResult(null);
    simulatePrediction();
  };

  const simulatePrediction = () => {
    setIsPredicting(true);
    setTimeout(() => {
      setResult({ disease: 'Apple___Apple_scab', confidence: 97.8 });
      setIsPredicting(false);
    }, 2000);
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="demo">
      <h2 className="text-3xl font-bold mb-8 text-center">Interactive Demo</h2>

      <div
        className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors ${
          isDragging ? 'border-green-500 bg-green-50 dark:bg-green-900/10' : 'border-slate-300 dark:border-slate-700'
        }`}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        {file ? (
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4">
              <ImageIcon className="w-12 h-12 text-slate-400" />
            </div>
            <p className="font-medium text-slate-700 dark:text-slate-300 mb-6">{file.name}</p>

            {isPredicting ? (
              <div className="flex items-center gap-2 text-green-600">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Analyzing image with CNN + Random Forest...</span>
              </div>
            ) : result ? (
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg w-full max-w-md">
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">Prediction Result</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-600 dark:text-slate-400">Disease:</span>
                  <span className="font-bold">{result.disease.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">Confidence:</span>
                  <span className="font-bold text-green-600">{result.confidence}%</span>
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-8 h-8 text-slate-500" />
            </div>
            <p className="text-lg font-medium mb-2">Drag and drop an image of a leaf here</p>
            <p className="text-slate-500 dark:text-slate-400 mb-6">Supports JPG, JPEG, PNG, WEBP</p>
            <label className="cursor-pointer bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
              Browse Files
              <input type="file" className="hidden" accept="image/*" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
            </label>
          </div>
        )}
      </div>
    </section>
  );
}