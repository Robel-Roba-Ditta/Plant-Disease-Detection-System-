import { Terminal, Code, BookOpen } from 'lucide-react';

export function Docs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Documentation & Guide
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Run the plant disease detection model locally on your own machine.
          </p>
        </div>

        <div className="card p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
            <BookOpen className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Local Setup</h3>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">1</div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Clone the Repository</h4>
                <div className="bg-gray-50 dark:bg-dark-900 p-4 rounded-lg font-mono text-sm border border-gray-200 dark:border-gray-700 flex items-center justify-between group">
                  <span className="text-gray-800 dark:text-gray-300">git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git</span>
                  <Terminal className="h-4 w-4 text-gray-400 group-hover:text-primary-500 transition-colors" />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">2</div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Navigate to Directory</h4>
                <div className="bg-gray-50 dark:bg-dark-900 p-4 rounded-lg font-mono text-sm border border-gray-200 dark:border-gray-700 flex items-center justify-between group">
                  <span className="text-gray-800 dark:text-gray-300">cd Plant-Disease-Detection</span>
                  <Terminal className="h-4 w-4 text-gray-400 group-hover:text-primary-500 transition-colors" />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">3</div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Install Dependencies</h4>
                <div className="bg-gray-50 dark:bg-dark-900 p-4 rounded-lg font-mono text-sm border border-gray-200 dark:border-gray-700 flex items-center justify-between group">
                  <span className="text-gray-800 dark:text-gray-300">pip install -r requirements.txt</span>
                  <Terminal className="h-4 w-4 text-gray-400 group-hover:text-primary-500 transition-colors" />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">4</div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Run the Application</h4>
                <div className="bg-gray-50 dark:bg-dark-900 p-4 rounded-lg font-mono text-sm border border-gray-200 dark:border-gray-700 flex items-center justify-between group">
                  <span className="text-gray-800 dark:text-gray-300">streamlit run app.py</span>
                  <Terminal className="h-4 w-4 text-gray-400 group-hover:text-primary-500 transition-colors" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <a
              href="https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 font-medium transition-colors"
            >
              <Code className="mr-2 h-5 w-5" />
              View full documentation on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
