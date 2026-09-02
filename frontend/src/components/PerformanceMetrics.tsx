import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import trainingData from '../training_hist.json';

export default function PerformanceMetrics() {
  // Transform JSON into Recharts format
  const chartData = trainingData.loss.map((_, index) => ({
    epoch: index + 1,
    loss: trainingData.loss[index],
    val_loss: trainingData.val_loss[index],
    accuracy: trainingData.accuracy[index] * 100, // Convert to percentage
    val_accuracy: trainingData.val_accuracy[index] * 100,
  }));

  return (
    <div className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Model Performance
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Training history and evaluation metrics of our hybrid deep learning model.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Accuracy Chart */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Training vs Validation Accuracy</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="epoch" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={['auto', 100]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }}
                    itemStyle={{ color: '#f8fafc' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                  <Line type="monotone" name="Training Acc" dataKey="accuracy" stroke="#16a34a" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
                  <Line type="monotone" name="Validation Acc" dataKey="val_accuracy" stroke="#3b82f6" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Loss Chart */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Training vs Validation Loss</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="epoch" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }}
                    itemStyle={{ color: '#f8fafc' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                  <Line type="monotone" name="Training Loss" dataKey="loss" stroke="#ef4444" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
                  <Line type="monotone" name="Validation Loss" dataKey="val_loss" stroke="#f59e0b" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
           <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">CNN Accuracy</p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">97.8%</p>
           </div>
           <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Random Forest</p>
              <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">95.4%</p>
           </div>
           <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800/50 text-center">
              <p className="text-sm font-medium text-green-700 dark:text-green-400">Ensemble Strategy</p>
              <p className="mt-2 text-3xl font-bold text-green-700 dark:text-green-400">98.3%</p>
           </div>
        </div>
      </div>
    </div>
  );
}
