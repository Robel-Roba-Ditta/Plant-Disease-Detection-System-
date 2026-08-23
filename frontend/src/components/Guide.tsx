
import { Terminal, Download, Play, ShieldAlert } from 'lucide-react';

export function Guide() {
  return (
    <section id="guide" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Installation Guide</h2>
          <p className="text-muted-foreground">Everything you need to run the model locally.</p>
        </div>

        <div className="space-y-8">
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="border-b border-border bg-muted/50 px-6 py-4 flex items-center gap-2">
              <Download className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">1. Clone & Install</h3>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-muted-foreground mb-4">Clone the repository and install dependencies using Python 3.10+.</p>

              <div className="bg-muted rounded-md p-4 font-mono text-sm overflow-x-auto">
                <div className="flex text-muted-foreground mb-2">
                  <Terminal className="h-4 w-4 mr-2" />
                  <span>bash</span>
                </div>
                <code>
                  <span className="text-primary">git</span> clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git<br/>
                  <span className="text-primary">cd</span> Plant-Disease-Detection<br/>
                  <span className="text-primary">pip</span> install -r requirement.txt
                </code>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-orange-500/10 border border-orange-500/20 text-sm">
                <ShieldAlert className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Note:</strong> The <code className="px-1.5 py-0.5 rounded bg-orange-500/20">requirement.txt</code> file specifies
                  TensorFlow 2.10.0. If you are using Python 3.12+, you may need to use an older Python version (like 3.10) to
                  find compatible pre-built wheels.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="border-b border-border bg-muted/50 px-6 py-4 flex items-center gap-2">
              <Play className="h-5 w-5 text-green-500" />
              <h3 className="font-semibold">2. Run Application</h3>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-muted-foreground mb-4">Start the local Streamlit dashboard to interact with the model.</p>

              <div className="bg-muted rounded-md p-4 font-mono text-sm overflow-x-auto">
                <div className="flex text-muted-foreground mb-2">
                  <Terminal className="h-4 w-4 mr-2" />
                  <span>bash</span>
                </div>
                <code>
                  <span className="text-primary">streamlit</span> run main.py
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
