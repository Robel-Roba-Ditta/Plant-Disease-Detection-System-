import { Terminal, Code2, Server, Package } from 'lucide-react';

export function Documentation() {
  return (
    <section id="docs" className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Quick Start Guide</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Get the Plant Disease Detection system running locally on your machine in a few simple steps.
          </p>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full shrink-0">
              <Code2 className="h-6 w-6 text-slate-700 dark:text-slate-300" />
            </div>
            <div className="flex-1 w-full">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">1. Clone the repository</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Download the source code to your local machine.</p>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto relative">
                <div className="flex gap-2 mb-2 items-center text-slate-500">
                  <Terminal className="h-4 w-4" /> bash
                </div>
                <code>git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git</code><br/>
                <code>cd Plant-Disease-Detection</code>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full shrink-0">
              <Package className="h-6 w-6 text-slate-700 dark:text-slate-300" />
            </div>
            <div className="flex-1 w-full">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">2. Install dependencies</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Install all required Python packages including TensorFlow, Streamlit, and Scikit-Learn.</p>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto relative">
                <div className="flex gap-2 mb-2 items-center text-slate-500">
                  <Terminal className="h-4 w-4" /> bash
                </div>
                <code>pip install -r requirements.txt</code>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full shrink-0">
              <Server className="h-6 w-6 text-slate-700 dark:text-slate-300" />
            </div>
            <div className="flex-1 w-full">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">3. Run the application</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Start the local Streamlit server to view the interactive dashboard.</p>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto relative">
                <div className="flex gap-2 mb-2 items-center text-slate-500">
                  <Terminal className="h-4 w-4" /> bash
                </div>
                <code>streamlit run app.py</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
