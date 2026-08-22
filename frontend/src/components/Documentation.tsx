import { Terminal, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Documentation() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: "Clone the Repository",
      description: "Get a local copy of the complete machine learning codebase and frontend.",
      command: "git clone https://github.com/Robel-Roba-Ditta/Plant-Disease-Detection.git\ncd Plant-Disease-Detection"
    },
    {
      title: "Install Dependencies",
      description: "Install the required Python packages including TensorFlow and Streamlit.",
      command: "pip install -r requirement.txt"
    },
    {
      title: "Run the Streamlit Application",
      description: "Launch the full backend application to use the real TensorFlow model.",
      command: "streamlit run main.py"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Local Deployment Guide</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Want to run the actual machine learning model? Follow these steps to set up the Streamlit application on your local machine.
        </p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 dark:before:via-neutral-800 before:to-transparent">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-neutral-950 bg-brand-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
              <span className="font-bold text-sm">{index + 1}</span>
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-neutral-900 p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {step.description}
              </p>

              <div className="relative bg-neutral-900 text-neutral-300 rounded-lg p-4 font-mono text-sm overflow-hidden group/code">
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover/code:opacity-100 transition-opacity">
                  <button
                    onClick={() => copyToClipboard(step.command, index)}
                    className="p-1.5 bg-neutral-800 hover:bg-neutral-700 rounded-md text-neutral-400 hover:text-white transition-colors"
                    title="Copy command"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <div className="flex gap-3">
                  <Terminal className="w-5 h-5 shrink-0 text-brand-500" />
                  <pre className="overflow-x-auto whitespace-pre-wrap">
                    <code>{step.command}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
