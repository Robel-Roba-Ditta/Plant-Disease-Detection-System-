import { Terminal, Copy } from 'lucide-react';
import { useState } from 'react';

const Documentation = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const steps = [
    {
      id: 'clone',
      title: 'Clone Repository',
      code: 'git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git'
    },
    {
      id: 'cd',
      title: 'Navigate to Project',
      code: 'cd Plant-Disease-Detection'
    },
    {
      id: 'install',
      title: 'Install Dependencies',
      code: 'pip install -r requirement.txt'
    },
    {
      id: 'run',
      title: 'Run Application',
      code: 'streamlit run main.py'
    }
  ];

  return (
    <section id="docs" className="py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Local Installation</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Follow these steps to run the Streamlit model server locally on your machine.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              <div className="absolute -inset-y-2 -inset-x-4 z-0 scale-95 bg-gray-50 dark:bg-gray-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-500 font-semibold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>

                <div className="relative group/code flex-1 sm:max-w-md">
                  <div className="flex items-center justify-between rounded-lg bg-gray-900 px-4 py-3 text-sm text-gray-300">
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                      <Terminal className="h-4 w-4 text-gray-500 shrink-0" />
                      <code className="whitespace-nowrap font-mono">{step.code}</code>
                    </div>
                    <button
                      onClick={() => handleCopy(step.code, step.id)}
                      className="ml-4 shrink-0 rounded p-1 hover:bg-gray-800 transition-colors"
                      aria-label="Copy code"
                    >
                      {copied === step.id ? (
                        <span className="text-xs text-green-500">Copied!</span>
                      ) : (
                        <Copy className="h-4 w-4 text-gray-500 hover:text-gray-300" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documentation;
