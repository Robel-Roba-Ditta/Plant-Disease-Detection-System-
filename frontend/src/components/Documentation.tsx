import { Terminal, CheckCircle2 } from 'lucide-react';

export function Documentation() {
  const steps = [
    {
      title: 'Clone Repository',
      code: 'git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git',
    },
    {
      title: 'Navigate to Project',
      code: 'cd Plant-Disease-Detection',
    },
    {
      title: 'Install Dependencies',
      code: 'pip install -r requirements.txt',
    },
    {
      title: 'Run Application',
      code: 'streamlit run app.py',
    },
  ];

  const features = [
    '38 Supported Plant/Disease Classes',
    'Deep Learning based CNN model (97.8% Accuracy)',
    'Real-time image processing',
    'Exportable prediction reports',
  ];

  return (
    <section id="docs" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How it Works & Setup</h2>
        <p className="text-[var(--foreground)]/70 max-w-2xl mx-auto">
          Learn how to run the model locally and understand its core features.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-card border border-[var(--border)] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold">Local Installation</h3>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i}>
                <h4 className="text-sm font-medium mb-2">{i + 1}. {step.title}</h4>
                <div className="bg-[#1e1e1e] text-[#d4d4d4] p-3 rounded-md text-sm font-mono overflow-x-auto">
                  <code>{step.code}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-card border border-[var(--border)] rounded-xl p-6 h-full">
            <h3 className="text-xl font-semibold mb-6">System Features</h3>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-[var(--border)]">
              <h3 className="text-xl font-semibold mb-4">Architecture</h3>
              <p className="text-[var(--foreground)]/70 text-sm leading-relaxed mb-4">
                Our hybrid approach leverages Convolutional Neural Networks (CNNs) for deep feature extraction from leaf images, coupled with a Random Forest classifier for robust decision making, achieving a combined ensemble accuracy of 98.3%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
