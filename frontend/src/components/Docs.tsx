import { Terminal, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Docs() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const renderCodeBlock = (code: string, id: string) => (
    <div className="relative group bg-muted/30 rounded-lg border border-border mt-2 mb-6">
      <div className="absolute right-2 top-2">
        <button
          onClick={() => copyToClipboard(code, id)}
          className="p-2 rounded-md hover:bg-muted text-muted-foreground transition-colors"
          aria-label="Copy code"
        >
          {copied === id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="flex items-center px-4 py-2 border-b border-border bg-muted/50 rounded-t-lg">
        <Terminal className="w-4 h-4 mr-2 text-muted-foreground" />
        <span className="text-xs font-mono text-muted-foreground">Terminal</span>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  );

  return (
    <section id="docs" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Installation & Usage</h2>
          <p className="text-muted-foreground text-lg">
            Follow these steps to run the Streamlit backend model locally on your machine.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-card border border-border p-6 md:p-8 rounded-xl shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold mr-4 mt-1">1</div>
              <div className="flex-1 w-full">
                <h3 className="text-xl font-semibold mb-2">Clone the Repository</h3>
                <p className="text-muted-foreground text-sm mb-4">First, download the source code from GitHub.</p>
                {renderCodeBlock(
                  "git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git\ncd Plant-Disease-Detection",
                  "clone"
                )}
              </div>
            </div>

            <div className="flex items-start mt-8">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold mr-4 mt-1">2</div>
              <div className="flex-1 w-full">
                <h3 className="text-xl font-semibold mb-2">Install Dependencies</h3>
                <p className="text-muted-foreground text-sm mb-4">Install the required Python packages (TensorFlow, Streamlit, etc.).</p>
                {renderCodeBlock(
                  "pip install -r requirements.txt",
                  "install"
                )}
              </div>
            </div>

            <div className="flex items-start mt-8">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold mr-4 mt-1">3</div>
              <div className="flex-1 w-full">
                <h3 className="text-xl font-semibold mb-2">Run the Application</h3>
                <p className="text-muted-foreground text-sm mb-4">Start the Streamlit web server.</p>
                {renderCodeBlock(
                  "streamlit run main.py",
                  "run"
                )}
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <span className="w-2 h-6 bg-primary rounded-full mr-3"></span>
              System Requirements
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground list-disc list-inside">
              <li>Python 3.10 or higher</li>
              <li>TensorFlow & Keras</li>
              <li>OpenCV</li>
              <li>Scikit-Learn</li>
              <li>4GB RAM (8GB recommended)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
