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
import { Activity, Brain, Target } from 'lucide-react';

// Import raw JSON data
import trainingDataRaw from '../../training_hist.json';

// Process the raw arrays into an array of objects for Recharts
const processedData = trainingDataRaw.accuracy.map((_, index) => ({
  epoch: `Epoch ${index + 1}`,
  accuracy: trainingDataRaw.accuracy[index] * 100,
  val_accuracy: trainingDataRaw.val_accuracy[index] * 100,
  loss: trainingDataRaw.loss[index],
  val_loss: trainingDataRaw.val_loss[index],
}));

export function Metrics() {
  const finalTrainAcc = processedData[processedData.length - 1].accuracy.toFixed(1);
  const finalValAcc = processedData[processedData.length - 1].val_accuracy.toFixed(1);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
            <Activity className="text-blue-500" />
            Model Performance
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Training history and metrics for the CNN + Random Forest hybrid model.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
              <Brain className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Architecture</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">CNN + RF</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Train Accuracy</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{finalTrainAcc}%</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Validation Accuracy</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{finalValAcc}%</p>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">Accuracy over Epochs</h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={processedData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
                  <XAxis dataKey="epoch" stroke="#6b7280" className="text-xs" />
                  <YAxis domain={['auto', 100]} stroke="#6b7280" className="text-xs" unit="%" />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontSize: '14px' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="accuracy" name="Train Accuracy" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="val_accuracy" name="Val Accuracy" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">Loss over Epochs</h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={processedData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
                  <XAxis dataKey="epoch" stroke="#6b7280" className="text-xs" />
                  <YAxis stroke="#6b7280" className="text-xs" />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontSize: '14px' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="loss" name="Train Loss" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="val_loss" name="Val Loss" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
