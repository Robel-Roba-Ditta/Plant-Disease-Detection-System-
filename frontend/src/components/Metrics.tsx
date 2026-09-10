import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const historyData = [
  { epoch: 1, loss: 0.9137, accuracy: 0.6856, val_loss: 0.3375, val_accuracy: 0.8857 },
  { epoch: 2, loss: 0.3106, accuracy: 0.8920, val_loss: 0.2660, val_accuracy: 0.9123 },
  { epoch: 3, loss: 0.1773, accuracy: 0.9405, val_loss: 0.1451, val_accuracy: 0.9533 }
];

export function Metrics() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto bg-slate-100 dark:bg-slate-800/50 rounded-3xl" id="metrics">
      <h2 className="text-3xl font-bold mb-12 text-center">Model Performance</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">CNN Accuracy</h3>
          <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">97.8%</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">Random Forest Accuracy</h3>
          <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">95.4%</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-2 border-green-500/20">
          <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">Ensemble Strategy</h3>
          <p className="text-4xl font-bold text-green-600 dark:text-green-400">98.3%</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm h-80">
          <h3 className="font-semibold mb-6 text-center">Accuracy Curve</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={historyData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="epoch" />
              <YAxis domain={[0.6, 1]} />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }} />
              <Legend />
              <Line type="monotone" dataKey="accuracy" name="Train Accuracy" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="val_accuracy" name="Val Accuracy" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm h-80">
          <h3 className="font-semibold mb-6 text-center">Loss Curve</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={historyData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="epoch" />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }} />
              <Legend />
              <Line type="monotone" dataKey="loss" name="Train Loss" stroke="#ef4444" strokeWidth={2} />
              <Line type="monotone" dataKey="val_loss" name="Val Loss" stroke="#f59e0b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}