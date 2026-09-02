import { Terminal, Code, Cpu } from 'lucide-react';

export default function Documentation() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl text-center mb-12">
            Local Setup Guide
          </h2>

          <div className="space-y-12">

            <section>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-green-500" />
                1. Clone Repository
              </h3>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git
                <br />
                cd Plant-Disease-Detection
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Cpu className="h-5 w-5 text-green-500" />
                2. Install Dependencies
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                Ensure you have Python 3.10+ installed. Install the required packages:
              </p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                pip install -r requirement.txt
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <Terminal className="h-5 w-5 text-green-500" />
                3. Run the Backend Application
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                Start the interactive Streamlit server to serve the model:
              </p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                streamlit run main.py
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
