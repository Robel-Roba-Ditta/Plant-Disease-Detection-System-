import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Activity, TrendingUp } from 'lucide-react';

// Data derived from training_hist.json in the repository
const trainingData = [
  { epoch: 1, accuracy: 68.56, val_accuracy: 88.57, loss: 0.914, val_loss: 0.337 },
  { epoch: 2, accuracy: 89.20, val_accuracy: 91.23, loss: 0.311, val_loss: 0.266 },
  { epoch: 3, accuracy: 94.05, val_accuracy: 95.33, loss: 0.177, val_loss: 0.145 },
];

export default function Metrics() {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50 border-y">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 mb-4">
            <Activity className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Model Performance Metrics</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Our hybrid CNN architecture demonstrated rapid convergence and high generalization capabilities over the training lifecycle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Accuracy Chart */}
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-lg">Model Accuracy</h3>
                <p className="text-sm text-neutral-500">Training vs Validation (Epoch 1-3)</p>
              </div>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>95.3% Peak</span>
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trainingData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
                  <XAxis dataKey="epoch" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                  <Tooltip
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontSize: '14px', fontWeight: 500 }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '14px', paddingTop: '10px' }} />
                  <Line type="monotone" dataKey="accuracy" name="Training Accuracy" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="val_accuracy" name="Validation Accuracy" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Loss Chart */}
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-lg">Model Loss</h3>
                <p className="text-sm text-neutral-500">Training vs Validation (Epoch 1-3)</p>
              </div>
              <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 px-3 py-1 rounded-full text-sm font-medium">
                <Activity className="w-4 h-4" />
                <span>0.145 Min</span>
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trainingData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
                  <XAxis dataKey="epoch" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontSize: '14px', fontWeight: 500 }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '14px', paddingTop: '10px' }} />
                  <Line type="monotone" dataKey="loss" name="Training Loss" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="val_loss" name="Validation Loss" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
