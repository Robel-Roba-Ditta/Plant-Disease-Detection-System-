import { Cell } from "recharts";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';
import { TrendingUp, Award, Zap } from 'lucide-react';
import trainingData from '../../../training_hist.json';

export function Metrics() {
  // Format data for Recharts
  const chartData = trainingData.loss.map((_, index) => ({
    epoch: `Epoch ${index + 1}`,
    loss: trainingData.loss[index],
    accuracy: trainingData.accuracy[index],
    val_loss: trainingData.val_loss[index],
    val_accuracy: trainingData.val_accuracy[index],
  }));

  const modelComparisons = [
    { name: 'CNN', accuracy: 97.8 },
    { name: 'Random Forest', accuracy: 95.4 },
    { name: 'Hybrid Ensemble', accuracy: 98.3 },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Model Performance & Metrics
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our hybrid approach leverages the strengths of Deep Learning and traditional Machine Learning for maximum accuracy.
          </p>
        </div>

        {/* Top Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card p-6 flex items-center">
            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mr-4">
              <TrendingUp className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Images Trained</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">87,000+</h3>
            </div>
          </div>

          <div className="card p-6 flex items-center">
            <div className="p-4 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4">
              <Award className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Classes Detected</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">38</h3>
            </div>
          </div>

          <div className="card p-6 flex items-center">
            <div className="p-4 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg mr-4">
              <Zap className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Peak Ensemble Accuracy</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">98.3%</h3>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Training History (Accuracy)</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
                  <XAxis dataKey="epoch" stroke="#6b7280" className="dark:text-gray-400" />
                  <YAxis stroke="#6b7280" className="dark:text-gray-400" domain={['auto', 'auto']} />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                    itemStyle={{ color: '#111827' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="accuracy" name="Train Accuracy" stroke="#22c55e" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="val_accuracy" name="Val Accuracy" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Model Comparison</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={modelComparisons} margin={{ top: 5, right: 30, left: 0, bottom: 5 }} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
                  <XAxis type="number" domain={[90, 100]} stroke="#6b7280" className="dark:text-gray-400" />
                  <YAxis dataKey="name" type="category" width={120} stroke="#6b7280" className="dark:text-gray-400" />
                  <Tooltip
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                    itemStyle={{ color: '#111827' }}
                  />
                  <Bar dataKey="accuracy" name="Accuracy (%)" radius={[0, 4, 4, 0]}>
                    {modelComparisons.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={index === 2 ? '#22c55e' : (index === 0 ? '#3b82f6' : '#a855f7')} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
