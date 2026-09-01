import { Terminal, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Documentation() {
  const [copied, setCopied] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "Clone Repository",
      command: "git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git"
    },
    {
      id: 2,
      title: "Navigate to Project",
      command: "cd Plant-Disease-Detection"
    },
    {
      id: 3,
      title: "Install Dependencies",
      command: "pip install -r requirement.txt"
    },
    {
      id: 4,
      title: "Run Application",
      command: "streamlit run main.py"
    }
  ];

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Quick Start Guide</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get the Plant Disease Detection system running on your local machine in just a few minutes. Follow these simple steps.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              {step.id !== steps.length && (
                <div className="absolute left-6 top-14 bottom-0 w-0.5 -mb-8 bg-gray-200 dark:bg-gray-800"></div>
              )}

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center border-2 border-green-500 z-10">
                  <span className="font-bold text-green-700 dark:text-green-400">{step.id}</span>
                </div>

                <div className="flex-grow pt-1">
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>

                  <div className="bg-gray-900 rounded-xl p-4 flex items-center justify-between group">
                    <div className="flex items-center gap-3 overflow-x-auto text-sm text-gray-300 font-mono">
                      <Terminal className="h-4 w-4 text-gray-500 flex-shrink-0" />
                      <span className="whitespace-nowrap">{step.command}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(step.id, step.command)}
                      className="ml-4 p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white transition-colors"
                      aria-label="Copy command"
                    >
                      {copied === step.id ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
          <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Requirements</h4>
          <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-400 space-y-1">
            <li>Python 3.10 or higher</li>
            <li>TensorFlow & Keras</li>
            <li>Streamlit (for the Python web app)</li>
            <li>Scikit-Learn & OpenCV</li>
          </ul>
        </div>
      </div>
    </div>
  );
}