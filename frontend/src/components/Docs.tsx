import { Terminal, Code2, Cpu, LayoutDashboard } from 'lucide-react';

export default function Docs() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Installation & Guide</h2>
          <p className="text-muted-foreground">Get the model running on your local machine</p>
        </div>

        <div className="space-y-8">
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
            <div className="border-b border-border bg-muted/50 px-6 py-4 flex items-center gap-2">
              <Terminal className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-semibold">Local Setup</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-medium">1. Clone the repository</p>
                <div className="bg-muted rounded-md p-4 flex justify-between items-center group">
                  <code className="text-sm text-foreground">git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git</code>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium">2. Navigate to project</p>
                <div className="bg-muted rounded-md p-4">
                  <code className="text-sm text-foreground">cd Plant-Disease-Detection</code>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium">3. Install dependencies</p>
                <div className="bg-muted rounded-md p-4">
                  <code className="text-sm text-foreground">pip install -r requirements.txt</code>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium">4. Run the Streamlit Application</p>
                <div className="bg-muted rounded-md p-4">
                  <code className="text-sm text-foreground">streamlit run main.py</code>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border p-6 rounded-xl shadow-sm text-center">
              <Cpu className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Model Architecture</h4>
              <p className="text-sm text-muted-foreground">Hybrid approach using CNN for feature extraction and Random Forest for classification.</p>
            </div>

            <div className="bg-card border border-border p-6 rounded-xl shadow-sm text-center">
              <LayoutDashboard className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Streamlit Dashboard</h4>
              <p className="text-sm text-muted-foreground">Includes a fully functional python dashboard for easy drag-and-drop predictions.</p>
            </div>

            <div className="bg-card border border-border p-6 rounded-xl shadow-sm text-center">
              <Code2 className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Open Source</h4>
              <p className="text-sm text-muted-foreground">Contribute to the project or use it for your own research and educational purposes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
