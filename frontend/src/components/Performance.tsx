import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Target, Activity, Zap } from 'lucide-react';
import trainingData from '../training_hist.json';

const transformedData = trainingData.loss.map((_: number, index: number) => ({
  epoch: `Epoch ${index + 1}`,
  accuracy: (trainingData.accuracy[index] * 100).toFixed(2),
  val_accuracy: (trainingData.val_accuracy[index] * 100).toFixed(2),
  loss: trainingData.loss[index].toFixed(4),
  val_loss: trainingData.val_loss[index].toFixed(4),
}));

export function Performance() {
  return (
    <section id="performance" className="py-24 px-4 bg-white dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Model Performance</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our hybrid approach leverages the strengths of both Deep Learning (feature extraction)
            and Machine Learning (classification) to achieve state-of-the-art results on 38 disease classes.
          </p>
        </div>

        {/* Benchmark Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">CNN Model</h3>
                <p className="text-sm text-slate-500">Standalone Accuracy</p>
              </div>
            </div>
            <div className="text-4xl font-bold text-slate-900 dark:text-white">97.8%</div>
            <div className="mt-4 flex justify-between text-sm text-slate-500 border-t border-slate-200 dark:border-slate-800 pt-4">
              <span>Precision: 0.97</span>
              <span>Recall: 0.978</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Random Forest</h3>
                <p className="text-sm text-slate-500">On CNN Features</p>
              </div>
            </div>
            <div className="text-4xl font-bold text-slate-900 dark:text-white">95.4%</div>
            <div className="mt-4 flex justify-between text-sm text-slate-500 border-t border-slate-200 dark:border-slate-800 pt-4">
              <span>100 Decision Trees</span>
              <span>StandardScaler</span>
            </div>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Zap className="h-24 w-24 text-emerald-600" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-xl">
                <Zap className="h-6 w-6 fill-current" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Ensemble Strategy</h3>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Hybrid Prediction</p>
              </div>
            </div>
            <div className="text-4xl font-bold text-slate-900 dark:text-white relative z-10">98.3%</div>
            <div className="mt-4 text-sm text-slate-600 dark:text-slate-400 border-t border-emerald-200/50 dark:border-emerald-800/50 pt-4 relative z-10">
              Improves reliability for difficult boundary classification cases.
            </div>
          </div>
        </div>

        {/* Training Curves */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-semibold text-lg mb-6 text-slate-900 dark:text-white text-center">Model Accuracy (Training vs Validation)</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={transformedData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                  <XAxis dataKey="epoch" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} domain={['auto', 'auto']} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }}
                    itemStyle={{ color: '#f8fafc' }}
                  />
                  <Legend iconType="circle" />
                  <Line type="monotone" name="Train Accuracy %" dataKey="accuracy" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" name="Val Accuracy %" dataKey="val_accuracy" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-semibold text-lg mb-6 text-slate-900 dark:text-white text-center">Model Loss (Training vs Validation)</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={transformedData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                  <XAxis dataKey="epoch" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }}
                    itemStyle={{ color: '#f8fafc' }}
                  />
                  <Legend iconType="circle" />
                  <Line type="monotone" name="Train Loss" dataKey="loss" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" name="Val Loss" dataKey="val_loss" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
