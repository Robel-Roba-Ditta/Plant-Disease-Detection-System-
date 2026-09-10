import { Terminal, Code2 } from 'lucide-react';

export function Docs() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="docs">
      <h2 className="text-3xl font-bold mb-8 text-center">Getting Started</h2>
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-green-500" />
              Local Installation
            </h3>
            <div className="bg-slate-900 text-slate-50 p-4 rounded-lg font-mono text-sm space-y-2 overflow-x-auto">
              <p><span className="text-green-400"># Clone Repository</span></p>
              <p>git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git</p>
              <p className="mt-4"><span className="text-green-400"># Navigate to Project</span></p>
              <p>cd Plant-Disease-Detection</p>
              <p className="mt-4"><span className="text-green-400"># Install Dependencies</span></p>
              <p>pip install -r requirements.txt</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-500" />
              Run Application
            </h3>
            <div className="bg-slate-900 text-slate-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <p><span className="text-green-400"># Start Streamlit App</span></p>
              <p>streamlit run main.py</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}