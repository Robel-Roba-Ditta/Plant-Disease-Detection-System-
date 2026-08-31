import { BookOpen, Terminal, Check } from "lucide-react";

export function Guide() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
            <BookOpen className="text-indigo-500" />
            Installation Guide
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Follow these steps to run the Streamlit Python application locally.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="p-8 space-y-8">

            {/* Step 1 */}
            <div className="relative pl-10 border-l-2 border-indigo-100 dark:border-indigo-900/50">
              <div className="absolute -left-[11px] top-0 bg-indigo-500 text-white rounded-full p-1 ring-4 ring-white dark:ring-gray-800">
                <Check className="h-3 w-3" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">1. Clone the repository</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">Get a local copy of the project code.</p>
              <div className="bg-gray-900 rounded-lg p-4 flex items-center gap-3 font-mono text-sm text-green-400 overflow-x-auto">
                <Terminal className="h-4 w-4 text-gray-500 shrink-0" />
                <span>git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-10 border-l-2 border-indigo-100 dark:border-indigo-900/50">
              <div className="absolute -left-[11px] top-0 bg-indigo-500 text-white rounded-full p-1 ring-4 ring-white dark:ring-gray-800">
                <Check className="h-3 w-3" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">2. Navigate to directory</h3>
              <div className="bg-gray-900 rounded-lg p-4 flex items-center gap-3 font-mono text-sm text-green-400 overflow-x-auto">
                <Terminal className="h-4 w-4 text-gray-500 shrink-0" />
                <span>cd Plant-Disease-Detection</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-10 border-l-2 border-indigo-100 dark:border-indigo-900/50">
              <div className="absolute -left-[11px] top-0 bg-indigo-500 text-white rounded-full p-1 ring-4 ring-white dark:ring-gray-800">
                <Check className="h-3 w-3" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">3. Install dependencies</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">Install Python requirements. We recommend using a virtual environment.</p>
              <div className="bg-gray-900 rounded-lg p-4 flex flex-col gap-2 font-mono text-sm text-green-400 overflow-x-auto">
                <div className="flex items-center gap-3">
                  <Terminal className="h-4 w-4 text-gray-500 shrink-0" />
                  <span>pip install -r requirement.txt</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative pl-10">
              <div className="absolute -left-[11px] top-0 bg-indigo-500 text-white rounded-full p-1 ring-4 ring-white dark:ring-gray-800">
                <Check className="h-3 w-3" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">4. Run the application</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">Start the Streamlit development server.</p>
              <div className="bg-gray-900 rounded-lg p-4 flex flex-col gap-2 font-mono text-sm text-green-400 overflow-x-auto">
                <div className="flex items-center gap-3">
                  <Terminal className="h-4 w-4 text-gray-500 shrink-0" />
                  <span>streamlit run main.py</span>
                </div>
                <div className="text-gray-400 pl-7 text-xs mt-2 border-t border-gray-800 pt-2">
                  # Application will be available at http://localhost:8501
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
