import { Terminal, Copy, CheckCircle } from "lucide-react"
import { useState } from "react"

export function Docs() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <section className="container max-w-screen-md mx-auto px-4 py-16">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Documentation</h2>
          <p className="text-muted-foreground">Learn how to install and run the model locally on your machine.</p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h3>Prerequisites</h3>
          <p>Ensure you have Python 3.10+ installed on your system before proceeding.</p>

          <h3>1. Clone Repository</h3>
          <p>Clone the project to your local machine.</p>
          <div className="relative group rounded-lg bg-muted/50 border overflow-hidden mt-2 mb-6">
            <div className="flex items-center justify-between px-4 py-2 bg-muted border-b">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">bash</span>
              </div>
              <button
                onClick={() => copyToClipboard("git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git\ncd Plant-Disease-Detection", "clone")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Copy code"
              >
                {copiedId === "clone" ? <CheckCircle className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="p-4 overflow-x-auto text-sm font-mono text-foreground whitespace-pre">
              <code>git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git{"\n"}cd Plant-Disease-Detection</code>
            </div>
          </div>

          <h3>2. Install Dependencies</h3>
          <p>It is recommended to use a virtual environment. Install the required packages using pip.</p>
          <div className="relative group rounded-lg bg-muted/50 border overflow-hidden mt-2 mb-6">
            <div className="flex items-center justify-between px-4 py-2 bg-muted border-b">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">bash</span>
              </div>
              <button
                onClick={() => copyToClipboard("pip install -r requirements.txt", "install")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Copy code"
              >
                {copiedId === "install" ? <CheckCircle className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="p-4 overflow-x-auto text-sm font-mono text-foreground">
              <code>pip install -r requirements.txt</code>
            </div>
          </div>

          <h3>3. Run the Application</h3>
          <p>Launch the Streamlit dashboard to interact with the backend model.</p>
          <div className="relative group rounded-lg bg-muted/50 border overflow-hidden mt-2 mb-6">
            <div className="flex items-center justify-between px-4 py-2 bg-muted border-b">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">bash</span>
              </div>
              <button
                onClick={() => copyToClipboard("streamlit run main.py", "run")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Copy code"
              >
                {copiedId === "run" ? <CheckCircle className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="p-4 overflow-x-auto text-sm font-mono text-foreground">
              <code>streamlit run main.py</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}