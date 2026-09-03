import { Terminal, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function Docs() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: '1. Clone Repository',
      code: 'git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git',
    },
    {
      title: '2. Navigate to Project',
      code: 'cd Plant-Disease-Detection',
    },
    {
      title: '3. Install Dependencies',
      code: 'pip install -r requirements.txt',
    },
    {
      title: '4. Run Application',
      code: 'streamlit run app.py',
    }
  ];

  return (
    <section id="docs" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Local Installation</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Get the actual full application and model running on your local machine.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
            <Terminal size={18} className="text-gray-500 dark:text-gray-400" />
            <span className="font-mono text-sm text-gray-600 dark:text-gray-300">Terminal</span>
          </div>
          <div className="p-6 md:p-8 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{step.title}</h3>
                <div className="relative group">
                  <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono border border-gray-800">
                    <code>{step.code}</code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard(step.code, index)}
                    className="absolute top-3 right-3 p-1.5 rounded-md bg-gray-700 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-600 focus:opacity-100"
                    aria-label="Copy to clipboard"
                  >
                    {copiedIndex === index ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
