import { useState } from 'react';
import { Upload, ImageIcon, Loader2, AlertCircle, Leaf } from 'lucide-react';

export default function Playground() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{ disease: string; confidence: number; isHealthy: boolean } | null>(null);

  const handleMockUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsProcessing(true);
      setResult(null);

      // Mock network/processing delay
      setTimeout(() => {
        // Randomly assign a mock result
        const mockResults = [
          { disease: 'Apple_scab', confidence: 98.7, isHealthy: false },
          { disease: 'Corn_(maize)__healthy', confidence: 99.2, isHealthy: true },
          { disease: 'Tomato__Tomato_Yellow_Leaf_Curl_Virus', confidence: 95.4, isHealthy: false },
        ];

        const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
        setResult(randomResult);
        setIsProcessing(false);
      }, 1500);
    }
  };

  return (
    <div id="playground" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Interactive Playground
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Test the model right in your browser. Upload a leaf image to get an instant disease prediction.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-8">

              {!result && !isProcessing && (
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-slate-900/25 dark:border-white/25 px-6 py-20 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="text-center">
                    <ImageIcon className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-600" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-semibold text-green-600 dark:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2 hover:text-green-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleMockUpload} />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-slate-600 dark:text-slate-400">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              )}

              {isProcessing && (
                <div className="flex flex-col items-center justify-center py-20 text-slate-500 dark:text-slate-400">
                  <Loader2 className="h-10 w-10 animate-spin text-green-600 dark:text-green-500 mb-4" />
                  <p className="text-lg font-medium">Analyzing leaf features...</p>
                  <p className="text-sm mt-2 opacity-75">Running hybrid CNN + RF inference</p>
                </div>
              )}

              {result && !isProcessing && (
                <div className="space-y-6">
                  <div className={`p-6 rounded-xl border ${result.isHealthy ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'}`}>
                    <div className="flex items-start gap-4">
                      {result.isHealthy ? (
                         <div className="h-10 w-10 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center flex-shrink-0">
                           <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                         </div>
                      ) : (
                         <div className="h-10 w-10 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center flex-shrink-0">
                           <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                         </div>
                      )}

                      <div>
                        <h3 className={`text-lg font-semibold ${result.isHealthy ? 'text-green-900 dark:text-green-300' : 'text-red-900 dark:text-red-300'}`}>
                          {result.disease.replace(/_/g, ' ')}
                        </h3>
                        <p className={`mt-1 text-sm ${result.isHealthy ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                          Confidence Score: {result.confidence.toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => setResult(null)}
                      className="inline-flex items-center gap-2 rounded-md bg-white dark:bg-slate-800 px-3.5 py-2.5 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700"
                    >
                      <Upload className="h-4 w-4" />
                      Upload Another Image
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-4 border-t border-slate-200 dark:border-slate-700">
               <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                 Note: This is a frontend demonstration. In the full application, this sends requests to the locally hosted Streamlit backend.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
