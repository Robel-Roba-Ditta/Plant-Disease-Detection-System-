import { Terminal, CheckCircle2 } from 'lucide-react';

export function Docs() {
  return (
    <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Installation Guide</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Run the machine learning model and Streamlit application locally.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">

          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-semibold">Clone the Repository</h3>
              </div>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 flex items-start gap-4">
                <Terminal className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <code className="break-all">
                  git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git<br/>
                  cd Plant-Disease-Detection
                </code>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-semibold">Install Dependencies</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-3 ml-11">
                It's recommended to use a virtual environment (Python 3.10+). Note that for modern Python environments, some TensorFlow dependencies might require specific configurations.
              </p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 flex items-center gap-4">
                <Terminal className="w-5 h-5 text-slate-500 shrink-0" />
                <code>pip install -r requirement.txt</code>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-semibold">Run the Application</h3>
              </div>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 flex items-center gap-4">
                <Terminal className="w-5 h-5 text-slate-500 shrink-0" />
                <code>streamlit run main.py</code>
              </div>
            </div>
          </div>

          <hr className="my-8 border-slate-100 dark:border-slate-800" />

          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" /> Features Included
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-7">
              {['Real-time image upload', 'CNN + Random Forest Models', 'Prediction history tracking', 'Top-3 disease predictions'].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}